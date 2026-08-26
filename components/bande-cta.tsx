import Link from "next/link"
import { Reveal } from "./reveal"
import { CAPACITE } from "@/lib/config"

export function BandeCta({
  titre,
  texte,
  cta = "Parler de mon projet",
}: {
  titre: string
  texte: string
  cta?: string
}) {
  return (
    <section className="bloc border-t border-filet bg-encre-haute">
      <div className="cadre-md text-center">
        <Reveal>
          <h2 className="titre-2 text-balance">{titre}</h2>
          <p className="chapo mx-auto mt-7 max-w-xl text-balance">{texte}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Link href="/candidature" className="bouton bouton-plein">
              {cta} →
            </Link>
            <Link href="/offres" className="bouton bouton-vide">
              Voir les trois formules
            </Link>
          </div>
          <p className="etiquette mt-8">
            À partir de 149 € / mois · {CAPACITE} artistes à la fois · Aucun pourcentage sur ta carrière
          </p>
        </Reveal>
      </div>
    </section>
  )
}
