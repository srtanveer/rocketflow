'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
    PlusIcon,
    PencilSquareIcon,
    TrashIcon,
    XMarkIcon,
    ListBulletIcon,
    MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { toast } from 'react-toastify'

export default function FeaturesPage() {
    const router = useRouter()
    const [features, setFeatures] = useState([])
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [editingFeature, setEditingFeature] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        icon: ''
    })

    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

    const getAuthToken = () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('rf_token') || localStorage.getItem('token')
        }
        return null
    }

    const fetchFeatures = async () => {
        try {
            const token = getAuthToken()
            if (!token) {
                router.push('/admin')
                return
            }

            const response = await fetch(`${API_URL}/api/admin/pricing/features`, {
                headers: { 'Authorization': `Bearer ${token}` }
            })

            if (response.status === 401) {
                router.push('/admin')
                return
            }

            if (!response.ok) throw new Error('Failed to fetch features')

            const data = await response.json()
            setFeatures(data.features)
            setLoading(false)
        } catch (err) {
            console.error('Error fetching features:', err)
            toast.error(err.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchFeatures()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = getAuthToken()

        try {
            const url = editingFeature
                ? `${API_URL}/api/admin/pricing/features/${editingFeature.id}`
                : `${API_URL}/api/admin/pricing/features`

            const method = editingFeature ? 'PUT' : 'POST'

            const res = await fetch(url, {
                method,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (!res.ok) {
                const error = await res.json()
                throw new Error(error.error || 'Failed to save feature')
            }

            toast.success(editingFeature ? 'Feature updated' : 'Feature created')
            setShowModal(false)
            setEditingFeature(null)
            setFormData({ name: '', description: '', icon: '' })
            fetchFeatures()
        } catch (err) {
            console.error(err)
            toast.error(err.message)
        }
    }

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this feature? It will be removed from all pricing plans.')) return

        const token = getAuthToken()
        try {
            const res = await fetch(`${API_URL}/api/admin/pricing/features/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            })

            if (!res.ok) throw new Error('Failed to delete feature')

            toast.success('Feature deleted')
            fetchFeatures()
        } catch (err) {
            console.error(err)
            toast.error(err.message)
        }
    }

    const openCreate = () => {
        setEditingFeature(null)
        setFormData({ name: '', description: '', icon: '' })
        setShowModal(true)
    }

    const openEdit = (feature) => {
        setEditingFeature(feature)
        setFormData({
            name: feature.name,
            description: feature.description || '',
            icon: feature.icon || ''
        })
        setShowModal(true)
    }

    const filteredFeatures = features.filter(f =>
        f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (f.description && f.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-coral-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-500">Loading features...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex-1 p-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Features Management</h1>
                        <p className="text-gray-500 mt-1">Manage features available for pricing plans</p>
                    </div>
                    <button
                        onClick={openCreate}
                        className="flex items-center gap-2 px-5 py-2.5 bg-coral-500 text-white rounded-xl hover:bg-coral-600 transition-all shadow-sm hover:shadow-md font-medium"
                    >
                        <PlusIcon className="w-5 h-5" />
                        Add New Feature
                    </button>
                </div>

                {/* Search */}
                <div className="mb-6 relative">
                    <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search features..."
                        className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-coral-500 outline-none shadow-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Features Table */}
                {filteredFeatures.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 shadow-sm">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ListBulletIcon className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">No features found</h3>
                        <p className="text-gray-500 mt-1 mb-6">Create your first feature to get started.</p>
                        <button
                            onClick={openCreate}
                            className="px-5 py-2 bg-coral-500 text-white rounded-lg hover:bg-coral-600 transition-colors"
                        >
                            Create Feature
                        </button>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Description</th>
                                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Icon</th>
                                        <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredFeatures.map((f) => (
                                        <tr key={f.id} className="hover:bg-gray-50/50 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-gray-900">{f.name}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-500 max-w-md truncate" title={f.description}>
                                                    {f.description || '-'}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                {f.icon ? (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 font-mono">
                                                        {f.icon}
                                                    </span>
                                                ) : (
                                                    <span className="text-gray-400 text-sm">-</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button
                                                        onClick={() => openEdit(f)}
                                                        className="p-2 text-gray-400 hover:text-coral-600 hover:bg-coral-50 rounded-lg transition-colors"
                                                        title="Edit Feature"
                                                    >
                                                        <PencilSquareIcon className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(f.id)}
                                                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                        title="Delete Feature"
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
                    </div>
                )}

                {/* Slide-over Drawer */}
                {(showModal) && (
                    <>
                        <div
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity"
                            onClick={() => setShowModal(false)}
                        />
                        <aside className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto border-l border-gray-200 transform transition-transform duration-300 ease-in-out">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        {editingFeature ? 'Edit Feature' : 'Create Feature'}
                                    </h2>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <XMarkIcon className="w-6 h-6 text-gray-500" />
                                    </button>
                                </div>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Feature Name</label>
                                        <input
                                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none transition-all"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="e.g. Advanced Analytics"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                        <textarea
                                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none transition-all min-h-[100px]"
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            placeholder="Describe what this feature includes..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Icon Name (optional)</label>
                                        <input
                                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none transition-all"
                                            value={formData.icon}
                                            onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                                            placeholder="e.g. chart-bar"
                                        />
                                        <p className="text-xs text-gray-500 mt-1">Use Heroicons name (e.g. 'check', 'star')</p>
                                    </div>

                                    <div className="pt-4 sticky bottom-0 bg-white pb-4 border-t border-gray-100 mt-8">
                                        <button className="w-full bg-coral-500 text-white py-3 rounded-xl font-bold hover:bg-coral-600 transition-colors shadow-lg shadow-coral-200">
                                            {editingFeature ? 'Save Changes' : 'Create Feature'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </aside>
                    </>
                )}
            </div>
        </div>
    )
}
