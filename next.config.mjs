/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = [
  "default-src 'self'",

  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",

  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",

  "img-src 'self' data: blob:",

  "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",

  "frame-src 'self' https://js.stripe.com https://hooks.stripe.com",
  "form-action 'self' https://buy.stripe.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "object-src 'none'",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "upgrade-insecure-requests",
].join('; ')

const securityHeaders = [
  { key: 'Content-Security-Policy', value: ContentSecurityPolicy },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(self "https://buy.stripe.com"), interest-cohort=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Origin-Agent-Cluster', value: '?1' },
  { key: 'X-XSS-Protection', value: '0' },
  { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
]

const nextConfig = {
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [],
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
  },

  poweredByHeader: false,

  compress: true,

  async redirects() {
    const L = '/:lang(fr|en)'
    const STRIPE = process.env.NEXT_PUBLIC_STRIPE_ARCHITECTURE_URL?.trim() || 'https://buy.stripe.com/eVq7sEb2AfDe8Am2Raf7i0g'

    const retired = [
      ['/arsenal', ''],
      ['/maisons', ''],
      ['/nova', ''],
      ['/audit', ''],
      ['/brand-narrative-audit', ''],
      ['/brand-narrative-architecture', ''],
      ['/offres', '/offre'],
      ['/manifesto', ''],
      ['/manifesto/:path*', ''],
      ['/lectures', ''],
      ['/lectures/:path*', ''],
      ['/radar', ''],
      ['/radar/:path*', ''],
      ['/momentum', ''],
      ['/momentum/:path*', ''],
      ['/marques', '/offre'],
      ['/artistes', '/offre'],
      ['/lieux', '/offre'],
      ['/nocta', '/offre'],
      ['/marques-entreprises', '/offre'],
      ['/the-product', '/offre'],
      ['/the-room', '/offre'],
      ['/the-name', '/offre'],
      ['/case-studies', '/documents'],
      ['/sample-audit', '/documents/sillage'],
      ['/exemple-audit', '/documents/verso'],
    ]

    const current = [
      'about', 'offre',
      'strawberry-method', 'documents', 'moments', 'le-livre', 'thank-you',
      'cgv', 'mentions-legales', 'politique-confidentialite',
    ]

    const files = [
      'manifesto-reader.html', 'manifesto-box-set.html', 'manifesto-vol-2.html', 'manifesto-vol-3.html',
      'Vol_IV_The_Founder_Codex.html', 'Vol_V_The_Refusal_Manifesto.html',
      'Vol_VI_The_Aesthetic_Constitution.html', 'Vol_VII_The_Rarity_Engine.html',
      'Vol_VIII_The_Patience_Doctrine.html', 'Vol_IX_The_Devotion_Codex.html',
    ]

    return [
      { source: '/', destination: '/fr', permanent: false },

      ...retired.flatMap(([from, to]) => [
        { source: from, destination: `/fr${to}`, permanent: true },
        { source: `${L}${from}`, destination: `/:lang${to}`, permanent: true },
      ]),

      { source: `${L}/questionnaire/audit`, destination: '/:lang/questionnaire/architecture', permanent: true },

      { source: '/commander', destination: STRIPE, permanent: false },
      { source: `${L}/commander`, destination: STRIPE, permanent: false },

      ...current.map((slug) => ({ source: `/${slug}`, destination: `/fr/${slug}`, permanent: true })),

      { source: '/en/cgv', destination: '/fr/cgv', permanent: true },
      { source: '/en/mentions-legales', destination: '/fr/mentions-legales', permanent: true },
      { source: '/en/politique-confidentialite', destination: '/fr/politique-confidentialite', permanent: true },
      { source: '/fr/terms', destination: '/en/terms', permanent: true },
      { source: '/fr/legal-notice', destination: '/en/legal-notice', permanent: true },
      { source: '/fr/privacy', destination: '/en/privacy', permanent: true },
      { source: '/terms', destination: '/en/terms', permanent: true },
      { source: '/legal-notice', destination: '/en/legal-notice', permanent: true },
      { source: '/privacy', destination: '/en/privacy', permanent: true },

      { source: '/es', destination: '/fr', permanent: true },
      { source: '/es/:path*', destination: '/fr/:path*', permanent: true },

      { source: '/30-architectures-atlas.pdf', destination: '/fr#atlas', permanent: false },
      ...files.map((f) => ({ source: `/${f}`, destination: '/fr', permanent: true })),
    ]
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
