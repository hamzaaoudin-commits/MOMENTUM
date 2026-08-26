import type { ReactNode } from "react"
import { Reveal } from "./reveal"

/**
 * En-tête de section.
 *
 * L'index numéroté n'est pas un ornement : la page est une démonstration qui se
 * lit dans l'ordre, et le public visé lit des tracklists. Le numéro dit au
 * lecteur où il en est dans l'argument.
 */
export function TeteSection({
  index,
  etiquette,
  titre,
  chapo,
}: {
  index: string
  etiquette: string
  titre: ReactNode
  chapo?: ReactNode
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="mb-5 flex items-center gap-4">
        <span className="index">{index}</span>
        <span className="h-px flex-1 max-w-16 bg-filet-cobalt" />
        <span className="etiquette">{etiquette}</span>
      </div>
      <h2 className="titre-2 max-w-4xl text-balance">{titre}</h2>
      {chapo ? <p className="chapo mt-6 max-w-2xl">{chapo}</p> : null}
    </Reveal>
  )
}
