"use client"

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { cn } from '../../../lib/utils'
import Container from '../../../components/ui/Container'
import { fetchTutorials, createTutorial, deleteTutorial } from '../../../components/admin/api'
import confirmWithToast from '../../../components/ui/confirmWithToast'
import { toast } from 'react-toastify'
import {
  PlusIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
  VideoCameraIcon,
  ArrowLeftIcon,
  ListBulletIcon,
  XMarkIcon
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

export default function TutorialsPage() {
  const router = useRouter()
  const [view, setView] = useState('list') // 'list' | 'create'
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  // Create State
  const [newItem, setNewItem] = useState({ title: '', slug: '', excerpt: '', content: '', videoUrl: '', steps: [], tags: [] })
  const [editorContent, setEditorContent] = useState('')
  const [stepsList, setStepsList] = useState(['']) // Array of strings for steps
  const [slugEdited, setSlugEdited] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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
    if (!await confirmWithToast('Delete this tutorial?')) return
    try {
      await deleteTutorial(slug)
      toast.success('Tutorial deleted')
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

  async function doCreate(e) {
    e.preventDefault()
    if (!newItem.videoUrl) {
      toast.error('Video URL is required')
      return
    }

    setIsSubmitting(true)
    try {
      const finalSlug = (newItem.slug && newItem.slug.trim()) || slugify(newItem.title || '') || `tutorial-${Date.now()}`
      const validSteps = stepsList.filter(s => s.trim())

      await createTutorial({ ...newItem, slug: finalSlug, content: editorContent, steps: validSteps })
      toast.success('Tutorial created successfully')

      setNewItem({ title: '', slug: '', excerpt: '', content: '', videoUrl: '', steps: [], tags: [] })
      setEditorContent('')
      setStepsList([''])
      setSlugEdited(false)
      setView('list')
      load()
    } catch (err) {
      toast.error(err.message || 'Create failed')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleStepChange = (index, value) => {
    const newSteps = [...stepsList]
    newSteps[index] = value
    setStepsList(newSteps)
  }

  const addStep = () => {
    setStepsList([...stepsList, ''])
  }

  const removeStep = (index) => {
    const newSteps = stepsList.filter((_, i) => i !== index)
    setStepsList(newSteps.length ? newSteps : [''])
  }

  const filteredItems = items.filter(i =>
    i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    i.slug.toLowerCase().includes(searchQuery.toLowerCase())
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
            <h1 className="text-xl font-bold text-gray-900">Create New Tutorial</h1>
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
              {isSubmitting ? 'Publishing...' : 'Publish Tutorial'}
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <input
                  placeholder="Enter tutorial title..."
                  className="w-full text-3xl font-bold border-none placeholder-gray-300 focus:ring-0 px-0 mb-4"
                  value={newItem.title}
                  onChange={(e) => {
                    const t = e.target.value
                    setNewItem((prev) => ({ ...prev, title: t, slug: slugEdited ? prev.slug : slugify(t) }))
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
                  value={newItem.excerpt}
                  onChange={(e) => setNewItem({ ...newItem, excerpt: e.target.value })}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Video URL */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Video Source</h3>
                <div className="space-y-3">
                  <div className="relative">
                    <VideoCameraIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      placeholder="YouTube Embed URL"
                      className="w-full pl-10 border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-coral-500 outline-none"
                      value={newItem.videoUrl}
                      onChange={(e) => setNewItem({ ...newItem, videoUrl: e.target.value })}
                    />
                  </div>
                  {newItem.videoUrl && (
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                      <iframe
                        src={newItem.videoUrl}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                  <p className="text-xs text-gray-500">
                    Use the embed URL format: <code className="bg-gray-100 px-1 rounded">https://www.youtube.com/embed/ID</code>
                  </p>
                </div>
              </div>

              {/* Steps */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Steps</h3>
                  <button onClick={addStep} className="text-xs text-coral-600 font-medium hover:text-coral-700 flex items-center gap-1">
                    <PlusIcon className="w-3 h-3" /> Add Step
                  </button>
                </div>
                <div className="space-y-3">
                  {stepsList.map((step, idx) => (
                    <div key={idx} className="flex gap-2">
                      <span className="flex-shrink-0 w-6 h-8 flex items-center justify-center text-gray-400 font-mono text-sm">{idx + 1}.</span>
                      <textarea
                        rows={2}
                        className="flex-1 border border-gray-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-coral-500 outline-none resize-none"
                        value={step}
                        onChange={(e) => handleStepChange(idx, e.target.value)}
                        placeholder={`Step ${idx + 1} description...`}
                      />
                      <button
                        onClick={() => removeStep(idx)}
                        className="flex-shrink-0 p-1 text-gray-400 hover:text-red-500 self-start mt-1"
                      >
                        <XMarkIcon className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slug */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">URL Slug</h3>
                <input
                  className="w-full border border-gray-200 rounded-lg p-2 text-sm text-gray-600 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-coral-500 transition-all"
                  value={newItem.slug}
                  onChange={(e) => { setNewItem({ ...newItem, slug: e.target.value }); setSlugEdited(true) }}
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
            <h1 className="text-3xl font-bold text-gray-900">Tutorials</h1>
            <p className="text-gray-500 mt-1">Manage video tutorials and guides</p>
          </div>
          <button
            onClick={() => setView('create')}
            className="flex items-center gap-2 px-5 py-2.5 bg-coral-500 text-white rounded-xl hover:bg-coral-600 transition-all shadow-sm hover:shadow-md font-medium"
          >
            <PlusIcon className="w-5 h-5" />
            Create Tutorial
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Toolbar */}
          <div className="p-4 border-b border-gray-100 flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                placeholder="Search tutorials..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-coral-500 focus:ring-2 focus:ring-coral-200 transition-all outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* List */}
          {loading ? (
            <div className="p-12 text-center text-gray-500">Loading tutorials...</div>
          ) : filteredItems.length === 0 ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <VideoCameraIcon className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">No tutorials found</h3>
              <p className="text-gray-500 mt-1">Get started by creating your first tutorial.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Tutorial</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Steps</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredItems.map((item) => (
                    <tr key={item.id} className="group hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-10 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200 flex items-center justify-center">
                            <VideoCameraIcon className="w-5 h-5 text-gray-400" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-coral-600 transition-colors">{item.title}</div>
                            <div className="text-xs text-gray-500 font-mono mt-0.5">{item.slug}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <ListBulletIcon className="w-4 h-4 text-gray-400" />
                          <span>{item.steps?.length || 0} steps</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(item.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => router.push(`/tutorials/${item.slug}`)}
                            className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <PencilSquareIcon className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(item.slug)}
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
