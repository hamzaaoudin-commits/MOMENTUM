import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: {
    title: 'Les moments : ce que nous faisons pour chacun',
    description:
      "Sortie d'un single ou d'un album, d'un film, ouverture d'un lieu, lancement de marque ou de produit, levée de fonds, repositionnement. Pour chaque moment : ce que nous faisons, et ce que vous recevez.",
  },
  en: {
    title: 'The moments: what we do for each',
    description:
      'A single or album release, a film, a venue opening, a brand or product launch, a fundraise, a repositioning. For each moment: what we do, and what you receive.',
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
    alternates: alternatesFor('/moments', lang),
    openGraph: { title: c.title, description: c.description, url: `${SITE}/${lang}/moments`, images: [{ url: '/og-image.png', width: 1200, height: 630 }] },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
