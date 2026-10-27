import type { Metadata } from 'next'
import { alternatesPair, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: { title: "Mentions légales (EN)", description: "Legal notice for Strawberry Production." },
  en: { title: "Legal notice", description: "Legal notice for Strawberry Production." },
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
    title: c.title,
    description: c.description,
    alternates: alternatesPair({ fr: '/mentions-legales', en: '/legal-notice' }, lang),
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE}/${lang}/legal-notice`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
