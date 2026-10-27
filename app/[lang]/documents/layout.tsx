import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: {
    title: 'Les documents publiés',
    description:
      "Deux exemples du récit, la phase 1 de chaque moment : les six pièces de L'Architecture Narrative, dans l'ordre S.T.R.A.W., sur deux maisons de démonstration déclarées comme telles.",
  },
  en: {
    title: 'The published documents',
    description:
      'Two samples of the story, phase 1 of every moment: the six pieces of The Narrative Architecture, in S.T.R.A.W. order, on two demonstration houses declared as such.',
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
    title: c.title,
    description: c.description,
    alternates: alternatesFor('/documents', lang),
    openGraph: { title: c.title, description: c.description, url: `${SITE}/${lang}/documents`, images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
