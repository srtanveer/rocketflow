// Utility to concatenate class names (shadcn/ui style)
export function cn(...args) {
  return args.filter(Boolean).join(' ')
}

export function normalizeImageUrl(url) {
  if (!url) return ''
  try {
    // If it's already an absolute URL, return as-is
    new URL(url)
    return url
  } catch (err) {
    // Treat as relative path - prepend API base
    const API = process.env.NEXT_PUBLIC_ADMIN_API || 'http://localhost:4000'
    // ensure no double slashes
    return `${API.replace(/\/$/, '')}/${url.replace(/^\//, '')}`
  }
}
