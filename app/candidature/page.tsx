import type { Metadata } from "next"
import { Suspense } from "react"
import { Reveal } from "@/components/reveal"
import { Formulaire } from "@/components/formulaire"
import { CAPACITE, CONTACT } from "@/lib/config"

export const metadata: Metadata = {
  title: "Candidater",
  description:
    "Quelques questions sur ton projet, tes objectifs et ton niveau actuel. Réponse sous 72 heures, y compris pour dire non.",
  robots: { index: true, follow: true },
}

const ETAPES = [
  ["01", "Tu candidates", "Quelques questions honnêtes. Compte huit minutes si tu réponds sérieusement."],
  ["02", "J'écoute", "J'écoute ce que tu m'as envoyé et je regarde ton univers avant de te répondre."],
  ["03", "On échange", "Si le profil correspond, un premier appel pour définir le niveau adapté — et le cap du premier mois."],
]

export default function Candidature() {
  return (
    <section className="bloc pt-[150px] md:pt-[180px]">
      <div className="cadre grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <Reveal>
            <p className="index">CANDIDATURE</p>
            <h1 className="titre-2 mt-6 text-balance">Parle-moi de ton projet.</h1>
            <p className="corps mt-7 max-w-md">
              Je n'accompagne que {CAPACITE} artistes à la fois. Ce formulaire n'est pas une formalité : c'est déjà le
              début du diagnostic, et la qualité de tes réponses détermine celle de la mienne.
            </p>
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
              <a href={`mailto:${CONTACT.email}`} className="text-cuivre-vif transition-colors hover:text-cuivre">
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
