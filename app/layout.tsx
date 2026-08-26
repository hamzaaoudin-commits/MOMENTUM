import type { Metadata } from "next"
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import "./globals.css"

/**
 * Instrument Serif porte l'expression, Geist le texte, Geist Mono les index et
 * les prix. Trois rôles, trois familles — aucune ne fait le travail d'une autre.
 */
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
})

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://momentum.studio"),
  title: {
    default: "MOMENTUM — Conseil stratégique pour artistes indépendants",
    template: "%s · MOMENTUM",
  },
  description:
    "Tu ne manques pas de travail. Tu manques d'élan. MOMENTUM est un accompagnement stratégique mensuel pour artistes indépendants : regard honnête sur ton art, stratégie de carrière, priorités claires. À partir de 149 €/mois, sans pourcentage.",
  openGraph: {
    title: "MOMENTUM — Conseil stratégique pour artistes indépendants",
    description:
      "Un conseiller dans ton coin, chaque mois. Pour arrêter de t'agiter et commencer à construire une trajectoire.",
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${instrument.variable} ${geist.variable} ${geistMono.variable}`}>
      <body>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:bg-cobalt focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu
        </a>
        <Nav />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
