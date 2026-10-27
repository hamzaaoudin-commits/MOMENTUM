import type { Lang } from "@/lib/i18n"
import { SIX } from "@/lib/doc-six"

export type Block =
  | { kind: "section"; n: string; title: string; note?: string }
  | { kind: "p"; text: string }
  | { kind: "lead"; text: string }
  | { kind: "quote"; text: string }
  | { kind: "h"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][] }
  | { kind: "pair"; before: string; after: string; beforeLabel: string; afterLabel: string }

export type Part = {
  n: string
  title: string
  subtitle: string
  blocks: Block[]
}

export type SampleDoc = {
  eyebrow: string
  title: string
  house: string
  edition: string
  disclaimer: string
  partialTitle: string
  partialBody: string
  partialPoints: string[]
  dossierTitle: string
  dossierRows: [string, string][]
  parts: Part[]
  ctaTitle: string
  ctaBody: string
  ctaPrimary: string
  ctaSecondary: string
  ctaFoot: string
  contentsTitle: string
  readerPrev: string
  readerNext: string
  readerPageOfTemplate: string
  readerOfCount: string
}

const RAW_DOC: Record<Lang, SampleDoc> = {
  fr: {
    eyebrow: "Extrait — les pièces 02 et 03, sur une maison réelle",
    title: "BRAND NARRATIVE ARCHITECTURE",
    house: "SILLAGE",
    edition: "Commande n° 000 — vingt pièces",
    disclaimer:
      "Exemple publié à titre d'illustration. SILLAGE, sa fondatrice et les maisons citées ne correspondent à aucune entreprise existante.",
    partialTitle: "Ceci n'est qu'une partie de ce que vous recevras.",
    partialBody:
      "BRAND NARRATIVE ARCHITECTURE compte vingt pièces et représente environ quatre-vingt-dix pages. La page que vous lisez en présente la structure intégrale — les vingt pièces sont là — mais chacune est resserrée pour l'écran. Ce qui est retiré de cette édition web :",
    partialPoints: [
      "Les développements longs de chaque analyse, réduits ici à leur conclusion",
      "Les fiches concurrent complètes, une par acteur du champ, dissection phrase par phrase",
      "L'intégralité du kit de déploiement : copy prêt à l'emploi, quinze angles de contenu, plan des sept premiers jours",
      "Les quatre profils d'audience détaillés, avec déclencheurs, résistances et mots exacts",
      "Le brief d'identité visuelle complet, avec références directionnelles et exécutions à refuser",
      "L'essai signature intégral, publiable en l'état, et le manifeste d'origine",
      "Les sept playbooks et le guide de cohérence, dans leur version longue : scripts complets, arbres d'objections, protocoles d'incident et grilles d'entretien",
    ],
    dossierTitle: "Le dossier",
    dossierRows: [
      ["La maison", "SILLAGE — Lyon, quatre ans. Logiciel de suivi de chantier."],
      ["La fondatrice", "Claire Vasseur, architecte, dix ans de maîtrise d'œuvre."],
      ["L'état", "300 comptes payants. 47 000 € de revenu mensuel récurrent. Six personnes. Aucune levée."],
      ["Le moment", "Le lancement de SILLAGE 2, la version pour entreprises générales, le 21 septembre 2027."],
      ["La fracture", "Bâtie pour les architectes indépendants. 61 % du revenu vient désormais d'entreprises générales. Le discours parle toujours aux premiers."],
      ["Ce qu'elle est venue dire", "« On a du départ chez les architectes et on n'arrive pas à monter en gamme chez les entreprises. On est coincés au milieu. »"],
    ],
    contentsTitle: "Les vingt pièces",
    readerPrev: "← Partie précédente",
    readerNext: "Partie suivante →",
    readerPageOfTemplate: "Partie {i} / {n}",
    readerOfCount: "sur {n} parties",
    parts: [
  {
    n: "01",
    title: "Diagnostic de différenciation",
    subtitle: "Le champ narratif, disséqué.",
    blocks: [
      { kind: "h", text: "Le champ tel qu'il se tient" },
      { kind: "table", head: ["Maison", "Sa phrase", "Ce qu'elle promet vraiment"], rows: [
        ["BATIFLOW", "« The construction management platform. »", "Que le problème du bâtiment soit la dispersion. Achète l'exhaustivité au prix de la mémorabilité."],
        ["CHANTIER.IO", "« Digitalisez vos chantiers. »", "Que vous soyez en retard. Gagne l'utilisateur, perd celui qui signe."],
        ["BAUSYNC", "« Collaboration on site. »", "Que la friction soit relationnelle. Un mot que personne ne conteste est un mot que personne ne retient."],
        ["CARNET+", "« Le carnet de chantier nouvelle génération. »", "Que le carnet reste la bonne unité de pensée. S'ancre dans l'objet qu'il prétend dépasser."],
        ["PREUVEO", "« Zéro litige, zéro reprise. »", "Que la peur du procès soit le moteur d'achat. Registre défensif rejeté par le métier."],
      ]},
      { kind: "p", text: "Retirez les noms : les cinq phrases disent la même chose sous cinq déguisements. Le chantier est mal tenu pendant qu'il se déroule, et nous allons le tenir mieux. Toutes se placent pendant. Le champ entier est verrouillé sur trois idées — efficacité, modernisation, coordination — et se dispute la même seconde du temps." },
      { kind: "quote", text: "Aucune ne parle de l'après. Aucune ne parle du moment où le chantier est livré, où l'équipe est ailleurs, et où un maître d'ouvrage conteste huit mois plus tard quelque chose que personne ne se rappelle exactement. C'est pourtant le seul moment où le suivi de chantier cesse d'être une commodité pour devenir une question d'argent." },
      { kind: "h", text: "La phrase actuelle — autopsie" },
      { kind: "lead", text: "« Le suivi de chantier simple et visuel. » Sept mots, trois défauts structurels." },
      { kind: "list", items: [
        "« Le suivi de chantier » — c'est le nom de la catégorie, pas de ce que fait SILLAGE. Les cinq concurrents peuvent l'écrire sans mentir. Une phrase de position doit être indisponible aux autres.",
        "« simple » — trois concurrents le revendiquent déjà dans leurs pages. C'est un attribut du produit, pas une position dans la perception. Et il signale léger, donc moins complet, donc moins cher.",
        "« visuel » — décrit le moyen au lieu du résultat. Transforme SILLAGE en application photo, alors que tout le monde en possède déjà une. La phrase fabrique elle-même l'objection principale : « on a déjà un groupe photos ».",
      ]},
      { kind: "p", text: "Toute la valeur réelle de SILLAGE est absente de la phrase qui décrit SILLAGE. Et la conséquence est tarifaire : une phrase fixe une classe de référence, et le prix ne se négocie jamais, il se déduit de la catégorie à laquelle on vous compare. Rangée au rayon productivité, SILLAGE vaut deux heures gagnées par semaine — soit exactement le plafond de 40 € par utilisateur et par mois auquel elle bute." },
      { kind: "h", text: "Le terrain choisi" },
      { kind: "p", text: "Quatre vides territoriaux ont été identifiés : la preuve, l'effort nul, l'asymétrie, la transmission. SILLAGE prend le premier." },
      { kind: "list", items: [
        "Il est déjà vrai — l'horodatage, la validation et l'archivage existent. Le repositionnement exige une refonte du langage, pas du produit.",
        "Il déplace la classe de référence : la preuve appartient à la protection du risque, pas aux outils de productivité. Le plafond disparaît.",
        "Il vise le bon acheteur : les entreprises générales portent le coût direct de la contestation. Déjà 61 % du revenu.",
        "Il fait monter le décideur : un outil s'achète par l'utilisateur, une protection par la direction.",
        "Il détruit l'objection principale : contre une maison qui constitue de la preuve, « on a déjà un groupe photos » tombe en une phrase.",
      ]},
      { kind: "p", text: "Ce que le territoire coûte, dit franchement : les architectes. Le récit de la preuve s'adresse à celui qui exécute et porte le coût. Les 16 % de revenu du segment vont décroître. Ce n'est pas un effet secondaire, c'est le prix d'entrée." },
      { kind: "h", text: "Le verdict" },
      { kind: "quote", text: "SILLAGE ne se tient pas au milieu du champ : elle se tient dans la catégorie de quelqu'un d'autre, avec des mots qui appartiennent déjà à cinq maisons, en décrivant le moyen qu'elle emploie au lieu du moment où elle sert. Son plafond tarifaire n'est pas un problème de valeur perçue : c'est la conséquence arithmétique d'une phrase qui la range au rayon de la productivité, alors qu'elle appartient à celui de la protection." },
    ],
  },
  {
    n: "02",
    title: "Plateforme narrative",
    subtitle: "La constitution de la maison.",
    blocks: [
      { kind: "h", text: "La conviction centrale" },
      { kind: "quote", text: "Dans le bâtiment, la qualité d'exécution ne protège personne. Seule la trace protège. Et le secteur entier organise son déni de cette réalité." },
      { kind: "p", text: "Ce qui rend cette phrase indisponible aux autres, c'est sa seconde moitié. Les cinq concurrents peuvent concéder que la documentation compte. Aucun ne peut dire que le secteur organise son déni — parce qu'ils vendent tous à un métier qu'ils préfèrent flatter." },
      { kind: "h", text: "L'origine, réécrite en mythologie" },
      { kind: "p", text: "Le chantier était livré depuis huit mois. Une maison de ville dans le sixième arrondissement de Lyon, rien d'extraordinaire, un chantier propre. Puis le courrier est arrivé : le maître d'ouvrage contestait une reprise sur les cloisons du deuxième étage. Claire savait le contraire. Elle se rappelait la conversation, elle se rappelait même la lumière dans la pièce." },
      { kind: "p", text: "Elle a ouvert ses dossiers. Des photos éparpillées sur trois années sans ordre. Des mails qui parlaient d'autre chose. Des messages noyés dans un fil où trente personnes avaient écrit pendant six mois. Et sa mémoire — précise, certaine, inutile. Trois semaines à reconstituer une chronologie que personne ne contestait vraiment et que personne ne pouvait établir. Quatorze mille euros." },
      { kind: "p", text: "Ce qu'elle a refusé ce jour-là n'était pas la somme, c'était le cadre. Elle avait cru pendant dix ans exercer un métier où l'on est jugé sur ce qu'on construit. Elle a découvert un métier où l'on est jugé sur ce qu'on peut établir — et où la différence se paie comptant, par celui qui a bien travaillé et mal archivé." },
      { kind: "h", text: "L'ennemi, nommé précisément" },
      { kind: "quote", text: "L'ennemi de SILLAGE est l'idée que le travail bien fait parle de lui-même." },
      { kind: "list", items: [
        "Il se déguise en fierté professionnelle : « mon travail se voit ». La fierté travaille alors contre celui qui la porte.",
        "Il rend la documentation honteuse : documenter, c'est se couvrir ; se couvrir, c'est anticiper le conflit ; anticiper le conflit, c'est trahir la confiance.",
        "Il fait payer les meilleurs : les mauvaises entreprises sont renvoyées avant la réception, les contestations visent les chantiers corrects.",
        "Il persiste parce que personne ne compte : le coût est réparti entre reprises non facturées, heures de dirigeant et relations abîmées. Invisible dans les comptes, donc jamais combattu.",
      ]},
      { kind: "h", text: "La promesse" },
      { kind: "quote", text: "SILLAGE rend le travail exécuté établissable." },
      { kind: "p", text: "Non pas visible, non pas partagé, non pas mieux organisé. Établissable — c'est-à-dire opposable, datable, produisible devant quelqu'un qui conteste." },
      { kind: "h", text: "L'archétype de la fondatrice" },
      { kind: "p", text: "Le témoin. Pas l'experte, pas la visionnaire, pas la militante : celle qui était présente, qui a vu, et qui rapporte sans arranger. Trois interdits en découlent — ne pas dramatiser, ne pas se poser en victime, ne juger que les mécanismes et jamais les personnes. C'est l'archétype exact du métier : le bâtiment méprise ceux qui parlent fort et respecte ceux qui constatent juste." },
      { kind: "h", text: "Les quatre piliers" },
      { kind: "list", items: [
        "I — La mémoire est un rapport de force. Toute contestation est un conflit de mémoires, et sans trace, la mémoire qui gagne n'est pas la plus fidèle mais la mieux entourée.",
        "II — Le travail bien fait ne se défend pas tout seul. Personne ne conteste un chantier raté : on le refait. On conteste les chantiers corrects.",
        "III — La preuve doit se constituer sans y penser. Toute documentation qui exige un effort dédié n'est pas faite. C'est une loi, pas une faiblesse de caractère.",
        "IV — L'asymétrie du chantier. Celui qui commande a du temps et des conseils ; celui qui exécute a onze autres chantiers.",
      ]},
      { kind: "h", text: "La colonne narrative" },
      { kind: "quote", text: "Le bâtiment se raconte comme un métier où l'on est jugé sur ce qu'on construit, et fonctionne comme un métier où l'on est jugé sur ce qu'on peut établir. SILLAGE est née de ce constat, non comme un outil de plus pour tenir le chantier pendant qu'il se déroule, mais comme la maison qui constitue la preuve de ce qui a été fait — pour que le jour où quelqu'un conteste, il n'y ait rien à défendre de mémoire, seulement un dossier à ouvrir." },
    ],
  },
  {
    n: "03",
    title: "Système de langage",
    subtitle: "Le vocabulaire, le ton, les tests quotidiens.",
    blocks: [
      { kind: "h", text: "Le lexique signature" },
      { kind: "p", text: "Vingt-deux mots qui, employés ensemble et répétés dans le temps, construisent une empreinte verbale reconnaissable. Extrait :" },
      { kind: "table", head: ["Mot", "Pourquoi celui-là"], rows: [
        ["établir", "Le verbe central. Contient l'idée de preuve sans convoquer le tribunal."],
        ["pièce", "Terme du dossier. Transforme une photo en élément opposable."],
        ["contestation", "Le mot du moment de vérité. Factuel là où « litige » dramatise."],
        ["sous-produit", "Porte le pilier III : la trace n'est jamais une tâche."],
        ["établissable", "Néologisme assumé, propriété exclusive de la maison."],
        ["huit mois plus tard", "Marqueur temporel devenu signature."],
      ]},
      { kind: "h", text: "La liste interdite" },
      { kind: "p", text: "Trois niveaux. Niveau A — disqualification immédiate : simple, visuel, gain de temps, plateforme, digitaliser, zéro litige, nouvelle génération. Un seul emploi effondre la position. Niveau B — à manier avec précaution : photo (jamais comme sujet), litige (jamais comme peur), preuve (jamais comme menace). Niveau C — bruit de catégorie : innovant, intuitif, clé en main, écosystème, fluidifier, optimiser, centraliser." },
      { kind: "h", text: "Calibrage du ton" },
      { kind: "pair", beforeLabel: "Faux", afterLabel: "Juste", before: "Dans un contexte où la traçabilité devient un enjeu majeur pour les acteurs du BTP, il apparaît essentiel de pouvoir démontrer la conformité des travaux exécutés.", after: "Vous savez que vous avez raison. Vous ne pouvez pas le montrer. Vous payez." },
      { kind: "pair", beforeLabel: "Faux", afterLabel: "Juste", before: "Beaucoup d'entreprises négligent encore la documentation de leurs chantiers.", after: "Le classeur de chantier n'échoue pas par manque de rigueur. Il échoue parce qu'on le remplit après." },
      { kind: "h", text: "Le test de la phrase" },
      { kind: "list", items: [
        "Est-ce que BATIFLOW pourrait écrire cette phrase sans mentir ? Si oui, elle n'est pas encore à nous.",
        "Est-ce que le moment de la contestation est présent, même en creux ?",
        "Est-ce qu'on décrit un moyen ou un résultat ? Le moyen, c'est la photo. Le résultat, c'est la pièce.",
        "Est-ce qu'on constate ou est-ce qu'on alarme ? Un montant, une durée, une fréquence — jamais un « et si ».",
        "Est-ce qu'un conducteur de travaux de cinquante ans reconnaîtrait son métier dans ce vocabulaire ?",
      ]},
      { kind: "h", text: "Le principe de réécriture" },
      { kind: "quote", text: "On parle du moment où SILLAGE sert, jamais de ce que SILLAGE fait. Ce que fait la maison est banal et déjà dans le téléphone de chacun ; ce qui ne l'est pas, c'est le moment où cela devient décisif." },
    ],
  },
  {
    n: "04",
    title: "Kit de déploiement",
    subtitle: "Les quatre-vingt-dix premiers jours.",
    blocks: [
      { kind: "h", text: "La séquence autour du jour J (le lancement de SILLAGE 2)" },
      { kind: "list", items: [
        "J-90 à J-60 — Nommer le problème. Aucune vente par le contenu. L'unique objectif est que « la contestation huit mois après la réception » devienne une catégorie mentale partagée.",
        "J-60 à J-30 — Chiffrer le coût. Le problème existe, il lui faut un prix. Phase la moins spectaculaire et la plus déterminante : elle fixe le plafond tarifaire des trois années suivantes.",
        "J-30 à J-1 — Fermer l'objection. Le groupe photos se démonte une fois, en public, proprement : ce qui sera dit le jour J ne se révèle qu'à ce moment-là.",
        "Jour J — Annoncer SILLAGE 2 aux entreprises générales, avec le texte écrit à l'avance et le dossier de presse prêt. J+1 à J+30 — reprise à froid de tous les prospects touchés, puis un bilan écrit de ce qui a porté.",
      ]},
      { kind: "h", text: "Les cinq territoires de contenu" },
      { kind: "table", head: ["Territoire", "Cadence", "Exemple d'angle"], rows: [
        ["La mémoire", "Hebdomadaire", "« Ce que regarde l'expert d'assurance en premier, et ce n'est pas le chantier »"],
        ["Le coût réel", "Bimensuel", "« Ce que coûte vraiment une reprise contestée, ligne par ligne »"],
        ["L'effort nul", "Hebdomadaire", "« Le classeur de chantier meurt toujours au bout de trois semaines »"],
        ["L'asymétrie", "Mensuel", "« Il a huit mois pour préparer. Vous avez le mercredi soir »"],
        ["Le dossier ouvert", "Bimensuel", "« Trois lignes qui ont clos un désaccord à 22 000 € »"],
      ]},
      { kind: "h", text: "L'inventaire des recadrages" },
      { kind: "list", items: [
        "Du pendant vers l'après — le produit ne change pas, le moment de sa valeur se déplace. Recadrage matriciel dont les quatre autres découlent.",
        "De la qualité vers la preuve — bien faire est ce qu'on protège, et cela ne se protège pas tout seul.",
        "De l'accident vers l'échéance — 91 dossiers sur 300 comptes en douze mois. On ne s'assure pas contre un accident, on se prépare à une échéance.",
        "De la discipline vers la conception — la documentation échoue par défaut de conception, pas par négligence. Ce recadrage disculpe l'acheteur, ce qui est stratégiquement décisif.",
        "De l'outil vers la protection — c'est le recadrage qui porte le prix.",
      ]},
      { kind: "h", text: "La première semaine, pièce par pièce" },
      { kind: "p", text: "Sept pièces datées, chacune avec sa surface, sa longueur, son pilier et le recadrage qu'elle opère. Le jour 1 ouvre sur une phrase entendue et ne vend rien ; le jour 3 publie le premier chiffrage, la source que les jours 31 à 60 viendront préciser ; le jour 7 reprend à froid tous les prospects des six derniers mois avec pour objet « Votre dernière contestation »." },
      { kind: "quote", text: "Ce qui change côté commercial dès la semaine 1 : la question d'ouverture n'est plus « comment vous gérez vos chantiers ? » mais « votre dernière contestation, elle remonte à quand ? ». Une question déplace la classe de référence plus vite que trois mois de contenu." },
    ],
  },
  {
    n: "05",
    title: "Guide de cohérence",
    subtitle: "Écrit pour la fondatrice, pas pour l'équipe.",
    blocks: [
      { kind: "h", text: "Le test de cohérence" },
      { kind: "list", items: [
        "Est-ce que ça parle du pendant ou de l'après ?",
        "Est-ce qu'un concurrent pourrait revendiquer la même chose sans mentir ?",
        "Est-ce qu'on constate ou est-ce qu'on alarme ?",
        "Est-ce que ça disculpe ou est-ce que ça culpabilise ? Personne n'achète en position de défense.",
        "Est-ce qu'un conducteur de travaux de cinquante ans reconnaîtrait son métier là-dedans ?",
      ]},
      { kind: "h", text: "Trois décisions qui arriveront" },
      { kind: "p", text: "Un podcast invite Claire sur « les outils qui font gagner du temps » : accepter le plateau, refuser le sujet. Une heure d'antenne à parler de productivité vaut moins que zéro — elle ancre publiquement la classe de référence qu'on cherche à quitter." },
      { kind: "p", text: "Un excellent responsable marketing écrit « fluidifier les échanges » et « outil intuitif » : ne pas recruter. Le vocabulaire n'est pas une couche de peinture, c'est la position elle-même. Quelqu'un qui écrit « fluidifier » ne fait pas une erreur de style, il pense depuis la catégorie du champ." },
      { kind: "p", text: "Une fédération propose d'intégrer SILLAGE dans une offre groupée d'outils : refuser cette forme, proposer l'autre. Figurer parmi sept outils, c'est payer pour être comparé. La contre-proposition — produire l'étude annuelle sur les contestations sous le nom de la fédération — donne plus d'exposition et installe la maison comme source du sujet." },
      { kind: "h", text: "La veille de dérive" },
      { kind: "list", items: [
        "Le mot « simple » revient dans un texte et personne ne le remarque. Signe le plus précoce.",
        "Une nouveauté est annoncée par sa fonction et non par la pièce qu'elle produit.",
        "Un rendez-vous s'ouvre sur « comment vous gérez vos chantiers aujourd'hui ? ».",
        "Une remise est accordée pour emporter une affaire.",
        "Un contenu est publié pour publier, sans se rattacher à un territoire.",
        "Une demande d'architecte modifie l'usage quotidien des entreprises.",
      ]},
      { kind: "h", text: "L'instruction finale" },
      { kind: "quote", text: "Le matin où vous défendrez cette position pour la première fois devant quelqu'un qui vous demandera en quoi vous êtes différente de BATIFLOW, vous n'aurez pas besoin de mieux répondre : vous aurez besoin de ne pas répondre à cette question-là. Ne plaidez pas. Constatez. Dites ce que vous avez vu, dites ce que ça coûte, et laissez la personne en face reconnaître sa propre histoire — parce qu'elle en a une, et qu'elle n'a jamais entendu personne la nommer." },
    ],
  },
  {
    n: "06",
    title: "Récit tarifaire",
    subtitle: "Le prix comme doctrine.",
    blocks: [
      { kind: "h", text: "Le prix comme doctrine" },
      { kind: "p", text: "Le prix de SILLAGE ne rémunère ni des fonctionnalités ni un temps d'usage : il rémunère le transfert d'une position. Ce que l'entreprise achète, c'est de cesser d'être celle qui se défend de mémoire. Ce n'est pas cher pour un outil de suivi. C'est dérisoire pour ne plus jamais payer une reprise qu'on n'a pas commise." },
      { kind: "h", text: "Le cadre de valeur" },
      { kind: "p", text: "Cinq étapes à établir avant que le chiffre soit prononcé. Rien ne se dit avant que le prospect ait raconté sa propre contestation et l'ait lui-même chiffrée — un chiffre énoncé par SILLAGE est un argument, un chiffre énoncé par le prospect est une donnée." },
      { kind: "list", items: [
        "« Votre dernière contestation, elle remonte à quand ? »",
        "« Elle vous a coûté combien, tout compris ? »",
        "« Vous aviez raison, mais vous ne pouviez pas l'établir. »",
        "« Sur nos trois cents comptes, il y en a eu quatre-vingt-onze en douze mois. »",
        "« La question n'est pas de savoir si SILLAGE coûte plus cher qu'un outil de suivi. C'est de savoir ce que coûte la prochaine. »",
      ]},
      { kind: "h", text: "Les deux objections de prix" },
      { kind: "pair", beforeLabel: "L'objection", afterLabel: "Le recadrage", before: "« C'est plus cher que BATIFLOW. »", after: "« Oui. On ne fait pas la même chose. Si votre problème est de mieux tenir le planning, prenez BATIFLOW, sincèrement. Si votre problème est ce qui se passe huit mois après, on est les seuls sur ce terrain. Ce ne sont pas deux prix pour la même chose, ce sont deux prix pour deux moments. »" },
      { kind: "pair", beforeLabel: "L'objection", afterLabel: "Le recadrage", before: "« On a déjà un groupe photos. »", after: "« Vous prenez déjà les photos — le problème n'a jamais été de les prendre. Le jour de la contestation, il faut produire une chronologie ordonnée, datée, avec l'accord du maître d'ouvrage. Dans un fil de discussion, ces trois éléments n'existent pas. Une photo n'est pas une pièce. »" },
      { kind: "h", text: "La position sur la remise" },
      { kind: "p", text: "Une remise à périmètre égal dit trois choses : que le prix affiché était arbitraire, que la valeur annoncée était surévaluée, et que l'acheteur a eu raison de vous ranger dans la catégorie basse. La réponse est invariable — on n'ajuste jamais le prix, on ajuste le périmètre." },
    ],
  },
  {
    n: "07",
    title: "Système biographique",
    subtitle: "Quatre formats, une seule rupture. Extrait : deux formats sur quatre.",
    blocks: [
      { kind: "h", text: "La bio de 50 mots" },
      { kind: "quote", text: "Claire Vasseur a passé dix ans en maîtrise d'œuvre avant de payer quatorze mille euros pour un chantier qu'elle avait bien fait et qu'elle ne pouvait pas prouver. Elle a fondé SILLAGE à Lyon pour établir ce qui a été exécuté sur un chantier. Trois cents entreprises l'utilisent." },
      { kind: "h", text: "La réponse du dîner" },
      { kind: "p", text: "Trois versions, selon l'interlocuteur. Devant un pair fondateur : « Je fais un truc pour les entreprises du bâtiment. Quand un chantier est livré et que huit mois plus tard le client conteste, l'entreprise sait qu'elle a raison mais elle n'a rien pour le montrer. Donc elle paie. Nous, on constitue la trace au fur et à mesure, sans que personne ait à remplir quoi que ce soit — parce que dès qu'il faut remplir un truc, ce n'est pas fait. J'ai monté ça après avoir payé quatorze mille euros dans exactement cette situation. »" },
      { kind: "h", text: "La règle d'entretien" },
      { kind: "p", text: "Ces textes évoluent par leurs chiffres, jamais par leur centre. Le test d'une nouvelle version tient en une question : la rupture y est-elle racontée comme un fait, sans plainte et sans héroïsme ? Si le récit commence à se dramatiser, la biographie a quitté l'archétype du témoin — et avec lui la seule chose qui la rendait crédible." },
    ],
  },
  {
    n: "08",
    title: "Autopsie des concurrents",
    subtitle: "Une fiche par acteur. Extrait : deux fiches sur cinq.",
    blocks: [
      { kind: "h", text: "Fiche — BATIFLOW" },
      { kind: "p", text: "La phrase, disséquée. « The construction management platform. » Le sujet est une catégorie entière. Le verbe est absent, remplacé par la copule implicite : ils ne font pas, ils sont. La promesse implicite est la centralisation — que la difficulté du bâtiment tienne à la dispersion." },
      { kind: "p", text: "Le mot dominant. « Platform ». Sa force ouvre un budget de direction. Son piège est l'obligation d'exhaustivité : une plateforme qui ne couvre pas une fonction attendue est jugée incomplète. Elle attire les structures de plus de cent salariés et repousse l'entreprise de trente personnes qui voit un déploiement de six mois." },
      { kind: "p", text: "L'angle mort. BATIFLOW ne peut pas occuper l'après-réception sans rendre secondaire tout ce qu'elle vend." },
      { kind: "quote", text: "Le contre-mouvement : « BATIFLOW pilote votre chantier pendant qu'il se déroule, et ils le font bien. Nous, on constitue ce qui vous restera après la réception. »" },
      { kind: "h", text: "Fiche — PREUVEO" },
      { kind: "p", text: "La phrase, disséquée. « Zéro litige, zéro reprise. » Pas de sujet, pas de verbe : deux absences promises. Pour que la phrase fonctionne, le lecteur doit se percevoir comme exposé à une menace — donc, implicitement, comme potentiellement en tort. C'est le concurrent le plus proche du territoire de SILLAGE, et celui qui l'occupe par le mauvais bout." },
      { kind: "p", text: "Le mot dominant. « Zéro ». Invérifiable — promettre zéro litige est une promesse que rien ne peut tenir, et le métier le sait. Cadrage défensif : attire les structures qui sortent d'un contentieux, segment réel mais étroit et momentané." },
      { kind: "p", text: "L'angle mort. PREUVEO ne peut pas parler de fierté professionnelle. Leur position exige que l'acheteur se sente menacé ; ils ne peuvent pas dire « votre travail mérite d'être établi »." },
      { kind: "h", text: "Synthèse — le champ en un paragraphe" },
      { kind: "quote", text: "Les cinq maisons partagent un postulat qu'aucune n'interroge : que le problème du bâtiment se situe pendant le chantier. Aucune ne va sur le seul moment où le suivi cesse d'être un confort pour devenir une question d'argent. SILLAGE refuse ce postulat entier : ce qui se joue pendant le chantier n'a de valeur que par ce qu'il en restera après." },
    ],
  },
  {
    n: "09",
    title: "La pièce signature",
    subtitle: "Essai publiable en l'état. Extrait : premier tiers.",
    blocks: [
      { kind: "h", text: "Les entreprises les plus attaquées ne sont pas les plus mauvaises" },
      { kind: "p", text: "J'ai mis dix ans à comprendre ça, et je l'ai compris en le payant." },
      { kind: "p", text: "Pendant toute ma période de maîtrise d'œuvre, j'ai cru que le bâtiment finissait par être juste. Que les bons s'en sortaient, que les mauvais se faisaient renvoyer, et que la qualité d'exécution constituait une forme de protection à long terme. C'est ce qu'on se raconte sur les chantiers, entre deux réunions. Ça finit toujours par se voir." },
      { kind: "p", text: "Ça ne finit pas toujours par se voir. C'est même l'inverse qui se produit, et la mécanique est plus retorse qu'elle n'en a l'air." },
      { kind: "p", text: "Les entreprises réellement mauvaises ne sont presque jamais contestées. Elles sont renvoyées. On arrête le chantier en cours de route, on retient le solde, on ne les rappelle plus. Le conflit se règle dans le présent — pendant que tout le monde a encore les choses en tête, que les échafaudages sont debout et que la mémoire est fraîche." },
      { kind: "p", text: "La contestation, la vraie, celle qui arrive par courrier des mois après la réception, vise presque toujours un chantier correct. Et si elle les vise, c'est précisément parce qu'ils ont bien travaillé. Une entreprise qui fait du bon travail installe une confiance. La confiance produit un silence documentaire : on ne photographie pas ce dont on est certain. Ce silence est la conséquence directe de la qualité — et c'est ce silence, huit mois plus tard, qui rend la qualité indéfendable." },
      { kind: "quote", text: "[…] L'essai complet fait 982 mots et se termine sur : « Elle ne les protège pas. Elle est ce qu'il faut protéger. »" },
    ],
  },
  {
    n: "10",
    title: "Manifeste d'origine",
    subtitle: "250 mots exactement. Extrait : ouverture et clôture.",
    blocks: [
      { kind: "p", text: "Dans le bâtiment, la qualité d'exécution ne protège personne. Seule la trace protège. Ce n'est pas une opinion sur le métier : c'est sa règle de fonctionnement, vérifiable à chaque contestation, et le secteur entier organise son déni de cette réalité parce qu'elle est désagréable à admettre." },
      { kind: "p", text: "L'ennemi de cette maison est l'idée que le travail bien fait parle de lui-même. Cette idée est confortable, elle emprunte les habits de la fierté professionnelle, et elle coûte de l'argent à ceux qui l'entretiennent. […]" },
      { kind: "quote", text: "SILLAGE rend le travail exécuté établissable. Ce qui a été fait est daté, situé, attesté au moment où cela se fait. Le jour où quelqu'un conteste, il n'y a rien à défendre de mémoire. Il y a un dossier à ouvrir." },
    ],
  },
  {
    n: "11",
    title: "Traduction pour investisseurs et partenaires",
    subtitle: "Le même récit, pour qui évalue un pari.",
    blocks: [
      { kind: "h", text: "La phrase de thèse" },
      { kind: "quote", text: "Le marché du suivi de chantier se dispute la période où le chantier se déroule, alors que la seule période où il coûte de l'argent est celle qui suit la réception ; SILLAGE occupe seule cet après, et chaque mois d'utilisation accroît un capital de trace que l'entreprise ne peut ni reconstituer ailleurs ni emporter chez un concurrent." },
      { kind: "h", text: "Le récit de douve" },
      { kind: "list", items: [
        "L'antériorité de la trace — une entreprise utilisatrice depuis dix-huit mois détient l'historique établi de tous ses chantiers livrés. Un concurrent qui copierait la fonction demain ne pourrait pas produire ce passé.",
        "Le vocabulaire occupé — établir, pièce, trace, établissable. Un concurrent qui les reprendrait renforcerait l'association plutôt que de la disputer.",
        "Le territoire documenté — la production éditoriale sur les contestations post-réception constitue le seul corpus chiffré du sujet.",
        "La conviction mise en marché — la rupture fondatrice est publique, datée, chiffrée.",
      ]},
      { kind: "h", text: "Le cadre de traction" },
      { kind: "p", text: "Les chiffres ne s'énoncent pas comme une performance mais comme la vérification d'une thèse. Quatre-vingt-onze dossiers complets exportés sur trois cents comptes en douze mois : ce n'est pas un indicateur d'usage, c'est la mesure de la fréquence réelle de l'événement sur lequel repose toute la position. Trente pour cent en un an — la contestation n'est pas un accident marginal, c'est une échéance statistique." },
    ],
  },
  {
    n: "12",
    title: "Brief d'identité visuelle",
    subtitle: "Écrit pour un designer qui pense.",
    blocks: [
      { kind: "h", text: "La thèse visuelle" },
      { kind: "p", text: "L'identité de SILLAGE doit produire, en un regard, la sensation d'un document qui fait foi. Pas la modernité, pas la convivialité : l'autorité tranquille d'une pièce qu'on produit devant quelqu'un qui conteste. Le registre de référence n'est pas celui du logiciel professionnel mais celui de l'archive — le constat d'huissier, le relevé topographique, le plan coté." },
      { kind: "h", text: "Doctrine typographique" },
      { kind: "p", text: "Une grotesque neutre de tradition suisse pour le texte : leur qualité est de ne pas avoir d'opinion. Et une chasse fixe systématique pour toute donnée datée — c'est le signal typographique universel de la donnée non retouchée, et la décision la plus rentable du brief. La direction tentante et fatale serait un serif éditorial pour les titres : élégant et faux, parce que le serif évoque l'opinion alors que SILLAGE produit un constat." },
      { kind: "h", text: "Doctrine chromatique" },
      { kind: "p", text: "La catégorie fait du bleu logiciel, de l'orange chantier ou du rouge d'alerte. Les trois sont à refuser : le bleu range SILLAGE dans le logiciel, l'orange est un cliché qui infantilise, le rouge appartient au registre de la peur. Le territoire disponible est le monochrome documentaire — encre, papier, deux gris — avec un unique accent désaturé réservé à ce qui est daté et validé. Sa rareté fait sa fonction." },
      { kind: "h", text: "Les quatre exécutions à refuser" },
      { kind: "list", items: [
        "Le logiciel professionnel contemporain — dégradé bleu-violet, illustrations isométriques. C'est précisément la catégorie dont il faut sortir.",
        "Le registre chantier viril — orange sécurité, contre-plongées. S'adresse à l'exécution, pas à la direction.",
        "Le juridique intimidant — sérifs classiques, filets doubles. C'est le territoire de PREUVEO, donc la peur.",
        "Le minimalisme sans grille — retire ce qu'il faut signaler : l'ordre. Le blanc doit être celui d'un formulaire, pas d'une galerie.",
      ]},
    ],
  },
  {
    n: "13",
    title: "Carte de positionnement",
    subtitle: "Deux axes qui révèlent ce que les axes de catégorie masquent.",
    blocks: [
      { kind: "h", text: "Les deux axes" },
      { kind: "p", text: "Les axes habituels — simple/complet, cher/abordable, PME/grands comptes — classent l'offre au lieu de révéler la décision. Deux autres rendent compte de la manière dont les acheteurs choisissent réellement." },
      { kind: "list", items: [
        "Horizontal — LE MOMENT COUVERT : pendant l'exécution ↔ après la réception. Sa force vient de ce que personne ne le formule. Il révèle que cinq maisons apparemment distinctes occupent la même case.",
        "Vertical — LE RAPPORT À L'ACHETEUR : l'acheteur est en défaut ↔ l'acheteur est à protéger. Cet axe détermine le décideur atteignable : un récit qui met l'acheteur en défaut ne remonte jamais jusqu'à la direction.",
      ]},
      { kind: "h", text: "La coordonnée de SILLAGE" },
      { kind: "p", text: "Extrême droite sur le moment couvert, extrême haut sur le rapport à l'acheteur. Seule case du champ occupée par une seule maison. La peur retombe, la culpabilité se refuse, mais la volonté de préserver son travail ne s'épuise pas — c'est ce qui rend la position soutenable dans la durée, et ce qui fait remonter le décideur." },
      { kind: "h", text: "L'espace inoccupé" },
      { kind: "p", text: "Une case reste vide : après la réception, côté « à protéger », mais du côté du maître d'ouvrage. Personne n'y va, et ce n'est pas un oubli — occuper cette case oblige à choisir un camp, et les acteurs du champ veulent vendre aux deux côtés. SILLAGE doit l'éviter parce qu'elle a choisi le sien. Les 5 % de revenu venus des maîtres d'ouvrage sont un signal de marché, pas une piste de croissance." },
      { kind: "h", text: "La réponse presse" },
      { kind: "quote", text: "« BATIFLOW est une plateforme de pilotage : elle sert pendant que le chantier se déroule, et elle le fait bien. Nous, on intervient sur ce qui reste après la réception. Ce ne sont pas deux réponses à la même question, ce sont deux moments différents du même chantier. La plupart des entreprises que nous accompagnons ont d'ailleurs déjà un outil de suivi. »" },
    ],
  },
  {
    n: "14",
    title: "Rapport d'intelligence d'audience",
    subtitle: "Quatre segments. Extrait : deux profils sur quatre.",
    blocks: [
      { kind: "h", text: "Segment 1 — L'entreprise générale" },
      { kind: "p", text: "En une phrase. Entreprise générale de 20 à 80 salariés, dirigée par quelqu'un issu du terrain, dix à quarante chantiers ouverts simultanément. Reconnaissable au fait que le dirigeant se décrit comme « entrepreneur du bâtiment » et non comme « chef d'entreprise »." },
      { kind: "p", text: "Le déclencheur réel. Pas la recherche d'un outil : la réception d'un courrier. La recherche démarre trois à six semaines après le règlement — jamais pendant, parce que pendant, il est occupé à limiter les dégâts." },
      { kind: "p", text: "La résistance. « On a déjà un groupe photos. » Objection de redondance, pas de prix. Derrière, une résistance plus profonde : accepter d'acheter revient à admettre que sa manière de travailler depuis vingt ans comportait une faille." },
      { kind: "quote", text: "Ses mots, en privé : « Le pire, c'est que je sais que je l'ai fait. Je me rappelle le jour. Mais qu'est-ce que vous voulez que je lui dise ? Que je m'en souviens ? Il s'en fout, lui, il a son architecte qui lui écrit des courriers. »" },
      { kind: "h", text: "Segment 3 — L'architecte indépendant" },
      { kind: "p", text: "La résistance. « Je ne suis pas sur le chantier tous les jours. » Objection d'usage, pas de valeur — et cette résistance est fondée. Deux à quatre chantiers simultanés, usage intermittent par nature : l'abonnement mensuel lui est structurellement mal ajusté." },
      { kind: "p", text: "Le contenu qui convertit. Aucun, dans le dispositif actuel — et c'est une décision, pas un manque. Ce segment reste servi sur une offre au chantier et cesse d'être adressé. Son départ va s'accélérer, et c'est le prix du territoire choisi." },
      { kind: "h", text: "Synthèse — l'audience en un paragraphe" },
      { kind: "quote", text: "Les quatre segments partagent une condition unique : ils exercent tous une activité où la valeur produite est physique, immédiate et non enregistrée, et où la contestation intervient toujours à retardement. À la seconde où l'échafaudage est démonté, tout ce qui a été exécuté devient invisible, et sa réalité ne dépend plus que de ce que chacun se rappelle. Dans un secteur où le travail s'efface derrière son propre résultat, seule la trace décide de ce qui a existé." },
    ],
  },
  {
    n: "15",
    title: "Playbook marketing",
    subtitle: "Les angles à explorer, ceux à refuser.",
    blocks: [
      { kind: "lead", text: "Ce playbook existe pour qu'une décision d'angle se prenne en trente secondes, sans réunion et sans arbitrage de la fondatrice. Il ne dit pas quoi produire. Il dit ce qui a le droit d'exister sous le nom SILLAGE." },
      { kind: "h", text: "Les angles à explorer" },
      { kind: "list", items: [
        "Le coût chiffré d'une contestation, ligne par ligne. C'est l'angle le plus performant du dispositif et le plus difficile à copier : il exige des chiffres réels, que les concurrents n'ont pas.",
        "Le mécanisme de l'oubli. Pourquoi le classeur de chantier meurt au bout de trois semaines — angle qui disculpe l'acheteur, donc angle qui convertit.",
        "L'asymétrie de préparation. Il a huit mois pour bâtir son dossier, vous avez le mercredi soir. Angle émotionnel, à réserver aux formats courts.",
        "Le dossier ouvert. Un désaccord réel, anonymisé, résolu par trois lignes d'horodatage.",
      ]},
      { kind: "h", text: "Les angles à refuser" },
      { kind: "list", items: [
        "Toute comparaison frontale avec BATIFLOW. Nommer un concurrent le fait exister dans une tête où il n'était pas.",
        "Le vocabulaire de la transformation digitale. Il désigne un acheteur que SILLAGE ne vise pas et fait fuir celui qu'elle vise.",
        "La peur brute du procès. On constate un coût, on n'agite pas une menace : un acheteur en position de défense n'achète pas.",
        "Toute promesse de gain de temps. C'est l'argument de la catégorie « suivi de chantier » — celle que SILLAGE a précisément quittée.",
      ]},
      { kind: "h", text: "Le test avant publication" },
      { kind: "quote", text: "Un concurrent pourrait-il publier ce contenu à l'identique en changeant seulement le logo ? Si oui, il ne sort pas. Ce test élimine environ la moitié de ce qu'une équipe marketing produit spontanément, et c'est son intérêt." },
    ],
  },
  {
    n: "16",
    title: "Playbook contenu",
    subtitle: "La voix, transformée en règles applicables.",
    blocks: [
      { kind: "lead", text: "Écrit pour que quelqu'un qui n'a jamais parlé à Claire Vasseur écrive comme SILLAGE dès sa première semaine. La voix cesse d'être une intuition transmissible seulement par osmose." },
      { kind: "h", text: "Les six règles" },
      { kind: "list", items: [
        "Un fait avant une opinion. Toujours. Si la première phrase ne contient pas un chiffre, une date ou une scène, elle est à réécrire.",
        "Constater, jamais alarmer. « 91 dossiers sur 300 comptes en douze mois » — pas « vous êtes en danger ».",
        "Le vocabulaire du chantier, pas celui du logiciel. On dit réception, reprise, désordre, levée de réserves. Jamais workflow, jamais solution, jamais optimiser.",
        "Une idée par pièce. Si deux idées valent la peine, ce sont deux pièces.",
        "Disculper l'acheteur, systématiquement. La faille est de conception, pas de discipline. Cette règle prime sur toutes les autres.",
        "Finir sur la phrase, pas sur le résumé. Le dernier paragraphe ne récapitule rien.",
      ]},
      { kind: "h", text: "Le test de la relecture" },
      { kind: "pair", beforeLabel: "Ce qu'on écrit spontanément", afterLabel: "Ce qu'on publie", before: "SILLAGE vous aide à digitaliser le suivi de vos chantiers et à gagner du temps au quotidien.", after: "Huit mois après la réception, il vous reste ce que vous avez enregistré. Le reste, c'est votre parole contre la sienne." },
      { kind: "quote", text: "La voix de SILLAGE n'est pas une affaire de ton, c'est une affaire de position : elle parle depuis le chantier, pas depuis l'éditeur de logiciel. Un texte qui pourrait être signé par un éditeur est un texte raté, même bien écrit." },
    ],
  },
  {
    n: "17",
    title: "Playbook réseaux sociaux",
    subtitle: "Le ton par plateforme, le rythme, les réponses.",
    blocks: [
      { kind: "lead", text: "Trois plateformes, trois usages distincts, une seule doctrine. Ce qui change est la forme ; ce qui ne change jamais est la position." },
      { kind: "table", head: ["Plateforme", "Usage", "Cadence"], rows: [
        ["LinkedIn", "L'argument développé. Le chiffrage, le mécanisme, le dossier ouvert.", "Deux fois par semaine"],
        ["YouTube", "La démonstration filmée sur chantier réel. Format long, zéro montage nerveux.", "Une fois par mois"],
        ["Terrain (salons, fédérations)", "La conversation directe. Aucun contenu produit : de l'écoute qui alimente les deux autres.", "Continu"],
      ]},
      { kind: "h", text: "La règle des commentaires" },
      { kind: "list", items: [
        "Répondre une fois, précisément, et s'arrêter. Le deuxième aller-retour n'apporte rien à personne d'autre qu'aux deux personnes qui l'écrivent.",
        "Face à un concurrent qui commente : remercier, ne jamais argumenter. Le débat public profite toujours au plus petit des deux.",
        "Face à un client mécontent : sortir du fil en une phrase et proposer un appel. Toujours, sans exception.",
        "Ne jamais poser de question dont la réponse ne nous intéresse pas réellement.",
      ]},
      { kind: "h", text: "Ce qui ne se publie pas" },
      { kind: "list", items: [
        "Les coulisses de l'équipe, les recrutements célébrés, les levées de fonds. SILLAGE n'a pas d'histoire d'entreprise à raconter, elle a un moment de chantier à occuper.",
        "Les carrousels de conseils génériques. Ils performent et ne construisent rien.",
        "Toute publication dont l'objectif réel est l'engagement plutôt que la position.",
      ]},
    ],
  },
  {
    n: "18",
    title: "Playbook vente",
    subtitle: "Présenter la maison, désamorcer avant l'objection.",
    blocks: [
      { kind: "lead", text: "L'ordre importe plus que les arguments. Ce playbook fixe la séquence, parce qu'une bonne réponse donnée au mauvais moment est une objection créée." },
      { kind: "h", text: "L'ouverture" },
      { kind: "quote", text: "« Votre dernière contestation, elle remonte à quand ? » — Jamais « comment vous gérez vos chantiers ? ». La première question place la conversation dans la catégorie de SILLAGE ; la seconde la place dans celle du suivi de chantier, où SILLAGE est un acteur parmi douze." },
      { kind: "h", text: "Les quatre objections, dans l'ordre où elles arrivent" },
      { kind: "table", head: ["Objection", "Ce qu'elle cache", "La réponse"], rows: [
        ["« On a déjà un groupe photos »", "Redondance apparente, pas prix", "« Combien de temps pour retrouver une photo de mars dernier ? Le problème n'est pas de prendre la photo, c'est de la retrouver huit mois après. »"],
        ["« C'est cher pour ce que c'est »", "Comparaison à un outil de suivi", "Ne pas défendre le prix. Rappeler le coût moyen d'une contestation perdue, et laisser le calcul se faire."],
        ["« Mes gars ne rempliront jamais »", "Expérience réelle d'échec passé", "« Ils n'auront rien à remplir. Si quelque chose est à remplir, ce ne sera pas fait — c'est pour ça que le classeur meurt en trois semaines. »"],
        ["« On va y réfléchir »", "Absence d'échéance ressentie", "Ne pas relancer sur le produit. Relancer à la prochaine réception de chantier : l'échéance vient d'elle-même."],
      ]},
      { kind: "h", text: "La clôture" },
      { kind: "p", text: "Inviter le non plutôt que poursuivre le oui. « Si vous n'avez pas eu de contestation en trois ans, ce n'est pas pour vous, et je préfère vous le dire. » Cette phrase perd des affaires marginales et gagne de la crédibilité sur toutes les autres — elle est la version commerciale du refus qui fonde la maison." },
    ],
  },
  {
    n: "19",
    title: "Playbook support",
    subtitle: "Tenir la voix quand la situation est mauvaise.",
    blocks: [
      { kind: "lead", text: "Une identité qui ne survit pas au premier incident n'est pas une identité, c'est une campagne. Ce playbook couvre les moments où le client est en colère, où l'outil a échoué, où la nouvelle est mauvaise." },
      { kind: "h", text: "Les quatre règles" },
      { kind: "list", items: [
        "S'excuser en une phrase, puis réparer. L'excuse longue déplace l'attention vers celui qui s'excuse.",
        "Ne jamais se retrancher derrière la procédure. Expliquer la raison réelle, même quand elle est peu flatteuse.",
        "Annoncer la mauvaise nouvelle en premier, jamais enterrée après trois paragraphes de contexte.",
        "Ne jamais promettre une date qu'on ne tiendra pas pour calmer quelqu'un sur le moment.",
      ]},
      { kind: "h", text: "Le cas le plus grave : une donnée perdue" },
      { kind: "p", text: "SILLAGE vend une trace. Perdre une donnée n'est pas un incident technique, c'est une atteinte à la promesse centrale. Le protocole est écrit à part : notification dans l'heure, périmètre exact, ce qui est récupérable et ce qui ne l'est pas, appel de la fondatrice si le client a un dossier en cours." },
      { kind: "quote", text: "« On a perdu vos données de la semaine du 3 au 9. Voici précisément ce qui manque. Ce n'est pas récupérable et je ne vais pas vous dire le contraire. Si vous avez une contestation en cours sur cette période, appelez-moi directement, aujourd'hui. »" },
    ],
  },
  {
    n: "20",
    title: "Playbook RH & management",
    subtitle: "La culture, retraduite en règle de décision.",
    blocks: [
      { kind: "lead", text: "Une doctrine qui ne guide aucune décision interne finit en affiche dans un couloir. Ce playbook la rend opérante à l'embauche, à l'intégration et dans les arbitrages." },
      { kind: "h", text: "La question qui tranche" },
      { kind: "quote", text: "« Est-ce que cette décision ressemble à nous ? » — pas « qui est le plus ancien », pas « qu'est-ce qui fait consensus ». Une seule question, posée à voix haute, y compris quand la réponse coûte de l'argent." },
      { kind: "h", text: "Recruter" },
      { kind: "list", items: [
        "Recruter sur le refus, pas sur le parcours. La question d'entretien est : « racontez-moi une fois où vous avez refusé un client ». Une réponse vide est éliminatoire.",
        "Pour les postes en contact avec le chantier : une expérience de terrain prime sur une expérience logicielle. On peut apprendre le logiciel, pas la légitimité.",
        "Ne jamais recruter quelqu'un qui n'a pas lu la plateforme narrative avant le deuxième entretien.",
      ]},
      { kind: "h", text: "Intégrer" },
      { kind: "p", text: "L'intégration commence par l'ennemi, jamais par le produit. Première semaine : lire quatre dossiers de contestation réels, dans le détail. Un nouvel arrivant qui a compris le moment de la contestation trouve seul les bons mots ; celui qui a d'abord appris les fonctionnalités passe six mois à parler comme un éditeur de logiciel." },
      { kind: "quote", text: "Le signal de réussite est simple et vérifiable : au bout de deux semaines, un nouvel arrivant écrit un message client qu'on n'a pas besoin de corriger." },
    ],
  },
],
    ctaTitle: "Voilà ce que vous recevez.",
    ctaBody:
      "Le même travail, appliqué à la vôtre, commencez par une extraction qu'aucune machine ne peut automatiser : votre vérité, votre singularité, ce que vous ne voyez plus parce que vous êtes dedans.",
    ctaPrimary: "Commander le récit · 2 900 €",
    ctaSecondary: "Commencer par le diagnostic",
    ctaFoot: "",
  },
  en: {
    eyebrow: "Extract — pieces 02 and 03, on a real house",
    title: "BRAND NARRATIVE ARCHITECTURE",
    house: "SILLAGE",
    edition: "Commission n° 000 — twenty parts",
    disclaimer:
      "Published as an illustration. SILLAGE, its founder and the houses named here correspond to no existing company.",
    partialTitle: "This is only a portion of what you would receive.",
    partialBody:
      "The full commission runs to twenty parts and roughly ninety pages. The page you are reading presents the complete structure — all twenty parts are here — but each is tightened for the screen. What this web edition leaves out:",
    partialPoints: [
      "The long development of each analysis, reduced here to its conclusion",
      "The complete competitor files, one per player, dissected sentence by sentence",
      "The entire deployment kit: ready-to-use copy, fifteen content angles, the first-week plan",
      "The four detailed audience profiles, with triggers, resistances and exact wording",
      "The complete visual identity brief, with directional references and executions to refuse",
      "The full signature essay, publishable as-is, and the origin manifesto",
      "The seven playbooks and the coherence guide, in long form: full scripts, objection trees, incident protocols and interview grids",
    ],
    dossierTitle: "The dossier",
    dossierRows: [
      ["The house", "SILLAGE — Lyon, four years old. Construction site tracking software."],
      ["The founder", "Claire Vasseur, architect, ten years in project supervision."],
      ["The state", "300 paying accounts. €47,000 monthly recurring revenue. Six people. No funding."],
      ["The moment", "The launch of SILLAGE 2, the version for general contractors, on 21 September 2027."],
      ["The fracture", "Built for independent architects. 61% of revenue now comes from general contractors. The language still speaks to the former."],
      ["What she came to say", "\u201cWe're losing architects and we can't move upmarket with contractors. We're stuck in the middle.\u201d"],
    ],
    contentsTitle: "The twenty parts",
    readerPrev: "← Previous part",
    readerNext: "Next part →",
    readerPageOfTemplate: "Part {i} / {n}",
    readerOfCount: "of {n} parts",
    parts: [
  {
    n: "01",
    title: "Differentiation Diagnostic",
    subtitle: "The narrative field, dissected.",
    blocks: [
      { kind: "h", text: "The field as it stands" },
      { kind: "table", head: ["House", "Their sentence", "What it really promises"], rows: [
        ["BATIFLOW", "\u201cThe construction management platform.\u201d", "That the problem is dispersion. Buys exhaustiveness at the cost of memorability."],
        ["CHANTIER.IO", "\u201cDigitise your sites.\u201d", "That you are behind. Wins the user, loses whoever signs."],
        ["BAUSYNC", "\u201cCollaboration on site.\u201d", "That the friction is relational. A word nobody contests is a word nobody remembers."],
        ["CARNET+", "\u201cThe site logbook, new generation.\u201d", "That the logbook is still the right unit of thought. Anchors itself in the object it claims to surpass."],
        ["PREUVEO", "\u201cZero disputes, zero rework.\u201d", "That fear of litigation drives the purchase. A defensive register the trade rejects."],
      ]},
      { kind: "p", text: "Strip the names and all five sentences say the same thing in five disguises: the site is poorly held while it runs, and we will hold it better. All of them sit during. The entire field is locked onto three ideas — efficiency, modernisation, coordination — and fights over the same second of time." },
      { kind: "quote", text: "None speaks of the after. None speaks of the moment the site is delivered, the crew is elsewhere, and a client contests something eight months later that nobody remembers precisely. Yet that is the only moment site tracking stops being a convenience and becomes a question of money." },
      { kind: "h", text: "The current sentence — autopsy" },
      { kind: "lead", text: "\u201cSimple, visual construction site tracking.\u201d Six words, three structural faults." },
      { kind: "list", items: [
        "\u201cConstruction site tracking\u201d — that is the name of the category, not of what SILLAGE does. All five competitors could write it without lying. A positioning sentence must be unavailable to the others.",
        "\u201cSimple\u201d — three competitors already claim it on their pages. It is a product attribute, not a position in perception. And it signals light, therefore less complete, therefore cheaper.",
        "\u201cVisual\u201d — describes the means instead of the result. It turns SILLAGE into a photo app, when everyone already owns one. The sentence manufactures its own principal objection: \u201cwe already have a photo group chat.\u201d",
      ]},
      { kind: "p", text: "All of SILLAGE's real value is absent from the sentence that describes SILLAGE. The consequence is a price ceiling: a sentence fixes a reference class, and price is never negotiated — it is deduced from the category you are compared to. Filed under productivity, SILLAGE is worth two hours a week, which is precisely the €40 per user per month ceiling it keeps hitting." },
      { kind: "h", text: "The chosen ground" },
      { kind: "p", text: "Four territorial vacuums were identified: proof, zero effort, asymmetry, transmission. SILLAGE takes the first." },
      { kind: "list", items: [
        "It is already true — timestamping, client validation and ordered archiving all exist. The repositioning demands a rewrite of the language, not of the product.",
        "It shifts the reference class: proof belongs to risk protection, not to productivity tools. The ceiling disappears.",
        "It targets the right buyer: general contractors carry the direct cost of a dispute. Already 61% of revenue.",
        "It raises the decision-maker: a tool is bought by the user, a protection by the directors.",
        "It destroys the principal objection: against a house that constitutes proof, \u201cwe already have a photo group\u201d collapses in one sentence.",
      ]},
      { kind: "p", text: "What the territory costs, stated plainly: the architects. The proof narrative addresses whoever executes and carries the cost. That segment's 16% of revenue will decline. This is not a side effect — it is the entry price." },
      { kind: "h", text: "The verdict" },
      { kind: "quote", text: "SILLAGE does not stand in the middle of the field: it stands inside someone else's category, using words that already belong to five houses, describing the means it employs instead of the moment it serves. Its price ceiling is not a perceived-value problem — it is the arithmetic consequence of a sentence that files the house under productivity when it belongs under protection." },
    ],
  },
  {
    n: "02",
    title: "Narrative Platform",
    subtitle: "The constitution of the house.",
    blocks: [
      { kind: "h", text: "The core conviction" },
      { kind: "quote", text: "In construction, quality of execution protects no one. Only the record protects. And the entire trade organises its denial of this." },
      { kind: "p", text: "What makes this sentence unavailable to the others is its second half. All five competitors can concede that documentation matters. None can say the trade organises its denial — because they all sell to a profession they would rather flatter." },
      { kind: "h", text: "The origin, rewritten as mythology" },
      { kind: "p", text: "The site had been delivered eight months earlier. A townhouse in the sixth arrondissement of Lyon, nothing remarkable, a clean job. Then the letter arrived: the client was contesting rework on the second-floor partitions. Claire knew otherwise. She remembered the conversation. She remembered the light in the room." },
      { kind: "p", text: "She opened her files. Photographs scattered across three years without order. Emails about other things. Messages drowned in a thread where thirty people had written for six months. And her memory — precise, certain, useless. Three weeks reconstructing a chronology nobody really disputed and nobody could establish. Fourteen thousand euros." },
      { kind: "p", text: "What she refused that day was not the sum, it was the frame. She had believed for ten years that she practised a trade judged on what you build. She discovered a trade judged on what you can establish — and the gap between the two is paid in cash, always by whoever worked well and archived badly." },
      { kind: "h", text: "The enemy, named precisely" },
      { kind: "quote", text: "The enemy of SILLAGE is the idea that good work speaks for itself." },
      { kind: "list", items: [
        "It disguises itself as professional pride: \u201cmy work shows.\u201d The pride then works against whoever carries it.",
        "It makes documentation shameful: to document is to cover yourself; to cover yourself is to anticipate conflict; to anticipate conflict is to betray trust.",
        "It charges the best: bad firms are dismissed before handover, disputes target correct sites.",
        "It persists because nobody counts: the cost is spread across unbilled rework, director hours and damaged relationships. Invisible in the accounts, therefore never fought.",
      ]},
      { kind: "h", text: "The promise" },
      { kind: "quote", text: "SILLAGE makes executed work establishable." },
      { kind: "p", text: "Not visible, not shared, not better organised. Establishable — enforceable, datable, producible in front of someone contesting it." },
      { kind: "h", text: "The founder archetype" },
      { kind: "p", text: "The witness. Not the expert, not the visionary, not the campaigner: the one who was present, who saw, and who reports without arranging. Three prohibitions follow — never dramatise, never claim victimhood, judge mechanisms and never people. It is the exact archetype of the trade: construction despises those who speak loudly and respects those who observe accurately." },
      { kind: "h", text: "The four pillars" },
      { kind: "list", items: [
        "I — Memory is a balance of power. Every dispute is a conflict of memories, and without a record the memory that wins is not the most faithful but the best supported.",
        "II — Good work does not defend itself. Nobody disputes a botched site: it gets redone. Disputes target the correct ones.",
        "III — The record must build itself without thought. Any documentation demanding a dedicated effort does not get done. That is a law, not a character flaw.",
        "IV — The asymmetry of the site. Whoever commissions has time and counsel; whoever executes has eleven other sites.",
      ]},
      { kind: "h", text: "The narrative spine" },
      { kind: "quote", text: "Construction tells itself it is a trade judged on what you build, and operates as a trade judged on what you can establish. SILLAGE was born of that observation — not as one more tool for holding the site while it runs, but as the house that constitutes the proof of what was done, so that the day someone contests, there is nothing to defend from memory, only a file to open." },
    ],
  },
  {
    n: "03",
    title: "Language System",
    subtitle: "The vocabulary, the tone, the daily tests.",
    blocks: [
      { kind: "h", text: "The signature lexicon" },
      { kind: "p", text: "Twenty-two words which, used together and repeated over time, build a recognisable verbal fingerprint. Extract:" },
      { kind: "table", head: ["Word", "Why this one"], rows: [
        ["establish", "The central verb. Carries the idea of proof without summoning a courtroom."],
        ["exhibit", "A file term. Turns a photograph into an enforceable element."],
        ["dispute", "The word of the moment of truth. Factual where \u201clitigation\u201d dramatises."],
        ["by-product", "Carries pillar III: the record is never a task."],
        ["establishable", "A deliberate coinage, exclusive property of the house."],
        ["eight months later", "A temporal marker turned signature."],
      ]},
      { kind: "h", text: "The forbidden list" },
      { kind: "p", text: "Three tiers. Tier A — immediate disqualifiers: simple, visual, time saved, platform, digitise, zero disputes, new generation. One use collapses the position. Tier B — handle with caution: photo (never as subject), litigation (never as fear), proof (never as threat). Tier C — industry static: innovative, intuitive, turnkey, ecosystem, streamline, optimise, centralise." },
      { kind: "h", text: "Tone calibration" },
      { kind: "pair", beforeLabel: "Wrong", afterLabel: "Right", before: "In a context where traceability is becoming a major issue for construction stakeholders, it appears essential to be able to demonstrate the compliance of executed works.", after: "You know you're right. You can't show it. You pay." },
      { kind: "pair", beforeLabel: "Wrong", afterLabel: "Right", before: "Many firms still neglect the documentation of their sites.", after: "The site logbook doesn't fail through lack of rigour. It fails because you fill it in afterwards." },
      { kind: "h", text: "The sentence test" },
      { kind: "list", items: [
        "Could BATIFLOW write this sentence without lying? If yes, it isn't ours yet.",
        "Is the moment of dispute present, even implicitly?",
        "Are we describing a means or a result? The means is the photograph. The result is the exhibit.",
        "Are we observing or alarming? A figure, a duration, a frequency — never a \u201cwhat if\u201d.",
        "Would a fifty-year-old site manager recognise his trade in this vocabulary?",
      ]},
      { kind: "h", text: "The rewrite principle" },
      { kind: "quote", text: "We speak of the moment SILLAGE serves, never of what SILLAGE does. What the house does is ordinary and already in everyone's phone; what is not ordinary is the moment it becomes decisive." },
    ],
  },
  {
    n: "04",
    title: "Deployment Kit",
    subtitle: "The first ninety days.",
    blocks: [
      { kind: "h", text: "The sequence around day D (the launch of SILLAGE 2)" },
      { kind: "list", items: [
        "D-90 to D-60 — Name the problem. No selling through content. The single objective is that \u201cthe dispute eight months after handover\u201d becomes a shared mental category.",
        "D-60 to D-30 — Price the cost. The problem exists; now it needs a number. The least spectacular and most decisive phase: it fixes the price ceiling for the next three years.",
        "D-30 to D-1 — Close the objection. The photo group is dismantled once, publicly, cleanly: what will be said on day D is revealed only then.",
        "Day D — Announce SILLAGE 2 to general contractors, with the text written in advance and the press kit ready. D+1 to D+30 — cold re-engagement of every prospect touched, then a written review of what carried.",
      ]},
      { kind: "h", text: "The five content territories" },
      { kind: "table", head: ["Territory", "Cadence", "Example angle"], rows: [
        ["Memory", "Weekly", "\u201cWhat the insurance assessor looks at first, and it isn't the site\u201d"],
        ["The real cost", "Twice monthly", "\u201cWhat a disputed rework actually costs, line by line\u201d"],
        ["Zero effort", "Weekly", "\u201cThe site logbook always dies after three weeks\u201d"],
        ["Asymmetry", "Monthly", "\u201cHe has eight months to prepare. You have Wednesday evening\u201d"],
        ["The open file", "Twice monthly", "\u201cThree lines that closed a \u20ac22,000 disagreement\u201d"],
      ]},
      { kind: "h", text: "Reframes inventory" },
      { kind: "list", items: [
        "From during to after — the product doesn't change, the moment of its value moves. The matrix reframe from which the other four follow.",
        "From quality to proof — doing well is what you protect, and it does not protect itself.",
        "From accident to due date — 91 files across 300 accounts in twelve months. You don't insure against an accident, you prepare for a due date.",
        "From discipline to design — documentation fails by design, not by negligence. This reframe exonerates the buyer, which is strategically decisive.",
        "From tool to protection — this is the reframe that carries the price.",
      ]},
      { kind: "h", text: "The first week, one by one" },
      { kind: "p", text: "Seven dated pieces, each with its surface, length, pillar and the reframe it performs. Day 1 opens on an overheard sentence and sells nothing; day 3 publishes the first costing, the source that days 31 to 60 will refine; day 7 re-engages every prospect from the last six months under the subject line \u201cYour last dispute\u201d." },
      { kind: "quote", text: "What changes commercially from week one: the opening question is no longer \u201chow do you manage your sites today?\u201d but \u201cwhen was your last dispute?\u201d. One question shifts the reference class faster than three months of content." },
    ],
  },
  {
    n: "05",
    title: "Coherence Guide",
    subtitle: "Written for the founder, not for the team.",
    blocks: [
      { kind: "h", text: "The coherence test" },
      { kind: "list", items: [
        "Does this speak of the during or the after?",
        "Could a competitor claim the same thing without lying?",
        "Are we observing or alarming?",
        "Does this exonerate or does it blame? Nobody buys from a defensive position.",
        "Would a fifty-year-old site manager recognise his trade in this?",
      ]},
      { kind: "h", text: "Three decisions that will arrive" },
      { kind: "p", text: "A podcast invites Claire on \u201ctools that save time\u201d: accept the platform, refuse the topic. An hour spent discussing productivity is worth less than nothing — it publicly anchors the reference class the house is trying to leave." },
      { kind: "p", text: "An excellent marketing hire writes \u201cstreamline communication\u201d and \u201cintuitive tool\u201d: do not hire. Vocabulary is not a coat of paint, it is the position itself. Someone who writes \u201cstreamline\u201d is not making a style error, they are thinking from the field's category." },
      { kind: "p", text: "A trade federation proposes bundling SILLAGE into a digital toolkit: refuse that form, propose the other. Appearing among seven tools means paying to be compared. The counter-proposal — producing the annual study on post-handover disputes under the federation's name — gives more exposure and installs the house as the source of the subject." },
      { kind: "h", text: "The drift watch" },
      { kind: "list", items: [
        "The word \u201csimple\u201d returns in a text and nobody notices. The earliest sign.",
        "A release is announced by its function rather than by the exhibit it produces.",
        "A meeting opens on \u201chow do you manage your sites today?\u201d.",
        "A discount is granted to win a deal.",
        "Content is published for the sake of publishing, tied to no territory.",
        "An architect's request alters daily use for contractors.",
      ]},
      { kind: "h", text: "The final instruction" },
      { kind: "quote", text: "The morning you defend this position for the first time in front of someone asking how you differ from BATIFLOW, you won't need a better answer: you'll need not to answer that question. Don't plead. Observe. Say what you saw, say what it costs, and let the person opposite recognise their own story — because they have one, and they have never heard anyone name it." },
    ],
  },
  {
    n: "06",
    title: "Pricing Narrative",
    subtitle: "Price as doctrine.",
    blocks: [
      { kind: "h", text: "Price as doctrine" },
      { kind: "p", text: "SILLAGE's price pays for neither features nor usage time: it pays for the transfer of a position. What the firm buys is to stop being the one defending itself from memory. It is not expensive for a tracking tool. It is trivial for never again paying for rework you did not cause." },
      { kind: "h", text: "The value frame" },
      { kind: "p", text: "Five steps to establish before the number is spoken. Nothing is said until the prospect has told their own dispute and priced it themselves — a figure spoken by SILLAGE is an argument, a figure spoken by the prospect is data." },
      { kind: "list", items: [
        "\u201cWhen was your last dispute?\u201d",
        "\u201cWhat did it cost you, all in?\u201d",
        "\u201cYou were right, but you couldn't establish it.\u201d",
        "\u201cAcross our three hundred accounts, there were ninety-one in twelve months.\u201d",
        "\u201cThe question isn't whether SILLAGE costs more than a tracking tool. It's what the next one costs.\u201d",
      ]},
      { kind: "h", text: "The two price objections" },
      { kind: "pair", beforeLabel: "The objection", afterLabel: "The reframe", before: "\u201cIt's more expensive than BATIFLOW.\u201d", after: "\u201cYes. We don't do the same thing. If your problem is holding the schedule, take BATIFLOW, genuinely. If your problem is what happens eight months later, we're the only ones on that ground. These aren't two prices for the same thing, they're two prices for two moments.\u201d" },
      { kind: "pair", beforeLabel: "The objection", afterLabel: "The reframe", before: "\u201cWe already have a photo group chat.\u201d", after: "\u201cYou already take the photographs — taking them was never the problem. On the day of the dispute you have to produce an ordered, dated chronology with the client's sign-off. In a group chat, none of those three things exist. A photograph is not an exhibit.\u201d" },
      { kind: "h", text: "The discount position" },
      { kind: "p", text: "A discount at equal scope says three things: that the listed price was arbitrary, that the stated value was inflated, and that the buyer was right to file you in the low category. The answer never varies — never adjust the price, adjust the scope." },
    ],
  },
  {
    n: "07",
    title: "Founder Bio System",
    subtitle: "Four formats, one rupture. Extract: two formats of four.",
    blocks: [
      { kind: "h", text: "The fifty-word bio" },
      { kind: "quote", text: "Claire Vasseur spent ten years supervising building sites before paying fourteen thousand euros for work she had done well and could not prove. She founded SILLAGE in Lyon to establish what was executed on a construction site. Three hundred firms use it." },
      { kind: "h", text: "The dinner answer" },
      { kind: "p", text: "Three versions, depending on who is asking. To a fellow founder: \u201cI make something for construction firms. When a site is delivered and eight months later the client contests something, the firm knows it's right but has nothing to show. So it pays. We build the record as the work happens, without anyone having to fill anything in — because the moment you have to fill something in, it doesn't get done. I started this after paying fourteen thousand euros in exactly that situation.\u201d" },
      { kind: "h", text: "The maintenance rule" },
      { kind: "p", text: "These texts change through their figures, never through their centre. The test for a new version is one question: is the rupture told as a fact, without complaint and without heroism? If the account starts to dramatise, the bio has left the witness archetype — and with it the only thing that made it credible." },
    ],
  },
  {
    n: "08",
    title: "Competitor Autopsy",
    subtitle: "One file per player. Extract: two of five.",
    blocks: [
      { kind: "h", text: "File — BATIFLOW" },
      { kind: "p", text: "The sentence, dissected. \u201cThe construction management platform.\u201d The subject is an entire category. The verb is absent, replaced by an implicit copula: they do not do, they are. The implicit promise is centralisation — that construction's difficulty lies in dispersion." },
      { kind: "p", text: "The dominant word. \u201cPlatform\u201d. Its strength opens a director-level budget. Its trap is the obligation of exhaustiveness: a platform not covering an expected function is judged incomplete. It attracts firms above a hundred staff and repels the thirty-person contractor who sees a six-month rollout." },
      { kind: "p", text: "The blind spot. BATIFLOW cannot occupy the post-handover period without making everything it sells secondary." },
      { kind: "quote", text: "The counter-move: \u201cBATIFLOW steers your site while it runs, and they do it well. We constitute what will remain after handover.\u201d" },
      { kind: "h", text: "File — PREUVEO" },
      { kind: "p", text: "The sentence, dissected. \u201cZero disputes, zero rework.\u201d No subject, no verb: two promised absences. For the sentence to work, the reader must see themselves as exposed to a threat — therefore, implicitly, as potentially at fault. It is the closest competitor to SILLAGE's territory, and the one occupying it from the wrong end." },
      { kind: "p", text: "The dominant word. \u201cZero\u201d. Unverifiable — promising zero disputes is a promise nothing can keep, and the trade knows it. Defensive framing: attracts firms emerging from a contentious case, a real but narrow and momentary segment." },
      { kind: "p", text: "The blind spot. PREUVEO cannot speak of professional pride. Their position requires the buyer to feel threatened; they cannot say \u201cyour work deserves to be established\u201d." },
      { kind: "h", text: "Synthesis — the field in one paragraph" },
      { kind: "quote", text: "The five houses share an assumption none of them questions: that construction's problem sits during the site. None goes to the only moment tracking stops being a convenience and becomes a question of money. SILLAGE refuses that assumption entirely: what happens during the site only has value through what will remain of it after." },
    ],
  },
  {
    n: "09",
    title: "The Signature Piece",
    subtitle: "Essay publishable as-is. Extract: first third.",
    blocks: [
      { kind: "h", text: "The most contested firms are not the worst ones" },
      { kind: "p", text: "It took me ten years to understand that, and I understood it by paying for it." },
      { kind: "p", text: "Throughout my years in site supervision, I believed construction was ultimately fair. That the good ones came through, the bad ones got dismissed, and quality of execution amounted to a form of long-term protection. That is what people tell each other on site, between meetings. It always shows in the end." },
      { kind: "p", text: "It does not always show in the end. The opposite happens, and the mechanism is more devious than it looks." },
      { kind: "p", text: "Genuinely bad firms are almost never contested. They are dismissed. The site is halted midway, the balance withheld, they are never called again. The conflict settles in the present — while everyone still has it in mind, the scaffolding is up and the memory is fresh." },
      { kind: "p", text: "The real dispute, the one arriving by letter months after handover, almost always targets a correct site. And it targets them precisely because they worked well. A firm doing good work installs trust. Trust produces documentary silence: you do not photograph what you are certain of. That silence is the direct consequence of quality — and it is that silence, eight months later, that makes the quality indefensible." },
      { kind: "quote", text: "[\u2026] The complete essay runs to 982 words and ends on: \u201cIt does not protect them. It is what needs protecting.\u201d" },
    ],
  },
  {
    n: "10",
    title: "Origin Manifesto",
    subtitle: "Exactly 250 words. Extract: opening and close.",
    blocks: [
      { kind: "p", text: "In construction, quality of execution protects no one. Only the record protects. This is not an opinion about the trade: it is its operating rule, verifiable at every dispute, and the entire sector organises its denial of it because it is unpleasant to admit." },
      { kind: "p", text: "The enemy of this house is the idea that good work speaks for itself. That idea is comfortable, it borrows the clothes of professional pride, and it costs money to those who maintain it. [\u2026]" },
      { kind: "quote", text: "SILLAGE makes executed work establishable. What was done is dated, located, attested at the moment it happens. The day someone contests, there is nothing to defend from memory. There is a file to open." },
    ],
  },
  {
    n: "11",
    title: "Investor & Partner Translation",
    subtitle: "The same narrative, for those evaluating a bet.",
    blocks: [
      { kind: "h", text: "The thesis sentence" },
      { kind: "quote", text: "The site-tracking market fights over the period the site runs, while the only period that costs money is the one after handover; SILLAGE occupies that after alone, and every month of use grows a capital of record the firm can neither reconstruct elsewhere nor carry to a competitor." },
      { kind: "h", text: "The moat narrative" },
      { kind: "list", items: [
        "Record precedence — a firm using SILLAGE for eighteen months holds the established history of every site it has delivered. A competitor copying the function tomorrow could not produce that past.",
        "Occupied vocabulary — establish, exhibit, record, establishable. A competitor adopting them would reinforce the association rather than contest it.",
        "Documented territory — the editorial output on post-handover disputes constitutes the only quantified body of work on the subject.",
        "Conviction in market — the founding rupture is public, dated, priced.",
      ]},
      { kind: "h", text: "The traction frame" },
      { kind: "p", text: "The figures are stated not as performance but as verification of a thesis. Ninety-one complete files exported across three hundred accounts in twelve months: that is not a usage metric, it is the measure of how frequently the event underpinning the entire position actually occurs. Thirty per cent in a year — a dispute is not a marginal accident, it is a statistical due date." },
    ],
  },
  {
    n: "12",
    title: "Visual Identity Brief",
    subtitle: "Written for a designer who thinks.",
    blocks: [
      { kind: "h", text: "The visual thesis" },
      { kind: "p", text: "SILLAGE's identity must produce, at a glance, the sensation of a document that carries weight. Not modernity, not friendliness: the quiet authority of an exhibit produced in front of someone contesting it. The reference register is not professional software but the archive — the bailiff's report, the survey drawing, the dimensioned plan." },
      { kind: "h", text: "Typographic doctrine" },
      { kind: "p", text: "A neutral Swiss-tradition grotesque for body text: their quality is having no opinion. And a monospace used systematically for every dated datum — the universal typographic signal of untouched data, and the most profitable decision in the brief. The tempting and fatal direction would be an editorial serif for headings: elegant and false, because serif evokes opinion whereas SILLAGE produces observation." },
      { kind: "h", text: "Chromatic doctrine" },
      { kind: "p", text: "The category defaults to software blue, site orange or alert red. All three must be refused: blue files SILLAGE under software, orange is a cliché that patronises, red belongs to the register of fear. The available territory is documentary monochrome — ink, paper, two greys — with a single desaturated accent reserved for what is dated and validated. Its rarity is its function." },
      { kind: "h", text: "The four executions to refuse" },
      { kind: "list", items: [
        "Contemporary professional software — blue-violet gradient, isometric illustration. Precisely the category to escape.",
        "The macho site register — safety orange, low-angle shots. Addresses execution, not the directors.",
        "Intimidating legal — classical serifs, double rules. That is PREUVEO's territory, therefore fear.",
        "Minimalism without a grid — removes what must be signalled: order. The white must be a form's, not a gallery's.",
      ]},
    ],
  },
  {
    n: "13",
    title: "Market Positioning Map",
    subtitle: "Two axes revealing what category axes hide.",
    blocks: [
      { kind: "h", text: "The two axes" },
      { kind: "p", text: "The usual axes — simple/complete, expensive/affordable, SME/enterprise — classify the offer instead of revealing the decision. Two others account for how buyers actually choose." },
      { kind: "list", items: [
        "Horizontal — THE MOMENT COVERED: during execution \u2194 after handover. Its power comes from nobody formulating it. It reveals that five apparently distinct houses occupy the same cell.",
        "Vertical — THE STANCE TOWARD THE BUYER: the buyer is at fault \u2194 the buyer is to be protected. This axis determines the reachable decision-maker: a narrative putting the buyer at fault never rises to the directors.",
      ]},
      { kind: "h", text: "SILLAGE's coordinate" },
      { kind: "p", text: "Far right on the moment covered, far top on the stance toward the buyer. The only cell in the field occupied by a single house. Fear subsides, guilt is refused, but the will to preserve one's own work does not run out — which is what makes the position sustainable, and what raises the decision-maker." },
      { kind: "h", text: "The perceptual gap" },
      { kind: "p", text: "One cell stays empty: after handover, on the \u201cto be protected\u201d side, but from the client's perspective. Nobody goes there, and it is not an oversight — occupying that cell forces you to pick a side, and the field's players want to sell to both. SILLAGE must avoid it because it has picked its own. The 5% of revenue from clients is a market signal, not a growth path." },
      { kind: "h", text: "The press answer" },
      { kind: "quote", text: "\u201cBATIFLOW is a steering platform: it serves while the site runs, and it does that well. We work on what remains after handover. These aren't two answers to the same question, they're two different moments of the same site. Most firms we work with already have a tracking tool, in fact.\u201d" },
    ],
  },
  {
    n: "14",
    title: "Audience Intelligence Report",
    subtitle: "Four segments. Extract: two of four.",
    blocks: [
      { kind: "h", text: "Segment 1 — The general contractor" },
      { kind: "p", text: "In one sentence. A general contractor of 20 to 80 staff, run by someone who came off the tools, ten to forty sites open simultaneously. Recognisable by the fact the director describes himself as a \u201cbuilder\u201d rather than a \u201cbusiness owner\u201d." },
      { kind: "p", text: "The real trigger. Not the search for a tool: the arrival of a letter. The search starts three to six weeks after settlement — never during, because during, he is busy limiting the damage." },
      { kind: "p", text: "The resistance. \u201cWe already have a photo group chat.\u201d An objection of redundancy, not of price. Beneath it, a deeper one: agreeing to buy means admitting his way of working for twenty years contained a flaw." },
      { kind: "quote", text: "His words, in private: \u201cThe worst part is I know I did it. I remember the day. But what am I supposed to tell him? That I remember? He doesn't care, he's got his architect writing him letters.\u201d" },
      { kind: "h", text: "Segment 3 — The independent architect" },
      { kind: "p", text: "The resistance. \u201cI'm not on site every day.\u201d An objection of usage, not of value — and this resistance is well founded. Two to four simultaneous sites, intermittent by nature: a monthly subscription is structurally mismatched to him." },
      { kind: "p", text: "The content that converts. None, within the current plan — and that is a decision, not a gap. This segment stays served on a per-site offer and stops being addressed. Its attrition will accelerate, and that is the price of the chosen territory." },
      { kind: "h", text: "Synthesis — the audience in one paragraph" },
      { kind: "quote", text: "The four segments share one condition: they all practise a trade where the value produced is physical, immediate and unrecorded, and where the dispute always arrives late. The second the scaffolding comes down, everything executed becomes invisible, and its reality depends solely on what each party remembers. In a sector where the work disappears behind its own result, only the record decides what existed." },
    ],
  },
  {
    n: "15",
    title: "Marketing playbook",
    subtitle: "Angles to explore, angles to refuse.",
    blocks: [
      { kind: "lead", text: "This playbook exists so an angle decision takes thirty seconds, without a meeting and without the founder arbitrating. It does not say what to produce. It says what is allowed to exist under the SILLAGE name." },
      { kind: "h", text: "Angles to explore" },
      { kind: "list", items: [
        "The costed anatomy of a dispute, line by line. The strongest angle in the system and the hardest to copy: it requires real numbers, which competitors do not have.",
        "The mechanics of forgetting. Why the site binder dies after three weeks — an angle that exonerates the buyer, and therefore converts.",
        "The preparation asymmetry. He has had eight months to build his case; you have Wednesday evening. Emotional angle, short formats only.",
        "The open file. A real disagreement, anonymised, closed by three timestamped lines.",
      ]},
      { kind: "h", text: "Angles to refuse" },
      { kind: "list", items: [
        "Any head-on comparison with BATIFLOW. Naming a competitor makes it exist in a mind where it was absent.",
        "The vocabulary of digital transformation. It describes a buyer SILLAGE is not addressing, and repels the one it is.",
        "Raw fear of litigation. We state a cost, we do not brandish a threat: a buyer on the defensive does not buy.",
        "Any promise of time saved. That is the argument of the site-management category — precisely the one SILLAGE left.",
      ]},
      { kind: "h", text: "The pre-publication test" },
      { kind: "quote", text: "Could a competitor publish this identically by changing only the logo? If yes, it does not ship. This test removes roughly half of what a marketing team produces by instinct, which is the point of it." },
    ],
  },
  {
    n: "16",
    title: "Content playbook",
    subtitle: "The voice, turned into rules anyone can follow.",
    blocks: [
      { kind: "lead", text: "Written so that someone who has never spoken to Claire Vasseur writes like SILLAGE in their first week. The voice stops being an intuition transmitted only by osmosis." },
      { kind: "h", text: "The six rules" },
      { kind: "list", items: [
        "A fact before an opinion. Always. If the first sentence holds no number, date or scene, rewrite it.",
        "State, never alarm. \u201c91 files across 300 accounts in twelve months\u201d — not \u201cyou are at risk\u201d.",
        "The vocabulary of the site, not of software. We say handover, remedial work, defect, snagging. Never workflow, never solution, never optimise.",
        "One idea per piece. If two ideas are worth it, that is two pieces.",
        "Exonerate the buyer, systematically. The flaw is by design, not by discipline. This rule outranks the others.",
        "End on the sentence, not the summary. The last paragraph recaps nothing.",
      ]},
      { kind: "h", text: "The rewrite test" },
      { kind: "pair", beforeLabel: "What gets written by instinct", afterLabel: "What ships", before: "SILLAGE helps you digitise your site management and save time day to day.", after: "Eight months after handover, what you have is what you recorded. The rest is your word against his." },
      { kind: "quote", text: "The SILLAGE voice is not a matter of tone, it is a matter of position: it speaks from the site, not from the software company. Any text that could be signed by a software vendor is a failed text, however well written." },
    ],
  },
  {
    n: "17",
    title: "Social media playbook",
    subtitle: "Tone by platform, rhythm, replies.",
    blocks: [
      { kind: "lead", text: "Three platforms, three distinct uses, one doctrine. What changes is the form; what never changes is the position." },
      { kind: "table", head: ["Platform", "Use", "Cadence"], rows: [
        ["LinkedIn", "The developed argument. The costing, the mechanism, the open file.", "Twice weekly"],
        ["YouTube", "Filmed demonstration on a real site. Long form, no restless editing.", "Monthly"],
        ["In person (trade shows, federations)", "Direct conversation. No content produced: listening that feeds the other two.", "Continuous"],
      ]},
      { kind: "h", text: "The comment rule" },
      { kind: "list", items: [
        "Answer once, precisely, then stop. The second exchange serves nobody but the two people writing it.",
        "A competitor comments: thank them, never argue. Public debate always benefits the smaller of the two.",
        "An unhappy client: leave the thread in one sentence and offer a call. Always, no exception.",
        "Never ask a question whose answer does not genuinely interest us.",
      ]},
      { kind: "h", text: "What never ships" },
      { kind: "list", items: [
        "Team behind-the-scenes, celebrated hires, funding news. SILLAGE has no company story to tell; it has a moment on a building site to occupy.",
        "Generic advice carousels. They perform and build nothing.",
        "Any post whose real objective is engagement rather than position.",
      ]},
    ],
  },
  {
    n: "18",
    title: "Sales playbook",
    subtitle: "Present the house, defuse before the objection.",
    blocks: [
      { kind: "lead", text: "Order matters more than arguments. This playbook fixes the sequence, because a good answer given at the wrong moment is an objection created." },
      { kind: "h", text: "The opening" },
      { kind: "quote", text: "\u201cWhen was your last dispute?\u201d — never \u201chow do you manage your sites?\u201d. The first question places the conversation in SILLAGE's category; the second places it in site management, where SILLAGE is one of twelve." },
      { kind: "h", text: "The four objections, in the order they arrive" },
      { kind: "table", head: ["Objection", "What it hides", "The answer"], rows: [
        ["\u201cWe already have a photo group chat\u201d", "Apparent redundancy, not price", "\u201cHow long to find a photo from last March? The problem is not taking the photo, it is finding it eight months later.\u201d"],
        ["\u201cThat's expensive for what it is\u201d", "Comparison with a site-management tool", "Do not defend the price. Restate the average cost of a lost dispute, and let the arithmetic happen."],
        ["\u201cMy crew will never fill it in\u201d", "Real experience of past failure", "\u201cThere is nothing to fill in. If something has to be filled in, it will not be — that is why the binder dies in three weeks.\u201d"],
        ["\u201cWe'll think about it\u201d", "No felt deadline", "Do not follow up on the product. Follow up at the next site handover: the deadline arrives on its own."],
      ]},
      { kind: "h", text: "The close" },
      { kind: "p", text: "Invite the no rather than chase the yes. \u201cIf you have not had a dispute in three years, this is not for you, and I would rather say so.\u201d That sentence loses marginal deals and earns credibility on every other one — it is the commercial version of the refusal the house is built on." },
    ],
  },
  {
    n: "19",
    title: "Support playbook",
    subtitle: "Holding the voice when the news is bad.",
    blocks: [
      { kind: "lead", text: "An identity that does not survive the first incident is not an identity, it is a campaign. This playbook covers the moments when the client is angry, the tool failed, the news is bad." },
      { kind: "h", text: "The four rules" },
      { kind: "list", items: [
        "Apologise in one sentence, then fix it. A long apology moves attention onto the person apologising.",
        "Never hide behind procedure. Explain the real reason, even when it is unflattering.",
        "Lead with the bad news, never buried after three paragraphs of context.",
        "Never promise a date you will not hold in order to calm someone in the moment.",
      ]},
      { kind: "h", text: "The worst case: lost data" },
      { kind: "p", text: "SILLAGE sells a record. Losing data is not a technical incident, it is a breach of the central promise. The protocol is written separately: notification within the hour, exact scope, what is recoverable and what is not, a call from the founder if the client has a live dispute." },
      { kind: "quote", text: "\u201cWe lost your data for the week of the 3rd to the 9th. Here is exactly what is missing. It is not recoverable and I am not going to tell you otherwise. If you have a live dispute covering that period, call me directly, today.\u201d" },
    ],
  },
  {
    n: "20",
    title: "HR & management playbook",
    subtitle: "The culture, retranslated into a decision rule.",
    blocks: [
      { kind: "lead", text: "A doctrine that guides no internal decision ends up as a poster in a corridor. This playbook makes it operative in hiring, onboarding and trade-offs." },
      { kind: "h", text: "The question that settles it" },
      { kind: "quote", text: "\u201cDoes this decision sound like us?\u201d — not \u201cwho is most senior\u201d, not \u201cwhat is the consensus\u201d. One question, asked out loud, including when the answer costs money." },
      { kind: "h", text: "Hiring" },
      { kind: "list", items: [
        "Hire for the refusal, not the CV. The interview question is: \u201ctell me about a time you turned a client down\u201d. An empty answer is disqualifying.",
        "For roles in contact with sites: field experience outranks software experience. The software can be learned; the standing cannot.",
        "Never hire someone who has not read the narrative platform before the second interview.",
      ]},
      { kind: "h", text: "Onboarding" },
      { kind: "p", text: "Onboarding starts with the enemy, never with the product. First week: read four real dispute files, in detail. A new hire who has understood the moment of dispute finds the right words alone; one who learned the features first spends six months sounding like a software vendor." },
      { kind: "quote", text: "The success signal is simple and checkable: after two weeks, a new hire writes a client message nobody needs to correct." },
    ],
  },
],
    ctaTitle: "This is what you receive.",
    ctaBody:
      "The same work, applied to yours, begins with an extraction no machine can automate: your truth, your singularity, the thing you no longer see because you are inside it.",
    ctaPrimary: "Order the story · €2,900",
    ctaSecondary: "Start with the diagnosis",
    ctaFoot: "",
  },
}

type Item =
  | { from: string; title: string; note?: string }
  | { title: string; note?: string; blocks: Block[] }

const MOVES: Record<Lang, Block[]> = {
  fr: [
    {
      kind: "p",
      text: "Quatre mouvements, par ordre d'exécution. Chacun porte son coût et ce qu'il débloque ; la formulation exacte est dans les pièces 01 et 06, le calendrier dans les quatre-vingt-dix jours qui suivent.",
    },
    {
      kind: "list",
      items: [
        "1 — Changer la question d'ouverture des rendez-vous. De « comment vous gérez vos chantiers ? » à « votre dernière contestation, elle remonte à quand ? ». Coût : rien, c'est demain matin. Débloque : le déplacement de la classe de référence dès la première semaine, et les trois mouvements suivants.",
        "2 — Remplacer la phrase d'accueil. Retirer « Le suivi de chantier simple et visuel » de la page d'accueil, des devis et de la signature de courriel. Coût : une demi-journée. Débloque : la sortie du rayon productivité, donc du plafond à 40 €.",
        "3 — Chiffrer le coût d'une contestation, et le publier. Une page, ligne par ligne : les reprises, les heures du dirigeant, la relation abîmée. Coût : une semaine de la fondatrice. Débloque : la source qui fixe le prix de la protection pour les trois années suivantes.",
        "4 — Passer le prix de l'outil à la protection. Refaire la page de tarifs autour du risque couvert, et démonter une fois, en public, l'objection du groupe photos. Coût : une partie des comptes d'architectes indépendants, qui achètent un outil et non une protection. Débloque : l'acheteur qui signe, la direction des entreprises générales.",
      ],
    },
    {
      kind: "quote",
      text: "Le mouvement 1 est celui qui paie le plus vite : il ne coûte rien, et il change la conversation avant que le site ne change.",
    },
    {
      kind: "p",
      text: "Sur l'ordre : le 1 se fait seul, tout de suite. Le 2 suppose le 1, sans quoi la nouvelle phrase serait lue avec l'ancienne question. Le 3 nourrit le 4 : un prix de protection ne se défend que s'il est chiffré. Le 4 est le seul qui coûte du chiffre à court terme ; il se prend en dernier, quand les trois autres sont en place.",
    },
  ],
  en: [
    {
      kind: "p",
      text: "Four moves, in order of execution. Each carries its cost and what it unlocks; the exact wording is in pieces 01 and 06, the calendar in the ninety days that follow.",
    },
    {
      kind: "list",
      items: [
        "1 — Change the opening question of every meeting. From “how do you manage your sites?” to “when was your last dispute?”. Cost: nothing, it starts tomorrow morning. Unlocks: the shift of the reference class within the first week, and the three moves that follow.",
        "2 — Replace the homepage sentence. Remove “Simple, visual site tracking” from the homepage, the quotes and the email signature. Cost: half a day. Unlocks: the exit from the productivity shelf, and so from the €40 ceiling.",
        "3 — Put a figure on the cost of a dispute, and publish it. One page, line by line: the rework, the manager's hours, the damaged relationship. Cost: a week of the founder's time. Unlocks: the source that sets the price of protection for the next three years.",
        "4 — Move the price from a tool to a protection. Rebuild the pricing page around the risk covered, and take apart the photo-group objection once, in public. Cost: part of the independent-architect accounts, who buy a tool and not a protection. Unlocks: the buyer who signs, the management of the general contractors.",
      ],
    },
    {
      kind: "quote",
      text: "Move 1 pays fastest: it costs nothing, and it changes the conversation before the website changes.",
    },
    {
      kind: "p",
      text: "On the order: 1 is done alone, straight away. 2 assumes 1, otherwise the new sentence would be read with the old question. 3 feeds 4: a protection price can only be defended if it is quantified. 4 is the only one that costs revenue in the short term; it comes last, once the other three are in place.",
    },
  ],
}

const PASTE: Record<Lang, Block[]> = {
  fr: [
    {
      kind: "p",
      text: "Un seul bloc de texte, à coller en tête de n'importe quel outil d'écriture IA. Il porte la position, les refus et les mots interdits : l'outil écrit alors dans la voix de la maison, sans avoir à la deviner.",
    },
    {
      kind: "quote",
      text: "Tu écris pour SILLAGE. Position : SILLAGE rend le travail exécuté établissable. Ne décris jamais ce que fait le produit ; parle du moment où il sert, huit mois plus tard, quand quelqu'un conteste. Ton : celui du témoin. Tu constates, tu ne dramatises pas, tu ne juges que les mécanismes, jamais les personnes. Mots à employer : établir, établissable, pièce, contestation, dossier, huit mois plus tard. Mots interdits : simple, visuel, gain de temps, plateforme, digitaliser, zéro litige, nouvelle génération, intuitif, innovant. Avant chaque phrase, demande-toi : BATIFLOW pourrait-il l'écrire sans mentir ? Si oui, réécris-la.",
    },
    {
      kind: "p",
      text: "Le même bloc existe pour chaque maison, écrit à partir de sa propre position. C'est ce qui permet à une équipe de dix personnes, ou à un outil, de tenir la même voix sans que la fondatrice relise chaque texte.",
    },
  ],
  en: [
    {
      kind: "p",
      text: "A single block of text, to paste at the top of any AI writing tool. It carries the position, the refusals and the forbidden words: the tool then writes in the house's voice without having to guess it.",
    },
    {
      kind: "quote",
      text: "You are writing for SILLAGE. Position: SILLAGE makes the work performed establishable. Never describe what the product does; speak of the moment it serves, eight months later, when someone disputes. Tone: the witness. You state, you do not dramatise, you judge only mechanisms, never people. Words to use: establish, establishable, record, dispute, file, eight months later. Forbidden words: simple, visual, time-saving, platform, digitise, zero disputes, next generation, intuitive, innovative. Before every sentence, ask yourself: could BATIFLOW write it without lying? If so, rewrite it.",
    },
    {
      kind: "p",
      text: "The same block exists for every house, written from its own position. It is what lets a team of ten, or a tool, hold the same voice without the founder rereading every text.",
    },
  ],
}

const PLAN: Record<Lang, Item[][]> = {
  fr: [
    [
      { from: "02", title: "La plateforme narrative" },
      { from: "10", title: "Le récit fondateur" },
    ],
    [
      { from: "01", title: "Le diagnostic de différenciation" },
      { from: "14", title: "L'audience, segment par segment" },
    ],
    [
      { from: "08", title: "Les concurrents, fiche par fiche" },
      { from: "13", title: "La carte de positionnement" },
    ],
    [
      { title: "Les mouvements, dans l'ordre", blocks: MOVES.fr },
      { from: "04", title: "Les quatre-vingt-dix jours autour du jour J" },
      { from: "12", title: "Le brief remis au designer" },
    ],
    [
      { from: "15", title: "Playbook marketing" },
      { from: "16", title: "Playbook contenu" },
      { from: "17", title: "Playbook réseaux sociaux" },
      { from: "18", title: "Playbook vente" },
      { from: "19", title: "Playbook support" },
      { from: "20", title: "Playbook RH & management" },
      { from: "06", title: "Playbook tarifaire" },
      { from: "05", title: "Guide de cohérence" },
    ],
    [
      { from: "03", title: "Le système de langage" },
      { from: "07", title: "Les biographies" },
      { from: "09", title: "La pièce signature" },
      { title: "Le bloc à coller dans votre outil IA", blocks: PASTE.fr },
    ],
  ],
  en: [
    [
      { from: "02", title: "The narrative platform" },
      { from: "10", title: "The founding story" },
    ],
    [
      { from: "01", title: "The differentiation diagnosis" },
      { from: "14", title: "The audience, segment by segment" },
    ],
    [
      { from: "08", title: "The competitors, file by file" },
      { from: "13", title: "The positioning map" },
    ],
    [
      { title: "The moves, in order", blocks: MOVES.en },
      { from: "04", title: "The ninety days around day D" },
      { from: "12", title: "The brief handed to the designer" },
    ],
    [
      { from: "15", title: "Marketing playbook" },
      { from: "16", title: "Content playbook" },
      { from: "17", title: "Social media playbook" },
      { from: "18", title: "Sales playbook" },
      { from: "19", title: "Support playbook" },
      { from: "20", title: "HR & management playbook" },
      { from: "06", title: "Pricing playbook" },
      { from: "05", title: "Coherence guide" },
    ],
    [
      { from: "03", title: "The language system" },
      { from: "07", title: "The bios" },
      { from: "09", title: "The signature piece" },
      { title: "The block to paste into your AI tool", blocks: PASTE.en },
    ],
  ],
}

const PAGE: Record<
  Lang,
  Pick<SampleDoc, "eyebrow" | "title" | "edition" | "partialTitle" | "partialBody" | "partialPoints" | "ctaSecondary">
> = {
  fr: {
    eyebrow: "Extrait — les six pièces, pour un moment inventé",
    title: "L'ARCHITECTURE NARRATIVE",
    edition: "Commande n° 000 — six pièces, cinq étapes",
    partialTitle: "Ceci n'est qu'une partie de ce que vous recevrez.",
    partialBody:
      "L'Architecture Narrative compte six pièces, écrites sur votre propre maison. Cette page présente les six, dans l'ordre où elles sont écrites, mais resserrées pour l'écran : ce que vous lisez est l'écriture, pas le volume. Ce qui est retiré de cette édition web :",
    partialPoints: [
      "Les développements longs de chaque analyse, réduits ici à leur conclusion",
      "Les fiches concurrent complètes, une par acteur du champ, dissection phrase par phrase",
      "Les quatre profils d'audience détaillés, avec déclencheurs, résistances et mots exacts",
      "Le plan de déploiement entier : quinze angles de contenu, la première semaine pièce par pièce, les textes prêts à l'emploi",
      "Le brief au designer complet, avec références directionnelles et exécutions à refuser",
      "L'essai signature intégral, publiable en l'état",
      "Les sept playbooks et le guide de cohérence, dans leur version longue : scripts complets, arbres d'objections, protocoles d'incident et grilles d'entretien",
    ],
    ctaSecondary: "Lire aussi VERSO →",
  },
  en: {
    eyebrow: "Extract — the six pieces, for an invented moment",
    title: "THE NARRATIVE ARCHITECTURE",
    edition: "Commission n° 000 — six pieces, five stages",
    partialTitle: "This is only a portion of what you would receive.",
    partialBody:
      "The Narrative Architecture comes in six pieces, written on your own house. This page presents all six, in the order they are written, but tightened for the screen: what you read is the writing, not the volume. What is removed from this web edition:",
    partialPoints: [
      "The long developments of each analysis, reduced here to their conclusion",
      "The full competitor files, one per player in the field, dissected sentence by sentence",
      "The four detailed audience profiles, with triggers, resistances and exact words",
      "The whole deployment plan: fifteen content angles, the first week piece by piece, the ready-to-use copy",
      "The complete designer brief, with directional references and executions to refuse",
      "The full signature essay, publishable as it stands",
      "The seven playbooks and the coherence guide, in their long form: complete scripts, objection trees, incident protocols and interview grids",
    ],
    ctaSecondary: "Read VERSO too →",
  },
}

const norm = (x: string) => x.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim()
const sameAs = (a: string | undefined, b: string) => !a || norm(a) === norm(b)

function build(lang: Lang): SampleDoc {
  const raw = RAW_DOC[lang]
  const six = SIX[lang]
  const byN = new Map(raw.parts.map((p) => [p.n, p]))

  const parts: Part[] = six.pieces.map((pc, pi) => {
    const blocks: Block[] = [{ kind: "lead", text: pc.lead }]
    PLAN[lang][pi].forEach((it, k) => {
      if ("from" in it) {
        const src = byN.get(it.from)
        if (!src) throw new Error(`sample-sillage : partie ${it.from} introuvable`)
        blocks.push({ kind: "section", n: `${pc.n}.${k + 1}`, title: it.title, note: sameAs(it.note ?? src.subtitle, it.title) ? undefined : (it.note ?? src.subtitle) })
        blocks.push(...src.blocks)
      } else {
        blocks.push({ kind: "section", n: `${pc.n}.${k + 1}`, title: it.title, note: it.note })
        blocks.push(...it.blocks)
      }
    })
    return { n: pc.n, title: pc.title, subtitle: pc.subtitle, blocks }
  })

  return {
    ...raw,
    ...PAGE[lang],
    dossierRows: [
      ...raw.dossierRows,
      [six.containsKey, six.containsValue],
      [six.calendarKey, six.calendarValue],
    ],
    parts,
    contentsTitle: six.contentsTitle,
    readerPrev: six.readerPrev,
    readerNext: six.readerNext,
    readerPageOfTemplate: six.readerPageOfTemplate,
    readerOfCount: six.readerOfCount,
    ctaTitle: six.ctaTitle,
    ctaBody: six.ctaBody,
    ctaPrimary: six.ctaPrimary,
    ctaFoot: six.ctaFoot,
  }
}

export const SAMPLE_DOC: Record<Lang, SampleDoc> = {
  fr: build("fr"),
  en: build("en"),
}
