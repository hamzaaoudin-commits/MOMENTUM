"use client"

import { useState } from "react"
import type { Copy } from "@/lib/copy"
import type { Lang } from "@/lib/i18n"

/**
 * LE DIAGNOSTIC.
 * ---------------------------------------------------------------------------
 * C'est la seule interaction qui compte sur cette page, et elle n'est pas là
 * pour occuper les mains du lecteur.
 *
 * Le premier temps du cycle vendu s'appelle DIAGNOSTIC. Plutôt que d'écrire
 * « je commence par un diagnostic sérieux » et de demander qu'on me croie, la
 * page en fait passer un, tout de suite, gratuitement. Le lecteur ne lit plus
 * un argument sur le produit : il en consomme une version réduite. C'est la
 * preuve par démonstration, et c'est la plus difficile à contester.
 *
 * Effet secondaire volontaire : à la fin des cinq questions, le lecteur a
 * lui-même formulé son problème. Ce n'est plus moi qui lui dis que ses sorties
 * ne s'additionnent pas — c'est lui qui vient de répondre « non, ça repart de
 * zéro » à une question qu'il ne s'était jamais posée aussi crûment.
 *
 * Aucune question sur le volume de sorties : sortir beaucoup n'est pas un
 * signe de santé, c'est souvent le symptôme. Les cinq questions portent
 * uniquement sur la liaison, la direction et le retour extérieur.
 */


export function Diagnostic({ lang, t }: { lang: Lang; t: Copy }) {
  const QUESTIONS = t.diagnostic.questions
  const RESULTATS = t.diagnostic.resultats
  const [etape, setEtape] = useState(0)
  const [points, setPoints] = useState<number[]>([])

  const fini = etape >= QUESTIONS.length
  const total = points.reduce((a, b) => a + b, 0)
  const res = RESULTATS.find((r) => total <= r.max)!

  function repondre(p: number) {
    setPoints((prev) => [...prev, p])
    setEtape((e) => e + 1)
  }

  function recommencer() {
    setPoints([])
    setEtape(0)
  }

  if (fini) {
    return (
      <div className="carte-active">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <p className="index">{t.diagnostic.resultat}</p>
          <p className="font-mono text-[11px] tracking-[0.2em] text-craie-38">
            {total} / {QUESTIONS.length * 3}
          </p>
        </div>

        {/* La note, en barres : cinq réponses, quinze points possibles. */}
        <div className="mt-5 flex gap-1" aria-hidden>
          {Array.from({ length: 15 }, (_, i) => (
            <span key={i} className={`h-2 flex-1 ${i < total ? "bg-cobalt-vif" : "bg-filet-fort"}`} />
          ))}
        </div>

        <h3 className="titre-2 mt-7">{res.titre}</h3>
        <p className="corps mt-5 max-w-2xl text-[15.5px]">{res.texte}</p>
        <p className="verdict mt-8">{res.action}</p>

        <div className="mt-9 flex flex-wrap items-center gap-3.5">
          <a href={`/${lang}?diag=${res.code}#candidature`} className="bouton bouton-plein">
            {t.diagnostic.ctaResultat}
          </a>
          <button onClick={recommencer} className="bouton bouton-vide">
            {t.diagnostic.recommencer}
          </button>
        </div>
        <p className="etiquette mt-6 leading-relaxed">
          {t.diagnostic.note}
        </p>
      </div>
    )
  }

  const q = QUESTIONS[etape]

  return (
    <div className="carte-active">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <p className="index">{t.diagnostic.enTete}</p>
        <p className="font-mono text-[11px] tracking-[0.2em] text-craie-38">
          {String(etape + 1).padStart(2, "0")} / {String(QUESTIONS.length).padStart(2, "0")}
        </p>
      </div>

      <div className="mt-5 flex gap-1" aria-hidden>
        {QUESTIONS.map((_, i) => (
          <span key={i} className={`h-2 flex-1 ${i < etape ? "bg-cobalt-vif" : i === etape ? "bg-craie" : "bg-filet-fort"}`} />
        ))}
      </div>

      <h3 className="titre-3 mt-8 max-w-2xl text-[1.25rem]! md:text-[1.5rem]!">{q.texte}</h3>

      <div className="mt-8 space-y-2.5">
        {q.options.map((o) => (
          <button
            key={o.label}
            onClick={() => repondre(o.points)}
            className="group flex w-full items-center gap-4 border border-filet-fort px-5 py-4 text-left transition-colors duration-200 hover:border-craie hover:bg-craie hover:text-encre"
          >
            <span aria-hidden className="h-px w-4 shrink-0 bg-cobalt-vif transition-colors group-hover:bg-encre" />
            <span className="text-[15px] leading-snug">{o.label}</span>
          </button>
        ))}
      </div>

      {etape > 0 && (
        <button
          onClick={() => {
            setPoints((p) => p.slice(0, -1))
            setEtape((e) => e - 1)
          }}
          className="etiquette mt-7 transition-colors hover:text-craie"
        >
          {t.diagnostic.precedente}
        </button>
      )}
    </div>
  )
}
