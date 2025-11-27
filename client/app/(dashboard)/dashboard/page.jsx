'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { fetchPosts } from '../../../components/admin/api'
import {
  TrendingUp,
  FileText,
  Eye,
  Users,
  BookOpen,
  Grid,
  DollarSign,
  ArrowUpRight,
  Activity,
  Calendar,
  Clock
} from 'lucide-react'

export default function Dashboard() {
  const router = useRouter()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('rf_token')
    if (!token) {
      router.push('/admin')
      return
    }
    loadPosts()
  }, [router])

  async function loadPosts() {
    try {
      const data = await fetchPosts()
      setPosts(data)
      setLoading(false)
    } catch (err) {
      setLoading(false)
    }
  }

  const stats = [
    {
      title: 'Total Posts',
      value: posts.length,
      change: '+12%',
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Total Views',
      value: '24.5K',
      change: '+18%',
      icon: Eye,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      title: 'Active Users',
      value: '1,234',
      change: '+8%',
      icon: Users,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Revenue',
      value: '12.4K BDT',
      change: '+23%',
      icon: DollarSign,
      color: 'from-coral-500 to-coral-600',
      bgColor: 'bg-coral-50',
      textColor: 'text-coral-600'
    },
  ]

  const quickActions = [
    { title: 'Create Post', icon: FileText, href: '/posts', color: 'bg-blue-500' },
    { title: 'Add Tutorial', icon: BookOpen, href: '/tutorials', color: 'bg-purple-500' },
    { title: 'Manage Packages', icon: Grid, href: '/packages', color: 'bg-green-500' },
    { title: 'Update Pricing', icon: DollarSign, href: '/admin/pricing', color: 'bg-coral-500' },
  ]

  const recentPosts = posts.slice(0, 5)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 backdrop-blur-lg bg-white/80">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Dashboard
              </h1>
              <p className="text-gray-600 mt-1 flex items-center gap-2">
                <Activity size={16} className="text-green-500" />
                Welcome back! Here's what's happening today.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <Calendar size={16} />
                {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group cursor-pointer transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`${stat.textColor}`} size={24} />
                </div>
                <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                  <TrendingUp size={16} />
                  {stat.change}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Activity className="text-coral-500" size={24} />
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => router.push(action.href)}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 border border-gray-200 hover:border-gray-300 transition-all group"
                  >
                    <div className={`p-3 rounded-xl ${action.color} text-white group-hover:scale-110 transition-transform shadow-lg`}>
                      <action.icon size={24} />
                    </div>
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">
                      {action.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <FileText className="text-blue-500" size={24} />
                  Recent Posts
                </h2>
                <button
                  onClick={() => router.push('/posts')}
                  className="text-sm text-coral-500 hover:text-coral-600 font-semibold flex items-center gap-1"
                >
                  View All
                  <ArrowUpRight size={16} />
                </button>
              </div>

              {loading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="animate-pulse flex gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : recentPosts.length > 0 ? (
                <div className="space-y-3">
                  {recentPosts.map((post) => (
                    <div
                      key={post.id}
                      onClick={() => router.push(`/posts`)}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all cursor-pointer group border border-transparent hover:border-gray-200"
                    >
                      {post.featuredImage && (
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 group-hover:text-coral-500 transition-colors truncate">
                          {post.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye size={14} />
                            {post.views || 0} views
                          </span>
                        </div>
                      </div>
                      <ArrowUpRight className="text-gray-400 group-hover:text-coral-500 transition-colors" size={20} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <FileText size={48} className="mx-auto mb-3 text-gray-300" />
                  <p>No posts yet. Create your first post!</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Activity Feed */}
            <div className="bg-gradient-to-br from-coral-500 to-coral-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <TrendingUp size={20} />
                Performance
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-coral-100">This Month</span>
                  <span className="text-2xl font-bold">+23%</span>
                </div>
                <div className="h-2 bg-coral-400 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full w-3/4 animate-pulse"></div>
                </div>
                <div className="text-sm text-coral-100">
                  Great job! Your content is performing better than last month.
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">System Status</h3>
              <div className="space-y-3">
                <StatusItem label="API Server" status="operational" />
                <StatusItem label="Database" status="operational" />
                <StatusItem label="CDN" status="operational" />
                <StatusItem label="Email Service" status="operational" />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Tutorials</span>
                  <span className="font-semibold text-gray-900">12</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Packages</span>
                  <span className="font-semibold text-gray-900">8</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Features</span>
                  <span className="font-semibold text-gray-900">24</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Pricing Plans</span>
                  <span className="font-semibold text-gray-900">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatusItem({ label, status }) {
  const isOperational = status === 'operational'
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-600">{label}</span>
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${isOperational ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
        <span className={`text-xs font-semibold ${isOperational ? 'text-green-600' : 'text-red-600'}`}>
          {isOperational ? 'Operational' : 'Down'}
        </span>
      </div>
    </div>
  )
}