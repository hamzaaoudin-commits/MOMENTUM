import { LocaleLink as Link } from "@/components/locale-link"
import { BackHomeButton } from "@/components/strawberry/back-home-button"

const SERIF = "var(--font-serif)"
const SANS = "var(--font-sans)"
const COLOR = "#2256ff"
const GLOW = "rgba(34,86,255,0.35)"

const SECTIONS = [
  {
    title: "Identité du responsable de traitement",
    body: (
      <>
        <p>Le responsable du traitement des données collectées sur ce site est :</p>
        <p style={{ marginTop: 12 }}>
          <strong>Hamza El Jaouahiry</strong><br />
          Entrepreneur individuel (micro-entreprise) — Strawberry Production<br />
          8 place Eugène Thomas, 93160 Noisy-le-Grand, France<br />
          SIRET : 105 253 314 00014<br />
          Email : <strong>hamza@gostrawberryprod.com</strong>
        </p>
        <p style={{ marginTop: 12 }}>Pour toute question relative au traitement de vos données personnelles, vous pouvez contacter le responsable de traitement par email à l&apos;adresse ci-dessus.</p>
      </>
    ),
  },
  {
    title: "Engagement et cadre légal",
    body: (
      <>
        <p>Strawberry Production s&apos;engage à protéger la vie privée des visiteurs et clients de son site, conformément à :</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Le Règlement Général sur la Protection des Données (Règlement UE 2016/679, dit « RGPD »)</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> La loi française n° 78-17 du 6 janvier 1978 modifiée, dite « Informatique et Libertés »</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Les recommandations de la Commission Nationale de l&apos;Informatique et des Libertés (CNIL)</li>
        </ul>
      </>
    ),
  },
  {
    title: "Données collectées et finalités",
    body: (
      <>
        <p>Strawberry Production collecte uniquement les données strictement nécessaires aux finalités décrites ci-dessous.</p>

        <div style={{ marginTop: 20, padding: 20, border: "1px solid rgba(34,86,255,0.2)", background: "rgba(34,86,255,0.04)" }}>
          <p><strong>A. Formulaire de contact</strong></p>
          <p style={{ marginTop: 8 }}>Données collectées : nom, adresse email, objectif principal (sélection), message libre.</p>
          <p style={{ marginTop: 8 }}><strong>Finalité :</strong> répondre à votre demande de contact et engager une éventuelle conversation commerciale.</p>
          <p style={{ marginTop: 8 }}><strong>Base légale :</strong> consentement (article 6.1.a du RGPD), exprimé par la soumission volontaire du formulaire.</p>
          <p style={{ marginTop: 8 }}><strong>Durée de conservation :</strong> 3 ans à compter du dernier contact, conformément aux recommandations CNIL pour la prospection commerciale B2B.</p>
        </div>

        <div style={{ marginTop: 12, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>B. Achat d&apos;une prestation</strong></p>
          <p style={{ marginTop: 8 }}>Données collectées via Stripe : nom, email, adresse de facturation, données de carte bancaire (jamais stockées par nous — uniquement par Stripe).</p>
          <p style={{ marginTop: 8 }}><strong>Finalité :</strong> exécuter le contrat (facturation, livraison de la prestation, suivi commercial).</p>
          <p style={{ marginTop: 8 }}><strong>Base légale :</strong> exécution du contrat (article 6.1.b du RGPD).</p>
          <p style={{ marginTop: 8 }}><strong>Durée de conservation :</strong> 10 ans pour les factures et données comptables, conformément à l&apos;article L.123-22 du Code de commerce.</p>
        </div>

        <div style={{ marginTop: 12, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>C. Navigation sur le site</strong></p>
          <p style={{ marginTop: 8 }}>Données techniques minimales : adresse IP, type de navigateur, pages visitées (via les outils intégrés à l&apos;hébergement Vercel).</p>
          <p style={{ marginTop: 8 }}><strong>Finalité :</strong> assurer le bon fonctionnement du site, prévenir les abus techniques.</p>
          <p style={{ marginTop: 8 }}><strong>Base légale :</strong> intérêt légitime (article 6.1.f du RGPD).</p>
          <p style={{ marginTop: 8 }}><strong>Durée de conservation :</strong> 13 mois maximum pour les logs de navigation.</p>
        </div>
      </>
    ),
  },
  {
    title: "Sous-traitants et destinataires des données",
    body: (
      <>
        <p>Strawberry Production fait appel à des prestataires techniques tiers (sous-traitants au sens du RGPD), uniquement dans la mesure nécessaire à l&apos;exécution des services proposés :</p>

        <div style={{ marginTop: 20, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>Formspree</strong> (Formspree Inc., Boston, États-Unis)</p>
          <p style={{ marginTop: 6 }}>Traitement du formulaire de contact. Données transférées : nom, email, message.</p>
          <p style={{ marginTop: 6 }}>Cadre du transfert hors UE : Clauses Contractuelles Types de la Commission européenne.</p>
        </div>

        <div style={{ marginTop: 12, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>Stripe</strong> (Stripe Payments Europe Limited, Dublin, Irlande)</p>
          <p style={{ marginTop: 6 }}>Traitement des paiements en ligne. Données transférées : identité, email, facturation, carte bancaire (traitée et stockée exclusivement par Stripe, jamais par Strawberry Production).</p>
          <p style={{ marginTop: 6 }}>Stripe est certifié PCI-DSS niveau 1 (norme de sécurité bancaire la plus stricte).</p>
        </div>

        <div style={{ marginTop: 12, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>Vercel</strong> (Vercel Inc., Covina, États-Unis)</p>
          <p style={{ marginTop: 6 }}>Hébergement technique du site. Données traitées : logs techniques, adresse IP des visiteurs.</p>
          <p style={{ marginTop: 6 }}>Cadre du transfert hors UE : Clauses Contractuelles Types de la Commission européenne.</p>
        </div>

        <div style={{ marginTop: 12, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>Google</strong> (Google LLC, Mountain View, États-Unis)</p>
          <p style={{ marginTop: 6 }}>Service de messagerie professionnelle (Gmail) utilisé pour la réception des emails. Données traitées : contenu des emails reçus.</p>
          <p style={{ marginTop: 6 }}>Cadre du transfert hors UE : Data Privacy Framework (DPF) UE-États-Unis.</p>
        </div>

        <p style={{ marginTop: 16 }}>Les données ne font l&apos;objet d&apos;aucune vente, location, échange ou communication à des tiers à des fins commerciales ou publicitaires.</p>
      </>
    ),
  },
  {
    title: "Cookies et traceurs",
    body: (
      <>
        <p>Le site n&apos;utilise que des cookies strictement nécessaires à son fonctionnement (cookies dits « techniques »), qui sont exemptés de consentement préalable au sens de l&apos;article 82 de la loi Informatique et Libertés.</p>
        <p style={{ marginTop: 12 }}>Aucun cookie publicitaire, aucun cookie de mesure d&apos;audience tierce non anonymisée, et aucun traceur marketing tiers n&apos;est déposé sur le navigateur du visiteur.</p>
        <p style={{ marginTop: 12 }}>Vous pouvez à tout moment configurer votre navigateur pour bloquer ou supprimer les cookies, sans que cela n&apos;affecte significativement votre expérience de navigation.</p>
      </>
    ),
  },
  {
    title: "Vos droits",
    body: (
      <>
        <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 12 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> <strong>Droit d&apos;accès</strong> (article 15 RGPD) : obtenir confirmation que vos données sont traitées et en recevoir une copie</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> <strong>Droit de rectification</strong> (article 16 RGPD) : faire corriger des données inexactes ou incomplètes</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> <strong>Droit à l&apos;effacement</strong> (article 17 RGPD) : demander la suppression de vos données, sous réserve des obligations légales de conservation</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> <strong>Droit à la limitation</strong> (article 18 RGPD) : demander la suspension du traitement de vos données</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> <strong>Droit à la portabilité</strong> (article 20 RGPD) : recevoir vos données dans un format structuré et lisible</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> <strong>Droit d&apos;opposition</strong> (article 21 RGPD) : vous opposer au traitement de vos données, notamment à des fins de prospection</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> <strong>Droit de retirer votre consentement</strong> à tout moment, lorsque le traitement est fondé sur celui-ci</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> <strong>Droit de définir des directives</strong> relatives à la conservation, à l&apos;effacement et à la communication de vos données après votre décès</li>
        </ul>
        <p>Pour exercer l&apos;un de ces droits, écrivez à <strong>hamza@gostrawberryprod.com</strong>, en précisant l&apos;objet de votre demande. Une réponse vous sera apportée sous un délai maximum d&apos;un (1) mois, conformément à l&apos;article 12.3 du RGPD.</p>
      </>
    ),
  },
  {
    title: "Sécurité des données",
    body: (
      <>
        <p>Strawberry Production met en œuvre des mesures techniques et organisationnelles appropriées pour assurer la sécurité de vos données :</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Chiffrement HTTPS systématique des communications avec le site (TLS 1.3)</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Authentification renforcée sur les outils utilisés pour traiter vos données</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Recours exclusif à des sous-traitants conformes au RGPD et certifiés sur le plan sécurité</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Minimisation : seules les données strictement nécessaires sont collectées et conservées</li>
        </ul>
      </>
    ),
  },
  {
    title: "Transferts hors Union européenne",
    body: (
      <>
        <p>Certains de nos sous-traitants (Formspree, Stripe via ses opérations US, Vercel, Google) sont susceptibles d&apos;héberger ou de traiter des données en dehors de l&apos;Union européenne, notamment aux États-Unis.</p>
        <p style={{ marginTop: 12 }}>Ces transferts sont encadrés par les garanties suivantes, conformément aux articles 44 à 50 du RGPD :</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Clauses Contractuelles Types adoptées par la Commission européenne</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Pour les transferts vers les États-Unis, adhésion au Data Privacy Framework (DPF) lorsque le sous-traitant y est certifié</li>
        </ul>
      </>
    ),
  },
  {
    title: "Réclamation auprès de la CNIL",
    body: (
      <>
        <p>Si, après nous avoir contactés, vous estimez que vos droits n&apos;ont pas été respectés, vous avez le droit d&apos;introduire une réclamation auprès de la Commission Nationale de l&apos;Informatique et des Libertés (CNIL) :</p>
        <p style={{ marginTop: 12 }}>
          <strong>CNIL</strong><br />
          3 place de Fontenoy, TSA 80715<br />
          75334 Paris Cedex 07<br />
          Téléphone : 01 53 73 22 22<br />
          Site : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>www.cnil.fr</a>
        </p>
      </>
    ),
  },
  {
    title: "Modifications de la politique",
    body: (
      <>
        <p>Strawberry Production se réserve le droit de modifier la présente politique de confidentialité à tout moment, notamment pour se conformer à toute évolution législative, réglementaire ou technique.</p>
        <p style={{ marginTop: 12 }}>La date de dernière mise à jour est indiquée en bas de cette page. En cas de modification substantielle, les visiteurs et clients en seront informés par tout moyen approprié.</p>
      </>
    ),
  },
]

export default function PolitiqueConfidentialitePage() {

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <BackHomeButton />

      <div style={{ position: "fixed", top: 88, right: "clamp(1.5rem,4vw,4rem)", zIndex: 90 }}>
        <Link href="/en/privacy" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(10,10,10,0.7)", backdropFilter: "blur(12px)", borderRadius: 100, fontSize: 11, fontFamily: SANS, color: "rgba(255,255,255,0.75)", letterSpacing: "0.15em", textDecoration: "none", textTransform: "uppercase", transition: "all 0.2s" }}>
          <span style={{ color: COLOR }}>FR</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span>EN</span>
        </Link>
      </div>

      <section style={{ padding: "180px clamp(1.5rem,4vw,4rem) 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at top, ${GLOW} 0%, transparent 60%)`, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative", transition: "all 0.8s ease" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>
            Protection des données — RGPD
          </div>
          <h1 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(2.25rem,5.5vw,3.75rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.005em", marginBottom: 24 }}>
            Politique de <br /><span style={{ background: `linear-gradient(135deg, ${COLOR}, #2e4eff)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>confidentialité.</span>
          </h1>
          <p style={{ fontSize: "clamp(0.95rem,1.3vw,1.1rem)", color: "rgba(255,255,255,0.6)", maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
            Comment Strawberry Production collecte, utilise et protège vos données personnelles, en stricte conformité avec le RGPD et la loi française.
          </p>
        </div>
      </section>

      <section style={{ padding: "60px clamp(1.5rem,4vw,4rem) 140px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", transition: "all 0.8s ease" }}>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, border: "1px solid rgba(255,255,255,0.1)", borderBottom: `1px solid ${COLOR}66`, padding: "16px 22px", marginBottom: 48 }}>
            <span style={{ fontFamily: SERIF, fontSize: 15, fontWeight: 700, color: "#fff" }}>Politique de Confidentialité</span>
            <span style={{ fontFamily: SANS, fontSize: 10, letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Rév. 30 mai 2026</span>
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
              Dernière mise à jour
            </div>
            <p style={{ fontFamily: SERIF, fontSize: "1.05rem", color: "rgba(255,255,255,0.85)",  margin: 0 }}>
              30 mai 2026
            </p>
          </div>

          <div style={{ marginTop: 48, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/fr/mentions-legales" style={{ color: COLOR, fontSize: 13, fontFamily: SANS, letterSpacing: "0.05em", textDecoration: "none", borderBottom: `1px solid ${COLOR}`, paddingBottom: 2 }}>
              Mentions légales
            </Link>
            <Link href="/fr/cgv" style={{ color: COLOR, fontSize: 13, fontFamily: SANS, letterSpacing: "0.05em", textDecoration: "none", borderBottom: `1px solid ${COLOR}`, paddingBottom: 2 }}>
              Conditions générales de vente
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
