"use client"

import { useEffect, useState } from 'react'
import { AdminSidebar } from '../../../components/admin/AdminSidebar'
import Container from '../../../components/ui/Container'
import Section from '../../../components/ui/Section'
import { fetchFeatures, createFeature, deleteFeature } from '../../../components/admin/api'
import { toast } from 'react-toastify'

export default function FeaturesPage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')

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
    try {
      await createFeature({ name })
      setName('')
      load()
    } catch (err) {}
  }

  async function handleDelete(id) {
    if (!confirm('Delete this feature?')) return
    try {
      await deleteFeature(id)
      load()
    } catch (err) {}
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <Container>
          <Section>
            <h2 className="text-2xl font-bold mb-4">Features</h2>

            <div className="mb-4">
              <form onSubmit={handleCreate} className="flex gap-2">
                <input placeholder="Feature name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded" required />
                <button className="bg-coral-500 text-white px-3 py-1 rounded">Create</button>
              </form>
            </div>

            {loading ? <div>Loading...</div> : (
              <div className="space-y-2">
                {items.map(i => (
                  <div key={i.id} className="p-3 bg-white rounded flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-coral-600">{i.name}</div>
                    </div>
                    <div>
                      <button onClick={() => handleDelete(i.id)} className="px-3 py-1 rounded bg-red-100 text-red-700">Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </Section>
        </Container>
      </main>
    </div>
  )
}
