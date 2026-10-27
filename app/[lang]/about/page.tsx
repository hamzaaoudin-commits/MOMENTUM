"use client"

import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { useT, useLang } from "@/lib/i18n"
import { AnimatedOrb } from "@/components/strawberry/animated-orb"
import { useScrollReveal } from "@/hooks/use-strawberry"
import Image from "next/image"
import { BackHomeButton } from "@/components/strawberry/back-home-button"
import { AboutSection } from "@/components/strawberry/about-section"
import { BookSection } from "@/components/strawberry/book-section"

const SERIF = "var(--font-serif)"
const SANS = "var(--font-sans)"
const COLOR = "#2256ff"
const GLOW = "rgba(34,86,255,0.35)"

const T = {
  en: {
    badge: "The Studio",
    h1a: "An atelier, not an agency.",
    h1b: "From Paris. By inheritance.",
    lead: "Everyone has become competent. In a market where quality no longer sets anyone apart, what remains is what only you can say. We write it — by hand, one founder — then we stage it for the moments that count.",
    whyKicker: "Why this studio exists",
    whyH2: "This studio came out of something we could no longer ignore.",
    whyP1: "Watching launches, openings and releases go by, the same flaw kept coming back: they were competent, and interchangeable. Different products, different venues, different albums, announced with the same teasers, the same countdowns, the same words. AI did not create that problem — it made it industrial.",
    whyP2: "So the practice had to start from the opposite end: read what a house already says, count what it shares with everyone else, write the story only it can tell — then decide, moment by moment, how the world discovers it. That is this studio.",
    refuseKicker: "The Discipline",
    refuseH2: "What this studio refuses.",
    refuseLead: "A studio is defined by what it does not do. The list below is the structural backbone of the practice.",
    refusals: [
      { title: "We refuse to scale.", body: "No growing team, no associates, no plans for either. Every word delivered has been written here. AI scales infinitely. We do not. Every story is read, mapped and written by hand, and we take on only as many moments as we can be present for, up to the day." },
      { title: "We refuse to work with everyone.", body: "Most inquiries do not become commissions. Some moments come too early, with nothing yet to read. Some dates cannot hold. Some would be better served by another studio. We say so plainly rather than take the work." },
      { title: "We refuse hourly billing.", body: "No scope creep, no hourly rate, no project manager between you and the writing. The story carries a published price and a written scope; the full moment, a written quote before we start. Agency economics optimise billable volume. This studio optimises what survives a decade." },
      { title: "We refuse the vocabulary of the field.", body: "Solutions, synergy, leverage, disrupt, game-changer, “we are proud to announce” — these are the words by which forgettable launches announce themselves. They appear nowhere in the work this studio produces. The first thing we retire from your moment is the language that makes it sound like everyone else's." },
    ],
    inheritKicker: "By Inheritance",
    inheritH2: "A French school of narrative precision.",
    inheritLead: "This studio operates from Paris because the work belongs to a lineage — a culture where what is not said matters as much as what is, where a sentence is rewritten until nothing can be removed, where the editorial register is a form of authorship rather than a marketing tool.",
    inheritance: [
      { name: "Roland Barthes", note: "On the architecture of myth and the precision of signs." },
      { name: "Michel Foucault", note: "On how discourse shapes what can be said — and what becomes invisible." },
      { name: "Bernard Pivot", note: "On the dignity of reading carefully, and writing only what survives the page." },
      { name: "Fr\u00e9d\u00e9ric Beigbeder", note: "On the editorial voice as a weapon, and refusal as a form of authorship." },
    ],
    inheritFoot: "The studio does not invoke these names for decoration. It inherits a discipline — and applies it to the moments that deserve it.",
    bookKicker: "The Book",
    bookTitle: "The Clearest Doctrine",
    bookSub: "Narrative Architecture in the Age of the Machine",
    bookAuthor: "Hamza El Jaouahiry \u00b7 158 pages \u00b7 Strawberry Production, Paris",
    bookEpigraph: "In a market where everyone has access to the same machine, the best product no longer wins. The clearest doctrine does.",
    bookP1: "The doctrine this studio works from is not improvised commission by commission. It is written down, argued at length, and published \u2014 in French and in English.",
    bookP2: "The book sets out why the machine made everyone identical, what the French school of narrative precision inherits, and the five-stage method by which a house is excavated rather than invented. Its final section demonstrates the method on three houses, end to end.",
    bookQuote: "The machine made everyone identical. Start underground.",
    bookNote: "Available in French \u2014 La Doctrine la plus claire \u2014 and in English.",
    founderKicker: "The Founder",
    founderName: "Hamza El Jaouahiry.",
    founderCaption: "The Sorbonne \u00b7 Keynote on brand survival in the age of AI",
    founderP1: "I come from film and music. A director and composer since 2019, I learned that a release is prepared: what you show, what you hold back, the order in which you reveal it. Watching brands, venues and artists announce their moments, I kept seeing the opposite: competent documents, interchangeable announcements, stories erased by the very language meant to carry them.",
    founderP2: "Strawberry Production is the studio I would have hired. A small atelier, working at full attention, writing every word by hand, refusing the vocabulary of the field. The work is editorial in shape because it inherits a French school where editorial writing was never separate from intellectual seriousness.",
    founderP3: "When you commission a story or a moment, you commission the person who will write it. No account manager stands between you and the writing, no junior is substituted after signature, no scope is negotiated downward. The document you receive carries the name of whoever wrote it.",
    founderQuote: "\"I do not build brands. I write what a house declares at the moment that counts — what it is, what it refuses — and I decide how the world discovers it.\"",
    founderSig: "Hamza El Jaouahiry \u00b7 Founder",
    ctaH2: "Now you know who you would be working with.",
    ctaP: "Tell us your moment and its date: we reply within 24 hours with what can hold. The story alone: €2,900, delivered within three weeks. The full moment: from €6,000, on quote.",
    cta: "Tell us about your moment \u2192",
    ctaFoot: "Confidential commission \u00b7 NDA available",
  },
  fr: {
    badge: "Le Studio",
    h1a: "Un atelier, pas une agence.",
    h1b: "Depuis Paris. Par h\u00e9ritage.",
    lead: "Tout le monde est devenu compétent. Dans un marché où la qualité ne distingue plus personne, ce qui reste, c'est ce que vous êtes seul à pouvoir dire. Nous l'écrivons — à la main, un fondateur — puis nous le mettons en scène pour les moments qui comptent.",
    whyKicker: "Pourquoi ce studio existe",
    whyH2: "Ce studio est né d'un constat qu'on ne pouvait plus ignorer.",
    whyP1: "En regardant passer les lancements, les ouvertures et les sorties, un même défaut revenait : ils étaient corrects, et interchangeables. Des produits différents, des lieux différents, des albums différents, annoncés avec les mêmes teasers, les mêmes comptes à rebours, les mêmes mots. L'IA n'a pas créé ce problème — elle l'a rendu industriel.",
    whyP2: "Il fallait donc une pratique qui commence par le contraire : lire ce qu'une maison dit déjà, compter ce qu'elle partage avec tous les autres, écrire le récit qu'elle seule peut raconter — puis décider, moment par moment, comment le monde le découvre. C'est ce studio.",
    refuseKicker: "La Discipline",
    refuseH2: "Ce que ce studio refuse.",
    refuseLead: "Un studio se d\u00e9finit par ce qu'il ne fait pas. La liste ci-dessous est l'ossature structurelle de la pratique.",
    refusals: [
      { title: "Nous refusons de scaler.", body: "Pas d'équipe, pas d'associés, aucun projet d'en avoir. Chaque mot livré est écrit par nous. L'IA scale à l'infini. Nous non. Chaque récit est lu, cartographié et écrit à la main, et nous ne prenons que les moments pour lesquels nous pouvons être présents, jusqu'au jour J." },
      { title: "Nous refusons de travailler avec tout le monde.", body: "La plupart des demandes ne deviennent pas des commandes. Certains moments arrivent trop tôt, sans rien encore à lire. Certaines dates ne peuvent pas tenir. D'autres seraient mieux servis par un autre studio. Nous le disons plutôt que de prendre le travail." },
      { title: "Nous refusons la facturation à l'heure.", body: "Pas de dérive de périmètre, pas de taux horaire, pas de chef de projet entre vous et l'écriture. Le récit porte un prix affiché et un périmètre écrit ; le moment complet, un devis écrit avant de commencer. L'économie des agences optimise le volume facturé. Ce studio optimise ce qui survit une décennie." },
      { title: "Nous refusons le vocabulaire du champ.", body: "Solutions, synergie, levier, disrupter, game-changer, « nous sommes fiers de vous annoncer » — ce sont les mots par lesquels les lancements qu'on oublie s'annoncent. Ils n'apparaissent nulle part dans le travail que produit ce studio. La première chose que nous retirons de votre moment, c'est le langage qui le fait sonner comme celui des autres." },
    ],
    inheritKicker: "Par H\u00e9ritage",
    inheritH2: "Une \u00e9cole fran\u00e7aise de pr\u00e9cision narrative.",
    inheritLead: "Ce studio op\u00e8re depuis Paris parce que le travail appartient \u00e0 une lign\u00e9e — une culture o\u00f9 ce qui n'est pas dit compte autant que ce qui l'est, o\u00f9 une phrase est r\u00e9\u00e9crite jusqu'\u00e0 ce que rien ne puisse en \u00eatre retir\u00e9, o\u00f9 le registre \u00e9ditorial est une forme d'auctorialit\u00e9 plut\u00f4t qu'un outil marketing.",
    inheritance: [
      { name: "Roland Barthes", note: "Sur l'architecture du mythe et la pr\u00e9cision des signes." },
      { name: "Michel Foucault", note: "Sur la fa\u00e7on dont le discours fa\u00e7onne ce qui peut \u00eatre dit — et ce qui devient invisible." },
      { name: "Bernard Pivot", note: "Sur la dignit\u00e9 de lire attentivement, et de n'\u00e9crire que ce qui survit \u00e0 la page." },
      { name: "Fr\u00e9d\u00e9ric Beigbeder", note: "Sur la voix \u00e9ditoriale comme arme, et le refus comme forme d'auctorialit\u00e9." },
    ],
    inheritFoot: "Le studio n'invoque pas ces noms pour décorer. Il hérite d'une discipline — et l'applique aux moments qui la méritent.",
    bookKicker: "Le Livre",
    bookTitle: "La Doctrine la plus claire",
    bookSub: "L'architecture narrative \u00e0 l'\u00e2ge de la machine",
    bookAuthor: "Hamza El Jaouahiry \u00b7 158 pages \u00b7 Strawberry Production, Paris",
    bookEpigraph: "Sur un march\u00e9 o\u00f9 tout le monde a acc\u00e8s \u00e0 la m\u00eame machine, le meilleur produit ne gagne plus. C'est la doctrine la plus claire qui gagne.",
    bookP1: "La doctrine dont ce studio travaille n'est pas improvis\u00e9e commande apr\u00e8s commande. Elle est \u00e9crite, argument\u00e9e sur la longueur, et publi\u00e9e \u2014 en fran\u00e7ais et en anglais.",
    bookP2: "Le livre expose pourquoi la machine a rendu tout le monde identique, ce dont h\u00e9rite l'\u00e9cole fran\u00e7aise de pr\u00e9cision narrative, et la m\u00e9thode en cinq \u00e9tapes par laquelle une maison s'excave au lieu de s'inventer. Sa derni\u00e8re partie d\u00e9montre la m\u00e9thode sur trois maisons, de bout en bout.",
    bookQuote: "La machine a rendu tout le monde identique. Commencez sous terre.",
    bookNote: "Disponible en fran\u00e7ais et en anglais \u2014 The Clearest Doctrine.",
    founderKicker: "Le Fondateur",
    founderName: "Hamza El Jaouahiry.",
    founderCaption: "La Sorbonne \u00b7 Keynote sur la survie des marques \u00e0 l'\u00e8re de l'IA",
    founderP1: "Je viens du cinéma et de la musique. Réalisateur et compositeur depuis 2019, j'ai appris qu'une sortie se prépare : ce qu'on montre, ce qu'on garde, l'ordre dans lequel on révèle. En regardant les marques, les lieux et les artistes annoncer leurs moments, je voyais l'inverse : des documents corrects, des annonces interchangeables, des récits effacés par le langage même qui devait les porter.",
    founderP2: "Strawberry Production est le studio que j'aurais engag\u00e9. Un atelier restreint, \u00e0 pleine attention, \u00e9crivant chaque mot \u00e0 la main, refusant le vocabulaire du champ. Le travail est \u00e9ditorial dans sa forme parce qu'il h\u00e9rite d'une \u00e9cole fran\u00e7aise o\u00f9 l'\u00e9criture \u00e9ditoriale n'a jamais \u00e9t\u00e9 s\u00e9par\u00e9e du s\u00e9rieux intellectuel.",
    founderP3: "Quand vous commandez un récit ou un moment, vous commandez celui qui l'\u00e9crira. Aucun chef de projet ne s'interpose entre vous et l'\u00e9criture, aucun junior n'est substitu\u00e9 apr\u00e8s signature, aucun p\u00e9rim\u00e8tre n'est n\u00e9goci\u00e9 \u00e0 la baisse. Le document que vous recevez porte le nom de celui qui l'a \u00e9crit.",
    founderQuote: "\u00ab Je ne construis pas des marques. J'\u00e9cris ce qu'une maison d\u00e9clare au moment qui compte — ce qu'elle est, ce qu'elle refuse — et je d\u00e9cide comment le monde le d\u00e9couvre. \u00bb",
    founderSig: "Hamza El Jaouahiry \u00b7 Fondateur",
    ctaH2: "Maintenant vous savez avec qui vous travailleriez.",
    ctaP: "Dites-nous votre moment et sa date : nous r\u00e9pondons sous 24 heures avec ce qui peut tenir. Le r\u00e9cit seul : 2 900 €, livr\u00e9 sous trois semaines. Le moment complet : \u00e0 partir de 6 000 €, sur devis.",
    cta: "Parlez-nous de votre moment \u2192",
    ctaFoot: "Commande confidentielle \u00b7 NDA disponible",
  },
}

export default function AboutPage() {
  const t = useT(T)
  const { lang } = useLang()
  const REFUSALS = t.refusals.map((r, i) => ({ ...r, n: `0${i + 1}` }))
  const INHERITANCE = t.inheritance
  const hero = useScrollReveal()
  const why = useScrollReveal()
  const refuse = useScrollReveal()
  const inheritance = useScrollReveal()
  const founder = useScrollReveal()
  const cta = useScrollReveal()

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <NavBar />
      <BackHomeButton />

      <section
        ref={hero[0] as any}
        style={{
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          padding: "140px clamp(1.5rem,4vw,4rem) 80px",
          position: "relative",
          opacity: hero[1] ? 1 : 0,
          transform: hero[1] ? "translateY(0)" : "translateY(30px)",
          transition: "all 1s ease",
        }}
      >
        <AnimatedOrb color="radial-gradient(circle,#2256ff,transparent)" size={600} x="-5%" y="20%" opacity={0.15} />
        <AnimatedOrb color="radial-gradient(circle,#2e4eff,transparent)" size={400} x="70%" y="60%" opacity={0.08} />

        <svg
          aria-hidden
          viewBox="0 0 400 800"
          style={{
            position: "absolute",
            right: "4%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "min(420px, 34vw)",
            height: "min(800px, 78vh)",
            opacity: 0.16,
            pointerEvents: "none",
          }}
        >
          <line x1="200" y1="40" x2="200" y2="760" stroke={COLOR} strokeWidth="1" />
          {[140, 320, 500, 680].map((y, i) => (
            <g key={y}>
              <line x1="150" y1={y} x2="250" y2={y} stroke={COLOR} strokeWidth="1" opacity="0.7" />
              <circle cx="200" cy={y} r={i === 0 ? 7 : 5} fill={i === 0 ? COLOR : "none"} stroke={COLOR} strokeWidth="1.4" />
            </g>
          ))}
        </svg>

        <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(34,86,255,0.12)",
              border: "1px solid rgba(34,86,255,0.35)",
              borderRadius: 100,
              padding: "6px 16px",
              marginBottom: 40,
            }}
          >
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: COLOR, boxShadow: "0 0 8px " + COLOR }} />
            <span style={{ color: COLOR, fontSize: 11, letterSpacing: "0.2em", fontWeight: 600, textTransform: "uppercase" }}>
              {t.badge}
            </span>
          </div>

          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.5rem,6vw,5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: 40,
              maxWidth: 900,
            }}
          >
            {t.h1a}<br />
            <span style={{ background: "linear-gradient(135deg," + COLOR + ",#2e4eff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {t.h1b}
            </span>
          </h1>

          <p
            style={{
              fontFamily: SANS,
              fontSize: "clamp(1.05rem,1.5vw,1.3rem)",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.7,
              maxWidth: 720,
              marginBottom: 0,
            }}
          >
            {t.lead}
          </p>
        </div>
      </section>

      <section
        id="sec-why"
        ref={why[0] as any}
        style={{
          padding: "120px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          opacity: why[1] ? 1 : 0,
          transform: why[1] ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>
            {t.whyKicker}
          </div>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(1.75rem,3.5vw,2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 40,
              lineHeight: 1.2,
            }}
          >
            {t.whyH2}
          </h2>
          <p
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(1.15rem,1.8vw,1.4rem)",
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: "-0.01em",
              color: "rgba(255,255,255,0.85)",
              marginBottom: 28,
            }}
          >
            {t.whyP1}
          </p>
          <p
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(1.15rem,1.8vw,1.4rem)",
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: "-0.01em",
              color: COLOR,
              
              marginTop: 32,
            }}
          >
            {t.whyP2}
          </p>
        </div>
      </section>

      <section
        id="sec-refuse"
        ref={refuse[0] as any}
        style={{
          padding: "140px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "#0d0d0d",
          position: "relative",
          opacity: refuse[1] ? 1 : 0,
          transform: refuse[1] ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center," + GLOW + " 0%,transparent 65%)",
            opacity: 0.15,
            pointerEvents: "none",
          }}
        />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>
              {t.refuseKicker}
            </div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(2rem,4.5vw,3.25rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: 24,
                lineHeight: 1.1,
              }}
            >
              {t.refuseH2}
            </h2>
            <p
              style={{
                fontFamily: SANS,
                fontSize: "clamp(0.98rem,1.4vw,1.15rem)",
                color: "rgba(255,255,255,0.6)",
                maxWidth: 640,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              {t.refuseLead}
            </p>
          </div>

          <div
            className="refuse-grid"
            style={{ display: "grid", gap: 1, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {REFUSALS.map((r) => (
              <div
                key={r.n}
                style={{
                  background: "#0a0a0a",
                  padding: "44px clamp(1.5rem,3vw,2.5rem)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                <div style={{ fontFamily: SERIF, fontSize: "1.6rem", color: COLOR, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" }}>
                  {r.n}.
                </div>
                <h3 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(1.25rem,1.8vw,1.55rem)", fontWeight: 600, letterSpacing: "-0.005em", lineHeight: 1.25, color: "#fff", margin: 0 }}>
                  {r.title}
                </h3>
                <p style={{ fontFamily: SANS, fontSize: "0.96rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.7, margin: 0 }}>
                  {r.body}
                </p>
              </div>
            ))}
          </div>

          <style jsx>{`
            .refuse-grid { grid-template-columns: repeat(1, 1fr); }
            @media (min-width: 720px) { .refuse-grid { grid-template-columns: repeat(2, 1fr); } }
          `}</style>
        </div>
      </section>

      <section
        ref={inheritance[0] as any}
        style={{
          padding: "120px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          opacity: inheritance[1] ? 1 : 0,
          transform: inheritance[1] ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>
              {t.inheritKicker}
            </div>
            <h2 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.005em", marginBottom: 28, lineHeight: 1.15 }}>
              {t.inheritH2}
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "clamp(1rem,1.4vw,1.15rem)", color: "rgba(255,255,255,0.7)", maxWidth: 680, margin: "0 auto", lineHeight: 1.7 }}>
              {t.inheritLead}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {INHERITANCE.map((p, i) => (
              <div key={i} style={{ padding: "32px 24px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", textAlign: "center" }}>
                <div style={{ fontFamily: SERIF, fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: 14, letterSpacing: "-0.01em" }}>
                  {p.name}
                </div>
                <div style={{ width: 24, height: 1, background: COLOR, margin: "0 auto 14px" }} />
                <p style={{ fontFamily: SERIF, fontSize: "0.92rem",  color: "rgba(255,255,255,0.65)", lineHeight: 1.55, margin: 0 }}>
                  {p.note}
                </p>
              </div>
            ))}
          </div>

          <p style={{ fontFamily: SERIF, fontSize: "clamp(1.1rem,1.6vw,1.35rem)",  color: "rgba(255,255,255,0.75)", textAlign: "center", maxWidth: 720, margin: "60px auto 0", lineHeight: 1.6, letterSpacing: "-0.01em" }}>
            {t.inheritFoot}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell-lg">
          <div className="mb-12 text-center">
            <div className="kicker">{t.bookKicker}</div>
          </div>

          <div className="grid items-start gap-10 md:gap-14 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
            <div className="relative mx-auto w-full max-w-[340px]">
              <div className="relative flex aspect-[2/3] flex-col justify-between border border-hair-strong bg-[linear-gradient(160deg,#101010_0%,#0a0a0a_60%)] px-8 py-10 shadow-[0_40px_90px_rgba(0,0,0,0.6)]">
                <span className="bracket-tl" aria-hidden />
                <span className="bracket-br" aria-hidden />

                <div className="text-center font-sans text-[9px] uppercase tracking-[0.3em] text-chalk-40">
                  Strawberry Production · Paris
                </div>

                <div className="text-center">
                  <div className="mb-5 text-brand" aria-hidden>❖</div>
                  <h3 className="mb-4 font-serif text-[clamp(1.5rem,3vw,2rem)] font-bold uppercase leading-[1.1] tracking-[0.02em]">
                    {t.bookTitle}
                  </h3>
                  <p className="m-0 font-serif text-[13px] leading-snug text-chalk-55">{t.bookSub}</p>
                </div>

                <div className="text-center font-sans text-[9px] uppercase tracking-[0.25em] text-chalk-55">
                  Hamza El Jaouahiry
                </div>
              </div>
            </div>

            <div>
              <blockquote className="mb-8 border-l-2 border-brand py-1 pl-6">
                <p className="m-0 font-serif text-[clamp(1.05rem,1.8vw,1.3rem)] leading-snug text-chalk-90">
                  {t.bookEpigraph}
                </p>
              </blockquote>

              <p className="mb-5 font-sans text-[16px] leading-[1.8] text-chalk-65">{t.bookP1}</p>
              <p className="mb-8 font-sans text-[16px] leading-[1.8] text-chalk-65">{t.bookP2}</p>

              <p className="mb-6 font-serif text-[1.05rem] text-chalk-75">{t.bookQuote}</p>

              <div className="border-t border-white/10 pt-6">
                <div className="mb-1.5 font-sans text-[13px] text-chalk-75">{t.bookAuthor}</div>
                <div className="font-sans text-[13px] text-chalk-40">{t.bookNote}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="sec-founder"
        ref={founder[0] as any}
        style={{
          padding: "120px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          background: "#0d0d0d",
          opacity: founder[1] ? 1 : 0,
          transform: founder[1] ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.3em", color: COLOR, marginBottom: 24, textTransform: "uppercase" }}>
              {t.founderKicker}
            </div>
            <h2 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.005em", marginBottom: 16, lineHeight: 1.15 }}>
              {t.founderName}
            </h2>
            <div style={{ width: 32, height: 1, background: COLOR, margin: "0 auto 0" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,6vw,6rem)", alignItems: "start" }} className="founder-grid">
            <div>
              <div style={{ position: "relative" }}>
                <Image
                  src="/founder.jpg"
                  alt="Hamza El Jaouahiry — Strawberry Production"
                  width={900}
                  height={1200}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                  className="block w-full object-cover grayscale [aspect-ratio:3/4] [object-position:center_85%] [filter:grayscale(100%)_contrast(1.05)]"
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(to top,#0d0d0d,transparent)" }} />
              </div>
              <p style={{ fontFamily: SANS, fontSize: 11, color: COLOR, letterSpacing: "0.08em", lineHeight: 1.6, marginTop: 16, marginBottom: 0, textTransform: "uppercase" }}>
               {t.founderCaption}
              </p>
            </div>

            <div style={{ paddingTop: "clamp(1rem,3vw,2rem)" }}>
              <div style={{ fontFamily: SERIF, fontSize: "clamp(1.05rem,1.4vw,1.2rem)", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, letterSpacing: "-0.005em" }}>
                <p className="drop-cap" style={{ marginBottom: 24 }}>
                  {t.founderP1}
                </p>
                <p style={{ marginBottom: 24 }}>
                  {t.founderP2}
                </p>
                <p style={{ marginBottom: 0 }}>
                  {t.founderP3}
                </p>
              </div>

              <div style={{ marginTop: 48, padding: "32px clamp(1.5rem,3vw,2.5rem)", border: "1px solid rgba(34,86,255,0.25)", background: "rgba(34,86,255,0.04)" }}>
                <div style={{ fontFamily: SERIF,  fontSize: "clamp(1.05rem,1.5vw,1.25rem)", color: "#fff", lineHeight: 1.55, letterSpacing: "-0.01em" }}>
                  {t.founderQuote}
                </div>
                <div style={{ marginTop: 20, fontSize: 10, letterSpacing: "0.3em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", fontFamily: SANS }}>
                  {t.founderSig}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .founder-grid { grid-template-columns: 1fr 1fr; }
          @media (max-width: 768px) { .founder-grid { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      <AboutSection lang={lang} />

      <BookSection lang={lang} />

      <section
        ref={cta[0] as any}
        style={{
          padding: "140px clamp(1.5rem,4vw,4rem)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          position: "relative",
          opacity: cta[1] ? 1 : 0,
          transform: cta[1] ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center," + GLOW + " 0%,transparent 60%)", opacity: 0.5, pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <h2 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.005em", marginBottom: 32 }}>
            {t.ctaH2}
          </h2>
          <p style={{ fontFamily: SANS, fontSize: "clamp(1rem,1.4vw,1.15rem)", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, maxWidth: 620, margin: "0 auto 48px" }}>
            {t.ctaP}
          </p>
          <Link
            href="/#contact"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg," + COLOR + ",#2e4eff)",
              color: "#fff", padding: "20px 52px", borderRadius: 100,
              fontSize: 16, fontWeight: 600, textDecoration: "none",
              letterSpacing: "0.04em", fontFamily: SANS,
              boxShadow: "0 20px 60px " + GLOW,
            }}
          >
            {t.cta}
          </Link>
          <div style={{ marginTop: 24, fontSize: 13, color: "rgba(255,255,255,0.45)", letterSpacing: "0.05em", fontFamily: SANS }}>
            {t.ctaFoot}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
