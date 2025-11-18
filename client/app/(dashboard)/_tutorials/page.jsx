"use client"

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import Container from '../../../components/ui/Container'
import Section from '../../../components/ui/Section'
import { AdminSidebar } from '../../../components/admin/AdminSidebar'
import { fetchTutorials, createTutorial, deleteTutorial } from '../../../components/admin/api'
import confirmWithToast from '../../../components/ui/confirmWithToast'
import { toast } from 'react-toastify'

const BlogEditor = dynamic(() => import('../../../components/admin/BlogEditor'), {
  ssr: false,
  loading: () => <div className="border rounded-xl p-4 bg-white min-h-[200px] flex items-center justify-center text-gray-400">Loading editor...</div>
})

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

export default function TutorialsPage() {
  const router = useRouter()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const titleRef = useRef(null)
  const slugRef = useRef(null)
  const [newItem, setNewItem] = useState({ title: '', slug: '', excerpt: '', content: '', videoUrl: '', steps: [], tags: [] })
  const [editorContent, setEditorContent] = useState('')
  const [stepsText, setStepsText] = useState('')
  const [status, setStatus] = useState('')
  const [slugEdited, setSlugEdited] = useState(false)
  const stepsRef = useRef(null)

  useEffect(() => {
    const token = localStorage.getItem('rf_token')
    if (!token) { router.push('/admin'); return }
    load()
  }, [router])

  async function load() {
    setLoading(true)
    try {
      const data = await fetchTutorials()
      setItems(data)
    } catch (err) {
      toast.error(err.message || 'Failed to load tutorials')
    } finally { setLoading(false) }
  }

  async function handleDelete(slug) {
    let ok = true
    try { ok = await confirmWithToast('Delete this tutorial?') } catch(e) { ok = false }
    if (!ok) return
    try {
      await deleteTutorial(slug)
      toast.success('Tutorial deleted')
      load()
    } catch (err) { toast.error(err.message || 'Delete failed') }
  }

  async function handleImageUpload(file) {
    const formData = new FormData(); formData.append('file', file)
    const base = process.env.NEXT_PUBLIC_ADMIN_API || 'http://localhost:4000'
    const res = await fetch(`${base.replace(/\/$/, '')}/uploads`, { method: 'POST', body: formData })
    if (!res.ok) throw new Error('Upload failed')
    const j = await res.json(); return j.url
  }

  // no image for tutorials; steps are entered as newline-separated text

  async function doCreate(e) {
    e.preventDefault(); setStatus('')
    if (!newItem.videoUrl) { setStatus('Video URL is required'); return }
    try {
      const finalSlug = (newItem.slug && newItem.slug.trim()) || slugify(newItem.title || '') || `tutorial-${Date.now()}`
      const steps = stepsText.split('\n').map(l => l.trim()).filter(Boolean)
      await createTutorial({ ...newItem, slug: finalSlug, content: editorContent, steps })
      setStatus('Tutorial created')
      setNewItem({ title: '', slug: '', excerpt: '', content: '', videoUrl: '', steps: [], tags: [] })
      setEditorContent('')
      setStepsText('')
      setSlugEdited(false)
      load()
    } catch (err) { setStatus(err.message || 'Create failed') }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <Container>
          <Section>
            <h2 className="text-2xl font-bold mb-4">Tutorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Existing Tutorials</h3>
                {loading ? <div>Loading...</div> : (
                  <div className="space-y-3">
                    {items.map(i => (
                      <div key={i.id} className="bg-white p-3 rounded shadow flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-coral-600">{i.title}</div>
                          <div className="text-sm text-gray-500">{i.slug} • {new Date(i.date).toLocaleString()}</div>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => router.push(`/tutorials/${i.slug}`)} className="px-3 py-1 rounded bg-gray-100">Edit</button>
                          <button onClick={() => handleDelete(i.slug)} className="px-3 py-1 rounded bg-red-100 text-red-700">Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <h3 className="font-semibold mb-3">Create Tutorial</h3>
                <form onSubmit={doCreate} className="space-y-3">
                  <input ref={titleRef} placeholder="Title" value={newItem.title} onChange={(e)=>{ const t=e.target.value; setNewItem(prev => ({ ...prev, title: t, slug: slugEdited ? prev.slug : slugify(t) })) }} className="w-full border p-2 rounded" required />
                  <input ref={slugRef} placeholder="Slug" value={newItem.slug} onChange={(e)=>{ setNewItem({ ...newItem, slug: e.target.value }); setSlugEdited(true) }} className="w-full border p-2 rounded" required />
                  <input placeholder="Excerpt" value={newItem.excerpt} onChange={(e)=>setNewItem({ ...newItem, excerpt: e.target.value })} className="w-full border p-2 rounded" />
                  <BlogEditor value={editorContent} onChange={setEditorContent} onImageUpload={handleImageUpload} />

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Video URL <span className="text-gray-500">(YouTube embed URL)</span></label>
                    <input placeholder="https://www.youtube.com/embed/..." value={newItem.videoUrl} onChange={(e)=>setNewItem({...newItem, videoUrl: e.target.value})} className="w-full border p-2 rounded" />
                    <label className="block text-sm font-medium mt-2">Steps (one per line)</label>
                    <textarea ref={stepsRef} value={stepsText} onChange={(e)=>setStepsText(e.target.value)} className="w-full border p-2 rounded h-40" />
                  </div>

                  <div className="flex gap-3">
                    <button className="bg-coral-500 text-white px-5 py-2 rounded">Create</button>
                    <div className="text-sm text-coral-600">{status}</div>
                  </div>
                </form>
              </div>
            </div>
          </Section>
        </Container>
      </main>
    </div>
  )
}
