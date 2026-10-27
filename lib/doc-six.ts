import type { Lang } from "@/lib/lang"

export type PieceFrame = {
  n: string
  title: string
  subtitle: string
  lead: string
}

export type StrawStep = { letter: string; name: string; verb: string; pieces: string }

export type SixFrame = {
  pieces: PieceFrame[]
  straw: StrawStep[]
  strawKicker: string
  strawTitle: string
  strawNote: string
  contentsTitle: string
  readerPrev: string
  readerNext: string
  readerPageOfTemplate: string
  readerOfCount: string
  ctaTitle: string
  ctaBody: string
  ctaPrimary: string
  ctaFoot: string
  calendarKey: string
  calendarValue: string
  containsKey: string
  containsValue: string
}

export const SIX: Record<Lang, SixFrame> = {
  fr: {
    pieces: [
      {
        n: "01",
        title: "La plateforme",
        subtitle: "S · Soul — Trouver l'âme",
        lead: "Raison d'être, positionnement, valeurs, personnalité, ton de voix : la constitution de la maison, écrite à partir de ce qu'elle publie déjà.",
      },
      {
        n: "02",
        title: "Le diagnostic",
        subtitle: "T · Territory — Cartographier le territoire",
        lead: "Les supports dépouillés un par un, les occurrences comptées, les écarts relevés : ce que la maison dit, ce qu'on en retient, et ce qui manque.",
      },
      {
        n: "03",
        title: "La carte",
        subtitle: "R · Reframe — Recadrer le champ",
        lead: "Les concurrents, leur phrase exacte citée, et le terrain qu'ils laissent libre.",
      },
      {
        n: "04",
        title: "Les décisions",
        subtitle: "A · Architecture — Bâtir l'architecture",
        lead: "Des mouvements ordonnés : la formulation exacte, où la mettre, ce qu'elle coûte et ce qu'elle débloque.",
      },
      {
        n: "05",
        title: "Les playbooks",
        subtitle: "W · Weaponize — Incarner l'univers",
        lead: "Ce que les équipes font au quotidien : marketing, contenu, réseaux, vente, support, RH, tarifaire, cohérence.",
      },
      {
        n: "06",
        title: "Le langage",
        subtitle: "W · Weaponize — Incarner l'univers",
        lead: "Le lexique et les textes réécrits, prêts à coller : utilisables tels quels par les équipes comme par un outil IA.",
      },
    ],
    straw: [
      { letter: "S", name: "Soul", verb: "Trouver l'âme", pieces: "01" },
      { letter: "T", name: "Territory", verb: "Cartographier le territoire", pieces: "02" },
      { letter: "R", name: "Reframe", verb: "Recadrer le champ", pieces: "03" },
      { letter: "A", name: "Architecture", verb: "Bâtir l'architecture", pieces: "04" },
      { letter: "W", name: "Weaponize", verb: "Incarner l'univers", pieces: "05 · 06" },
    ],
    strawKicker: "S.T.R.A.W. · Le mécanisme du studio",
    strawTitle: "Cinq étapes, six pièces, dans cet ordre.",
    strawNote: "Chaque commande traverse les cinq étapes, sans en sauter une. Le document ci-dessous suit exactement cet ordre.",
    contentsTitle: "Les six pièces",
    readerPrev: "← Pièce précédente",
    readerNext: "Pièce suivante →",
    readerPageOfTemplate: "Pièce {i} / {n}",
    readerOfCount: "sur {n} pièces",
    ctaTitle: "Voilà le récit que vous recevez pour 2 900 €.",
    ctaBody:
      "Les six pièces, écrites sur votre maison, livrées au plus tard le vingt et unième jour : sinon vous êtes remboursé et le document vous reste. Deux tours de révision sont inclus, et une V2 si le document ne tape pas juste. Si un moment approche, la mise en scène part de lui : le moment complet, à partir de 6 000 €, sur devis.",
    ctaPrimary: "Commander le récit · 2 900 €",
    ctaFoot: "Paiement sécurisé par Stripe · Jour 21 ou remboursé · V2 si pas satisfait",
    calendarKey: "Le calendrier",
    calendarValue:
      "Questionnaire au jour 0. Livraison au plus tard au jour 21. Deux tours de révision dans les trente jours qui suivent.",
    containsKey: "Ce que le document contient",
    containsValue: "Les six pièces : la plateforme, le diagnostic, la carte, les décisions, les playbooks, le langage.",
  },
  en: {
    pieces: [
      {
        n: "01",
        title: "The platform",
        subtitle: "S · Soul — Find the soul",
        lead: "Reason for being, positioning, values, personality, tone of voice: the constitution of the house, written from what it already publishes.",
      },
      {
        n: "02",
        title: "The diagnosis",
        subtitle: "T · Territory — Map the territory",
        lead: "The materials taken apart one by one, occurrences counted, gaps noted: what the house says, what people retain, and what is missing.",
      },
      {
        n: "03",
        title: "The map",
        subtitle: "R · Reframe — Reframe the field",
        lead: "The competitors, their exact sentence quoted, and the ground they leave free.",
      },
      {
        n: "04",
        title: "The decisions",
        subtitle: "A · Architecture — Build the architecture",
        lead: "Ordered moves: the exact wording, where to put it, what it costs and what it unlocks.",
      },
      {
        n: "05",
        title: "The playbooks",
        subtitle: "W · Weaponize — Embody the universe",
        lead: "What the teams do every day: marketing, content, social, sales, support, HR, pricing, coherence.",
      },
      {
        n: "06",
        title: "The language",
        subtitle: "W · Weaponize — Embody the universe",
        lead: "The lexicon and the rewritten texts, ready to paste: usable as they are by the teams and by an AI tool.",
      },
    ],
    straw: [
      { letter: "S", name: "Soul", verb: "Find the soul", pieces: "01" },
      { letter: "T", name: "Territory", verb: "Map the territory", pieces: "02" },
      { letter: "R", name: "Reframe", verb: "Reframe the field", pieces: "03" },
      { letter: "A", name: "Architecture", verb: "Build the architecture", pieces: "04" },
      { letter: "W", name: "Weaponize", verb: "Embody the universe", pieces: "05 · 06" },
    ],
    strawKicker: "S.T.R.A.W. · The studio's mechanism",
    strawTitle: "Five stages, six pieces, in this order.",
    strawNote: "Every commission moves through the five stages, none skipped. The document below follows exactly this order.",
    contentsTitle: "The six pieces",
    readerPrev: "← Previous piece",
    readerNext: "Next piece →",
    readerPageOfTemplate: "Piece {i} / {n}",
    readerOfCount: "of {n} pieces",
    ctaTitle: "This is the story you receive for €2,900.",
    ctaBody:
      "The six pieces, written on your house, delivered by the twenty-first day at the latest: otherwise you are refunded and the document stays yours. Two rounds of revisions are included, and a V2 if the document does not hit the mark. If a moment is coming, the staging starts from it: the full moment, from €6,000, on quote.",
    ctaPrimary: "Order the story · €2,900",
    ctaFoot: "Secure payment by Stripe · Day 21 or refunded · A V2 if you are not satisfied",
    calendarKey: "The timeline",
    calendarValue:
      "Questionnaire on day 0. Delivery by day 21 at the latest. Two rounds of revisions within the thirty days that follow.",
    containsKey: "What the document contains",
    containsValue: "The six pieces: the platform, the diagnosis, the map, the decisions, the playbooks, the language.",
  },
}
