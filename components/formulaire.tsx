"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { OFFRES } from "@/lib/config"

/**
 * Candidature, pas « contact ».
 *
 * Le mot compte : un formulaire de contact suggère un devis, une candidature
 * suggère une sélection. Les champs sont volontairement exigeants — quelqu'un
 * qui ne prend pas huit minutes pour décrire son projet ne tiendra pas un cycle
 * de trois mois, et le filtre à l'entrée protège autant l'artiste que moi.
 */

const NIVEAUX = [
  "Je commence à peine à sortir des morceaux",
  "Je sors régulièrement, audience encore petite",
  "J'ai une audience qui commence à répondre",
  "Je vis en partie de ma musique",
]

export function Formulaire() {
  const params = useSearchParams()
  const offreParDefaut = params.get("offre") ?? "development"

  const [etat, setEtat] = useState<"repos" | "envoi" | "ok" | "erreur">("repos")
  const [message, setMessage] = useState("")

  async function envoyer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (etat === "envoi") return
    setEtat("envoi")
    setMessage("")

    const data = Object.fromEntries(new FormData(e.currentTarget).entries())

    try {
      const r = await fetch("/api/candidature", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!r.ok) {
        const j = await r.json().catch(() => ({}))
        setEtat("erreur")
        setMessage(
          j?.error === "rate_limited"
            ? "Trop de tentatives depuis cette connexion. Réessaie dans quelques minutes."
            : "L'envoi n'a pas abouti. Réessaie, ou écris-moi directement par e-mail."
        )
        return
      }
      setEtat("ok")
    } catch {
      setEtat("erreur")
      setMessage("L'envoi n'a pas abouti. Vérifie ta connexion, ou écris-moi directement par e-mail.")
    }
  }

  if (etat === "ok") {
    return (
      <div className="carte-active">
        <p className="index">CANDIDATURE REÇUE</p>
        <h2 className="titre-3 mt-4">Tu reçois ton retour écrit sous 72 heures.</h2>
        <p className="corps mt-5 max-w-lg">
          J'écoute ton morceau en entier, plusieurs fois, et je t'écris ce que j'en pense — que la suite se fasse ou
          non. Si ton profil correspond, on cale ensuite un appel pour poser ton arc. Si ce n'est pas le bon moment, je
          te le dis franchement, et je te dis pourquoi.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={envoyer} className="space-y-7" noValidate>
      {/* Piège à robots : invisible pour un humain, rempli par les scripts. */}
      <div className="absolute left-[-9999px]" aria-hidden>
        <label htmlFor="site">Ne pas remplir</label>
        <input id="site" name="site" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="champ-label" htmlFor="nom">
            Nom d'artiste
          </label>
          <input id="nom" name="nom" required maxLength={80} className="champ" placeholder="Sous quel nom tu sors" />
        </div>
        <div>
          <label className="champ-label" htmlFor="email">
            E-mail
          </label>
          <input id="email" name="email" type="email" required maxLength={120} className="champ" placeholder="toi@exemple.com" />
        </div>
      </div>

      <div>
        <label className="champ-label" htmlFor="lien">
          Le morceau sur lequel tu veux mon retour (Spotify, SoundCloud, YouTube, Drive…)
        </label>
        <input id="lien" name="lien" required maxLength={300} className="champ" placeholder="https://" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="champ-label" htmlFor="niveau">
            Où tu en es
          </label>
          <select id="niveau" name="niveau" required className="champ" defaultValue="">
            <option value="" disabled>
              Choisir…
            </option>
            {NIVEAUX.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="champ-label" htmlFor="offre">
            Formule envisagée
          </label>
          <select id="offre" name="offre" required className="champ" defaultValue={offreParDefaut}>
            {OFFRES.map((o) => (
              <option key={o.id} value={o.id}>
                {o.nom} — {o.prix} €/mois
              </option>
            ))}
            <option value="indecis">Je ne sais pas encore</option>
          </select>
        </div>
      </div>

      <div>
        <label className="champ-label" htmlFor="projet">
          Ton projet en quelques lignes
        </label>
        <textarea
          id="projet"
          name="projet"
          required
          rows={4}
          maxLength={1500}
          className="champ resize-y"
          placeholder="Ce que tu fais, depuis quand, ce que tu veux construire."
        />
      </div>

      <div>
        <label className="champ-label" htmlFor="blocage">
          Qu'est-ce qui te bloque en ce moment ?
        </label>
        <textarea
          id="blocage"
          name="blocage"
          required
          rows={4}
          maxLength={1500}
          className="champ resize-y"
          placeholder="Sois précis. C'est le champ que je lis en premier."
        />
      </div>

      {etat === "erreur" && (
        <p role="alert" className="border-l-2 border-craie pl-4 text-[14px] font-light text-craie-80">
          {message}
        </p>
      )}

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <button type="submit" disabled={etat === "envoi"} className="bouton bouton-plein justify-center disabled:opacity-55">
          {etat === "envoi" ? "Envoi…" : "Envoyer et recevoir mon retour →"}
        </button>
        <p className="etiquette leading-relaxed">
          Retour écrit sous 72 h · Gratuit · Aucune inscription automatique
        </p>
      </div>
    </form>
  )
}
