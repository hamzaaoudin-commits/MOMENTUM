import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { TeteSection } from "@/components/section"
import { Trajectoires } from "@/components/trajectoires"
import { GrilleOffres } from "@/components/offres"
import { Faq } from "@/components/faq"
import { BandeCta } from "@/components/bande-cta"
import { CAPACITE } from "@/lib/config"

/* ===========================================================================
   PAGE D'ACCUEIL
   ===========================================================================
   Une page, un lecteur, une offre, une action. La page se lit dans l'ordre et
   fait une seule démonstration :

     le problème n'est pas ton niveau de travail → c'est ton absence de cap
     → un cap ne se trouve pas seul → voilà ce que ça donne, mois par mois
     → voilà ce que ça coûte → voilà qui te le dit → candidate.
   =========================================================================== */

const QUESTIONS = [
  "Quel morceau sortir ?",
  "Est-ce que cette direction artistique est la bonne ?",
  "Qu'est-ce que je devrais publier cette semaine ?",
  "Qui contacter, et avec quoi ?",
  "Est-ce que cette opportunité vaut mon temps ?",
  "Est-ce que j'avance… ou est-ce que je m'agite ?",
]

const APPORTS = [
  {
    n: "01",
    titre: "Un regard honnête sur ton art",
    texte:
      "Quand tu es seul avec ton projet, l'objectivité est mécaniquement impossible : tu as entendu ton morceau trois cents fois, tu n'entends plus ce qu'un auditeur entend à la première écoute. Morceaux, textes, EP, clips, pochettes, contenus, direction artistique — je te dis ce qui fonctionne, ce qui ne fonctionne pas, et ce qui rendrait le projet meilleur.",
    note: "Je ne suis pas là pour te dire que tout est génial.",
  },
  {
    n: "02",
    titre: "Une vraie stratégie de carrière",
    texte:
      "Faire de bons morceaux ne suffit pas : il faut savoir où tu vas. On travaille ton positionnement (pourquoi se souvenir de toi plutôt que d'un autre), ton identité (ce qui rend ton univers reconnaissable en trois secondes), tes sorties (quel single, quel concept, quel rythme), ton contenu, et l'étape suivante de ta carrière.",
    note: "Et surtout : ce que tu dois arrêter de faire.",
  },
  {
    n: "03",
    titre: "Des opportunités qui font sens",
    texte:
      "Tu n'as pas besoin d'une liste de 200 liens. Tu as besoin de trois bonnes opportunités au bon moment. Médias, playlists, festivals, scènes, résidences, appels à projets, collaborations, producteurs, labels, marques, projets audiovisuels — filtrés pour ton profil et ton niveau réel, pas pour l'artiste que tu seras dans trois ans.",
    note: "Et surtout : comment t'y présenter correctement.",
  },
  {
    n: "04",
    titre: "Un cerveau extérieur",
    texte:
      "Une idée importante avant de la lancer, une proposition reçue avant de répondre, un changement d'image avant de l'annoncer. Tu restes le créateur, tu gardes le contrôle total sur ton art — tu n'es simplement plus obligé de tout décider seul, dans ta chambre, à deux heures du matin.",
    note: "Le doute n'est pas un problème. Le doute sans interlocuteur, si.",
  },
]

const VERDICTS = [
  "Ce morceau est bon. Mais ce n'est pas celui que je sortirais maintenant.",
  "Cette opportunité est intéressante. Celle-là, laisse tomber.",
  "Ton identité commence à fonctionner. Maintenant, allons plus loin.",
  "Tu n'as pas besoin de travailler plus. Tu as besoin de travailler sur autre chose.",
]

const CYCLE = [
  {
    n: "01",
    nom: "DIAGNOSTIC",
    texte:
      "On comprend ton projet en profondeur : ta musique, ton identité, ton audience réelle, ton niveau, tes objectifs et surtout tes blocages. Pas un questionnaire — une vraie mise à plat.",
  },
  {
    n: "02",
    nom: "CAP",
    texte:
      "On identifie les deux ou trois actions susceptibles d'avoir le plus d'impact ce mois-ci, et on écarte tout le reste. Un cap, c'est autant ce qu'on décide de ne pas faire.",
  },
  {
    n: "03",
    nom: "EXÉCUTION",
    texte:
      "Tu crées. Tu sors. Tu expérimentes. C'est ton travail et il ne change pas. La différence : les décisions importantes passent par un regard extérieur avant d'être prises.",
  },
  {
    n: "04",
    nom: "CORRECTION",
    texte:
      "Chaque fin de mois, on regarde ce qui a fonctionné, ce qui n'a pas fonctionné, et ce qu'on change. Pas de plan figé pendant six mois : la stratégie évolue avec le projet.",
  },
]

const AVANT = [
  "Tu avances au feeling.",
  "Tu changes de direction tous les deux mois.",
  "Tu doutes de tes décisions après les avoir prises.",
  "Tu travailles beaucoup sans savoir quoi prioriser.",
  "Tu vois passer des opportunités sans savoir lesquelles saisir.",
]

const APRES = [
  "Tu sais ce que tu construis, et pourquoi.",
  "Ta direction tient dans une phrase que tu peux dire à voix haute.",
  "Tu sais quelles sorties méritent ton énergie.",
  "Tu sais quoi faire ce mois-ci, en trois priorités.",
  "Tu construis une carrière volontairement, au lieu d'espérer qu'elle arrive.",
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

const FAQ = [
  {
    q: "Est-ce que tu acceptes tous les artistes ?",
    r: `Non, et c'est volontaire : je n'accompagne que ${CAPACITE} artistes à la fois. Je privilégie les artistes indépendants, émergents ou intermédiaires, qui ont déjà commencé à sortir et une réelle volonté de construire. Si ton profil ne correspond pas au moment où tu candidates, je te le dis franchement plutôt que de prendre ton argent.`,
  },
  {
    q: "Est-ce que tu écoutes vraiment mes morceaux ?",
    r: "Oui, en entier, plusieurs fois, et le retour est écrit. C'est le cœur de l'accompagnement : sans écoute réelle, un conseil sur ta carrière n'est qu'une opinion générale sur l'industrie.",
  },
  {
    q: "Est-ce que tu analyses mes clips et mes visuels ?",
    r: "Oui. L'objectif est d'avoir une vision cohérente de l'ensemble du projet, pas seulement de la musique. Une pochette qui ment sur le son coûte plus cher qu'un mauvais couplet.",
  },
  {
    q: "Est-ce que tu peux m'aider à sortir un morceau ?",
    r: "Oui : choix du morceau, positionnement, concept, calendrier, contenus qui accompagnent la sortie, et ce qu'on regarde ensuite pour savoir si ça a fonctionné.",
  },
  {
    q: "Est-ce que tu me trouves des opportunités ?",
    r: "Je fais la veille, je filtre et je te propose ce qui est cohérent avec ton projet et ton niveau, avec la manière de t'y présenter. Je ne garantis aucun résultat : personne ne peut garantir qu'un média répond ou qu'une playlist ajoute un titre.",
  },
  {
    q: "Est-ce que je peux te contacter entre les sessions ?",
    r: "En Advisor, l'échange est concentré sur la session mensuelle et les retours écrits. En Development, tu peux m'écrire en asynchrone. En Partner, tu as un accès direct avec une réponse sous 24 h ouvrées.",
  },
  {
    q: "Puis-je arrêter quand je veux ?",
    r: "Oui. L'accompagnement fonctionne au mois, sans engagement de durée. Les modalités exactes sont précisées avant l'inscription. Un accompagnement qu'on subit ne sert à rien.",
  },
  {
    q: "Est-ce que tu prends un pourcentage sur ma carrière ?",
    r: "Non, jamais. Abonnement mensuel fixe. Tu gardes 100 % de tes droits, de tes revenus et de tes décisions. C'est aussi ce qui garantit que mes conseils servent ton projet et pas mes intérêts.",
  },
]

export default function Accueil() {
  return (
    <>
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-[68px]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.55]">
          <Trajectoires variante="fond" className="h-full w-full" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 20% 40%, rgba(59,111,212,0.14) 0%, transparent 70%), linear-gradient(to top, #0b0d10 4%, transparent 55%)",
          }}
        />

        <div className="px-marge cadre relative z-10 py-20">
          <Reveal>
            <p className="index">CONSEIL STRATÉGIQUE POUR ARTISTES INDÉPENDANTS · PARIS</p>
          </Reveal>

          <Reveal delay={110}>
            <h1 className="titre-1 mt-8 max-w-[16ch] text-balance">
              Tu ne manques pas de travail.
              <br />
              Tu manques <em className="italic text-cobalt-vif">d&rsquo;élan</em>.
            </h1>
          </Reveal>

          <Reveal delay={220}>
            <p className="chapo mt-9 max-w-[54ch]">
              Tu écris, tu produis, tu sors des morceaux, tu construis ton univers. Et pourtant, chaque décision qui
              compte, tu la prends seul. MOMENTUM, c'est un conseiller stratégique dans ton coin, chaque mois — pour
              arrêter de t'agiter et commencer à construire une trajectoire.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-11 flex flex-col gap-3.5 sm:flex-row">
              <Link href="/candidature" className="bouton bouton-plein">
                Parler de mon projet →
              </Link>
              <Link href="/offres" className="bouton bouton-vide">
                Voir les trois formules
              </Link>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <p className="etiquette mt-10">
              À partir de 149 € / mois · {CAPACITE} artistes accompagnés à la fois · Aucun pourcentage
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════ 01 · LE CONSTAT ═══════════════════ */}
      <section className="bloc border-t border-filet">
        <div className="cadre">
          <TeteSection
            index="01"
            etiquette="LE CONSTAT"
            titre={
              <>
                Tu peux passer quarante heures sur un morceau
                <br className="hidden md:block" /> et ne pas voir le problème principal.
              </>
            }
            chapo="Le vrai coût de l'indépendance, ce n'est pas l'argent. C'est le nombre de décisions importantes que tu prends sans personne à qui les soumettre."
          />

          <div className="grid gap-x-14 gap-y-0 md:grid-cols-2">
            {QUESTIONS.map((q, i) => (
              <Reveal key={q} delay={i * 70}>
                <div className="flex items-baseline gap-5 border-b border-filet py-6">
                  <span className="font-mono text-[11px] text-craie-24">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-serif text-[1.2rem] leading-snug text-craie-80 md:text-[1.4rem]">{q}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="corps mt-12 max-w-2xl">
              Tu peux passer des mois sur ton projet sans jamais savoir si tu prends les bonnes décisions. Et le pire,
              c'est que tu ne le sauras qu'après — quand le temps, lui, sera déjà dépensé.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════ 02 · LA VRAIE CAUSE ═══════════════════ */}
      <section className="bloc border-t border-filet bg-encre-haute">
        <div className="cadre">
          <TeteSection
            index="02"
            etiquette="LA VRAIE CAUSE"
            titre={
              <>
                Ce n'est pas ton niveau. Ce n'est pas ton budget.
                <br className="hidden md:block" /> C'est ton <em className="italic text-cobalt-vif">absence de cap</em>.
              </>
            }
          />

          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <div className="space-y-6">
                <p className="corps">
                  L'agitation ressemble au travail. Elle en a les heures, la fatigue et le goût. Elle n'en a pas les
                  effets. On peut sortir douze titres dans l'année, poster tous les jours, contacter cinquante personnes,
                  et terminer décembre exactement au point où on a commencé janvier.
                </p>
                <p className="corps">
                  Un élan, en physique, c'est une masse et une direction. La plupart des artistes indépendants ont la
                  masse : le travail, le talent, les heures, l'obsession. Ce qui manque, c'est la direction. Sans
                  direction, l'énergie ne s'accumule pas — elle se dissipe.
                </p>
                <p className="verdict mt-9">
                  Le problème de la plupart des artistes indépendants n'est pas leur motivation. C'est leur manque de
                  recul.
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <figure className="carte p-4! md:p-7!">
                <Trajectoires variante="demo" className="h-auto w-full" />
                <figcaption className="mt-5 grid gap-3 border-t border-filet pt-5 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <span aria-hidden className="mt-[9px] h-px w-5 shrink-0 bg-craie-38" />
                    <p className="text-[13px] font-light leading-snug text-craie-50">
                      <span className="text-craie-80">L'agitation.</span> Beaucoup de mouvement, aucune progression.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span aria-hidden className="mt-[9px] h-px w-5 shrink-0 bg-cobalt-vif" />
                    <p className="text-[13px] font-light leading-snug text-craie-50">
                      <span className="text-craie-80">L'élan.</span> Plus lent au début. Puis ça n'a plus rien à voir.
                    </p>
                  </div>
                </figcaption>
              </figure>
              <p className="etiquette mt-4">Même talent. Même nombre d'heures. Douze mois.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ 03 · CE QUE JE T'APPORTE ═══════════════════ */}
      <section className="bloc border-t border-filet">
        <div className="cadre">
          <TeteSection
            index="03"
            etiquette="CE QUE JE T'APPORTE"
            titre="Quatre choses que tu ne peux pas te donner à toi-même."
            chapo="Aucune ne remplace ton travail. Toutes déterminent ce que ton travail produit."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {APPORTS.map((a, i) => (
              <Reveal key={a.n} delay={i * 90} className="h-full">
                <article className="carte flex h-full flex-col">
                  <span className="index">{a.n}</span>
                  <h3 className="titre-3 mt-4">{a.titre}</h3>
                  <p className="corps mt-4">{a.texte}</p>
                  <p className="mt-auto pt-6 font-serif text-[1.05rem] italic leading-snug text-cuivre-vif">{a.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ 04 · LES VERDICTS ═══════════════════ */}
      <section className="bloc border-t border-filet bg-encre-haute">
        <div className="cadre-md">
          <TeteSection
            index="04"
            etiquette="CONCRÈTEMENT"
            titre="À quoi ça ressemble, un mois d'accompagnement."
            chapo="Pas à un rapport de trente pages. À quatre phrases que personne d'autre ne te dira."
          />

          <div className="space-y-9 md:space-y-11">
            {VERDICTS.map((v, i) => (
              <Reveal key={v} delay={i * 110}>
                <p className="verdict">{v}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="corps mt-14">
              C'est ça, le produit. Pas de la théorie sur l'industrie : des décisions tranchées sur{" "}
              <span className="text-craie">ton</span> projet, chaque mois, par quelqu'un qui l'écoute vraiment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════ 05 · LE CYCLE ═══════════════════ */}
      <section className="bloc border-t border-filet">
        <div className="cadre">
          <TeteSection
            index="05"
            etiquette="LA MÉTHODE"
            titre="Le cycle. Un tour complet, chaque mois."
            chapo="Quatre temps qui se répètent. C'est la répétition qui crée l'élan — pas l'intensité d'un seul mois."
          />

          <div className="grid gap-px overflow-hidden border border-filet bg-filet md:grid-cols-2 lg:grid-cols-4">
            {CYCLE.map((c, i) => (
              <Reveal key={c.n} delay={i * 90} className="h-full">
                <div className="flex h-full flex-col bg-encre p-7 md:p-8">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-cobalt-vif">{c.n}</span>
                  <h3 className="mt-4 font-mono text-[12.5px] uppercase tracking-[0.2em] text-craie">{c.nom}</h3>
                  <p className="corps mt-4 text-[14.5px]">{c.texte}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="corps mt-9 max-w-2xl">
              Aucun plan n'est figé six mois à l'avance. Une carrière artistique ne se planifie pas comme un lancement
              produit : elle se corrige.{" "}
              <Link href="/methode" className="text-cobalt-vif underline decoration-filet-cobalt underline-offset-4 hover:decoration-cobalt-vif">
                Voir le cycle en détail
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════ 06 · AVANT / APRÈS ═══════════════════ */}
      <section className="bloc border-t border-filet bg-encre-haute">
        <div className="cadre">
          <TeteSection
            index="06"
            etiquette="CE QUI CHANGE"
            titre="Le but n'est pas de te donner des conseils. C'est de faire bouger ton projet."
          />

          <div className="grid gap-px overflow-hidden border border-filet bg-filet md:grid-cols-2">
            <Reveal className="h-full">
              <div className="h-full bg-encre p-8 md:p-10">
                <p className="etiquette">AUJOURD'HUI</p>
                <ul className="mt-7 space-y-5">
                  {AVANT.map((x) => (
                    <li key={x} className="flex gap-4 text-[15px] font-light leading-relaxed text-craie-50">
                      <span aria-hidden className="mt-[11px] h-px w-3.5 shrink-0 bg-craie-24" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120} className="h-full">
              <div
                className="h-full p-8 md:p-10"
                style={{ background: "linear-gradient(180deg, rgba(59,111,212,0.09), rgba(11,13,16,0.5))" }}
              >
                <p className="index">APRÈS QUELQUES MOIS</p>
                <ul className="mt-7 space-y-5">
                  {APRES.map((x) => (
                    <li key={x} className="flex gap-4 text-[15px] font-light leading-relaxed text-craie-80">
                      <span aria-hidden className="mt-[11px] h-px w-3.5 shrink-0 bg-cobalt-vif" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════ 07 · LES OFFRES ═══════════════════ */}
      <section className="bloc border-t border-filet">
        <div className="cadre">
          <TeteSection
            index="07"
            etiquette="LES FORMULES"
            titre="Trois niveaux. Un seul engagement : au mois."
            chapo="Un manager traditionnel coûte 2 000 € par mois et n'accepte pas les artistes à ton stade. Une agence coûte davantage et ne t'écoute pas. Voici ce qui existe entre les deux."
          />
          <GrilleOffres />
          <Reveal delay={200}>
            <p className="corps mt-9 max-w-2xl">
              Comparatif ligne par ligne, en chiffres réels, sur la{" "}
              <Link href="/offres" className="text-cobalt-vif underline decoration-filet-cobalt underline-offset-4 hover:decoration-cobalt-vif">
                page des offres
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════ 08 · QUI TE PARLE ═══════════════════ */}
      <section className="bloc border-t border-filet bg-encre-haute">
        <div className="cadre-md">
          <TeteSection index="08" etiquette="QUI TE PARLE" titre="Pourquoi tu devrais m'écouter, moi." />

          <Reveal>
            <div className="space-y-6">
              <p className="corps">
                Je m'appelle Hamza El Jaouahiry. Je ne suis pas un consultant qui parle de musique de l'extérieur : je
                suis réalisateur et compositeur depuis 2019, formé au cinéma à l'Université Gustave Eiffel et à la
                Sorbonne Nouvelle, et j'ai travaillé comme ingénieur du son en studio.
              </p>
              <p className="corps">
                Je produis mon propre projet musical, <span className="text-craie">MORI</span>, salué par la presse en
                Espagne, au Royaume-Uni et au Brésil. Je connais très précisément ce que tu vis, parce que je le vis
                aussi : le doute avant une sortie, la tentation de tout changer, la fatigue de décider seul.
              </p>
              <p className="corps">
                Le reste de mon temps, je le passe à construire des identités de marque. Je dirige{" "}
                <span className="text-craie">Strawberry Production</span>, un studio de narration de marque pour
                fondateurs et dirigeants, et j'ai publié en 2026 deux ouvrages sur le récit de marque, dont un atlas de
                trente architectures narratives. Je construis aussi un univers transmédia,{" "}
                <span className="text-craie">Sinbury</span>, depuis 2024.
              </p>
              <p className="verdict mt-10">
                C'est cette double position qui fait la valeur : un artiste comprend ton art, un stratège comprend ton
                marché. Il t'en faut un qui fasse les deux.
              </p>
              <p className="corps">
                <Link
                  href="/a-propos"
                  className="text-cobalt-vif underline decoration-filet-cobalt underline-offset-4 hover:decoration-cobalt-vif"
                >
                  Le parcours complet
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════ 09 · POUR QUI ═══════════════════ */}
      <section className="bloc border-t border-filet">
        <div className="cadre">
          <TeteSection
            index="09"
            etiquette="POUR QUI"
            titre="Tu n'as pas besoin d'être connu. Tu as besoin de vouloir construire."
          />

          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <p className="index mb-7">TU ES AU BON ENDROIT SI</p>
              <ul className="space-y-5">
                {POUR.map((x) => (
                  <li key={x} className="flex gap-4 text-[15px] font-light leading-relaxed text-craie-80">
                    <span aria-hidden className="mt-[11px] h-px w-3.5 shrink-0 bg-cobalt-vif" />
                    {x}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <p className="etiquette mb-7">CE N'EST PAS POUR TOI SI</p>
              <ul className="space-y-5">
                {PAS_POUR.map((x) => (
                  <li key={x} className="flex gap-4 text-[15px] font-light leading-relaxed text-craie-38">
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
              chose. Ce que je peux faire : t'aider à prendre de meilleures décisions, à mieux présenter ton travail, et
              à augmenter la qualité de ta trajectoire.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════ 10 · CONTRE-POSITIONNEMENT ═══════════════════ */}
      <section className="bloc border-t border-filet bg-encre-haute">
        <div className="cadre-md">
          <TeteSection index="10" etiquette="CE QUE JE NE SUIS PAS" titre="Je ne suis pas ton manager. Et c'est volontaire." />

          <Reveal>
            <div className="space-y-6">
              <p className="corps">
                Un manager devient pertinent quand un artiste a déjà de l'activité, des revenus, un réseau et un
                potentiel commercial mesurable. C'est un métier légitime, à sa place, à son moment.
              </p>
              <p className="corps">
                Mais avant ça ? Entre « je fais tout tout seul » et « j'ai une équipe complète autour de moi », il y a un
                trou de plusieurs années dans lequel des milliers d'artistes talentueux se perdent — non pas faute de
                travail, mais faute d'interlocuteur.
              </p>
              <p className="verdict mt-9">C'est cet espace que j'occupe. Un conseiller artistique externe.</p>
              <div className="mt-10 grid gap-px overflow-hidden border border-filet bg-filet sm:grid-cols-4">
                {["Accessible", "Flexible", "Impliqué", "Orienté carrière"].map((m) => (
                  <p key={m} className="bg-encre px-5 py-6 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-craie-65">
                    {m}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════ 11 · FAQ ═══════════════════ */}
      <section className="bloc border-t border-filet">
        <div className="cadre-md">
          <TeteSection index="11" etiquette="QUESTIONS FRÉQUENTES" titre="Ce qu'on me demande avant de commencer." />
          <Reveal>
            <Faq items={FAQ} />
          </Reveal>
        </div>
      </section>

      <BandeCta
        titre="Ton projet est peut-être plus près du niveau supérieur que tu ne le penses."
        texte="Mais pour le savoir, il faut arrêter de tout faire seul. Quelques questions sur ton projet, tes objectifs et ton niveau actuel — et je te dis franchement si je peux t'être utile."
      />
    </>
  )
}
