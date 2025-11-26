"use client"

import { useEffect, useState } from 'react'
import { cn } from '../../../lib/utils'
import Container from '../../../components/ui/Container'
import { fetchFeatures, createFeature, deleteFeature } from '../../../components/admin/api'
import { toast } from 'react-toastify'
import {
  PlusIcon,
  TrashIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  CubeTransparentIcon
} from '@heroicons/react/24/outline'

export default function FeaturesPage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [isCreating, setIsCreating] = useState(false)

  // Form State
  const [newName, setNewName] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => { load() }, [])

  async function load() {
    setLoading(true)
    try {
      const data = await fetchFeatures()
      setItems(data)
    } catch (err) {
      toast.error(err.message || 'Failed to load features')
    } finally { setLoading(false) }
  }

  async function handleCreate(e) {
    e.preventDefault()
    if (!newName.trim()) {
      toast.error('Feature name is required')
      return
    }

    setIsSubmitting(true)
    try {
      await createFeature({
        name: newName,
        description: newDescription
      })
      setNewName('')
      setNewDescription('')
      setIsCreating(false)
      load()
    } catch (err) {
      // Error handled in api.js
    } finally {
      setIsSubmitting(false)
    }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this feature? This might affect packages using it.')) return
    try {
      await deleteFeature(id)
      load()
    } catch (err) { }
  }

  const filteredItems = items.filter(i =>
    i.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (i.description && i.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="flex-1 p-8">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Features</h1>
              <p className="text-gray-500 mt-1">Manage global features available for pricing plans</p>
            </div>
            <button
              onClick={() => setIsCreating(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-coral-500 text-white rounded-xl hover:bg-coral-600 transition-all shadow-sm hover:shadow-md font-medium"
            >
              <PlusIcon className="w-5 h-5" />
              Add Feature
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
            <div className="p-4 border-b border-gray-100">
              <div className="relative max-w-md">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  placeholder="Search features..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-coral-500 focus:ring-2 focus:ring-coral-200 transition-all outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-32 bg-gray-100 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <SparklesIcon className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">No features found</h3>
              <p className="text-gray-500 mt-1 mb-6">Create features to add them to your pricing packages.</p>
              <button
                onClick={() => setIsCreating(true)}
                className="px-5 py-2 bg-coral-500 text-white rounded-lg hover:bg-coral-600 transition-colors"
              >
                Create Feature
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(item => (
                <div key={item.id} className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-5 flex items-start gap-4">
                  <div className="w-10 h-10 bg-coral-50 rounded-xl flex items-center justify-center text-coral-600 flex-shrink-0">
                    <CubeTransparentIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 truncate">{item.name}</h3>
                    {item.description && (
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.description}</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 text-gray-300 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                    title="Delete Feature"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </Container>
      </main>

      {/* Slide-over Drawer */}
      {isCreating && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setIsCreating(false)}
          />
          <aside className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto border-l border-gray-200 transform transition-transform duration-300 ease-in-out">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Create Feature</h2>
                <button
                  onClick={() => setIsCreating(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              <form onSubmit={handleCreate} className="space-y-6 flex-1">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Feature Name</label>
                  <input
                    placeholder="e.g. 24/7 Support"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none transition-all"
                    required
                    autoFocus
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <textarea
                    placeholder="Briefly describe this feature..."
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none transition-all min-h-[100px]"
                  />
                </div>

                <div className="pt-4 mt-auto">
                  <button
                    disabled={isSubmitting}
                    className="w-full bg-coral-500 text-white py-3 rounded-xl font-bold hover:bg-coral-600 transition-colors shadow-lg shadow-coral-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Creating...' : 'Create Feature'}
                  </button>
                </div>
              </form>
            </div>
          </aside>
        </>
      )}
    </div>
  )
}
