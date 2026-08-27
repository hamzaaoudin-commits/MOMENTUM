"use client"

import { useEffect, useState } from "react"
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

/**
 * Choix visible.
 *
 * Un <select> natif est gris, minuscule, ouvre un menu système que je ne
 * contrôle pas, et rend la sélection invisible tant qu'on ne le déplie pas.
 * Sur un formulaire de candidature — le dernier obstacle avant l'envoi —
 * chacune de ces frictions coûte des candidatures.
 *
 * Ici : des blocs pleine largeur, cliquables, dont l'état sélectionné est
 * blanc sur noir. Aucun doute possible sur ce qui est coché, et la même
 * grammaire que les réponses du diagnostic plus haut.
 */
function Choix({
  nom,
  options,
  valeur,
  onChange,
  colonnes = 1,
}: {
  nom: string
  options: { valeur: string; label: string }[]
  valeur: string
  onChange: (v: string) => void
  colonnes?: 1 | 2
}) {
  return (
    <div role="radiogroup" aria-label={nom} className={`grid gap-2 ${colonnes === 2 ? "sm:grid-cols-2" : ""}`}>
      <input type="hidden" name={nom} value={valeur} />
      {options.map((o) => {
        const actif = valeur === o.valeur
        return (
          <button
            key={o.valeur}
            type="button"
            role="radio"
            aria-checked={actif}
            onClick={() => onChange(o.valeur)}
            className={`flex items-center gap-3.5 border px-4 py-3.5 text-left text-[14.5px] leading-snug transition-colors duration-200 ${
              actif
                ? "border-craie bg-craie text-encre"
                : "border-filet-fort text-craie-65 hover:border-craie hover:text-craie"
            }`}
          >
            <span
              aria-hidden
              className={`h-2.5 w-2.5 shrink-0 border ${actif ? "border-encre bg-encre" : "border-craie-38"}`}
            />
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

const NIVEAUX = [
  { valeur: "debut", label: "Je commence à peine à sortir des morceaux" },
  { valeur: "regulier", label: "Je sors régulièrement, audience encore petite" },
  { valeur: "audience", label: "J'ai une audience qui commence à répondre" },
  { valeur: "pro", label: "Je vis en partie de ma musique" },
]

export function Formulaire() {
  const params = useSearchParams()
  const offreParDefaut = params.get("offre") ?? "development"
  const diag = params.get("diag") ?? ""

  const [offre, setOffre] = useState(offreParDefaut)
  const [niveau, setNiveau] = useState("")
  const [etat, setEtat] = useState<"repos" | "envoi" | "ok" | "erreur">("repos")

  // Sur une page unique, le lecteur choisit son niveau plus haut puis descend
  // ici : le champ doit suivre ce choix, ce qu'un defaultValue ne fait pas.
  useEffect(() => setOffre(offreParDefaut), [offreParDefaut])
  const [message, setMessage] = useState("")

  async function envoyer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (etat === "envoi") return
    setEtat("envoi")
    setMessage("")

    if (!niveau) {
      setEtat("erreur")
      setMessage("Indiquez où vous en êtes : c'est ce qui détermine le niveau d'accompagnement adapté.")
      return
    }

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
      setMessage("L'envoi n'a pas abouti. Vérifie votre connexion, ou écris-moi directement par e-mail.")
    }
  }

  if (etat === "ok") {
    return (
      <div className="carte-active">
        <p className="index">CANDIDATURE REÇUE</p>
        <h2 className="titre-3 mt-4">Vous recevez votre retour écrit sous 72 heures.</h2>
        <p className="corps mt-5 max-w-lg">
          J'écoute votre morceau en entier, plusieurs fois, et je vous écris ce que j'en pense — que la suite se fasse ou
          non. Si votre profil correspond, on cale ensuite un appel pour poser votre arc. Si ce n'est pas le bon moment, je
          vous le dis franchement, et je vous dis pourquoi.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={envoyer} className="space-y-7" noValidate>
      {/* Résultat du diagnostic, s'il a été passé. Le candidat n'a pas à le
          retaper, et l'information arrive avec la candidature. */}
      {diag ? <input type="hidden" name="diagnostic" value={diag} /> : null}

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
          <input id="nom" name="nom" required maxLength={80} className="champ" placeholder="Sous quel nom vous sortez" />
        </div>
        <div>
          <label className="champ-label" htmlFor="email">
            E-mail
          </label>
          <input id="email" name="email" type="email" required maxLength={120} className="champ" placeholder="vous@exemple.com" />
        </div>
      </div>

      <div>
        <label className="champ-label" htmlFor="lien">
          Le morceau sur lequel vous voulez mon retour (Spotify, SoundCloud, YouTube, Drive…)
        </label>
        <input id="lien" name="lien" required maxLength={300} className="champ" placeholder="https://" />
      </div>

      <div>
        <p className="champ-label">Où vous en êtes</p>
        <Choix nom="niveau" options={NIVEAUX} valeur={niveau} onChange={setNiveau} />
      </div>

      <div>
        <p className="champ-label">Formule envisagée</p>
        <Choix
          nom="offre"
          colonnes={2}
          valeur={offre}
          onChange={setOffre}
          options={[
            ...OFFRES.map((o) => ({ valeur: o.id, label: `${o.nom} — ${o.prix} €/mois` })),
            { valeur: "indecis", label: "Je ne sais pas encore" },
          ]}
        />
      </div>

      <div>
        <label className="champ-label" htmlFor="projet">
          Votre projet en quelques lignes
        </label>
        <textarea
          id="projet"
          name="projet"
          required
          rows={4}
          maxLength={1500}
          className="champ resize-y"
          placeholder="Ce que vous faites, depuis quand, ce que vous voulez construire."
        />
      </div>

      <div>
        <label className="champ-label" htmlFor="blocage">
          Qu'est-ce qui vous bloque en ce moment ?
        </label>
        <textarea
          id="blocage"
          name="blocage"
          required
          rows={4}
          maxLength={1500}
          className="champ resize-y"
          placeholder="Soyez précis. C'est le champ que je lis en premier."
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
