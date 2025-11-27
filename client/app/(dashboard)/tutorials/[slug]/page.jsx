"use client"

import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { fetchTutorial, updateTutorial } from '../../../../components/admin/api'
import { ArrowLeftIcon, PhotoIcon, FilmIcon, ListBulletIcon } from '@heroicons/react/24/outline'
import { toast } from 'react-toastify'

const BlogEditor = dynamic(() => import('../../../../components/admin/BlogEditor'), {
  ssr: false,
  loading: () => <div className="border rounded-xl p-8 bg-gray-50 flex items-center justify-center text-gray-400 animate-pulse">Loading editor...</div>
})

export default function EditTutorialPage({ params }) {
  const { slug } = React.use(params)
  const router = useRouter()
  const [item, setItem] = useState(null)
  const [editorContent, setEditorContent] = useState('')
  const [stepsText, setStepsText] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('rf_token')
    if (!token) { router.push('/admin'); return }
    if (!slug) { router.push('/tutorials'); return }
    load()
  }, [router, slug])

  async function load() {
    try {
      const data = await fetchTutorial(slug)
      setItem(data)
      setEditorContent(data.content)
      setStepsText((data.steps || []).join('\n'))
    } catch (err) {
      toast.error(err.message || 'Failed to load tutorial')
      const msg = (err && err.message) || ''
      if (msg.toLowerCase().includes('not found') || msg.toLowerCase().includes('404')) {
        router.push('/tutorials')
        return
      }
    } finally {
      setLoading(false)
    }
  }

  async function handleImageUpload(file) {
    const formData = new FormData(); formData.append('file', file)
    const base = process.env.NEXT_PUBLIC_ADMIN_API || 'http://localhost:4000'
    const res = await fetch(`${base.replace(/\/$/, '')}/uploads`, { method: 'POST', body: formData })
    if (!res.ok) throw new Error('Upload failed')
    const j = await res.json(); return j.url
  }

  async function handleSave(e) {
    e.preventDefault()
    if (!item.videoUrl) { toast.error('Video URL is required'); return }

    setSaving(true)
    try {
      const steps = stepsText.split('\n').map(l => l.trim()).filter(Boolean)
      const updated = { ...item, content: editorContent, steps }
      await updateTutorial(slug, updated)
      toast.success('Tutorial updated successfully')
      router.push('/tutorials')
    } catch (err) {
      toast.error(err.message || 'Update failed')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-coral-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading tutorial...</p>
        </div>
      </div>
    )
  }

  if (!item) return null

  return (
    <div className="flex-1 p-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => router.push('/tutorials')}
            className="p-2 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-gray-200 hover:shadow-sm"
          >
            <ArrowLeftIcon className="w-5 h-5 text-gray-500" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Edit Tutorial</h1>
            <p className="text-gray-500 mt-1">Update tutorial content and details</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <form onSubmit={handleSave} className="p-8 space-y-8">
            {/* Basic Info Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">Basic Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    value={item.title}
                    onChange={(e) => setItem({ ...item, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none transition-all"
                    placeholder="Tutorial Title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
                  <input
                    value={item.slug}
                    onChange={(e) => setItem({ ...item, slug: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none transition-all bg-gray-50"
                    placeholder="tutorial-slug"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                <textarea
                  value={item.excerpt}
                  onChange={(e) => setItem({ ...item, excerpt: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none transition-all min-h-[80px]"
                  placeholder="Brief description of the tutorial..."
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">Content</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Main Content</label>
                <div className="prose-editor-wrapper border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-coral-500 transition-all">
                  <BlogEditor value={editorContent} onChange={setEditorContent} onImageUpload={handleImageUpload} />
                </div>
              </div>
            </div>

            {/* Media & Steps Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-2">Media & Steps</h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <FilmIcon className="w-4 h-4" /> Video URL
                </label>
                <input
                  value={item.videoUrl || ''}
                  onChange={(e) => setItem({ ...item, videoUrl: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none transition-all"
                  placeholder="https://www.youtube.com/embed/..."
                />
                <p className="text-xs text-gray-500 mt-1 ml-1">Must be an embeddable URL (e.g. YouTube Embed)</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <ListBulletIcon className="w-4 h-4" /> Steps
                </label>
                <textarea
                  value={stepsText}
                  onChange={(e) => setStepsText(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none transition-all min-h-[200px] font-mono text-sm"
                  placeholder="Step 1: Do this&#10;Step 2: Do that&#10;Step 3: Finish"
                />
                <p className="text-xs text-gray-500 mt-1 ml-1">Enter each step on a new line.</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-100">
              <button
                type="button"
                onClick={() => router.push('/tutorials')}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2.5 bg-coral-500 text-white rounded-xl hover:bg-coral-600 transition-colors font-medium shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {saving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Saving...
                  </>
                ) : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
