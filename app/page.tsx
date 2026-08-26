import Link from "next/link"
import { Suspense } from "react"
import { Reveal } from "@/components/reveal"
import { TeteSection } from "@/components/section"
import { Trajectoires } from "@/components/trajectoires"
import { Arc } from "@/components/arc"
import { OffreUnique, Garantie, Places } from "@/components/offre-unique"
import { GrilleOffres, Comparatif } from "@/components/offres"
import { Depliant } from "@/components/depliant"
import { Faq } from "@/components/faq"
import { Formulaire } from "@/components/formulaire"
import { PROPOSITION, CONTACT, CAPACITE } from "@/lib/config"

/* ===========================================================================
   PAGE UNIQUE
   ===========================================================================
   Tout le site tient ici. Les anciennes routes (/offres, /methode, /a-propos,
   /candidature) redirigent vers les ancres correspondantes — voir
   next.config.mjs — pour que rien de déjà partagé ne tombe en 404.

   UN LECTEUR   Un artiste indépendant de 22 à 30 ans, qui sort depuis deux ou
                trois ans, fait tout lui-même, a déjà payé de la promo qui n'a
                rien donné. Sa peur : avoir trente-deux ans et se dire qu'il a
                perdu dix ans.

   UNE IDÉE     Tes sorties ne s'additionnent pas parce qu'elles ne se racontent
                pas. Un arc les relie ; sans arc, chaque titre repart de zéro.

   UNE OFFRE    ARTIST DEVELOPMENT, 299 €/mois — seule visible par défaut. Les
                deux autres niveaux sont sur la page, repliés derrière un clic :
                présents pour qui les cherche, invisibles pour qui est déjà
                convaincu.

   UNE ACTION   Candidater. Tous les boutons de la page mènent au même
                formulaire, en bas.

   SÉQUENCE     problème → fausse solution → vraie cause → mécanisme → cycle
                → bénéfices → preuve → offre → risque → objections → tri
                → questions → action.
   =========================================================================== */

const FAUSSES_SOLUTIONS = [
  { essai: "Sortir plus souvent", effet: "Ton catalogue grossit, ton identité se dilue." },
  { essai: "Payer de la promo ou un pack de playlists", effet: "Des écoutes qui n'écoutent pas, et zéro auditeur récurrent." },
  { essai: "Poster tous les jours", effet: "Tu produis du contenu au lieu de produire une œuvre." },
  { essai: "Changer de style pour ce qui marche", effet: "Tu arrives en retard sur une vague, sans rien qui t'appartienne." },
  { essai: "Envoyer cent messages à des blogs et des labels", effet: "Personne ne répond, parce que rien ne dit qui tu es." },
]

const TEMPS = [
  {
    n: "01",
    nom: "DIAGNOSTIC",
    quand: "Le premier mois, puis tous les trimestres",
    texte:
      "On met ton projet à plat. Ta musique d'abord — écoutée en entier, plusieurs fois, sans complaisance. Puis ton identité : ce que ton univers promet, et ce qu'il tient réellement. Puis ton audience réelle, pas ton nombre d'abonnés. Puis tes objectifs, formulés jusqu'à ce qu'ils deviennent vérifiables. Et enfin tes blocages, y compris ceux que tu n'oses pas nommer.",
    sortie: "Un document écrit : où en est ton projet, et ce qui le retient.",
  },
  {
    n: "02",
    nom: "CAP",
    quand: "Chaque début de mois",
    texte:
      "On choisit deux ou trois actions — jamais dix. La compétence rare n'est pas de trouver des idées : c'est de renoncer aux bonnes idées qui ne sont pas prioritaires maintenant. Un cap, c'est autant une liste de choses qu'on décide de ne pas faire.",
    sortie: "Trois priorités écrites, et la liste explicite de ce qu'on abandonne ce mois-ci.",
  },
  {
    n: "03",
    nom: "EXÉCUTION",
    quand: "Tout le mois",
    texte:
      "Tu crées. Tu sors. Tu postes. Tu expérimentes. Ce travail-là ne change pas et ne doit pas changer : c'est le tien. La seule différence, c'est que les décisions importantes passent par un regard extérieur avant d'être prises, pas après.",
    sortie: "Des retours écrits sur ce que tu produis, au fil du mois.",
  },
  {
    n: "04",
    nom: "CORRECTION",
    quand: "Chaque fin de mois",
    texte:
      "On regarde ce qui a fonctionné, ce qui n'a pas fonctionné, et surtout pourquoi. La plupart des artistes changent de stratégie sans jamais mesurer l'ancienne — ils confondent nouveauté et correction. Ici, on ne change que ce qu'on a compris.",
    sortie: "Un bilan écrit, et le cap du mois suivant.",
  },
]

const CE_QUE_TU_OBTIENS = [
  {
    n: "01",
    titre: "Tu sais enfin où tu en es vraiment",
    texte:
      "Tes morceaux écoutés en entier, plusieurs fois, par quelqu'un dont c'est le métier de faire du son et de construire des identités. Pas un « c'est propre » d'ami bienveillant : ce qui fonctionne, ce qui ne fonctionne pas, et ce qui rendrait le morceau meilleur.",
    gain: "Le doute cesse d'être permanent. Il devient une question à laquelle on répond.",
  },
  {
    n: "02",
    titre: "Tu sais quoi sortir, et dans quel ordre",
    texte:
      "Quel titre en single, avec quel concept, à quel moment, suivi de quoi. Chaque sortie est placée pour préparer la suivante au lieu de vivre trois semaines et de mourir.",
    gain: "Tes sorties arrêtent de s'annuler entre elles et commencent à s'additionner.",
  },
  {
    n: "03",
    titre: "Tu sais ce que tu dois arrêter",
    texte:
      "C'est la partie que personne ne te donnera jamais gratuitement. Trois priorités par mois, et la liste explicite de tout ce qu'on abandonne — y compris de bonnes idées qui ne sont simplement pas prioritaires maintenant.",
    gain: "Tu récupères les heures que l'agitation te prenait.",
  },
  {
    n: "04",
    titre: "Tu n'es plus seul au moment de décider",
    texte:
      "Une proposition reçue, un featuring, un changement d'image, une opportunité qui a l'air belle. Tu l'envoies, tu as un avis argumenté avant de répondre — pas six mois après, quand c'est déjà fait.",
    gain: "Les mauvaises décisions coûtent des années. Celles-là, tu ne les prendras pas.",
  },
]

const REPERES = [
  { annee: "2019", texte: "Premiers projets comme réalisateur et compositeur." },
  { annee: "2021", texte: "Licences Cinéma & Audiovisuel — Université Gustave Eiffel, puis Sorbonne Nouvelle." },
  { annee: "2023", texte: "Ingénieur du son en studio (Dans Le Labo)." },
  { annee: "2024", texte: "Lancement de Sinbury, univers transmédia : une ville fictive et son écosystème culturel." },
  { annee: "2025", texte: "MORI — projet musical produit et composé seul, chroniqué en Espagne, au Royaume-Uni et au Brésil." },
  { annee: "2026", texte: "Publication de « 30 Architectures — An Atlas of Narrative Patterns » et de l'essai « Le Narratif de Marque à l'Ère de l'IA »." },
]

const OBJECTIONS = [
  {
    q: "« 299 € par mois, c'est beaucoup pour moi. »",
    r: "C'est le prix d'une journée de studio, ou de deux campagnes de promo qui ne donneront rien. La différence : une journée de studio produit un fichier, un cycle produit une direction — qui rend utiles toutes les journées de studio suivantes. Si le budget n'y est vraiment pas, commence à 149 € : mieux vaut un niveau tenu six mois qu'un niveau abandonné au deuxième.",
  },
  {
    q: "« Je peux avoir ces conseils gratuitement sur YouTube. »",
    r: "Tu peux avoir des conseils généraux sur l'industrie, et certains sont excellents. Ce que tu ne peux pas avoir, c'est quelqu'un qui écoute tes quatorze morceaux, regarde tes visuels, connaît ton stade exact et te dit lequel sortir. Un conseil général s'applique à tout le monde ; c'est précisément pour ça qu'il ne change la trajectoire de personne.",
  },
  {
    q: "« Et si tu ne comprends pas mon style ? »",
    r: "Dis-le-moi dans ta candidature. Je préfère refuser un projet que je ne saurais pas servir plutôt que d'encaisser trois mois avant qu'on s'en aperçoive tous les deux. Ce qui se transpose d'un style à l'autre, ce n'est pas le goût — c'est l'architecture : positionnement, cohérence, séquence de sorties.",
  },
  {
    q: "« Je n'ai pas assez avancé pour mériter ça. »",
    r: "C'est l'objection la plus fréquente et la plus coûteuse. Attendre d'avoir « réussi » pour agir en professionnel, c'est exactement ce qui fait perdre des années. Il te faut un projet déjà commencé et une vraie envie de construire. Pas un contrat, pas cent mille abonnés.",
  },
  {
    q: "« Et si ça ne marche pas ? »",
    r: "Je ne peux garantir ni streams, ni playlist, ni signature — personne ne le peut, et quiconque te le promet te vend autre chose. Ce que je garantis, c'est le premier cycle : s'il ne t'apprend rien sur ton projet, tu es remboursé intégralement.",
  },
]

const FAQ = [
  {
    q: "Comment se passe concrètement un mois ?",
    r: "Une visio de soixante minutes en début de mois pour fixer le cap, tes envois de morceaux et de visuels au fil des semaines avec mes retours écrits, une seconde visio pour arbitrer les décisions en cours, et un bilan écrit en fin de mois qui pose le cap du suivant.",
  },
  {
    q: "Est-ce que tu prends un pourcentage sur ma carrière ?",
    r: "Jamais. Abonnement mensuel fixe, tu gardes 100 % de tes droits, de tes revenus et de tes décisions. C'est aussi la garantie que mes conseils servent ton projet et pas mes intérêts : je n'ai rien à gagner à te pousser vers une signature.",
  },
  {
    q: "Est-ce que tu produis ou tu composes pour moi ?",
    r: "Non. Je conseille, tu crées. C'est une frontière que je tiens : un conseiller qui met les mains dans le son finit par te fabriquer sa musique à lui, et ton identité disparaît.",
  },
  {
    q: "Mes morceaux inédits sont-ils protégés ?",
    r: "Tout ce que tu envoies est confidentiel et n'est partagé avec personne. Je ne revendique aucun droit, aucune part d'édition et aucun crédit sur ce que tu produis pendant l'accompagnement.",
  },
  {
    q: "Puis-je arrêter quand je veux ?",
    r: "Oui, au mois, sans justification. Sois lucide cependant : un mois donne un diagnostic, pas une trajectoire. L'écart se mesure sur trois cycles.",
  },
  {
    q: "Pourquoi seulement six artistes ?",
    r: "Parce qu'au-delà, je ne peux plus écouter chaque projet en profondeur — et un conseil donné sans écoute réelle ne vaut rien. C'est une limite d'attention, pas une mise en scène commerciale.",
  },
]

const POUR = [
  "Tu es artiste indépendant et tu as déjà commencé à sortir.",
  "Tu veux progresser sérieusement, pas être rassuré.",
  "Tu acceptes les critiques honnêtes sur ton travail.",
  "Tu es prêt à exécuter entre deux sessions.",
  "Tu n'as pas encore les moyens — ni le besoin — d'une équipe complète.",
]

const PAS_POUR = [
  "Tu cherches une garantie de viralité.",
  "Tu cherches un contrat de label ou une playlist promise.",
  "Tu veux quelqu'un qui fasse le travail à ta place.",
  "Tu veux qu'on te dise que ton projet est déjà parfait.",
  "Tu cherches des contacts à acheter plutôt qu'une trajectoire à construire.",
]

export default function Accueil() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-[68px]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.42]">
          <Trajectoires variante="fond" className="h-full w-full" />
        </div>
        {/* Pas de halo radial : un dégradé linéaire vers le bas, uniquement pour
            que les tracés se fondent dans le pied de section. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "linear-gradient(to top, #08090b 6%, transparent 60%)" }}
        />

        <div className="px-marge cadre relative z-10 py-20">
          <Reveal>
            <p className="index">CONSEIL STRATÉGIQUE POUR ARTISTES INDÉPENDANTS · PARIS</p>
          </Reveal>

          <Reveal delay={110}>
            <h1 className="titre-1 mt-8 max-w-[16ch] text-balance">
              Tu ne manques pas de travail.
              <br />
              Tu manques <em className="not-italic text-cobalt-vif">d&rsquo;élan</em>.
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="chapo mt-9 max-w-[52ch]">
              Douze titres sortis cette année. Et décembre ressemble à janvier. Ce n&rsquo;est ni ton niveau, ni
              l&rsquo;algorithme, ni ton budget&nbsp;: c&rsquo;est que tes sorties ne se relient à rien. Voici comment on
              répare ça.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-11">
              <a href="#candidature" className="bouton bouton-plein">
                Candidater ↓
              </a>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <div className="mt-10">
              <Places />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 01 · LA SCÈNE ═══════════════ */}
      <section className="bloc border-t border-filet">
        <div className="cadre-md">
          <TeteSection index="01" etiquette="TU CONNAIS CE MOMENT" titre="Deux heures du matin." />
          <Reveal>
            <div className="space-y-6">
              <p className="corps text-[16.5px]">
                Tu réécoutes le même mix pour la trentième fois et tu ne sais plus si le morceau est bon ou si tu es
                simplement fatigué. Tu ouvres Instagram deux minutes. Un type que tu trouves moins bon que toi vient de
                passer les cent mille écoutes. Tu refermes.
              </p>
              <p className="corps text-[16.5px]">Tu te dis que tu vas travailler plus.</p>
              <p className="verdict mt-10">Tu travailles déjà plus que lui.</p>
              <p className="corps mt-10 text-[16.5px]">
                Le vrai coût de l&rsquo;indépendance, ce n&rsquo;est pas l&rsquo;argent. C&rsquo;est le nombre de
                décisions qui engagent des mois de ta vie et que tu prends seul, à deux heures du matin, sans personne à
                qui les soumettre.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 02 · FAUSSE SOLUTION ═══════════════ */}
      <section className="bloc border-t border-filet bg-encre-haute">
        <div className="cadre">
          <TeteSection
            index="02"
            etiquette="CE QUE TU AS DÉJÀ ESSAYÉ"
            titre="Tout le monde te dit la même chose : travaille plus, sors plus, poste plus."
            chapo="C'est le conseil le plus répandu du milieu. C'est aussi celui qui a coûté le plus d'années au plus grand nombre d'artistes talentueux."
          />
          <div className="border-t border-filet">
            {FAUSSES_SOLUTIONS.map((f, i) => (
              <Reveal key={f.essai} delay={i * 70}>
                <div className="grid gap-2 border-b border-filet py-6 md:grid-cols-[1fr_1.25fr] md:gap-12">
                  <p className="text-[1.2rem] font-medium leading-snug text-craie-50 line-through decoration-1 decoration-craie-24">
                    {f.essai}
                  </p>
                  <p className="text-[15px] leading-relaxed text-craie-80">{f.effet}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="corps mt-12 max-w-2xl text-[16px]">
              Aucune de ces actions n&rsquo;est stupide. Elles échouent toutes pour la même raison, et cette raison
              n&rsquo;a rien à voir avec ton niveau d&rsquo;effort.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 03 · LA VRAIE CAUSE ═══════════════ */}
      <section className="bloc border-t border-filet">
        <div className="cadre">
          <TeteSection
            index="03"
            etiquette="LA VRAIE CAUSE"
            titre={
              <>
                Tes sorties ne s&rsquo;additionnent pas
                <br className="hidden md:block" /> parce qu&rsquo;elles ne{" "}
                <em className="not-italic text-cobalt-vif">se racontent</em> pas.
              </>
            }
          />
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="space-y-6">
                <p className="corps text-[16px]">
                  Un auditeur qui découvre ton titre aujourd&rsquo;hui n&rsquo;a aucune raison de chercher le suivant.
                  Rien ne le relie au précédent&nbsp;: ni le monde, ni l&rsquo;image, ni la promesse. Chaque sortie
                  repart donc de zéro, avec la même audience à reconquérir.
                </p>
                <p className="corps text-[16px]">
                  C&rsquo;est arithmétique&nbsp;: sept titres isolés font sept fois un. Sept titres chaînés font autre
                  chose — chacun hérite de l&rsquo;audience, de l&rsquo;identité et de l&rsquo;attente du précédent.
                  Même travail, même talent, même nombre d&rsquo;heures.
                </p>
                <p className="verdict mt-9">
                  Ce qui te manque n&rsquo;est pas un morceau de plus. C&rsquo;est ce qui relie ceux que tu as déjà.
                </p>
              </div>
              <figure className="carte p-4! md:p-8!">
                <Arc className="h-auto w-full" />
                <figcaption className="etiquette mt-6 border-t border-filet pt-5 leading-relaxed">
                  L&rsquo;écart entre les deux bandes n&rsquo;est pas une différence de talent. C&rsquo;est une
                  différence de liaison.
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 04 · LE MÉCANISME ═══════════════ */}
      <section id="methode" className="ancre bloc border-t border-filet bg-encre-haute">
        <div className="cadre">
          <TeteSection
            index="04"
            etiquette="LE MÉCANISME"
            titre={
              <>
                On ne travaille plus une sortie à la fois.
                <br className="hidden md:block" /> On travaille <em className="not-italic text-cobalt-vif">un arc</em>.
              </>
            }
          />

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <Reveal>
              <div className="space-y-6">
                <p className="corps text-[16px]">
                  Un arc, c&rsquo;est une suite de trois à six sorties conçues ensemble, où chacune prépare la suivante
                  et confirme la précédente. Le même principe qui fait qu&rsquo;on regarde huit épisodes
                  d&rsquo;affilée alors qu&rsquo;on n&rsquo;aurait jamais regardé huit courts-métrages sans lien.
                </p>
                <p className="corps text-[16px]">
                  Concrètement&nbsp;: on définit d&rsquo;abord ce que ton projet promet — en une phrase que tu peux dire
                  à voix haute sans avoir honte. Puis on choisit les titres qui tiennent cette promesse et
                  l&rsquo;ordre dans lequel ils la construisent. Puis, chaque mois, on exécute un maillon et on corrige
                  le suivant avec ce qu&rsquo;on vient d&rsquo;apprendre.
                </p>
                <p className="corps text-[16px]">
                  Ce n&rsquo;est ni un calendrier ni un plan de communication. Un calendrier périme au deuxième mois. Un
                  arc, lui, se corrige sans perdre sa direction — c&rsquo;est exactement pour ça qu&rsquo;il accumule au
                  lieu de se dissiper.
                </p>
                <p className="mt-9 border-l-3 border-craie pl-6 font-mono text-[13.5px] leading-relaxed text-craie-80">
                  {PROPOSITION}
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <figure className="carte p-4! md:p-7!">
                <Trajectoires variante="demo" className="h-auto w-full" />
                <figcaption className="etiquette mt-5 border-t border-filet pt-5 leading-relaxed">
                  Douze mois d&rsquo;arc tenu, comparés à douze mois de sorties isolées.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ 05 · LE CYCLE ═══════════════ */}
      <section className="bloc border-t border-filet">
        <div className="cadre-md">
          <TeteSection
            index="05"
            etiquette="LE CYCLE MENSUEL"
            titre="Quatre temps, répétés chaque mois."
            chapo="Rien de spectaculaire pris isolément — et c'est exactement le point. C'est la répétition qui crée l'élan, jamais l'intensité d'un seul mois héroïque."
          />
          {TEMPS.map((t, i) => (
            <Reveal key={t.n} delay={i * 60}>
              <article className="grid gap-6 border-t border-filet py-10 md:grid-cols-[110px_1fr] md:gap-10 md:py-12">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.2em] text-cobalt-vif">{t.n}</p>
                  <p className="etiquette mt-3 leading-relaxed">{t.quand}</p>
                </div>
                <div>
                  <h3 className="font-mono text-[13px] uppercase tracking-[0.22em] text-craie">{t.nom}</h3>
                  <p className="corps mt-4 text-[15.5px]">{t.texte}</p>
                  <p className="mt-5 border-l-3 border-craie pl-5 text-[1.02rem] font-semibold leading-snug text-craie">
                    {t.sortie}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════ 06 · CE QUE TU OBTIENS ═══════════════ */}
      <section className="bloc border-t border-filet bg-encre-haute">
        <div className="cadre">
          <TeteSection
            index="06"
            etiquette="CE QUE TU OBTIENS"
            titre="Quatre choses que tu ne peux pas te donner à toi-même."
            chapo="Aucune ne remplace ton travail. Toutes déterminent ce que ton travail produit."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {CE_QUE_TU_OBTIENS.map((a, i) => (
              <Reveal key={a.n} delay={i * 90} className="h-full">
                <article className="carte flex h-full flex-col">
                  <span className="index">{a.n}</span>
                  <h3 className="titre-3 mt-4">{a.titre}</h3>
                  <p className="corps mt-4">{a.texte}</p>
                  <p className="mt-auto pt-6 text-[0.98rem] font-semibold leading-snug text-craie">{a.gain}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 07 · PREUVE ═══════════════ */}
      <section id="qui" className="ancre bloc border-t border-filet">
        <div className="cadre">
          <TeteSection
            index="07"
            etiquette="POURQUOI M'ÉCOUTER MOI"
            titre="Un artiste comprend ton art. Un stratège comprend ton marché."
            chapo="Il t'en faut un qui fasse les deux. C'est la seule raison valable de me confier un regard sur ta carrière, et c'est la seule que je revendique."
          />

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="space-y-5">
                <p className="corps text-[15.5px]">
                  Je m&rsquo;appelle Hamza El Jaouahiry. Réalisateur et compositeur depuis 2019, formé au cinéma à
                  l&rsquo;Université Gustave Eiffel puis à la Sorbonne Nouvelle, passé par le studio comme ingénieur du
                  son. Je produis et compose mon propre projet musical, MORI, chroniqué en Espagne, au Royaume-Uni et au
                  Brésil.
                </p>
                <p className="corps text-[15.5px]">
                  Le reste de mon temps, je construis des identités de marque&nbsp;: je dirige Strawberry Production,
                  studio de narration de marque pour fondateurs, et j&rsquo;ai publié en 2026 deux ouvrages sur le récit
                  de marque, dont un atlas de trente architectures narratives. Je bâtis aussi depuis 2024 un univers
                  transmédia, Sinbury.
                </p>
                <p className="corps text-[15.5px]">
                  Autrement dit&nbsp;: je connais ton problème de l&rsquo;intérieur parce que je le vis, et sa solution
                  de l&rsquo;extérieur parce que c&rsquo;est mon métier.
                </p>
                <div className="mt-9 border-t border-filet">
                  {REPERES.map((r) => (
                    <div key={r.annee} className="grid gap-2 border-b border-filet py-4 md:grid-cols-[92px_1fr] md:gap-6">
                      <p className="font-mono text-[12px] tracking-[0.16em] text-cobalt-vif">{r.annee}</p>
                      <p className="text-[14px] leading-relaxed text-craie-65">{r.texte}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="carte h-full">
                <p className="etiquette">CE QUE JE NE PEUX PAS TE MONTRER</p>
                <p className="corps mt-4 text-[14.5px]">
                  Des témoignages clients&nbsp;: MOMENTUM est jeune et je préfère une page vide à des avis fabriqués.
                  Quand les premiers arcs auront un an, ils seront ici, avec des chiffres vérifiables et des noms.
                </p>
                <p className="etiquette mt-9">CE QUE JE PEUX TE MONTRER</p>
                <p className="corps mt-4 text-[14.5px]">
                  Mon propre travail — un projet musical qui a passé les frontières sans label, un studio de marque, deux
                  ouvrages. Et, si tu candidates, un retour écrit sur l&rsquo;un de tes morceaux avant que tu paies quoi
                  que ce soit. Tu jugeras la qualité du conseil sur pièce.
                </p>
                <p className="verdict mt-9" style={{ fontSize: "1.15rem" }}>
                  Très peu de conseillers artistiques ont déjà eu peur d&rsquo;appuyer sur « publier ».
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ 08 · L'OFFRE ═══════════════ */}
      <section id="offres" className="ancre bloc border-t border-filet bg-encre-haute">
        <div className="cadre">
          <TeteSection
            index="08"
            etiquette="L'OFFRE"
            titre="Un manager coûte 2 000 € par mois. Et il ne prend pas les artistes à ton stade."
            chapo="Entre « je fais tout tout seul » et « j'ai une équipe complète », il existe un niveau intermédiaire. C'est celui-là."
          />
          <OffreUnique />
          <Reveal delay={150}>
            <div className="mt-5">
              <Garantie />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-5">
              <Depliant
                libelle="Voir les trois niveaux et le comparatif ligne par ligne"
                libelleOuvert="Replier les trois niveaux"
              >
                <GrilleOffres />
                <div className="mt-10">
                  <Comparatif />
                </div>
              </Depliant>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 09 · OBJECTIONS ═══════════════ */}
      <section className="bloc border-t border-filet">
        <div className="cadre-md">
          <TeteSection
            index="09"
            etiquette="CE QUE TU ES EN TRAIN DE TE DIRE"
            titre="Les cinq objections, dans l'ordre où elles arrivent."
          />
          <div className="space-y-11">
            {OBJECTIONS.map((o, i) => (
              <Reveal key={o.q} delay={i * 80}>
                <div>
                  <p className="text-[1.3rem] font-bold leading-snug text-craie md:text-[1.5rem]">{o.q}</p>
                  <p className="corps mt-4 max-w-2xl">{o.r}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 10 · POUR QUI ═══════════════ */}
      <section className="bloc border-t border-filet bg-encre-haute">
        <div className="cadre">
          <TeteSection
            index="10"
            etiquette="POUR QUI"
            titre="Tu n'as pas besoin d'être connu. Tu as besoin de vouloir construire."
          />
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className="index mb-7">TU ES AU BON ENDROIT SI</p>
              <ul className="space-y-5">
                {POUR.map((x) => (
                  <li key={x} className="flex gap-4 text-[15px] leading-relaxed text-craie-80">
                    <span aria-hidden className="mt-[11px] h-px w-3.5 shrink-0 bg-cobalt-vif" />
                    {x}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <p className="etiquette mb-7">CE N&rsquo;EST PAS POUR TOI SI</p>
              <ul className="space-y-5">
                {PAS_POUR.map((x) => (
                  <li key={x} className="flex gap-4 text-[15px] leading-relaxed text-craie-38">
                    <span aria-hidden className="mt-[11px] h-px w-3.5 shrink-0 bg-craie-24" />
                    {x}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="corps mt-14 max-w-2xl">
              Je ne peux pas garantir ton succès. Personne ne le peut, et quiconque te dit le contraire te vend quelque
              chose. Ce que je peux faire&nbsp;: t&rsquo;aider à prendre de meilleures décisions, à mieux présenter ton
              travail, et à augmenter la qualité de ta trajectoire.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 11 · FAQ ═══════════════ */}
      <section className="bloc border-t border-filet">
        <div className="cadre-md">
          <TeteSection index="11" etiquette="QUESTIONS FRÉQUENTES" titre="Le reste, en clair." />
          <Reveal>
            <Faq items={FAQ} />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 12 · L'ACTION ═══════════════ */}
      <section id="candidature" className="ancre bloc border-t border-filet bg-encre-haute">
        <div className="cadre grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="index">12 — CANDIDATURE</p>
              <h2 className="titre-2 mt-6 text-balance">
                Envoie-moi un morceau. Je te dis ce que j&rsquo;en pense.
              </h2>
              <p className="corps mt-7 max-w-md">
                Gratuitement, avant toute question d&rsquo;argent. C&rsquo;est la seule façon honnête de juger un
                conseiller&nbsp;: sur la qualité de son conseil, pas sur celle de sa page de vente.
              </p>
              <p className="corps mt-5 max-w-md">
                Je n&rsquo;accompagne que {CAPACITE} artistes à la fois. Ce formulaire n&rsquo;est pas une formalité —
                c&rsquo;est déjà le début du diagnostic, et la qualité de tes réponses détermine celle de la mienne.
              </p>
              <div className="mt-8">
                <Places />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-12 border-t border-filet">
                {[
                  ["01", "Tu candidates", "Quelques questions honnêtes. Compte huit minutes si tu réponds sérieusement."],
                  ["02", "Tu reçois un retour écrit", "J'écoute le morceau que tu m'envoies, en entier, et je t'écris ce que j'en pense. Gratuitement, que la suite se fasse ou non."],
                  ["03", "On décide", "Si le profil correspond, un appel pour poser ton arc et le cap du premier mois. Sinon, je te dis pourquoi."],
                ].map(([n, titre, texte]) => (
                  <div key={n} className="grid grid-cols-[42px_1fr] gap-4 border-b border-filet py-6">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-cobalt-vif">{n}</span>
                    <div>
                      <p className="text-[14.5px] font-semibold text-craie">{titre}</p>
                      <p className="corps mt-1.5 text-[13.5px]">{texte}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <p className="etiquette mt-10 leading-relaxed">
                Une question avant de candidater&nbsp;?<br />
                <a href={`mailto:${CONTACT.email}`} className="text-craie transition-colors hover:text-cobalt-vif">
                  {CONTACT.email}
                </a>
              </p>
            </Reveal>
          </div>

          <Reveal delay={90}>
            <div className="relative">
              <Suspense fallback={<p className="etiquette">Chargement du formulaire…</p>}>
                <Formulaire />
              </Suspense>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ CLÔTURE ═══════════════ */}
      <section className="bloc border-t border-filet">
        <div className="cadre-md text-center">
          <Reveal>
            <h2 className="titre-2 text-balance">Dans un an, tu auras sorti une dizaine de titres de plus.</h2>
            <p className="chapo mx-auto mt-7 max-w-xl text-balance">
              La seule question, c&rsquo;est de savoir s&rsquo;ils formeront un catalogue ou une trajectoire.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="#candidature" className="bouton bouton-plein">
                Candidater ↑
              </a>
            </div>
            <p className="etiquette mt-8">
              Réponse sous 72 h · Sans engagement · Premier cycle remboursé si tu n&rsquo;en tires rien
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
