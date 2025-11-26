"use client"

import { useMemo, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../ui/Card'
import Container from '../ui/Container'
import Section from '../ui/Section'
import { cn, normalizeImageUrl } from '../../lib/utils'
import { MagnifyingGlassIcon, FunnelIcon, ClockIcon, FireIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const API = process.env.NEXT_PUBLIC_ADMIN_API || 'http://localhost:4000'

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
  } catch {
    return iso
  }
}

// Calculate read time based on word count (avg 200 wpm)
function getReadTime(content) {
  const words = content?.split(/\s+/).length || 0
  const minutes = Math.ceil(words / 200)
  return `${minutes} min read`
}

function PostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <div className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative w-full h-56 overflow-hidden">
          {post.featuredImage ? (
            <Image
              src={normalizeImageUrl(post.featuredImage)}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-400">
              <span className="text-4xl opacity-20">📷</span>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold text-blue-600 rounded-full shadow-sm uppercase tracking-wider">
              {post.service || 'Article'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 flex flex-col">
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-600">
                {post.author?.charAt(0) || 'A'}
              </span>
              {post.author}
            </span>
            <span>•</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
            {post.title}
          </h3>

          <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="pt-4 border-t border-gray-50 flex items-center justify-between mt-auto">
            <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
              <span className="flex items-center gap-1">
                <ClockIcon className="w-3.5 h-3.5" />
                {getReadTime(post.content)}
              </span>
              <span className="flex items-center gap-1">
                <FireIcon className="w-3.5 h-3.5 text-orange-500" />
                {post.views}
              </span>
            </div>
            <span className="text-blue-600 text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Read More <ChevronRightIcon className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

function PostSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-full flex flex-col animate-pulse">
      <div className="h-56 bg-gray-200 w-full" />
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex gap-2 mb-4">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-4 w-24 bg-gray-200 rounded" />
        </div>
        <div className="h-6 w-3/4 bg-gray-200 rounded mb-3" />
        <div className="h-6 w-1/2 bg-gray-200 rounded mb-4" />
        <div className="space-y-2 mb-4 flex-1">
          <div className="h-3 w-full bg-gray-200 rounded" />
          <div className="h-3 w-full bg-gray-200 rounded" />
          <div className="h-3 w-2/3 bg-gray-200 rounded" />
        </div>
        <div className="pt-4 border-t border-gray-50 flex justify-between">
          <div className="h-4 w-20 bg-gray-200 rounded" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  )
}

export default function BlogClient() {
  const [query, setQuery] = useState('')
  const [service, setService] = useState('all')
  const [selectedTags, setSelectedTags] = useState([])
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // derive tag and service options from posts
  const services = useMemo(() => {
    const s = new Set(posts.map((p) => p.service).filter(Boolean))
    return ['all', ...Array.from(s)]
  }, [posts])

  const tags = useMemo(() => {
    const t = new Set()
    posts.forEach((p) => (p.tags || []).forEach((tag) => t.add(tag)))
    return Array.from(t)
  }, [posts])

  // filtering logic
  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const q = query.trim().toLowerCase()
      if (q) {
        const inText = (p.title + ' ' + p.excerpt + ' ' + (p.tags || []).join(' ')).toLowerCase().includes(q)
        if (!inText) return false
      }
      if (service !== 'all' && p.service !== service) return false
      if (selectedTags.length > 0 && !selectedTags.every((t) => (p.tags || []).includes(t))) return false
      return true
    })
  }, [query, service, selectedTags, posts])

  const latest = useMemo(() => {
    return [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [filtered])

  const popular = useMemo(() => {
    return [...posts].sort((a, b) => (b.views + b.likes) - (a.views + a.likes)).slice(0, 4)
  }, [posts])

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError('')
    fetch(`${API}/posts`)
      .then((r) => {
        if (!r.ok) throw new Error('Failed to load posts')
        return r.json()
      })
      .then((data) => {
        if (!cancelled) setPosts(data)
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || 'Failed to load posts')
      })
      .finally(() => { if (!cancelled) setLoading(false) })

    return () => { cancelled = true }
  }, [])

  function toggleTag(t) {
    setSelectedTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-white border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

        <Container className="relative pt-24 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4 border border-blue-100">
              RocketFlow Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              Insights for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Modern Marketer</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Discover the latest strategies, case studies, and product updates to supercharge your marketing automation journey.
            </p>

            {/* Search Bar */}
            <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-2 max-w-2xl mx-auto transform transition-all hover:shadow-xl hover:scale-[1.01]">
              <div className="flex-1 relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900 placeholder-gray-400"
                  placeholder="Search articles..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="relative md:w-48">
                <FunnelIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  className="w-full pl-12 pr-8 py-3 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none text-gray-900 cursor-pointer"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  {services.map((s) => (
                    <option key={s} value={s}>{s === 'all' ? 'All Topics' : s.replace(/-/g, ' ')}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronRightIcon className="w-4 h-4 text-gray-400 rotate-90" />
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {tags.slice(0, 8).map((t) => (
                <button
                  key={t}
                  onClick={() => toggleTag(t)}
                  className={`text-xs font-medium px-4 py-1.5 rounded-full transition-all duration-200 border ${selectedTags.includes(t)
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600'
                    }`}
                >
                  #{t}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <Section className="py-16">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                  Latest Articles
                </h2>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {latest.length} results
                </span>
              </div>

              {loading ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {[1, 2, 3, 4].map(i => <PostSkeleton key={i} />)}
                </div>
              ) : latest.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {latest.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MagnifyingGlassIcon className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">
                    We couldn't find any posts matching your criteria. Try adjusting your search or filters.
                  </p>
                  <button
                    onClick={() => { setQuery(''); setService('all'); setSelectedTags([]); }}
                    className="mt-6 text-blue-600 font-semibold hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Popular Posts Widget */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <FireIcon className="w-5 h-5 text-orange-500" />
                  Trending Now
                </h3>
                <div className="space-y-6">
                  {popular.map((p, i) => (
                    <Link key={p.id} href={`/blog/${p.slug}`} className="group flex gap-4 items-start">
                      <span className="text-2xl font-bold text-gray-200 group-hover:text-blue-200 transition-colors">0{i + 1}</span>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                          {p.title}
                        </h4>
                        <p className="text-xs text-gray-500">{formatDate(p.date)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Widget */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-lg p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-10 -translate-y-10" />
                <h3 className="text-xl font-bold mb-3 relative z-10">Join our newsletter</h3>
                <p className="text-blue-100 text-sm mb-6 relative z-10">
                  Get the latest marketing insights delivered directly to your inbox. No spam, ever.
                </p>
                <div className="space-y-3 relative z-10">
                  <input
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:bg-white/20 focus:ring-2 focus:ring-white/50 outline-none transition-all"
                    placeholder="Enter your email"
                  />
                  <button className="w-full py-2.5 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-md">
                    Subscribe Free
                  </button>
                </div>
              </div>

              {/* Tags Widget */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <button
                      key={t}
                      onClick={() => toggleTag(t)}
                      className={`text-xs px-3 py-1.5 rounded-md transition-colors ${selectedTags.includes(t)
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </main>
  )
}
