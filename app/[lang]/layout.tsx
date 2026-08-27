import type { Metadata } from "next"
import { Archivo, JetBrains_Mono } from "next/font/google"
import { notFound } from "next/navigation"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { LANGS, LOCALE, isLang, type Lang } from "@/lib/i18n"
import { getCopy } from "@/lib/copy"
import "../globals.css"

/**
 * C'est ici que vit la balise <html>, pas dans un layout racine séparé.
 *
 * Un layout racine au-dessus du segment [lang] ne connaît pas la langue : il
 * écrirait lang="fr" sur les deux versions, à charge pour un script de corriger
 * après coup. Or un moteur de recherche lit le HTML brut et un lecteur d'écran
 * choisit sa voix avant l'exécution du script. En faisant du layout de langue
 * le layout racine, l'attribut est juste dès la génération.
 *
 * La contrepartie : la redirection de / vit dans middleware.ts.
 */

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
})

/** Les deux langues sont générées à la construction : aucune n'est rendue à la demande. */
export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang: brut } = await params
  if (!isLang(brut)) return {}
  const t = getCopy(brut)

  return {
    metadataBase: new URL("https://momentum.studio"),
    title: t.meta.titre,
    description: t.meta.description,
    openGraph: {
      title: t.meta.ogTitre,
      description: t.meta.ogDescription,
      locale: LOCALE[brut],
      type: "website",
      /* Une image par langue : le titre y est composé, donc partager la page
         anglaise avec une accroche française annulerait tout le travail de
         traduction au moment précis où le lien circule. */
      images: [{ url: `/og-${brut}.png`, width: 1200, height: 630, alt: t.meta.ogTitre }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.ogTitre,
      description: t.meta.ogDescription,
      images: [`/og-${brut}.png`],
    },
    /* hreflang : chaque version déclare l'autre. Sans ça, un moteur traite les
       deux pages comme des doublons sur le même sujet et n'en garde qu'une. */
    alternates: {
      canonical: `/${brut}`,
      languages: { fr: "/fr", en: "/en", "x-default": "/fr" },
    },
    robots: { index: true, follow: true },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang: brut } = await params
  if (!isLang(brut)) notFound()
  const lang: Lang = brut
  const t = getCopy(lang)

  return (
    <html lang={lang} className={`${archivo.variable} ${jetbrains.variable}`}>
      <body>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:bg-cobalt focus:px-4 focus:py-2 focus:text-white"
        >
          {lang === "fr" ? "Aller au contenu" : "Skip to content"}
        </a>
        <Nav lang={lang} t={t} />
        <main id="contenu">{children}</main>
        <Footer lang={lang} t={t} />
      </body>
    </html>
  )
}
