import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: {
    title: 'La Doctrine la plus claire — le livre',
    description:
      "L'architecture narrative à l'âge de la machine. 158 pages, en français et en anglais : la doctrine, la méthode en cinq étapes, et sa démonstration de bout en bout sur trois maisons.",
  },
  en: {
    title: 'The Clearest Doctrine — the book',
    description:
      'Narrative architecture in the age of the machine. 158 pages, in French and English: the doctrine, the five-stage method, and its end-to-end demonstration on three houses.',
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
    alternates: alternatesFor('/le-livre', lang),
    openGraph: {
      type: 'book',
      title: c.title,
      description: c.description,
      url: `${SITE}/${lang}/le-livre`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
