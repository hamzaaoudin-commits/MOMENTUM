import { NextResponse, type NextRequest } from "next/server"
import { LANG_DEFAUT } from "@/lib/i18n"

/**
 * La racine n'affiche rien : elle oriente.
 *
 * Fichier `proxy.ts` et non `middleware.ts` : Next 16 a renommé la convention,
 * et l'ancienne est dépréciée — elle fonctionne encore mais alerte à chaque
 * build.
 *
 * On lit Accept-Language plutôt que d'envoyer tout le monde sur /fr. Un
 * visiteur anglophone qui reçoit une page française referme avant même d'avoir
 * repéré le sélecteur — celui-ci sert à corriger la devinette, pas à la
 * remplacer.
 */
export function proxy(req: NextRequest) {
  if (req.nextUrl.pathname !== "/") return NextResponse.next()

  const accept = req.headers.get("accept-language") ?? ""
  const premiere = (accept.split(",")[0] ?? "").toLowerCase()
  const lang = premiere.startsWith("en") ? "en" : LANG_DEFAUT

  const url = req.nextUrl.clone()
  url.pathname = `/${lang}`
  return NextResponse.redirect(url)
}

export const config = { matcher: "/" }
