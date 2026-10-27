import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: { title: "VERSO — les six pièces de l'Architecture Narrative", description: "Un second exemple du récit, la phase 1 de chaque moment (L'Architecture Narrative, 2 900 €), sur une maison d'un autre métier : plateforme, diagnostic, carte, décisions, playbooks, langage." },
  en: { title: "VERSO — the six pieces of the Narrative Architecture", description: "A second sample of the story, phase 1 of every moment (The Narrative Architecture, €2,900), on a house from another trade: platform, diagnosis, map, decisions, playbooks, language." },
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
    alternates: alternatesFor('/documents/verso', lang),
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE}/${lang}/documents/verso`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
