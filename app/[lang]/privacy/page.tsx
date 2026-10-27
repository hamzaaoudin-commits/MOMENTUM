import { LocaleLink as Link } from "@/components/locale-link"
import { BackHomeButton } from "@/components/strawberry/back-home-button"

const SERIF = "var(--font-serif)"
const SANS = "var(--font-sans)"
const COLOR = "#2256ff"
const GLOW = "rgba(34,86,255,0.35)"

const SECTIONS = [
  {
    title: "Data Controller Identity",
    body: (
      <>
        <p>The controller of the data collected on this site is:</p>
        <p style={{ marginTop: 12 }}>
          <strong>Hamza El Jaouahiry</strong><br />
          Sole proprietor (French micro-entreprise) — Strawberry Production<br />
          8 place Eugène Thomas, 93160 Noisy-le-Grand, France<br />
          SIRET: 105 253 314 00014<br />
          Email: <strong>hamza@gostrawberryprod.com</strong>
        </p>
        <p style={{ marginTop: 12 }}>For any question regarding the processing of your personal data, you may contact the data controller by email at the address above.</p>
      </>
    ),
  },
  {
    title: "Commitment and Legal Framework",
    body: (
      <>
        <p>Strawberry Production is committed to protecting the privacy of visitors and clients of its website, in accordance with:</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> The General Data Protection Regulation (EU Regulation 2016/679, &quot;GDPR&quot;)</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> French Law No. 78-17 of 6 January 1978, as amended, known as the &quot;Data Protection Act&quot;</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Recommendations from the French Data Protection Authority (CNIL)</li>
        </ul>
      </>
    ),
  },
  {
    title: "Data Collected and Purposes",
    body: (
      <>
        <p>Strawberry Production only collects data strictly necessary for the purposes described below.</p>

        <div style={{ marginTop: 20, padding: 20, border: "1px solid rgba(34,86,255,0.2)", background: "rgba(34,86,255,0.04)" }}>
          <p><strong>A. Contact Form</strong></p>
          <p style={{ marginTop: 8 }}>Data collected: name, email address, main goal (selection), free-form message.</p>
          <p style={{ marginTop: 8 }}><strong>Purpose:</strong> respond to your contact request and engage in potential commercial conversation.</p>
          <p style={{ marginTop: 8 }}><strong>Legal basis:</strong> consent (article 6.1.a of the GDPR), expressed by voluntary submission of the form.</p>
          <p style={{ marginTop: 8 }}><strong>Retention period:</strong> 3 years from last contact, in accordance with CNIL recommendations for B2B commercial prospecting.</p>
        </div>

        <div style={{ marginTop: 12, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>B. Service Purchase</strong></p>
          <p style={{ marginTop: 8 }}>Data collected via Stripe: name, email, billing address, payment card data (never stored by us — only by Stripe).</p>
          <p style={{ marginTop: 8 }}><strong>Purpose:</strong> execute the contract (invoicing, service delivery, commercial follow-up).</p>
          <p style={{ marginTop: 8 }}><strong>Legal basis:</strong> contract performance (article 6.1.b of the GDPR).</p>
          <p style={{ marginTop: 8 }}><strong>Retention period:</strong> 10 years for invoices and accounting data, in accordance with article L.123-22 of the French Commercial Code.</p>
        </div>

        <div style={{ marginTop: 12, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>C. Site Navigation</strong></p>
          <p style={{ marginTop: 8 }}>Minimal technical data: IP address, browser type, pages visited (via tools integrated with Vercel hosting).</p>
          <p style={{ marginTop: 8 }}><strong>Purpose:</strong> ensure the proper functioning of the site, prevent technical abuse.</p>
          <p style={{ marginTop: 8 }}><strong>Legal basis:</strong> legitimate interest (article 6.1.f of the GDPR).</p>
          <p style={{ marginTop: 8 }}><strong>Retention period:</strong> 13 months maximum for navigation logs.</p>
        </div>
      </>
    ),
  },
  {
    title: "Subprocessors and Data Recipients",
    body: (
      <>
        <p>Strawberry Production uses third-party technical service providers (subprocessors under the GDPR), only to the extent necessary for the execution of the services offered:</p>

        <div style={{ marginTop: 20, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>Formspree</strong> (Formspree Inc., Boston, United States)</p>
          <p style={{ marginTop: 6 }}>Contact form processing. Data transferred: name, email, message.</p>
          <p style={{ marginTop: 6 }}>Framework for transfer outside the EU: European Commission Standard Contractual Clauses.</p>
        </div>

        <div style={{ marginTop: 12, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>Stripe</strong> (Stripe Payments Europe Limited, Dublin, Ireland)</p>
          <p style={{ marginTop: 6 }}>Online payment processing. Data transferred: identity, email, billing, payment card (processed and stored exclusively by Stripe, never by Strawberry Production).</p>
          <p style={{ marginTop: 6 }}>Stripe is PCI-DSS Level 1 certified (the strictest banking security standard).</p>
        </div>

        <div style={{ marginTop: 12, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>Vercel</strong> (Vercel Inc., Covina, United States)</p>
          <p style={{ marginTop: 6 }}>Technical hosting of the site. Data processed: technical logs, visitor IP address.</p>
          <p style={{ marginTop: 6 }}>Framework for transfer outside the EU: European Commission Standard Contractual Clauses.</p>
        </div>

        <div style={{ marginTop: 12, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>Google</strong> (Google LLC, Mountain View, United States)</p>
          <p style={{ marginTop: 6 }}>Professional email service (Gmail) used for receiving emails. Data processed: content of received emails.</p>
          <p style={{ marginTop: 6 }}>Framework for transfer outside the EU: EU-US Data Privacy Framework (DPF).</p>
        </div>

        <p style={{ marginTop: 16 }}>The data is never sold, rented, exchanged or communicated to third parties for commercial or advertising purposes.</p>
      </>
    ),
  },
  {
    title: "Cookies and Trackers",
    body: (
      <>
        <p>The site only uses cookies strictly necessary for its operation (so-called &quot;technical&quot; cookies), which are exempt from prior consent under article 82 of the French Data Protection Act.</p>
        <p style={{ marginTop: 12 }}>No advertising cookies, no non-anonymized third-party audience measurement cookies, and no third-party marketing trackers are placed on the visitor&apos;s browser.</p>
        <p style={{ marginTop: 12 }}>You may at any time configure your browser to block or delete cookies, without significantly affecting your browsing experience.</p>
      </>
    ),
  },
  {
    title: "Your Rights",
    body: (
      <>
        <p>In accordance with the GDPR and the French Data Protection Act, you have the following rights regarding your personal data:</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 12 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> <strong>Right of access</strong> (article 15 GDPR): obtain confirmation that your data is being processed and receive a copy</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> <strong>Right to rectification</strong> (article 16 GDPR): correct inaccurate or incomplete data</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> <strong>Right to erasure</strong> (article 17 GDPR): request deletion of your data, subject to legal retention obligations</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> <strong>Right to restriction</strong> (article 18 GDPR): request suspension of the processing of your data</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> <strong>Right to portability</strong> (article 20 GDPR): receive your data in a structured and readable format</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> <strong>Right to object</strong> (article 21 GDPR): object to the processing of your data, in particular for prospecting purposes</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> <strong>Right to withdraw your consent</strong> at any time, when processing is based on it</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> <strong>Right to define directives</strong> relating to the retention, deletion and communication of your data after your death</li>
        </ul>
        <p>To exercise any of these rights, write to <strong>hamza@gostrawberryprod.com</strong>, specifying the purpose of your request. A response will be provided within a maximum of one (1) month, in accordance with article 12.3 of the GDPR.</p>
      </>
    ),
  },
  {
    title: "Data Security",
    body: (
      <>
        <p>Strawberry Production implements appropriate technical and organizational measures to ensure the security of your data:</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Systematic HTTPS encryption of communications with the site (TLS 1.3)</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Enhanced authentication on tools used to process your data</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Exclusive use of GDPR-compliant and security-certified subprocessors</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Minimization: only strictly necessary data is collected and stored</li>
        </ul>
      </>
    ),
  },
  {
    title: "Transfers Outside the European Union",
    body: (
      <>
        <p>Some of our subprocessors (Formspree, Stripe via its US operations, Vercel, Google) may host or process data outside the European Union, particularly in the United States.</p>
        <p style={{ marginTop: 12 }}>These transfers are framed by the following safeguards, in accordance with articles 44 to 50 of the GDPR:</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Standard Contractual Clauses adopted by the European Commission</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> For transfers to the United States, adherence to the EU-US Data Privacy Framework (DPF) when the subprocessor is certified</li>
        </ul>
      </>
    ),
  },
  {
    title: "Complaint to the CNIL",
    body: (
      <>
        <p>If, after contacting us, you believe that your rights have not been respected, you have the right to lodge a complaint with the French Data Protection Authority (CNIL):</p>
        <p style={{ marginTop: 12 }}>
          <strong>CNIL</strong><br />
          3 place de Fontenoy, TSA 80715<br />
          75334 Paris Cedex 07, France<br />
          Phone: +33 (0)1 53 73 22 22<br />
          Website: <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>www.cnil.fr</a>
        </p>
      </>
    ),
  },
  {
    title: "Policy Updates",
    body: (
      <>
        <p>Strawberry Production reserves the right to modify this privacy policy at any time, in particular to comply with any legislative, regulatory or technical evolution.</p>
        <p style={{ marginTop: 12 }}>The date of the last update is indicated at the bottom of this page. In the event of substantial modification, visitors and clients will be informed by any appropriate means.</p>
      </>
    ),
  },
]

export default function PrivacyPage() {

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <BackHomeButton />

      <div style={{ position: "fixed", top: 88, right: "clamp(1.5rem,4vw,4rem)", zIndex: 90 }}>
        <Link href="/fr/politique-confidentialite" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(10,10,10,0.7)", backdropFilter: "blur(12px)", borderRadius: 100, fontSize: 11, fontFamily: SANS, color: "rgba(255,255,255,0.75)", letterSpacing: "0.15em", textDecoration: "none", textTransform: "uppercase", transition: "all 0.2s" }}>
          <span>FR</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span style={{ color: COLOR }}>EN</span>
        </Link>
      </div>

      <section style={{ padding: "180px clamp(1.5rem,4vw,4rem) 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at top, ${GLOW} 0%, transparent 60%)`, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative", transition: "all 0.8s ease" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>
            Data Protection — GDPR
          </div>
          <h1 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(2.25rem,5.5vw,3.75rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.005em", marginBottom: 24 }}>
            Privacy <br /><span style={{ background: `linear-gradient(135deg, ${COLOR}, #2e4eff)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Policy.</span>
          </h1>
          <p style={{ fontSize: "clamp(0.95rem,1.3vw,1.1rem)", color: "rgba(255,255,255,0.6)", maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
            How Strawberry Production collects, uses and protects your personal data, in strict compliance with the GDPR and French law.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px clamp(1.5rem,4vw,4rem) 140px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", transition: "all 0.8s ease" }}>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, border: "1px solid rgba(255,255,255,0.1)", borderBottom: `1px solid ${COLOR}66`, padding: "16px 22px", marginBottom: 32 }}>
            <span style={{ fontFamily: SERIF, fontSize: 15, fontWeight: 700, color: "#fff" }}>Privacy Policy</span>
            <span style={{ fontFamily: SANS, fontSize: 10, letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Rev. May 30, 2026</span>
          </div>

          <div style={{ marginBottom: 64, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.02)", borderLeft: `3px solid ${COLOR}` }}>
            <p style={{ fontFamily: SANS, fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0 }}>
              <strong style={{ color: COLOR }}>Note:</strong> This English version is a courtesy translation. The <Link href="/fr/politique-confidentialite" style={{ color: COLOR, textDecoration: "underline" }}>French version</Link> is the only legally binding version. In case of any discrepancy in interpretation, the French version shall prevail.
            </p>
          </div>

          {SECTIONS.map((s, i) => (
            <article key={i} style={{ marginBottom: 56, paddingBottom: 56, borderBottom: i < SECTIONS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <div style={{ fontFamily: SERIF, fontSize: "1.3rem", color: COLOR, fontWeight: 700, lineHeight: 1, marginBottom: 12, letterSpacing: "-0.02em" }}>
                {String(i + 1).padStart(2, "0")}.
              </div>
              <h2 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(1.4rem,2.2vw,1.85rem)", fontWeight: 600, letterSpacing: "-0.005em", marginBottom: 24, lineHeight: 1.2 }}>
                {s.title}
              </h2>
              <div style={{ fontFamily: SANS, fontSize: "0.98rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.75 }}>
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
            <Link href="/en/legal-notice" style={{ color: COLOR, fontSize: 13, fontFamily: SANS, letterSpacing: "0.05em", textDecoration: "none", borderBottom: `1px solid ${COLOR}`, paddingBottom: 2 }}>
              Legal notice
            </Link>
            <Link href="/en/terms" style={{ color: COLOR, fontSize: 13, fontFamily: SANS, letterSpacing: "0.05em", textDecoration: "none", borderBottom: `1px solid ${COLOR}`, paddingBottom: 2 }}>
              Terms of sale
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
