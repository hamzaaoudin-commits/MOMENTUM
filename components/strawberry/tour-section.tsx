"use client"

import { STRIPE_LINKS } from "@/lib/config"
import { useEffect, useRef } from "react"
import { LocaleLink as Link } from "@/components/locale-link"
import { useT } from "@/lib/i18n"
import { ViewTracker } from "@/components/strawberry/view-tracker"
import { LettersReveal } from "@/components/strawberry/letters-reveal"
import { PlaybookIcon, PLAYBOOK_KEYS } from "@/components/strawberry/playbook-icons"

const T = {
  fr: {
    terrainsLabel: "La même méthode, quel que soit votre moment",
    terrains: [
      { n: "LANCEMENTS", d: "Marques & produits", href: "/offre" },
      { n: "OUVERTURES", d: "Lieux", href: "/offre" },
      { n: "SORTIES", d: "Artistes & créateurs", href: "/offre" },
      { n: "LEVÉES DE FONDS", d: "Fondateurs", href: "/offre" },
    ],
    lead: "Avant de mettre un moment en scène, il faut savoir ce qu'il raconte.\nLa phase 1 écrit ce récit en six pièces : la plateforme, puis les décisions, le langage et les principes que vous et vos équipes utiliserez le jour J et après.",
    kicker: "Phase 1 · Le récit · La méthode S.T.R.A.W.",
    outro: "Le récit est écrit. Reste à le mettre en scène.",
    proprietary: "Ce n'est pas une méthode empruntée. C'est celle que MOMENTUM a développée, et qu'aucun autre studio n'applique.",
    closing: "Chaque récit traverse les cinq étapes, dans cet ordre, sans en sauter une.",
    stepLabel: (n: number) => `Étape ${n} sur 5`,
    producesLabel: "Ce que cette étape produit",
    pieceWord: "Pièce",
    methodCta: "Voir la méthode en détail",
    stages: [
      { letter: "S", name: "SOUL", verb: "Trouver l'âme", pieces: [0] },
      { letter: "T", name: "TERRITORY", verb: "Cartographier le territoire", pieces: [1] },
      { letter: "R", name: "REFRAME", verb: "Recadrer le champ", pieces: [2] },
      { letter: "A", name: "ARCHITECTURE", verb: "Bâtir l'architecture", pieces: [3] },
      { letter: "W", name: "WEAPONIZE", verb: "Incarner l'univers", pieces: [4, 5] },
    ],
    cta: "Commander le récit · 2 900 € →",
        scenes: [
      {
        k: "S · Soul — Pièce 01",
        t: "LA PLATEFORME",
        line: "Ce que vous êtes, avant ce que votre moment annonce : raison d'être, positionnement, valeurs, personnalité, ton de voix.",
        points: [
          "La base dont part chaque prise de parole du moment, de la première annonce au mot de la fin",
          "Écrite à partir de ce que vous publiez déjà, pas d'un atelier où vous parlez pendant trois heures",
          "Trois partis pris écrits en refus — ce que votre moment ne dira jamais",
          "Votre réponse, par écrit, quand on vous demandera le jour J ce que vous faites",
          "Le récit fondateur, en deux cent cinquante mots — celui que la presse reprendra",
        ],
        href: "/offre",
      },
      {
        k: "T · Territory — Pièce 02",
        t: "LE DIAGNOSTIC",
        line: "Ce que le public retient de vous aujourd'hui, avant que le moment ne commence : vos supports lus un par un, les écarts relevés.",
        points: [
          "Site, plaquette, discours, emballage, fiche Google, avis, sorties précédentes — selon votre moment",
          "Les contradictions entre vos propres pages, celles qu'un journaliste verrait avant vous",
          "Ce que vous trouvez évident et qui n'apparaît nulle part dans ce que vous publiez",
          "Quatre publics, un langage pour chacun — sans jamais changer de position",
        ],
        href: "/offre",
      },
      {
        k: "R · Reframe — Pièce 03",
        t: "LA CARTE",
        line: "Ce que les autres annoncent déjà : 3 à 5 concurrents, leur phrase exacte citée, et le terrain qu'ils laissent libre.",
        points: [
          "Le mot que trois d'entre eux revendiquent déjà, et que votre moment ne doit pas employer",
          "Celui que vous êtes seul à pouvoir tenir, avec la preuve que personne ne l'occupe",
          "Ce qu'ils ne pourraient pas copier, même s'ils voyaient votre lancement venir",
          "Une fiche par concurrent, disséquée une par une",
          "Deux axes qui révèlent ce que les axes de votre catégorie cachent",
        ],
        href: "/offre",
      },
      {
        k: "A · Architecture — Pièce 04",
        t: "LES DÉCISIONS",
        line: "Ce que le moment affirme, tranché : 3 à 5 mouvements ordonnés, la formulation exacte, où la mettre, ce qu'elle coûte.",
        points: [
          "Chacun chiffré : ce qu'il fait gagner, et ce qu'il vous fait perdre — nommé, pas caché",
          "Dans l'ordre, avec ce qu'il faut faire avant de montrer quoi que ce soit",
          "Le premier mouvement — celui qui se fait dès demain et qui rend les suivants possibles",
          "Les quatre-vingt-dix premiers jours, dans l'ordre : avant, pendant et après le jour J",
          "Le brief remis à votre designer ou à votre réalisateur — écrit pour quelqu'un qui réfléchit",
        ],
        href: "/offre",
      },
      {
        k: "W · Weaponize — Pièce 05",
        t: "LES PLAYBOOKS",
        line: "Pour que tous ceux qui parlent pour vous racontent la même histoire, le jour J et après : marketing, contenu, réseaux, vente, support, RH, tarifaire, cohérence.",
        points: [
          "Marketing — chaque idée de campagne passe le test du récit avant de sortir",
          "Contenu — toute personne qui écrit pour vous sonne comme vous",
          "Réseaux — le ton par plateforme, le rythme, comment répondre sans se contredire",
          "Vente — les questions que le moment va faire naître, et les réponses avec vos mots",
          "Support — un client en colère lit la même maison qu'un client conquis",
          "RH — chaque nouvel arrivant comprend ce que vous avez annoncé, dès sa première semaine",
          "Tarifaire — le prix comme doctrine, avec une raison à donner le jour où on vous le demande",
          "Cohérence — le guide qui vous permet de trancher seul, sans nous rappeler",
        ],
        href: "/offre",
      },
      {
        k: "W · Weaponize — Pièce 06",
        t: "LE LANGAGE",
        line: "Les mots de votre moment : le lexique et les textes réécrits, prêts à coller.",
        points: [
          "Les mots à employer, ceux à cesser d'employer, et pourquoi",
          "Utilisables tels quels par vos équipes comme par votre outil IA : c'est écrit pour ça",
          "Un bloc à coller dans n'importe quel modèle de langage pour qu'il écrive dans votre voix — position, refus, mots interdits",
          "Quatre formats de biographie, pour la presse, les partenaires et la page de lancement",
          "La pièce signature — un texte publiable en l'état, qui ne ressemble à personne",
        ],
        href: "/offre",
      },
    ],
  },
  en: {
    terrainsLabel: "The same method, whatever your moment",
    terrains: [
      { n: "LAUNCHES", d: "Brands & products", href: "/offre" },
      { n: "OPENINGS", d: "Venues", href: "/offre" },
      { n: "RELEASES", d: "Artists & creators", href: "/offre" },
      { n: "FUNDRAISES", d: "Founders", href: "/offre" },
    ],
    lead: "Before staging a moment, you need to know what it says.\nPhase 1 writes that story in six pieces: the platform, then the decisions, the language and the principles you and your teams will use on the day and after.",
    kicker: "Phase 1 · The story · The S.T.R.A.W. method",
    outro: "The story is written. Now it needs staging.",
    proprietary: "This is not a borrowed framework. It is the one MOMENTUM developed, and no other studio applies it.",
    closing: "Every story moves through the five stages, in this order, none skipped.",
    stepLabel: (n: number) => `Stage ${n} of 5`,
    producesLabel: "What this stage produces",
    pieceWord: "Piece",
    methodCta: "See the method in detail",
    stages: [
      { letter: "S", name: "SOUL", verb: "Find the soul", pieces: [0] },
      { letter: "T", name: "TERRITORY", verb: "Map the territory", pieces: [1] },
      { letter: "R", name: "REFRAME", verb: "Reframe the field", pieces: [2] },
      { letter: "A", name: "ARCHITECTURE", verb: "Build the architecture", pieces: [3] },
      { letter: "W", name: "WEAPONIZE", verb: "Embody the universe", pieces: [4, 5] },
    ],
    cta: "Order the story · €2,900 →",
        scenes: [
      {
        k: "S · Soul — Piece 01",
        t: "THE PLATFORM",
        line: "What you are, before what your moment announces: purpose, positioning, values, personality, tone of voice.",
        points: [
          "The base every piece of the moment starts from, from the first announcement to the last word",
          "Written from what you already publish, not from a workshop where you talk for three hours",
          "Three convictions written as refusals — what your moment will never say",
          "Your answer, in writing, when people ask on the day what you do",
          "The origin story, in two hundred and fifty words — the one the press will pick up",
        ],
        href: "/offre",
      },
      {
        k: "T · Territory — Piece 02",
        t: "THE DIAGNOSIS",
        line: "What the audience keeps of you today, before the moment begins: your materials read one by one, the gaps recorded.",
        points: [
          "Site, brochure, pitch, packaging, Google listing, reviews, past releases — depending on your moment",
          "The contradictions between your own pages, the ones a journalist would spot before you",
          "What you find obvious and that appears nowhere in what you publish",
          "Four audiences, one language for each — without ever changing position",
        ],
        href: "/offre",
      },
      {
        k: "R · Reframe — Piece 03",
        t: "THE MAP",
        line: "What others already announce: 3 to 5 competitors, their exact sentence quoted, and the ground they leave open.",
        points: [
          "The word three of them already claim, and that your moment must not use",
          "The one only you can hold, with the proof that nobody occupies it",
          "What they could not copy, even if they saw your launch coming",
          "One sheet per competitor, dissected individually",
          "Two axes that reveal what your category's axes hide",
        ],
        href: "/offre",
      },
      {
        k: "A · Architecture — Piece 04",
        t: "THE DECISIONS",
        line: "What the moment stands for, settled: 3 to 5 ordered moves, the exact wording, where to put it, what it costs.",
        points: [
          "Each one measured: what it gains and what it loses you — named, not hidden",
          "In order, with what to do before showing anything",
          "The first move — the one you can make tomorrow, the one that makes the rest possible",
          "The first ninety days, in order: before, during and after the day",
          "The brief handed to your designer or director — written for someone who thinks",
        ],
        href: "/offre",
      },
      {
        k: "W · Weaponize — Piece 05",
        t: "THE PLAYBOOKS",
        line: "So everyone who speaks for you tells the same story, on the day and after: marketing, content, social, sales, support, HR, pricing, coherence.",
        points: [
          "Marketing — every campaign idea passes the story test before it goes out",
          "Content — anyone who writes for you sounds like you",
          "Social — tone by platform, rhythm, how to answer without contradicting yourself",
          "Sales — the questions the moment will raise, and the answers in your own words",
          "Support — an angry customer reads the same house as a won-over one",
          "HR — every new arrival understands what you announced, in their first week",
          "Pricing — price as doctrine, with a reason to give the day someone asks",
          "Coherence — the guide that lets you settle questions alone, without calling us back",
        ],
        href: "/offre",
      },
      {
        k: "W · Weaponize — Piece 06",
        t: "THE LANGUAGE",
        line: "The words of your moment: the lexicon and the rewritten copy, ready to paste.",
        points: [
          "Words to use, words to stop using, and why",
          "Usable as they are by your teams and by your AI tool: that is what they are written for",
          "A block to paste into any language model so it writes in your voice — position, refusals, banned words",
          "Four biography formats, for the press, partners and the launch page",
          "The signature piece — a text publishable as it stands, that resembles nobody",
        ],
        href: "/offre",
      },
    ],
  },
}

export function TourSection() {
  const t = useT(T)
  const pinRef = useRef<HTMLDivElement | null>(null)
  const fillRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const pin = pinRef.current
    if (!pin) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const scenes = Array.from(pin.querySelectorAll<HTMLElement>(".tour-scene"))
    const inners = scenes.map((sc) => sc.querySelector<HTMLElement>(".ts-inner"))
    const backdrops = scenes.map((sc) => sc.querySelector<HTMLElement>(".ts-bg"))
    const fill = fillRef.current
    const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v)

    let mode: "pin" | "flow" = "flow"
    let ticking = false
    let geo = { top: 0, height: 0, vh: 0 }
    let tops: { top: number; h: number }[] = []

    const reset = () => {
      scenes.forEach((sc, i) => {
        sc.style.opacity = ""
        sc.style.transform = ""
        sc.style.zIndex = ""
        sc.style.pointerEvents = ""
        const bg = backdrops[i]
        if (bg) bg.style.transform = ""
      })
    }

    const chooseMode = () => {
      pin.classList.remove("tour-on", "tour-flow")
      reset()
      const vh = window.innerHeight
      const tallest = Math.max(0, ...inners.map((el) => (el ? el.scrollHeight : 0)))
      mode = window.innerWidth >= 900 || tallest <= vh - 72 ? "pin" : "flow"
      pin.classList.add(mode === "pin" ? "tour-on" : "tour-flow")
    }

    const measure = () => {
      const y = window.scrollY
      const r = pin.getBoundingClientRect()
      geo = { top: r.top + y, height: r.height, vh: window.innerHeight }
      tops = scenes.map((sc) => {
        const sr = sc.getBoundingClientRect()
        return { top: sr.top + y, h: sr.height }
      })
    }

    const runPin = () => {
      const span = Math.max(1, geo.height - geo.vh)
      const p = clamp01((window.scrollY - geo.top) / span)
      const f = p * (scenes.length - 1)
      for (let i = 0; i < scenes.length; i++) {
        const d = f - i
        const ad = d < 0 ? -d : d
        const sc = scenes[i]
        const t = Math.max(0, Math.min(1, (0.58 - ad) / 0.16))
        const eased = t * t * (3 - 2 * t)
        sc.style.opacity = String(eased)
        sc.style.transform = `translate3d(0,${-d * 3.5}vh,0) scale(${1 + Math.max(0, 0.03 - ad * 0.06)})`
        sc.style.zIndex = String(20 - Math.round(ad * 10))
        sc.style.pointerEvents = eased < 0.05 ? "none" : "auto"
        const bg = backdrops[i]
        if (bg) bg.style.transform = `scale(${1.04 + d * 0.03})`
      }
      if (fill) fill.style.height = `${p * 100}%`
    }

    const runFlow = () => {
      const vh = geo.vh
      const y = window.scrollY
      for (let i = 0; i < scenes.length; i++) {
        const { top, h } = tops[i]
        const enter = clamp01((y + vh - top) / (vh * 0.55))
        const eased = enter * enter * (3 - 2 * enter)
        const sc = scenes[i]
        sc.style.opacity = String(0.08 + eased * 0.92)
        sc.style.transform = `translate3d(0,${(1 - eased) * 48}px,0) scale(${0.96 + eased * 0.04})`
        const bg = backdrops[i]
        const rel = (y + vh / 2 - (top + h / 2)) / vh
        if (bg) bg.style.transform = `translate3d(0,${rel * -60}px,0) scale(1.06)`
      }
    }

    const run = () => {
      ticking = false
      if (mode === "pin") runPin()
      else runFlow()
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(run)
      }
    }
    const setup = () => {
      chooseMode()
      measure()
      run()
    }
    let rt = 0
    let lastBodyH = 0
    const onBodyResize = () => {
      const h = document.body.scrollHeight
      if (Math.abs(h - lastBodyH) < 2) return
      lastBodyH = h
      onResize()
    }
    const onResize = () => {
      window.clearTimeout(rt)
      rt = window.setTimeout(setup, 150)
    }

    scenes.forEach((sc) => {
      sc.style.willChange = "transform, opacity"
    })

    setup()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)
    window.addEventListener("load", setup)
    document.fonts?.ready.then(setup).catch(() => {})
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(onBodyResize) : null
    ro?.observe(document.body)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("load", setup)
      ro?.disconnect()
      window.clearTimeout(rt)
      pin.classList.remove("tour-on", "tour-flow")
      reset()
    }
  }, [])

  return (
    <section className="border-t border-hair bg-ink-soft">
      <ViewTracker name="tour" />

      <div className="shell pt-6 pb-20 text-center">
        <div className="kicker mb-5">{t.kicker}</div>
        <p className="lede mx-auto max-w-[640px] whitespace-pre-line">{t.lead}</p>

        <div className="mt-12">
          <LettersReveal
            letters={[
              { letter: "S", name: "Soul" },
              { letter: "T", name: "Territory" },
              { letter: "R", name: "Reframe" },
              { letter: "A", name: "Architecture" },
              { letter: "W", name: "Weaponize" },
            ]}
          />
        </div>

        <p className="mx-auto mt-10 max-w-[600px] font-serif text-[clamp(1.05rem,2vw,1.3rem)] leading-[1.55] text-white/85">
          {t.proprietary}
        </p>
        <p className="mx-auto mt-4 max-w-[560px] font-sans text-[14px] leading-relaxed text-chalk-55">{t.closing}</p>

        <div className="mx-auto mt-10 max-w-[880px]">
          <div className="mb-4 text-center font-mono text-[10.5px] uppercase tracking-[0.22em] text-brand">
            {t.terrainsLabel}
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
            {t.terrains.map((x) => (
              <Link
                key={x.n}
                href={x.href}
                className="group bg-ink px-4 py-4 text-center no-underline transition-colors hover:bg-white/[0.03]"
              >
                <div className="font-serif text-[15px] font-bold tracking-[-0.005em] text-brand transition-colors group-hover:text-white">
                  {x.n}
                </div>
                <div className="mt-1 font-sans text-[11.5px] text-chalk-40">{x.d}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div ref={pinRef} className="tour-pin">
        <div className="tour-sticky">
          {t.stages.map((st, i) => (
            <article key={st.letter + i} className={`tour-scene ts-${i + 1}${st.pieces.length > 1 && st.pieces[0] !== 4 ? " ts-dense" : ""}${st.pieces[0] === 4 ? " ts-books-scene" : ""}`}>
              <div className="ts-bg" aria-hidden />
              <div className="ts-inner mx-auto max-w-[1180px]">
                <div className="ts-k">
                  {st.letter} · {t.stepLabel(i + 1)}
                </div>
                <h3 className="ts-t">{st.name}</h3>
                <p className="ts-line">{st.verb}</p>
                <div className="ts-points-label">{t.producesLabel}</div>
                <div className={st.pieces.length > 1 ? "ts-pieces ts-pieces-2" : "ts-pieces"}>
                  {st.pieces.map((pi) => {
                    const pc = t.scenes[pi]
                    return (
                      <div key={pi} className={pi === 5 ? "ts-piece ts-piece-lang" : "ts-piece"}>
                        <div className="ts-piece-k">
                          {t.pieceWord} {String(pi + 1).padStart(2, "0")} · {pc.t}
                        </div>
                        <p className="ts-piece-line">{pc.line}</p>
                        {pi === 4 ? (
                          <ul className="ts-books list-none p-0">
                            {pc.points.map((x, j) => {
                              const [name, ...rest] = x.split(" — ")
                              return (
                                <li key={x} className="ts-book">
                                  <span className="ts-book-num">{String(j + 1).padStart(2, "0")}</span>
                                  <span className="ts-book-ico">
                                    <PlaybookIcon k={PLAYBOOK_KEYS[j]} />
                                  </span>
                                  <span className="ts-book-n">{name}</span>
                                  <p className="ts-book-d">{rest.join(" — ")}</p>
                                </li>
                              )
                            })}
                          </ul>
                        ) : (
                          <ul className="ts-points list-none p-0">
                            {pc.points.map((x) => (
                              <li key={x}>{x}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )
                  })}
                </div>
                <Link href="/strawberry-method" className="ts-link no-underline">
                  {t.methodCta}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
          <div className="tour-progress" aria-hidden>
            <span ref={fillRef} />
          </div>
        </div>
      </div>

      <div className="shell pt-14 pb-10 text-center">
        <p className="accroche mx-auto mb-10 max-w-[620px] text-center">{t.outro}</p>
        <a href={STRIPE_LINKS.architecture} target="_blank" rel="noopener" className="btn-primary">
          {t.cta}
        </a>
      </div>
    </section>
  )
}
