import type { Metadata } from "next"
import { Archivo, JetBrains_Mono } from "next/font/google"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import "./globals.css"

/**
 * Archivo pour tout le texte, JetBrains Mono pour les index et les prix.
 *
 * Ni Geist ni Inter : ce sont les polices par défaut des produits Vercel et
 * OpenAI, et un œil un peu entraîné les reconnaît en une seconde. Archivo est
 * une grotesque américaine large, taillée pour l'affiche, avec un axe de
 * graisse complet — c'est cet axe qui remplace le couple serif/sans.
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
    <html lang="fr" className={`${archivo.variable} ${jetbrains.variable}`}>
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
