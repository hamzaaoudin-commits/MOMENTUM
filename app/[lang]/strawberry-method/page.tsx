"use client"

import { useEffect, useRef, useState } from "react"
import { LocaleLink as Link } from "@/components/locale-link"
import { useT, useLang } from "@/lib/i18n"
import { BackHomeButton } from "@/components/strawberry/back-home-button"
import { STRIPE_LINKS } from "@/lib/config"
import { AtlasSection } from "@/components/strawberry/atlas-section"
import { BookSection } from "@/components/strawberry/book-section"

const SERIF = "var(--font-serif)"
const SANS = "var(--font-sans)"
const COLOR = "#2256ff"
const GLOW = "rgba(34,86,255,0.35)"

const ORDER_URL = STRIPE_LINKS.architecture

const T = {
  en: {
    badge: "The Proprietary Framework",
    lFramework: "Why a framework",
    lAcronym: "The acronym",
    lStages: "The five stages",
    lWorks: "Why it works",
    lCommission: "THE NARRATIVE ARCHITECTURE",
    kickerArtifact: "From method to artifact",
    kickerApplied: "The method, applied",
    h1a: "The Strawberry",
    h1b: "Method.",
    lead: "Five stages. One doctrine. The method behind every story we write, before any moment is staged.",
    whyH2a: "Most studios improvise.",
    whyH2b: "We do not.",
    whyLead: "A framework is not a constraint — it is the discipline that frees creative depth. The Strawberry Method is what we refine with every commission, so that nothing a moment will say is left to chance.",
    principles: [
      { title: "Speed without shortcuts", body: "A method is repeatable. We do not invent the process for each moment — we apply a refined one, freeing the time for what is irreducibly creative." },
      { title: "Precision over instinct", body: "Improvisation is for poets. A moment people remember demands a structure that holds — five stages, each one earning the next." },
      { title: "Refined commission after commission", body: "Each engagement sharpens the method. What worked stays, what didn't is rewritten. The S.T.R.A.W. of next year will be sharper than this one." },
    ],
    fiveH2: "Five stages. In order. Always.",
    fiveItalic: "Not a checklist. The story every moment starts from.",
    stagesH2: "How a moment's story is written.",
    craft: "What we craft",
    outputLabel: "Output",
    letters: [
      { letter: "S", name: "Soul", gloss: "The soul", verb: "Find the soul." },
      { letter: "T", name: "Territory", gloss: "The territory", verb: "Map the territory." },
      { letter: "R", name: "Reframe", gloss: "The reframe", verb: "Reframe the field." },
      { letter: "A", name: "Architecture", gloss: "The architecture", verb: "Build the architecture." },
      { letter: "W", name: "Weaponize", gloss: "The embodiment", verb: "Embody the universe." },
    ],
    stages: [
      { description: "Before language, before strategy — what is the irreducible reason this house exists? Not the elevator pitch. The conviction. The unreasonable belief the founder holds about the world.", delivers: ["Reason for being, positioning, values, personality, tone of voice", "The founding story, rewritten in two hundred and fifty words", "The enemy named — what this house refuses to accept", "The pillars and the founder archetype"], output: "Piece 01 · The platform. The constitution of the house, from which every other decision flows." },
      { description: "A category is a battlefield of perception. What the house says today, what the market retains, and the gap between the two — counted, not assumed.", delivers: ["Your materials taken apart one by one, occurrences counted", "Your current sentence, autopsied word by word", "The contradictions between your own pages", "Four audience segments, one language for each"], output: "Piece 02 · The diagnosis. What you say, what people retain, and what is missing." },
      { description: "Most brands compete inside the frame the category has set. The remembered ones rewrite the frame itself. We do not position the house against competitors — we show the ground they leave free.", delivers: ["Three to five competitors, their exact sentence quoted", "One file per competitor, dissected", "Two axes that reveal what category axes hide", "The ground nobody holds, and the proof that it is free"], output: "Piece 03 · The map. The field, and the place only you can hold." },
      { description: "Once the soul is found and the field reframed, we settle. Every decision carries its exact wording, where it applies, what it costs and what it unlocks.", delivers: ["Three to five moves, in order of execution", "What each one gains you, and what it costs you", "The first ninety days, in order", "The brief handed to your designer"], output: "Piece 04 · The decisions. What to do, in what order, and why." },
      { description: "A story without execution is theory. The final stage puts it in the hands of those who will speak for you on the day — your teams, and the tools they use. Then the staging begins.", delivers: ["Seven department playbooks and a coherence guide", "The lexicon: the words to use, the ones to retire, and why", "The rewritten copy, ready to paste", "A block to paste into your AI tool so it writes in your voice"], output: "Pieces 05 and 06 · The playbooks and the language. The universe made operational." },
    ],
    consH2: "Each stage earns the next.",
    consLead: "The order is not aesthetic. Skip a stage and the rest collapses.",
    consequences: [
      "Without Soul — no anchor. Every decision becomes negotiable.",
      "Without Territory — no battlefield. You compete where you cannot win.",
      "Without Reframe — no ownership. You sound like the others, only louder.",
      "Without Architecture — no compounding. Every piece starts from scratch.",
      "Without Weaponize — no embodiment. The story never meets the world.",
    ],
    bridgeH2: "The workshop. And what comes out of it.",
    bridgeLeadA: "S.T.R.A.W. is the process — the five stages we move through to write your story. ",
    bridgeLeadStrong: "The Narrative Architecture",
    bridgeLeadB: " is what those stages produce: six pieces, bound into a single document, delivered no later than 21 days after we receive your completed questionnaire. Then comes phase 2: the staging of your moment, from the concept to thirty days after the day.",
    colMethod: "Method stage",
    colDeliverable: "Delivered piece",
    bridgeFlow: [
      { stage: "S", deliverable: "The platform", note: "Piece 01 · the constitution of the house" },
      { stage: "T", deliverable: "The diagnosis", note: "Piece 02 · what you say, counted" },
      { stage: "R", deliverable: "The map", note: "Piece 03 · the field and the open ground" },
      { stage: "A", deliverable: "The decisions", note: "Piece 04 · the moves, in order" },
      { stage: "W", deliverable: "The playbooks", note: "Piece 05 · what your teams do every day" },
      { stage: "W", deliverable: "The language", note: "Piece 06 · the words and copy, ready to paste" },
    ],
    bridgeItalic: "The method is the discipline by which the story is written. The staging is how the world discovers it.",
    ctaH2a: "Run S.T.R.A.W.",
    ctaH2b: "before your moment.",
    ctaLead: "The story goes through all five letters: it finds the soul, maps the territory, reframes the field, settles the decisions and gives everyone who speaks for you the same words. Six pieces, delivered no later than 21 days after your questionnaire. €2,900, VAT not applicable (art. 293 B, French tax code). For the full moment, staging included, from €6,000 on quote.",
    ctaProduct: "The Narrative Architecture",
    ctaPrice: "€2,900",
    cta: "Order the story · €2,900 →",
    ctaFoot: "Proprietary Framework · Strawberry Production",
  },
  fr: {
    badge: "Le Framework Propri\u00e9taire",
    lFramework: "Pourquoi une m\u00e9thode",
    lAcronym: "L'acronyme",
    lStages: "Les cinq \u00e9tapes",
    lWorks: "Pourquoi \u00e7a marche",
    lCommission: "L'ARCHITECTURE NARRATIVE",
    kickerArtifact: "De la m\u00e9thode \u00e0 l'artefact",
    kickerApplied: "La m\u00e9thode, appliqu\u00e9e",
    h1a: "La M\u00e9thode",
    h1b: "Strawberry.",
    lead: "Cinq \u00e9tapes. Une doctrine. La m\u00e9thode derri\u00e8re chaque r\u00e9cit que nous \u00e9crivons, avant que le moment soit mis en sc\u00e8ne.",
    whyH2a: "La plupart des studios improvisent.",
    whyH2b: "Pas nous.",
    whyLead: "Un cadre n'est pas une contrainte — c'est la discipline qui libère la profondeur créative. La Méthode Strawberry, c'est ce que nous affinons à chaque commande, pour que rien de ce qu'un moment dira ne soit laissé au hasard.",
    principles: [
      { title: "La vitesse sans raccourcis", body: "Une m\u00e9thode est reproductible. On n'invente pas le processus pour chaque moment — on en applique un affin\u00e9, ce qui lib\u00e8re le temps pour ce qui est irr\u00e9ductiblement cr\u00e9atif." },
      { title: "La pr\u00e9cision avant l'instinct", body: "L'improvisation, c'est pour les po\u00e8tes. Un moment dont on se souvient exige une structure qui tient — cinq \u00e9tapes, chacune m\u00e9ritant la suivante." },
      { title: "Affin\u00e9e commande apr\u00e8s commande", body: "Chaque mission aiguise la m\u00e9thode. Ce qui a march\u00e9 reste, ce qui n'a pas march\u00e9 est r\u00e9\u00e9crit. Le S.T.R.A.W. de l'an prochain sera plus tranchant que celui-ci." },
    ],
    fiveH2: "Cinq \u00e9tapes. Dans l'ordre. Toujours.",
    fiveItalic: "Pas une checklist. Le récit d'où part chaque moment.",
    stagesH2: "Comment s'écrit le récit d'un moment.",
    craft: "Ce qu'on fa\u00e7onne",
    outputLabel: "Livrable",
    letters: [
      { letter: "S", name: "Soul", gloss: "L'\u00e2me", verb: "Trouver l'\u00e2me." },
      { letter: "T", name: "Territory", gloss: "Le territoire", verb: "Cartographier le territoire." },
      { letter: "R", name: "Reframe", gloss: "Le recadrage", verb: "Recadrer le champ." },
      { letter: "A", name: "Architecture", gloss: "L'architecture", verb: "B\u00e2tir l'architecture." },
      { letter: "W", name: "Weaponize", gloss: "L'incarnation", verb: "Incarner l'univers." },
    ],
    stages: [
      { description: "Avant le langage, avant la stratégie — quelle est la raison irréductible d'exister de cette maison ? Pas le pitch. La conviction. La croyance déraisonnable que le fondateur a sur le monde.", delivers: ["Raison d'être, positionnement, valeurs, personnalité, ton de voix", "Le récit fondateur, réécrit en deux cent cinquante mots", "L'ennemi nommé — ce que cette maison refuse d'accepter", "Les piliers et l'archétype du fondateur"], output: "Pièce 01 · La plateforme. La constitution de la maison, dont découle toute autre décision." },
      { description: "Une catégorie est un champ de bataille de la perception. Ce que la maison dit aujourd'hui, ce que le marché en retient, et l'écart entre les deux — compté, pas supposé.", delivers: ["Vos supports dépouillés un par un, les occurrences comptées", "Votre phrase actuelle, autopsiée mot par mot", "Les contradictions entre vos propres pages", "Quatre segments d'audience, un langage pour chacun"], output: "Pièce 02 · Le diagnostic. Ce que vous dites, ce qu'on en retient, et ce qui manque." },
      { description: "La plupart des marques se battent dans le cadre posé par la catégorie. Celles dont on se souvient réécrivent le cadre lui-même. On ne positionne pas la maison contre ses concurrents — on montre le terrain qu'ils laissent libre.", delivers: ["Trois à cinq concurrents, leur phrase exacte citée", "Une fiche par concurrent, disséquée", "Deux axes qui révèlent ce que les axes de catégorie masquent", "Le terrain que personne n'occupe, et la preuve qu'il est libre"], output: "Pièce 03 · La carte. Le champ, et la place que vous êtes seul à pouvoir tenir." },
      { description: "Une fois l'âme trouvée et le champ recadré, on tranche. Chaque décision porte sa formulation exacte, l'endroit où elle s'applique, ce qu'elle coûte et ce qu'elle débloque.", delivers: ["Trois à cinq mouvements, dans l'ordre d'exécution", "Ce que chacun fait gagner, et ce qu'il fait perdre", "Les quatre-vingt-dix premiers jours, dans l'ordre", "Le brief remis à votre designer"], output: "Pièce 04 · Les décisions. Ce qu'il faut faire, dans quel ordre, et pourquoi." },
      { description: "Un récit sans exécution est une théorie. La dernière étape le met entre les mains de ceux qui parleront pour vous le jour J — vos équipes, et les outils qu'elles utilisent. Ensuite commence la mise en scène.", delivers: ["Sept playbooks par département et un guide de cohérence", "Le lexique : les mots à employer, ceux à retirer, et pourquoi", "Les textes réécrits, prêts à coller", "Un bloc à coller dans votre outil IA pour qu'il écrive dans votre voix"], output: "Pièces 05 et 06 · Les playbooks et le langage. L'univers rendu opérationnel." },
    ],
    consH2: "Chaque \u00e9tape m\u00e9rite la suivante.",
    consLead: "L'ordre n'est pas esth\u00e9tique. Saute une \u00e9tape et le reste s'effondre.",
    consequences: [
      "Sans Âme — pas d'ancrage. Chaque décision devient négociable.",
      "Sans Territoire — pas de champ de bataille. Vous vous battez là où vous ne pouvez pas gagner.",
      "Sans Recadrage — pas d'appropriation. Vous sonnez comme les autres, en plus fort.",
      "Sans Architecture — pas d'effet cumulé. Chaque pièce repart de zéro.",
      "Sans Weaponize — pas d'incarnation. Le récit ne rencontre jamais le monde.",
    ],
    bridgeH2: "L'atelier. Et ce qui en sort.",
    bridgeLeadA: "S.T.R.A.W. est le processus — les cinq étapes que nous traversons pour écrire votre récit. ",
    bridgeLeadStrong: "L'Architecture Narrative",
    bridgeLeadB: " est ce que ces étapes produisent : six pièces, réunies en un seul document, livré au plus tard 21 jours après réception de votre questionnaire complet. Vient ensuite la phase 2 : la mise en scène de votre moment, du concept jusqu'à trente jours après le jour J.",
    colMethod: "\u00c9tape de m\u00e9thode",
    colDeliverable: "Pièce livrée",
    bridgeFlow: [
      { stage: "S", deliverable: "La plateforme", note: "Pièce 01 · la constitution de la maison" },
      { stage: "T", deliverable: "Le diagnostic", note: "Pièce 02 · ce que vous dites, compté" },
      { stage: "R", deliverable: "La carte", note: "Pièce 03 · le champ et le terrain libre" },
      { stage: "A", deliverable: "Les décisions", note: "Pièce 04 · les mouvements, dans l'ordre" },
      { stage: "W", deliverable: "Les playbooks", note: "Pièce 05 · ce que vos équipes font au quotidien" },
      { stage: "W", deliverable: "Le langage", note: "Pièce 06 · les mots et les textes, prêts à coller" },
    ],
    bridgeItalic: "La méthode est la discipline par laquelle le récit s'écrit. La mise en scène, c'est la façon dont le monde le découvre.",
    ctaH2a: "Appliquez S.T.R.A.W.",
    ctaH2b: "avant votre moment.",
    ctaLead: "Le récit parcourt les cinq lettres : il trouve l'âme, cartographie le territoire, recadre le champ, tranche les décisions et donne à tous ceux qui parlent pour vous les mêmes mots. Six pièces, livrées au plus tard 21 jours après votre questionnaire. 2 900 €, TVA non applicable (art. 293 B du CGI). Pour le moment complet, mise en scène comprise : à partir de 6 000 €, sur devis.",
    ctaProduct: "L'Architecture Narrative",
    ctaPrice: "2 900 €",
    cta: "Commander le récit · 2 900 € →",
    ctaFoot: "Framework propri\u00e9taire · Strawberry Production",
  },
}

function useReveal() {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

export default function StrawberryMethodPage() {
  const t = useT(T)
  const { lang } = useLang()
  const LETTERS = t.letters
  const PRINCIPLES = t.principles
  const STAGES = t.stages.map((st, i) => ({ ...st, ...t.letters[i] }))
  const CONSEQUENCES = t.consequences.map((text, i) => ({ text, letter: t.letters[i].letter }))
  const BRIDGE_FLOW = t.bridgeFlow.map((b) => ({ ...b, arrow: "\u2192" }))
  const hero = useReveal()
  const why = useReveal()
  const reveal = useReveal()
  const stages = useReveal()
  const dependency = useReveal()
  const bridge = useReveal()
  const cta = useReveal()

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <BackHomeButton />

      <section ref={hero.ref as any} style={{ minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px clamp(1.5rem,4vw,4rem) 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.4, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, width: "100%", textAlign: "center", position: "relative", opacity: hero.visible ? 1 : 0, transform: hero.visible ? "translateY(0)" : "translateY(30px)", transition: "all 1s ease" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 40, textTransform: "uppercase" }}>
            {t.badge}
          </div>
          <h1 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(2.5rem,7vw,5.5rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.005em", marginBottom: 32 }}>
            {t.h1a}<br />
            <span style={{ background: `linear-gradient(135deg, ${COLOR}, #2e4eff)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{t.h1b}</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,1.5vw,1.25rem)", color: "rgba(255,255,255,0.7)", maxWidth: 720, margin: "0 auto", lineHeight: 1.6 }}>
            {t.lead}
          </p>
        </div>
      </section>

      <section ref={reveal.ref as any} style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 65%)`, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", opacity: reveal.visible ? 1 : 0, transform: reveal.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>{t.lAcronym}</div>
            <h2 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.005em" }}>
              {t.fiveH2}
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "clamp(8px, 1.2vw, 16px)", marginBottom: 64 }}>
            {LETTERS.map((l, i) => (
              <div
                key={l.letter}
                style={{
                  textAlign: "center",
                  opacity: reveal.visible ? 1 : 0,
                  transform: reveal.visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.96)",
                  transition: "opacity 700ms cubic-bezier(.22,.68,0,1.2), transform 700ms cubic-bezier(.22,.68,0,1.2)",
                  transitionDelay: reveal.visible ? `${i * 90}ms` : "0ms",
                }}
              >
                <div style={{ border: `2px solid ${COLOR}`, padding: "clamp(20px, 4vw, 48px) 0", fontFamily: SERIF, fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 700, color: COLOR, lineHeight: 1, marginBottom: 20, background: "rgba(34,86,255,0.06)", boxShadow: `0 20px 60px ${GLOW}` }}>
                  {l.letter}
                </div>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: COLOR, margin: "0 auto 12px" }} />
                <div style={{ fontFamily: SANS, fontSize: "clamp(10px, 1.3vw, 13px)", color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
                  {l.name}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "clamp(8px, 1.5vw, 20px)", marginBottom: 56 }}>
            {LETTERS.map((l, i) => (
              <div key={l.letter} style={{ display: "flex", alignItems: "center", gap: "clamp(8px, 1.5vw, 20px)" }}>
                <div style={{ fontFamily: SANS, fontSize: "clamp(11px, 1.3vw, 13px)", color: "rgba(255,255,255,0.75)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                  {l.verb}
                </div>
                {i < LETTERS.length - 1 && (
                  <div style={{ color: COLOR, fontSize: 14, fontFamily: SANS }}>—</div>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
            <p style={{ fontFamily: SERIF, fontSize: "clamp(1.1rem, 1.7vw, 1.4rem)",  color: "rgba(255,255,255,0.8)", lineHeight: 1.55, letterSpacing: "-0.01em" }}>
              {t.fiveItalic}
            </p>
          </div>
        </div>
      </section>

      <section ref={why.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", opacity: why.visible ? 1 : 0, transform: why.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>{t.lFramework}</div>
            <h2 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.005em", marginBottom: 24, lineHeight: 1.15 }}>
              {t.whyH2a}<br />{t.whyH2b}
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(1rem, 1.3vw, 1.1rem)", color: "rgba(255,255,255,0.65)", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
              {t.whyLead}
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {PRINCIPLES.map((p, i) => (
              <div key={i} style={{ padding: "36px 28px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ fontFamily: SERIF, fontSize: "2rem", color: COLOR, fontWeight: 700, lineHeight: 1, marginBottom: 24 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "1.35rem", fontWeight: 600, marginBottom: 16, letterSpacing: "-0.005em" }}>{p.title}</h3>
                <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={stages.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", opacity: stages.visible ? 1 : 0, transform: stages.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>

          <div style={{ textAlign: "center", marginBottom: 96 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>{t.lStages}</div>
            <h2 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.005em" }}>
              {t.stagesH2}
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
            {STAGES.map((s) => (
              <article key={s.letter} style={{ position: "relative", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", padding: "clamp(2rem, 4vw, 3.5rem)", overflow: "hidden" }}>

                <div style={{ position: "absolute", bottom: -40, right: -20, fontFamily: SERIF, fontSize: "clamp(8rem, 18vw, 14rem)", fontWeight: 700, color: "rgba(34,86,255,0.05)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>
                  {s.letter}
                </div>

                <div style={{ position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 24, marginBottom: 16, flexWrap: "wrap" }}>
                    <div style={{ fontFamily: SERIF, fontSize: "clamp(3rem, 6vw, 4.5rem)", color: COLOR, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.04em" }}>
                      {s.letter}.
                    </div>
                    <div style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>
                      {s.name}.
                    </div>
                  </div>

                  <div style={{ fontFamily: SERIF, fontSize: "clamp(1.15rem, 1.8vw, 1.5rem)",  color: COLOR, marginBottom: 32, letterSpacing: "-0.01em" }}>
                    {s.verb}
                  </div>

                  <p style={{ fontFamily: SANS, fontSize: "clamp(0.98rem, 1.3vw, 1.1rem)", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 40, maxWidth: 720 }}>
                    {s.description}
                  </p>

                  <div style={{ marginBottom: 32 }}>
                    <div style={{ fontSize: 10, letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", marginBottom: 20, textTransform: "uppercase", fontFamily: SANS }}>
                      {t.craft}
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
                      {s.delivers.map((d, j) => (
                        <li key={j} style={{ fontFamily: SANS, fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.55, paddingLeft: 24, position: "relative" }}>
                          <span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ borderLeft: `2px solid ${COLOR}`, padding: "20px 24px", background: "rgba(34,86,255,0.04)", maxWidth: 720 }}>
                    <div style={{ fontSize: 10, letterSpacing: "0.25em", color: COLOR, marginBottom: 10, textTransform: "uppercase", fontFamily: SANS }}>
                      {t.outputLabel}
                    </div>
                    <p style={{ fontFamily: SERIF, fontSize: "clamp(1rem, 1.4vw, 1.15rem)",  color: "rgba(255,255,255,0.9)", lineHeight: 1.55, letterSpacing: "-0.01em" }}>
                      {s.output}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section ref={dependency.ref as any} style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", opacity: dependency.visible ? 1 : 0, transform: dependency.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>{t.lWorks}</div>
            <h2 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.005em", marginBottom: 24, lineHeight: 1.15 }}>
              {t.consH2}
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "1rem", color: "rgba(255,255,255,0.6)", maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
              {t.consLead}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {CONSEQUENCES.map((c) => (
              <div key={c.letter} style={{ display: "flex", alignItems: "center", gap: 24, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ flexShrink: 0, width: 56, height: 56, border: `2px solid ${COLOR}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: "1.6rem", fontWeight: 700, color: COLOR, background: "rgba(34,86,255,0.06)" }}>
                  {c.letter}
                </div>
                <p style={{ fontFamily: SERIF, fontSize: "clamp(1rem, 1.4vw, 1.2rem)", color: "rgba(255,255,255,0.85)", lineHeight: 1.5,  letterSpacing: "-0.01em" }}>
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={bridge.ref as any} style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 65%)`, opacity: 0.18, pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", opacity: bridge.visible ? 1 : 0, transform: bridge.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>

          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>{t.kickerArtifact}</div>
            <h2 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.005em", marginBottom: 28, lineHeight: 1.15 }}>
              {t.bridgeH2}
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(1rem,1.3vw,1.1rem)", color: "rgba(255,255,255,0.65)", maxWidth: 680, margin: "0 auto", lineHeight: 1.7 }}>
              {t.bridgeLeadA}<strong style={{ color: "#fff" }}>{t.bridgeLeadStrong}</strong>{t.bridgeLeadB}
            </p>
          </div>

          <div style={{ marginBottom: 56, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>

            <div style={{ display: "grid", gridTemplateColumns: "minmax(110px,1fr) auto minmax(220px,1.4fr)", gap: "clamp(12px, 2vw, 24px)", padding: "20px clamp(1rem, 2.5vw, 2rem)", borderBottom: "1px solid rgba(255,255,255,0.1)", alignItems: "center" }}>
              <div style={{ fontSize: 10, letterSpacing: "0.3em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", fontFamily: SANS }}>
                {t.colMethod}
              </div>
              <div style={{ width: 16 }} />
              <div style={{ fontSize: 10, letterSpacing: "0.3em", color: COLOR, textTransform: "uppercase", fontFamily: SANS }}>
                {t.colDeliverable}
              </div>
            </div>

            {BRIDGE_FLOW.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "minmax(110px,1fr) auto minmax(220px,1.4fr)", gap: "clamp(12px, 2vw, 24px)", padding: "clamp(1.25rem,2vw,1.75rem) clamp(1rem, 2.5vw, 2rem)", borderBottom: i < BRIDGE_FLOW.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", alignItems: "center" }}>
                <div style={{ fontFamily: SERIF, fontSize: "clamp(1rem, 1.6vw, 1.25rem)", color: "#fff", fontWeight: 600, letterSpacing: "-0.01em" }}>
                  {row.stage}
                </div>
                <div style={{ color: COLOR, fontSize: "clamp(1rem, 1.4vw, 1.25rem)", fontFamily: SERIF, fontWeight: 400 }}>
                  {row.arrow}
                </div>
                <div>
                  <div style={{ fontFamily: SERIF, fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)", color: COLOR, fontWeight: 700, lineHeight: 1.2, marginBottom: 4, letterSpacing: "-0.01em" }}>
                    {row.deliverable}
                  </div>
                  <div style={{ fontFamily: SANS, fontSize: "clamp(0.82rem, 1vw, 0.9rem)", color: "rgba(255,255,255,0.55)",  lineHeight: 1.4 }}>
                    {row.note}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto" }}>
            <p style={{ fontFamily: SERIF, fontSize: "clamp(1.05rem, 1.5vw, 1.3rem)",  color: "rgba(255,255,255,0.8)", lineHeight: 1.55, letterSpacing: "-0.01em" }}>
              {t.bridgeItalic}
            </p>
          </div>
        </div>
      </section>

      <AtlasSection />

      <BookSection lang={lang} />

      <section ref={cta.ref as any} style={{ padding: "140px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", opacity: cta.visible ? 1 : 0, transform: cta.visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>{t.kickerApplied}</div>
          <h2 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.005em", marginBottom: 32 }}>
            {t.ctaH2a}<br />{t.ctaH2b}
          </h2>
          <p style={{ fontFamily: SANS, fontSize: "1.05rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: 48, maxWidth: 600, margin: "0 auto 48px" }}>
            {t.ctaLead}
          </p>

          <div style={{ marginBottom: 32, padding: "24px 32px", border: `1px solid rgba(34,86,255,0.3)`, background: "rgba(34,86,255,0.04)", maxWidth: 520, margin: "0 auto 48px" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 12, textTransform: "uppercase" }}>{t.lCommission}</div>
            <div style={{ fontFamily: SERIF, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, marginBottom: 8, letterSpacing: "-0.02em" }}>
              {t.ctaProduct}
            </div>
            <div style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 3.5vw, 2.75rem)", fontWeight: 700, color: COLOR, letterSpacing: "-0.03em" }}>
              {t.ctaPrice}
            </div>
          </div>

          <Link href={ORDER_URL} target="_blank" style={{ display: "inline-block", background: `linear-gradient(135deg, ${COLOR}, #2e4eff)`, color: "#fff", padding: "20px 52px", borderRadius: 100, fontSize: 16, fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em", fontFamily: SANS, boxShadow: `0 20px 60px ${GLOW}`, marginBottom: 24 }}>
            {t.cta}
          </Link>

          <div style={{ marginTop: 32, fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: SANS }}>
            {t.ctaFoot}
          </div>
        </div>
      </section>

    </main>
  )
}
