"use client"

import { useEffect, useState } from 'react'
import { AdminSidebar } from '../../../components/admin/AdminSidebar'
import Container from '../../../components/ui/Container'
import Section from '../../../components/ui/Section'
import { fetchPackages, createPackage, deletePackage, fetchPackage, updatePackage, fetchFeatures, fetchPackageFeatures, upsertPackageFeature } from '../../../components/admin/api'
import { toast } from 'react-toastify'

export default function PackagesPage() {
  const [packages, setPackages] = useState([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [slug, setSlug] = useState('')
  const [selected, setSelected] = useState(null)
  const [allFeatures, setAllFeatures] = useState([])
  const [pkgFeatures, setPkgFeatures] = useState([])

  useEffect(() => { load() }, [])

  useEffect(() => {
    // load all features for linking
    (async () => {
      try {
        const f = await fetchFeatures()
        setAllFeatures(f)
      } catch (e) {}
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
      await createPackage({ name, slug })
      setName(''); setSlug('')
      load()
    } catch (err) {}
  }

  async function handleDelete(id) {
    if (!confirm('Delete this package?')) return
    try {
      await deletePackage(id)
      load()
    } catch (err) {}
  }

  async function openEdit(pkgId) {
    try {
      const data = await fetchPackage(pkgId)
      setSelected(data)
      const linked = await fetchPackageFeatures(data.id)
      setPkgFeatures(linked)
    } catch (err) {
      toast.error(err.message || 'Failed to load package')
    }
  }

  async function savePackage() {
    if (!selected) return
    try {
      await updatePackage(selected.id, { name: selected.name, slug: selected.slug, monthly_price: selected.monthly_price, yearly_price: selected.yearly_price, is_popular: selected.is_popular })
      toast.success('Saved')
      load()
    } catch (e) {}
  }

  async function toggleFeature(feature) {
    if (!selected) return
    // determine if link exists
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

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <Container>
          <Section>
            <h2 className="text-2xl font-bold mb-4">Packages</h2>

            <div className="mb-4">
              <form onSubmit={handleCreate} className="flex gap-2">
                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded" required />
                <input placeholder="Slug" value={slug} onChange={(e) => setSlug(e.target.value)} className="border p-2 rounded" required />
                <button className="bg-coral-500 text-white px-3 py-1 rounded">Create</button>
              </form>
            </div>

            {loading ? <div>Loading...</div> : (
              <div className="space-y-2">
                {packages.map(p => (
                  <div key={p.id} className="p-3 bg-white rounded flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-coral-600">{p.name}</div>
                      <div className="text-sm text-gray-500">{p.slug}</div>
                    </div>
                    <div>
                      <button onClick={() => openEdit(p.id)} className="px-3 py-1 rounded bg-gray-100 mr-2">Edit</button>
                      <button onClick={() => handleDelete(p.id)} className="px-3 py-1 rounded bg-red-100 text-red-700">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </Section>
        </Container>
      </main>
      {selected && (
        <aside className="w-96 p-6 border-l bg-white">
          <h3 className="font-bold text-lg mb-3">Edit Package</h3>
          <div className="space-y-3">
            <input className="w-full border p-2 rounded" value={selected.name || ''} onChange={(e) => setSelected({...selected, name: e.target.value})} />
            <input className="w-full border p-2 rounded" value={selected.slug || ''} onChange={(e) => setSelected({...selected, slug: e.target.value})} />
            <div className="flex gap-2">
              <input type="number" step="0.01" placeholder="Monthly" className="w-1/2 border p-2 rounded" value={selected.monthly_price ?? ''} onChange={(e) => setSelected({...selected, monthly_price: e.target.value ? Number(e.target.value) : null})} />
              <input type="number" step="0.01" placeholder="Yearly" className="w-1/2 border p-2 rounded" value={selected.yearly_price ?? ''} onChange={(e) => setSelected({...selected, yearly_price: e.target.value ? Number(e.target.value) : null})} />
            </div>
            <div>
              <label className="inline-flex items-center gap-2"><input type="checkbox" checked={!!selected.is_popular} onChange={(e) => setSelected({...selected, is_popular: e.target.checked})} /> <span>Mark as popular</span></label>
            </div>
            <div className="flex gap-2">
              <button className="bg-coral-500 text-white px-3 py-1 rounded" onClick={savePackage}>Save</button>
              <button className="bg-gray-100 px-3 py-1 rounded" onClick={() => setSelected(null)}>Close</button>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold mb-2">Features</h4>
              <div className="space-y-2 max-h-60 overflow-auto">
                {allFeatures.map(f => {
                  const linked = pkgFeatures.find(pf => pf.feature_id === f.id)
                  return (
                    <div key={f.id} className="flex items-center justify-between p-2 border rounded">
                      <div className="flex items-center gap-3">
                        <input type="checkbox" checked={!!(linked && linked.included)} onChange={() => toggleFeature(f)} />
                        <div>
                          <div className="font-medium">{f.name}</div>
                          <div className="text-xs text-gray-500">{f.description}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="number" step="0.01" placeholder="Price" className="w-20 border p-1 rounded text-sm" value={linked ? (linked.feature_price ?? '') : ''} onChange={(e) => setFeaturePrice(f.id, e.target.value ? Number(e.target.value) : null)} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  )
}
