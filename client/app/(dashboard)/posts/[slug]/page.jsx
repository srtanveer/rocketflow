"use client"

import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import dynamic from 'next/dynamic'
import Container from '../../../../components/ui/Container'
import Section from '../../../../components/ui/Section'
import { AdminSidebar } from '../../../../components/admin/AdminSidebar'
import { fetchPost, updatePost } from '../../../../components/admin/api'

const BlogEditor = dynamic(() => import('../../../../components/admin/BlogEditor'), {
  ssr: false,
  loading: () => <div className="border rounded-xl p-4 bg-white min-h-[200px] flex items-center justify-center text-gray-400">Loading editor...</div>
})

export default function EditPostPage({ params }) {
  // Next.js may pass params as a Promise — unwrap with React.use()
  const { slug } = React.use(params)
  const router = useRouter()
  const [post, setPost] = useState(null)
  const [editorContent, setEditorContent] = useState('')
  const [status, setStatus] = useState('')
  const featuredInputRef = useRef()

  useEffect(() => {
    const token = localStorage.getItem('rf_token')
    if (!token) { router.push('/admin'); return }
    // don't attempt to load if slug is not provided
    if (!slug) {
      router.push('/posts')
      return
    }
    load()
  }, [router])

  async function load() {
    try {
      const data = await fetchPost(slug)
      setPost(data)
      setEditorContent(data.content)
    } catch (err) {
      const msg = err && err.message ? err.message : ''
      setStatus(msg || 'Failed to load post')
      // if the API returned not found, redirect to posts list
      if (msg.toLowerCase().includes('not found') || msg.toLowerCase().includes('404')) {
        router.push('/posts')
        return
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

  // Upload a featured image (re-uses the same upload endpoint) and set on the post state
  async function handleFeaturedUploadFile(file) {
    try {
      const url = await handleImageUpload(file)
      setPost((p) => ({ ...p, featuredImage: url }))
      setStatus('')
      return url
    } catch (err) {
      setStatus('Featured image upload failed')
      throw err
    }
  }

  async function handleSave(e) {
    e.preventDefault()
    // require featured image
    if (!post.featuredImage) {
      setStatus('Featured image is required')
      return
    }
    try {
      const updated = { ...post, content: editorContent }
      await updatePost(slug, updated)
      router.push('/posts')
    } catch (err) {
      setStatus(err.message || 'Update failed')
    }
  }

  if (!post) return (
    <div className="flex min-h-screen"><AdminSidebar /><main className="flex-1 p-8">Loading...</main></div>
  )

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <Container>
          <Section>
            <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
            <form onSubmit={handleSave} className="space-y-4">
              <input value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} className="w-full border p-2 rounded" />
              <input value={post.slug} onChange={(e) => setPost({ ...post, slug: e.target.value })} className="w-full border p-2 rounded" />
              <input value={post.excerpt} onChange={(e) => setPost({ ...post, excerpt: e.target.value })} className="w-full border p-2 rounded" />

              <BlogEditor value={editorContent} onChange={setEditorContent} onImageUpload={handleImageUpload} />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Featured image <span className="text-red-600">*</span></label>
                <div className="flex items-center gap-4">
                  <div className="w-40 h-24 bg-gray-100 rounded overflow-hidden flex items-center justify-center border">
                    {post.featuredImage ? (
                      // use a simple img tag so Next Image doesn't try to optimize external urls during edit
                      <img src={post.featuredImage} alt="featured" className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-sm text-gray-500">No image</div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <button type="button" onClick={() => featuredInputRef.current.click()} className="bg-coral-500 text-white px-3 py-1 rounded text-sm">Upload featured image</button>
                      <button type="button" onClick={() => setPost({ ...post, featuredImage: '' })} className="bg-gray-100 px-3 py-1 rounded text-sm">Remove</button>
                    </div>
                    <div className="text-xs text-gray-500">Recommended: 1200x700px. Featured image is required.</div>
                  </div>
                </div>
                <input type="file" accept="image/*" ref={featuredInputRef} style={{ display: 'none' }} onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFeaturedUploadFile(f) }} />
              </div>

              <div className="flex gap-2">
                <button className="bg-coral-500 text-white px-4 py-2 rounded">Save</button>
                <button type="button" onClick={() => router.push('/posts')} className="bg-gray-100 px-4 py-2 rounded">Cancel</button>
              </div>
            </form>
            {status && <div className="mt-3 text-red-600">{status}</div>}
          </Section>
        </Container>
      </main>
    </div>
  )
}
