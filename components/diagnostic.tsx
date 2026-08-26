"use client"

import { useState } from "react"

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

type Question = { id: string; texte: string; options: { label: string; points: number }[] }

const QUESTIONS: Question[] = [
  {
    id: "phrase",
    texte: "Peux-tu décrire ton projet en une phrase que tu assumes à voix haute ?",
    options: [
      { label: "Oui, elle est écrite et je la connais par cœur", points: 3 },
      { label: "À peu près, mais elle change selon les jours", points: 1 },
      { label: "Non, je n'ai jamais réussi à la formuler", points: 0 },
    ],
  },
  {
    id: "suivant",
    texte: "Quand tu sors un titre, tu sais déjà quel est le suivant ?",
    options: [
      { label: "Oui, les trois prochains, et pourquoi dans cet ordre", points: 3 },
      { label: "Le suivant seulement", points: 2 },
      { label: "Non, je décide au moment venu", points: 0 },
    ],
  },
  {
    id: "retour",
    texte: "Après une sortie, récupères-tu des auditeurs qui reviennent pour la suivante ?",
    options: [
      { label: "Oui, une base qui répond à chaque fois", points: 3 },
      { label: "Quelques-uns, difficile à dire", points: 1 },
      { label: "Non, chaque sortie repart de zéro", points: 0 },
    ],
  },
  {
    id: "progression",
    texte: "Ton dernier titre a-t-il fait mieux que le précédent ?",
    options: [
      { label: "Oui, et je sais pourquoi", points: 3 },
      { label: "Oui, mais je ne sais pas pourquoi", points: 2 },
      { label: "Non, ou aucune idée", points: 0 },
    ],
  },
  {
    id: "regard",
    texte: "Qui te dit honnêtement ce qui ne va pas dans ton travail ?",
    options: [
      { label: "Quelqu'un du métier, régulièrement", points: 3 },
      { label: "Des proches, quand j'insiste", points: 1 },
      { label: "Personne", points: 0 },
    ],
  },
]

const RESULTATS = [
  {
    max: 5,
    code: "agitation",
    titre: "Tu es en agitation",
    texte:
      "Tu travailles, mais rien ne s'accumule. Aucune de tes sorties ne prépare la suivante, personne ne te renvoie une lecture honnête, et tu ne peux pas dire en une phrase ce que ton projet promet. Ce n'est pas un problème de talent ni d'effort : c'est un problème de liaison. Concrètement, à ce stade, une année de plus au même rythme te laissera exactement où tu es aujourd'hui — avec douze titres de plus dans le catalogue.",
    action: "C'est précisément le cas où le premier cycle change le plus de choses.",
  },
  {
    max: 10,
    code: "catalogue",
    titre: "Tu as un catalogue, pas un arc",
    texte:
      "Certaines choses tiennent déjà : tu as des intuitions justes, parfois une direction. Mais elle n'est pas explicite, donc elle n'est pas tenue, donc elle ne compose pas. Tes sorties se ressemblent sans se répondre. C'est le stade le plus frustrant, parce que le travail est là et que le résultat reste plat — et c'est aussi celui où quelques décisions bien placées produisent l'écart le plus visible.",
    action: "Il te manque une direction écrite et quelqu'un pour te la faire tenir.",
  },
  {
    max: 15,
    code: "arc",
    titre: "Ton arc a commencé",
    texte:
      "Tu as déjà l'essentiel : une direction que tu sais formuler, une idée de la suite, un début d'audience qui revient. Tu n'as pas besoin qu'on répare quoi que ce soit. Ce qui te ferait gagner du temps maintenant, c'est un regard extérieur régulier sur les arbitrages — quel titre en single, quelle opportunité vaut ton temps, quoi abandonner — pour ne pas casser toi-même ce que tu viens de construire.",
    action: "Sois honnête : ce diagnostic vaut ce que valent tes réponses.",
  },
]

export function Diagnostic() {
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
          <p className="index">RÉSULTAT</p>
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
          <a href={`/?diag=${res.code}#candidature`} className="bouton bouton-plein">
            Recevoir un vrai retour sur un morceau ↓
          </a>
          <button onClick={recommencer} className="bouton bouton-vide">
            Recommencer
          </button>
        </div>
        <p className="etiquette mt-6 leading-relaxed">
          Ce diagnostic est une version réduite du premier temps du cycle. Le vrai porte sur ta musique, pas sur cinq
          cases.
        </p>
      </div>
    )
  }

  const q = QUESTIONS[etape]

  return (
    <div className="carte-active">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <p className="index">DIAGNOSTIC — 2 MINUTES</p>
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
          ← Question précédente
        </button>
      )}
    </div>
  )
}
