"use client"

import { useEffect, useState } from 'react'
import { cn } from '../../../lib/utils'
import Container from '../../../components/ui/Container'
import { fetchPackages, createPackage, deletePackage, fetchPackage, updatePackage, fetchFeatures, fetchPackageFeatures, upsertPackageFeature } from '../../../components/admin/api'
import { toast } from 'react-toastify'
import {
  PlusIcon,
  PencilSquareIcon,
  TrashIcon,
  XMarkIcon,
  CheckIcon,
  CurrencyDollarIcon,
  StarIcon,
  CubeIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

export default function PackagesPage() {
  const [packages, setPackages] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null) // If set, shows edit drawer
  const [isCreating, setIsCreating] = useState(false) // If true, shows create drawer
  const [allFeatures, setAllFeatures] = useState([])
  const [pkgFeatures, setPkgFeatures] = useState([])
  const [featureSearch, setFeatureSearch] = useState('')

  // Create form state
  const [newName, setNewName] = useState('')
  const [newSlug, setNewSlug] = useState('')

  useEffect(() => { load() }, [])

  useEffect(() => {
    // load all features for linking
    (async () => {
      try {
        const f = await fetchFeatures()
        setAllFeatures(f)
      } catch (e) { }
    })()
  }, [])

  async function load() {
    setLoading(true)
    try {
      const data = await fetchPackages()
      setPackages(data)
    } catch (err) {
      toast.error(err.message || 'Failed to load packages')
    } finally { setLoading(false) }
  }

  async function handleCreate(e) {
    e.preventDefault()
    try {
      await createPackage({ name: newName, slug: newSlug })
      setNewName(''); setNewSlug('')
      setIsCreating(false)
      toast.success('Package created')
      load()
    } catch (err) {
      toast.error('Failed to create package')
    }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this package?')) return
    try {
      await deletePackage(id)
      toast.success('Package deleted')
      load()
    } catch (err) {
      toast.error('Failed to delete package')
    }
  }

  async function openEdit(pkgId) {
    try {
      const data = await fetchPackage(pkgId)
      setSelected(data)
      setIsCreating(false)
      const linked = await fetchPackageFeatures(data.id)
      setPkgFeatures(linked)
    } catch (err) {
      toast.error(err.message || 'Failed to load package')
    }
  }

  async function savePackage() {
    if (!selected) return
    try {
      await updatePackage(selected.id, {
        name: selected.name,
        slug: selected.slug,
        monthly_price: selected.monthly_price,
        yearly_price: selected.yearly_price,
        is_popular: selected.is_popular
      })
      toast.success('Package updated')
      load()
      setSelected(null)
    } catch (e) {
      toast.error('Failed to update package')
    }
  }

  async function toggleFeature(feature) {
    if (!selected) return
    const existing = pkgFeatures.find(pf => pf.feature_id === feature.id)
    try {
      await upsertPackageFeature(selected.id, {
        feature_id: feature.id,
        included: existing ? (existing.included ? 0 : 1) : 1,
        feature_price: existing ? existing.feature_price : null,
        position: existing ? existing.position : (pkgFeatures.length + 1)
      })
      const linked = await fetchPackageFeatures(selected.id)
      setPkgFeatures(linked)
    } catch (e) { toast.error('Failed to update link') }
  }

  async function setFeaturePrice(featureId, price) {
    if (!selected) return
    try {
      await upsertPackageFeature(selected.id, { feature_id: featureId, feature_price: price, included: 1 })
      const linked = await fetchPackageFeatures(selected.id)
      setPkgFeatures(linked)
    } catch (e) { toast.error('Failed to set price') }
  }

  const filteredFeatures = allFeatures.filter(f =>
    f.name.toLowerCase().includes(featureSearch.toLowerCase()) ||
    f.description?.toLowerCase().includes(featureSearch.toLowerCase())
  )

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="flex-1 p-8">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Packages</h1>
              <p className="text-gray-500 mt-1">Manage pricing plans and features</p>
            </div>
            <button
              onClick={() => { setIsCreating(true); setSelected(null); }}
              className="flex items-center gap-2 px-5 py-2.5 bg-coral-500 text-white rounded-xl hover:bg-coral-600 transition-all shadow-sm hover:shadow-md font-medium"
            >
              <PlusIcon className="w-5 h-5" />
              Add Package
            </button>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-64 bg-gray-100 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : packages.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CubeIcon className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">No packages found</h3>
              <p className="text-gray-500 mt-1 mb-6">Create your first pricing package to get started.</p>
              <button
                onClick={() => setIsCreating(true)}
                className="px-5 py-2 bg-coral-500 text-white rounded-lg hover:bg-coral-600 transition-colors"
              >
                Create Package
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map(p => (
                <div key={p.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden group">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 bg-coral-50 rounded-xl flex items-center justify-center text-coral-600">
                        <CubeIcon className="w-6 h-6" />
                      </div>
                      {p.is_popular ? (
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                          <StarIcon className="w-3 h-3" /> Popular
                        </span>
                      ) : null}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-1">{p.name}</h3>
                    <p className="text-sm text-gray-500 font-mono mb-4">{p.slug}</p>

                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-3xl font-bold text-gray-900">
                        ${p.monthly_price || 0}
                      </span>
                      <span className="text-gray-500 text-sm">/mo</span>
                    </div>

                    <div className="flex gap-2 pt-4 border-t border-gray-50">
                      <button
                        onClick={() => openEdit(p.id)}
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                      >
                        <PencilSquareIcon className="w-4 h-4" /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="flex items-center justify-center p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </main>

      {/* Slide-over Drawer for Edit/Create */}
      {(selected || isCreating) && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => { setSelected(null); setIsCreating(false); }}
          />
          <aside className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto border-l border-gray-200 transform transition-transform duration-300 ease-in-out">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {isCreating ? 'Create Package' : 'Edit Package'}
                </h2>
                <button
                  onClick={() => { setSelected(null); setIsCreating(false); }}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <XMarkIcon className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {isCreating ? (
                <form onSubmit={handleCreate} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Package Name</label>
                    <input
                      placeholder="e.g. Starter Plan"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
                    <input
                      placeholder="e.g. starter-plan"
                      value={newSlug}
                      onChange={(e) => setNewSlug(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="pt-4">
                    <button className="w-full bg-coral-500 text-white py-3 rounded-xl font-bold hover:bg-coral-600 transition-colors shadow-lg shadow-coral-200">
                      Create Package
                    </button>
                  </div>
                </form>
              ) : selected && (
                <div className="space-y-8">
                  {/* Basic Info */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">Basic Info</h3>
                    <div className="grid gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Name</label>
                        <input
                          className="w-full border border-gray-200 rounded-lg p-2.5 focus:ring-2 focus:ring-coral-500 outline-none"
                          value={selected.name || ''}
                          onChange={(e) => setSelected({ ...selected, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Slug</label>
                        <input
                          className="w-full border border-gray-200 rounded-lg p-2.5 focus:ring-2 focus:ring-coral-500 outline-none"
                          value={selected.slug || ''}
                          onChange={(e) => setSelected({ ...selected, slug: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">Pricing</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Monthly ($)</label>
                        <div className="relative">
                          <CurrencyDollarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="number"
                            step="0.01"
                            className="w-full pl-9 border border-gray-200 rounded-lg p-2.5 focus:ring-2 focus:ring-coral-500 outline-none"
                            value={selected.monthly_price ?? ''}
                            onChange={(e) => setSelected({ ...selected, monthly_price: e.target.value ? Number(e.target.value) : null })}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-500 mb-1">Yearly ($)</label>
                        <div className="relative">
                          <CurrencyDollarIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="number"
                            step="0.01"
                            className="w-full pl-9 border border-gray-200 rounded-lg p-2.5 focus:ring-2 focus:ring-coral-500 outline-none"
                            value={selected.yearly_price ?? ''}
                            onChange={(e) => setSelected({ ...selected, yearly_price: e.target.value ? Number(e.target.value) : null })}
                          />
                        </div>
                      </div>
                    </div>
                    <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <input
                        type="checkbox"
                        className="w-5 h-5 text-coral-500 rounded focus:ring-coral-500"
                        checked={!!selected.is_popular}
                        onChange={(e) => setSelected({ ...selected, is_popular: e.target.checked })}
                      />
                      <span className="font-medium text-gray-700">Mark as "Most Popular"</span>
                    </label>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                      <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Features</h3>
                      <span className="text-xs text-gray-500">{pkgFeatures.filter(f => f.included).length} selected</span>
                    </div>

                    <div className="relative">
                      <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        placeholder="Search features..."
                        className="w-full pl-9 border border-gray-200 rounded-lg p-2 text-sm focus:ring-2 focus:ring-coral-500 outline-none"
                        value={featureSearch}
                        onChange={(e) => setFeatureSearch(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                      {filteredFeatures.map(f => {
                        const linked = pkgFeatures.find(pf => pf.feature_id === f.id)
                        const isIncluded = !!(linked && linked.included)

                        return (
                          <div
                            key={f.id}
                            className={cn(
                              "p-3 rounded-lg border transition-all",
                              isIncluded ? "bg-coral-50 border-coral-200" : "bg-white border-gray-100 hover:border-gray-300"
                            )}
                          >
                            <div className="flex items-start gap-3">
                              <div className="pt-0.5">
                                <input
                                  type="checkbox"
                                  checked={isIncluded}
                                  onChange={() => toggleFeature(f)}
                                  className="w-5 h-5 text-coral-500 rounded focus:ring-coral-500 cursor-pointer"
                                />
                              </div>
                              <div className="flex-1">
                                <div className={cn("font-medium text-sm", isIncluded ? "text-coral-900" : "text-gray-700")}>
                                  {f.name}
                                </div>
                                {f.description && (
                                  <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">{f.description}</div>
                                )}

                                {isIncluded && (
                                  <div className="mt-2 flex items-center gap-2">
                                    <span className="text-xs text-coral-700 font-medium">Extra Price:</span>
                                    <input
                                      type="number"
                                      step="0.01"
                                      placeholder="0.00"
                                      className="w-20 border border-coral-200 rounded px-2 py-1 text-xs focus:ring-1 focus:ring-coral-500 outline-none"
                                      value={linked ? (linked.feature_price ?? '') : ''}
                                      onChange={(e) => setFeaturePrice(f.id, e.target.value ? Number(e.target.value) : null)}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-gray-100 flex gap-3 sticky bottom-0 bg-white pb-4">
                    <button
                      className="flex-1 bg-coral-500 text-white py-3 rounded-xl font-bold hover:bg-coral-600 transition-colors shadow-lg shadow-coral-200"
                      onClick={savePackage}
                    >
                      Save Changes
                    </button>
                    <button
                      className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors"
                      onClick={() => setSelected(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </>
      )}
    </div>
  )
}
