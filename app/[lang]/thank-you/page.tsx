"use client"

import { useEffect, useRef, useState } from "react"
import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"
import { BackHomeButton } from "@/components/strawberry/back-home-button"

const SERIF = "var(--font-serif)"
const SANS = "var(--font-sans)"
const COLOR = "#2256ff"
const GLOW = "rgba(34,86,255,0.35)"

function useReveal() {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.05 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

const T = {
  en: {
    badge: "Purchase confirmed",
    h1a: "Your story is",
    h1b: "on its way.",
    congrats: "Your story (The Narrative Architecture) is ordered.",
    lead: "We have received your payment. Your confirmation email and invoice are on their way. Then comes the onboarding questionnaire: that is where everything begins.",
    stepsKicker: "What happens now",
    stepsH2: "Three steps. Then the work.",
    comingKicker: "What you ordered",
    comingH2: "The six pieces being written.",
    noteKicker: "A note",
    noteP1: "“Most founders arrive with fragments. A sentence they've used a hundred times. A pitch that almost works. A story they haven't found the words for yet.",
    noteP2: "What you ordered is the thing they were circling. You will recognise it the moment you read it.”",
    noteSig: "Hamza · MOMENTUM · Paris",
    waitH2: "While you wait —",
    waitP: "Read the method, or one of the two published samples. The more clearly you see what is being built, the more precise your answers to the questionnaire will be.",
    waitCta1: "Read the method →",
    waitCta2: "Read the SILLAGE sample",
    contact: "Questions? Write to me directly",
    steps: [
      { title: "Check your inbox", body: "A confirmation email with your invoice is on its way. If you don't see it within a few minutes, check your spam folder." },
      { title: "Complete the onboarding questionnaire", body: "You will receive a second email with your questionnaire. About an hour, saved as you go: you can leave it and come back. Your answers are the raw material of your story. Tell us which moment you are preparing and when: everything is written with it in view. Take your time; there are no wrong answers, only honest ones." },
      { title: "The work begins", body: "Once your completed questionnaire is received, the writing starts. The document is delivered no later than 21 days later; otherwise you are fully refunded and you keep it. Then two rounds of revisions within thirty days, and a V2 if it still doesn't hit the mark." },
    ],
    coming: [
      "01 · The platform — reason for being, positioning, values, personality, tone of voice: the base of everything your moments will say.",
      "02 · The diagnosis — your materials taken apart one by one: what you say, what people retain, what is missing.",
      "03 · The map — your competitors, their exact sentence quoted, and the ground they leave free.",
      "04 · The decisions — the moves in order, with what each one costs and unlocks, and the first ninety days.",
      "05 · The playbooks — seven department playbooks and a coherence guide, so everyone who speaks for you tells the same story.",
      "06 · The language — the lexicon, the rewritten copy ready to paste, and the block to paste into your AI tool.",
    ],
  },
  fr: {
    badge: "Achat confirmé",
    h1a: "Votre récit",
    h1b: "est commandé.",
    congrats: "Votre récit (L'Architecture Narrative) est commandé.",
    lead: "Nous avons bien reçu votre paiement. Votre email de confirmation et votre facture sont en route. Viendra ensuite le questionnaire d'onboarding : c'est là que tout commence.",
    stepsKicker: "Ce qui se passe maintenant",
    stepsH2: "Trois étapes. Puis le travail.",
    comingKicker: "Ce que vous avez commandé",
    comingH2: "Les six pièces qui s'écrivent.",
    noteKicker: "Un mot",
    noteP1: "« La plupart des fondateurs arrivent avec des fragments. Une phrase utilisée cent fois. Un pitch qui fonctionne presque. Une histoire dont ils n'ont pas encore trouvé les mots.",
    noteP2: "Ce que vous avez commandé, c'est la chose autour de laquelle ils tournaient. Vous la reconnaîtrez à l'instant où vous la lirez. »",
    noteSig: "Hamza · MOMENTUM · Paris",
    waitH2: "En attendant —",
    waitP: "Lisez la méthode, ou l'un des deux exemples publiés. Plus vous voyez clairement ce qui se construit, plus vos réponses au questionnaire seront précises.",
    waitCta1: "Lire la méthode →",
    waitCta2: "Lire l'exemple SILLAGE",
    contact: "Des questions ? Écrivez-moi directement",
    steps: [
      { title: "Vérifiez votre boîte mail", body: "Un email de confirmation avec votre facture est en route. Si vous ne le voyez pas d'ici quelques minutes, regardez dans vos spams." },
      { title: "Remplissez le questionnaire d'onboarding", body: "Vous allez recevoir un deuxième email avec votre questionnaire. Environ une heure, enregistré au fil de l'eau : vous pouvez le quitter et le reprendre. Vos réponses sont la matière première de votre récit. Dites-nous quel moment vous préparez et à quelle date : tout est écrit en le gardant en vue. Prenez votre temps ; il n'y a pas de mauvaises réponses, seulement des réponses honnêtes." },
      { title: "Le travail commence", body: "Dès réception de votre questionnaire complet, l'écriture commence. Le document est livré au plus tard 21 jours après ; sinon vous êtes remboursé intégralement et il vous reste. Puis deux tours de révision dans les trente jours, et une V2 s'il ne tape toujours pas juste." },
    ],
    coming: [
      "01 · La plateforme — raison d'être, positionnement, valeurs, personnalité, ton de voix : la base de tout ce que vos moments diront.",
      "02 · Le diagnostic — vos supports dépouillés un par un : ce que vous dites, ce qu'on en retient, ce qui manque.",
      "03 · La carte — vos concurrents, leur phrase exacte citée, et le terrain qu'ils laissent libre.",
      "04 · Les décisions — les mouvements dans l'ordre, avec ce que chacun coûte et débloque, et les quatre-vingt-dix premiers jours.",
      "05 · Les playbooks — sept playbooks par département et un guide de cohérence, pour que tous ceux qui parlent pour vous racontent la même histoire.",
      "06 · Le langage — le lexique, les textes réécrits prêts à coller, et le bloc à coller dans votre outil IA.",
    ],
  },
}

export default function ThankYouPage() {
  const t = useT(T)
  const NEXT_STEPS = t.steps.map((st, i) => ({ ...st, n: `0${i + 1}` }))
  const WHAT_IS_COMING = t.coming
  const hero = useReveal()
  const steps = useReveal()
  const coming = useReveal()
  const manifesto = useReveal()
  const cta = useReveal()

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <BackHomeButton />

      <section
        ref={hero.ref as any}
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px clamp(1.5rem,4vw,4rem) 80px",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.45, pointerEvents: "none" }} />

        <div style={{
          maxWidth: 900,
          width: "100%",
          textAlign: "center",
          position: "relative",
          opacity: hero.visible ? 1 : 0,
          transform: hero.visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s ease",
        }}>

          <div style={{
            display: "inline-block",
            padding: "8px 20px",
            border: `1px solid ${COLOR}`,
            borderRadius: 100,
            fontSize: 11,
            letterSpacing: "0.2em",
            color: COLOR,
            marginBottom: 48,
            textTransform: "uppercase",
            fontFamily: SANS,
          }}>
            {t.badge}
          </div>

          <h1 style={{ textTransform: "uppercase", fontFamily: SERIF,
            fontSize: "clamp(2.5rem,6vw,5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.005em",
            marginBottom: 16,
          }}>
            {t.h1a}
          </h1>
          <h1 style={{ textTransform: "uppercase", fontFamily: SERIF,
            fontSize: "clamp(2.5rem,6vw,5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.005em",
            marginBottom: 40,
            background: `linear-gradient(135deg, ${COLOR}, #2e4eff)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            
          }}>
            {t.h1b}
          </h1>

          <p style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.1rem,1.8vw,1.4rem)",
            
            color: "rgba(255,255,255,0.72)",
            maxWidth: 680,
            margin: "0 auto 24px",
            lineHeight: 1.6,
          }}>
            {t.congrats}
          </p>

          <p style={{
            fontFamily: SANS,
            fontSize: "clamp(0.95rem,1.3vw,1.05rem)",
            color: "rgba(255,255,255,0.55)",
            maxWidth: 580,
            margin: "0 auto 56px",
            lineHeight: 1.7,
          }}>
            {t.lead}
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 0 }}>
            <div style={{ width: 60, height: 1, background: "rgba(255,255,255,0.15)" }} />
            <span style={{ color: COLOR, fontSize: 18 }}>✦</span>
            <div style={{ width: 60, height: 1, background: "rgba(255,255,255,0.15)" }} />
          </div>
        </div>
      </section>

      <section
        ref={steps.ref as any}
        style={{
          padding: "120px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "#0d0d0d",
        }}
      >
        <div style={{
          maxWidth: 1100,
          margin: "0 auto",
          opacity: steps.visible ? 1 : 0,
          transform: steps.visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase", fontFamily: SANS }}>
              {t.stepsKicker}
            </div>
            <h2 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.005em", lineHeight: 1.15 }}>
              {t.stepsH2}
            </h2>
          </div>

          <div style={{ display: "grid", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)" }}>
            {NEXT_STEPS.map((s) => (
              <div key={s.n} style={{
                background: "#0a0a0a",
                padding: "48px clamp(1.5rem,3vw,3rem)",
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "clamp(1.5rem,4vw,4rem)",
                alignItems: "start",
              }}>
                <div style={{ fontFamily: SERIF, fontSize: "clamp(1.75rem,3vw,2.5rem)", color: COLOR, fontWeight: 700, lineHeight: 1, minWidth: 70 }}>
                  {s.n}
                </div>
                <div>
                  <h3 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(1.25rem,2vw,1.6rem)", fontWeight: 600, marginBottom: 16, letterSpacing: "-0.005em" }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "clamp(0.95rem,1.2vw,1.05rem)", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={coming.ref as any}
        style={{ padding: "120px clamp(1.5rem,4vw,4rem)", borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div style={{
          maxWidth: 900,
          margin: "0 auto",
          opacity: coming.visible ? 1 : 0,
          transform: coming.visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase", fontFamily: SANS }}>
              {t.comingKicker}
            </div>
            <h2 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.005em", lineHeight: 1.15 }}>
              {t.comingH2}
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid rgba(255,255,255,0.07)" }}>
            {WHAT_IS_COMING.map((item, i) => (
              <div key={i} style={{
                padding: "28px 32px",
                borderBottom: i < WHAT_IS_COMING.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                display: "flex",
                gap: 20,
                alignItems: "flex-start",
                background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent",
              }}>
                <span style={{ color: COLOR, fontSize: 16, lineHeight: 1.6, flexShrink: 0 }}>✦</span>
                <p style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(0.95rem,1.3vw,1.1rem)",
                  
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={manifesto.ref as any}
        style={{
          padding: "140px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "#0d0d0d",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 65%)`, opacity: 0.18, pointerEvents: "none" }} />
        <div style={{
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          opacity: manifesto.visible ? 1 : 0,
          transform: manifesto.visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase", fontFamily: SANS }}>
            {t.noteKicker}
          </div>

          <p style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.3rem,2.2vw,1.75rem)",
            
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.55,
            letterSpacing: "-0.01em",
            marginBottom: 32,
          }}>
            {t.noteP1}
          </p>
          <p style={{
            fontFamily: SERIF,
            fontSize: "clamp(1.3rem,2.2vw,1.75rem)",
            
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.55,
            letterSpacing: "-0.01em",
            marginBottom: 48,
          }}>
            {t.noteP2}
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20 }}>
            <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.2)" }} />
            <p style={{ fontFamily: SANS, fontSize: 12, color: "rgba(255,255,255,0.45)", letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>
              {t.noteSig}
            </p>
            <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.2)" }} />
          </div>
        </div>
      </section>

      <section
        ref={cta.ref as any}
        style={{
          padding: "120px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at center, ${GLOW} 0%, transparent 60%)`, opacity: 0.35, pointerEvents: "none" }} />
        <div style={{
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          opacity: cta.visible ? 1 : 0,
          transform: cta.visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}>
          <h2 style={{ textTransform: "uppercase", fontFamily: SERIF,
            fontSize: "clamp(2rem,4.5vw,3.25rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.005em",
            marginBottom: 24,
          }}>
            {t.waitH2}
          </h2>
          <p style={{
            fontFamily: SERIF,
            fontSize: "clamp(1rem,1.5vw,1.2rem)",
            
            color: "rgba(255,255,255,0.65)",
            lineHeight: 1.6,
            maxWidth: 560,
            margin: "0 auto 48px",
          }}>
            {t.waitP}
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/strawberry-method" style={{
              display: "inline-block",
              background: `linear-gradient(135deg, ${COLOR}, #2e4eff)`,
              color: "#fff",
              padding: "16px 36px",
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "0.04em",
              boxShadow: `0 20px 60px ${GLOW}`,
            }}>
              {t.waitCta1}
            </Link>

            <Link href="/documents/sillage" style={{
              display: "inline-block",
              background: "transparent",
              color: "rgba(255,255,255,0.75)",
              padding: "16px 36px",
              borderRadius: 100,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.04em",
              border: "1px solid rgba(255,255,255,0.2)",
            }}>
              {t.waitCta2}
            </Link>
          </div>

          <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <p style={{ fontFamily: SANS, fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 8px" }}>
              {t.contact}
            </p>
            <a href="mailto:contact@momentum.studio" style={{ fontFamily: SERIF, fontSize: "1rem",  color: "rgba(255,255,255,0.55)", textDecoration: "none" }}>
              contact@momentum.studio
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
