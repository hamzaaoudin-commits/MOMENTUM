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
    "Tes sorties ne s'additionnent pas parce qu'elles ne se racontent pas. MOMENTUM t'aide à passer de titres isolés à un arc qui se construit : un conseiller stratégique dans ton coin, chaque mois. 299 €/mois, sans engagement, sans pourcentage.",
  openGraph: {
    title: "MOMENTUM — Conseil stratégique pour artistes indépendants",
    description:
      "Tu ne manques pas de travail. Tu manques d'élan. Un conseiller stratégique dans ton coin, chaque mois.",
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
