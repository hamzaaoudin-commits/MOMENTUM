import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: { title: "SILLAGE — les six pièces de l'Architecture Narrative", description: "Un exemple du récit, la phase 1 de chaque moment (L'Architecture Narrative, 2 900 €) : les six pièces, dans l'ordre S.T.R.A.W., sur une maison inventée. Lisez-le pour l'écriture." },
  en: { title: "SILLAGE — the six pieces of the Narrative Architecture", description: "A sample of the story, phase 1 of every moment (The Narrative Architecture, €2,900): the six pieces, in S.T.R.A.W. order, on an invented house. Read it for the writing." },
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
    alternates: alternatesFor('/documents/sillage', lang),
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE}/${lang}/documents/sillage`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
