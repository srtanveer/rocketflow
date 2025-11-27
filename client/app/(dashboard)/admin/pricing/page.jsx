'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    PlusIcon,
    PencilIcon,
    TrashIcon,
    XMarkIcon,
    ArrowLeftIcon,
    CurrencyDollarIcon,
    StarIcon,
    CheckIcon
} from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';

export default function AdminPricingManagement() {
    const router = useRouter();
    const [pricingPlans, setPricingPlans] = useState([]);
    const [features, setFeatures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingPlan, setEditingPlan] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        slug: '',
        description: '',
        monthly_price: '',
        yearly_price: '',
        is_popular: false,
        features: []
    });

    const API_URL = process.env.NEXT_PUBLIC_ADMIN_API || 'http://localhost:4000';

    // Get auth token from localStorage
    const getAuthToken = () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('rf_token') || localStorage.getItem('token');
        }
        return null;
    };

    // Fetch pricing plans
    const fetchPricingPlans = async () => {
        try {
            const token = getAuthToken();
            if (!token) {
                router.push('/admin');
                return;
            }

            const response = await fetch(`${API_URL}/api/admin/pricing/plans`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.status === 401) {
                router.push('/admin');
                return;
            }

            if (!response.ok) throw new Error('Failed to fetch pricing plans');

            const data = await response.json();
            setPricingPlans(data.plans);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching pricing plans:', err);
            toast.error(err.message);
            setLoading(false);
        }
    };

    // Fetch available features
    const fetchFeatures = async () => {
        try {
            const token = getAuthToken();
            if (!token) return;

            const response = await fetch(`${API_URL}/api/admin/pricing/features`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (!response.ok) throw new Error('Failed to fetch features');

            const data = await response.json();
            setFeatures(data.features);
        } catch (err) {
            console.error('Error fetching features:', err);
        }
    };

    useEffect(() => {
        fetchPricingPlans();
        fetchFeatures();
    }, []);

    // Handle create/update
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = getAuthToken();
            if (!token) {
                router.push('/admin');
                return;
            }

            const url = editingPlan
                ? `${API_URL}/api/admin/pricing/plans/${editingPlan.id}`
                : `${API_URL}/api/admin/pricing/plans`;

            const method = editingPlan ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to save pricing plan');
            }

            await fetchPricingPlans();
            setShowModal(false);
            setEditingPlan(null);
            resetForm();
            toast.success(editingPlan ? 'Plan updated successfully' : 'Plan created successfully');
        } catch (err) {
            console.error('Error saving pricing plan:', err);
            toast.error(err.message);
        }
    };

    // Handle delete
    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this pricing plan?')) return;

        try {
            const token = getAuthToken();
            if (!token) {
                router.push('/admin');
                return;
            }

            const response = await fetch(`${API_URL}/api/admin/pricing/plans/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (!response.ok) throw new Error('Failed to delete pricing plan');

            await fetchPricingPlans();
            toast.success('Plan deleted successfully');
        } catch (err) {
            console.error('Error deleting pricing plan:', err);
            toast.error(err.message);
        }
    };

    // Open modal for creating new plan
    const handleCreate = () => {
        resetForm();
        setEditingPlan(null);
        setShowModal(true);
    };

    // Open modal for editing plan
    const handleEdit = (plan) => {
        setEditingPlan(plan);
        setFormData({
            name: plan.name,
            slug: plan.slug,
            description: plan.description || '',
            monthly_price: plan.monthly_price || '',
            yearly_price: plan.yearly_price || '',
            is_popular: plan.is_popular,
            features: plan.features.map(f => ({
                feature_id: f.feature_id,
                included: f.included,
                feature_price: f.feature_price || ''
            }))
        });
        setShowModal(true);
    };

    // Reset form
    const resetForm = () => {
        setFormData({
            name: '',
            slug: '',
            description: '',
            monthly_price: '',
            yearly_price: '',
            is_popular: false,
            features: []
        });
    };

    // Toggle feature in form
    const toggleFeature = (featureId) => {
        const existingIndex = formData.features.findIndex(f => f.feature_id === featureId);

        if (existingIndex >= 0) {
            setFormData({
                ...formData,
                features: formData.features.filter((_, i) => i !== existingIndex)
            });
        } else {
            setFormData({
                ...formData,
                features: [...formData.features, {
                    feature_id: featureId,
                    included: true,
                    feature_price: ''
                }]
            });
        }
    };

    // Update feature inclusion status
    const updateFeatureInclusion = (featureId, included) => {
        setFormData({
            ...formData,
            features: formData.features.map(f =>
                f.feature_id === featureId ? { ...f, included } : f
            )
        });
    };

    if (loading) {
        return (
            <div className="flex-1 p-8 flex items-center justify-center min-h-screen bg-gray-50">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-coral-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-500">Loading pricing plans...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 p-8 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Pricing Management</h1>
                        <p className="text-gray-500 mt-1">Manage your pricing plans and features</p>
                    </div>
                    <button
                        onClick={handleCreate}
                        className="flex items-center gap-2 px-5 py-2.5 bg-coral-500 text-white rounded-xl hover:bg-coral-600 transition-all shadow-sm hover:shadow-md font-medium"
                    >
                        <PlusIcon className="w-5 h-5" />
                        Add New Plan
                    </button>
                </div>

                {/* Pricing Plans Grid */}
                {pricingPlans.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 shadow-sm">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CurrencyDollarIcon className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">No pricing plans yet</h3>
                        <p className="text-gray-500 mt-1 mb-6">Create your first plan to get started.</p>
                        <button
                            onClick={handleCreate}
                            className="px-5 py-2 bg-coral-500 text-white rounded-lg hover:bg-coral-600 transition-colors"
                        >
                            Create Your First Plan
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pricingPlans.map((plan) => (
                            <div
                                key={plan.id}
                                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden group flex flex-col"
                            >
                                <div className="p-6 flex-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                                            <p className="text-sm text-gray-500 font-mono mt-1">{plan.slug}</p>
                                        </div>
                                        {plan.is_popular && (
                                            <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                                <StarIcon className="w-3 h-3" /> Popular
                                            </span>
                                        )}
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl font-bold text-gray-900">
                                                {plan.monthly_price || '0'} BDT
                                            </span>
                                            <span className="text-gray-500 text-sm">/mo</span>
                                        </div>
                                        {plan.yearly_price && (
                                            <div className="text-sm text-gray-500 mt-1">
                                                {plan.yearly_price} BDT/yr
                                            </div>
                                        )}
                                    </div>

                                    {plan.description && (
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{plan.description}</p>
                                    )}

                                    <div className="text-sm text-gray-500 flex items-center gap-2">
                                        <CheckIcon className="w-4 h-4 text-green-500" />
                                        {plan.features.length} features configured
                                    </div>
                                </div>

                                <div className="p-4 bg-gray-50 border-t border-gray-100 flex gap-2">
                                    <button
                                        onClick={() => handleEdit(plan)}
                                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
                                    >
                                        <PencilIcon className="w-4 h-4" /> Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(plan.id)}
                                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                    >
                                        <TrashIcon className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal for Create/Edit */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
                            <h2 className="text-xl font-bold text-gray-900">
                                {editingPlan ? 'Edit Pricing Plan' : 'Create New Pricing Plan'}
                            </h2>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setEditingPlan(null);
                                    resetForm();
                                }}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <XMarkIcon className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-6">
                            {/* Basic Info */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Plan Name *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none"
                                        placeholder="e.g., Professional"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Slug *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.slug}
                                        onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none"
                                        placeholder="e.g., professional"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none"
                                    rows="3"
                                    placeholder="Brief description of the plan"
                                />
                            </div>

                            {/* Pricing */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Price ($)</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={formData.monthly_price}
                                        onChange={(e) => setFormData({ ...formData, monthly_price: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none"
                                        placeholder="29.99"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Yearly Price ($)</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={formData.yearly_price}
                                        onChange={(e) => setFormData({ ...formData, yearly_price: e.target.value })}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-coral-500 focus:border-transparent outline-none"
                                        placeholder="290.00"
                                    />
                                </div>
                            </div>

                            {/* Popular Flag */}
                            <div>
                                <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                                    <input
                                        type="checkbox"
                                        checked={formData.is_popular}
                                        onChange={(e) => setFormData({ ...formData, is_popular: e.target.checked })}
                                        className="w-5 h-5 text-coral-500 rounded focus:ring-coral-500"
                                    />
                                    <span className="text-sm font-medium text-gray-700">Mark as "Most Popular"</span>
                                </label>
                            </div>

                            {/* Features */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Features</h3>
                                <div className="space-y-2 max-h-64 overflow-y-auto border border-gray-200 rounded-xl p-4 custom-scrollbar">
                                    {features.map((feature) => {
                                        const isSelected = formData.features.some(f => f.feature_id === feature.id);
                                        const selectedFeature = formData.features.find(f => f.feature_id === feature.id);

                                        return (
                                            <div key={feature.id} className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${isSelected ? 'bg-coral-50 border border-coral-100' : 'bg-gray-50 border border-transparent'}`}>
                                                <input
                                                    type="checkbox"
                                                    checked={isSelected}
                                                    onChange={() => toggleFeature(feature.id)}
                                                    className="w-5 h-5 text-coral-500 rounded focus:ring-coral-500 cursor-pointer"
                                                />
                                                <div className="flex-1">
                                                    <div className="font-medium text-gray-900">{feature.name}</div>
                                                    {feature.description && (
                                                        <div className="text-xs text-gray-500">{feature.description}</div>
                                                    )}
                                                </div>
                                                {isSelected && (
                                                    <select
                                                        value={selectedFeature?.included ? 'included' : 'excluded'}
                                                        onChange={(e) => updateFeatureInclusion(feature.id, e.target.value === 'included')}
                                                        className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-coral-500 focus:border-coral-500 outline-none"
                                                    >
                                                        <option value="included">Included</option>
                                                        <option value="excluded">Not Included</option>
                                                    </select>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Submit Buttons */}
                            <div className="flex gap-3 justify-end pt-6 border-t border-gray-100">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowModal(false);
                                        setEditingPlan(null);
                                        resetForm();
                                    }}
                                    className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2.5 bg-coral-500 text-white rounded-xl hover:bg-coral-600 transition-colors font-medium shadow-sm"
                                >
                                    {editingPlan ? 'Update Plan' : 'Create Plan'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
