 'use client'

import { useState, useEffect } from 'react'
import { cn } from '../../../lib/utils'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { fetchPosts, createPost } from '../../../components/admin/api'
import { AdminSidebar } from '../../../components/admin/AdminSidebar'

const BlogEditor = dynamic(() => import('../../../components/admin/BlogEditor'), {
  ssr: false,
  loading: () => <div className="border rounded-xl p-4 bg-white min-h-[200px] flex items-center justify-center text-gray-400">Loading editor...</div>
})

export default function Dashboard() {
  const router = useRouter()
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({ title: '', slug: '', excerpt: '', content: '', featuredImage: '', author: 'Admin', tags: [] })
  const [editorContent, setEditorContent] = useState('')
  const [status, setStatus] = useState('')

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
    } catch (err) {
      setStatus('Failed to load posts')
    }
  }

  async function doCreate(e) {
    e.preventDefault()
    try {
      // auto-extract featured image from first <img> in editor content if not provided
      const imgMatch = editorContent.match(/<img[^>]+src\s*=\s*"([^"]+)"/i)
      const featured = post.featuredImage || (imgMatch && imgMatch[1]) || ''
      await createPost({ ...post, content: editorContent, featuredImage: featured })
      setStatus('Post created')
      setPost({ title: '', slug: '', excerpt: '', content: '', featuredImage: '', author: 'Admin', tags: [] })
      setEditorContent('')
      loadPosts()
    } catch (err) {
      setStatus('Create failed')
    }
  }

  const [previewOpen, setPreviewOpen] = useState(false)

  async function handleImageUpload(file) {
    // Upload to server, which proxies to Cloudinary securely
    const formData = new FormData()
    formData.append('file', file)
    const base = process.env.NEXT_PUBLIC_ADMIN_API || 'http://localhost:4000'
    const res = await fetch(`${base.replace(/\/$/, '')}/uploads`, {
      method: 'POST',
      body: formData,
    })
    if (!res.ok) {
      const text = await res.text().catch(() => '')
      throw new Error('Upload failed: ' + (text || res.statusText))
    }
    const data = await res.json()
    return data.url
  }

  function logout() {
    localStorage.removeItem('rf_token')
    router.push('/admin')
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 px-8 py-8">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Admin Dashboard</h2>
            <p className="text-sm text-gray-500">Manage posts, tutorials and site settings</p>
          </div>
          <div className="flex items-center gap-3">
            <input placeholder="Search posts..." className="border rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-coral-500" />
            <button onClick={logout} className="bg-coral-500 text-white px-4 py-2 rounded shadow hover:bg-coral-600 transition">Logout</button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-3 grid grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard title="Posts" value={posts.length} />
              <StatCard title="Drafts" value={2} />
              <StatCard title="Views" value={12430} />
            </div>

          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="font-semibold mb-3">Quick Actions</h4>
              <div className="flex flex-col gap-2">
                <button onClick={() => router.push('/posts')} className="text-left px-3 py-2 rounded hover:bg-gray-50">View All Posts</button>
                <button onClick={() => router.push('/dashboard/tutorials')} className="text-left px-3 py-2 rounded hover:bg-gray-50">Manage Tutorials</button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-2xl font-bold text-gray-900">{value}</div>
      </div>
    </div>
  )
}

// Minimal Tabs implementation
function Tabs({ children }) {
  const panels = Array.isArray(children) ? children : [children]
  const [active, setActive] = useState(panels[0].props.name)
  return (
    <div>
      <div className="flex gap-2 mb-4">
        {panels.map((p) => (
          <button key={p.props.name} onClick={() => setActive(p.props.name)} className={cn('px-3 py-1 rounded', active === p.props.name ? 'bg-coral-500 text-white' : 'bg-gray-100')}>{p.props.name}</button>
        ))}
      </div>
      <div>
        {panels.map((p) => p.props.name === active ? p.props.children : null)}
      </div>
    </div>
  )
}

Tabs.Panel = function Panel({ children }) { return <>{children}</> }