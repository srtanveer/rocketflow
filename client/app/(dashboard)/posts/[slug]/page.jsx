"use client"

import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { cn } from '../../../../lib/utils'
import { fetchPost, updatePost } from '../../../../components/admin/api'
import { toast } from 'react-toastify'
import { ArrowLeftIcon, PhotoIcon } from '@heroicons/react/24/outline'

const BlogEditor = dynamic(() => import('../../../../components/admin/BlogEditor'), {
  ssr: false,
  loading: () => <div className="border rounded-xl p-8 bg-gray-50 min-h-[400px] flex items-center justify-center text-gray-400 animate-pulse">Loading editor...</div>
})

export default function EditPostPage({ params }) {
  // Next.js may pass params as a Promise — unwrap with React.use()
  const { slug } = React.use(params)
  const router = useRouter()
  const [post, setPost] = useState(null)
  const [editorContent, setEditorContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const featuredInputRef = useRef()

  useEffect(() => {
    const token = localStorage.getItem('rf_token')
    if (!token) { router.push('/admin'); return }
    if (!slug) {
      router.push('/posts')
      return
    }
    load()
  }, [router, slug])

  async function load() {
    try {
      const data = await fetchPost(slug)
      setPost(data)
      setEditorContent(data.content)
    } catch (err) {
      const msg = err && err.message ? err.message : ''
      toast.error(msg || 'Failed to load post')
      if (msg.toLowerCase().includes('not found') || msg.toLowerCase().includes('404')) {
        router.push('/posts')
      }
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
      setPost((p) => ({ ...p, featuredImage: url }))
      return url
    } catch (err) {
      toast.error('Featured image upload failed')
    }
  }

  async function handleSave(e) {
    e.preventDefault()
    if (!post.featuredImage) {
      toast.error('Featured image is required')
      return
    }

    setIsSubmitting(true)
    try {
      const updated = { ...post, content: editorContent }
      await updatePost(slug, updated)
      toast.success('Post updated successfully')
      router.push('/posts')
    } catch (err) {
      toast.error(err.message || 'Update failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!post) return (
    <div className="flex-1 p-8 flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-coral-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-500">Loading post...</p>
      </div>
    </div>
  )

  return (
    <main className="flex-1 bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push('/posts')} className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors">
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">Edit Post</h1>
        </div>
        <div className="flex gap-3">
          <button onClick={() => router.push('/posts')} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors">
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-2 bg-coral-500 text-white rounded-lg hover:bg-coral-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            {isSubmitting ? 'Saving...' : 'Save Changes'}
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
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
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
                value={post.excerpt}
                onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
              />
              <p className="text-xs text-gray-500 mt-2 text-right">{post.excerpt?.length || 0} characters</p>
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
                  post.featuredImage && "border-none"
                )}
              >
                {post.featuredImage ? (
                  <>
                    <img src={post.featuredImage} alt="Featured" className="w-full h-full object-cover" />
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
                value={post.slug}
                onChange={(e) => setPost({ ...post, slug: e.target.value })}
              />
            </div>

            {/* Author */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Author</h3>
              <input
                className="w-full border border-gray-200 rounded-lg p-2 text-sm"
                value={post.author || ''}
                onChange={(e) => setPost({ ...post, author: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
