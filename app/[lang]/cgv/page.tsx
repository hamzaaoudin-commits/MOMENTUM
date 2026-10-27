import { LocaleLink as Link } from "@/components/locale-link"
import { BackHomeButton } from "@/components/strawberry/back-home-button"

const SERIF = "var(--font-serif)"
const SANS = "var(--font-sans)"
const COLOR = "#2256ff"
const GLOW = "rgba(34,86,255,0.35)"

const ARTICLES = [
  {
    title: "Objet et champ d'application",
    body: (
      <>
        <p>Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent les relations contractuelles entre :</p>
        <p style={{ marginTop: 12 }}>
          <strong>Hamza El Jaouahiry</strong>, entrepreneur individuel (micro-entreprise), immatriculé sous le SIREN 105 253 314 (SIRET 105 253 314 00014), exerçant sous le nom commercial <strong>Strawberry Production</strong>, dont le siège est situé 8 place Eugène Thomas, 93160 Noisy-le-Grand, France (ci-après « le Prestataire »).
        </p>
        <p style={{ marginTop: 12 }}>Et toute personne physique ou morale procédant à l&apos;achat d&apos;une prestation proposée sur le site gostrawberryprod.com (ci-après « le Client »).</p>
        <p style={{ marginTop: 12 }}>Toute commande implique l&apos;acceptation pleine et entière des présentes CGV, qui prévalent sur tout autre document du Client.</p>
        <p style={{ marginTop: 12 }}>Les présentes CGV s&apos;appliquent à L&apos;Architecture Narrative (« le récit »), commandée en ligne. La mise en scène d&apos;un moment (« le moment complet ») fait l&apos;objet d&apos;un devis écrit et signé, qui en précise le périmètre, le calendrier, le prix et les engagements ; les présentes CGV s&apos;y appliquent pour tout ce que le devis ne prévoit pas.</p>
      </>
    ),
  },
  {
    title: "Prestation proposée",
    body: (
      <>
        <p>Le Prestataire propose une prestation unique intitulée <strong>« L&apos;Architecture Narrative »</strong> (ci-après « la Prestation »), au prix de <strong>2 900 €</strong> (TVA non applicable, article 293 B du CGI), comprenant six livrables :</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> La Plateforme de marque</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> Le Diagnostic</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> La Carte du champ concurrentiel</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> Les Décisions</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> Les Playbooks</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>✦</span> Le Lexique et les textes réécrits</li>
        </ul>
        <p>La prestation inclut deux (2) tours de révision dans les trente (30) jours suivant la livraison, puis, si nécessaire, une seconde version (V2), dans les conditions de l&apos;article 06.</p>
      </>
    ),
  },
  {
    title: "Prix et modalités de paiement",
    body: (
      <>
        <p>Le prix de la Prestation est de <strong>2 900 €</strong>, net de taxe : TVA non applicable, article 293 B du Code général des impôts.</p>
        <p style={{ marginTop: 12 }}>Le paiement s&apos;effectue intégralement en ligne via le prestataire de paiement Stripe (Stripe Payments Europe Limited, Dublin, Irlande), au moment de la commande. Aucune commande ne peut être engagée sans règlement préalable.</p>
        <p style={{ marginTop: 12 }}>Une facture acquittée est transmise au Client par voie électronique sous 48 heures suivant le paiement.</p>
        <p style={{ marginTop: 12 }}>Les éventuels frais bancaires de conversion de devises restent à la charge exclusive du Client.</p>
      </>
    ),
  },
  {
    title: "Conclusion du contrat",
    body: (
      <>
        <p>Le contrat est réputé conclu dès la réception du paiement par le Prestataire. Cette réception déclenche :</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> L&apos;envoi sous 24h ouvrées d&apos;un courriel de confirmation au Client</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> La transmission du questionnaire d&apos;onboarding (informations préalables nécessaires à la prestation)</li>
        </ul>
        <p>Le délai de trois (3) semaines (vingt et un jours) de livraison commence à courir à compter de la réception, par le Prestataire, du questionnaire d&apos;onboarding dûment complété par le Client.</p>
      </>
    ),
  },
  {
    title: "Délais de livraison",
    body: (
      <>
        <p>La Prestation est livrée dans un délai de <strong>trois (3) semaines (vingt et un jours)</strong> à compter de la réception du questionnaire d&apos;onboarding dûment complété, sous réserve de la coopération du Client.</p>
        <p style={{ marginTop: 12 }}>Si la Prestation n&apos;est pas livrée dans ce délai de vingt et un (21) jours, le Client est intégralement remboursé, et conserve néanmoins le document tel que produit à ce stade.</p>
        <p style={{ marginTop: 12 }}>Tout retard imputable au Client (absence de réponse aux relances, non-fourniture des éléments demandés) suspend le décompte du délai.</p>
      </>
    ),
  },
  {
    title: "Droit de rétractation et politique de remboursement",
    body: (
      <>
        <p><strong>Important :</strong> Conformément à l&apos;article L.221-28 du Code de la consommation, le Client est informé que la Prestation, hautement personnalisée et conçue sur mesure pour son entreprise, ne peut faire l&apos;objet d&apos;un droit de rétractation classique de 14 jours dès lors que son exécution a commencé avec son accord exprès.</p>
        <p style={{ marginTop: 16 }}>Le Prestataire propose néanmoins une politique de remboursement adaptée, en quatre temps :</p>
        <div style={{ marginTop: 16, padding: 20, border: "1px solid rgba(34,86,255,0.2)", background: "rgba(34,86,255,0.04)" }}>
          <p><strong>A. Avant le démarrage de la prestation :</strong></p>
          <p style={{ marginTop: 8 }}>Dans les sept (7) jours suivant le paiement, et tant que le questionnaire d&apos;onboarding n&apos;a pas été retourné complété, le Client peut demander l&apos;annulation de la commande et obtenir un <strong>remboursement intégral (100%)</strong>, sous quinze (15) jours.</p>
        </div>
        <div style={{ marginTop: 12, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>B. Pendant la prestation :</strong></p>
          <p style={{ marginTop: 8 }}>Une fois le questionnaire d&apos;onboarding reçu et le travail de dépouillement engagé, la commande ne peut plus être annulée, l&apos;essentiel de la valeur de la prestation reposant sur le temps consacré à l&apos;analyse. Les seuls remboursements possibles sont alors ceux prévus aux points C et D ci-dessous.</p>
        </div>
        <div style={{ marginTop: 12, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>C. En cas de retard de livraison :</strong></p>
          <p style={{ marginTop: 8 }}>Si la Prestation n&apos;est pas livrée dans le délai de vingt et un (21) jours prévu à l&apos;Article 05, le Client obtient un <strong>remboursement intégral (100%)</strong> sur simple demande, et conserve le document tel que produit à ce stade.</p>
        </div>
        <div style={{ marginTop: 12, padding: 20, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}>
          <p><strong>D. À la livraison : révisions, seconde version, remboursement partiel :</strong></p>
          <p style={{ marginTop: 8 }}>Le Client bénéficie de deux (2) tours de révisions dans les trente (30) jours suivant la livraison.</p>
          <p style={{ marginTop: 8 }}>Si, après ces deux tours, le document ne correspond toujours pas à ses attentes, le Client peut demander une <strong>seconde version (V2)</strong>, réécrite à partir du même questionnaire. Cette demande, adressée par écrit dans les quarante-cinq (45) jours suivant la livraison, n&apos;a pas à être justifiée. La V2 est livrée dans un délai de vingt et un (21) jours à compter de la demande.</p>
          <p style={{ marginTop: 8 }}>Si la V2 ne correspond pas substantiellement à ses attentes raisonnables, le Client peut solliciter un remboursement partiel, plafonné à <strong>trente pour cent (30 %) du montant total, soit 870 €</strong>. Cette demande doit être motivée par écrit dans les trente (30) jours suivant la livraison de la V2.</p>
        </div>
        <p style={{ marginTop: 16 }}>Toute demande de remboursement doit être adressée par email à hamza@gostrawberryprod.com, avec mention de la facture concernée.</p>
      </>
    ),
  },
  {
    title: "Obligations du Client",
    body: (
      <>
        <p>Pour permettre la bonne exécution de la Prestation, le Client s&apos;engage à :</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Fournir les informations demandées avec sincérité et exhaustivité</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Répondre aux demandes du Prestataire dans un délai raisonnable (sous 5 jours ouvrés)</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Communiquer ses retours de révision dans les délais convenus</li>
        </ul>
        <p>Le Client garantit disposer des droits et autorisations nécessaires sur les informations qu&apos;il transmet (marques, contenus, données concurrentielles, etc.).</p>
      </>
    ),
  },
  {
    title: "Obligations du Prestataire",
    body: (
      <>
        <p>Le Prestataire s&apos;engage à :</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Exécuter la Prestation avec professionnalisme, dans les règles de l&apos;art</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Respecter les délais convenus, sous réserve de la coopération du Client</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Garantir la confidentialité des informations transmises par le Client</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Ne pas réutiliser, en tout ou partie, le contenu narratif spécifique produit pour un Client dans une autre commission</li>
        </ul>
        <p>Le Prestataire est tenu d&apos;une obligation de moyens, et non de résultat. Le succès commercial du Client à l&apos;issue de la prestation dépend de nombreux facteurs extérieurs (mise en œuvre, contexte marché, exécution) qui échappent au contrôle du Prestataire.</p>
      </>
    ),
  },
  {
    title: "Propriété intellectuelle",
    body: (
      <>
        <p>À la livraison et après paiement intégral, le Client dispose d&apos;un droit d&apos;usage commercial illimité et perpétuel sur les livrables de la Prestation, pour les besoins propres de son activité (communication, site web, supports commerciaux, contenus éditoriaux, formations, publications, etc.).</p>
        <p style={{ marginTop: 12 }}>Le Prestataire conserve néanmoins :</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Le droit moral sur l&apos;œuvre, conformément à l&apos;article L.121-1 du Code de la propriété intellectuelle</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> La propriété de la méthodologie sous-jacente (méthode S.T.R.A.W.), des cadres analytiques et des modèles utilisés</li>
        </ul>
        <p>La revente, la sous-licence ou la cession à un tiers des livrables est strictement interdite sans accord écrit préalable du Prestataire.</p>
      </>
    ),
  },
  {
    title: "Confidentialité",
    body: (
      <>
        <p>Chacune des parties s&apos;engage à conserver strictement confidentielles les informations échangées dans le cadre de la Prestation, et notamment :</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Les informations stratégiques, commerciales, financières et opérationnelles du Client</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> Les contenus narratifs et méthodologiques produits par le Prestataire</li>
        </ul>
        <p>Cet engagement de confidentialité perdure cinq (5) ans après la fin de la Prestation.</p>
      </>
    ),
  },
  {
    title: "Responsabilité",
    body: (
      <>
        <p>La responsabilité du Prestataire ne saurait être engagée pour les conséquences directes ou indirectes résultant :</p>
        <ul style={{ listStyle: "none", padding: 0, margin: "16px 0", display: "flex", flexDirection: "column", gap: 8 }}>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> D&apos;une mauvaise utilisation des livrables par le Client</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> D&apos;informations inexactes ou incomplètes fournies par le Client</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> De facteurs commerciaux ou de marché extérieurs à la prestation</li>
          <li style={{ paddingLeft: 20, position: "relative" }}><span style={{ position: "absolute", left: 0, color: COLOR }}>—</span> D&apos;un cas de force majeure tel que défini à l&apos;article 1218 du Code civil</li>
        </ul>
        <p>En toute hypothèse, la responsabilité du Prestataire est plafonnée au montant total facturé au Client pour la Prestation concernée.</p>
      </>
    ),
  },
  {
    title: "Données personnelles",
    body: <p>Le traitement des données personnelles du Client (identité, email, données de paiement) est régi par notre <Link href="/fr/politique-confidentialite" style={{ color: COLOR }}>Politique de confidentialité</Link>, conforme au Règlement Général sur la Protection des Données (RGPD) et à la loi française Informatique et Libertés.</p>,
  },
  {
    title: "Réclamation et médiation",
    body: (
      <>
        <p>Toute réclamation doit être adressée par email à <strong>hamza@gostrawberryprod.com</strong>. Le Prestataire s&apos;engage à y répondre sous quinze (15) jours ouvrés.</p>
        <p style={{ marginTop: 12 }}>Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, le Client peut, en cas de litige non résolu amiablement, recourir gratuitement au service de médiation de la consommation auprès du médiateur compétent.</p>
        <p style={{ marginTop: 12 }}>Le Client peut également utiliser la plateforme européenne de règlement en ligne des litiges (ODR) : <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: COLOR }}>ec.europa.eu/consumers/odr</a></p>
      </>
    ),
  },
  {
    title: "Loi applicable et juridiction compétente",
    body: (
      <>
        <p>Les présentes CGV sont régies par le droit français.</p>
        <p style={{ marginTop: 12 }}>En cas de litige, et à défaut d&apos;accord amiable, les <strong>tribunaux français de Paris</strong> seront seuls compétents, nonobstant pluralité de défendeurs ou appel en garantie.</p>
        <p style={{ marginTop: 12 }}>Pour les Clients consommateurs résidant en dehors de la France, les règles de compétence légales applicables s&apos;appliquent conformément au droit de l&apos;Union européenne.</p>
      </>
    ),
  },
  {
    title: "Version officielle et traduction",
    body: <p>La version française des présentes CGV est la seule version juridiquement opposable. Toute traduction en langue étrangère, notamment anglaise, est fournie à titre informatif et de courtoisie uniquement. En cas de divergence d&apos;interprétation entre la version française et toute autre version, la version française prévaut.</p>,
  },
]

export default function CGVPage() {

  return (
    <main style={{ background: "#0a0a0a", color: "#fff", minHeight: "100vh", fontFamily: SANS, overflow: "hidden" }}>
      <BackHomeButton />

      <div style={{ position: "fixed", top: 88, right: "clamp(1.5rem,4vw,4rem)", zIndex: 90 }}>
        <Link href="/en/terms" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(10,10,10,0.7)", backdropFilter: "blur(12px)", borderRadius: 100, fontSize: 11, fontFamily: SANS, color: "rgba(255,255,255,0.75)", letterSpacing: "0.15em", textDecoration: "none", textTransform: "uppercase", transition: "all 0.2s" }}>
          <span style={{ color: COLOR }}>FR</span>
          <span style={{ opacity: 0.4 }}>/</span>
          <span>EN</span>
        </Link>
      </div>

      <section style={{ padding: "180px clamp(1.5rem,4vw,4rem) 80px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at top, ${GLOW} 0%, transparent 60%)`, opacity: 0.3, pointerEvents: "none" }} />
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative", transition: "all 0.8s ease" }}>
          <div style={{ display: "inline-block", padding: "8px 20px", border: `1px solid ${COLOR}`, borderRadius: 100, fontSize: 11, letterSpacing: "0.2em", color: COLOR, marginBottom: 32, textTransform: "uppercase" }}>
            Document contractuel
          </div>
          <h1 style={{ textTransform: "uppercase", fontFamily: SERIF, fontSize: "clamp(2.25rem,5vw,3.75rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.005em", marginBottom: 24 }}>
            Conditions générales <br /><span style={{ background: `linear-gradient(135deg, ${COLOR}, #2e4eff)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>de vente.</span>
          </h1>
          <p style={{ fontSize: "clamp(0.95rem,1.3vw,1.1rem)", color: "rgba(255,255,255,0.6)", maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
            Conditions applicables à toute prestation commandée auprès de Strawberry Production (Hamza El Jaouahiry, micro-entreprise).
          </p>
        </div>
      </section>

      <section style={{ padding: "60px clamp(1.5rem,4vw,4rem) 140px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", transition: "all 0.8s ease" }}>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, border: "1px solid rgba(255,255,255,0.1)", borderBottom: `1px solid ${COLOR}66`, padding: "16px 22px", marginBottom: 48 }}>
            <span style={{ fontFamily: SERIF, fontSize: 15, fontWeight: 700, color: "#fff" }}>Conditions Générales de Vente</span>
            <span style={{ fontFamily: SANS, fontSize: 10, letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Rév. 10 octobre 2026</span>
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
              Dernière mise à jour
            </div>
            <p style={{ fontFamily: SERIF, fontSize: "1.05rem", color: "rgba(255,255,255,0.85)",  margin: 0 }}>
              10 octobre 2026
            </p>
          </div>

          <div style={{ marginTop: 48, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/fr/mentions-legales" style={{ color: COLOR, fontSize: 13, fontFamily: SANS, letterSpacing: "0.05em", textDecoration: "none", borderBottom: `1px solid ${COLOR}`, paddingBottom: 2 }}>
              Mentions légales
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
