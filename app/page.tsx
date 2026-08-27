import Link from "next/link"
import { Suspense } from "react"
import { Reveal } from "@/components/reveal"
import { TeteSection } from "@/components/section"
import { Trajectoires } from "@/components/trajectoires"
import { Ascension } from "@/components/ascension"
import { Arc } from "@/components/arc"
import { OffreUnique, Garantie, Places } from "@/components/offre-unique"
import { GrilleOffres, Comparatif } from "@/components/offres"
import { Depliant } from "@/components/depliant"
import { Diagnostic } from "@/components/diagnostic"
import { Rature } from "@/components/rature"
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

   UNE IDÉE     Vos sorties ne s'additionnent pas parce qu'elles ne se racontent
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
  { essai: "Sortir plus souvent", effet: "Votre catalogue grossit, votre identité se dilue." },
  { essai: "Payer de la promo ou un pack de playlists", effet: "Des écoutes qui n'écoutent pas, et zéro auditeur récurrent." },
  { essai: "Poster tous les jours", effet: "Vous produisez du contenu au lieu de produire une œuvre." },
  { essai: "Changer de style pour ce qui marche", effet: "Vous arrivez en retard sur une vague, sans rien qui vous appartienne." },
  { essai: "Envoyer cent messages à des blogs et des labels", effet: "Personne ne répond, parce que rien ne dit qui vous êtes." },
]

const TEMPS = [
  {
    n: "01",
    nom: "DIAGNOSTIC",
    quand: "Le premier mois, puis tous les trimestres",
    texte:
      "On met votre projet à plat. Votre musique d'abord — écoutée en entier, plusieurs fois, sans complaisance. Puis votre identité : ce que votre univers promet, et ce qu'il tient réellement. Puis votre audience réelle, pas votre nombre d'abonnés. Puis vos objectifs, formulés jusqu'à ce qu'ils deviennent vérifiables. Et enfin vos blocages, y compris ceux que vous n'osez pas nommer.",
    sortie: "Un document écrit : où en est votre projet, et ce qui le retient.",
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
      "Vous créez. Vous sortez. Vous postez. Vous expérimentez. Ce travail-là ne change pas et ne doit pas changer : c'est le vôtre. La seule différence, c'est que les décisions importantes passent par un regard extérieur avant d'être prises, pas après.",
    sortie: "Des retours écrits sur ce que vous produisez, au fil du mois.",
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

const CE_QUE_VOUS_OBTENEZ = [
  {
    n: "01",
    titre: "Vous savez enfin où vous en êtes vraiment",
    texte:
      "Vos morceaux écoutés en entier, plusieurs fois, par quelqu'un dont c'est le métier de faire du son et de construire des identités. Pas un « c'est propre » d'ami bienveillant : ce qui fonctionne, ce qui ne fonctionne pas, et ce qui rendrait le morceau meilleur.",
    gain: "Le doute cesse d'être permanent. Il devient une question à laquelle on répond.",
  },
  {
    n: "02",
    titre: "Vous savez quoi sortir, et dans quel ordre",
    texte:
      "Quel titre en single, avec quel concept, à quel moment, suivi de quoi. Chaque sortie est placée pour préparer la suivante au lieu de vivre trois semaines et de mourir.",
    gain: "Vos sorties arrêtent de s'annuler entre elles et commencent à s'additionner.",
  },
  {
    n: "03",
    titre: "Vous savez ce que vous doissez arrêter",
    texte:
      "C'est la partie que personne ne vous donnera jamais gratuitement. Trois priorités par mois, et la liste explicite de tout ce qu'on abandonne — y compris de bonnes idées qui ne sont simplement pas prioritaires maintenant.",
    gain: "Vous récupèrez les heures que l'agitation vous prenait.",
  },
  {
    n: "04",
    titre: "Vous n'êtes plus seul au moment de décider",
    texte:
      "Une proposition reçue, un featuring, un changement d'image, une opportunité qui a l'air belle. Vous l'envoies, vous avez un avis argumenté avant de répondre — pas six mois après, quand c'est déjà fait.",
    gain: "Les mauvaises décisions coûtent des années. Celles-là, vous ne les prendraez pas.",
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
    r: "C'est le prix d'une journée de studio, ou de deux campagnes de promo qui ne donneront rien. La différence : une journée de studio produit un fichier, un cycle produit une direction — qui rend utiles toutes les journées de studio suivantes. Si le budget n'y est vraiment pas, commencez à 149 € : mieux vaut un niveau tenu six mois qu'un niveau abandonné au deuxième.",
  },
  {
    q: "« Je peux avoir ces conseils gratuitement sur YouTube. »",
    r: "Vous pouvez avoir des conseils généraux sur l'industrie, et certains sont excellents. Ce que vous ne pouvez pas avoir, c'est quelqu'un qui écoute vos quatorze morceaux, regarde vos visuels, connaît votre stade exact et vous dit lequel sortir. Un conseil général s'applique à tout le monde ; c'est précisément pour ça qu'il ne change la trajectoire de personne.",
  },
  {
    q: "« Et si vous ne comprendez pas mon style ? »",
    r: "Dites-le-moi dans votre candidature. Je préfère refuser un projet que je ne saurais pas servir plutôt que d'encaisser trois mois avant qu'on s'en aperçoive tous les deux. Ce qui se transpose d'un style à l'autre, ce n'est pas le goût — c'est l'architecture : positionnement, cohérence, séquence de sorties.",
  },
  {
    q: "« Je n'ai pas assez avancé pour mériter ça. »",
    r: "C'est l'objection la plus fréquente et la plus coûteuse. Attendre d'avoir « réussi » pour agir en professionnel, c'est exactement ce qui fait perdre des années. Il vous faut un projet déjà commencé et une vraie envie de construire. Pas un contrat, pas cent mille abonnés.",
  },
  {
    q: "« Et si ça ne marche pas ? »",
    r: "Je ne peux garantir ni streams, ni playlist, ni signature — personne ne le peut, et quiconque vous le promet vous vend autre chose. Ce que je garantis, c'est le premier cycle : s'il ne vous apprend rien sur votre projet, vous êtes remboursé intégralement.",
  },
]

const FAQ = [
  {
    q: "Comment se passe concrètement un mois ?",
    r: "Une visio de soixante minutes en début de mois pour fixer le cap, vos envois de morceaux et de visuels au fil des semaines avec mes retours écrits, une seconde visio pour arbitrer les décisions en cours, et un bilan écrit en fin de mois qui pose le cap du suivant.",
  },
  {
    q: "Est-ce que vous prenez un pourcentage sur ma carrière ?",
    r: "Jamais. Abonnement mensuel fixe, vous gardez 100 % de vos droits, de vos revenus et de vos décisions. C'est aussi la garantie que mes conseils servent votre projet et pas mes intérêts : je n'ai rien à gagner à vous pousser vers une signature.",
  },
  {
    q: "Est-ce que vous produisez ou vous composez pour moi ?",
    r: "Non. Je conseille, vous créez. C'est une frontière que je tiens : un conseiller qui met les mains dans le son finit par vous fabriquer sa musique à lui, et votre identité disparaît.",
  },
  {
    q: "Mes morceaux inédits sont-ils protégés ?",
    r: "Tout ce que vous envoyez est confidentiel et n'est partagé avec personne. Je ne revendique aucun droit, aucune part d'édition et aucun crédit sur ce que vous produisez pendant l'accompagnement.",
  },
  {
    q: "Puis-je arrêter quand je veux ?",
    r: "Oui, au mois, sans justification. Soyez lucide cependant : un mois donne un diagnostic, pas une trajectoire. L'écart se mesure sur trois cycles.",
  },
  {
    q: "Pourquoi seulement six artistes ?",
    r: "Parce qu'au-delà, je ne peux plus écouter chaque projet en profondeur — et un conseil donné sans écoute réelle ne vaut rien. C'est une limite d'attention, pas une mise en scène commerciale.",
  },
]

const POUR = [
  "Vous êtes artiste indépendant et vous avez déjà commencé à sortir.",
  "Vous voulez progresser sérieusement, pas être rassuré.",
  "Vous acceptez les critiques honnêtes sur votre travail.",
  "Vous êtes prêt à exécuter entre deux sessions.",
  "Vous n'avez pas encore les moyens — ni le besoin — d'une équipe complète.",
]

const PAS_POUR = [
  "Vous cherchez une garantie de viralité.",
  "Vous cherchez un contrat de label ou une playlist promise.",
  "Vous voulez quelqu'un qui fasse le travail à votre place.",
  "Vous voulez qu'on vous dise que votre projet est déjà parfait.",
  "Vous cherchez des contacts à acheter plutôt qu'une trajectoire à construire.",
]

export default function Accueil() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section data-section data-label="MOMENTUM" className="relative flex min-h-[92vh] items-center overflow-hidden pt-[68px]">
        <div className="pointer-events-none absolute inset-0">
          <Ascension className="h-full w-full" />
        </div>
        {/* Le texte s'écrit à gauche, la montée explose à droite : ce voile
            assombrit le tiers gauche pour garantir le contraste du titre sans
            rien retirer au graphique là où il compte. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #08090b 0%, rgba(8,9,11,0.92) 34%, rgba(8,9,11,0.55) 62%, rgba(8,9,11,0.15) 100%)",
          }}
        />

        <div className="px-marge cadre relative z-10 py-20">
          <Reveal>
            <p className="index">CONSEIL STRATÉGIQUE POUR ARTISTES INDÉPENDANTS · PARIS</p>
          </Reveal>

          <Reveal delay={110}>
            <h1 className="titre-1 mt-8 max-w-[16ch] text-balance">
              Vous ne manquez pas de travail.
              <br />
              Vous manquez <em className="not-italic text-cobalt-vif">d&rsquo;élan</em>.
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="chapo mt-9 max-w-[54ch]">
              Douze titres sortis cette année, et décembre ressemble à janvier. Ce n&rsquo;est ni votre niveau, ni
              l&rsquo;algorithme, ni votre budget&nbsp;: c&rsquo;est que vos sorties ne se relient à rien.{" "}
              <span className="text-craie">Sept titres isolés font sept fois un.</span> Chaînés, ils font tout autre
              chose — et c&rsquo;est la seule différence entre les deux courbes derrière ce texte.
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
      <section className="bloc border-t border-filet" data-section data-label="LA SCÈNE">
        <div className="cadre-md">
          <TeteSection index="01" etiquette="VOUS CONNAISSEZ CE MOMENT" titre="Deux heures du matin." />
          <Reveal>
            <div className="space-y-6">
              <p className="corps text-[16.5px]">
                Vous réécoutez le même mix pour la trentième fois et vous ne savez plus si le morceau est bon ou si vous êtes
                simplement fatigué. Vous ouvrez Instagram deux minutes. Un type que vous trouvez moins bon que vous vient de
                passer les cent mille écoutes. Vous refermez.
              </p>
              <p className="corps text-[16.5px]">Vous vous dites que vous allez travailler plus.</p>
              <p className="verdict mt-10">Vous travaillez déjà plus que lui.</p>
              <p className="corps mt-10 text-[16.5px]">
                Le vrai coût de l&rsquo;indépendance, ce n&rsquo;est pas l&rsquo;argent. C&rsquo;est le nombre de
                décisions qui engagent des mois de votre vie et que vous prenez seul, à deux heures du matin, sans personne à
                qui les soumettre.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 02 · FAUSSE SOLUTION ═══════════════ */}
      <section className="bloc-serre border-t border-filet bg-encre-haute" data-section data-label="CE QUE VOUS AVEZ DÉJÀ ESSAYÉ">
        <div className="cadre">
          <TeteSection
            index="02"
            etiquette="CE QUE VOUS AVEZ DÉJÀ ESSAYÉ"
            titre="Tout le monde vous dit la même chose : travaille plus, sors plus, poste plus."
            chapo="C'est le conseil le plus répandu du milieu. C'est aussi celui qui a coûté le plus d'années au plus grand nombre d'artistes talentueux."
          />
          <div className="border-t border-filet">
            {FAUSSES_SOLUTIONS.map((f, i) => (
              <Rature key={f.essai} index={i} essai={f.essai} effet={f.effet} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SILENCE ───
          Cette phrase était le dernier paragraphe de la section précédente,
          noyée dans le corps de texte. Elle porte le basculement de tout
          l'argument : elle mérite un écran à elle seule. */}
      <section className="silence border-t border-filet">
        <div className="cadre">
          <Reveal>
            <p className="phrase max-w-[22ch] text-balance">
              Aucune de ces actions n&rsquo;est stupide.
            </p>
            <p className="phrase mt-6 max-w-[26ch] text-balance text-cobalt-vif">
              Elles échouent toutes pour la même raison.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 03 · LA VRAIE CAUSE ═══════════════ */}
      <section className="bloc border-t border-filet" data-section data-label="LA VRAIE CAUSE">
        <div className="cadre">
          <TeteSection
            index="03"
            etiquette="LA VRAIE CAUSE"
            titre={
              <>
                Vos sorties ne s&rsquo;additionnent pas
                <br className="hidden md:block" /> parce qu&rsquo;elles ne{" "}
                <em className="not-italic text-cobalt-vif">se racontent</em> pas.
              </>
            }
          />
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="space-y-6">
                <p className="corps text-[16px]">
                  Un auditeur qui découvre votre titre aujourd&rsquo;hui n&rsquo;a aucune raison de chercher le suivant.
                  Rien ne le relie au précédent&nbsp;: ni le monde, ni l&rsquo;image, ni la promesse. Chaque sortie
                  repart donc de zéro, avec la même audience à reconquérir.
                </p>
                <p className="corps text-[16px]">
                  C&rsquo;est arithmétique&nbsp;: sept titres isolés font sept fois un. Sept titres chaînés font autre
                  chose — chacun hérite de l&rsquo;audience, de l&rsquo;identité et de l&rsquo;attente du précédent.
                  Même travail, même talent, même nombre d&rsquo;heures.
                </p>
                <p className="verdict mt-9">
                  Ce qui vous manque n&rsquo;est pas un morceau de plus. C&rsquo;est ce qui relie ceux que vous avez déjà.
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

      
      {/* ═══════════════ 04 · LE DIAGNOSTIC ═══════════════ */}
      <section
        id="diagnostic"
        data-section
        data-label="LE DIAGNOSTIC"
        className="ancre bloc-ample border-t border-filet bg-encre-haute"
      >
        <div className="cadre-md">
          <TeteSection
            index="04"
            etiquette="AVANT D'ALLER PLUS LOIN"
            titre="Où en es-vous vraiment ?"
            chapo="Cinq questions, deux minutes, aucune adresse e-mail. Aucune ne porte sur votre nombre de sorties : sortir beaucoup n'est pas un signe de santé, c'est souvent le symptôme."
          />
          <Reveal>
            <Diagnostic />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 05 · LE MÉCANISME ═══════════════ */}
      <section id="methode" className="ancre bloc border-t border-filet" data-section data-label="LE MÉCANISME">
        <div className="cadre">
          <TeteSection
            index="05"
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
                  Concrètement&nbsp;: on définit d&rsquo;abord ce que votre projet promet — en une phrase que vous pouvez dire
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

      {/* ═══════════════ 06 · LE CYCLE ═══════════════ */}
      <section className="bloc border-t border-filet bg-encre-haute" data-section data-label="LE CYCLE MENSUEL">
        <div className="cadre-md">
          <TeteSection
            index="06"
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
                  <p className="mt-5 border-l-3 border-cobalt-vif pl-5 text-[1.02rem] font-semibold leading-snug text-craie-80">
                    {t.sortie}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════ 07 · CE QUE TU OBTIENS ═══════════════ */}
      <section className="bloc border-t border-filet" data-section data-label="CE QUE VOUS OBTENEZ">
        <div className="cadre">
          <TeteSection
            index="07"
            etiquette="CE QUE VOUS OBTENEZ"
            titre="Quatre choses que vous ne pouvez pas vous donner à vous-même."
            chapo="Aucune ne remplace votre travail. Toutes déterminent ce que votre travail produit."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {CE_QUE_VOUS_OBTENEZ.map((a, i) => (
              <Reveal key={a.n} delay={i * 90} className="h-full">
                <article className="carte flex h-full flex-col">
                  <span className="index">{a.n}</span>
                  <h3 className="titre-3 mt-4">{a.titre}</h3>
                  <p className="corps mt-4">{a.texte}</p>
                  <p className="mt-auto pt-6 text-[0.98rem] font-semibold leading-snug text-cobalt-vif">{a.gain}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 08 · PREUVE ═══════════════ */}
      <section id="qui" className="ancre bloc border-t border-filet bg-encre-haute" data-section data-label="QUI TE PARLE">
        <div className="cadre">
          <TeteSection
            index="08"
            etiquette="POURQUOI M'ÉCOUTER, MOI"
            titre="Un artiste comprend votre art. Un stratège comprend votre marché."
            chapo="Il vous en faut un qui fasse les deux. C'est la seule raison valable de me confier un regard sur votre carrière, et c'est la seule que je revendique."
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
                  Autrement dit&nbsp;: je connais votre problème de l&rsquo;intérieur parce que je le vis, et sa solution
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
                  ouvrages. Et, si vous candidatez, un retour écrit sur l&rsquo;un de vos morceaux avant que vous payez quoi
                  que ce soit. Vous jugerez la qualité du conseil sur pièce.
                </p>
                <p className="verdict mt-9" style={{ fontSize: "1.15rem" }}>
                  Très peu de conseillers artistiques ont déjà eu peur d&rsquo;appuyer sur « publier ».
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── SILENCE ───
          Posé juste avant le prix. Le lecteur vient de lire qui je suis ; il
          doit traverser une phrase nue avant de voir un chiffre. */}
      <section className="silence border-t border-filet">
        <div className="cadre">
          <Reveal>
            <p className="phrase max-w-[24ch] text-balance">
              Vous n&rsquo;avez pas besoin qu&rsquo;on vous découvre.
            </p>
            <p className="phrase mt-6 max-w-[24ch] text-balance text-cobalt-vif">
              Vous avez besoin d&rsquo;une direction.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 09 · L'OFFRE ═══════════════ */}
      <section id="offres" className="ancre bloc-ample border-t border-filet" data-section data-label="L'OFFRE">
        <div className="cadre">
          <TeteSection
            index="09"
            etiquette="L'OFFRE"
            titre="Un manager coûte 2 000 € par mois. Et il ne prend pas les artistes à votre stade."
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

      {/* ═══════════════ 10 · OBJECTIONS ═══════════════ */}
      <section className="bloc border-t border-filet bg-encre-haute" data-section data-label="LES OBJECTIONS">
        <div className="cadre-md">
          <TeteSection
            index="10"
            etiquette="CE QUE VOUS ÊTES EN TRAIN DE VOUS DIRE"
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

      {/* ═══════════════ 11 · POUR QUI ═══════════════ */}
      <section className="bloc border-t border-filet" data-section data-label="POUR QUI">
        <div className="cadre">
          <TeteSection
            index="11"
            etiquette="POUR QUI"
            titre="Vous n'avez pas besoin d'être connu. Vous avez besoin de vouloir construire."
          />
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className="index mb-7">VOUS ÊTES AU BON ENDROIT SI</p>
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
              <p className="etiquette mb-7">CE N&rsquo;EST PAS POUR VOUS SI</p>
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
              Je ne peux pas garantir votre succès. Personne ne le peut, et quiconque vous dit le contraire vous vend quelque
              chose. Ce que je peux faire&nbsp;: t&rsquo;aider à prendre de meilleures décisions, à mieux présenter votre
              travail, et à augmenter la qualité de votre trajectoire.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 12 · FAQ ═══════════════ */}
      <section className="bloc border-t border-filet bg-encre-haute" data-section data-label="QUESTIONS FRÉQUENTES">
        <div className="cadre-md">
          <TeteSection index="12" etiquette="QUESTIONS FRÉQUENTES" titre="Le reste, en clair." />
          <Reveal>
            <Faq items={FAQ} />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 13 · L'ACTION ═══════════════ */}
      <section id="candidature" data-section data-label="CANDIDATURE" className="ancre bloc-ample border-t border-filet bg-encre-haute">
        <div className="cadre grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="index">13 — CANDIDATURE</p>
              <h2 className="titre-2 mt-6 text-balance">
                Envoyez-moi un morceau. Je vous dis ce que j&rsquo;en pense.
              </h2>
              <p className="corps mt-7 max-w-md">
                Gratuitement, avant toute question d&rsquo;argent. C&rsquo;est la seule façon honnête de juger un
                conseiller&nbsp;: sur la qualité de son conseil, pas sur celle de sa page de vente.
              </p>
              <p className="corps mt-5 max-w-md">
                Je n&rsquo;accompagne que {CAPACITE} artistes à la fois. Ce formulaire n&rsquo;est pas une formalité —
                c&rsquo;est déjà le début du diagnostic, et la qualité de vos réponses détermine celle de la mienne.
              </p>
              <div className="mt-8">
                <Places />
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-12 border-t border-filet">
                {[
                  ["01", "Vous candidatez", "Quelques questions honnêtes. Comptez huit minutes si vous répondez sérieusement."],
                  ["02", "Vous recevez un retour écrit", "J'écoute le morceau que vous m'envoyez, en entier, et je vous écris ce que j'en pense. Gratuitement, que la suite se fasse ou non."],
                  ["03", "On décide", "Si le profil correspond, un appel pour poser votre arc et le cap du premier mois. Sinon, je vous dis pourquoi."],
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
            <h2 className="titre-2 text-balance">Dans un an, vous aurez sorti une dizaine de titres de plus.</h2>
            <p className="chapo mx-auto mt-7 max-w-xl text-balance">
              La seule question, c&rsquo;est de savoir s&rsquo;ils formeront un catalogue ou une trajectoire.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="#candidature" className="bouton bouton-plein">
                Candidater ↑
              </a>
            </div>
            <p className="etiquette mt-8">
              Réponse sous 72 h · Sans engagement · Premier cycle remboursé si vous n&rsquo;en tires rien
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
