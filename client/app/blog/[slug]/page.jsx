// Fetch posts from server instead of the local mock so DB-created posts are available
const API = process.env.NEXT_PUBLIC_ADMIN_API || 'http://localhost:4000'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../../components/layout/Navbar'
import Footer from '../../../components/layout/Footer'
import Container from '../../../components/ui/Container'
import Section from '../../../components/ui/Section'
import { normalizeImageUrl } from '../../../lib/utils'

function isValidUrl(value) {
  if (!value || typeof value !== 'string') return false
  try {
    new URL(value)
    return true
  } catch (err) {
    return false
  }
}

export async function generateStaticParams() {
  try {
    const res = await fetch(`${API}/posts`)
    if (!res.ok) return []
    const posts = await res.json()
    return posts.map((p) => ({ slug: p.slug }))
  } catch (err) {
    return []
  }
}

export async function generateMetadata({ params }) {
  const { slug } = params
  try {
    const res = await fetch(`${API}/posts/${slug}`)
    if (!res.ok) return { title: 'Post not found' }
    const post = await res.json()
    return {
      title: `${post.title} | RocketFlow`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        images: [normalizeImageUrl(post.featuredImage)],
      }
    }
  } catch (err) {
    return { title: 'Post not found' }
  }
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
  } catch {
    return iso
  }
}

export default async function PostPage({ params }) {
  const { slug } = params
  let post = null
  try {
    const res = await fetch(`${API}/posts/${slug}`)
    if (!res.ok) {
      post = null
    } else {
      post = await res.json()
    }
  } catch (err) {
    post = null
  }

  if (!post) return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto py-24 px-4">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <p className="mt-2 text-gray-600">We couldn't find the post you're looking for.</p>
      </main>
      <Footer />
    </>
  )

  // helpers for the layout
  function readingTime(text) {
    // strip HTML tags before counting words
    const plain = text ? text.replace(/<[^>]*>/g, ' ') : ''
    const words = plain ? plain.split(/\s+/).filter(Boolean).length : 0
    const minutes = Math.max(1, Math.round(words / 200))
    return `${minutes} min read`
  }

  function extractInsights(text) {
    if (!text) return []
    // remove HTML and split into sentences
    const plain = text.replace(/<[^>]*>/g, ' ')
    const parts = plain.split('.').map((s) => s.trim()).filter(Boolean)
    // return up to 3 concise sentences as insights
    return parts.slice(0, 3)
  }

  const insights = extractInsights(post.content)
  const getFirstBlockText = (content) => {
    if (!content) return ''
    try {
      const m = content.match(/^\s*<(p|h[1-6])[^>]*>([\s\S]*?)<\/\1>/i)
      if (!m) return ''
      const inner = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
      return inner
    } catch {
      return ''
    }
  }

  // Decide what to show as the 'Quick Insight'. Prefer explicit post.excerpt. If no excerpt,
  // only use the first sentence extracted from content when that sentence is actually
  // the very first block in the HTML (so we don't lift text that appears below an image).
  const firstBlockText = getFirstBlockText(post.content)
  const quickInsight = post.excerpt && post.excerpt.trim().length > 0
    ? post.excerpt
    : (firstBlockText && insights[0] && firstBlockText.replace(/\s+/g, ' ').trim().toLowerCase().includes(insights[0].replace(/\s+/g, ' ').trim().toLowerCase()) ? insights[0] : null)

  // If the post content begins with the same short insight/excerpt we show above,
  // strip that first block so the main article doesn't duplicate the same sentence.
  function stripLeadingExcerpt(content, excerpt) {
    if (!content || !excerpt) return content
    try {
      // Find the first paragraph or heading block
      const firstMatch = content.match(/^\s*(<(p|h[1-6])[^>]*>)[\s\S]*?<\/\2>/i)
      if (!firstMatch) return content
      const fullFirst = firstMatch[0]
      // Extract inner text of the first block (naive strip of tags)
      const inner = fullFirst.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
      const normalize = (s) => (s || '').replace(/\s+/g, ' ').trim().toLowerCase()
      if (!inner) return content
      // If the first block matches the excerpt/insight (or the excerpt is contained within), remove it
      if (normalize(inner).includes(normalize(excerpt)) || normalize(excerpt).includes(normalize(inner))) {
        return content.replace(fullFirst, '')
      }
      return content
    } catch (err) {
      return content
    }
  }

  // Ensure images inside saved HTML are constrained for the public view.
  // This mirrors the editor's image sizing rules so content images don't overflow.
  function processContentImages(html = '') {
    if (!html) return html
    try {
      return html.replace(/<img\b([^>]*)>/gi, (match, attrs) => {
        // If style attribute exists, ensure max-width/max-height and auto height are present
        if (/\bstyle=/.test(attrs)) {
          let updated = attrs.replace(/style=(['"])(.*?)\1/, (m, q, s) => {
            let st = s
            if (!/max-width/.test(st)) st += ';max-width:100%'
            if (!/max-height/.test(st)) st += ';max-height:16rem'
            if (!/height:/.test(st)) st += ';height:auto'
            if (!/object-fit/.test(st)) st += ';object-fit:cover'
            return `style=${q}${st}${q}`
          })
          if (/\bclass=/.test(updated)) {
            updated = updated.replace(/class=(['"])(.*?)\1/, (m, q, cls) => {
              const add = ' rounded-xl max-w-full'
              if (cls.includes('rounded-xl') || cls.includes('max-w-full')) return `class=${q}${cls}${q}`
              return `class=${q}${cls}${add}${q}`
            })
          } else {
            updated = ` class="rounded-xl max-w-full" ${updated}`
          }
          return `<img${updated}>`
        }

        // No style attribute — inject both class and style to cap size
        if (/\bclass=/.test(attrs)) {
          return '<img' + attrs.replace(/class=(['"])(.*?)\1/, (m, q, cls) => {
            const add = ' rounded-xl max-w-full'
            if (cls.includes('rounded-xl') || cls.includes('max-w-full')) return `class=${q}${cls}${q}`
            return `class=${q}${cls}${add}${q}`
          }) + ' style="max-width:100%; max-height:16rem; width:auto; height:auto; object-fit:cover"'
        }

        return `<img class="rounded-xl max-w-full" style="max-width:100%; max-height:16rem; width:auto; height:auto; object-fit:cover" ${attrs}>`
      })
    } catch (e) {
      return html
    }
  }

  // related posts: share at least one tag, fallback to same service
  // load other posts to compute related
  let related = []
  try {
    const res = await fetch(`${API}/posts`)
    if (res.ok) {
      const all = await res.json()
      related = all
        .filter((p) => p.slug !== post.slug)
        .map((p) => ({
          post: p,
          score: (p.tags || []).filter((t) => (post.tags || []).includes(t)).length + (p.service === post.service ? 0.2 : 0),
        }))
        .filter((r) => r.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
    }
  } catch (err) {
    related = []
  }

  return (
    <>
      <Navbar />

      {/* Hero: title-over-background (no featured image used as background) */}
      <header className="relative">
        <div className="h-72 md:h-96 w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center">
          <Container>
            <div className="max-w-4xl mx-auto text-center text-white py-16 md:py-20">
              <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">{post.title}</h1>
              <p className="mt-3 text-sm md:text-base opacity-90">{post.excerpt}</p>

              <div className="mt-4 flex items-center justify-center gap-4 text-xs md:text-sm text-white/90">
                <div className="font-medium">{post.author}</div>
                <div>•</div>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <div>•</div>
                <div>{readingTime(post.content)}</div>
              </div>
            </div>
          </Container>
        </div>
      </header>

      <Section padding="lg" className="-mt-24">
        <Container>
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <main className="lg:col-span-2 p-8 lg:p-12">
                <Link href="/blog" className="text-sm text-coral-500 hover:underline mb-2 inline-block">← Back to Blog</Link>

                {/* Lead insight with featured image on top */}
                <div className="mt-2">
                  <div className="flex flex-col gap-6 items-start">
                    <div className="w-full rounded-lg overflow-hidden bg-gray-100">
                      {post.featuredImage ? (
                        <Image src={normalizeImageUrl(post.featuredImage)} alt={post.title} width={1200} height={700} className="object-cover w-full h-56 md:h-72" />
                      ) : (
                        <div className="w-full h-56 md:h-72 flex items-center justify-center text-gray-400">No image</div>
                      )}
                    </div>

                    <div className="w-full">
                      <div className="text-lg md:text-xl font-semibold text-gray-900">Quick Insight</div>
                      <p className="mt-2 text-gray-700 text-base leading-relaxed">{quickInsight || insights[0] || post.excerpt}</p>
                      {insights.length > 1 && (
                        <ul className="mt-3 list-disc list-inside text-gray-600">
                          {insights.slice(1).map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                <article className="prose lg:prose-lg mt-6 text-gray-800">
                  {/* Render rich HTML content produced by TipTap. We assume content is sanitized on the server —
                      if you need help sanitizing before saving, I can add server-side sanitization (recommended).
                  */}
                    {/* Remove a leading paragraph/heading if it duplicates the Quick Insight above */}
                    <div dangerouslySetInnerHTML={{ __html: processContentImages(stripLeadingExcerpt(post.content, quickInsight)) }} />
                </article>

                {/* Tags & Share */}
                <div className="mt-8 flex items-center justify-between flex-col sm:flex-row gap-4">
                  <div className="flex items-center flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span key={t} className="text-xs bg-gray-100 text-gray-800 px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${typeof window !== 'undefined' ? window.location.href : ''}`} target="_blank" rel="noreferrer" className="text-sm text-gray-600 hover:text-coral-500">Share on Twitter</a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? window.location.href : ''}`} target="_blank" rel="noreferrer" className="text-sm text-gray-600 hover:text-coral-500">Share on LinkedIn</a>
                  </div>
                </div>
              </main>

              {/* Sidebar: Related posts & CTA */}
              <aside className="p-6 border-l border-gray-100 bg-gray-50">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Related posts</h3>
                  <div className="mt-4 space-y-4">
                    {related.length === 0 && (
                      <div className="text-sm text-gray-600">No related posts found. Explore the blog for more insights.</div>
                    )}
                    {related.map(({ post: r }) => (
                      <Link key={r.slug} href={`/blog/${r.slug}`} className="block">
                        <div className="flex items-start gap-3">
                          <div className="w-20 h-12 relative rounded overflow-hidden bg-gray-100 flex-shrink-0">
                            {r.featuredImage ? (
                              <Image src={normalizeImageUrl(r.featuredImage)} alt={r.title} fill className="object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
                            )}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{r.title}</div>
                            <div className="text-xs text-gray-500">{readingTime(r.content)}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-semibold text-gray-900">Ready to try RocketFlow?</h4>
                  <p className="text-sm text-gray-600 mt-2">Create an account and launch automated campaigns in minutes.</p>
                  <div className="mt-3">
                    <a href="https://rocketflow.biz/create_account/selected_package" className="inline-block bg-coral-500 text-white px-4 py-2 rounded-md text-sm">Get Started</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  )
}
