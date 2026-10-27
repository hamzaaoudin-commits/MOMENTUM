"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import {
  wordsFor,
  stepsForOffer,
  type TerrainKey,
  type OfferKey,
  type Question,
} from "@/lib/questionnaire-data"
import type { Lang } from "@/lib/lang"
import { isBot, rateLimit, honeypotProps } from "@/lib/form-security"

type IdentityAnswers = { name: string; house: string; email: string }
type CompetitorRow = { name: string; line: string }
type LinksAnswers = { site: string; linkedin: string; content: string; extra?: string[] }
type WordbankAnswers = { mine: string[]; notmine: string[] }

interface Answers {
  identity: IdentityAnswers
  competitors: CompetitorRow[]
  links: LinksAnswers
  tone: Record<string, number>
  wordbank: WordbankAnswers
  [key: string]: unknown
}

function emptyAnswers(prefill?: Partial<IdentityAnswers>): Answers {
  return {
    identity: { name: prefill?.name ?? "", house: prefill?.house ?? "", email: prefill?.email ?? "" },
    competitors: [{ name: "", line: "" }, { name: "", line: "" }, { name: "", line: "" }],
    links: { site: "", linkedin: "", content: "" },
    tone: {},
    wordbank: { mine: [], notmine: [] },
  }
}

function isValid(step: Question, a: Answers): boolean {
  if (step.optional) return true
  switch (step.type) {
    case "identity":
      return !!(a.identity.name.trim() && a.identity.house.trim() && a.identity.email.trim())
    case "textarea":
    case "shorttext":
      return typeof a[step.id] === "string" && (a[step.id] as string).trim().length > 0
    case "competitors":
      return a.competitors.filter((c) => c.name.trim() && c.line.trim()).length >= 3
    case "links":
      return a.links.site.trim().length > 0
    case "choice":
      if (step.multi) return Array.isArray(a[step.id]) && (a[step.id] as string[]).length > 0
      return typeof a[step.id] === "string" && !!a[step.id]
    case "wordbank":
      return a.wordbank.mine.length + a.wordbank.notmine.length >= 3
    case "sliders":
      return true
    default:
      return true
  }
}

const UI_COPY = {
  fr: {
    kicker: "MOMENTUM · ONBOARDING",
    chapterOf: (n: number, t: number) => `Partie ${n} sur ${t}`,
    chapterCount: (n: number) => `${n} question${n > 1 ? "s" : ""}`,
    chapterMinutes: (m: number) => `environ ${m} min`,
    chapterFallback: "Quelques questions pour la suite du document.",
    chapterTitles: {
      fondations: "Le moment",
      champ: "Le champ",
      voix: "La voix",
      audience: "Le public",
      quotidien: "Le jour J et après",
      deploiement: "La mise en scène",
      preuve: "La preuve",
    } as Record<string, string>,
    chapterNotes: {
      fondations: "Votre date, ce qui se joue ce jour-là, ce que vous croyez, ce qui vous a mené ici, ce que votre moment refuse. Aucune agence, aucune IA ne peut le deviner à votre place, et on ne l'écrit qu'une fois. Tout le récit repose là-dessus.",
      champ: "Un moment ne vaut que face aux autres. Pour trouver ce que vous seul pouvez annoncer, il faut savoir comment on vous range, ce que vos concurrents disent déjà, mot pour mot, et ce qui a déjà été tenté. Vos réponses fabriquent le diagnostic et la carte : plus vous êtes précis, plus la carte est tranchante.",
      voix: "Deux maisons peuvent dire la même chose sans se ressembler : tout tient à la voix. Ces questions fixent votre personnalité, votre ton, votre langue, la manière de vous adresser à vos clients et vos interdits. Elles deviennent le lexique et les règles que vos équipes — et vos outils d'IA — appliqueront.",
      audience: "On ne met pas un moment en scène pour tout le monde. Ces questions décrivent qui doit le voir, qui doit en parler, les mots qu'il emploie, ce qui le retient. Elles décident à qui le moment parle, et dans quel ordre.",
      quotidien: "Un moment dure un jour, ce qui le suit dure plus longtemps. Ces questions décrivent qui parlera au nom de la maison le jour J et après, où, comment vous vendez, à quel prix et qui vous recrutez. Elles deviennent les playbooks de vos équipes.",
      deploiement: "Les mots d'abord, la scène ensuite, dans les limites du réel. Ces questions disent où le moment doit être vu en premier, ce qui entoure le jour J, ce qui est confidentiel, quel budget le borne. Elles fixent l'ordre des décisions et, si vous choisissez la mise en scène, le devis.",
      preuve: "Un récit sans preuve ne tient pas. Dernier chapitre : ce qui vous rend crédible, ce que vous visez, à quoi vous reconnaîtrez que le moment a porté, et l'accès à vos supports. C'est de là que part le dépouillement.",
    } as Record<string, string>,
    chapterFeeds: {
      fondations: "Nourrit la pièce 01 — La plateforme",
      champ: "Nourrit les pièces 02 et 03 — Le diagnostic, La carte",
      voix: "Nourrit la pièce 06 — Le langage",
      audience: "Nourrit les pièces 02 et 05 — Le diagnostic, Les playbooks",
      quotidien: "Nourrit la pièce 05 — Les playbooks",
      deploiement: "Nourrit la pièce 04 — Les décisions",
      preuve: "Nourrit les pièces 02 et 03 — Le diagnostic, La carte",
    } as Record<string, string>,
    saved: "Enregistré",
    resumeKicker: "Vous aviez commencé",
    resumeLead: (n: number, t: number) => `Vos réponses sont là, vous étiez à la question ${n} sur ${t}.`,
    resumeCta: "Reprendre",
    resumeRestart: "Recommencer à zéro",
    thresholdKicker: "MOMENTUM · Onboarding",
    thresholdTitle: "Votre moment commence ici.",
    thresholdLead: "Les questions qui suivent sont la matière première de votre récit, et de la mise en scène si vous la choisissez ensuite : plus vos réponses sont précises, plus votre moment sera juste. Prenez le temps qu'il faut — tout est enregistré au fil de l'eau.",
    thresholdCta: "Commencer",
    bareNote: "Prenez le temps. Personne ne vous regarde.",
    signLabel: "Signez pour ouvrir le dossier",
    signPlaceholder: "Votre prénom",
    privacyNote: "Vos réponses servent uniquement à écrire votre document. Elles sont traitées par nos outils — dont des outils d'intelligence artificielle — et ne sont jamais publiées.",
    privacyLink: "Politique de confidentialité",
    sign: "Signer et ouvrir le dossier",
    sealKicker: "C'est signé",
    sealPieces: ["La plateforme", "Le diagnostic", "La carte", "Les décisions", "Les playbooks", "Le langage"],
    sealTitle: (r: string) => `Le dossier ${r} est ouvert.`,
    sealDueLabel: "Document livré au plus tard le",
    locale: "fr-FR",
    sealLead: "Vous n'avez plus rien à faire. Vous n'entendrez plus parler de nous jusqu'à la livraison — c'est voulu.",
    sealDownload: "Emporter votre première page ↓",
    sealRefLabel: "Votre référence",
    nextTitle: "Ce qui se passe maintenant",
    nextSteps: (d21: string) => [
      { when: "Demain", what: "Le dépouillement commence : vos supports, ceux de vos concurrents, et tout ce qui a déjà été dit sur votre moment." },
      { when: `Jour 21 · ${d21}`, what: "Le document vous est remis, au plus tard. Passé ce délai, vous êtes remboursé et le document vous reste." },
      { when: "Ensuite", what: "Deux tours de révision dans les 30 jours qui suivent la livraison, puis une V2 si le document ne tape toujours pas juste." },
      { when: "Si vous le souhaitez", what: "La mise en scène de votre moment : nous vous envoyons un devis écrit, fondé sur votre récit et sur votre date. Aucune obligation." },
    ],
    backToSite: "Retour au site",

    mirrorPositioning: "C'est la phrase que nous allons tester, mot pour mot, contre celles de vos concurrents.",
    mirrorDeploy: "C'est ce que votre moment refuse qui décidera de l'ordre de la séquence. Dites-nous où il doit se voir en premier.",
    mirrorPortrait: "Ce moment-là deviendra le récit fondateur. Le portrait qui suit lui donnera sa voix.",

    quoteSource: "La Doctrine la plus claire",
    chapterQuotes: {
      fondations: "Une maison n'est plus ce qu'elle fabrique. Une maison est ce qu'elle refuse — et le marché n'a jamais rien lu plus clairement.",
      champ: "Sur un marché où tout le monde a accès à la même machine, le meilleur produit ne gagne plus. C'est la doctrine la plus claire qui gagne.",
      voix: "Une doctrine est la chose sous les histoires — l'ensemble fixe de convictions qui rend chaque expression d'une maison reconnaissable, cohérente, et impossible à confondre avec celle de quiconque, quel que soit celui — ou ce — qui en a produit la surface.",
      audience: "Ce que les gens croient de vous avant de vous avoir touché.",
      deploiement: "La perception est la structure de croyance qu'un marché tient sur une maison avant le contact, et qui détermine ce que chaque contact ultérieur a le droit de signifier.",
      preuve: "Rien, dans un marché, n'est expérimenté. Tout est interprété — et l'interprétation arrive avant vous.",
    } as Record<string, string>,

    wordsWritten: "mots écrits de votre main",

    emptyAnswer: "Sans réponse — y répondre maintenant",
    deferCta: "J'y reviens",
    deferred: (n: number) => `${n} question${n > 1 ? "s" : ""} mise${n > 1 ? "s" : ""} de côté`,
    coverTitle: "Vous allez écrire ce que le monde en retiendra.",
    terrainLabel: "Le moment que vous préparez",
    terrains: [
      { k: "marques", t: "Un lancement de marque", d: "Ou un repositionnement, une levée de fonds" },
      { k: "produits", t: "Un lancement de produit", d: "Un objet, une application, une gamme" },
      { k: "lieux", t: "Une ouverture de lieu", d: "Restaurant, bar, club, hôtel, boutique" },
      { k: "artistes", t: "Une sortie ou une première", d: "Album, film, livre, exposition" },
    ],
    coverLede:
      "La plupart des maisons de votre taille continueront d'emprunter les mots de leur secteur, et de se demander pourquoi on les compare au prix.",
    start: "Commencer →",
    chooseFirst: "Choisissez d'abord votre moment",
    previous: "Précédent",
    optional: "Facultatif",
    continue: "Continuer →",
    skip: "Passer",
    words: "mots",
    digDeeper: "+ Creuser plus loin (facultatif)",
    fieldName: "Nom",
    fieldHouse: "Nom de la maison",
    fieldEmail: "Email",
    phName: "Votre nom",
    phHouse: "Le nom de votre maison",
    phEmail: "vous@maison.com",
    competitorName: "Nom du concurrent",
    competitorLine: "Leur phrase, exacte",
    remove: "Retirer",
    addCompetitor: "+ Ajouter un concurrent",
    linkSite: "Site actuel",
    linkLinkedin: "LinkedIn du fondateur",
    linkContent: "Un contenu déjà publié (facultatif)",
    linkExtra: "Un autre lien utile",
    phExtra: "Fiche Google, Instagram, TikTok, presse, avis, dossier partagé…",
    addLink: "+ Ajouter un lien",
    removeLink: "Retirer ce lien",
    phContent: "Lien vers un post, un article, une vidéo",
    upToChoices: (n: number) => `Jusqu'à ${n} choix.`,
    myWords: "Ce sont mes mots",
    neverMyWords: "Ce ne sont jamais les miens",
    beforeSending: "Avant d'envoyer",
    recapKicker: "Vous y êtes",
    recapTitle: "Vous venez de faire ce que vos concurrents ne feront pas.",
    recapLead: "Une heure d'écriture honnête sur ce que votre moment doit dire : la plupart des fondateurs ne s'y assoient jamais. Le reste nous regarde. Le dépouillement commence demain — vos supports, ceux de vos concurrents, vos avis — et vous n'êtes plus sollicité jusqu'à la livraison.",
    recapStats: [
      { v: "6", l: "pièces à écrire" },
      { v: "21", l: "jours au plus tard" },
      { v: "2", l: "révisions incluses" },
    ],
    reviewTitle: "Relisez, puis envoyez.",
    reviewNote: "Rien n'est envoyé tant que vous n'avez pas confirmé.",
    edit: "Modifier",
    optionalSuffix: " (facultatif)",
    sending: "Envoi...",
    back: "Retour",
    rateLimited: "Une soumission a déjà été envoyée récemment. Réessayez dans un instant.",
    sendFailed: "L'envoi a échoué. Vérifiez votre connexion et réessayez — vos réponses restent sauvegardées.",
    deeperLabel: "(Plus loin)",
    siteLabel: "Site",
    dash: "—",
  },
  en: {
    kicker: "MOMENTUM · ONBOARDING",
    chapterOf: (n: number, t: number) => `Part ${n} of ${t}`,
    chapterCount: (n: number) => `${n} question${n > 1 ? "s" : ""}`,
    chapterMinutes: (m: number) => `about ${m} min`,
    chapterFallback: "A few questions for the rest of the document.",
    chapterTitles: {
      fondations: "The moment",
      champ: "The field",
      voix: "The voice",
      audience: "The audience",
      quotidien: "Day D and after",
      deploiement: "The staging",
      preuve: "The proof",
    } as Record<string, string>,
    chapterNotes: {
      fondations: "Your date, what is at stake that day, what you believe, what led you here, what your moment refuses. No agency and no AI can guess it for you, and you only write it once. The whole story rests on it.",
      champ: "A moment only means something against others. To find what only you can announce, you need to know how people file you, what your competitors already say, word for word, and what has already been tried. Your answers build the diagnosis and the map: the more precise you are, the sharper the map.",
      voix: "Two houses can say the same thing and not look alike: it all comes down to voice. These questions fix your personality, your tone, your language, how you address your customers and your off-limits. They become the lexicon and the rules your teams — and your AI tools — will apply.",
      audience: "You do not stage a moment for everyone. These questions describe who must see it, who must talk about it, the words they use, what holds them back. They decide who the moment speaks to, and in what order.",
      quotidien: "A moment lasts a day, what follows lasts longer. These questions describe who will speak for the house on day D and after, where, how you sell, at what price and who you hire. They become your teams' playbooks.",
      deploiement: "Words first, the stage after, within the limits of reality. These questions say where the moment must be seen first, what surrounds day D, what is confidential, what budget bounds it. They set the order of the decisions and, if you choose the staging, the quote.",
      preuve: "A story without proof does not hold. Final chapter: what makes you credible, what you aim for, how you will know the moment carried, and access to your materials. This is where the review starts.",
    } as Record<string, string>,
    chapterFeeds: {
      fondations: "Feeds piece 01 — The platform",
      champ: "Feeds pieces 02 and 03 — The diagnosis, The map",
      voix: "Feeds piece 06 — The language",
      audience: "Feeds pieces 02 and 05 — The diagnosis, The playbooks",
      quotidien: "Feeds piece 05 — The playbooks",
      deploiement: "Feeds piece 04 — The decisions",
      preuve: "Feeds pieces 02 and 03 — The diagnosis, The map",
    } as Record<string, string>,
    saved: "Saved",
    resumeKicker: "You had started",
    resumeLead: (n: number, t: number) => `Your answers are here, you were on question ${n} of ${t}.`,
    resumeCta: "Resume",
    resumeRestart: "Start over",
    thresholdKicker: "MOMENTUM · Onboarding",
    thresholdTitle: "Your moment starts here.",
    thresholdLead: "The questions that follow are the raw material of your story, and of the staging if you choose it afterwards: the more precise your answers, the more accurate your moment will be. Take the time you need — everything is saved as you go.",
    thresholdCta: "Begin",
    bareNote: "Take your time. Nobody is watching.",
    signLabel: "Sign to open the file",
    signPlaceholder: "Your first name",
    privacyNote: "Your answers are used only to write your document. They are processed by our tools — including artificial intelligence tools — and are never published.",
    privacyLink: "Privacy policy",
    sign: "Sign and open the file",
    sealKicker: "Signed",
    sealPieces: ["The platform", "The diagnosis", "The map", "The decisions", "The playbooks", "The language"],
    sealTitle: (r: string) => `File ${r} is open.`,
    sealDueLabel: "Document delivered by",
    locale: "en-GB",
    sealLead: "There is nothing left for you to do. You will not hear from us until delivery — that is deliberate.",
    sealDownload: "Take your first page ↓",
    sealRefLabel: "Your reference",
    nextTitle: "What happens now",
    nextSteps: (d21: string) => [
      { when: "Tomorrow", what: "The review begins: your materials, your competitors', and everything already said about your moment." },
      { when: `Day 21 · ${d21}`, what: "The document is handed to you, at the latest. Past that date, you are refunded and keep the document." },
      { when: "Then", what: "Two rounds of revisions within 30 days of delivery, then a V2 if the document still doesn't hit the mark." },
      { when: "If you wish", what: "The staging of your moment: we send you a written quote, based on your story and your date. No obligation." },
    ],
    backToSite: "Back to the site",

    mirrorPositioning: "This is the sentence we will test, word for word, against your competitors'.",
    mirrorDeploy: "What your moment refuses will decide the order of the sequence. Tell us where it must show first.",
    mirrorPortrait: "That moment will become the origin story. The portrait below will give it a voice.",

    quoteSource: "The Clearest Doctrine",
    chapterQuotes: {
      fondations: "A house is no longer what it makes. A house is what it refuses — and the market has never read anything more clearly.",
      champ: "In a market where everyone has the same machine, the best product no longer wins. The clearest doctrine wins.",
      voix: "A doctrine is the thing beneath the stories — the fixed set of convictions that makes every expression of a house recognisable, coherent, and impossible to confuse with anyone else's, whoever — or whatever — produced the surface.",
      audience: "What people believe about you before they have touched you.",
      deploiement: "Perception is the belief structure a market holds about a house before contact, and which determines what every later contact is allowed to mean.",
      preuve: "Nothing in a market is experienced. Everything is interpreted — and the interpretation arrives before you do.",
    } as Record<string, string>,

    wordsWritten: "words written in your own hand",

    emptyAnswer: "No answer — answer it now",
    deferCta: "Come back to it",
    deferred: (n: number) => `${n} question${n > 1 ? "s" : ""} set aside`,
    coverTitle: "You are about to write what the world will remember.",
    terrainLabel: "The moment you are preparing",
    terrains: [
      { k: "marques", t: "A brand launch", d: "Or a repositioning, a fundraise" },
      { k: "produits", t: "A product launch", d: "An object, an app, a range" },
      { k: "lieux", t: "A venue opening", d: "Restaurant, bar, club, hotel, shop" },
      { k: "artistes", t: "A release or a premiere", d: "Album, film, book, exhibition" },
    ],
    coverLede:
      "Most houses your size will keep borrowing their sector's words, and keep wondering why they are compared on price.",
    start: "Begin →",
    chooseFirst: "First, choose your moment",
    previous: "Previous",
    optional: "Optional",
    continue: "Continue →",
    skip: "Skip",
    words: "words",
    digDeeper: "+ Dig deeper (optional)",
    fieldName: "Name",
    fieldHouse: "Name of the house",
    fieldEmail: "Email",
    phName: "Your name",
    phHouse: "The name of your house",
    phEmail: "you@house.com",
    competitorName: "Competitor name",
    competitorLine: "Their sentence, exact",
    remove: "Remove",
    addCompetitor: "+ Add a competitor",
    linkSite: "Current website",
    linkLinkedin: "Founder's LinkedIn",
    linkContent: "Something you've published (optional)",
    linkExtra: "Another useful link",
    phExtra: "Google listing, Instagram, TikTok, press, reviews, shared folder…",
    addLink: "+ Add a link",
    removeLink: "Remove this link",
    phContent: "Link to a post, an article, a video",
    upToChoices: (n: number) => `Up to ${n} choices.`,
    myWords: "These are my words",
    neverMyWords: "These are never mine",
    beforeSending: "Before you send",
    recapKicker: "You are through",
    recapTitle: "You have just done what your competitors will not do.",
    recapLead: "An hour of honest writing about what your moment must say: most founders never sit down to it. The rest is on us. The reading starts tomorrow — your supports, your competitors', your reviews — and you will not be contacted again until delivery.",
    recapStats: [
      { v: "6", l: "pieces to write" },
      { v: "21", l: "days at the latest" },
      { v: "2", l: "revisions included" },
    ],
    reviewTitle: "Read it over, then send.",
    reviewNote: "Nothing is sent until you confirm.",
    edit: "Edit",
    optionalSuffix: " (optional)",
    sending: "Sending...",
    back: "Back",
    rateLimited: "A submission was already sent recently. Try again in a moment.",
    sendFailed: "Sending failed. Check your connection and try again — your answers are still saved.",
    deeperLabel: "(Deeper)",
    siteLabel: "Site",
    dash: "—",
  },
}

type Copy = (typeof UI_COPY)["fr"]

function storageKey(offer: OfferKey) {
  return `sp_questionnaire:v3:${offer}`
}

export function QuestionnaireFlow({
  offer,
  terrain,
  lang: initialLang,
  prefill,
}: {
  offer: OfferKey
  terrain?: TerrainKey
  lang: Lang
  prefill?: Partial<IdentityAnswers>
}) {
  const [chosenTerrain, setChosenTerrain] = useState<TerrainKey | undefined>(terrain)
  const [lang, setLang] = useState<Lang>(initialLang)
  const steps = useMemo(
    () => stepsForOffer(offer, lang, chosenTerrain),
    [offer, lang, chosenTerrain],
  )
  const copy = UI_COPY[lang]
  const words = useMemo(() => wordsFor(lang), [lang])
  const [deferred, setDeferred] = useState<string[]>([])

  const [screen, setScreen] = useState<"language" | "threshold" | "cover" | "chapter" | "steps" | "review" | "done" | "error">("language")
  const [ready, setReady] = useState(false)
  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState<Answers>(() => emptyAnswers(prefill))
  const [deepOpen, setDeepOpen] = useState<Record<string, boolean>>({})
  const [honeypot, setHoneypot] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [refId, setRefId] = useState<string | undefined>(undefined)
  const [errorMsg, setErrorMsg] = useState("")
  const startedAt = useRef<number>(Date.now())
  const hydrated = useRef(false)

  useEffect(() => {
    if (hydrated.current) return
    try {
      const raw = localStorage.getItem(storageKey(offer))
      if (raw) {
        const saved = JSON.parse(raw) as { answers: Answers; idx: number; deferred?: string[]; terrain?: TerrainKey; lang?: Lang }
        setAnswers((prev) => ({ ...prev, ...saved.answers }))
        setIdx(saved.idx ?? 0)
        setDeferred(saved.deferred ?? [])
        if (saved.terrain) setChosenTerrain(saved.terrain)
        if ((saved.idx ?? 0) >= 2) {
          setResumable(saved.idx ?? 0)
          if (saved.lang === "fr" || saved.lang === "en") setLang(saved.lang)
          setScreen("threshold")
        }
      }
    } catch {
    }
    hydrated.current = true
    setReady(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offer])

  useEffect(() => {
    const started = idx > 0 || !!(answers.identity.name || answers.identity.email || answers.identity.house)
    if (!started) return
    try {
      localStorage.setItem(storageKey(offer), JSON.stringify({ answers, idx, deferred, terrain: chosenTerrain, lang }))
    } catch {
    }
  }, [answers, idx, deferred, offer, chosenTerrain, lang])

  function startOver() {
    try {
      localStorage.removeItem(storageKey(offer))
    } catch {
    }
    setAnswers(emptyAnswers(prefill))
    setIdx(0)
    setDeferred([])
    setResumable(null)
    setChosenTerrain(terrain)
    setSeenChapters([])
    setScreen("language")
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const step = steps[idx]

  const chapters = useMemo(() => {
    const out: { tag: string; start: number; count: number }[] = []
    steps.forEach((s, i) => {
      const key = s.chapter ?? ""
      const last = out[out.length - 1]
      if (last && last.tag === key) last.count += 1
      else out.push({ tag: key, start: i, count: 1 })
    })
    return out
  }, [steps])

  const mirror = useMemo(() => {
    if (!step) return undefined
    const PAIRS: Record<string, { from: string; note: string }> = {
      positioning: { from: "conviction", note: copy.mirrorPositioning },
      positioning_produits: { from: "conviction", note: copy.mirrorPositioning },
      positioning_lieux: { from: "conviction", note: copy.mirrorPositioning },
      positioning_artistes: { from: "conviction", note: copy.mirrorPositioning },
      deploy: { from: "enemy", note: copy.mirrorDeploy },
      portrait_house: { from: "rupture", note: copy.mirrorPortrait },
    }
    const pair = PAIRS[step.id]
    if (!pair) return undefined
    const raw = answers[pair.from]
    if (typeof raw !== "string" || raw.trim().length < 25) return undefined
    const first = raw.trim().split(/(?<=[.!?])\s/)[0]
    const quote = first.length > 180 ? `${first.slice(0, 177)}…` : first
    return { quote, note: pair.note }
  }, [step, answers, copy])

  const currentChapter = chapters.filter((ch) => ch.start <= idx).pop()
  const chapterIndex = currentChapter ? chapters.indexOf(currentChapter) : 0

  const [seenChapters, setSeenChapters] = useState<number[]>([])

  const [resumable, setResumable] = useState<number | null>(null)

  const chapterMins = useMemo(() => {
    const ch = chapters[chapterIndex]
    if (!ch) return 1
    const mins = steps
      .slice(ch.start, ch.start + ch.count)
      .reduce((s, q) => s + (["textarea", "competitors"].includes(q.type) ? 2 : 0.5), 0)
    return Math.max(1, Math.round(mins))
  }, [steps, chapters, chapterIndex])

  function updateAnswer(id: string, value: unknown) {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }

  function deferCurrent() {
    if (!step) return
    setDeferred((prev) => (prev.includes(step.id) ? prev : [...prev, step.id]))
    goNext()
  }

  function goNext() {
    if (idx >= steps.length - 1 && deferred.length > 0) {
      const back = steps.findIndex((s) => s.id === deferred[0])
      if (back > -1) {
        setDeferred((prev) => prev.slice(1))
        setIdx(back)
        return
      }
    }
    if (idx < steps.length - 1) {
      const next = idx + 1
      const ch = chapters.find((x) => x.start === next)
      const chi = ch ? chapters.indexOf(ch) : -1
      setIdx(next)
      if (ch && !seenChapters.includes(chi)) {
        setSeenChapters((prev) => [...prev, chi])
        setScreen("chapter")
      }
    } else setScreen("review")
  }
  function goBack() {
    if (idx === 0) setScreen("cover")
    else setIdx(idx - 1)
  }

  async function submit() {
    if (isBot(honeypot, startedAt.current)) {
      setScreen("done")
      return
    }
    const limit = rateLimit(`questionnaire:${offer}`)
    if (!limit.ok) {
      setErrorMsg(copy.rateLimited)
      return
    }
    setSubmitting(true)
    setErrorMsg("")
    try {
      const res = await fetch("/api/questionnaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          offer,
          terrain: chosenTerrain,
          lang,
          answers,
          company_website: honeypot,
          startedAt: startedAt.current,
        }),
      })
      const data = await res.json().catch(() => ({ ok: false }))
      if (!res.ok || !data.ok) throw new Error(data?.error ?? "submit_failed")
      if (typeof data.submission_id === "string") setRefId(data.submission_id)
      try {
        localStorage.removeItem(storageKey(offer))
      } catch {
      }
      setScreen("done")
    } catch {
      setErrorMsg(copy.sendFailed)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="relative">
      {screen === "cover" && <div className="glow-top" aria-hidden="true" />}
      <div className="relative px-gutter py-10 sm:py-14">
        <input
          {...honeypotProps}
          name="company_website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />

      <div
        aria-hidden
        className="q-ambient"
        style={{ ["--q-progress" as string]: String(Math.min(1, idx / Math.max(1, steps.length - 1))) }}
      />

        {ready && screen === "language" && (
          <LanguageScreen
            onPick={(l) => {
              setLang(l)
              setScreen("threshold")
            }}
          />
        )}

        {screen === "threshold" && (
          <ThresholdScreen
            copy={copy}
            onEnter={() => setScreen("cover")}
          />
        )}

        {screen === "cover" && (
          <>
          {resumable !== null && (
            <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3 border border-brand-hair bg-brand/[0.05] px-5 py-4">
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand">
                  {copy.resumeKicker}
                </div>
                <p className="m-0 mt-1.5 font-sans text-[13.5px] leading-[1.6] text-chalk-75">
                  {copy.resumeLead(resumable + 1, steps.length)}
                </p>
              </div>
              <div className="flex flex-shrink-0 items-center gap-4">
                <button type="button" className="btn-quiet" onClick={startOver}>
                  {copy.resumeRestart}
                </button>
                <button type="button" className="btn-primary" onClick={() => setScreen("steps")}>
                  {copy.resumeCta}
                </button>
              </div>
            </div>
          )}
          <CoverScreen
            copy={copy}
            chosenTerrain={chosenTerrain}
            onChooseTerrain={setChosenTerrain}
            onStart={() => {
              setSeenChapters((prev) => (prev.includes(0) ? prev : [...prev, 0]))
              setScreen("chapter")
            }}
          />
          </>
        )}

        {screen === "chapter" && currentChapter && (
          <ChapterScreen
            tag={currentChapter.tag}
            n={chapterIndex + 1}
            total={chapters.length}
            count={currentChapter.count}
            mins={chapterMins}
            copy={copy}
            onStart={() => setScreen("steps")}
          />
        )}

        {screen === "steps" && step && (
          <StepScreen
            step={step}
            copy={copy}
            mirror={mirror}
            onDefer={deferCurrent}
            words={words}
            index={idx}
            total={steps.length}
            answers={answers}
            deepOpen={!!deepOpen[step.id]}
            onOpenDeep={() => setDeepOpen((p) => ({ ...p, [step.id]: true }))}
            onChange={updateAnswer}
            onBack={goBack}
            onNext={goNext}
            onSkip={step.optional ? goNext : undefined}
          />
        )}

        {screen === "review" && (
          <ReviewScreen
            steps={steps}
            copy={copy}
            answers={answers}
            submitting={submitting}
            errorMsg={errorMsg}
            onEdit={(i) => {
              setIdx(i)
              setScreen("steps")
            }}
            onBack={() => {
              setIdx(steps.length - 1)
              setScreen("steps")
            }}
            onSubmit={submit}
            lang={lang}
          />
        )}

        {screen === "done" && (
          <DoneScreen
            copy={copy}
            house={answers.identity.house}
            answers={answers}
            steps={steps}
            refId={refId}
            lang={lang}
          />
        )}
      </div>
    </div>
  )
}

function CoverScreen({
  copy,
  chosenTerrain,
  onChooseTerrain,
  onStart,
}: {
  copy: Copy
  chosenTerrain?: TerrainKey
  onChooseTerrain: (t: TerrainKey) => void
  onStart: () => void
}) {
  const [page, setPage] = useState(0)
  const first = copy.coverLede.split("\n\n")[0]
  const at = (ms: number) => ({ animationDelay: `${ms}ms` })
  const balance = { textWrap: "balance" } as React.CSSProperties

  if (page === 0) {
    return (
      <div key="p0" className="relative isolate flex min-h-[82vh] flex-col items-center justify-center text-center">
        <BreatheGlow />
        <div className="q-rise font-mono text-[10.5px] uppercase tracking-[0.3em] text-chalk-40" style={at(150)}>
          {copy.kicker}
        </div>
        <h1
          className="mx-auto mt-9 max-w-[19ch] font-serif text-[clamp(2rem,5.8vw,4.5rem)] font-bold uppercase leading-[1] tracking-[-0.02em] text-white"
          style={balance}
        >
          <InkWords text={copy.coverTitle} keyRe={/n'écriront jamais|never will/i} delay={350} step={90} />
        </h1>
        <p className="q-rise mx-auto mt-9 max-w-[500px] font-sans text-[16px] leading-[1.75] text-chalk-75 [text-wrap:balance]" style={at(1500)}>
          {first}
        </p>
        <div className="q-rise mt-12" style={at(1900)}>
          <button type="button" className="btn-primary" onClick={() => setPage(1)} autoFocus>
            {copy.continue}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div key="p1" className="relative isolate mx-auto flex min-h-[82vh] w-full max-w-[1040px] flex-col items-center justify-center py-12 text-center">
      <BreatheGlow />
      <button
        type="button"
        onClick={() => setPage(0)}
        aria-label={copy.back}
        className="q-rise absolute left-0 top-2 text-[13px] text-chalk-40 transition-colors hover:text-white"
        style={at(0)}
      >
        ← {copy.back}
      </button>

      <h2
        className="mx-auto max-w-[19ch] font-serif text-[clamp(1.7rem,4.6vw,3.3rem)] font-bold uppercase leading-[1.02] tracking-[-0.018em] text-white"
        style={balance}
      >
        <InkWords text={`${copy.terrainLabel}…`} keyRe={/moment/i} delay={100} step={70} />
      </h2>

      <div className="mt-10 grid w-full grid-cols-2 gap-3.5 md:grid-cols-4">
        {copy.terrains.map((t, i) => {
          const on = chosenTerrain === t.k
          return (
            <button
              key={t.k}
              type="button"
              onClick={() => onChooseTerrain(t.k as TerrainKey)}
              aria-pressed={on}
              className={`q-rise relative flex min-h-[214px] flex-col gap-8 overflow-hidden rounded-[18px] border p-5 text-left transition-all duration-300 ${
                on ? "-translate-y-1 border-brand" : "border-white/[0.09] hover:-translate-y-1 hover:border-white/25"
              }`}
              style={{
                background: CARD_GLOWS[i % CARD_GLOWS.length],
                animationDelay: `${1000 + i * 110}ms`,
                boxShadow: on ? "0 0 0 1px rgba(34,86,255,.55), 0 22px 60px -20px rgba(34,86,255,.6)" : "none",
              }}
            >
              <span className="flex items-start justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
                    on ? "border-brand/60 bg-brand/10" : "border-white/10"
                  }`}
                >
                  <TerrainMark k={t.k} on={on} size={24} />
                </span>
                <span
                  aria-hidden
                  className={`flex h-5 w-5 items-center justify-center rounded-full border text-[11px] font-bold leading-none transition-colors ${
                    on ? "border-brand bg-brand text-ink" : "border-white/25"
                  }`}
                >
                  {on && "✓"}
                </span>
              </span>
              <span>
                <span className={`block font-serif text-[1.15rem] font-bold leading-[1.2] ${on ? "text-white" : "text-white/90"}`}>{t.t}</span>
                <span className="mt-2 block font-sans text-[12.5px] leading-[1.5] text-chalk-55">{t.d}</span>
              </span>
            </button>
          )
        })}
      </div>

      <div className="q-rise mt-10 flex flex-col items-center gap-3" style={at(1600)}>
        <button
          type="button"
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-35"
          onClick={onStart}
          disabled={!chosenTerrain}
        >
          {copy.start}
        </button>
        {!chosenTerrain && (
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-chalk-40">{copy.chooseFirst}</span>
        )}
      </div>
    </div>
  )
}

function StepScreen({
  step,
  copy,
  mirror,
  onDefer,
  words,
  index,
  total,
  answers,
  deepOpen,
  onOpenDeep,
  onChange,
  onBack,
  onNext,
  onSkip,
}: {
  mirror?: { quote: string; note: string }
  onDefer?: () => void
  step: Question
  copy: Copy
  words: string[]
  index: number
  total: number
  answers: Answers
  deepOpen: boolean
  onOpenDeep: () => void
  onChange: (id: string, value: unknown) => void
  onBack: () => void
  onNext: () => void
  onSkip?: () => void
}) {
  const valid = isValid(step, answers)

  const bare = ["conviction", "rupture", "enemy"].includes(step.id)

  const [fieldReady, setFieldReady] = useState(false)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    setFieldReady(false)
    const t = window.setTimeout(() => setFieldReady(true), 1500)
    return () => window.clearTimeout(t)
  }, [index])
  useEffect(() => {
    setShown(false)
    const id = requestAnimationFrame(() => setShown(true))
    return () => cancelAnimationFrame(id)
  }, [index])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Enter" || !valid) return
      const el = e.target as HTMLElement | null
      const inText = el?.tagName === "TEXTAREA"
      if (inText && !(e.metaKey || e.ctrlKey)) return
      e.preventDefault()
      onNext()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [valid, onNext])

  return (
    <div
      key={index}
      className={[
        "relative flex min-h-[76vh] flex-col items-center justify-center text-center",
        "transition-all duration-[520ms] ease-[cubic-bezier(.22,.68,0,1)]",
        shown ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0",
      ].join(" ")}
    >
      {!bare && (
        <button
          type="button"
          onClick={onBack}
          aria-label={copy.previous}
          className="absolute left-0 top-0 text-[16px] leading-none text-chalk-40 transition-colors hover:text-white"
        >
          ←
        </button>
      )}

      {bare ? (
        <p className="mb-16 font-mono text-[10px] uppercase tracking-[0.24em] text-chalk-40">
          {copy.bareNote}
        </p>
      ) : (
        <div className="q-kicker mb-14">
          <span className="q-kicker-dot" aria-hidden />
          <span className="q-kicker-label">
            {copy.chapterTitles[step.chapter ?? ""] ?? step.tag ?? ""} — {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
          </span>
        </div>
      )}

      {step.optional && (
        <div className="mb-4">
          <span className="tag border-brand-hair text-brand">{copy.optional}</span>
        </div>
      )}

      <FillQuestion key={index} text={step.label} />
      {step.help ? (
        <p className="q-help mx-auto mb-12 max-w-[46ch]">{step.help}</p>
      ) : (
        <div className="mb-10" />
      )}

      <div
        className={`q-rise w-full ${step.type === "choice" ? "max-w-[1040px]" : "max-w-[600px]"}`}
        style={{ animationDelay: "1400ms" }}
      >
        <QuestionInput
          step={step}
          copy={copy}
          words={words}
          answers={answers}
          deepOpen={deepOpen}
          onOpenDeep={onOpenDeep}
          onChange={onChange}
        />
      </div>

      {mirror && (
        <figure className="mx-auto mt-10 max-w-[520px] border-l border-white/15 pl-5 text-left">
          <blockquote className="m-0 font-serif text-[15px] italic leading-[1.55] text-white/80">
            « {mirror.quote} »
          </blockquote>
          <figcaption className="mt-2.5 font-sans text-[12.5px] leading-[1.6] text-chalk-40">
            {mirror.note}
          </figcaption>
        </figure>
      )}

      <div className="sticky bottom-0 z-10 mt-16 flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-3 py-4 [padding-bottom:calc(1rem+env(safe-area-inset-bottom,0px))] sm:static sm:py-0">
        <button type="button" className="q-go" disabled={!valid} onClick={onNext}>
          {copy.continue}
        </button>

        {onDefer && !valid && (
          <button
            type="button"
            onClick={onDefer}
            className="font-sans text-[13px] text-chalk-40 underline decoration-hair-strong underline-offset-4 transition-colors hover:text-chalk-75"
          >
            {copy.deferCta}
          </button>
        )}

        {onSkip && (
          <button type="button" className="btn-quiet" onClick={onSkip}>
            {copy.skip}
          </button>
        )}
      </div>

    </div>
  )
}

function QuestionInput({
  step,
  copy,
  words,
  answers,
  deepOpen,
  onOpenDeep,
  onChange,
}: {
  step: Question
  copy: Copy
  words: string[]
  answers: Answers
  deepOpen: boolean
  onOpenDeep: () => void
  onChange: (id: string, value: unknown) => void
}) {
  if (step.type === "identity") {
    const v = answers.identity
    const set = (patch: Partial<IdentityAnswers>) => onChange("identity", { ...v, ...patch })
    return (
      <div className="space-y-3.5">
        <div>
          <label className="field-label">{copy.fieldName}</label>
          <input className="q-field" value={v.name} onChange={(e) => set({ name: e.target.value })} placeholder={copy.phName} />
        </div>
        <div>
          <label className="field-label">{copy.fieldHouse}</label>
          <input className="q-field" value={v.house} onChange={(e) => set({ house: e.target.value })} placeholder={copy.phHouse} />
        </div>
        <div>
          <label className="field-label">{copy.fieldEmail}</label>
          <input className="q-field" value={v.email} onChange={(e) => set({ email: e.target.value })} placeholder={copy.phEmail} />
        </div>
      </div>
    )
  }

  if (step.type === "shorttext") {
    const v = (answers[step.id] as string) ?? ""
    return <input className="q-field" value={v} onChange={(e) => onChange(step.id, e.target.value)} placeholder={step.ph} />
  }

  if (step.type === "textarea") {
    const v = (answers[step.id] as string) ?? ""
    const deepVal = (answers[`${step.id}_deep`] as string) ?? ""
    return (
      <div>
        <AutoTextarea
          value={v}
          placeholder={step.ph}
          nudge={step.nudge}
          unlock={step.unlock}
          onChange={(val) => onChange(step.id, val)}
        />
        {step.deep &&
          (deepOpen ? (
            <div className="mt-4 border-l-2 border-brand pl-4">
              <p className="body-sm mb-2.5 italic">{step.deep}</p>
              <AutoTextarea value={deepVal} onChange={(val) => onChange(`${step.id}_deep`, val)} rows={3} />
            </div>
          ) : (
            <button type="button" className="btn-quiet mt-4" onClick={onOpenDeep}>
              {copy.digDeeper}
            </button>
          ))}
      </div>
    )
  }

  if (step.type === "competitors") {
    const rows = answers.competitors
    const setRow = (i: number, patch: Partial<CompetitorRow>) => {
      const next = rows.map((r, idx) => (idx === i ? { ...r, ...patch } : r))
      onChange("competitors", next)
    }
    return (
      <div>
        {rows.map((c, i) => (
          <div key={i} className="mb-2 grid grid-cols-1 gap-2 sm:grid-cols-[1fr_1.6fr_auto]">
            <input className="q-field" placeholder={copy.competitorName} value={c.name} onChange={(e) => setRow(i, { name: e.target.value })} />
            <input className="q-field" placeholder={copy.competitorLine} value={c.line} onChange={(e) => setRow(i, { line: e.target.value })} />
            {rows.length > 3 ? (
              <button
                type="button"
                aria-label={copy.remove}
                className="flex h-[52px] w-9 items-center justify-center border border-hair-strong text-chalk-55"
                onClick={() => onChange("competitors", rows.filter((_, idx) => idx !== i))}
              >
                ×
              </button>
            ) : (
              <div />
            )}
          </div>
        ))}
        {rows.length < 5 && (
          <button type="button" className="btn-quiet mt-1" onClick={() => onChange("competitors", [...rows, { name: "", line: "" }])}>
            {copy.addCompetitor}
          </button>
        )}
      </div>
    )
  }

  if (step.type === "links") {
    const v = answers.links
    const set = (patch: Partial<LinksAnswers>) => onChange("links", { ...v, ...patch })
    return (
      <div className="space-y-3.5">
        <div>
          <label className="field-label">{copy.linkSite}</label>
          <input className="q-field" value={v.site} onChange={(e) => set({ site: e.target.value })} placeholder="https://" />
        </div>
        <div>
          <label className="field-label">{copy.linkLinkedin}</label>
          <input className="q-field" value={v.linkedin} onChange={(e) => set({ linkedin: e.target.value })} placeholder="https://linkedin.com/in/..." />
        </div>
        <div>
          <label className="field-label">{copy.linkContent}</label>
          <input className="q-field" value={v.content} onChange={(e) => set({ content: e.target.value })} placeholder={copy.phContent} />
        </div>

        {(v.extra ?? []).map((url, i) => (
          <div key={i}>
            <label className="field-label">{copy.linkExtra} {i + 1}</label>
            <div className="flex items-end gap-3">
              <input
                className="q-field"
                value={url}
                onChange={(e) => {
                  const next = [...(v.extra ?? [])]
                  next[i] = e.target.value
                  set({ extra: next })
                }}
                placeholder={copy.phExtra}
              />
              <button
                type="button"
                aria-label={copy.removeLink}
                className="btn-quiet flex-shrink-0 pb-2"
                onClick={() => set({ extra: (v.extra ?? []).filter((_, j) => j !== i) })}
              >
                ×
              </button>
            </div>
          </div>
        ))}
        {(v.extra ?? []).length < 10 && (
          <button type="button" className="btn-quiet mt-1" onClick={() => set({ extra: [...(v.extra ?? []), ""] })}>
            {copy.addLink}
          </button>
        )}
      </div>
    )
  }

  if (step.type === "choice") {
    const sel = answers[step.id]
    const options = step.options ?? []
    return (
      <div>
        <div className="q-choice" style={{ "--cols": choiceCols(options.length) } as React.CSSProperties}>
          {options.map((opt, i) => {
            const on = step.multi ? Array.isArray(sel) && (sel as string[]).includes(opt) : sel === opt
            return (
              <button
                key={opt}
                type="button"
                data-option
                onClick={() => {
                  if (step.multi) {
                    const arr = Array.isArray(sel) ? [...(sel as string[])] : []
                    const pos = arr.indexOf(opt)
                    if (pos > -1) arr.splice(pos, 1)
                    else if (arr.length < (step.max ?? 2)) arr.push(opt)
                    onChange(step.id, arr)
                  } else {
                    onChange(step.id, opt)
                  }
                }}
                aria-pressed={on}
                className={`q-card relative flex flex-col gap-7 overflow-hidden rounded-[18px] border text-left ${choiceCols(options.length) >= 5 ? "p-5" : "p-6"} transition-[border-color,transform] duration-300 ${
                  on ? "border-brand" : "border-white/[0.08] hover:-translate-y-1 hover:border-white/20"
                }`}
                style={{ background: CARD_GLOWS[i % CARD_GLOWS.length] }}
              >
                <span className="flex items-start justify-between">
                  <span className="font-mono text-[11px] tracking-[0.24em] text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden
                    className={`flex h-5 w-5 items-center justify-center border transition-colors ${
                      step.multi ? "rounded-[4px]" : "rounded-full"
                    } ${on ? "border-brand bg-brand text-ink" : "border-white/25"}`}
                  >
                    {on && <span className="text-[11px] font-bold leading-none">✓</span>}
                  </span>
                </span>
                <span>
                  <span className={`block font-serif font-bold leading-[1.2] ${choiceCols(options.length) >= 5 ? "text-[1.02rem]" : "text-[1.2rem]"} ${on ? "text-white" : "text-white/85"}`}>
                    {opt}
                  </span>
                  {step.hints?.[i] && (
                    <span className="mt-2.5 block font-sans text-[13px] leading-[1.5] text-chalk-55">{step.hints[i]}</span>
                  )}
                </span>
              </button>
            )
          })}
        </div>
        {step.multi && <div className="body-sm mt-2">{copy.upToChoices(step.max ?? 2)}</div>}
      </div>
    )
  }

  if (step.type === "sliders") {
    const tone = answers.tone
    return (
      <div className="divide-y divide-hair">
        {(step.axes ?? []).map((ax) => (
          <ToneGauge
            key={ax.id}
            left={ax.l}
            right={ax.r}
            value={tone[ax.id] ?? 50}
            onChange={(v) => onChange("tone", { ...tone, [ax.id]: v })}
          />
        ))}
      </div>
    )
  }

  if (step.type === "wordbank") {
    const wb = answers.wordbank
    const toggle = (group: "mine" | "notmine", w: string) => {
      const other = group === "mine" ? "notmine" : "mine"
      const arr = [...wb[group]]
      const pos = arr.indexOf(w)
      const otherArr = wb[other].filter((x) => x !== w)
      if (pos > -1) arr.splice(pos, 1)
      else arr.push(w)
      onChange("wordbank", { ...wb, [group]: arr, [other]: otherArr })
    }
    const renderGroup = (title: string, group: "mine" | "notmine") => (
      <div className="mb-5">
        <div className="field-label mb-2.5">{title}</div>
        <div className="flex flex-wrap gap-2">
          {words.map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => toggle(group, w)}
              className={`rounded-full border px-3.5 py-2 text-[12.5px] transition-colors ${
                wb[group].includes(w) ? "border-brand bg-brand text-white" : "border-hair-strong bg-white/[0.02] text-chalk-65"
              }`}
            >
              {w}
            </button>
          ))}
        </div>
      </div>
    )
    return (
      <div>
        {renderGroup(copy.myWords, "mine")}
        {renderGroup(copy.neverMyWords, "notmine")}
      </div>
    )
  }

  return null
}

function AutoTextarea({
  value,
  placeholder,
  rows = 5,
  nudge,
  unlock,
  onChange,
}: {
  value: string
  placeholder?: string
  rows?: number
  nudge?: string
  unlock?: string
  onChange: (v: string) => void
}) {
  const ref = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.height = "auto"
    el.style.height = `${el.scrollHeight}px`
  }, [value])
  const n = value.trim() ? value.trim().split(/\s+/).length : 0
  return (
    <div className="relative">
      <div className="q-field-wrap relative">
        {!value && (
          <span className="q-caret" aria-hidden style={{ left: 0 }} />
        )}
        <textarea
          ref={ref}
          className="q-field"
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="q-line" />
      </div>
      {n >= 4 && n < 25 && nudge && (
        <p className="mt-3 border-l border-white/15 pl-4 font-sans text-[12.5px] leading-[1.65] text-chalk-40">
          {nudge}
        </p>
      )}
      {n >= 25 && unlock && (
        <p className="mt-2.5 flex items-start gap-2 font-sans text-[12.5px] leading-[1.55] text-chalk-55">
          <span className="mt-[5px] h-1 w-1 flex-shrink-0 rounded-full bg-white/25" aria-hidden />
          <span>{unlock}</span>
        </p>
      )}
    </div>
  )
}

function ReviewScreen({
  steps,
  copy,
  answers,
  submitting,
  errorMsg,
  onEdit,
  onBack,
  onSubmit,
  lang,
}: {
  steps: Question[]
  copy: Copy
  answers: Answers
  submitting: boolean
  errorMsg: string
  onEdit: (i: number) => void
  onBack: () => void
  onSubmit: () => void
  lang: Lang
}) {
  const [signature, setSignature] = useState("")
  const norm = (s: string) =>
    s.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  const signed = signature.trim().length > 2 &&
    (!answers.identity.name || norm(signature).includes(norm(answers.identity.name.split(" ")[0])))

  const totalWords = Object.values(answers).reduce<number>((n, v) => {
    if (typeof v !== "string") return n
    const t = v.trim()
    return t ? n + t.split(/\s+/).length : n
  }, 0)

  const dash = copy.dash

  function summarize(step: Question): string {
    if (step.type === "identity") return `${answers.identity.name} — ${answers.identity.house}`
    if (step.type === "shorttext") return (answers[step.id] as string) || dash
    if (step.type === "textarea") {
      let v = (answers[step.id] as string) || dash
      const deep = answers[`${step.id}_deep`] as string
      if (deep) v += `\n\n${copy.deeperLabel} ${deep}`
      return v
    }
    if (step.type === "competitors") {
      const parts = answers.competitors.filter((c) => c.name).map((c) => `${c.name} : "${c.line}"`)
      return parts.join("\n") || dash
    }
    if (step.type === "links") {
      return [`${copy.siteLabel} : ${answers.links.site || dash}`, `LinkedIn : ${answers.links.linkedin || dash}`, ...(answers.links.extra ?? []).filter((u) => u.trim()).map((u, i) => `${copy.linkExtra} ${i + 1} : ${u}`)].join("\n")
    }
    if (step.type === "choice") {
      const v = answers[step.id]
      return step.multi ? (Array.isArray(v) ? v.join(", ") : "") || dash : (v as string) || dash
    }
    if (step.type === "sliders") {
      return (step.axes ?? []).map((ax) => `${ax.l}/${ax.r} : ${answers.tone[ax.id] ?? 50}`).join("\n")
    }
    if (step.type === "wordbank") {
      return `${copy.myWords} : ${answers.wordbank.mine.join(", ") || dash}\n${copy.neverMyWords} : ${
        answers.wordbank.notmine.join(", ") || dash
      }`
    }
    return dash
  }

  return (
    <div>
      <div className="kicker mb-3">{copy.beforeSending}</div>
      <div className="mb-9 border-y border-hair py-8 text-center">
        <div className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-brand">
          {copy.recapKicker}
        </div>
        <h2 className="mx-auto mt-5 max-w-[460px] font-serif text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold uppercase leading-[1.1] tracking-[-0.005em] text-white">
          {copy.recapTitle}
        </h2>
        <p className="mx-auto mt-5 max-w-[440px] font-sans text-[14.5px] leading-[1.7] text-chalk-55">
          {copy.recapLead}
        </p>
        <div className="mt-8 font-serif text-[clamp(2.4rem,6vw,3.6rem)] font-bold leading-none text-brand">
          {totalWords.toLocaleString()}
        </div>
        <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-chalk-40">
          {copy.wordsWritten}
        </div>

        <div className="mx-auto mt-9 grid max-w-[520px] grid-cols-3 gap-px bg-white/10">
          {copy.recapStats.map((s) => (
            <div key={s.l} className="bg-ink px-3 py-4">
              <div className="font-serif text-[1.5rem] font-bold leading-none text-brand">{s.v}</div>
              <div className="mt-2 font-sans text-[11.5px] leading-tight text-chalk-40">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="h-card mb-2">{copy.reviewTitle}</h2>
      <p className="body-sm mb-1">{copy.reviewNote}</p>
      <div>
        {steps.map((step, i) => (
          <div key={step.id} className="border-t border-hair py-4">
            <div className="flex items-start justify-between gap-3">
              <div className="mb-1.5 text-[11px] uppercase tracking-[0.14em] text-brand">
                {step.label}
                {step.optional ? copy.optionalSuffix : ""}
              </div>
              <button type="button" className="btn-quiet flex-shrink-0" onClick={() => onEdit(i)}>
                {copy.edit}
              </button>
            </div>
            {summarize(step).trim() ? (
              <div className="whitespace-pre-wrap text-[14.5px] leading-relaxed text-chalk-75">
                {summarize(step)}
              </div>
            ) : (
              <button
                type="button"
                onClick={() => onEdit(i)}
                className="flex items-center gap-2 text-left font-sans text-[13.5px] text-brand underline decoration-brand/40 underline-offset-4"
              >
                {copy.emptyAnswer}
              </button>
            )}
          </div>
        ))}
      </div>
      {errorMsg && <p className="mt-4 text-[13px] text-brand">{errorMsg}</p>}
      <div className="mt-10 w-full">
        <label className="mb-2.5 block font-mono text-[9.5px] uppercase tracking-[0.2em] text-chalk-40">
          {copy.signLabel}
        </label>
        <input
          className="q-field w-full max-w-[420px] font-serif text-[18px]"
          placeholder={answers.identity.name || copy.signPlaceholder}
          value={signature}
          onChange={(e) => setSignature(e.target.value)}
        />

        <p className="mt-6 max-w-[520px] font-sans text-[12.5px] leading-[1.65] text-chalk-40">
          {copy.privacyNote}{" "}
          <a
            href={`/${lang}/privacy`}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap underline underline-offset-4 transition-colors hover:text-white"
          >
            {copy.privacyLink}
          </a>
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            type="button"
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 disabled:hover:shadow-none"
            disabled={submitting || !signed}
            onClick={onSubmit}
          >
            {submitting ? copy.sending : copy.sign}
          </button>
          <button type="button" className="btn-ghost" onClick={onBack}>
            {copy.back}
          </button>
        </div>
      </div>
    </div>
  )
}

function DoneScreen({
  copy,
  house,
  answers,
  steps,
  refId,
  lang,
}: {
  copy: Copy
  house?: string
  answers: Answers
  steps: Question[]
  refId?: string
  lang: Lang
}) {
  const at = (ms: number) => ({ animationDelay: `${ms}ms` })

  const ref =
    refId ||
    `${(house || "SP").toUpperCase().replace(/[^A-Z]/g, "").slice(0, 4).padEnd(3, "X")}-${new Date()
      .getFullYear()
      .toString()
      .slice(2)}`

  const day = (n: number, year = false) => {
    const d = new Date()
    d.setDate(d.getDate() + n)
    return d.toLocaleDateString(copy.locale, { day: "numeric", month: "long", ...(year ? { year: "numeric" } : {}) })
  }
  const due = day(21, true)
  const timeline = copy.nextSteps(day(21))

  function downloadFirstPage() {
    const lines = [
      `# ${house || ""}`,
      "",
      `_Votre première page — ${ref} · ${new Date().toLocaleDateString(copy.locale)}_`,
      "",
      "Ce document rassemble ce que vous avez écrit de votre main.",
      "Il est le point de départ de votre récit.",
      "",
      "---",
      "",
    ]
    steps.forEach((s) => {
      const v = answers[s.id]
      let txt = ""
      if (typeof v === "string") txt = v.trim()
      else if (Array.isArray(v)) txt = (v as string[]).join(" · ")
      if (!txt) return
      lines.push(`## ${s.label}`, "", txt, "")
    })
    const blob = new Blob([lines.join("\n")], { type: "text/markdown;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${ref}-premiere-page.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center py-8 text-center">
      <div aria-hidden className="relative mb-12 h-[150px] w-[220px]">
        {copy.sealPieces.map((label, i) => {
          const angle = (i - 2.5) * 5
          return (
            <div
              key={label}
              className="q-deal absolute inset-0 flex flex-col justify-between rounded-[14px] border border-white/10 p-4 text-left"
              style={
                {
                  background: CARD_GLOWS[i % CARD_GLOWS.length],
                  transform: `translateX(${(i - 2.5) * 6}px) rotate(${angle}deg)`,
                  "--r": `${angle}deg`,
                  "--x": `${(i - 2.5) * 6}px`,
                  animationDelay: `${i * 140}ms`,
                  zIndex: i,
                  boxShadow: "0 12px 30px -12px rgba(0,0,0,.8)",
                } as React.CSSProperties
              }
            >
              <span className="font-mono text-[10px] tracking-[0.24em] text-brand">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-serif text-[13px] font-bold uppercase leading-tight text-white">{label}</span>
            </div>
          )
        })}
      </div>

      <div className="q-rise" style={at(1000)}>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-chalk-40">{copy.sealKicker}</div>
        <h2 className="mx-auto mt-7 max-w-[600px] font-serif text-[clamp(1.9rem,5vw,3.2rem)] font-bold uppercase leading-[1.05] tracking-[-0.015em] text-white">
          {copy.sealTitle(ref)}
        </h2>
      </div>

      <div className="q-grow mx-auto mt-9 h-px bg-brand" style={at(1300)} />

      <div className="q-rise" style={at(1500)}>
        <p className="mt-9 font-mono text-[10px] uppercase tracking-[0.22em] text-chalk-40">{copy.sealDueLabel}</p>
        <p className="mt-3 font-serif text-[clamp(1.3rem,3vw,1.9rem)] font-bold text-brand">{due}</p>
        <p className="mx-auto mt-8 max-w-[430px] font-sans text-[14.5px] leading-[1.75] text-chalk-55">{copy.sealLead}</p>
      </div>

      <div className="q-rise mx-auto mt-14 w-full max-w-[520px] text-left" style={at(1800)}>
        <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.26em] text-brand">{copy.nextTitle}</div>
        <ol className="m-0 list-none p-0">
          {timeline.map((s, i) => (
            <li key={i} className="grid grid-cols-[132px_1fr] gap-5 border-t border-hair py-4 first:border-t-0 first:pt-0 sm:grid-cols-[168px_1fr]">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-chalk-40">{s.when}</span>
              <span className="font-sans text-[14px] leading-[1.6] text-chalk-75">{s.what}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="q-rise mt-12 flex flex-col items-center gap-5" style={at(2100)}>
        <button type="button" className="btn-ghost" onClick={downloadFirstPage}>
          {copy.sealDownload}
        </button>
        <a href={`/${lang}`} className="text-[13px] text-chalk-40 underline underline-offset-4 transition-colors hover:text-white">
          {copy.backToSite}
        </a>
        <p className="font-mono text-[9.5px] uppercase tracking-[0.22em] text-chalk-40">
          {copy.sealRefLabel} · {ref}
        </p>
      </div>
    </div>
  )
}

function TerrainMark({ k, on, size = 26 }: { k: string; on: boolean; size?: number }) {
  const s = on ? "var(--color-brand)" : "rgba(255,255,255,0.35)"
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: s, strokeWidth: 1.4 }
  return (
    <span className="flex-shrink-0 transition-colors" aria-hidden>
      {k === "marques" && (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="12" />
          <path d="M3 11h18M9 7V4h6v3" />
        </svg>
      )}
      {k === "produits" && (
        <svg {...common}>
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
          <path d="M4 7.5l8 4.5 8-4.5M12 12v9" />
        </svg>
      )}
      {k === "lieux" && (
        <svg {...common}>
          <path d="M5 21V4h9v17" />
          <path d="M14 8l5-2v15l-5-2" />
          <circle cx="11.5" cy="12.5" r="0.9" fill={s} stroke="none" />
        </svg>
      )}
      {k === "artistes" && (
        <svg {...common}>
          <path d="M3 16c3-1 4-9 6.5-9S12 16 14 16s2.5-4 4-4 2 2 3 2" strokeLinecap="round" />
          <path d="M3 20h18" opacity="0.4" />
        </svg>
      )}
    </span>
  )
}

function ChapterScreen({
  tag,
  n,
  total,
  count,
  mins,
  copy,
  onStart,
}: {
  tag: string
  n: number
  total: number
  count: number
  mins: number
  copy: Copy
  onStart: () => void
}) {
  const [leaving, setLeaving] = useState(false)
  const go = () => {
    if (leaving) return
    setLeaving(true)
    window.setTimeout(onStart, 450)
  }
  const note = copy.chapterNotes[tag] ?? copy.chapterFallback
  const quote = copy.chapterQuotes[tag]
  const title = copy.chapterTitles[tag] ?? tag
  const feeds = copy.chapterFeeds[tag]
  const at = (ms: number) => ({ animationDelay: `${ms}ms` })
  const noteWords = note.split(" ").length
  const t0 = 1000
  const tNote = t0 + noteWords * 22
  const closeBar = leaving ? { height: "50vh", transition: "height 450ms ease" } : undefined

  return (
    <div className="relative isolate flex min-h-[78vh] flex-col items-center justify-center py-[calc(8vh+0.9rem)] text-center">
      <div aria-hidden className="q-bar pointer-events-none fixed inset-x-0 top-0 z-30 bg-black" style={closeBar} />
      <div aria-hidden className="q-bar pointer-events-none fixed inset-x-0 bottom-0 z-30 bg-black" style={closeBar} />
      <BreatheGlow />

      <div className="q-rise flex flex-col items-center gap-3" style={at(150)}>
        <div className="font-mono text-[10.5px] uppercase tracking-[0.3em] text-chalk-40">{copy.chapterOf(n, total)}</div>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: total }, (_, i) => (
            <span
              key={i}
              className={`h-[3px] rounded-full transition-all ${i + 1 < n ? "w-5 bg-brand/60" : i + 1 === n ? "q-pulse w-8 bg-brand" : "w-5 bg-white/12"}`}
            />
          ))}
        </div>
      </div>

      <div aria-hidden className="mt-4 w-[min(290px,66vw)]">
        <ChapterMotif k={tag} />
      </div>

      <h2
        className="mx-auto mt-4 max-w-[14ch] font-serif text-[clamp(2.2rem,6.4vw,4.2rem)] font-bold uppercase leading-[0.98] tracking-[-0.02em] text-white"
        style={{ textWrap: "balance" } as React.CSSProperties}
      >
        <InkWords text={title} keyRe={/\S+$/} delay={300} step={120} />
      </h2>

      <div className="q-grow mt-5 h-px bg-brand" style={at(700)} />

      <p className="mx-auto mt-5 max-w-[520px] font-sans text-[15.5px] leading-[1.7] text-chalk-75">
        <InkWords text={note} delay={t0} step={22} soft />
      </p>

      {feeds && (
        <div className="q-rise mt-4 flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-brand" style={at(tNote + 150)}>
          <span aria-hidden className="q-grow-sm inline-block h-px w-8 bg-brand" style={at(tNote + 150)} />
          {feeds}
        </div>
      )}

      {quote && (
        <figure className="q-rise q-tall-only mx-auto mt-6 max-w-[480px]" style={at(tNote + 450)}>
          <blockquote className="m-0 border-l-2 border-white/15 pl-4 text-left font-serif text-[13.5px] italic leading-[1.6] text-chalk-55">
            {quote}
          </blockquote>
          <figcaption className="mt-2 pl-4 text-left font-mono text-[9px] uppercase tracking-[0.22em] text-chalk-40">
            {copy.quoteSource}
          </figcaption>
        </figure>
      )}

      <div className="q-rise mt-6" style={at(tNote + 700)}>
        <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.24em] text-chalk-40">
          {copy.chapterCount(count)} · {copy.chapterMinutes(mins)}
        </div>
        <button type="button" className="btn-primary" onClick={go} disabled={leaving} autoFocus>
          {copy.continue}
        </button>
      </div>
    </div>
  )
}

function ChapterMotif({ k }: { k: string }) {
  const W = "rgba(255,255,255,0.38)"
  const B = "#2256ff"
  const dl = (ms: number) => ({ animationDelay: `${ms}ms` })
  const common = { viewBox: "0 0 440 190", fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, className: "block h-auto w-full" }

  if (k === "fondations")
    return (
      <svg {...common}>
        <line x1="40" y1="162" x2="400" y2="162" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" pathLength={1} className="cm-draw" style={dl(200)} />
        {[90, 155, 220, 285, 350].map((x, i) => {
          const h = [78, 104, 124, 104, 78][i]
          return <rect key={x} x={x - 12} y={162 - h} width="24" height={h} rx="2" stroke={W} strokeWidth="1.4" fill="rgba(255,255,255,0.04)" className="cm-rise" style={dl(400 + i * 150)} />
        })}
        <path d="M70 84 L220 34 L370 84" stroke={B} strokeWidth="1.8" pathLength={1} className="cm-draw" style={dl(1300)} />
        <circle cx="220" cy="34" r="4" fill={B} className="cm-pop" style={dl(2300)} />
      </svg>
    )

  if (k === "champ")
    return (
      <svg {...common}>
        {[34, 62, 90].map((r, i) => (
          <circle key={r} cx="220" cy="95" r={r} stroke={W} strokeWidth="1.2" pathLength={1} className="cm-draw" style={dl(200 + i * 250)} />
        ))}
        <line x1="116" y1="95" x2="324" y2="95" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1="220" y1="5" x2="220" y2="185" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <g className="cm-sweep">
          <polygon points="220,95 310,95 306,66" fill="rgba(34,86,255,0.16)" />
          <line x1="220" y1="95" x2="310" y2="95" stroke={B} strokeWidth="1.5" />
        </g>
        {[[262, 62], [180, 58], [286, 118], [150, 128], [236, 140]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4.5" fill="rgba(255,255,255,0.55)" className="cm-pop" style={dl(900 + i * 220)} />
        ))}
        <circle cx="196" cy="100" r="6" fill={B} className="cm-pop" style={dl(2200)} />
        <circle cx="196" cy="100" r="13" stroke={B} strokeWidth="1.2" className="cm-ring" style={dl(2400)} />
      </svg>
    )

  if (k === "voix")
    return (
      <svg {...common}>
        {Array.from({ length: 31 }, (_, i) => {
          const d = Math.abs(i - 15)
          const h = 14 + 120 * Math.exp(-(d * d) / 60) * (0.55 + 0.45 * Math.abs(Math.sin(i * 1.7)))
          return (
            <rect
              key={i}
              x={40 + i * 11.6}
              y={95 - h / 2}
              width="5"
              height={h}
              rx="2.5"
              fill={d < 6 ? B : "rgba(255,255,255,0.22)"}
              fillOpacity={d < 6 ? 0.85 : 1}
              className="cm-wave"
              style={dl(i * 55)}
            />
          )
        })}
      </svg>
    )

  if (k === "audience")
    return (
      <svg {...common}>
        {[88, 66, 44, 22].map((r, i) => (
          <circle key={r} cx="220" cy="95" r={r} stroke={i === 3 ? B : W} strokeWidth={i === 3 ? 1.8 : 1.2} className="cm-zoom" style={dl(200 + i * 260)} />
        ))}
        {[[220, 2, 220, 18], [220, 172, 220, 188], [112, 95, 128, 95], [312, 95, 328, 95]].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.35)" strokeWidth="1.4" className="cm-pop" style={dl(1500 + i * 80)} />
        ))}
        <circle cx="220" cy="95" r="5.5" fill={B} className="cm-pop" style={dl(1500)} />
        <circle cx="220" cy="95" r="14" stroke={B} strokeWidth="1.2" className="cm-ring" style={dl(1700)} />
      </svg>
    )

  if (k === "quotidien")
    return (
      <svg {...common}>
        <circle cx="220" cy="95" r="72" stroke={W} strokeWidth="1.2" pathLength={1} className="cm-draw" style={dl(200)} />
        <circle cx="220" cy="95" r="46" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2 6" />
        {Array.from({ length: 7 }, (_, i) => {
          const a = (-90 + i * (360 / 7)) * (Math.PI / 180)
          return <circle key={i} cx={220 + 72 * Math.cos(a)} cy={95 + 72 * Math.sin(a)} r={i === 0 ? 7 : 5} fill={i === 0 ? B : "rgba(255,255,255,0.5)"} className="cm-seq" style={dl(i * 450)} />
        })}
        <path d="M205 95 L218 108 L238 82" stroke={B} strokeWidth="2" pathLength={1} className="cm-draw" style={dl(1400)} />
      </svg>
    )

  if (k === "deploiement")
    return (
      <svg {...common}>
        <path d="M30 150 C 110 150, 120 50, 200 70 S 320 160, 400 60" stroke={W} strokeWidth="1.6" strokeDasharray="1" pathLength={1} className="cm-draw" style={dl(200)} />
        {[[30, 150], [128, 98], [232, 108], [330, 118]].map(([x, y], i) => (
          <g key={i} className="cm-pop" style={dl(500 + i * 450)}>
            <circle cx={x} cy={y} r="9" fill="#0a0a0a" stroke="rgba(255,255,255,0.45)" strokeWidth="1.4" />
            <text x={x} y={y + 3.5} textAnchor="middle" fontSize="10" fontFamily="monospace" fill="rgba(255,255,255,0.7)">{i + 1}</text>
          </g>
        ))}
        <g className="cm-pop" style={dl(2300)}>
          <circle cx="400" cy="60" r="10" fill={B} />
          <path d="M395 60 H405 M401 56 L405 60 L401 64" stroke="#0a0a0a" strokeWidth="1.8" />
        </g>
      </svg>
    )

  return (
    <svg {...common}>
      <circle cx="220" cy="95" r="70" stroke={W} strokeWidth="1.4" pathLength={1} className="cm-draw" style={dl(200)} />
      <circle cx="220" cy="95" r="54" stroke="rgba(255,255,255,0.16)" strokeWidth="1" strokeDasharray="3 7" className="cm-turn" />
      {Array.from({ length: 36 }, (_, i) => {
        const a = (i * 10) * (Math.PI / 180)
        return <line key={i} x1={220 + 76 * Math.cos(a)} y1={95 + 76 * Math.sin(a)} x2={220 + 82 * Math.cos(a)} y2={95 + 82 * Math.sin(a)} stroke="rgba(255,255,255,0.3)" strokeWidth="1.4" className="cm-pop" style={dl(500 + i * 25)} />
      })}
      <path d="M190 97 L212 119 L254 70" stroke={B} strokeWidth="3.2" pathLength={1} className="cm-draw" style={dl(1500)} />
    </svg>
  )
}

function choiceCols(n: number): number {
  if (n <= 5) return Math.max(1, n)
  if (n === 6 || n === 9) return 3
  if (n === 10) return 5
  return 4
}

function ThresholdScreen({ copy, onEnter }: { copy: Copy; onEnter: () => void }) {
  const [leaving, setLeaving] = useState(false)
  const go = () => {
    if (leaving) return
    setLeaving(true)
    window.setTimeout(onEnter, 450)
  }

  const at = (ms: number) => ({ animationDelay: `${ms}ms` })

  return (
    <div className="relative isolate flex min-h-[82vh] flex-col items-center justify-center text-center">
      <div
        aria-hidden
        className="q-bar pointer-events-none fixed inset-x-0 top-0 z-30 bg-black"
        style={leaving ? { height: "50vh", transition: "height 450ms ease" } : undefined}
      />
      <div
        aria-hidden
        className="q-bar pointer-events-none fixed inset-x-0 bottom-0 z-30 bg-black"
        style={leaving ? { height: "50vh", transition: "height 450ms ease" } : undefined}
      />

      <BreatheGlow />

      <div className="q-rise font-mono text-[10.5px] uppercase tracking-[0.3em] text-chalk-40" style={at(500)}>
        {copy.thresholdKicker}
      </div>

      <h1
        className="mx-auto mt-9 max-w-[16ch] font-serif text-[clamp(2.2rem,6.2vw,4.8rem)] font-bold uppercase leading-[1] tracking-[-0.02em] text-white"
        style={{ textWrap: "balance" } as React.CSSProperties}
      >
        <InkWords text={copy.thresholdTitle} keyRe={/commence|starts/i} delay={800} step={90} />
      </h1>

      <p className="q-rise mx-auto mt-9 max-w-[500px] font-sans text-[15.5px] leading-[1.75] text-chalk-55" style={at(1700)}>
        {copy.thresholdLead}
      </p>

      <div className="q-rise mt-12" style={at(2000)}>
        <button type="button" className="btn-primary" onClick={go} disabled={leaving} autoFocus>
          {copy.thresholdCta} →
        </button>
      </div>
    </div>
  )
}

function FillQuestion({ text }: { text: string }) {
  const words = text.split(" ")
  const step = Math.min(55, 850 / Math.max(1, words.length))
  return (
    <h2 className="q-question mx-auto mb-5 max-w-[24ch]">
      {words.map((w, i) => (
        <span key={i}>
          <span className="q-ink" style={{ animationDelay: `${Math.round(i * step)}ms` }}>
            {w}
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </h2>
  )
}

const CARD_GLOWS = [
  "radial-gradient(70% 70% at 85% 15%, rgba(34,86,255,.16), transparent 60%), #0d0d0d",
  "radial-gradient(70% 70% at 15% 20%, rgba(46,78,255,.18), transparent 60%), #0d0d0d",
  "radial-gradient(70% 70% at 85% 85%, rgba(133,156,255,.16), transparent 60%), #0d0d0d",
  "radial-gradient(70% 70% at 20% 85%, rgba(46,78,255,.16), transparent 60%), #0d0d0d",
  "radial-gradient(80% 80% at 50% 20%, rgba(34,86,255,.14), transparent 55%), #0d0d0d",
]

function ToneGauge({
  left,
  right,
  value,
  onChange,
}: {
  left: string
  right: string
  value: number
  onChange: (v: number) => void
}) {
  const N = 21
  const MID = 10
  const idx = Math.max(0, Math.min(N - 1, Math.round(value / 5)))
  const ref = useRef<HTMLDivElement | null>(null)
  const dragging = useRef(false)

  const setFromX = (clientX: number) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const i = Math.max(0, Math.min(N - 1, Math.round(((clientX - r.left) / r.width) * (N - 1))))
    if (i !== idx) onChange(i * 5)
  }
  const leftOn = idx < MID
  const rightOn = idx > MID
  const lo = Math.min(idx, MID)
  const hi = Math.max(idx, MID)

  return (
    <div className="py-7 first:pt-0 last:pb-0">
      <div className="mb-5 flex items-baseline justify-between gap-6">
        <span className={`font-serif text-[1.25rem] uppercase tracking-[-0.01em] transition-all duration-200 ${leftOn ? "font-bold text-white" : "font-semibold text-chalk-40"}`}>
          {left}
        </span>
        <span className={`text-right font-serif text-[1.25rem] uppercase tracking-[-0.01em] transition-all duration-200 ${rightOn ? "font-bold text-white" : "font-semibold text-chalk-40"}`}>
          {right}
        </span>
      </div>
      <div
        ref={ref}
        role="slider"
        tabIndex={0}
        aria-label={`${left} — ${right}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={idx * 5}
        className="flex h-[64px] cursor-pointer select-none items-end justify-between rounded-md outline-none focus-visible:ring-1 focus-visible:ring-brand/60 [touch-action:pan-y]"
        onPointerDown={(e) => {
          dragging.current = true
          try {
            e.currentTarget.setPointerCapture(e.pointerId)
          } catch {
          }
          setFromX(e.clientX)
        }}
        onPointerMove={(e) => {
          if (dragging.current) setFromX(e.clientX)
        }}
        onPointerUp={() => {
          dragging.current = false
        }}
        onPointerCancel={() => {
          dragging.current = false
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowUp") {
            e.preventDefault()
            onChange(Math.min(100, idx * 5 + 5))
          } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
            e.preventDefault()
            onChange(Math.max(0, idx * 5 - 5))
          } else if (e.key === "Home") {
            e.preventDefault()
            onChange(0)
          } else if (e.key === "End") {
            e.preventDefault()
            onChange(100)
          }
        }}
      >
        {Array.from({ length: N }, (_, i) => {
          const current = i === idx
          const center = i === MID
          const major = i % 5 === 0
          const lit = i >= lo && i <= hi && idx !== MID
          return (
            <span
              key={i}
              aria-hidden
              className="rounded-full transition-all duration-200 ease-out"
              style={{
                width: current ? 5 : 3,
                height: current ? 64 : center ? 40 : major ? 28 : 18,
                background: current && idx !== MID
                  ? "linear-gradient(180deg,#3d55ff,#2256ff)"
                  : lit
                    ? "linear-gradient(180deg,#2e4eff,#1044e0)"
                    : center
                      ? "rgba(255,255,255,0.55)"
                      : major
                        ? "rgba(255,255,255,0.28)"
                        : "rgba(255,255,255,0.13)",
                boxShadow: current && idx !== MID ? "0 0 22px rgba(34,86,255,0.7)" : "none",
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

function InkWords({ text, keyRe, delay = 0, step = 80, soft = false }: { text: string; keyRe?: RegExp; delay?: number; step?: number; soft?: boolean }) {
  const words = text.split(" ")
  const m = keyRe ? keyRe.exec(text) : null
  let offset = 0
  return (
    <>
      {words.map((w, i) => {
        const start = offset
        offset += w.length + 1
        const key = !!m && start < m.index + m[0].length && start + w.length > m.index
        const d = { animationDelay: `${delay + i * step}ms` }
        return (
          <span key={i}>
            {key ? (
              <span
                className="q-ink-op bg-[linear-gradient(135deg,#2256ff_20%,#5b86ff_60%,#1044e0)] bg-clip-text"
                style={{ color: "transparent", ...d }}
              >
                {w}
              </span>
            ) : (
              <span className={soft ? "q-ink-soft" : "q-ink"} style={d}>
                {w}
              </span>
            )}
            {i < words.length - 1 ? " " : null}
          </span>
        )
      })}
    </>
  )
}

function BreatheGlow() {
  return (
    <div
      aria-hidden
      className="q-breathe pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{ background: "radial-gradient(circle, rgba(34,86,255,.22) 0%, rgba(34,86,255,.06) 40%, transparent 70%)" }}
    />
  )
}

function LanguageScreen({ onPick }: { onPick: (l: Lang) => void }) {
  const [go, setGo] = useState(() => {
    try {
      return !(window as unknown as { __spIntroActive?: boolean }).__spIntroActive
    } catch {
      return true
    }
  })
  useEffect(() => {
    if (go) return
    const on = () => setGo(true)
    window.addEventListener("sp-intro-exit", on)
    const t = window.setTimeout(on, 8000)
    if (!(window as unknown as { __spIntroActive?: boolean }).__spIntroActive) on()
    return () => {
      window.removeEventListener("sp-intro-exit", on)
      window.clearTimeout(t)
    }
  }, [go])
  const OFF = 150

  const at = (ms: number) => ({ animationDelay: `${ms + OFF}ms` })
  const options: { l: Lang; name: string; line: string; tag: string }[] = [
    { l: "fr", name: "Français", line: "Continuer en français", tag: "FR" },
    { l: "en", name: "English", line: "Continue in English", tag: "EN" },
  ]
  return (
    !go ? (
      <div className="min-h-[82vh]" aria-hidden />
    ) : (
    <div className="relative isolate flex min-h-[82vh] flex-col items-center justify-center text-center">
      <BreatheGlow />
      <div className="q-rise font-mono text-[10.5px] uppercase tracking-[0.3em] text-chalk-40" style={at(100)}>
        MOMENTUM · Onboarding
      </div>
      <h1
        className="mx-auto mt-9 max-w-[16ch] font-serif text-[clamp(2.2rem,6vw,4.4rem)] font-bold uppercase leading-[1] tracking-[-0.02em] text-white"
        style={{ textWrap: "balance" } as React.CSSProperties}
      >
        <InkWords text="Choisissez votre langue." keyRe={/langue/i} delay={250 + OFF} step={110} />
      </h1>
      <p className="q-rise mt-5 font-mono text-[11px] uppercase tracking-[0.3em] text-chalk-40" style={at(1000)}>
        Choose your language
      </p>
      <div className="mt-12 grid w-full max-w-[580px] grid-cols-1 gap-4 sm:grid-cols-2">
        {options.map((o, i) => (
          <button
            key={o.l}
            type="button"
            onClick={() => onPick(o.l)}
            className="q-rise group relative flex min-h-[170px] flex-col justify-between overflow-hidden rounded-[18px] border border-white/[0.09] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_22px_60px_-22px_rgba(34,86,255,0.6)] focus-visible:-translate-y-1 focus-visible:border-brand focus-visible:outline-none"
            style={{ background: CARD_GLOWS[i], animationDelay: `${1200 + i * 130 + OFF}ms` }}
          >
            <span className="font-mono text-[11px] tracking-[0.28em] text-brand">{o.tag}</span>
            <span>
              <span className="block font-serif text-[1.9rem] font-bold uppercase leading-none text-white">{o.name}</span>
              <span className="mt-3 block font-sans text-[13.5px] text-chalk-55 transition-colors group-hover:text-white">{o.line} →</span>
            </span>
          </button>
        ))}
      </div>
    </div>
    )
  )
}
