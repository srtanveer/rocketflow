"use client"

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { cn } from '../../../lib/utils'
import Container from '../../../components/ui/Container'
import Section from '../../../components/ui/Section'
import { AdminSidebar } from '../../../components/admin/AdminSidebar'
import { fetchPosts, deletePost } from '../../../components/admin/api'
import { toast } from 'react-toastify'
import confirmWithToast from '../../../components/ui/confirmWithToast'
import { createPost } from '../../../components/admin/api'

const BlogEditor = dynamic(() => import('../../../components/admin/BlogEditor'), {
  ssr: false,
  loading: () => <div className="border rounded-xl p-4 bg-white min-h-[200px] flex items-center justify-center text-gray-400">Loading editor...</div>
})

// Minimal Tabs implementation (stable at module scope)
function Tabs({ children }) {
  const panels = Array.isArray(children) ? children : [children]
  const [active, setActive] = useState(panels[0].props.name)

  // keyboard shortcuts: Ctrl/Cmd+1, Ctrl/Cmd+2 to switch tabs
  useEffect(() => {
    function onKey(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === '1') setActive(panels[0].props.name)
      if ((e.ctrlKey || e.metaKey) && e.key === '2' && panels[1]) setActive(panels[1].props.name)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div>
      <div className="flex gap-2 mb-4">
        {panels.map((p) => (
          // make header buttons unfocusable so they never steal focus from form inputs
          <button
            key={p.props.name}
            onClick={() => setActive(p.props.name)}
            className={cn('px-3 py-1 rounded', active === p.props.name ? 'bg-coral-500 text-white' : 'bg-gray-100')}
            type="button"
            tabIndex={-1}
            aria-pressed={active === p.props.name}
          >
            {p.props.name}
          </button>
        ))}
      </div>
      <div>
        {panels.map((p) => p.props.name === active ? p.props.children : null)}
      </div>
    </div>
  )
}

Tabs.Panel = function Panel({ children }) { return <>{children}</> }

// Small preview helper: remove a leading heading (to avoid duplicating title)
// and ensure images render shaped/contained for preview.
function processPreviewHtml(html = '', title = '') {
  if (!html) return ''
  let out = html
  // remove a leading heading (h1-h6) if present
  out = out.replace(/^\s*<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>\s*/i, '')

  // Add classes to images so they appear rounded and constrained in preview
  out = out.replace(/<img\b([^>]*)>/gi, (match, attrs) => {
    try {
      if (/\bclass=/.test(attrs)) {
        // append our classes to existing class attribute
        return '<img' + attrs.replace(/class=(['"])(.*?)\1/, (m, q, cls) => {
          // avoid duplicating
          const add = ' rounded-xl w-full mx-auto max-h-96 object-cover'
          if (cls.includes('rounded-xl') || cls.includes('w-full')) return `class=${q}${cls}${q}`
          return `class=${q}${cls}${add}${q}`
        }) + '>'
      }
      return `<img class="rounded-xl w-full mx-auto max-h-96 object-cover"${attrs}>`
    } catch (e) {
      return match
    }
  })

  return out
}

function slugify(text = '') {
  return text
    .toString()
    .normalize('NFKD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export default function PostsPage() {
  const router = useRouter()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const titleRef = useRef(null)
  const slugRef = useRef(null)
  const [newPost, setNewPost] = useState({ title: '', slug: '', excerpt: '', content: '', featuredImage: '', author: 'Admin', tags: [] })
  const [slugEdited, setSlugEdited] = useState(false)
  const [editorContent, setEditorContent] = useState('')
  const [statusCreate, setStatusCreate] = useState('')
  const [previewOpen, setPreviewOpen] = useState(false)
  const featuredInputRef = useRef()

  useEffect(() => {
    const token = localStorage.getItem('rf_token')
    if (!token) { router.push('/admin'); return }
    load()
  }, [router])

  async function load() {
    setLoading(true)
    setError('')
    try {
      const data = await fetchPosts()
      setPosts(data)
    } catch (err) {
      setError(err.message || 'Failed to load posts')
    } finally { setLoading(false) }
  }

  async function handleDelete(slug) {
    // prefer an in-app confirmation using window.confirm for simplicity;
    // this avoids the native alert showing up after deletion and allows toasts to be shown.
    let ok = true
    try {
      ok = await confirmWithToast('Delete this post?')
    } catch (e) {
      ok = false
    }
    if (!ok) return
    try {
      await deletePost(slug)
      toast.success('Post deleted')
      load()
    } catch (err) {
      const msg = (err && err.message) || 'Delete failed'
      if (msg.toLowerCase().includes('invalid token') || msg.toLowerCase().includes('missing authorization')) {
        localStorage.removeItem('rf_token')
        router.push('/admin')
        return
      }
      toast.error(msg)
    }
  }

  async function handleImageUpload(file) {
    const formData = new FormData()
    formData.append('file', file)
    const base = process.env.NEXT_PUBLIC_ADMIN_API || 'http://localhost:4000'
    const res = await fetch(`${base.replace(/\/$/, '')}/uploads`, { method: 'POST', body: formData })
    if (!res.ok) throw new Error('Upload failed')
    const data = await res.json()
    return data.url
  }

  async function handleFeaturedUploadFile(file) {
    try {
      const url = await handleImageUpload(file)
      setNewPost((p) => ({ ...p, featuredImage: url }))
      setStatusCreate('')
      return url
    } catch (err) {
      setStatusCreate('Featured image upload failed')
      throw err
    }
  }

  async function doCreate(e) {
    e.preventDefault()
    setStatusCreate('')
    // require featured image
    if (!newPost.featuredImage) {
      setStatusCreate('Featured image is required')
      return
    }
    try {
      const imgMatch = editorContent.match(/<img[^>]+src\s*=\s*"([^"]+)"/i)
      const featured = newPost.featuredImage || (imgMatch && imgMatch[1]) || ''

      // ensure we have a slug: prefer user-edited slug, otherwise derive from title
      const finalSlug = (newPost.slug && newPost.slug.trim()) || slugify(newPost.title || '') || `post-${Date.now()}`

      await createPost({ ...newPost, slug: finalSlug, content: editorContent, featuredImage: featured })
      setStatusCreate('Post created')
      setNewPost({ title: '', slug: '', excerpt: '', content: '', featuredImage: '', author: 'Admin', tags: [] })
      setSlugEdited(false)
      setEditorContent('')
      load()
    } catch (err) {
      setStatusCreate(err.message || 'Create failed')
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <Container>
          <Section>
            <h2 className="text-2xl font-bold mb-4">Posts</h2>

            <Tabs>
              <Tabs.Panel name="List">
                {loading ? (
                  <div>Loading...</div>
                ) : error ? (
                  <div className="text-red-600">{error}</div>
                ) : (
                  <div className="space-y-3">
                    {posts.map((p) => (
                      <div key={p.id} className="bg-white p-4 rounded shadow flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-coral-600">{p.title}</div>
                          <div className="text-sm text-gray-500">{p.slug} • {new Date(p.date).toLocaleString()}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button onClick={() => router.push(`/posts/${p.slug}`)} className="px-3 py-1 rounded bg-gray-100">Edit</button>
                          <button onClick={() => handleDelete(p.slug)} className="px-3 py-1 rounded bg-red-100 text-red-700">Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Tabs.Panel>

              <Tabs.Panel name="Create">
                <h3 className="font-semibold text-lg mb-4">Create New Post</h3>
                <form onSubmit={doCreate} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input ref={titleRef} placeholder="Title" className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-coral-500" value={newPost.title} onChange={(e) => {
                      const t = e.target.value
                      setNewPost((prev) => ({ ...prev, title: t, slug: slugEdited ? prev.slug : slugify(t) }))
                    }} required onKeyDown={(e) => {
                      if (e.key === 'Tab' && !e.shiftKey) {
                        e.preventDefault()
                        slugRef.current && slugRef.current.focus()
                      }
                    }} />
                    <input ref={slugRef} placeholder="Slug" className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-coral-500" value={newPost.slug} onChange={(e) => { setNewPost({ ...newPost, slug: e.target.value }); setSlugEdited(true) }} required />
                  </div>
                  <input placeholder="Excerpt" className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-coral-500" value={newPost.excerpt} onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })} />
                  <BlogEditor value={editorContent} onChange={setEditorContent} onImageUpload={handleImageUpload} />
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Featured image <span className="text-red-600">*</span></label>
                    <div className="flex items-center gap-4">
                      <div className="w-40 h-24 bg-gray-100 rounded overflow-hidden flex items-center justify-center border">
                        {newPost.featuredImage ? (
                          <img src={newPost.featuredImage} alt="featured" className="w-full h-full object-cover" />
                        ) : (
                          <div className="text-sm text-gray-500">No image</div>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                          <button type="button" onClick={() => featuredInputRef.current.click()} className="bg-coral-500 text-white px-3 py-1 rounded text-sm">Upload featured image</button>
                          <button type="button" onClick={() => setNewPost({ ...newPost, featuredImage: '' })} className="bg-gray-100 px-3 py-1 rounded text-sm">Remove</button>
                        </div>
                        <div className="text-xs text-gray-500">Recommended: 1200x700px. Featured image is required.</div>
                      </div>
                    </div>
                    <input type="file" accept="image/*" ref={featuredInputRef} style={{ display: 'none' }} onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFeaturedUploadFile(f) }} />
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-coral-500 text-white px-5 py-2 rounded font-semibold shadow hover:bg-coral-600 transition">Create Post</button>
                    <button type="button" onClick={() => setPreviewOpen(!previewOpen)} className="bg-gray-100 text-gray-800 px-4 py-2 rounded">Preview</button>
                  </div>
                </form>
                {statusCreate && <div className="mt-4 text-sm text-coral-600">{statusCreate}</div>}
                {previewOpen && (
                  <div className="mt-6 p-4 border rounded bg-gray-50 overflow-hidden">
                    <h4 className="text-xl font-semibold">Preview: {newPost.title || 'Untitled'}</h4>
                    <p className="text-sm text-gray-600 mb-3">{newPost.excerpt}</p>
                    <div className="prose max-w-full" dangerouslySetInnerHTML={{ __html: processPreviewHtml(editorContent, newPost.title) }} />
                  </div>
                )}
              </Tabs.Panel>
            </Tabs>
          </Section>
        </Container>
      </main>
    </div>
  )
}
