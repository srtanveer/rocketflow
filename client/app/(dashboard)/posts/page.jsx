"use client"

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { cn } from '../../../lib/utils'
import Container from '../../../components/ui/Container'
import Section from '../../../components/ui/Section'
import { fetchPosts, deletePost, createPost } from '../../../components/admin/api'
import { toast } from 'react-toastify'
import confirmWithToast from '../../../components/ui/confirmWithToast'
import {
  PlusIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
  PhotoIcon,
  ArrowLeftIcon,
  EyeIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const BlogEditor = dynamic(() => import('../../../components/admin/BlogEditor'), {
  ssr: false,
  loading: () => <div className="border rounded-xl p-8 bg-gray-50 min-h-[400px] flex items-center justify-center text-gray-400 animate-pulse">Loading editor...</div>
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

export default function PostsPage() {
  const router = useRouter()
  const [view, setView] = useState('list') // 'list' | 'create'
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  // Create State
  const [newPost, setNewPost] = useState({ title: '', slug: '', excerpt: '', content: '', featuredImage: '', author: 'Admin', tags: [] })
  const [editorContent, setEditorContent] = useState('')
  const [slugEdited, setSlugEdited] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const featuredInputRef = useRef()

  useEffect(() => {
    const token = localStorage.getItem('rf_token')
    if (!token) { router.push('/admin'); return }
    load()
  }, [router])

  async function load() {
    setLoading(true)
    try {
      const data = await fetchPosts()
      setPosts(data)
    } catch (err) {
      toast.error(err.message || 'Failed to load posts')
    } finally { setLoading(false) }
  }

  async function handleDelete(slug) {
    if (!await confirmWithToast('Delete this post?')) return
    try {
      await deletePost(slug)
      toast.success('Post deleted')
      load()
    } catch (err) {
      toast.error(err.message || 'Delete failed')
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
      return url
    } catch (err) {
      toast.error('Featured image upload failed')
    }
  }

  async function doCreate(e) {
    e.preventDefault()
    if (!newPost.featuredImage) {
      toast.error('Featured image is required')
      return
    }

    setIsSubmitting(true)
    try {
      const finalSlug = (newPost.slug && newPost.slug.trim()) || slugify(newPost.title || '') || `post-${Date.now()}`
      await createPost({ ...newPost, slug: finalSlug, content: editorContent })
      toast.success('Post created successfully')
      setNewPost({ title: '', slug: '', excerpt: '', content: '', featuredImage: '', author: 'Admin', tags: [] })
      setEditorContent('')
      setSlugEdited(false)
      setView('list')
      load()
    } catch (err) {
      toast.error(err.message || 'Create failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  const filteredPosts = posts.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.slug.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (view === 'create') {
    return (
      <main className="flex-1 bg-gray-50 min-h-screen pb-20">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <button onClick={() => setView('list')} className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors">
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-bold text-gray-900">Create New Post</h1>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setView('list')} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors">
              Cancel
            </button>
            <button
              onClick={doCreate}
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-2 bg-coral-500 text-white rounded-lg hover:bg-coral-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              {isSubmitting ? 'Publishing...' : 'Publish Post'}
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <input
                  placeholder="Enter post title..."
                  className="w-full text-3xl font-bold border-none placeholder-gray-300 focus:ring-0 px-0 mb-4"
                  value={newPost.title}
                  onChange={(e) => {
                    const t = e.target.value
                    setNewPost((prev) => ({ ...prev, title: t, slug: slugEdited ? prev.slug : slugify(t) }))
                  }}
                  autoFocus
                />
                <div className="prose max-w-none">
                  <BlogEditor value={editorContent} onChange={setEditorContent} onImageUpload={handleImageUpload} />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Excerpt</h3>
                <textarea
                  placeholder="Write a short excerpt..."
                  className="w-full border border-gray-200 rounded-lg p-4 focus:ring-2 focus:ring-coral-500 focus:border-transparent min-h-[100px]"
                  value={newPost.excerpt}
                  onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                />
                <p className="text-xs text-gray-500 mt-2 text-right">{newPost.excerpt.length} characters</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Featured Image */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Featured Image</h3>
                <div
                  onClick={() => featuredInputRef.current.click()}
                  className={cn(
                    "relative aspect-video rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-coral-500 hover:bg-coral-50 transition-all overflow-hidden group",
                    newPost.featuredImage && "border-none"
                  )}
                >
                  {newPost.featuredImage ? (
                    <>
                      <img src={newPost.featuredImage} alt="Featured" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white font-medium">Change Image</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <PhotoIcon className="w-8 h-8 text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">Click to upload</span>
                    </>
                  )}
                </div>
                <input type="file" accept="image/*" ref={featuredInputRef} className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFeaturedUploadFile(f) }} />
              </div>

              {/* Slug */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">URL Slug</h3>
                <input
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm text-gray-600 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-coral-500 transition-all"
                  value={newPost.slug}
                  onChange={(e) => { setNewPost({ ...newPost, slug: e.target.value }); setSlugEdited(true) }}
                />
              </div>

              {/* Author */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Author</h3>
                <input
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm"
                  value={newPost.author}
                  onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="flex-1 p-8 bg-gray-50 min-h-screen">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Posts</h1>
            <p className="text-gray-500 mt-1">Manage your blog content</p>
          </div>
          <button
            onClick={() => setView('create')}
            className="flex items-center gap-2 px-5 py-2.5 bg-coral-500 text-white rounded-xl hover:bg-coral-600 transition-all shadow-sm hover:shadow-md font-medium"
          >
            <PlusIcon className="w-5 h-5" />
            Create Post
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Toolbar */}
          <div className="p-4 border-b border-gray-100 flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                placeholder="Search posts..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-coral-500 focus:ring-2 focus:ring-coral-200 transition-all outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* List */}
          {loading ? (
            <div className="p-12 text-center text-gray-500">Loading posts...</div>
          ) : filteredPosts.length === 0 ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <PencilSquareIcon className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">No posts found</h3>
              <p className="text-gray-500 mt-1">Get started by creating your first post.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Post</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Author</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredPosts.map((post) => (
                    <tr key={post.id} className="group hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                            {post.featuredImage ? (
                              <img src={post.featuredImage} alt="" className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-300">
                                <PhotoIcon className="w-6 h-6" />
                              </div>
                            )}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-coral-600 transition-colors">{post.title}</div>
                            <div className="text-xs text-gray-500 font-mono mt-0.5">{post.slug}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                            {post.author?.charAt(0) || 'A'}
                          </div>
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => router.push(`/posts/${post.slug}`)}
                            className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <PencilSquareIcon className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(post.slug)}
                            className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <TrashIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Container>
    </main>
  )
}
