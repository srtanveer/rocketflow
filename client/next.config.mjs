/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output standalone for production deployment
  output: 'standalone',
  
  // Enable experimental features for better SEO
  experimental: {
    // Disable CSS optimization temporarily due to critters dependency issue
    // optimizeCss: true,
    optimizeServerReact: true,
  },
  
  // Image optimization
  images: {
    // Allow images served from Cloudinary (used by uploads)
    domains: ['res.cloudinary.com', 'localhost', '127.0.0.1'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  
  // Compression
  compress: true,
  
  // Performance optimizations (swcMinify is enabled by default in Next.js 15)
  
  // Headers for better SEO and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400', // 24 hours
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, s-maxage=86400', // 24 hours
          },
        ],
      },
    ];
  },
  
  // Redirects for better SEO (numeric id -> slug)
  async redirects() {
    // import post list at config-time to map numeric ids to slugs
    try {
      // ESM import - POSTS is a simple array exported from components/blog/posts.js
      const { default: POSTS } = await import('./components/blog/posts')
      const redirects = POSTS.map((p) => ({
        source: `/blog/${p.id}`,
        destination: `/blog/${p.slug}`,
        permanent: true,
      }))
      return redirects
    } catch (err) {
      // If import fails for any reason, fall back to no redirects
      // (This keeps the dev/CI workflow resilient.)
      return []
    }
  },
  
  // SEO optimizations
  trailingSlash: false,
  
  // Optimize for static generation
  generateBuildId: async () => {
    // Use timestamp for build ID to help with cache busting
    return `build-${Date.now()}`;
  },
};

export default nextConfig;
