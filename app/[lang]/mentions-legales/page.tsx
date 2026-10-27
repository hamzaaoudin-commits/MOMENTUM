import { LocaleLink as Link } from "@/components/locale-link"
import { BackHomeButton } from "@/components/strawberry/back-home-button"

const SERIF = "var(--font-serif)"
const SANS = "var(--font-sans)"
const COLOR = "#2256ff"
const GLOW = "rgba(34,86,255,0.35)"

const SECTIONS = [
  {
    title: "Éditeur du site",
    body: (
      <>
        <p>Le présent site est édité par :</p>
        <p style={{ marginTop: 12 }}>
          <strong>Hamza El Jaouahiry</strong><br />
          Entrepreneur individuel (micro-entreprise)<br />
          8 place Eugène Thomas<br />
          93160 Noisy-le-Grand<br />
          France
        </p>
        <p style={{ marginTop: 12 }}>
          <strong>SIREN</strong> : 105 253 314<br />
          <strong>SIRET</strong> : 105 253 314 00014<br />
          <strong>Code APE</strong> : 7022Z — Conseil pour les affaires et autres conseils de gestion<br />
          <strong>TVA</strong> : non applicable, article 293 B du Code général des impôts
        </p>
        <p style={{ marginTop: 12 }}>
          <strong>Email</strong> : hamza@gostrawberryprod.com
        </p>
      </>
    ),
  },
  {
    title: "Directeur de la publication",
    body: <p>Hamza El Jaouahiry, en qualité d&apos;entrepreneur individuel.</p>,
  },
  {
    title: "Hébergement",
    body: (
      <>
        <p>Le site est hébergé par :</p>
        <p style={{ marginTop: 12 }}>
          <strong>Vercel Inc.</strong><br />
          440 N Barranca Avenue #4133<br />
          Covina, CA 91723<br />
          États-Unis<br />
          Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>vercel.com</a>
        </p>
      </>
    ),
  },
  {
    title: "Propriété intellectuelle",
    body: (
      <>
        <p>L&apos;ensemble du site — textes, images, graphismes, logo, vidéos, structure, code source et identité visuelle — est la propriété exclusive de Hamza El Jaouahiry (Strawberry Production), sauf mention contraire explicite.</p>
        <p style={{ marginTop: 12 }}>Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, par quelque procédé que ce soit, sans autorisation écrite préalable, est strictement interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.</p>
      </>
    ),
  },
  {
    title: "Crédits",
    body: (
      <>
        <p>Conception, rédaction et direction artistique : Hamza El Jaouahiry — Strawberry Production.</p>
        <p style={{ marginTop: 12 }}>Polices : Bricolage Grotesque, Hanken Grotesk, Instrument Serif et Space Mono (Google Fonts, licence Open Font License).</p>
      </>
    ),
  },
  {
    title: "Données personnelles",
    body: (
      <>
        <p>Les données personnelles collectées via ce site (formulaire de contact, achats Stripe) sont traitées conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi française Informatique et Libertés.</p>
        <p style={{ marginTop: 12 }}>Pour en savoir plus, consultez notre <Link href="/fr/politique-confidentialite" style={{ color: COLOR }}>politique de confidentialité</Link>.</p>
      </>
    ),
  },
  {
    title: "Cookies",
    body: <p>Ce site utilise un nombre minimal de cookies techniques nécessaires à son fonctionnement. Aucun cookie publicitaire ou de tracking marketing tiers n&apos;est déposé sans le consentement préalable de l&apos;utilisateur.</p>,
  },
  {
    title: "Loi applicable et juridiction",
    body: <p>Les présentes mentions légales sont régies par le droit français. En cas de litige, et après tentative de résolution amiable, les tribunaux français de Paris seront seuls compétents.</p>,
  },
]

export default function MentionsLegalesPage() {

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <BackHomeButton />

      <div style={{ position: "fixed", top: 88, right: "clamp(1.5rem,4vw,4rem)", zIndex: 90 }}>
        <Link href="/en/legal-notice" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(10,10,10,0.7)", backdropFilter: "blur(12px)", borderRadius: 100, fontSize: 11, fontFamily: SANS, color: "rgba(255,255,255,0.75)", letterSpacing: "0.15em", textDecoration: "none", textTransform: "uppercase", transition: "all 0.2s" }}>
          <span style={{ color: COLOR }}>FR</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span>EN</span>
        </Link>
      </div>

      <section style={{ padding: "180px clamp(1.5rem,4vw,4rem) 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at top, ${GLOW} 0%, transparent 60%)`, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative", transition: "all 0.8s ease" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>
            Informations légales
          </div>
          <h1 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(2.5rem,6vw,4rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.005em", marginBottom: 24 }}>
            Mentions <span style={{ background: `linear-gradient(135deg, ${COLOR}, #2e4eff)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>légales</span>.
          </h1>
          <p style={{ fontSize: "clamp(0.95rem,1.3vw,1.1rem)", color: "rgba(255,255,255,0.6)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l&apos;Économie Numérique.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px clamp(1.5rem,4vw,4rem) 140px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", transition: "all 0.8s ease" }}>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, border: "1px solid rgba(255,255,255,0.1)", borderBottom: `1px solid ${COLOR}66`, padding: "16px 22px", marginBottom: 48 }}>
            <span style={{ fontFamily: SERIF, fontSize: 15, fontWeight: 700, color: "#fff" }}>Mentions légales</span>
            <span style={{ fontFamily: SANS, fontSize: 10, letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Rév. 30 mai 2026</span>
          </div>

          {SECTIONS.map((s, i) => (
            <article key={i} style={{ marginBottom: 64, paddingBottom: 64, borderBottom: i < SECTIONS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <div style={{ fontFamily: SERIF, fontSize: "1.4rem", color: COLOR, fontWeight: 700, lineHeight: 1, marginBottom: 12, letterSpacing: "-0.02em" }}>
                {String(i + 1).padStart(2, "0")}.
              </div>
              <h2 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 600, letterSpacing: "-0.005em", marginBottom: 24, lineHeight: 1.2 }}>
                {s.title}
              </h2>
              <div style={{ fontFamily: SANS, fontSize: "1rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.75 }}>
                {s.body}
              </div>
            </article>
          ))}

          <div style={{ marginTop: 80, padding: "32px clamp(1.5rem,3vw,2.5rem)", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)", textAlign: "center" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.25em", color: "rgba(255,255,255,0.5)", marginBottom: 12, textTransform: "uppercase" }}>
              Dernière mise à jour
            </div>
            <p style={{ fontFamily: SERIF, fontSize: "1.05rem", color: "rgba(255,255,255,0.85)",  margin: 0 }}>
              30 mai 2026
            </p>
          </div>

          <div style={{ marginTop: 48, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/fr/cgv" style={{ color: COLOR, fontSize: 13, fontFamily: SANS, letterSpacing: "0.05em", textDecoration: "none", borderBottom: `1px solid ${COLOR}`, paddingBottom: 2 }}>
              Conditions générales de vente
            </Link>
            <Link href="/fr/politique-confidentialite" style={{ color: COLOR, fontSize: 13, fontFamily: SANS, letterSpacing: "0.05em", textDecoration: "none", borderBottom: `1px solid ${COLOR}`, paddingBottom: 2 }}>
              Politique de confidentialité
            </Link>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontFamily: SANS, letterSpacing: "0.05em", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2 }}>
              Retour à l&apos;accueil
            </Link>
          </div>

        </div>
      </section>

    </main>
  )
}
