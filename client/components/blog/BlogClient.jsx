"use client"

import { useMemo, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../ui/Card'
import Container from '../ui/Container'
import Section from '../ui/Section'
import { cn, normalizeImageUrl } from '../../lib/utils'

const API = process.env.NEXT_PUBLIC_ADMIN_API || 'http://localhost:4000'

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
  } catch {
    return iso
  }
}

function PostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <Card hover={true} tiltEffect={true} padding="md" className="group">
        <article aria-labelledby={`post-${post.id}-title`} className="flex flex-col h-full">
          <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gray-50">
            {post.featuredImage ? (
              <Image
                src={normalizeImageUrl(post.featuredImage)}
                alt={post.title}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
            )}
          </div>

          <div className="mt-4 flex-1 flex flex-col">
            <h3 id={`post-${post.id}-title`} className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {post.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">{post.excerpt}</p>

            <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
              <div>
                <span className="font-medium text-gray-700">{post.author}</span>
                <span className="ml-2">•</span>
                <time className="ml-2" dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400 text-sm">❤ {post.likes}</span>
                <span className="text-gray-400 text-sm">👁 {post.views}</span>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {(post.tags || []).map((t) => (
                <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
          </div>
        </article>
      </Card>
    </Link>
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
    // filter out falsy services (undefined/null/empty) to avoid invalid options
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
      // search
      const q = query.trim().toLowerCase()
      if (q) {
        const inText = (p.title + ' ' + p.excerpt + ' ' + (p.tags || []).join(' ')).toLowerCase().includes(q)
        if (!inText) return false
      }

      // service
      if (service !== 'all' && p.service !== service) return false

      // tags
      if (selectedTags.length > 0 && !selectedTags.every((t) => (p.tags || []).includes(t))) return false

      return true
    })
  }, [query, service, selectedTags, posts])

  const latest = useMemo(() => {
    return [...filtered].sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [filtered])

  const popular = useMemo(() => {
    return [...posts].sort((a, b) => (b.views + b.likes) - (a.views + a.likes)).slice(0, 3)
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

  // toggle tag selection
  function toggleTag(t) {
    setSelectedTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))
  }

  return (
    <main>
      <Section className="pt-20 pb-8 bg-gradient-to-b from-blue-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">RocketFlow Blog</h1>
            <p className="mt-2 text-gray-600">Insights, case studies and product updates about marketing automation.</p>

            <div className="mt-6 flex flex-col md:flex-row items-stretch gap-3">
              <label className="sr-only" htmlFor="search">Search posts</label>
              <input
                id="search"
                className="flex-1 rounded-lg border border-blue-200 p-3 shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Search by title, excerpt or tag..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search posts"
              />

              <select className="rounded-lg border border-blue-200 p-3 bg-white focus:ring-2 focus:ring-blue-600" value={service} onChange={(e) => setService(e.target.value)} aria-label="Filter by service">
                {services.map((s) => (
                  <option key={s} value={s}>{s === 'all' ? 'All Services' : s}</option>
                ))}
              </select>

            </div>

            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {tags.map((t) => (
                <button
                  key={t}
                  onClick={() => toggleTag(t)}
                  className={`text-xs px-3 py-1 rounded-full border ${selectedTags.includes(t) ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-blue-200 hover:border-blue-600'}`} 
                  aria-pressed={selectedTags.includes(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pb-12 bg-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Latest Posts</h2>
                <p className="text-sm text-gray-500">Showing {latest.length} post{latest.length !== 1 ? 's' : ''}</p>
              </div>

              {latest.length === 0 ? (
                loading ? (
                  <div className="rounded-xl border border-gray-200 p-8 text-center text-gray-600">Loading posts...</div>
                ) : error ? (
                  <div className="rounded-xl border border-red-200 p-8 text-center text-red-600">{error}</div>
                ) : (
                  <div className="rounded-xl border border-gray-200 p-8 text-center text-gray-600">No posts match your filters. Try adjusting search or filters.</div>
                )
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {latest.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>

            <aside className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Popular Posts</h3>
                <div className="mt-4 space-y-4">
                  {popular.map((p) => (
                    <div key={p.id} className="flex items-center gap-3">
                      <div className="w-16 h-10 relative rounded-md overflow-hidden bg-gray-50">
                        {p.featuredImage ? (
                          <Image src={normalizeImageUrl(p.featuredImage)} alt={p.title} fill className="object-cover" loading="lazy" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{p.title}</p>
                        <p className="text-xs text-gray-500">{formatDate(p.date)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters Summary</h3>
                <div className="mt-3 text-sm text-gray-600 space-y-2">
                  <div>Service: <span className="font-medium text-gray-800">{service === 'all' ? 'All' : service}</span></div>
                  <div>Tags: <span className="font-medium text-gray-800">{selectedTags.length > 0 ? selectedTags.join(', ') : 'Any'}</span></div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">Subscribe</h3>
                <p className="text-sm text-gray-600 mt-2">Get the latest posts to your inbox.</p>
                <div className="mt-3 flex gap-2">
                  <input className="flex-1 rounded-lg border border-blue-200 p-2 focus:ring-2 focus:ring-blue-600" placeholder="you@company.com" aria-label="Email for blog subscription" />
                  <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 rounded-lg hover:from-blue-700 hover:to-blue-800">Subscribe</button>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </main>
  )
}
