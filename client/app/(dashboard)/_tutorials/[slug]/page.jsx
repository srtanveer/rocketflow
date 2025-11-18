"use client"

import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import Container from '../../../../components/ui/Container'
import Section from '../../../../components/ui/Section'
import { AdminSidebar } from '../../../../components/admin/AdminSidebar'
import { fetchTutorial, updateTutorial } from '../../../../components/admin/api'

const BlogEditor = dynamic(() => import('../../../../components/admin/BlogEditor'), {
  ssr: false,
  loading: () => <div className="border rounded-xl p-4 bg-white min-h-[200px] flex items-center justify-center text-gray-400">Loading editor...</div>
})

export default function EditTutorialPage({ params }) {
  // Next.js may pass params as a Promise — unwrap with React.use()
  const { slug } = React.use(params)
  const router = useRouter()
  const [item, setItem] = useState(null)
  const [editorContent, setEditorContent] = useState('')
  const [stepsText, setStepsText] = useState('')
  const [status, setStatus] = useState('')
  const featuredInputRef = useRef()

  useEffect(() => {
    const token = localStorage.getItem('rf_token')
    if (!token) { router.push('/admin'); return }
    if (!slug) { router.push('/posts'); return }
    load()
  }, [router])

  async function load() {
    try {
      const data = await fetchTutorial(slug)
      setItem(data)
      setEditorContent(data.content)
      setStepsText((data.steps || []).join('\n'))
    } catch (err) {
      setStatus(err.message || 'Failed to load tutorial')
      const msg = (err && err.message) || ''
      if (msg.toLowerCase().includes('not found') || msg.toLowerCase().includes('404')) {
        router.push('/posts')
        return
      }
    }
  }

  // tutorials use videoUrl and steps instead of a featured image

  async function handleImageUpload(file) {
    const formData = new FormData(); formData.append('file', file)
    const base = process.env.NEXT_PUBLIC_ADMIN_API || 'http://localhost:4000'
    const res = await fetch(`${base.replace(/\/$/, '')}/uploads`, { method: 'POST', body: formData })
    if (!res.ok) throw new Error('Upload failed')
    const j = await res.json(); return j.url
  }

  async function handleSave(e) {
    e.preventDefault()
    if (!item.videoUrl) { setStatus('Video URL is required'); return }
    try {
      const steps = stepsText.split('\n').map(l => l.trim()).filter(Boolean)
      const updated = { ...item, content: editorContent, steps }
      await updateTutorial(slug, updated)
      router.push('/tutorials')
    } catch (err) { setStatus(err.message || 'Update failed') }
  }

  if (!item) return (<div className="flex min-h-screen"><AdminSidebar /><main className="flex-1 p-8">Loading...</main></div>)

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <Container>
          <Section>
            <h2 className="text-2xl font-bold mb-4">Edit Tutorial</h2>
            <form onSubmit={handleSave} className="space-y-4">
              <input value={item.title} onChange={(e) => setItem({ ...item, title: e.target.value })} className="w-full border p-2 rounded" />
              <input value={item.slug} onChange={(e) => setItem({ ...item, slug: e.target.value })} className="w-full border p-2 rounded" />
              <input value={item.excerpt} onChange={(e) => setItem({ ...item, excerpt: e.target.value })} className="w-full border p-2 rounded" />

              <BlogEditor value={editorContent} onChange={setEditorContent} onImageUpload={handleImageUpload} />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Video URL <span className="text-gray-500">(embed)</span></label>
                <input value={item.videoUrl || ''} onChange={(e) => setItem({ ...item, videoUrl: e.target.value })} className="w-full border p-2 rounded" />
                <label className="block text-sm font-medium mt-2">Steps (one per line)</label>
                <textarea value={stepsText} onChange={(e) => setStepsText(e.target.value)} className="w-full border p-2 rounded h-40" />
              </div>

              <div className="flex gap-2">
                <button className="bg-coral-500 text-white px-4 py-2 rounded">Save</button>
                <button type="button" onClick={() => router.push('/tutorials')} className="bg-gray-100 px-4 py-2 rounded">Cancel</button>
              </div>
            </form>
            {status && <div className="mt-3 text-red-600">{status}</div>}
          </Section>
        </Container>
      </main>
    </div>
  )
}
