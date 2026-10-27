import type { Metadata } from 'next'
import { alternatesFor, SITE } from '@/lib/routing'
import { isLang, type Lang } from '@/lib/lang'

const COPY: Record<Lang, { title: string; description: string }> = {
  fr: { title: "Commande confirmée", description: "Votre commande est confirmée. Voici ce qui se passe maintenant." },
  en: { title: "Commission confirmed", description: "Your commission is confirmed. Here is what happens now." },
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
    robots: { index: false, follow: false },
    description: c.description,
    alternates: alternatesFor('/thank-you', lang),
    openGraph: {
      title: c.title,
      description: c.description,
      url: `${SITE}/${lang}/thank-you`,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
