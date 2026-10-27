import type { Metadata } from 'next'
import { alternatesPair, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: { title: "Conditions générales de vente", description: "Conditions générales de vente de MOMENTUM." },
  en: { title: "Terms of sale (FR)", description: "French terms of sale for MOMENTUM." },
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
    alternates: alternatesPair({ fr: '/cgv', en: '/terms' }, lang),
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE}/${lang}/cgv`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
