import { LocaleLink as Link } from "@/components/locale-link"
import { BackHomeButton } from "@/components/strawberry/back-home-button"

const SERIF = "var(--font-serif)"
const SANS = "var(--font-sans)"
const COLOR = "#2256ff"
const GLOW = "rgba(34,86,255,0.35)"

const ARTICLES = [
  {
    title: "Purpose and Scope",
    body: (
      <>
        <p>These General Terms of Sale (hereinafter the &quot;Terms&quot;) govern the contractual relations between:</p>
        <p style={{ marginTop: 12 }}>
          <strong>Hamza El Jaouahiry</strong>, sole proprietor (French micro-entreprise), registered under SIREN 105 253 314 (SIRET 105 253 314 00014), trading under the name <strong>Strawberry Production</strong>, with registered office at 8 place Eugène Thomas, 93160 Noisy-le-Grand, France (hereinafter &quot;the Provider&quot;).
        </p>
        <p style={{ marginTop: 12 }}>And any natural or legal person purchasing a service offered on the website gostrawberryprod.com (hereinafter &quot;the Client&quot;).</p>
        <p style={{ marginTop: 12 }}>Any order implies full and unreserved acceptance of these Terms, which prevail over any other document of the Client.</p>
        <p style={{ marginTop: 12 }}>These Terms apply to The Narrative Architecture (&quot;the story&quot;), ordered online. The staging of a moment (&quot;the full moment&quot;) is covered by a written, signed quote setting out its scope, schedule, price and commitments; these Terms apply to anything the quote does not cover.</p>
      </>
    ),
  },
  {
    title: "Service Offered",
    body: (
      <>
        <p>The Provider offers a single service named <strong>&quot;The Narrative Architecture&quot;</strong> (hereinafter &quot;the Service&quot;), priced at <strong>€2,900</strong> (VAT not applicable, article 293 B of the French General Tax Code), comprising six deliverables:</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> The Brand Platform</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> The Diagnosis</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> The Map of the Competitive Field</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> The Decisions</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> The Playbooks</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> The Lexicon and rewritten copy</li>
        </ul>
        <p>The service includes two (2) rounds of revisions within thirty (30) days following delivery, then, if needed, a second version (V2), under the conditions of article 06.</p>
      </>
    ),
  },
  {
    title: "Price and Payment Terms",
    body: (
      <>
        <p>The price of the Service is <strong>€2,900</strong>, with no tax added: VAT is not applicable pursuant to article 293 B of the French General Tax Code.</p>
        <p style={{ marginTop: 12 }}>Payment is made in full online via the payment provider Stripe (Stripe Payments Europe Limited, Dublin, Ireland), at the time of order. No order can be initiated without prior payment.</p>
        <p style={{ marginTop: 12 }}>A paid invoice is sent to the Client by electronic means within 48 hours after payment.</p>
        <p style={{ marginTop: 12 }}>Any bank fees for currency conversion remain the sole responsibility of the Client.</p>
      </>
    ),
  },
  {
    title: "Contract Formation",
    body: (
      <>
        <p>The contract is deemed concluded upon receipt of payment by the Provider. This receipt triggers:</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> The sending of a confirmation email within 24 business hours</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> The transmission of the onboarding questionnaire (preliminary information required for the service)</li>
        </ul>
        <p>The three (3) week (twenty-one day) delivery period begins once the Provider has received the Client&apos;s completed onboarding questionnaire.</p>
      </>
    ),
  },
  {
    title: "Delivery Timeline",
    body: (
      <>
        <p>The Service is delivered within <strong>three (3) weeks (twenty-one days)</strong> from receipt of the completed onboarding questionnaire, subject to the Client&apos;s cooperation.</p>
        <p style={{ marginTop: 12 }}>If the Service is not delivered within this twenty-one (21) day period, the Client receives a full refund, and keeps the document as produced at that stage.</p>
        <p style={{ marginTop: 12 }}>Any delay attributable to the Client (lack of response to follow-ups, failure to provide requested items) suspends the countdown.</p>
      </>
    ),
  },
  {
    title: "Right of Withdrawal and Refund Policy",
    body: (
      <>
        <p><strong>Important:</strong> In accordance with article L.221-28 of the French Consumer Code, the Client is informed that the Service, highly personalized and designed bespoke for their business, cannot be subject to the standard 14-day withdrawal right once its execution has begun with their express agreement.</p>
        <p style={{ marginTop: 16 }}>The Provider nevertheless offers an adapted four-stage refund policy:</p>
        <div style={{ marginTop: 16, padding: 20, border: "1px solid rgba(34,86,255,0.2)", background: "rgba(34,86,255,0.04)" }}>
          <p><strong>A. Before the service starts:</strong></p>
          <p style={{ marginTop: 8 }}>Within seven (7) days of payment, and as long as the onboarding questionnaire has not been returned completed, the Client may request order cancellation and obtain a <strong>full refund (100%)</strong> within fifteen (15) days.</p>
        </div>
        <div style={{ marginTop: 12, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>B. During the service:</strong></p>
          <p style={{ marginTop: 8 }}>Once the onboarding questionnaire has been received and the review work has begun, the order can no longer be cancelled, as most of the value of the service lies in the time devoted to analysis. The only refunds then available are those set out in points C and D below.</p>
        </div>
        <div style={{ marginTop: 12, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>C. In case of delivery delay:</strong></p>
          <p style={{ marginTop: 8 }}>If the Service is not delivered within the twenty-one (21) day period set out in Article 05, the Client receives a <strong>full refund (100%)</strong> upon simple request, and keeps the document as produced at that stage.</p>
        </div>
        <div style={{ marginTop: 12, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>D. Upon delivery: revisions, second version, partial refund:</strong></p>
          <p style={{ marginTop: 8 }}>The Client benefits from two (2) rounds of revisions within thirty (30) days following delivery.</p>
          <p style={{ marginTop: 8 }}>If, after these two rounds, the document still does not match their expectations, the Client may request a <strong>second version (V2)</strong>, rewritten from the same questionnaire. This request, made in writing within forty-five (45) days following delivery, need not be justified. The V2 is delivered within twenty-one (21) days of the request.</p>
          <p style={{ marginTop: 8 }}>If the V2 does not substantially match their reasonable expectations, the Client may request a partial refund, capped at <strong>thirty percent (30%) of the total amount, i.e. €870</strong>. This request must be motivated in writing within thirty (30) days following delivery of the V2.</p>
        </div>
        <p style={{ marginTop: 16 }}>Any refund request must be sent by email to hamza@gostrawberryprod.com, with reference to the invoice concerned.</p>
      </>
    ),
  },
  {
    title: "Client Obligations",
    body: (
      <>
        <p>To allow the proper execution of the Service, the Client undertakes to:</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Provide the requested information sincerely and exhaustively</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Respond to the Provider&apos;s requests within a reasonable timeframe (5 business days)</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Communicate revision feedback within agreed deadlines</li>
        </ul>
        <p>The Client guarantees that they hold the necessary rights and authorizations on the information they transmit (trademarks, content, competitive data, etc.).</p>
      </>
    ),
  },
  {
    title: "Provider Obligations",
    body: (
      <>
        <p>The Provider undertakes to:</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Perform the Service professionally, in accordance with industry standards</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Respect agreed deadlines, subject to the Client&apos;s cooperation</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Guarantee the confidentiality of information transmitted by the Client</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Not reuse, in whole or in part, the specific narrative content produced for a Client in another commission</li>
        </ul>
        <p>The Provider is bound by an obligation of means, not of result. The Client&apos;s commercial success following the service depends on numerous external factors (implementation, market context, execution) which are beyond the Provider&apos;s control.</p>
      </>
    ),
  },
  {
    title: "Intellectual Property",
    body: (
      <>
        <p>Upon delivery and after full payment, the Client has an unlimited and perpetual commercial right of use over the Service deliverables, for the needs of their own activity (communication, website, commercial materials, editorial content, training, publications, etc.).</p>
        <p style={{ marginTop: 12 }}>However, the Provider retains:</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> The moral right over the work, in accordance with article L.121-1 of the French Intellectual Property Code</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Ownership of the underlying methodology (the S.T.R.A.W. method), analytical frameworks and models used</li>
        </ul>
        <p>The resale, sublicensing or transfer of deliverables to a third party is strictly prohibited without the prior written consent of the Provider.</p>
      </>
    ),
  },
  {
    title: "Confidentiality",
    body: (
      <>
        <p>Each party undertakes to keep strictly confidential the information exchanged in the context of the Service, in particular:</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Strategic, commercial, financial and operational information of the Client</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Narrative and methodological content produced by the Provider</li>
        </ul>
        <p>This confidentiality commitment lasts five (5) years after the end of the Service.</p>
      </>
    ),
  },
  {
    title: "Liability",
    body: (
      <>
        <p>The Provider&apos;s liability cannot be engaged for the direct or indirect consequences resulting from:</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Misuse of the deliverables by the Client</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Inaccurate or incomplete information provided by the Client</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Commercial or market factors external to the service</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> A force majeure event as defined in article 1218 of the French Civil Code</li>
        </ul>
        <p>In any event, the Provider&apos;s liability is capped at the total amount invoiced to the Client for the Service concerned.</p>
      </>
    ),
  },
  {
    title: "Personal Data",
    body: <p>The processing of the Client&apos;s personal data (identity, email, payment data) is governed by our <Link href="/en/privacy" style={{ color: COLOR }}>Privacy Policy</Link>, in compliance with the General Data Protection Regulation (GDPR) and the French Data Protection Act.</p>,
  },
  {
    title: "Claims and Mediation",
    body: (
      <>
        <p>Any claim must be sent by email to <strong>hamza@gostrawberryprod.com</strong>. The Provider undertakes to respond within fifteen (15) business days.</p>
        <p style={{ marginTop: 12 }}>In accordance with articles L.616-1 and R.616-1 of the French Consumer Code, the Client may, in case of unresolved dispute, refer free of charge to the consumer mediation service of the competent mediator.</p>
        <p style={{ marginTop: 12 }}>The Client may also use the European online dispute resolution platform (ODR): <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>ec.europa.eu/consumers/odr</a></p>
      </>
    ),
  },
  {
    title: "Applicable Law and Jurisdiction",
    body: (
      <>
        <p>These Terms are governed by French law.</p>
        <p style={{ marginTop: 12 }}>In the event of a dispute, and in the absence of an amicable agreement, the <strong>French courts of Paris</strong> shall have sole jurisdiction, notwithstanding multiple defendants or warranty claims.</p>
        <p style={{ marginTop: 12 }}>For consumer Clients residing outside France, the applicable legal jurisdiction rules apply in accordance with European Union law.</p>
      </>
    ),
  },
  {
    title: "Official Version and Translation",
    body: <p>The French version of these Terms is the only legally binding version. Any translation into a foreign language, particularly English, is provided for informational and courtesy purposes only. In case of any discrepancy in interpretation between the French version and any other version, the French version shall prevail.</p>,
  },
]

export default function TermsPage() {

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <BackHomeButton />

      <div style={{ position: "fixed", top: 88, right: "clamp(1.5rem,4vw,4rem)", zIndex: 90 }}>
        <Link href="/fr/cgv" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(10,10,10,0.7)", backdropFilter: "blur(12px)", borderRadius: 100, fontSize: 11, fontFamily: SANS, color: "rgba(255,255,255,0.75)", letterSpacing: "0.15em", textDecoration: "none", textTransform: "uppercase", transition: "all 0.2s" }}>
          <span>FR</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span style={{ color: COLOR }}>EN</span>
        </Link>
      </div>

      <section style={{ padding: "180px clamp(1.5rem,4vw,4rem) 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at top, ${GLOW} 0%, transparent 60%)`, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative", transition: "all 0.8s ease" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>
            Contract Document
          </div>
          <h1 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.005em", marginBottom: 24 }}>
            Terms of <br /><span style={{ background: `linear-gradient(135deg, ${COLOR}, #2e4eff)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Sale.</span>
          </h1>
          <p style={{ fontSize: "clamp(0.95rem,1.3vw,1.1rem)", color: "rgba(255,255,255,0.6)", maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
            Conditions applicable to any service ordered from Strawberry Production (Hamza El Jaouahiry, French sole proprietorship).
          </p>
        </div>
      </section>

      <section style={{ padding: "60px clamp(1.5rem,4vw,4rem) 140px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", transition: "all 0.8s ease" }}>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, border: "1px solid rgba(255,255,255,0.1)", borderBottom: `1px solid ${COLOR}66`, padding: "16px 22px", marginBottom: 32 }}>
            <span style={{ fontFamily: SERIF, fontSize: 15, fontWeight: 700, color: "#fff" }}>Terms of Service</span>
            <span style={{ fontFamily: SANS, fontSize: 10, letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Rev. October 10, 2026</span>
          </div>

          <div style={{ marginBottom: 64, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.02)", borderLeft: `3px solid ${COLOR}` }}>
            <p style={{ fontFamily: SANS, fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0 }}>
              <strong style={{ color: COLOR }}>Note:</strong> This English version is a courtesy translation. The <Link href="/fr/cgv" style={{ color: COLOR, textDecoration: "underline" }}>French version</Link> is the only legally binding version. In case of any discrepancy in interpretation, the French version shall prevail.
            </p>
          </div>

          {ARTICLES.map((s, i) => (
            <article key={i} style={{ marginBottom: 56, paddingBottom: 56, borderBottom: i < ARTICLES.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <div style={{ fontFamily: SERIF, fontSize: "1.3rem", color: COLOR, fontWeight: 700, lineHeight: 1, marginBottom: 12, letterSpacing: "-0.02em" }}>
                Article {String(i + 1).padStart(2, "0")}.
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
              October 10, 2026
            </p>
          </div>

          <div style={{ marginTop: 48, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/en/legal-notice" style={{ color: COLOR, fontSize: 13, fontFamily: SANS, letterSpacing: "0.05em", textDecoration: "none", borderBottom: `1px solid ${COLOR}`, paddingBottom: 2 }}>
              Legal notice
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
