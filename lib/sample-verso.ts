import type { Lang } from "@/lib/lang"
import { SIX } from "@/lib/doc-six"

export type VersoBlock =
  | { kind: "section"; n: string; title: string; note?: string }
  | { kind: "lead"; text: string }
  | { kind: "p"; text: string }
  | { kind: "quote"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][] }
  | { kind: "pair"; beforeLabel: string; afterLabel: string; before: string; after: string }

export type VersoPart = { n: string; title: string; subtitle?: string; blocks: VersoBlock[] }

export type VersoDoc = {
  eyebrow: string
  title: string
  house: string
  edition: string
  disclaimer: string
  dossierTitle: string
  dossierRows: [string, string][]
  parts: VersoPart[]
  readerToc: string
  readerPrev: string
  readerNext: string
  readerPageOfTemplate: string
  readerOfCount: string
  scopeTitle: string
  scopeBody: string
  scopeNot: string[]
  ctaTitle: string
  ctaBody: string
  ctaPrimary: string
  ctaSecondary: string
  ctaFoot: string
}

type RawVerso = { parts: VersoPart[]; dossierRows: [string, string][]; house: string; disclaimer: string; dossierTitle: string } & Record<string, unknown>

const RAW: Record<Lang, RawVerso> = {
  fr: {
    eyebrow: "Extrait — les pièces 02 et 03, sur une maison réelle",
    title: "BRAND NARRATIVE ARCHITECTURE",
    house: "VERSO",
    edition: "Audit n° 000 — cinq blocs",
    disclaimer:
      "Exemple publié à titre d'illustration. VERSO et les maisons citées ne correspondent à aucune entreprise existante.",
    dossierTitle: "Le dossier",
    readerToc: "Sommaire",
    readerPrev: "← Partie précédente",
    readerNext: "Partie suivante →",
    readerPageOfTemplate: "Partie {i} / {n}",
    readerOfCount: "sur {n} blocs",
    dossierRows: [
      ["La maison", "VERSO — Bordeaux, six ans. Reliure et édition d'art à façon."],
      ["Ce qu'elle vend", "Des tirages reliés à la main pour galeries, musées et collectionneurs."],
      ["L'état", "410 k€ de chiffre annuel. Neuf personnes. Carnet plein à trois mois."],
      ["Le moment", "L'ouverture de son premier atelier-galerie à Bordeaux, le 14 mars 2027."],
      ["Pourquoi le récit", "« On refuse du travail et on n'arrive pourtant pas à augmenter nos prix. »"],
      ["Sa phrase actuelle", "« L'artisanat de la reliure, au service de vos projets. »"],
    ],
    parts: [
      {
        n: "01",
        title: "La lecture du champ",
        blocks: [
          { kind: "p", text: "Quatre concurrents directs analysés sur leur posture, pas sur leur catalogue." },
          {
            kind: "table",
            head: ["Maison", "Sa phrase", "Ce qu'elle occupe vraiment"],
            rows: [
              ["ATELIER MARQUE", "« Façonneur d'ouvrages d'exception »", "Le luxe déclaratif. Épuise son crédit à s'auto-décerner l'exception."],
              ["LES PRESSES DU SUD", "« Votre partenaire impression et façonnage »", "Le prestataire fiable. Se place volontairement en exécutant."],
              ["MAISON LIVRE", "« La reliure d'art depuis 1897 »", "L'ancienneté. Position solide mais fermée : personne ne peut la disputer, elle ne peut rien conquérir."],
              ["FOLIO STUDIO", "« Objets imprimés, pensés autrement »", "La créativité vague. Ne dit rien de vérifiable."],
              ["VERSO", "« L'artisanat de la reliure, au service de vos projets »", "— indéterminé —"],
            ],
          },
          {
            kind: "p",
            text: "Trois des quatre parlent depuis l'atelier : ce qu'ils savent faire, depuis quand, avec quel soin. Aucun ne parle depuis l'objet fini ni depuis celui qui le gardera. Le terrain vacant est là — non pas comment c'est fabriqué, mais ce que cela devient une fois entre les mains de quelqu'un.",
          },
          {
            kind: "quote",
            text: "Le champ entier vend un savoir-faire. Personne ne vend ce que le savoir-faire produit : un objet qui survivra à celui qui l'a commandé.",
          },
          {
            kind: "p",
            text: "Ce déplacement a une conséquence immédiate sur la comparaison. Une maison qui parle depuis l'atelier se fait comparer à d'autres ateliers — sur le nombre d'années, le nombre de mains, la finesse du cousu. Une maison qui parle depuis l'objet fini se fait comparer à ce qui protège des objets : la conservation, l'encadrement, l'archivage. Ce ne sont pas les mêmes concurrents, et surtout pas les mêmes ordres de prix.",
          },
          {
            kind: "list",
            items: [
              "Le mot que personne n'emploie : conservation. Aucun des quatre ne le prononce, alors que c'est ce que produit, au fond, une reliure d'art.",
              "L'angle mort commun : tous décrivent un processus, aucun ne décrit une durée. Le savoir-faire est présenté comme une fin, jamais comme le moyen d'obtenir un objet qui tient un siècle.",
              "Ce que l'ancienneté ne peut pas faire : Maison Livre occupe 1897, une position que personne ne peut lui prendre — mais qui ne dit rien de ce qu'elle produit aujourd'hui. Une date protège du présent, elle ne conquiert rien.",
            ],
          },
        ],
      },
      {
        n: "02",
        title: "L'autopsie de votre phrase",
        blocks: [
          { kind: "quote", text: "« L'artisanat de la reliure, au service de vos projets. »" },
          {
            kind: "list",
            items: [
              "« L'artisanat de la reliure » — le nom du métier, pas de la maison. Vos quatre concurrents peuvent l'écrire sans mentir. Une phrase de position doit être indisponible aux autres.",
              "« au service de » — vous vous placez en exécutant. C'est exactement la position des Presses du Sud, et c'est celle qui plafonne un prix : un prestataire se négocie, un auteur non.",
              "« vos projets » — mot creux qui recouvre aussi bien un catalogue d'exposition qu'une plaquette d'entreprise. Il empêche l'acheteur haut de gamme de se reconnaître.",
            ],
          },
          {
            kind: "p",
            text: "Rien dans cette phrase ne nomme la durée, qui est pourtant votre seule vraie promesse. Vous reliez des objets destinés à traverser des générations, et vous le dites avec le vocabulaire d'un sous-traitant.",
          },
          {
            kind: "p",
            text: "La conséquence est arithmétique : un acheteur qui vous range parmi les façonniers vous compare à un devis d'impression. Un acheteur qui vous range parmi les maisons qui produisent des objets de conservation vous compare à un encadrement muséal. Ce n'est pas le même ordre de grandeur, et vous choisissez le premier dans votre propre phrase.",
          },
        ],
      },
      {
        n: "03",
        title: "Les mots à retirer",
        blocks: [
          {
            kind: "table",
            head: ["À retirer", "Pourquoi"],
            rows: [
              ["artisanat, artisanal", "Présent dans le discours de trois concurrents sur quatre. Vous rend interchangeable."],
              ["au service de", "Vous place en exécutant. C'est la formulation qui plafonne le prix."],
              ["sur mesure", "Attendu, donc invisible. Personne ne vend du prêt-à-porter dans ce métier."],
              ["projets", "Recouvre tout, donc ne qualifie personne."],
              ["exception, exceptionnel", "Appartient à Atelier Marque, et une maison ne se décerne pas l'exception."],
              ["passion", "Signale l'amateur plutôt que le professionnel dans un devis à cinq chiffres."],
            ],
          },
          {
            kind: "p",
            text: "Et les mots qui peuvent devenir les vôtres, parce qu'aucun concurrent ne les occupe : conservation, reliure de conservation, siècle, transmission, pièce unique numérotée, dépôt, restaurable, fonds.",
          },
          {
            kind: "pair",
            beforeLabel: "Avant",
            afterLabel: "Après",
            before: "« L'artisanat de la reliure, au service de vos projets. »",
            after: "« Nous relions les ouvrages destinés à durer plus longtemps que ceux qui les commandent. »",
          },
        ],
      },
      {
        n: "04",
        title: "Le cap",
        blocks: [
          {
            kind: "p",
            text: "Quatre mouvements, par ordre de priorité, avec leur coût et ce qu'ils débloquent.",
          },
          {
            kind: "list",
            items: [
              "1 — Quitter le vocabulaire du façonnage. Retirer « artisanat » et « au service de » de la page d'accueil, des devis et de la signature de courriel. Coût : une demi-journée. Débloque : la sortie de la comparaison avec un devis d'impression.",
              "2 — Adopter la conservation comme territoire. Faire de la durée le sujet de chaque prise de parole, y compris commerciale. Coût : une réécriture complète du site. Débloque : la comparaison avec l'encadrement muséal, soit un plafond trois à cinq fois supérieur.",
              "3 — Numéroter et documenter chaque pièce. Un certificat, un numéro, une fiche de conservation remise avec l'ouvrage. Coût : un protocole interne et une impression. Débloque : la preuve matérielle de la promesse de durée — c'est ce qui rend le prix défendable en face.",
              "4 — Refuser publiquement une catégorie de travaux. Nommer ce que la maison ne relie pas. Coût : du chiffre à court terme. Débloque : la position, qui n'existe pas sans refus.",
            ],
          },
          {
            kind: "quote",
            text: "Le mouvement 3 est celui qui paie le plus vite. Une promesse de durée sans document est une affirmation ; avec un certificat de conservation, elle devient une caractéristique du produit.",
          },
          {
            kind: "p",
            text: "Sur l'ordre d'exécution : les mouvements 1 et 3 peuvent être menés en parallèle, ils ne se gênent pas. Le mouvement 2 suppose que le 1 soit fait, sans quoi la réécriture du site se ferait avec l'ancien vocabulaire. Le mouvement 4 est le seul qui coûte du chiffre à court terme, et c'est celui qu'il faut prendre en dernier — non parce qu'il est optionnel, mais parce qu'il n'est tenable qu'une fois les trois autres en place.",
          },
          {
            kind: "pair",
            beforeLabel: "Le devis, aujourd'hui",
            afterLabel: "Le devis, après",
            before: "Reliure pleine peau, dos à nerfs, titrage or. Délai six semaines. 2 400 €.",
            after: "Reliure de conservation, pièce numérotée 014/∞, fiche de conservation remise avec l'ouvrage. Restaurable à l'identique. Délai six semaines. 2 400 €.",
          },
          {
            kind: "p",
            text: "Le prix n'a pas bougé. Ce qui a bougé, c'est ce à quoi le lecteur compare ce prix. Le premier devis se compare à un autre relieur ; le second se compare à ce que coûte de perdre l'objet.",
          },
        ],
      },
      {
        n: "05",
        title: "Le verdict",
        blocks: [
          {
            kind: "p",
            text: "VERSO n'a pas un problème de notoriété ni de qualité — le carnet plein à trois mois le prouve. La maison a un problème de catégorie assignée : elle décrit un savoir-faire là où elle produit un objet de conservation, et se fait donc comparer à des façonniers alors que sa promesse réelle relève du patrimoine. Le plafond tarifaire n'est pas imposé par le marché, il est inscrit dans la phrase d'accueil. Tant que « au service de vos projets » y figurera, chaque devis sera lu comme une prestation d'exécution — et une prestation d'exécution se négocie toujours à la baisse.",
          },
        ],
      },
    ],
    scopeTitle: "Ce que cette Architecture ne contient pas",
    scopeBody:
      "Un diagnostic n'est pas une architecture. Ce document dit où la maison se tient et vers où aller. Il ne fait pas le chemin.",
    scopeNot: [
      "Pas de plateforme narrative : ni récit fondateur, ni piliers de message, ni archétype",
      "Pas de système de langage complet : le lexique est esquissé, pas construit",
      "Pas de copy prêt à l'emploi : aucune page réécrite, aucun angle de contenu, aucun plan de lancement",
      "Pas d'extraction en profondeur : le document est produit à partir de ce que vous envoyez",
      "Pas d'allers-retours ni de revue à trente jours",
    ],
    ctaTitle: "Voilà ce que vous recevez pour 2 900 €.",
    ctaBody:
      "Trois semaines après votre questionnaire, un document de cette forme sur votre propre maison. Deux révisions incluses.",
    ctaPrimary: "Commander le récit · 2 900 €",
    ctaSecondary: "Voir l'architecture complète →",
  },

  en: {
    eyebrow: "Extract — pieces 02 and 03, on a real house",
    title: "BRAND NARRATIVE ARCHITECTURE",
    house: "VERSO",
    edition: "Audit n° 000 — five blocks",
    disclaimer:
      "Published as an illustration. VERSO and the houses named here correspond to no existing company.",
    dossierTitle: "The dossier",
    readerToc: "Contents",
    readerPrev: "← Previous part",
    readerNext: "Next part →",
    readerPageOfTemplate: "Part {i} / {n}",
    readerOfCount: "of {n} blocks",
    dossierRows: [
      ["The house", "VERSO — Bordeaux, six years old. Bespoke art binding and editions."],
      ["What it sells", "Hand-bound editions for galleries, museums and collectors."],
      ["The state", "€410k annual revenue. Nine people. Booked three months ahead."],
      ["The moment", "The opening of its first workshop-gallery in Bordeaux, on 14 March 2027."],
      ["Why the story", "\u201cWe turn work away and still can't raise our prices.\u201d"],
      ["Current sentence", "\u201cThe craft of binding, at the service of your projects.\u201d"],
    ],
    parts: [
      {
        n: "01",
        title: "The field, read",
        blocks: [
          { kind: "p", text: "Four direct competitors, read on their stance rather than their catalogue." },
          {
            kind: "table",
            head: ["House", "Their sentence", "What it actually occupies"],
            rows: [
              ["ATELIER MARQUE", "\u201cMaker of exceptional volumes\u201d", "Declared luxury. Spends its credit awarding itself the exception."],
              ["LES PRESSES DU SUD", "\u201cYour printing and finishing partner\u201d", "The reliable supplier. Places itself as executor by choice."],
              ["MAISON LIVRE", "\u201cArt binding since 1897\u201d", "Age. Solid but closed: nobody can contest it, it can conquer nothing."],
              ["FOLIO STUDIO", "\u201cPrinted objects, thought differently\u201d", "Vague creativity. Says nothing verifiable."],
              ["VERSO", "\u201cThe craft of binding, at the service of your projects\u201d", "— undetermined —"],
            ],
          },
          {
            kind: "p",
            text: "Three of the four speak from the workshop: what they can do, since when, with what care. None speaks from the finished object, or from whoever will keep it. The open ground is exactly there — not how it is made, but what it becomes once it is in someone's hands.",
          },
          {
            kind: "quote",
            text: "The entire field sells craft. Nobody sells what the craft produces: an object that will outlive the person who commissioned it.",
          },
        ],
      },
      {
        n: "02",
        title: "Your sentence, autopsied",
        blocks: [
          { kind: "quote", text: "\u201cThe craft of binding, at the service of your projects.\u201d" },
          {
            kind: "list",
            items: [
              "\u201cThe craft of binding\u201d — the name of the trade, not of the house. All four competitors could write it without lying. A positioning sentence must be unavailable to the others.",
              "\u201cat the service of\u201d — you place yourself as executor. That is precisely Les Presses du Sud's position, and it is the phrase that caps a price: a supplier is negotiated, an author is not.",
              "\u201cyour projects\u201d — a hollow word covering an exhibition catalogue and a corporate brochure alike. It stops the high-end buyer recognising themselves.",
            ],
          },
          {
            kind: "p",
            text: "Nothing in the sentence names duration, which is your only real promise. You bind objects meant to cross generations, and you say so in a subcontractor's vocabulary.",
          },
          {
            kind: "p",
            text: "The consequence is arithmetic: a buyer who files you among finishers compares you to a printing quote. A buyer who files you among houses producing conservation objects compares you to museum framing. Those are different orders of magnitude, and you choose the first one in your own sentence.",
          },
        ],
      },
      {
        n: "03",
        title: "The words to retire",
        blocks: [
          {
            kind: "table",
            head: ["Retire", "Why"],
            rows: [
              ["craft, artisanal", "Present in the language of three competitors of four. Makes you interchangeable."],
              ["at the service of", "Places you as executor. This is the phrasing that caps the price."],
              ["bespoke", "Expected, therefore invisible. Nobody sells off-the-shelf in this trade."],
              ["projects", "Covers everything, so qualifies nobody."],
              ["exceptional", "Belongs to Atelier Marque, and a house does not award itself the exception."],
              ["passion", "Signals amateur rather than professional on a five-figure quote."],
            ],
          },
          {
            kind: "p",
            text: "And the words that can become yours, because no competitor occupies them: conservation, conservation binding, century, transmission, numbered unique piece, deposit, restorable, holdings.",
          },
          {
            kind: "pair",
            beforeLabel: "Before",
            afterLabel: "After",
            before: "\u201cThe craft of binding, at the service of your projects.\u201d",
            after: "\u201cWe bind the volumes meant to last longer than the people who commission them.\u201d",
          },
        ],
      },
      {
        n: "04",
        title: "The heading",
        blocks: [
          { kind: "p", text: "Four moves, in priority order, with their cost and what each unlocks." },
          {
            kind: "list",
            items: [
              "1 — Leave the vocabulary of finishing. Strip \u201ccraft\u201d and \u201cat the service of\u201d from the homepage, the quotes and the email signature. Cost: half a day. Unlocks: exit from comparison with a printing quote.",
              "2 — Adopt conservation as territory. Make duration the subject of every statement, commercial ones included. Cost: a full rewrite of the site. Unlocks: comparison with museum framing — a ceiling three to five times higher.",
              "3 — Number and document every piece. A certificate, a number, a conservation record handed over with the volume. Cost: an internal protocol and some printing. Unlocks: material proof of the duration promise — which is what makes the price defensible in the room.",
              "4 — Publicly refuse a category of work. Name what the house does not bind. Cost: revenue in the short term. Unlocks: the position, which does not exist without a refusal.",
            ],
          },
          {
            kind: "quote",
            text: "Move 3 pays fastest. A promise of duration without a document is an assertion; with a conservation certificate it becomes a property of the product.",
          },
        ],
      },
      {
        n: "05",
        title: "The verdict",
        blocks: [
          {
            kind: "p",
            text: "VERSO has neither a recognition problem nor a quality problem — being booked three months out proves it. The house has an assigned-category problem: it describes a craft where it produces a conservation object, and is therefore compared to finishers when its real promise belongs to heritage. The price ceiling is not imposed by the market, it is written into the opening sentence. As long as \u201cat the service of your projects\u201d stands there, every quote reads as execution work — and execution work is always negotiated down.",
          },
        ],
      },
    ],
    scopeTitle: "What this audit does not contain",
    scopeBody:
      "A diagnosis is not an architecture. This document says where the house stands and where to go. It does not walk the road.",
    scopeNot: [
      "No narrative platform: no origin story, no message pillars, no archetype",
      "No complete language system: the lexicon is sketched, not built",
      "No ready-to-use copy: no rewritten page, no content angle, no launch plan",
      "No deep extraction: the document is produced from what you send",
      "No revisions and no thirty-day walkthrough",
    ],
    ctaTitle: "This is what 2 900 € buys.",
    ctaBody:
      "Three weeks after your questionnaire, a document of this shape about your own house. Two revisions included.",
    ctaPrimary: "Order the story · €2,900",
    ctaSecondary: "See the full architecture →",
  },

}

type Item = { title: string; note?: string; from?: string; blocks?: VersoBlock[] }

const PLATFORM: Record<Lang, VersoBlock[]> = {
  fr: [
    { kind: "p", text: "VERSO existe pour que les ouvrages qui comptent — un catalogue de collection, un fonds d'archives, un tirage de galerie — survivent à ceux qui les ont commandés." },
    { kind: "quote", text: "Nous relions les ouvrages destinés à durer plus longtemps que ceux qui les commandent." },
    { kind: "list", items: [
      "Pour qui : les galeries, les musées et les collectionneurs qui achètent un objet pour le transmettre, pas pour l'exposer un soir.",
      "Contre quoi : le façonnage vendu au devis, où la reliure se compare au prix de la page.",
      "Preuve : six ans, neuf personnes, un carnet plein à trois mois. Ce qui reste à établir : la numérotation et la fiche de conservation de chaque pièce (mouvement 3), qui rendent la durée vérifiable.",
    ] },
  ],
  en: [
    { kind: "p", text: "VERSO exists so that the volumes that matter — a collection catalogue, an archive holding, a gallery edition — outlive the people who commissioned them." },
    { kind: "quote", text: "We bind the volumes meant to last longer than the people who commission them." },
    { kind: "list", items: [
      "For whom: the galleries, museums and collectors who buy an object to hand it on, not to show it for one evening.",
      "Against what: finishing sold by the quote, where binding is compared on the price per page.",
      "Proof: six years, nine people, an order book full three months ahead. What remains to establish: the numbering and conservation record of every piece (move 3), which make the duration verifiable.",
    ] },
  ],
}

const VALUES: Record<Lang, VersoBlock[]> = {
  fr: [
    { kind: "table", head: ["Valeur", "Ce qu'elle interdit", "Ce qu'elle impose"], rows: [
      ["Durée", "Promettre « de qualité » sans dire pour combien de temps.", "Un chiffre, un protocole, une fiche de conservation."],
      ["Retenue", "Se décerner l'exception ; parler de passion.", "Montrer la pièce, nommer les matériaux, laisser le lecteur conclure."],
      ["Refus", "Relier n'importe quoi pour remplir le carnet.", "Une catégorie de travaux que la maison ne prend pas, dite en clair."],
    ] },
    { kind: "p", text: "Personnalité : celle d'un conservateur, pas d'un vendeur. Phrases courtes, matériaux nommés, jamais d'adjectif qui s'applique à un concurrent. Le ton constate et ne plaide pas." },
  ],
  en: [
    { kind: "table", head: ["Value", "What it forbids", "What it requires"], rows: [
      ["Duration", "Promising “quality” without saying for how long.", "A figure, a protocol, a conservation record."],
      ["Restraint", "Awarding oneself the exception; talking about passion.", "Showing the piece, naming the materials, letting the reader conclude."],
      ["Refusal", "Binding anything to fill the order book.", "A category of work the house does not take, stated plainly."],
    ] },
    { kind: "p", text: "Personality: a conservator's, not a salesman's. Short sentences, materials named, never an adjective that fits a competitor. The tone states; it does not plead." },
  ],
}

const NINETY: Record<Lang, VersoBlock[]> = {
  fr: [
    { kind: "table", head: ["Période", "Ce qui se fait", "Qui"], rows: [
      ["J-60 à J-45", "Mouvement 1 : retirer « artisanat » et « au service de » de l'accueil, des devis et de la signature. Rédiger la fiche de conservation type.", "La direction, une personne de l'atelier"],
      ["J-45 à J-14", "Mouvement 3 : numéroter les pièces en cours, remettre la fiche avec chaque ouvrage. Commencer la réécriture du site (mouvement 2).", "L'atelier, un rédacteur"],
      ["J-14 à J-1", "Mettre le site en ligne sous embargo. Rédiger l'annonce de l'ouverture et le dossier de presse (mouvement 4 : la catégorie de travaux refusée se dit ce jour-là, pas avant).", "La direction, un rédacteur"],
      ["Jour J, 14 mars", "Ouverture. L'annonce part, le site s'ouvre, la direction est présente à l'atelier-galerie pour ajuster ce qui doit l'être.", "Toute l'équipe"],
      ["J+1 à J+30", "Relever l'effet sur les devis. Bilan écrit de ce qui a porté.", "La direction"],
    ] },
    { kind: "p", text: "Le point de contrôle est à J+30 : le prix moyen des devis, et ce à quoi les acheteurs le comparent dans leur réponse." },
  ],
  en: [
    { kind: "table", head: ["Period", "What happens", "Who"], rows: [
      ["D-60 to D-45", "Move 1: strip “craft” and “at the service of” from the homepage, the quotes and the signature. Write the standard conservation record.", "Management, one person from the workshop"],
      ["D-45 to D-14", "Move 3: number the pieces in progress, hand over the record with every volume. Begin the site rewrite (move 2).", "The workshop, a writer"],
      ["D-14 to D-1", "Put the site live under embargo. Write the opening announcement and the press kit (move 4: the refused category of work is stated that day, not before).", "Management, a writer"],
      ["Day D, 14 March", "Opening. The announcement goes out, the site opens, management is at the workshop-gallery to adjust what needs adjusting.", "The whole team"],
      ["D+1 to D+30", "Read the effect on quotes. A written review of what carried.", "Management"],
    ] },
    { kind: "p", text: "The checkpoint is D+30: the average quote price, and what buyers compare it to in their reply." },
  ],
}

const PLAYBOOKS: Record<Lang, Item[]> = {
  fr: [
    { title: "Playbook vente", note: "Le rendez-vous et le devis", blocks: [
      { kind: "p", text: "Question d'ouverture : « Cet ouvrage, qui doit pouvoir le lire dans cent ans ? ». Elle déplace la conversation du travail à la durée avant qu'un prix ne soit cité." },
      { kind: "table", head: ["L'objection", "La réponse"], rows: [
        ["« Vous êtes plus cher qu'un façonnier. »", "« Un façonnier relie un ouvrage. Nous remettons un objet de conservation, numéroté, documenté, restaurable. Comparez-le à ce que coûte de le perdre. »"],
        ["« Nous avons besoin d'un geste sur le prix. »", "« Nous ne baissons pas le prix : nous retirons une prestation. Laquelle vous importe le moins ? »"],
      ] },
    ] },
    { title: "Playbook tarifaire", note: "Le prix ne bouge pas ; ce à quoi on le compare, si", blocks: [
      { kind: "p", text: "Aucun devis ne descend. Un devis se réduit en retirant une prestation, jamais en baissant le montant. Chaque devis nomme la fiche de conservation et le numéro de la pièce, afin que le prix soit lu contre la durée et non contre une page imprimée." },
    ] },
    { title: "Playbook RH & recrutement", blocks: [
      { kind: "p", text: "Une personne qui rejoint l'atelier reçoit, le premier jour, le bloc de la pièce 06 et deux fiches de conservation réelles. On recrute sur la capacité à documenter, avant la capacité à relier : la seconde s'apprend à l'atelier, la première non." },
    ] },
    { title: "Guide de cohérence", blocks: [
      { kind: "list", items: [
        "Le texte parle-t-il de ce que devient l'objet, ou de la manière dont on le fabrique ?",
        "Un concurrent pourrait-il signer cette phrase sans mentir ?",
        "Contient-elle un mot de la liste à retirer ?",
        "La durée est-elle chiffrée ou prouvée par un document ?",
      ] },
    ] },
  ],
  en: [
    { title: "Sales playbook", note: "The meeting and the quote", blocks: [
      { kind: "p", text: "Opening question: “This volume, who must still be able to read it in a hundred years?”. It moves the conversation from the work to the duration before any price is named." },
      { kind: "table", head: ["The objection", "The answer"], rows: [
        ["“You are more expensive than a finisher.”", "“A finisher binds a volume. We hand over a conservation object, numbered, documented, restorable. Compare it to the cost of losing it.”"],
        ["“We need a gesture on the price.”", "“We do not lower the price: we remove a service. Which one matters least to you?”"],
      ] },
    ] },
    { title: "Pricing playbook", note: "The price does not move; what it is compared to does", blocks: [
      { kind: "p", text: "No quote goes down. A quote is reduced by removing a service, never by lowering the amount. Every quote names the conservation record and the piece number, so that the price is read against duration and not against a printed page." },
    ] },
    { title: "HR & hiring playbook", blocks: [
      { kind: "p", text: "A person joining the workshop receives, on day one, the block from piece 06 and two real conservation records. We hire on the ability to document before the ability to bind: the second is learned in the workshop, the first is not." },
    ] },
    { title: "Coherence guide", blocks: [
      { kind: "list", items: [
        "Does the text speak of what the object becomes, or of how it is made?",
        "Could a competitor sign this sentence without lying?",
        "Does it contain a word from the retire list?",
        "Is the duration quantified or proven by a document?",
      ] },
    ] },
  ],
}

const PASTE: Record<Lang, VersoBlock[]> = {
  fr: [
    { kind: "p", text: "Un seul bloc de texte, à coller en tête de n'importe quel outil d'écriture IA. Il porte la position, les refus et les mots à retirer : l'outil écrit dans la voix de la maison sans avoir à la deviner." },
    { kind: "quote", text: "Tu écris pour VERSO. Position : VERSO relie les ouvrages destinés à durer plus longtemps que ceux qui les commandent. Ne décris jamais le savoir-faire ; parle de ce que devient l'objet une fois entre les mains de quelqu'un. Ton : celui du conservateur. Tu constates, tu ne plaides pas. Mots à employer : conservation, siècle, transmission, pièce numérotée, restaurable, fonds. Mots interdits : artisanat, artisanal, au service de, sur mesure, projets, exception, passion. Avant chaque phrase, demande-toi : un concurrent pourrait-il l'écrire sans mentir ? Si oui, réécris-la." },
    { kind: "p", text: "Version courte pour une biographie, à employer une fois le mouvement 3 en place : « VERSO relie à Bordeaux, depuis six ans, les ouvrages que galeries, musées et collectionneurs veulent voir durer. Chaque pièce est numérotée, documentée, restaurable. »" },
  ],
  en: [
    { kind: "p", text: "A single block of text, to paste at the top of any AI writing tool. It carries the position, the refusals and the words to retire: the tool writes in the house's voice without having to guess it." },
    { kind: "quote", text: "You are writing for VERSO. Position: VERSO binds the volumes meant to last longer than the people who commission them. Never describe the craft; speak of what the object becomes once it is in someone's hands. Tone: the conservator. You state, you do not plead. Words to use: conservation, century, transmission, numbered piece, restorable, holdings. Forbidden words: craft, artisanal, at the service of, bespoke, projects, exceptional, passion. Before every sentence, ask yourself: could a competitor write it without lying? If so, rewrite it." },
    { kind: "p", text: "Short version for a bio, to use once move 3 is in place: “VERSO has bound, in Bordeaux for six years, the volumes that galleries, museums and collectors want to last. Every piece is numbered, documented, restorable.”" },
  ],
}

const PLAN: Record<Lang, Item[][]> = {
  fr: [
    [
      { title: "La constitution de la maison", blocks: PLATFORM.fr },
      { title: "Les valeurs et la personnalité", blocks: VALUES.fr },
    ],
    [
      { from: "02", title: "La phrase actuelle, autopsiée", note: "Ce qu'elle dit, ce qu'elle coûte" },
      { from: "05", title: "Le verdict", note: "Le problème est de catégorie, pas de qualité" },
    ],
    [{ from: "01", title: "Les quatre concurrents et le terrain libre", note: "Leur phrase exacte, citée" }],
    [
      { from: "04", title: "Les mouvements, dans l'ordre", note: "Coût et déblocage de chacun" },
      { title: "Les quatre-vingt-dix jours autour du jour J", blocks: NINETY.fr },
    ],
    PLAYBOOKS.fr,
    [
      { from: "03", title: "Les mots à retirer, les mots à prendre", note: "Le lexique et la réécriture" },
      { title: "Le bloc à coller dans votre outil IA", blocks: PASTE.fr },
    ],
  ],
  en: [
    [
      { title: "The constitution of the house", blocks: PLATFORM.en },
      { title: "Values and personality", blocks: VALUES.en },
    ],
    [
      { from: "02", title: "The current sentence, autopsied", note: "What it says, what it costs" },
      { from: "05", title: "The verdict", note: "The problem is category, not quality" },
    ],
    [{ from: "01", title: "The four competitors and the open ground", note: "Their exact sentence, quoted" }],
    [
      { from: "04", title: "The moves, in order", note: "Cost and unlock of each" },
      { title: "The ninety days around day D", blocks: NINETY.en },
    ],
    PLAYBOOKS.en,
    [
      { from: "03", title: "Words to retire, words to take", note: "The lexicon and the rewrite" },
      { title: "The block to paste into your AI tool", blocks: PASTE.en },
    ],
  ],
}

const PAGE = {
  fr: {
    eyebrow: "Extrait — les six pièces, pour un moment inventé",
    title: "L'ARCHITECTURE NARRATIVE",
    edition: "Commande n° 000 — six pièces, cinq étapes",
    scopeTitle: "Ce que cette édition web resserre",
    scopeBody:
      "Ce document présente les six pièces, dans l'ordre où elles sont écrites, resserrées pour l'écran. Votre exemplaire est écrit sur votre maison et plus long. Ce qui est retiré ici :",
    scopeNot: [
      "Les développements longs de chaque analyse, réduits à leur conclusion",
      "Les fiches concurrent complètes et les profils d'audience détaillés",
      "Les playbooks dans leur version longue : scripts, arbres d'objections, protocoles",
      "Le brief au designer, l'essai signature et les textes réécrits en entier",
    ],
    ctaSecondary: "Lire aussi SILLAGE →",
  },
  en: {
    eyebrow: "Extract — the six pieces, for an invented moment",
    title: "THE NARRATIVE ARCHITECTURE",
    edition: "Commission n° 000 — six pieces, five stages",
    scopeTitle: "What this web edition tightens",
    scopeBody:
      "This document presents the six pieces, in the order they are written, tightened for the screen. Your copy is written on your house and is longer. What is removed here:",
    scopeNot: [
      "The long developments of each analysis, reduced to their conclusion",
      "The full competitor files and the detailed audience profiles",
      "The playbooks in their long form: scripts, objection trees, protocols",
      "The designer brief, the signature essay and the rewritten texts in full",
    ],
    ctaSecondary: "Read SILLAGE too →",
  },
} as const

function build(lang: Lang): VersoDoc {
  const raw = RAW[lang]
  const six = SIX[lang]
  const byN = new Map(raw.parts.map((p) => [p.n, p]))
  const parts: VersoPart[] = six.pieces.map((pc, pi) => {
    const blocks: VersoBlock[] = [{ kind: "lead", text: pc.lead }]
    PLAN[lang][pi].forEach((it, k) => {
      const sec = `${pc.n}.${k + 1}`
      if (it.from) {
        const src = byN.get(it.from)
        if (!src) throw new Error(`sample-verso : partie ${it.from} introuvable`)
        blocks.push({ kind: "section", n: sec, title: it.title, note: it.note })
        blocks.push(...src.blocks)
      } else {
        blocks.push({ kind: "section", n: sec, title: it.title, note: it.note })
        blocks.push(...(it.blocks ?? []))
      }
    })
    return { n: pc.n, title: pc.title, subtitle: pc.subtitle, blocks }
  })
  return {
    house: raw.house,
    disclaimer: raw.disclaimer,
    dossierTitle: raw.dossierTitle,
    ...PAGE[lang],
    scopeNot: [...PAGE[lang].scopeNot],
    dossierRows: [...raw.dossierRows, [six.containsKey, six.containsValue], [six.calendarKey, six.calendarValue]],
    parts,
    readerToc: six.contentsTitle,
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

export const VERSO_DOC: Record<Lang, VersoDoc> = { fr: build("fr"), en: build("en") }
