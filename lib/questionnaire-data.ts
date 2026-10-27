import type { Lang } from "@/lib/lang"

export type OfferKey = "architecture"

export type TerrainKey = "marques" | "produits" | "lieux" | "artistes"

export const TERRAIN_KEYS: TerrainKey[] = ["marques", "produits", "lieux", "artistes"]

export function isTerrainKey(value: string | undefined): value is TerrainKey {
  return value !== undefined && (TERRAIN_KEYS as string[]).includes(value)
}

export type QuestionType =
  | "identity"
  | "textarea"
  | "shorttext"
  | "competitors"
  | "links"
  | "choice"
  | "sliders"
  | "wordbank"

export type I18nText = { fr: string; en: string }

export interface SliderAxisSource {
  id: string
  l: I18nText
  r: I18nText
}

export interface QuestionSource {
  id: string
  terrains?: TerrainKey[]
  type: QuestionType
  label: I18nText
  help?: I18nText
  ph?: I18nText
  tag?: I18nText
  optional?: boolean
  deep?: I18nText
  nudge?: I18nText
  unlock?: I18nText
  options?: I18nText[]
  hints?: I18nText[]
  multi?: boolean
  max?: number
  axes?: SliderAxisSource[]
}

export interface SliderAxis {
  id: string
  l: string
  r: string
}

export interface Question {
  id: string
  terrains?: TerrainKey[]
  type: QuestionType
  label: string
  help?: string
  ph?: string
  tag?: string
  optional?: boolean
  deep?: string
  nudge?: string
  unlock?: string
  options?: string[]
  hints?: string[]
  chapter?: string
  multi?: boolean
  max?: number
  axes?: SliderAxis[]
}

const t = (fr: string, en: string): I18nText => ({ fr, en })

export const ARCHETYPES: I18nText[] = [
  t("Le Créateur", "The Creator"),
  t("Le Rebelle", "The Rebel"),
  t("Le Sage", "The Sage"),
  t("Le Magicien", "The Magician"),
  t("Le Héros", "The Hero"),
  t("L'Amoureux", "The Lover"),
  t("Le Bouffon", "The Jester"),
  t("Le Gars d'à côté", "The Everyman"),
  t("Le Protecteur", "The Caregiver"),
  t("Le Souverain", "The Ruler"),
  t("L'Explorateur", "The Explorer"),
  t("L'Innocent", "The Innocent"),
]

const ARCHETYPE_HINTS: I18nText[] = [
  t("Construit, invente, laisse une œuvre. Lego, Adobe.", "Builds, invents, leaves a body of work. Lego, Adobe."),
  t("Casse les règles, refuse l'ordre établi. Harley-Davidson, Diesel.", "Breaks the rules, refuses the established order. Harley-Davidson, Diesel."),
  t("Cherche la vérité, explique, éclaire. Google, The Economist.", "Seeks truth, explains, illuminates. Google, The Economist."),
  t("Transforme, fait vivre une expérience hors du commun. Disney.", "Transforms, creates an extraordinary experience. Disney."),
  t("Relève le défi, prouve sa valeur par l'effort. Nike.", "Takes on the challenge, proves worth through effort. Nike."),
  t("Séduit, crée l'intimité et le désir. Chanel, Häagen-Dazs.", "Seduces, creates intimacy and desire. Chanel, Häagen-Dazs."),
  t("Fait rire, dédramatise, refuse de se prendre au sérieux. Old Spice, Ben & Jerry's.", "Makes people laugh, plays it down, refuses to take itself seriously. Old Spice, Ben & Jerry's."),
  t("Simple, proche, sans prétention : « une marque comme moi ». IKEA.", "Simple, close, unpretentious: \"a brand like me\". IKEA."),
  t("Prend soin, protège, rassure. Volvo, Johnson & Johnson.", "Cares, protects, reassures. Volvo, Johnson & Johnson."),
  t("Commande, structure, incarne l'autorité et le prestige. Rolex, Mercedes.", "Commands, structures, embodies authority and prestige. Rolex, Mercedes."),
  t("Part vers l'inconnu, valorise la liberté et la découverte. The North Face, Jeep.", "Heads into the unknown, values freedom and discovery. The North Face, Jeep."),
  t("Optimiste, pur, simple : le bonheur sans complication. Dove, Coca-Cola.", "Optimistic, pure, simple: happiness without complication. Dove, Coca-Cola."),
]

export const WORDS: I18nText[] = [
  t("rare", "rare"),
  t("brut", "raw"),
  t("chirurgical", "surgical"),
  t("chaleureux", "warm"),
  t("feutré", "hushed"),
  t("radical", "radical"),
  t("discret", "understated"),
  t("luxueux", "luxurious"),
  t("accessible", "approachable"),
  t("provocateur", "provocative"),
  t("apaisant", "calming"),
  t("audacieux", "bold"),
  t("minutieux", "meticulous"),
  t("spontané", "spontaneous"),
  t("classique", "classic"),
  t("avant-gardiste", "avant-garde"),
  t("artisanal", "handmade"),
  t("systémique", "systemic"),
  t("intime", "intimate"),
  t("spectaculaire", "spectacular"),
  t("sobre", "restrained"),
  t("généreux", "generous"),
  t("tranchant", "sharp"),
  t("ludique", "playful"),
]

export const QUESTION_SOURCES: QuestionSource[] = [
  {
    id: "identity", type: "identity",
    label: t("Votre nom et le nom de la maison.", "Your name and the name of the house."),
    help: t("Tels qu'ils figureront sur votre document.", "As they will appear on your document."),
    tag: t("Identité", "Identity"),
  },
  {
    id: "moment_date", type: "shorttext",
    label: t("À quelle date a lieu votre moment ?", "On what date does your moment take place?"),
    help: t(
      "Le jour J : celui où le public découvre. Une date précise, ou « autour de… » si elle n'est pas encore fixée.",
      "Day D: the day the public discovers it. A precise date, or \"around…\" if it is not fixed yet.",
    ),
    ph: t("12 mars 2027", "12 March 2027"),
    tag: t("Le moment", "The moment"),
  },
  {
    id: "moment", type: "textarea",
    label: t("Quel est votre moment ?", "What is your moment?"),
    help: t(
      "Ce qui sort, ouvre ou se joue ce jour-là, tel que vous l'expliqueriez à quelqu'un qui n'y connaît rien.",
      "What comes out, opens or is at stake that day, as you would explain it to someone who knows nothing about it.",
    ),
    ph: t("L'ouverture de notre deuxième adresse, le 12 mars…", "The opening of our second venue, on 12 March…"),
    tag: t("Le moment", "The moment"),
  },
  {
    id: "moment_stakes", type: "textarea",
    label: t(
      "Qu'est-ce qui doit être vrai le lendemain, et ne l'est pas aujourd'hui ?",
      "What must be true the day after, and is not true today?",
    ),
    help: t(
      "Un chiffre, une perception, une décision d'un tiers. Ce que ce moment doit changer, concrètement.",
      "A number, a perception, a third party's decision. What this moment must actually change.",
    ),
    tag: t("Le moment", "The moment"),
  },
  {
    id: "activity", type: "textarea",
    label: t(
      "Dites-nous les faits : ce que vous faites, pour qui, depuis quand, et où.",
      "Give us the facts: what you do, for whom, since when, and where.",
    ),
    help: t(
      "Sans adjectifs. Deux ou trois phrases, comme à quelqu'un qui n'a jamais entendu parler de vous.",
      "No adjectives. Two or three sentences, as if to someone who has never heard of you.",
    ),
    ph: t("Nous faisons... pour... depuis... à...", "We make... for... since... in..."),
    tag: t("Identité", "Identity"),
  },
  {
    id: "conviction", type: "textarea",
    label: t(
      "Quelle conviction ce moment doit-il rendre visible, que la plupart de votre secteur refuserait de dire à voix haute ?",
      "What conviction must this moment make visible, that most of your field would refuse to say out loud?",
    ),
    help: t(
      "Pas une mission. Pas un slogan. Ce que vous croyez vraiment sur votre secteur, votre catégorie, la façon dont les choses se font, et que le jour J doit faire entendre.",
      "Not a mission. Not a slogan. What you genuinely believe about your field, your category, the way things are done, and that day D must make heard.",
    ),
    ph: t("La conviction que je tiens...", "The conviction I hold..."),
    deep: t(
      "La version que vous n'avez jamais dite publiquement, celle qui vous ferait le plus de tort si on la lisait de travers.",
      "The version you have never said publicly: the one that would cost you most if it were read the wrong way.",
    ),
    nudge: t(
      "Qu'est-ce qui vous a fait penser ça la première fois ? Un client, une commande refusée, une phrase entendue : racontez la scène plutôt que l'idée.",
      "What made you think that the first time? A client, an order you turned down, something you overheard: tell the scene, not the idea.",
    ),
    unlock: t(
      "C'est de là que sortira ce que votre moment affirme : la phrase qu'aucun concurrent ne pourra signer sans mentir.",
      "This is where what your moment stands for will come from: the sentence no competitor can sign without lying.",
    ),
    tag: t("La vérité", "The truth"),
  },
  {
    id: "rupture", type: "textarea",
    label: t(
      "Racontez ce qui vous a mené à ce moment.",
      "Tell us what led you to this moment.",
    ),
    help: t(
      "Le jour, la conversation, l'échec ou le refus précis qui a rendu ce moment nécessaire. Une date si possible. Pas l'histoire polie du dossier de presse : la vraie.",
      "The specific day, conversation, failure or refusal that made this moment necessary. A date if possible. Not the polished story of the press kit: the true one.",
    ),
    ph: t("Le jour où...", "The day when..."),
    deep: t(
      "Y a-t-il une rupture plus ancienne, avant celle-là, que vous n'aviez jamais reliée à cette histoire jusqu'ici ?",
      "Is there an older rupture, before that one, that you had never connected to this story until now?",
    ),
    nudge: t(
      "Où étiez-vous, et qu'est-ce que vous avez décidé de ne plus faire à partir de là ?",
      "Where were you, and what did you decide to stop doing from that point on?",
    ),
    unlock: t(
      "Le récit fondateur, celui que la presse reprendra, s'écrira autour de cette scène. C'est la page que vous relirez le plus.",
      "The origin story, the one the press will pick up, will be written around this scene. It is the page you will reread most.",
    ),
    tag: t("La vérité", "The truth"),
  },
  {
    id: "enemy", type: "textarea",
    label: t(
      "Contre quoi ce moment se tient-il ?",
      "What does this moment stand against?",
    ),
    help: t(
      "Pas un concurrent : une façon de penser, une habitude, une idée reçue que ce moment refuse d'accepter.",
      "Not a competitor: a way of thinking, a habit, a received idea that this moment refuses to accept.",
    ),
    ph: t("Ce contre quoi nous nous tenons...", "What we stand against..."),
    nudge: t(
      "Pas un concurrent : une manière de faire que vous refusez. Qu'est-ce qui vous agace quand vous le voyez chez les autres ?",
      "Not a competitor: a way of working you refuse. What annoys you when you see others do it?",
    ),
    tag: t("La vérité", "The truth"),
  },
  {
    id: "positioning", terrains: ["marques"], type: "textarea",
    label: t("Quelle phrase décrit votre maison aujourd'hui ?", "What sentence describes your house today?"),
    help: t(
      "Celle qui est sur votre accueil ou votre bio LinkedIn. Collez-la telle quelle — y compris la version dont vous n'êtes pas fier.",
      "The one currently on your homepage or LinkedIn bio. Paste it exactly as it is — including the version you are not proud of.",
    ),
    ph: t("Nous aidons les fondateurs à...", "We help founders to..."),
    unlock: t(
      "Ça va directement dans la carte du champ, face aux phrases exactes de vos concurrents.",
      "This goes straight into the map of the field, against your competitors' exact sentences.",
    ),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "positioning_produits", terrains: ["produits"], type: "textarea",
    label: t("Quelle phrase décrit votre produit aujourd'hui ?", "What sentence describes your product today?"),
    help: t(
      "Celle qui est sur la page produit ou sur l'emballage. Collez-la telle quelle — y compris si ce n'est qu'une liste de caractéristiques.",
      "The one on the product page or the packaging. Paste it exactly as it is — including if it is just a list of specs.",
    ),
    ph: t("Conçu pour...", "Designed for..."),
    unlock: t(
      "Ça va directement dans la carte du rayon, face aux promesses exactes de vos concurrents.",
      "This goes straight into the map of the shelf, against your competitors' exact promises.",
    ),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "positioning_lieux", terrains: ["lieux"], type: "textarea",
    label: t("Quelle phrase décrit votre lieu aujourd'hui ?", "What sentence describes your venue today?"),
    help: t(
      "Celle de votre fiche Google ou de votre bio Instagram. Collez-la telle quelle — c'est celle que lisent ceux qui hésitent à pousser la porte.",
      "The one from your Google listing or Instagram bio. Paste it exactly as it is — it is what people read before deciding to walk in.",
    ),
    ph: t("Cuisine de saison au cœur de...", "Seasonal cooking in the heart of..."),
    unlock: t(
      "Ça va directement dans la carte du quartier, face à ce que revendiquent les adresses voisines.",
      "This goes straight into the map of the district, against what neighbouring venues claim.",
    ),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "positioning_artistes", terrains: ["artistes"], type: "textarea",
    label: t("Quelle phrase vous décrit aujourd'hui ?", "What sentence describes you today?"),
    help: t(
      "Votre bio, celle que vous utilisez partout. Collez-la telle quelle — y compris si elle date de trois projets.",
      "Your bio, the one you use everywhere. Paste it exactly as it is — including if it dates back three projects.",
    ),
    ph: t("Artiste et producteur basé à...", "Artist and producer based in..."),
    unlock: t(
      "Ça va directement dans la carte de votre zone, face aux bios des noms qu'on cite à côté du vôtre.",
      "This goes straight into the map of your lane, against the bios of the names quoted alongside yours.",
    ),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "category", type: "textarea",
    label: t(
      "Dans quelle case vous range-t-on spontanément ? Et dans laquelle voudriez-vous être rangé ?",
      "What box do people put you in spontaneously? And which box would you rather be in?",
    ),
    help: t(
      "Par exemple « agence de communication » plutôt que « studio de narration ». L'écart entre les deux est souvent la vraie position à prendre.",
      "For instance \u201ccommunications agency\u201d rather than \u201cnarrative studio\u201d. The gap between the two is often the real position to take.",
    ),
    ph: t("On me range parmi... Je voudrais qu'on me range parmi...", "People file me under... I would rather be filed under..."),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "awareness", type: "choice",
    label: t("Où en sont la plupart de vos acheteurs quand ils vous trouvent ?", "Where are most of your buyers when they find you?"),
    help: t(
      "Choisissez la situation la plus fréquente, pas la plus flatteuse.",
      "Pick the most common situation, not the most flattering one.",
    ),
    options: [
      t("Inconscient du problème", "Unaware of the problem"),
      t("Conscient du problème, pas des solutions", "Problem-aware, not solution-aware"),
      t("Conscient qu'il existe des solutions, pas de vous", "Solution-aware, but unaware of you"),
      t("Conscient de vous, pas encore convaincu", "Aware of you, not yet convinced"),
      t("Le plus conscient : prêt, cherche juste le bon moment", "Most aware: ready, just waiting for the right moment"),
    ],
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "competitors", terrains: ["marques"], type: "competitors",
    label: t("Nommez 3 à 5 concurrents directs, et leur phrase.", "Name 3 to 5 direct competitors, and their sentence."),
    help: t(
      "Le texte exact — tiré de leur accueil, leur bio LinkedIn ou leur signature email. Copié-collé, sans analyse de votre part.",
      "The exact phrasing — from their homepage, LinkedIn headline or email signature. Just copy and paste. No analysis needed from you.",
    ),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "competitors_lieux", terrains: ["lieux"], type: "competitors",
    label: t("Nommez 3 à 5 adresses concurrentes, et ce qu'on en dit.", "Name 3 to 5 competing venues, and what people say about them."),
    help: t(
      "Celles qu'on vous cite, celles où vos clients vont aussi. Reprenez la phrase de leur fiche Google ou de leur bio Instagram, telle quelle.",
      "The ones people mention to you, the ones your customers also go to. Copy the line from their Google listing or Instagram bio, as it stands.",
    ),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "competitors_artistes", terrains: ["artistes"], type: "competitors",
    label: t("Nommez 3 à 5 artistes de votre zone, et leur phrase.", "Name 3 to 5 artists in your lane, and their sentence."),
    help: t(
      "Pas vos influences : ceux à qui on vous compare, ou ceux dont vous partagez le public. Reprenez leur bio, telle quelle.",
      "Not your influences: those you get compared to, or whose audience you share. Copy their bio, as it stands.",
    ),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "competitors_produits", terrains: ["produits"], type: "competitors",
    label: t("Nommez 3 à 5 produits concurrents, et leur promesse.", "Name 3 to 5 competing products, and their promise."),
    help: t(
      "Ceux avec qui on vous compare en rayon ou sur une page de comparaison. Reprenez l'argument qu'ils mettent en avant, tel quel — pas votre analyse.",
      "The ones you get compared to on a shelf or a comparison page. Copy the argument they lead with, as it stands — not your analysis.",
    ),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "competitor_edge", type: "textarea",
    label: t("Qu'est-ce qu'un concurrent fait mieux que vous, honnêtement ?", "What does a competitor genuinely do better than you?"),
    help: t(
      "Sans ça, le contre-positionnement sonne un peu trop confortable.",
      "Without this, the counter-positioning sounds a little too comfortable.",
    ),
    ph: t("Ils sont meilleurs sur...", "They are better at..."),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "moment_ref", type: "textarea", optional: true,
    label: t(
      "Quel moment décisif, chez quelqu'un d'autre, vous a marqué ?",
      "Which decisive moment, someone else's, stayed with you?",
    ),
    help: t(
      "Un lancement, une ouverture, une sortie dont vous vous souvenez encore. Dites ce qu'ils ont fait que vous ne feriez jamais, et ce que vous voudriez leur prendre.",
      "A launch, an opening, a release you still remember. Say what they did that you would never do, and what you would like to take from them.",
    ),
    ph: t("Je me souviens de... Ils ont... Je ne ferais jamais...", "I remember... They did... I would never..."),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "past_attempts", type: "textarea", optional: true,
    label: t(
      "Qu'avez-vous déjà tenté pour un moment comparable, et pourquoi n'a-t-il pas porté ?",
      "What have you already tried for a comparable moment, and why didn't it carry?",
    ),
    help: t(
      "Un lancement précédent, une annonce passée inaperçue, une agence, un teaser. Écrivez « rien » si c'est une première.",
      "A previous launch, an announcement that went unnoticed, an agency, a teaser. Write \"nothing\" if this is a first.",
    ),
    ph: t("J'ai déjà essayé... Ça n'a pas porté parce que...", "I already tried... It didn't carry because..."),
    tag: t("Diagnostic", "Diagnosis"),
  },
  {
    id: "moment_known", type: "textarea", optional: true,
    label: t(
      "Qu'avez-vous déjà annoncé, montré ou laissé fuiter ?",
      "What have you already announced, shown or let leak?",
    ),
    help: t(
      "Tout ce qui existe déjà publiquement sur ce moment : posts, teasers, articles, rumeurs.",
      "Everything already public about this moment: posts, teasers, articles, rumours.",
    ),
    tag: t("Le moment", "The moment"),
  },
  {
    id: "archetype", type: "choice", multi: true, max: 2,
    label: t("Choisissez un ou deux archétypes qui vous ressemblent.", "Choose one or two archetypes that resemble you."),
    help: t(
      "Le répertoire classique du storytelling de marque. Instinctif, pas de calcul.",
      "The classic repertoire of brand storytelling. Go on instinct, not calculation.",
    ),
    options: ARCHETYPES,
    hints: ARCHETYPE_HINTS,
    tag: t("Identité & langage", "Identity & language"),
  },
  {
    id: "tone", type: "sliders",
    label: t("Où se situe votre ton, entre ces pôles ?", "Where does your tone sit, between these poles?"),
    help: t("Pas de bonne réponse, juste un instantané honnête.", "No right answer — just an honest snapshot."),
    axes: [
      { id: "a1", l: t("Formelle", "Formal"), r: t("Familière", "Familiar") },
      { id: "a2", l: t("Sérieuse", "Serious"), r: t("Ludique", "Playful") },
      { id: "a3", l: t("Discrète", "Understated"), r: t("Théâtrale", "Theatrical") },
      { id: "a4", l: t("Classique", "Classic"), r: t("Avant-gardiste", "Avant-garde") },
      { id: "a5", l: t("Minimaliste", "Minimal"), r: t("Maximaliste", "Maximal") },
    ],
    tag: t("Langage", "Language"),
  },
  {
    id: "address_mode", type: "choice",
    label: t("Comment la maison s'adresse-t-elle à ses clients ?", "How does the house address its customers?"),
    options: [
      t("Nous, au vouvoiement", "\u201cWe\u201d, formal"),
      t("Je, au vouvoiement", "\u201cI\u201d, formal"),
      t("Nous, au tutoiement", "\u201cWe\u201d, casual"),
      t("Je, au tutoiement", "\u201cI\u201d, casual"),
      t("Ça dépend du support", "It depends on the channel"),
    ],
    tag: t("Langage", "Language"),
  },
  {
    id: "languages", type: "choice", multi: true, max: 3,
    label: t("Dans quelle(s) langue(s) la maison s'exprime-t-elle ?", "In which language(s) does the house speak?"),
    help: t("Cochez la langue principale en premier.", "Tick the main language first."),
    options: [
      t("Français", "French"),
      t("Anglais", "English"),
      t("Espagnol", "Spanish"),
      t("Allemand", "German"),
      t("Italien", "Italian"),
      t("Autre", "Other"),
    ],
    tag: t("Langage", "Language"),
  },
  {
    id: "forbidden", type: "textarea",
    label: t(
      "Quel sujet, ton ou blague ne franchirez-vous jamais, même si ça faisait vendre ?",
      "Which subject, tone or joke will you never cross, even if it sold?",
    ),
    help: t(
      "La limite qui protège la maison, même quand ce n'est pas vous qui écrivez.",
      "The line that protects the house, even when someone else is doing the writing.",
    ),
    ph: t("Nous ne ferons jamais...", "We will never..."),
    tag: t("Langage", "Language"),
  },
  {
    id: "wordbank", type: "wordbank",
    label: t("Vos mots, et ceux qui ne le seront jamais.", "Your words, and the ones that will never be."),
    help: t(
      "Cochez dans chaque colonne. Un mot ne peut pas être dans les deux.",
      "Tick in each column. A word cannot be in both.",
    ),
    tag: t("Langage", "Language"),
  },
  {
    id: "voice_sample", type: "textarea", optional: true,
    label: t("Collez un texte qui vous ressemble vraiment.", "Paste a text that truly sounds like you."),
    help: t(
      "Un mail, un post, un message vocal retranscrit, une présentation — écrit par vous, ou par quelqu'un qui vous a parfaitement compris. C'est ce qui nous apprend le plus sur votre voix.",
      "An email, a post, a transcribed voice note, a pitch — written by you, or by someone who understood you perfectly. It teaches us more about your voice than anything else.",
    ),
    ph: t("Collez le texte tel quel...", "Paste the text as it is..."),
    tag: t("Langage", "Language"),
  },
  {
    id: "moment_audience", type: "textarea",
    label: t(
      "Qui doit absolument voir ce moment, et qui doit en parler ?",
      "Who absolutely must see this moment, and who must talk about it?",
    ),
    help: t(
      "Des personnes ou des types de personnes : un investisseur, un critique, vos premiers clients, un média précis.",
      "People or types of people: an investor, a critic, your first customers, a specific outlet.",
    ),
    tag: t("Le moment", "The moment"),
  },
  {
    id: "audience", type: "textarea",
    label: t(
      "Décrivez la personne exacte qui doit réagir à ce moment.",
      "Describe the exact person who must react to this moment.",
    ),
    help: t(
      "Pas une catégorie, une personne. Ce qu'elle sait de vous aujourd'hui, ce qui la retient, ce qui lui ferait dire « il faut que je voie ça ».",
      "Not a category, a person. What they know of you today, what holds them back, what would make them say \"I have to see this\".",
    ),
    ph: t("Elle sait déjà... Elle hésite parce que...", "They already know... They hesitate because..."),
    tag: t("Audience", "Audience"),
  },
  {
    id: "decision", type: "choice",
    label: t(
      "Qui décide, en face de vous : venir, acheter, financer, écouter ?",
      "Who decides, across from you: to come, buy, fund, listen?",
    ),
    options: [
      t("Chacun décide seul : le grand public", "Each decides alone: the general public"),
      t("Un ou deux décideurs précis (investisseur, programmateur, acheteur)", "One or two precise decision-makers (investor, programmer, buyer)"),
      t("Un comité ou une hiérarchie", "A committee or a hierarchy"),
      t("Les médias et les prescripteurs d'abord, le public ensuite", "Media and tastemakers first, the public after"),
    ],
    tag: t("Audience", "Audience"),
  },
  {
    id: "objections", type: "textarea",
    label: t(
      "Les trois objections qu'on vous oppose le plus souvent avant d'acheter.",
      "The three objections you hear most often before someone buys.",
    ),
    help: t(
      "Les vraies, pas la version polie. Pour chacune, ce que vous répondez aujourd'hui, même si ce n'est pas convaincant.",
      "The real ones, not the polite version. For each, what you answer today, even if it isn't convincing.",
    ),
    ph: t("1. « C'est trop cher » — je réponds que...", "1. \u201cIt's too expensive\u201d — I answer that..."),
    tag: t("Audience", "Audience"),
  },
  {
    id: "customer_words", type: "textarea", optional: true,
    label: t(
      "Collez trois phrases que vos clients ont dites ou écrites sur vous.",
      "Paste three sentences your customers have said or written about you.",
    ),
    help: t(
      "Avis, messages, mails, retours à l'oral retranscrits. Mot pour mot : c'est leur vocabulaire, pas le vôtre, qui rendra le document juste.",
      "Reviews, messages, emails, spoken feedback written down. Word for word: their vocabulary, not yours, will make the document right.",
    ),
    ph: t("« ... »", "\u201c...\u201d"),
    tag: t("Audience", "Audience"),
  },
  {
    id: "team", type: "choice",
    label: t("Combien de personnes parlent au nom de la maison ?", "How many people speak on behalf of the house?"),
    help: t("Vous compris, associés, équipe, prestataires réguliers.", "Including you, partners, team, regular contractors."),
    options: [
      t("Moi seul·e", "Just me"),
      t("2 à 5 personnes", "2 to 5 people"),
      t("6 à 20 personnes", "6 to 20 people"),
      t("Plus de 20 personnes", "More than 20 people"),
    ],
    tag: t("Playbooks", "Playbooks"),
  },
  {
    id: "model", type: "choice",
    label: t("Comment vendez-vous aujourd'hui ?", "How do you sell today?"),
    options: [
      t("Paiement unique", "One-off payment"),
      t("Abonnement", "Subscription"),
      t("Sur devis, du sur-mesure", "By quote, bespoke"),
      t("Un mix des deux", "A mix of both"),
    ],
    tag: t("Business", "Business"),
  },
  {
    id: "price", type: "textarea",
    label: t(
      "Qu'est-ce qui justifierait de doubler votre prix demain ?",
      "What would justify doubling your price tomorrow?",
    ),
    help: t(
      "Ce qu'il faudrait que vous prouviez, ou que vous soyez, pour que le doubler ne choque personne.",
      "What you would have to prove, or be, for doubling it to shock nobody.",
    ),
    ph: t("Il faudrait que...", "I would have to..."),
    tag: t("Business", "Business"),
  },
  {
    id: "who_writes", type: "choice", multi: true, max: 3,
    label: t("Qui écrit aujourd'hui au nom de la maison ?", "Who writes on behalf of the house today?"),
    help: t(
      "Les playbooks seront écrits pour ceux-là : ils doivent pouvoir s'en servir tels quels.",
      "The playbooks will be written for them: they must be able to use them as they are.",
    ),
    options: [
      t("Moi", "Me"),
      t("Un membre de l'équipe", "A team member"),
      t("Un freelance ou une agence", "A freelancer or an agency"),
      t("Un outil d'IA", "An AI tool"),
      t("Personne : ça ne se fait pas vraiment", "Nobody: it doesn't really happen"),
    ],
    tag: t("Playbooks", "Playbooks"),
  },
  {
    id: "channels", type: "choice", multi: true, max: 9,
    label: t(
      "Sur quels canaux la maison s'exprime-t-elle régulièrement aujourd'hui ?",
      "On which channels does the house speak regularly today?",
    ),
    help: t("Régulièrement : au moins une fois par mois.", "Regularly: at least once a month."),
    options: [
      t("Site web", "Website"),
      t("Instagram", "Instagram"),
      t("LinkedIn", "LinkedIn"),
      t("TikTok", "TikTok"),
      t("YouTube", "YouTube"),
      t("Newsletter", "Newsletter"),
      t("Presse et médias", "Press and media"),
      t("Salons et événements", "Fairs and events"),
      t("Rien de régulier", "Nothing regular"),
    ],
    tag: t("Playbooks", "Playbooks"),
  },
  {
    id: "content_format", type: "choice",
    label: t(
      "Quel format pouvez-vous tenir dans la durée, sans vous épuiser ?",
      "Which format can you sustain over time, without burning out?",
    ),
    options: [
      t("Écrit long", "Long-form writing"),
      t("Court et visuel", "Short and visual"),
      t("Vidéo", "Video"),
      t("Audio", "Audio"),
      t("Je ne sais pas encore", "I don't know yet"),
    ],
    tag: t("Playbooks", "Playbooks"),
  },
  {
    id: "support_scene", type: "textarea",
    label: t(
      "Racontez la dernière fois qu'un client a été déçu ou en colère.",
      "Tell me about the last time a client was disappointed or angry.",
    ),
    help: t("Qu'avez-vous répondu ? Le referiez-vous ?", "What did you reply? Would you do it again?"),
    ph: t("La dernière fois...", "The last time..."),
    tag: t("Playbooks", "Playbooks"),
  },
  {
    id: "hr_disqualifier", type: "textarea", optional: true,
    label: t(
      "Chez quelqu'un qui travaillerait avec vous (employé, associé, prestataire), quelle qualité est non-négociable, et laquelle disqualifie immédiatement ?",
      "In someone who would work with you (employee, partner, contractor), which quality is non-negotiable, and which disqualifies them immediately?",
    ),
    help: t(
      "Même avec un CV parfait. Si vous travaillez seul·e, répondez pour la première personne que vous accueilleriez.",
      "Even with a perfect CV. If you work alone, answer for the first person you would bring in.",
    ),
    ph: t("Non-négociable : ... Disqualifiant : ...", "Non-negotiable: ... Disqualifying: ..."),
    tag: t("Playbooks", "Playbooks"),
  },
  {
    id: "traction", type: "textarea", optional: true,
    label: t(
      "Quels chiffres ou faits vérifiables prouvent que ça marche déjà ?",
      "Which verifiable numbers or facts prove it already works?",
    ),
    help: t(
      "Clients, ancienneté, résultats mesurés, presse, récompenses, clients connus. Autant qu'il y en a.",
      "Clients, years in business, measured results, press, awards, well-known clients. As many as there are.",
    ),
    ph: t("Ex : 43 clients en 14 mois, 4,9 sur 212 avis, cité par...", "E.g. 43 clients in 14 months, 4.9 across 212 reviews, quoted by..."),
    tag: t("Business", "Business"),
  },
  {
    id: "deploy", type: "choice", multi: true,
    label: t(
      "Où le moment doit-il être vu en premier ?",
      "Where must the moment be seen first?",
    ),
    help: t("Plusieurs réponses possibles.", "Select as many as apply."),
    options: [
      t("Votre site ou une page de lancement", "Your site or a launch page"),
      t("La presse et les médias", "Press and media"),
      t("Les réseaux sociaux", "Social media"),
      t("Un événement ou une soirée", "An event or an evening"),
      t("Vos partenaires et investisseurs", "Your partners and investors"),
      t("Votre liste email ou votre communauté", "Your email list or your community"),
    ],
    tag: t("Déploiement", "Deployment"),
  },
  {
    id: "visual_keep", type: "textarea",
    label: t(
      "Dans votre identité visuelle actuelle, qu'est-ce qui doit rester, et qu'est-ce qui doit disparaître ?",
      "In your current visual identity, what must stay, and what must go?",
    ),
    help: t(
      "Logo, couleurs, typographies, photos, packaging, décor. Si vous n'avez encore rien, dites-le.",
      "Logo, colours, typefaces, photos, packaging, decor. If you have nothing yet, say so.",
    ),
    ph: t("À garder : ... À abandonner : ...", "Keep: ... Drop: ..."),
    tag: t("Identité visuelle", "Visual identity"),
  },
  {
    id: "portrait_house", type: "textarea",
    label: t("Si cette maison était une personne, décrivez-la.", "If this house were a person, describe them."),
    help: t(
      "Sa posture, sa façon de parler, l'endroit où elle se sentirait chez elle. Soyez précis — les réponses vagues produisent des maisons vagues.",
      "Their posture, the way they speak, the kind of place they would feel at home in. Be specific — vague answers produce vague houses.",
    ),
    ph: t("Elle porterait...", "They would wear..."),
    deep: t(
      "Et ce qui la trahirait immédiatement comme n'étant PAS elle : le lieu, le ton, la référence qu'elle refuserait.",
      "And what would immediately betray them as NOT being themselves: the place, the tone, the reference they would refuse.",
    ),
    nudge: t(
      "Comment parle-t-elle ? Qu'est-ce qu'elle ne dirait jamais ? Qu'est-ce qui la ferait quitter une pièce ?",
      "How do they speak? What would they never say? What would make them leave a room?",
    ),
    unlock: t(
      "Le ton de voix se déduira de ce portrait : sept règles avec vos propres exemples.",
      "The tone of voice will be derived from this portrait: seven rules with your own examples.",
    ),
    tag: t("Identité visuelle", "Visual identity"),
  },
  {
    id: "outside_refs", type: "textarea", optional: true,
    label: t(
      "Trois références hors de votre secteur qui disent ce que la maison devrait ressentir.",
      "Three references outside your field that say what the house should feel like.",
    ),
    help: t(
      "Un film, un lieu, un objet, une époque : rien qui vienne de votre industrie.",
      "A film, a place, an object, an era: nothing from your own industry.",
    ),
    ph: t("Le film... Le lieu... L'objet...", "The film... The place... The object..."),
    tag: t("Identité visuelle", "Visual identity"),
  },
  {
    id: "calendar", type: "textarea", optional: true,
    label: t(
      "Quelles autres échéances entourent le jour J ?",
      "What other deadlines surround day D?",
    ),
    help: t(
      "Avant : ce qui doit être prêt. Après : ce qui suit le moment (livraison, salon, saison, deuxième date). Elles décident de l'ordre de la séquence.",
      "Before: what must be ready. After: what follows the moment (delivery, trade show, season, second date). They set the order of the sequence.",
    ),
    ph: t("Avant le jour J : ... Après : ...", "Before day D: ... After: ..."),
    tag: t("Déploiement", "Deployment"),
  },
  {
    id: "moment_constraints", type: "textarea", optional: true,
    label: t(
      "Qu'est-ce qui est confidentiel, figé ou non négociable avant le jour J ?",
      "What is confidential, fixed or non-negotiable before day D?",
    ),
    help: t(
      "Embargos, partenaires, contrats, décisions déjà prises, choses que vous ne voulez pas voir révélées avant l'heure.",
      "Embargoes, partners, contracts, decisions already made, things you do not want revealed before time.",
    ),
    tag: t("Le moment", "The moment"),
  },
  {
    id: "budget", type: "choice", optional: true,
    label: t(
      "Quel budget pouvez-vous consacrer à votre moment, hors honoraires du récit ?",
      "What budget can you put into your moment, excluding the story's fee?",
    ),
    help: t("Production, publicité, événement, presse. Cela nous évite de vous recommander ce que vous ne pourrez pas faire, et cadre le devis de mise en scène.", "Production, advertising, event, press. It keeps us from recommending what you could not do, and frames the staging quote."),
    options: [
      t("Moins de 2 000 €", "Under €2,000"),
      t("2 000 à 10 000 €", "€2,000 to €10,000"),
      t("10 000 à 50 000 €", "€10,000 to €50,000"),
      t("Plus de 50 000 €", "Over €50,000"),
      t("Je ne sais pas encore", "I don't know yet"),
    ],
    tag: t("Déploiement", "Deployment"),
  },
  {
    id: "proof", type: "textarea",
    label: t(
      "Racontez une fois précise où quelqu'un a compris votre maison sans que vous ayez eu à l'expliquer.",
      "Tell me about one specific time someone understood your house without you having to explain it.",
    ),
    help: t("Ce qui s'est passé, ce qui a été dit.", "What happened, what was said."),
    ph: t("C'était le jour où...", "It was the day when..."),
    tag: t("Preuve", "Proof"),
  },
  {
    id: "success_signal", type: "textarea",
    label: t(
      "Trente jours après le jour J, quel signe concret vous dirait que le moment a porté ?",
      "Thirty days after day D, what concrete sign would tell you the moment carried?",
    ),
    help: t(
      "Pas un chiffre d'affaires : un signe qu'on peut observer. Un type de personne qui écrit, une phrase qu'on vous cite, une porte qui s'ouvre.",
      "Not a revenue figure: a sign you can observe. A type of person who writes in, a sentence people quote to you, a door that opens.",
    ),
    ph: t("Je saurai que ça a porté quand...", "I will know it carried when..."),
    tag: t("Ambition", "Ambition"),
  },
  {
    id: "moment_stage", type: "choice", optional: true,
    label: t(
      "Une fois le récit écrit, souhaitez-vous que nous mettions aussi votre moment en scène ?",
      "Once the story is written, would you like us to stage your moment too?",
    ),
    help: t(
      "La mise en scène : le concept, la séquence de révélation, chaque texte prêt à publier, le dossier de presse, notre présence le jour J. Sur devis, sans engagement.",
      "The staging: the concept, the reveal sequence, every text ready to publish, the press kit, our presence on the day. By quote, no commitment.",
    ),
    options: [
      t("Oui, je veux le moment complet : envoyez-moi un devis", "Yes, I want the full moment: send me a quote"),
      t("Peut-être, après avoir lu le récit", "Maybe, after reading the story"),
      t("Non, le récit seul me suffit", "No, the story alone is enough"),
    ],
    tag: t("Le moment", "The moment"),
  },
  {
    id: "headline", type: "textarea", optional: true,
    label: t(
      "Imaginez l'article de presse du lendemain du jour J. Quel est le titre ?",
      "Imagine the press article the day after day D. What is the headline?",
    ),
    help: t(
      "Une phrase. Ce que vous espérez qu'on dise, écrit comme si c'était déjà vrai.",
      "One sentence. What you hope will be said, written as if it were already true.",
    ),
    ph: t("Le titre serait...", "The headline would be..."),
    tag: t("Ambition", "Ambition"),
  },
  {
    id: "portrait_founder", type: "textarea",
    label: t(
      "Décrivez le fondateur, ou l'artiste, un an après le jour J.",
      "Describe the founder, or the artist, one year after day D.",
    ),
    help: t(
      "Ce qu'il fait différemment, ce qu'on dit de lui, ce qu'il n'a plus besoin d'expliquer.",
      "What he or she does differently, what is said about them, what they no longer need to explain.",
    ),
    ph: t("Un an après, il...", "A year on, he or she..."),
    tag: t("Ambition", "Ambition"),
  },
  {
    id: "review_logistics", type: "textarea", optional: true,
    label: t(
      "Qui, en dehors de vous, doit valider le document ?",
      "Who, besides you, must approve the document?",
    ),
    help: t(
      "Associé, conjoint, comité : toute personne dont l'avis comptera quand vous relirez le document.",
      "Partner, spouse, committee: anyone whose opinion will count when you read the document.",
    ),
    ph: t("Validation : ...", "Approval: ..."),
    tag: t("Ambition", "Ambition"),
  },
  {
    id: "links", type: "links",
    label: t("Liens et accès.", "Links and access."),
    help: t(
      "Site actuel, LinkedIn du fondateur, un ou deux contenus déjà publiés.",
      "Current website, founder's LinkedIn, one or two pieces you have already published.",
    ),
    tag: t("Accès", "Access"),
  },
]

const pickText = (v: I18nText, lang: Lang): string => v[lang] ?? v.fr

export function localizeQuestion(q: QuestionSource, lang: Lang): Question {
  return {
    id: q.id,
    type: q.type,
    label: pickText(q.label, lang),
    help: q.help ? pickText(q.help, lang) : undefined,
    ph: q.ph ? pickText(q.ph, lang) : undefined,
    tag: q.tag ? pickText(q.tag, lang) : undefined,
    optional: q.optional,
    deep: q.deep ? pickText(q.deep, lang) : undefined,
    nudge: q.nudge ? pickText(q.nudge, lang) : undefined,
    unlock: q.unlock ? pickText(q.unlock, lang) : undefined,
    options: q.options?.map((o) => pickText(o, lang)),
    hints: q.hints?.map((h) => pickText(h, lang)),
    multi: q.multi,
    max: q.max,
    terrains: q.terrains,
    axes: q.axes?.map((ax) => ({ id: ax.id, l: pickText(ax.l, lang), r: pickText(ax.r, lang) })),
  }
}

export const CHAPTERS: { key: string; ids: string[] }[] = [
  { key: "fondations", ids: ["identity", "moment_date", "moment", "moment_stakes", "activity", "conviction", "rupture", "enemy"] },
  { key: "champ", ids: ["positioning", "category", "awareness", "competitors", "competitor_edge", "moment_ref", "past_attempts", "moment_known"] },
  { key: "voix", ids: ["archetype", "tone", "address_mode", "languages", "forbidden", "wordbank", "voice_sample"] },
  { key: "audience", ids: ["moment_audience", "audience", "decision", "objections", "customer_words"] },
  { key: "quotidien", ids: ["team", "model", "price", "who_writes", "channels", "content_format", "support_scene", "hr_disqualifier", "traction"] },
  { key: "deploiement", ids: ["deploy", "visual_keep", "portrait_house", "outside_refs", "calendar", "moment_constraints", "budget"] },
  { key: "preuve", ids: ["proof", "success_signal", "moment_stage", "headline", "portrait_founder", "review_logistics", "links"] },
]

const canonicalId = (id: string) => id.replace(/_(produits|lieux|artistes)$/, "")

export function chapterKeyOf(id: string): string {
  const cid = canonicalId(id)
  return CHAPTERS.find((ch) => ch.ids.includes(cid))?.key ?? "preuve"
}

export function stepsForOffer(_offer: OfferKey, lang: Lang, terrain?: TerrainKey): Question[] {
  const t: TerrainKey = terrain ?? "marques"
  const flat = CHAPTERS.flatMap((ch) => ch.ids)
  const rank = (id: string) => {
    const i = flat.indexOf(canonicalId(id))
    return i === -1 ? flat.length : i
  }
  return QUESTION_SOURCES.filter((q) => {
    if (!q.terrains) return true
    return q.terrains.includes(t)
  })
    .sort((a, b) => rank(a.id) - rank(b.id))
    .map((q) => ({ ...localizeQuestion(q, lang), chapter: chapterKeyOf(q.id) }))
}

export function wordsFor(lang: Lang): string[] {
  return WORDS.map((w) => pickText(w, lang))
}

export function isOfferKey(value: string): value is OfferKey {
  return value === "architecture"
}
