import type { Metadata } from "next"
import { Suspense } from "react"
import { Reveal } from "@/components/reveal"
import { Formulaire } from "@/components/formulaire"
import { CONTACT } from "@/lib/config"
import { Places } from "@/components/offre-unique"

export const metadata: Metadata = {
  title: "Candidater",
  description:
    "Quelques questions sur ton projet — et un retour écrit sur l'un de tes morceaux, avant que tu paies quoi que ce soit. Réponse sous 72 heures, y compris pour dire non.",
  robots: { index: true, follow: true },
}

const ETAPES = [
  ["01", "Tu candidates", "Quelques questions honnêtes. Compte huit minutes si tu réponds sérieusement."],
  ["02", "Tu reçois un retour écrit", "J'écoute le morceau que tu m'envoies, en entier, et je t'écris ce que j'en pense. Gratuitement, que la suite se fasse ou non."],
  ["03", "On décide", "Si le profil correspond, un appel pour poser ton arc et le cap du premier mois. Sinon, je te dis pourquoi."],
]

export default function Candidature() {
  return (
    <section className="bloc pt-[150px] md:pt-[180px]">
      <div className="cadre grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <Reveal>
            <p className="index">CANDIDATURE</p>
            <h1 className="titre-2 mt-6 text-balance">
              Envoie-moi un morceau. Je te dis ce que j&rsquo;en pense.
            </h1>
            <p className="corps mt-7 max-w-md">
              Gratuitement, avant toute question d&rsquo;argent. C&rsquo;est la seule façon honnête de juger un
              conseiller&nbsp;: sur la qualité de son conseil, pas sur celle de sa page de vente.
            </p>
            <p className="corps mt-5 max-w-md">
              Ce formulaire n&rsquo;est pas une formalité — c&rsquo;est déjà le début du diagnostic, et la qualité de
              tes réponses détermine celle de la mienne.
            </p>
            <div className="mt-8">
              <Places />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 border-t border-filet">
              {ETAPES.map(([n, titre, texte]) => (
                <div key={n} className="grid grid-cols-[42px_1fr] gap-4 border-b border-filet py-6">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-cobalt-vif">{n}</span>
                  <div>
                    <p className="text-[14.5px] text-craie">{titre}</p>
                    <p className="corps mt-1.5 text-[13.5px]">{texte}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="etiquette mt-10 leading-relaxed">
              Une question avant de candidater ?<br />
              <a href={`mailto:${CONTACT.email}`} className="text-craie transition-colors hover:text-craie">
                {CONTACT.email}
              </a>
            </p>
          </Reveal>
        </div>

        <Reveal delay={90}>
          <div className="relative">
            <Suspense fallback={<p className="etiquette">Chargement du formulaire…</p>}>
              <Formulaire />
            </Suspense>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
