/**
 * TOUTE LA COPIE FRANÇAISE.
 *
 * Un seul fichier, une seule vérité. Ce fichier définit aussi la FORME du
 * dictionnaire : `lib/copy-en.ts` est typé `Copy`, donc TypeScript refuse de
 * compiler si une clé manque ou s'appelle autrement en anglais. Une traduction
 * oubliée devient une erreur de build, jamais un trou dans la page en ligne.
 *
 * Le français vouvoie, avec un « vous » de politesse : les accords restent au
 * singulier — « vous êtes seul », jamais « seuls ».
 */

export const FR = {
  meta: {
    titre: "MOMENTUM — Conseil stratégique pour artistes indépendants",
    description:
      "Vos sorties ne s'additionnent pas parce qu'elles ne se racontent pas. MOMENTUM vous aide à passer de titres isolés à un arc qui se construit : un conseiller stratégique dans votre coin, chaque mois. 299 €/mois, sans engagement, sans pourcentage.",
    ogTitre: "MOMENTUM — Conseil stratégique pour artistes indépendants",
    ogDescription:
      "Vous ne manquez pas de travail. Vous manquez d'élan. Un conseiller stratégique dans votre coin, chaque mois.",
  },

  nav: { candidater: "Candidater", accueil: "MOMENTUM, accueil", langue: "Changer de langue" },

  hero: {
    kicker: "CONSEIL STRATÉGIQUE POUR ARTISTES INDÉPENDANTS · PARIS",
    titre1: "Vous ne manquez pas de travail.",
    titre2a: "Vous manquez ",
    titre2b: "d'élan",
    chapo1:
      "Douze titres sortis cette année, et décembre ressemble à janvier. Ce n'est ni votre niveau, ni l'algorithme, ni votre budget : c'est que vos sorties ne se relient à rien. ",
    chapoFort: "Sept titres isolés font sept fois un.",
    chapo2: " Chaînés, ils font tout autre chose — et c'est la seule différence entre les deux courbes derrière ce texte.",
    cta: "Candidater ↓",
  },

  scene: {
    etiquette: "VOUS CONNAISSEZ CE MOMENT",
    titre: "Deux heures du matin.",
    p1: "Vous réécoutez le même mix pour la trentième fois et vous ne savez plus si le morceau est bon ou si vous êtes simplement fatigué. Vous ouvrez Instagram deux minutes. Un type que vous trouvez moins bon que vous vient de passer les cent mille écoutes. Vous refermez.",
    p2: "Vous vous dites que vous allez travailler plus.",
    verdict: "Vous travaillez déjà plus que lui.",
    p3: "Le vrai coût de l'indépendance, ce n'est pas l'argent. C'est le nombre de décisions qui engagent des mois de votre vie et que vous prenez seul, à deux heures du matin, sans personne à qui les soumettre.",
  },

  ratures: {
    etiquette: "CE QUE VOUS AVEZ DÉJÀ ESSAYÉ",
    titre: "Tout le monde vous dit la même chose : travaillez plus, sortez plus, postez plus.",
    chapo:
      "C'est le conseil le plus répandu du milieu. C'est aussi celui qui a coûté le plus d'années au plus grand nombre d'artistes talentueux.",
    lignes: [
      { essai: "Sortir plus souvent", effet: "Votre catalogue grossit, votre identité se dilue." },
      { essai: "Payer de la promo ou un pack de playlists", effet: "Des écoutes qui n'écoutent pas, et zéro auditeur récurrent." },
      { essai: "Poster tous les jours", effet: "Vous produisez du contenu au lieu de produire une œuvre." },
      { essai: "Changer de style pour ce qui marche", effet: "Vous arrivez en retard sur une vague, sans rien qui vous appartienne." },
      { essai: "Envoyer cent messages à des blogs et des labels", effet: "Personne ne répond, parce que rien ne dit qui vous êtes." },
    ],
  },

  silence1: { a: "Aucune de ces actions n'est stupide.", b: "Elles échouent toutes pour la même raison." },
  silence2: { a: "Vous n'avez pas besoin qu'on vous découvre.", b: "Vous avez besoin d'une direction." },

  cause: {
    etiquette: "LA VRAIE CAUSE",
    titre1: "Vos sorties ne s'additionnent pas",
    titre2a: "parce qu'elles ne ",
    titre2b: "se racontent",
    titre2c: " pas.",
    p1: "Un auditeur qui découvre votre titre aujourd'hui n'a aucune raison de chercher le suivant. Rien ne le relie au précédent : ni le monde, ni l'image, ni la promesse. Chaque sortie repart donc de zéro, avec la même audience à reconquérir.",
    p2: "C'est arithmétique : sept titres isolés font sept fois un. Sept titres chaînés font autre chose — chacun hérite de l'audience, de l'identité et de l'attente du précédent. Même travail, même talent, même nombre d'heures.",
    verdict: "Ce qui vous manque n'est pas un morceau de plus. C'est ce qui relie ceux que vous avez déjà.",
    legende: "L'écart entre les deux bandes n'est pas une différence de talent. C'est une différence de liaison.",
  },

  diagnostic: {
    etiquette: "AVANT D'ALLER PLUS LOIN",
    titre: "Où en êtes-vous vraiment ?",
    chapo:
      "Cinq questions, deux minutes, aucune adresse e-mail. Aucune ne porte sur votre nombre de sorties : sortir beaucoup n'est pas un signe de santé, c'est souvent le symptôme.",
    enTete: "DIAGNOSTIC — 2 MINUTES",
    resultat: "RÉSULTAT",
    precedente: "← Question précédente",
    recommencer: "Recommencer",
    ctaResultat: "Recevoir un vrai retour sur un morceau ↓",
    note: "Ce diagnostic est une version réduite du premier temps du cycle. Le vrai porte sur votre musique, pas sur cinq cases.",
    questions: [
      {
        texte: "Pouvez-vous décrire votre projet en une phrase que vous assumez à voix haute ?",
        options: [
          { label: "Oui, elle est écrite et je la connais par cœur", points: 3 },
          { label: "À peu près, mais elle change selon les jours", points: 1 },
          { label: "Non, je n'ai jamais réussi à la formuler", points: 0 },
        ],
      },
      {
        texte: "Quand vous sortez un titre, savez-vous déjà quel est le suivant ?",
        options: [
          { label: "Oui, les trois prochains, et pourquoi dans cet ordre", points: 3 },
          { label: "Le suivant seulement", points: 2 },
          { label: "Non, je décide au moment venu", points: 0 },
        ],
      },
      {
        texte: "Après une sortie, récupérez-vous des auditeurs qui reviennent pour la suivante ?",
        options: [
          { label: "Oui, une base qui répond à chaque fois", points: 3 },
          { label: "Quelques-uns, difficile à dire", points: 1 },
          { label: "Non, chaque sortie repart de zéro", points: 0 },
        ],
      },
      {
        texte: "Votre dernier titre a-t-il fait mieux que le précédent ?",
        options: [
          { label: "Oui, et je sais pourquoi", points: 3 },
          { label: "Oui, mais je ne sais pas pourquoi", points: 2 },
          { label: "Non, ou aucune idée", points: 0 },
        ],
      },
      {
        texte: "Qui vous dit honnêtement ce qui ne va pas dans votre travail ?",
        options: [
          { label: "Quelqu'un du métier, régulièrement", points: 3 },
          { label: "Des proches, quand j'insiste", points: 1 },
          { label: "Personne", points: 0 },
        ],
      },
    ],
    resultats: [
      {
        max: 5,
        code: "agitation",
        titre: "Vous êtes en agitation",
        texte:
          "Vous travaillez, mais rien ne s'accumule. Aucune de vos sorties ne prépare la suivante, personne ne vous renvoie une lecture honnête, et vous ne pouvez pas dire en une phrase ce que votre projet promet. Ce n'est pas un problème de talent ni d'effort : c'est un problème de liaison. Concrètement, à ce stade, une année de plus au même rythme vous laissera exactement où vous êtes aujourd'hui — avec douze titres de plus dans le catalogue.",
        action: "C'est précisément le cas où le premier cycle change le plus de choses.",
      },
      {
        max: 10,
        code: "catalogue",
        titre: "Vous avez un catalogue, pas un arc",
        texte:
          "Certaines choses tiennent déjà : vous avez des intuitions justes, parfois une direction. Mais elle n'est pas explicite, donc elle n'est pas tenue, donc elle ne compose pas. Vos sorties se ressemblent sans se répondre. C'est le stade le plus frustrant, parce que le travail est là et que le résultat reste plat — et c'est aussi celui où quelques décisions bien placées produisent l'écart le plus visible.",
        action: "Il vous manque une direction écrite et quelqu'un pour vous la faire tenir.",
      },
      {
        max: 15,
        code: "arc",
        titre: "Votre arc a commencé",
        texte:
          "Vous avez déjà l'essentiel : une direction que vous savez formuler, une idée de la suite, un début d'audience qui revient. Vous n'avez pas besoin qu'on répare quoi que ce soit. Ce qui vous ferait gagner du temps maintenant, c'est un regard extérieur régulier sur les arbitrages — quel titre en single, quelle opportunité vaut votre temps, quoi abandonner — pour ne pas casser vous-même ce que vous venez de construire.",
        action: "Soyez honnête : ce diagnostic vaut ce que valent vos réponses.",
      },
    ],
  },

  mecanisme: {
    etiquette: "LE MÉCANISME",
    titre1: "On ne travaille plus une sortie à la fois.",
    titre2a: "On travaille ",
    titre2b: "un arc",
    p1: "Un arc, c'est une suite de trois à six sorties conçues ensemble, où chacune prépare la suivante et confirme la précédente. Le même principe qui fait qu'on regarde huit épisodes d'affilée alors qu'on n'aurait jamais regardé huit courts-métrages sans lien.",
    p2: "Concrètement : on définit d'abord ce que votre projet promet — en une phrase que vous pouvez dire à voix haute sans avoir honte. Puis on choisit les titres qui tiennent cette promesse et l'ordre dans lequel ils la construisent. Puis, chaque mois, on exécute un maillon et on corrige le suivant avec ce qu'on vient d'apprendre.",
    p3: "Ce n'est ni un calendrier ni un plan de communication. Un calendrier périme au deuxième mois. Un arc, lui, se corrige sans perdre sa direction — c'est exactement pour ça qu'il accumule au lieu de se dissiper.",
    proposition:
      "Passer de sorties isolées à un arc qui se construit, en trois cycles, avec quelqu'un qui écoute chaque morceau au lieu d'appliquer une recette.",
    legende: "Douze mois d'arc tenu, comparés à douze mois de sorties isolées.",
  },

  cycle: {
    etiquette: "LE CYCLE MENSUEL",
    titre: "Quatre temps, répétés chaque mois.",
    chapo:
      "Rien de spectaculaire pris isolément — et c'est exactement le point. C'est la répétition qui crée l'élan, jamais l'intensité d'un seul mois héroïque.",
    temps: [
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
    ],
  },

  obtenez: {
    etiquette: "CE QUE VOUS OBTENEZ",
    titre: "Quatre choses que vous ne pouvez pas vous donner à vous-même.",
    chapo: "Aucune ne remplace votre travail. Toutes déterminent ce que votre travail produit.",
    cartes: [
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
        titre: "Vous savez ce que vous devez arrêter",
        texte:
          "C'est la partie que personne ne vous donnera jamais gratuitement. Trois priorités par mois, et la liste explicite de tout ce qu'on abandonne — y compris de bonnes idées qui ne sont simplement pas prioritaires maintenant.",
        gain: "Vous récupérez les heures que l'agitation vous prenait.",
      },
      {
        n: "04",
        titre: "Vous n'êtes plus seul au moment de décider",
        texte:
          "Une proposition reçue, un featuring, un changement d'image, une opportunité qui a l'air belle. Vous me l'envoyez, vous avez un avis argumenté avant de répondre — pas six mois après, quand c'est déjà fait.",
        gain: "Les mauvaises décisions coûtent des années. Celles-là, vous ne les prendrez pas.",
      },
    ],
  },

  preuve: {
    etiquette: "POURQUOI M'ÉCOUTER, MOI",
    titre: "Un artiste comprend votre art. Un stratège comprend votre marché.",
    chapo:
      "Il vous en faut un qui fasse les deux. C'est la seule raison valable de me confier un regard sur votre carrière, et c'est la seule que je revendique.",
    p1: "Je m'appelle Hamza El Jaouahiry. Réalisateur et compositeur depuis 2019, formé au cinéma à l'Université Gustave Eiffel puis à la Sorbonne Nouvelle, passé par le studio comme ingénieur du son. Je produis et compose mon propre projet musical, MORI, chroniqué en Espagne, au Royaume-Uni et au Brésil.",
    p2: "Le reste de mon temps, je construis des identités de marque : je dirige Strawberry Production, studio de narration de marque pour fondateurs, et j'ai publié en 2026 deux ouvrages sur le récit de marque, dont un atlas de trente architectures narratives. Je bâtis aussi depuis 2024 un univers transmédia, Sinbury.",
    p3: "Autrement dit : je connais votre problème de l'intérieur parce que je le vis, et sa solution de l'extérieur parce que c'est mon métier.",
    reperes: [
      { annee: "2019", texte: "Premiers projets comme réalisateur et compositeur." },
      { annee: "2021", texte: "Licences Cinéma & Audiovisuel — Université Gustave Eiffel, puis Sorbonne Nouvelle." },
      { annee: "2023", texte: "Ingénieur du son en studio (Dans Le Labo)." },
      { annee: "2024", texte: "Lancement de Sinbury, univers transmédia : une ville fictive et son écosystème culturel." },
      { annee: "2025", texte: "MORI — projet musical produit et composé seul, chroniqué en Espagne, au Royaume-Uni et au Brésil." },
      { annee: "2026", texte: "Publication de « 30 Architectures — An Atlas of Narrative Patterns » et de l'essai « Le Narratif de Marque à l'Ère de l'IA »." },
    ],
    pasMontrerTitre: "CE QUE JE NE PEUX PAS VOUS MONTRER",
    pasMontrer:
      "Des témoignages clients : MOMENTUM est jeune et je préfère une page vide à des avis fabriqués. Quand les premiers arcs auront un an, ils seront ici, avec des chiffres vérifiables et des noms.",
    montrerTitre: "CE QUE JE PEUX VOUS MONTRER",
    montrer:
      "Mon propre travail — un projet musical qui a passé les frontières sans label, un studio de marque, deux ouvrages. Et, si vous candidatez, un retour écrit sur l'un de vos morceaux avant que vous payiez quoi que ce soit. Vous jugerez la qualité du conseil sur pièce.",
    verdict: "Très peu de conseillers artistiques ont déjà eu peur d'appuyer sur « publier ».",
  },

  offre: {
    etiquette: "L'OFFRE",
    titre: "Un manager coûte 2 000 € par mois. Et il ne prend pas les artistes à votre stade.",
    chapo:
      "Entre « je fais tout tout seul » et « j'ai une équipe complète », il existe un niveau intermédiaire. C'est celui-là.",
    enTete: "L'ACCOMPAGNEMENT",
    coutLabel: "CE QUE ÇA COÛTE",
    parMois: "/ mois",
    sansEngagement:
      "Sans engagement de durée. Aucun pourcentage sur vos droits, vos revenus ou vos futurs contrats.",
    cta: "Candidater ↓",
    sousCta: "Réponse sous 72 h · Premier cycle remboursé si vous n'en tirez rien",
    autresNiveaux:
      "Deux autres niveaux existent, à 149 € et 499 € : le comparatif est juste en dessous. Mais si vous hésitez, celui-ci est le bon.",
    deplier: "Voir les trois niveaux et le comparatif ligne par ligne",
    replier: "Replier les trois niveaux",
    leplusChoisi: "Le plus choisi",
    comparatifTitre: "Ce que vous obtenez",
    comparatifNote1: "La plupart des artistes devraient commencer par ",
    comparatifNote2:
      ". C'est le niveau où l'accompagnement produit des résultats visibles sans exiger le budget d'une équipe. Je n'accompagne que ",
    comparatifNote3: " artistes à la fois — quand les places sont prises, la candidature reste en liste.",
  },

  garantie: {
    risqueLabel: "RISQUE DE VOTRE CÔTÉ",
    risqueValeur: "AUCUN",
    titre: "La garantie du premier cycle",
    texte:
      "Si au bout du premier mois vous estimez que l'accompagnement ne vous a rien appris sur votre projet, vous me le dites et je vous rembourse intégralement. Sans discussion et sans que vous ayez à vous justifier.",
  },

  /* Un gabarit, pas une fonction : le dictionnaire traverse la frontière
     serveur/client et React refuse de sérialiser une fonction. Les jetons sont
     remplacés au rendu — {s} vaut « s » au pluriel et rien au singulier, ce qui
     permet à l'anglais de simplement l'ignorer. */
  places: {
    ouvertes: "{n} place{s} ouverte{s} sur {total}",
  },

  objections: {
    etiquette: "CE QUE VOUS ÊTES EN TRAIN DE VOUS DIRE",
    titre: "Les cinq objections, dans l'ordre où elles arrivent.",
    items: [
      {
        q: "« 299 € par mois, c'est beaucoup pour moi. »",
        r: "C'est le prix d'une journée de studio, ou de deux campagnes de promo qui ne donneront rien. La différence : une journée de studio produit un fichier, un cycle produit une direction — qui rend utiles toutes les journées de studio suivantes. Si le budget n'y est vraiment pas, commencez à 149 € : mieux vaut un niveau tenu six mois qu'un niveau abandonné au deuxième.",
      },
      {
        q: "« Je peux avoir ces conseils gratuitement sur YouTube. »",
        r: "Vous pouvez avoir des conseils généraux sur l'industrie, et certains sont excellents. Ce que vous ne pouvez pas avoir, c'est quelqu'un qui écoute vos quatorze morceaux, regarde vos visuels, connaît votre stade exact et vous dit lequel sortir. Un conseil général s'applique à tout le monde ; c'est précisément pour ça qu'il ne change la trajectoire de personne.",
      },
      {
        q: "« Et si vous ne comprenez pas mon style ? »",
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
    ],
  },

  pourQui: {
    etiquette: "POUR QUI",
    titre: "Vous n'avez pas besoin d'être connu. Vous avez besoin de vouloir construire.",
    ouiLabel: "VOUS ÊTES AU BON ENDROIT SI",
    nonLabel: "CE N'EST PAS POUR VOUS SI",
    oui: [
      "Vous êtes artiste indépendant et vous avez déjà commencé à sortir.",
      "Vous voulez progresser sérieusement, pas être rassuré.",
      "Vous acceptez les critiques honnêtes sur votre travail.",
      "Vous êtes prêt à exécuter entre deux sessions.",
      "Vous n'avez pas encore les moyens — ni le besoin — d'une équipe complète.",
    ],
    non: [
      "Vous cherchez une garantie de viralité.",
      "Vous cherchez un contrat de label ou une playlist promise.",
      "Vous voulez quelqu'un qui fasse le travail à votre place.",
      "Vous voulez qu'on vous dise que votre projet est déjà parfait.",
      "Vous cherchez des contacts à acheter plutôt qu'une trajectoire à construire.",
    ],
    note: "Je ne peux pas garantir votre succès. Personne ne le peut, et quiconque vous dit le contraire vous vend quelque chose. Ce que je peux faire : vous aider à prendre de meilleures décisions, à mieux présenter votre travail, et à augmenter la qualité de votre trajectoire.",
  },

  faq: {
    etiquette: "QUESTIONS FRÉQUENTES",
    titre: "Le reste, en clair.",
    items: [
      {
        q: "Comment se passe concrètement un mois ?",
        r: "Une visio de soixante minutes en début de mois pour fixer le cap, vos envois de morceaux et de visuels au fil des semaines avec mes retours écrits, une seconde visio pour arbitrer les décisions en cours, et un bilan écrit en fin de mois qui pose le cap du suivant.",
      },
      {
        q: "Est-ce que vous prenez un pourcentage sur ma carrière ?",
        r: "Jamais. Abonnement mensuel fixe, vous gardez 100 % de vos droits, de vos revenus et de vos décisions. C'est aussi la garantie que mes conseils servent votre projet et pas mes intérêts : je n'ai rien à gagner à vous pousser vers une signature.",
      },
      {
        q: "Est-ce que vous produisez ou composez pour moi ?",
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
    ],
  },

  candidature: {
    index: "13 — CANDIDATURE",
    titre: "Envoyez-moi un morceau. Je vous dis ce que j'en pense.",
    p1: "Gratuitement, avant toute question d'argent. C'est la seule façon honnête de juger un conseiller : sur la qualité de son conseil, pas sur celle de sa page de vente.",
    p2a: "Je n'accompagne que ",
    p2b: " artistes à la fois. Ce formulaire n'est pas une formalité — c'est déjà le début du diagnostic, et la qualité de vos réponses détermine celle de la mienne.",
    etapes: [
      ["01", "Vous candidatez", "Quelques questions honnêtes. Comptez huit minutes si vous répondez sérieusement."],
      ["02", "Vous recevez un retour écrit", "J'écoute le morceau que vous m'envoyez, en entier, et je vous écris ce que j'en pense. Gratuitement, que la suite se fasse ou non."],
      ["03", "On décide", "Si le profil correspond, un appel pour poser votre arc et le cap du premier mois. Sinon, je vous dis pourquoi."],
    ] as [string, string, string][],
    question: "Une question avant de candidater ?",
  },

  formulaire: {
    nom: "Nom d'artiste",
    nomAide: "Sous quel nom vous sortez",
    email: "E-mail",
    lien: "Le morceau sur lequel vous voulez mon retour (Spotify, SoundCloud, YouTube, Drive…)",
    niveau: "Où vous en êtes",
    offre: "Formule envisagée",
    indecis: "Je ne sais pas encore",
    projet: "Votre projet en quelques lignes",
    projetAide: "Ce que vous faites, depuis quand, ce que vous voulez construire.",
    blocage: "Qu'est-ce qui vous bloque en ce moment ?",
    blocageAide: "Soyez précis. C'est le champ que je lis en premier.",
    envoyer: "Envoyer et recevoir mon retour →",
    envoi: "Envoi…",
    sousBouton: "Retour écrit sous 72 h · Gratuit · Aucune inscription automatique",
    niveaux: [
      { valeur: "debut", label: "Je commence à peine à sortir des morceaux" },
      { valeur: "regulier", label: "Je sors régulièrement, audience encore petite" },
      { valeur: "audience", label: "J'ai une audience qui commence à répondre" },
      { valeur: "pro", label: "Je vis en partie de ma musique" },
    ],
    erreurNiveau: "Indiquez où vous en êtes : c'est ce qui détermine le niveau d'accompagnement adapté.",
    erreurLimite: "Trop de tentatives depuis cette connexion. Réessayez dans quelques minutes.",
    erreurEnvoi: "L'envoi n'a pas abouti. Réessayez, ou écrivez-moi directement par e-mail.",
    recuLabel: "CANDIDATURE REÇUE",
    recuTitre: "Vous recevez votre retour écrit sous 72 heures.",
    recuTexte:
      "J'écoute votre morceau en entier, plusieurs fois, et je vous écris ce que j'en pense — que la suite se fasse ou non. Si votre profil correspond, on cale ensuite un appel pour poser votre arc. Si ce n'est pas le bon moment, je vous le dis franchement, et je vous dis pourquoi.",
    nePasRemplir: "Ne pas remplir",
    chargement: "Chargement du formulaire…",
  },

  cloture: {
    titre: "Dans un an, vous aurez sorti une dizaine de titres de plus.",
    chapo: "La seule question, c'est de savoir s'ils formeront un catalogue ou une trajectoire.",
    cta: "Candidater ↑",
    sous: "Réponse sous 72 h · Sans engagement · Premier cycle remboursé si vous n'en tirez rien",
  },

  arc: {
    bandeHaute: "Sept sorties, aucun lien",
    bandeBasse: "Les sept mêmes sorties, chaînées",
    invite: "Survolez ou touchez une sortie pour voir son rôle dans la chaîne.",
    maillons: [
      "Sortie 1 — elle pose la promesse. Personne ne l'attend, et ce n'est pas grave : son rôle est de dire ce que sera la suite.",
      "Sortie 2 — elle confirme. C'est elle qui prouve que la première n'était pas un accident.",
      "Sortie 3 — elle élargit. Même monde, autre angle : on garde l'auditeur en lui montrant qu'il n'a pas fait le tour.",
      "Sortie 4 — le point de bascule. Les auditeurs de la 1 reviennent d'eux-mêmes ; vous ne repartez plus de zéro.",
      "Sortie 5 — elle capitalise. C'est le moment de sortir le titre le plus fort : il hérite de tout ce qui précède.",
      "Sortie 6 — elle ouvre. Elle annonce la suite avant même que la suite existe.",
      "Sortie 7 — elle récolte. Le même travail qu'à la sortie 1, sur une audience qui, elle, n'est plus la même.",
    ],
    mois1: "Mois 1",
    mois12: "Mois 12",
    alt: "En haut, sept sorties isolées de taille identique et sans lien entre elles. En bas, les sept mêmes sorties reliées les unes aux autres, chacune plus grande et plus haute que la précédente.",
    altTrajectoires:
      "Deux trajectoires sur douze mois : l'agitation oscille beaucoup et revient à son point de départ, l'élan progresse lentement puis s'accélère.",
    agitation: "L'agitation.",
    agitationTexte: " Beaucoup de mouvement, aucune progression.",
    elan: "L'élan.",
    elanTexte: " Plus lent au début. Puis ça n'a plus rien à voir.",
  },

  offres: {
    tiers: [
      {
        id: "advisor",
        nom: "ADVISOR",
        promesse: "Ne plus avancer complètement seul.",
        pour: "Pour les artistes qui commencent à prendre leur projet au sérieux.",
        cta: "Candidater en Advisor",
        inclus: [
          "1 session stratégique de 60 min par mois",
          "2 retours écrits sur vos œuvres ou vos contenus",
          "Les 3 priorités du mois, écrites",
          "1 sélection d'opportunités adaptée à votre profil",
          "Analyse des décisions importantes par écrit",
        ],
      },
      {
        id: "development",
        nom: "ARTIST DEVELOPMENT",
        promesse: "Transformer votre projet en trajectoire.",
        pour: "Pour les artistes qui veulent construire, pas seulement publier.",
        cta: "Candidater en Development",
        inclus: [
          "2 sessions stratégiques de 60 min par mois",
          "Jusqu'à 6 retours écrits par mois (morceaux, textes, visuels, contenus)",
          "Positionnement et identité artistique",
          "Stratégie de sortie : choix du single, concept, calendrier",
          "Stratégie de contenu adossée à votre identité",
          "Veille et sélection d'opportunités",
          "Roadmap trimestrielle + priorités mensuelles",
          "Bilan écrit à la fin de chaque mois",
        ],
      },
      {
        id: "partner",
        nom: "ARTIST PARTNER",
        promesse: "Un regard extérieur sur chaque décision.",
        pour: "Pour les artistes déjà engagés à plein temps dans leur projet.",
        cta: "Candidater en Partner",
        inclus: [
          "Tout ce que contient Artist Development",
          "Accès direct par message, réponse sous 24 h ouvrées",
          "Direction artistique stratégique des sorties",
          "Analyse des collaborations et des propositions reçues",
          "Relecture de vos dossiers, pitchs et candidatures",
          "Préparation des sorties de bout en bout",
          "Bilan stratégique approfondi chaque mois",
        ],
      },
    ],
    comparatif: [
      { ligne: "Prix mensuel", advisor: "149 €", development: "299 €", partner: "499 €" },
      { ligne: "Sessions stratégiques / mois", advisor: "1 × 60 min", development: "2 × 60 min", partner: "2 × 60 min + échanges" },
      { ligne: "Retours écrits sur vos œuvres / mois", advisor: "2", development: "jusqu'à 6", partner: "sans plafond raisonnable" },
      { ligne: "Priorités du mois", advisor: "3, écrites", development: "3, écrites", partner: "3, écrites" },
      { ligne: "Positionnement & identité", advisor: "—", development: "oui", partner: "oui" },
      { ligne: "Stratégie de sortie", advisor: "—", development: "oui", partner: "direction artistique incluse" },
      { ligne: "Veille opportunités", advisor: "1 sélection", development: "en continu", partner: "en continu + préparation des candidatures" },
      { ligne: "Roadmap trimestrielle", advisor: "—", development: "oui", partner: "oui" },
      { ligne: "Bilan mensuel écrit", advisor: "—", development: "oui", partner: "approfondi" },
      { ligne: "Accès entre les sessions", advisor: "—", development: "asynchrone", partner: "réponse sous 24 h ouvrées" },
    ],
  },

  pied: {
    baseline:
      "Conseil stratégique pour artistes indépendants. On ne travaille pas une sortie à la fois : on travaille un arc.",
    baseline2a: " ",
    baseline2b: " artistes accompagnés à la fois, depuis ",
    sansPourcentage: "Aucun pourcentage. Aucune promesse de viralité.",
    contact: "Contact",
    mentions: "Mentions légales",
    signature: "Un conseiller, pas un manager.",
  },

  erreur404: {
    label: "ERREUR 404",
    titre: "Cette page n'existe pas.",
    texte: "Le lien est peut-être ancien, ou l'adresse mal recopiée. Tout le site tient sur une seule page.",
    retour: "Retour à l'accueil",
    candidater: "Candidater",
  },
}

/**
 * Pas de `as const` ici, volontairement.
 *
 * Avec `as const`, chaque chaîne devient son propre type littéral — et
 * TypeScript refuse alors que la version anglaise diffère de la version
 * française, ce qui est exactement le contraire du but. Sans lui, `Copy` décrit
 * la FORME du dictionnaire (les clés, les types, la profondeur) tout en
 * laissant les valeurs libres. Une clé manquante en anglais reste une erreur de
 * compilation ; une traduction différente, non.
 */
export type Copy = typeof FR
