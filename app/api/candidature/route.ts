import { NextResponse, type NextRequest } from "next/server"

/**
 * Réception des candidatures, côté serveur.
 *
 * Pourquoi ne pas poster directement vers Formspree depuis le navigateur :
 * l'identifiant du formulaire se retrouverait dans le bundle client, lisible
 * par n'importe qui, et donc utilisable pour inonder la boîte mail en
 * contournant toute vérification. Le navigateur ne parle qu'à notre propre
 * domaine ; la destination réelle reste une variable d'environnement serveur.
 *
 * Variable à définir sur Vercel : FORMSPREE_ID
 */

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const FORMSPREE_ID = process.env.FORMSPREE_ID ?? ""

const MAX_PAR_FENETRE = 3
const FENETRE_MS = 10 * 60 * 1000

/**
 * Compteur en mémoire. En serverless il est par instance : c'est un ralentisseur,
 * pas une garantie. Il suffit à stopper les doubles clics et le flood basique ;
 * la protection durable appartient aux réglages anti-abus de Formspree.
 */
const coups = new Map<string, number[]>()

function tropDeCoups(ip: string): boolean {
  const now = Date.now()
  const recents = (coups.get(ip) ?? []).filter((t) => now - t < FENETRE_MS)
  recents.push(now)
  coups.set(ip, recents)
  if (coups.size > 5000) coups.clear() // cette map ne doit jamais croître sans borne
  return recents.length > MAX_PAR_FENETRE
}

function ipClient(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for")
  return (fwd ? fwd.split(",")[0].trim() : req.headers.get("x-real-ip")) ?? "inconnue"
}

function nettoyer(v: unknown, max: number): string {
  if (typeof v !== "string") return ""
  return v.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max)
}

function emailValide(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) && v.length <= 120
}

export async function POST(req: NextRequest) {
  // On n'accepte que les envois partis de nos propres pages.
  const origin = req.headers.get("origin")
  const host = req.headers.get("host")
  if (origin && host && !origin.endsWith(host)) {
    return NextResponse.json({ ok: false }, { status: 403 })
  }

  if (tropDeCoups(ipClient(req))) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 })
  }

  let brut: Record<string, unknown>
  try {
    brut = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: "json_invalide" }, { status: 400 })
  }

  // Piège à robots : un humain ne voit jamais ce champ, donc ne le remplit jamais.
  // On répond 200 pour ne pas apprendre au script qu'il a été détecté.
  if (nettoyer(brut.site, 50)) {
    return NextResponse.json({ ok: true })
  }

  const donnees = {
    nom: nettoyer(brut.nom, 80),
    email: nettoyer(brut.email, 120),
    lien: nettoyer(brut.lien, 300),
    niveau: nettoyer(brut.niveau, 120),
    offre: nettoyer(brut.offre, 40),
    projet: nettoyer(brut.projet, 1500),
    blocage: nettoyer(brut.blocage, 1500),
  }

  if (!donnees.nom || !emailValide(donnees.email) || !donnees.projet || !donnees.blocage) {
    return NextResponse.json({ ok: false, error: "champs_manquants" }, { status: 400 })
  }

  if (!FORMSPREE_ID) {
    // Sans destination configurée, on refuse plutôt que de prétendre avoir envoyé.
    console.error("FORMSPREE_ID absent : candidature non transmise.")
    return NextResponse.json({ ok: false, error: "non_configure" }, { status: 500 })
  }

  const r = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...donnees,
      _subject: `MOMENTUM — candidature : ${donnees.nom} (${donnees.offre})`,
    }),
  })

  if (!r.ok) {
    return NextResponse.json({ ok: false, error: "envoi_echoue" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
