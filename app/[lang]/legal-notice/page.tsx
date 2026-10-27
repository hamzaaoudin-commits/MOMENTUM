import { LocaleLink as Link } from "@/components/locale-link"
import { BackHomeButton } from "@/components/strawberry/back-home-button"

const SERIF = "var(--font-serif)"
const SANS = "var(--font-sans)"
const COLOR = "#2256ff"
const GLOW = "rgba(34,86,255,0.35)"

const SECTIONS = [
  {
    title: "Site Editor",
    body: (
      <>
        <p>This website is published by:</p>
        <p style={{ marginTop: 12 }}>
          <strong>Hamza El Jaouahiry</strong><br />
          Sole proprietor (French micro-entreprise)<br />
          8 place Eugène Thomas<br />
          93160 Noisy-le-Grand<br />
          France
        </p>
        <p style={{ marginTop: 12 }}>
          <strong>SIREN</strong>: 105 253 314<br />
          <strong>SIRET</strong>: 105 253 314 00014<br />
          <strong>Business activity code (APE)</strong>: 7022Z — Business and management consulting<br />
          <strong>VAT</strong>: not applicable, article 293 B of the French General Tax Code
        </p>
        <p style={{ marginTop: 12 }}>
          <strong>Email</strong>: hamza@gostrawberryprod.com
        </p>
      </>
    ),
  },
  {
    title: "Publication Director",
    body: <p>Hamza El Jaouahiry, in his capacity as sole proprietor.</p>,
  },
  {
    title: "Hosting",
    body: (
      <>
        <p>This site is hosted by:</p>
        <p style={{ marginTop: 12 }}>
          <strong>Vercel Inc.</strong><br />
          440 N Barranca Avenue #4133<br />
          Covina, CA 91723<br />
          United States<br />
          Website: <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>vercel.com</a>
        </p>
      </>
    ),
  },
  {
    title: "Intellectual Property",
    body: (
      <>
        <p>The entire site — including texts, images, graphics, logo, videos, structure, source code and visual identity — is the exclusive property of Hamza El Jaouahiry (Strawberry Production), unless explicitly stated otherwise.</p>
        <p style={{ marginTop: 12 }}>Any reproduction, representation, modification, publication or adaptation of all or part of the site&apos;s elements, by any means whatsoever, without prior written authorization, is strictly prohibited and would constitute counterfeiting punishable under articles L.335-2 and following of the French Intellectual Property Code.</p>
      </>
    ),
  },
  {
    title: "Credits",
    body: (
      <>
        <p>Design, copywriting and creative direction: Hamza El Jaouahiry — Strawberry Production.</p>
        <p style={{ marginTop: 12 }}>Typefaces: Bricolage Grotesque, Hanken Grotesk, Instrument Serif and Space Mono (Google Fonts, Open Font License).</p>
      </>
    ),
  },
  {
    title: "Personal Data",
    body: (
      <>
        <p>Personal data collected via this site (contact form, Stripe purchases) is processed in accordance with the General Data Protection Regulation (GDPR) and the French Data Protection Act.</p>
        <p style={{ marginTop: 12 }}>For more information, please consult our <Link href="/en/privacy" style={{ color: COLOR }}>privacy policy</Link>.</p>
      </>
    ),
  },
  {
    title: "Cookies",
    body: <p>This site uses a minimal number of technical cookies necessary for its operation. No advertising or third-party marketing tracking cookies are placed without the user&apos;s prior consent.</p>,
  },
  {
    title: "Applicable Law and Jurisdiction",
    body: <p>These legal notices are governed by French law. In the event of a dispute, and after attempts at amicable resolution, the French courts of Paris will have sole jurisdiction.</p>,
  },
]

export default function LegalNoticePage() {

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <BackHomeButton />

      <div style={{ position: "fixed", top: 88, right: "clamp(1.5rem,4vw,4rem)", zIndex: 90 }}>
        <Link href="/fr/mentions-legales" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(10,10,10,0.7)", backdropFilter: "blur(12px)", borderRadius: 100, fontSize: 11, fontFamily: SANS, color: "rgba(255,255,255,0.75)", letterSpacing: "0.15em", textDecoration: "none", textTransform: "uppercase", transition: "all 0.2s" }}>
          <span>FR</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span style={{ color: COLOR }}>EN</span>
        </Link>
      </div>

      <section style={{ padding: "180px clamp(1.5rem,4vw,4rem) 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at top, ${GLOW} 0%, transparent 60%)`, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative", transition: "all 0.8s ease" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>
            Legal Information
          </div>
          <h1 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(2.5rem,6vw,4rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.005em", marginBottom: 24 }}>
            Legal <span style={{ background: `linear-gradient(135deg, ${COLOR}, #2e4eff)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Notice</span>.
          </h1>
          <p style={{ fontSize: "clamp(0.95rem,1.3vw,1.1rem)", color: "rgba(255,255,255,0.6)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
            In accordance with articles 6-III and 19 of the French Law No. 2004-575 of June 21, 2004 on Trust in the Digital Economy.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px clamp(1.5rem,4vw,4rem) 140px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", transition: "all 0.8s ease" }}>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, border: "1px solid rgba(255,255,255,0.1)", borderBottom: `1px solid ${COLOR}66`, padding: "16px 22px", marginBottom: 32 }}>
            <span style={{ fontFamily: SERIF, fontSize: 15, fontWeight: 700, color: "#fff" }}>Legal Notice</span>
            <span style={{ fontFamily: SANS, fontSize: 10, letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Rev. May 30, 2026</span>
          </div>

          <div style={{ marginBottom: 64, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.02)", borderLeft: `3px solid ${COLOR}` }}>
            <p style={{ fontFamily: SANS, fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0 }}>
              <strong style={{ color: COLOR }}>Note:</strong> This English version is a courtesy translation. The <Link href="/fr/mentions-legales" style={{ color: COLOR, textDecoration: "underline" }}>French version</Link> is the only legally binding version. In case of any discrepancy in interpretation, the French version shall prevail.
            </p>
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
              Last updated
            </div>
            <p style={{ fontFamily: SERIF, fontSize: "1.05rem", color: "rgba(255,255,255,0.85)",  margin: 0 }}>
              May 30, 2026
            </p>
          </div>

          <div style={{ marginTop: 48, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/en/terms" style={{ color: COLOR, fontSize: 13, fontFamily: SANS, letterSpacing: "0.05em", textDecoration: "none", borderBottom: `1px solid ${COLOR}`, paddingBottom: 2 }}>
              Terms of sale
            </Link>
            <Link href="/en/privacy" style={{ color: COLOR, fontSize: 13, fontFamily: SANS, letterSpacing: "0.05em", textDecoration: "none", borderBottom: `1px solid ${COLOR}`, paddingBottom: 2 }}>
              Privacy policy
            </Link>
            <Link href="/" style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontFamily: SANS, letterSpacing: "0.05em", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: 2 }}>
              Back to home
            </Link>
          </div>

        </div>
      </section>

    </main>
  )
}
