import type { Metadata } from 'next'
import { Bricolage_Grotesque, Hanken_Grotesk, Instrument_Serif, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { notFound } from 'next/navigation'
import { LanguageProvider } from '@/lib/i18n'
import { LANGS, isLang, type Lang } from '@/lib/lang'
import { alternatesFor, SITE } from '@/lib/routing'
import '../globals.css'
import { LoadingIntro } from '@/components/strawberry/loading-intro'
import { RevealOnScroll } from '@/components/strawberry/reveal-on-scroll'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-instrument',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

const OG_LOCALE: Record<Lang, string> = { fr: 'fr_FR', en: 'en_US' }

const COPY: Record<Lang, { title: string; description: string; ogTitle: string; ogDesc: string }> = {
  fr: {
    title: 'Strawberry Production · Narration des moments décisifs',
    description:
      "Un lancement, une ouverture, une sortie, une levée de fonds. Strawberry Production écrit le récit de votre moment, puis le met en scène jusqu'au jour J et au-delà. Depuis Paris.",
    ogTitle: 'Strawberry Production · Narration des moments décisifs',
    ogDesc:
      "Un moment décisif n'arrive qu'une fois. Nous écrivons ce que le monde en retiendra, puis nous le mettons en scène. Un studio de narration, depuis Paris.",
  },
  en: {
    title: 'Strawberry Production · Narrative for decisive moments',
    description:
      'A launch, an opening, a release, a fundraise. Strawberry Production writes the story of your moment, then stages it, up to the day and beyond. From Paris.',
    ogTitle: 'Strawberry Production · Narrative for decisive moments',
    ogDesc:
      "A decisive moment only happens once. We write what the world will remember, then we stage it. A narrative studio from Paris.",
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : 'fr'
  const c = COPY[lang]

  return {
    metadataBase: new URL(SITE),
    title: { default: c.title, template: '%s · Strawberry Production' },
    description: c.description,
    authors: [{ name: 'Hamza El Jaouahiry', url: SITE }],
    creator: 'Hamza El Jaouahiry',
    publisher: 'Strawberry Production',
    formatDetection: { email: false, address: false, telephone: false },
    alternates: alternatesFor('/', lang),
    openGraph: {
      type: 'website',
      locale: OG_LOCALE[lang],
      alternateLocale: LANGS.filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      url: `${SITE}/${lang}`,
      siteName: 'Strawberry Production',
      title: c.ogTitle,
      description: c.ogDesc,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Strawberry Production — Narration des moments décisifs · Paris',
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.ogTitle,
      description: c.ogDesc,
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
    manifest: '/site.webmanifest',
    category: 'business',
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  if (!isLang(raw)) notFound()
  const lang: Lang = raw

  return (
    <html lang={lang} className={`${bricolage.variable} ${hanken.variable} ${instrument.variable} ${spaceMono.variable}`}>
      <body className="font-sans antialiased bg-[#0a0a0a] text-white overflow-x-hidden">
        <LoadingIntro />
        <RevealOnScroll />
        <LanguageProvider lang={lang}>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Strawberry Production',
              url: `${SITE}/${lang}`,
              founder: { '@type': 'Person', name: 'Hamza El Jaouahiry' },
              description: COPY[lang].description,
              address: { '@type': 'PostalAddress', addressLocality: 'Paris', addressCountry: 'FR' },
              priceRange: '2900€ – 6000€+',
              availableLanguage: ['French', 'English'],
              sameAs: ['https://instagram.com/strawberry_prods'],
            }),
          }}
        />
      </body>
    </html>
  )
}
