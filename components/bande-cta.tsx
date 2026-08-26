import Link from "next/link"
import { Reveal } from "./reveal"
import { Places } from "./offre-unique"

export function BandeCta({
  titre,
  texte,
  cta = "Candidater",
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
          <div className="mt-10 flex justify-center">
            <Link href="/candidature" className="bouton bouton-plein">
              {cta} →
            </Link>
          </div>
          <div className="mt-9 flex justify-center">
            <Places compact />
          </div>
          <p className="etiquette mt-5">
            Réponse sous 72 h · Sans engagement · Premier cycle remboursé si tu n&rsquo;en tires rien
          </p>
        </Reveal>
      </div>
    </section>
  )
}
