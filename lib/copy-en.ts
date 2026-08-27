import type { Copy } from "./copy-fr"

/**
 * TOUTE LA COPIE ANGLAISE.
 *
 * Typé `Copy` : si une clé manque, le build échoue. Une traduction oubliée est
 * une erreur de compilation, jamais un trou dans la page en ligne.
 *
 * Ce n'est pas une traduction littérale. Trois endroits l'exigeaient :
 *
 * — « ÉLAN » n'a pas d'équivalent anglais qui garde à la fois le sens physique
 *   et le sens de carrière. « Momentum » l'a — c'est le nom de la marque, donc
 *   le titre devient « You're not short on work. You're short on momentum. »
 *   Le mot-clé et le nom coïncident : l'anglais y gagne ce que le français
 *   n'avait pas.
 *
 * — Le vouvoiement disparaît. L'anglais n'a qu'un « you », mais il a un
 *   registre : les contractions restent (you're, don't), le vocabulaire évite
 *   le jargon d'agence. On garde le même ton direct sans jamais devenir
 *   familier.
 *
 * — Les prix restent en euros et les repères français gardent leurs noms
 *   propres. Un artiste anglophone qui lit cette page doit comprendre qu'il
 *   s'adresse à un conseiller basé à Paris ; le masquer serait à la fois
 *   malhonnête et moins intéressant.
 */
export const EN: Copy = {
  meta: {
    titre: "MOMENTUM — Strategic advice for independent artists",
    description:
      "Your releases don't add up because they don't tell a story. MOMENTUM helps you go from isolated tracks to an arc that compounds: a strategic advisor in your corner, every month. €299/month, no commitment, no percentage.",
    ogTitre: "MOMENTUM — Strategic advice for independent artists",
    ogDescription:
      "You're not short on work. You're short on momentum. A strategic advisor in your corner, every month.",
  },

  nav: { candidater: "Apply", accueil: "MOMENTUM, home", langue: "Change language" },

  hero: {
    kicker: "STRATEGIC ADVICE FOR INDEPENDENT ARTISTS · PARIS",
    titre1: "You're not short on work.",
    titre2a: "You're short on ",
    titre2b: "momentum",
    chapo1:
      "Twelve tracks released this year, and December looks exactly like January. It isn't your level, it isn't the algorithm, and it isn't your budget: it's that your releases connect to nothing. ",
    chapoFort: "Seven isolated tracks are seven times one.",
    chapo2: " Chained together, they become something else entirely — and that's the only difference between the two curves behind this text.",
    cta: "Apply ↓",
  },

  scene: {
    etiquette: "YOU KNOW THIS MOMENT",
    titre: "Two in the morning.",
    p1: "You're replaying the same mix for the thirtieth time and you no longer know whether the track is good or whether you're just tired. You open Instagram for two minutes. Someone you're certain is worse than you just crossed a hundred thousand plays. You close it.",
    p2: "You tell yourself you need to work harder.",
    verdict: "You already work harder than he does.",
    p3: "The real cost of being independent isn't money. It's the number of decisions that commit months of your life, and that you make alone, at two in the morning, with nobody to run them past.",
  },

  ratures: {
    etiquette: "WHAT YOU'VE ALREADY TRIED",
    titre: "Everyone tells you the same thing: work more, release more, post more.",
    chapo:
      "It's the most common advice in the industry. It's also the advice that has cost the most years to the most talented artists.",
    lignes: [
      { essai: "Releasing more often", effet: "Your catalogue grows, your identity dissolves." },
      { essai: "Paying for promo or a playlist package", effet: "Plays that don't listen, and zero returning fans." },
      { essai: "Posting every single day", effet: "You're producing content instead of producing a body of work." },
      { essai: "Switching styles to chase what works", effet: "You arrive late to a wave, with nothing that belongs to you." },
      { essai: "Sending a hundred emails to blogs and labels", effet: "Nobody answers, because nothing says who you are." },
    ],
  },

  silence1: { a: "None of these moves is stupid.", b: "They all fail for the same reason." },
  silence2: { a: "You don't need to be discovered.", b: "You need a direction." },

  cause: {
    etiquette: "THE REAL CAUSE",
    titre1: "Your releases don't add up",
    titre2a: "because they don't ",
    titre2b: "tell a story",
    titre2c: ".",
    p1: "Someone who finds your track today has no reason to go looking for the next one. Nothing links it to the last: not the world, not the imagery, not the promise. So every release starts from zero, with the same audience to win all over again.",
    p2: "It's arithmetic: seven isolated tracks are seven times one. Seven chained tracks are something else — each one inherits the audience, the identity and the anticipation of the one before. Same work, same talent, same number of hours.",
    verdict: "What you're missing isn't one more track. It's whatever connects the ones you already have.",
    legende: "The gap between the two bands isn't a difference in talent. It's a difference in linkage.",
  },

  diagnostic: {
    etiquette: "BEFORE WE GO FURTHER",
    titre: "Where do you actually stand?",
    chapo:
      "Five questions, two minutes, no email address. None of them asks how much you release: releasing a lot isn't a sign of health, it's usually the symptom.",
    enTete: "DIAGNOSTIC — 2 MINUTES",
    resultat: "RESULT",
    precedente: "← Previous question",
    recommencer: "Start over",
    ctaResultat: "Get real feedback on a track ↓",
    note: "This diagnostic is a stripped-down version of the first stage of the cycle. The real one is about your music, not five checkboxes.",
    questions: [
      {
        texte: "Can you describe your project in one sentence you'd say out loud without flinching?",
        options: [
          { label: "Yes, it's written down and I know it by heart", points: 3 },
          { label: "Roughly, but it changes depending on the day", points: 1 },
          { label: "No, I've never managed to put it into words", points: 0 },
        ],
      },
      {
        texte: "When you release a track, do you already know what the next one is?",
        options: [
          { label: "Yes, the next three, and why in that order", points: 3 },
          { label: "Just the next one", points: 2 },
          { label: "No, I decide when the time comes", points: 0 },
        ],
      },
      {
        texte: "After a release, do you keep listeners who come back for the next one?",
        options: [
          { label: "Yes, a base that shows up every time", points: 3 },
          { label: "A few, hard to say", points: 1 },
          { label: "No, every release starts from zero", points: 0 },
        ],
      },
      {
        texte: "Did your last track do better than the one before it?",
        options: [
          { label: "Yes, and I know why", points: 3 },
          { label: "Yes, but I don't know why", points: 2 },
          { label: "No, or no idea", points: 0 },
        ],
      },
      {
        texte: "Who tells you honestly what's wrong with your work?",
        options: [
          { label: "Someone in the industry, regularly", points: 3 },
          { label: "Friends and family, when I push them", points: 1 },
          { label: "Nobody", points: 0 },
        ],
      },
    ],
    resultats: [
      {
        max: 5,
        code: "agitation",
        titre: "You're spinning, not moving",
        texte:
          "You're working, but nothing accumulates. None of your releases sets up the next one, nobody gives you an honest read, and you can't say in one sentence what your project promises. This isn't a talent problem or an effort problem: it's a linkage problem. Concretely, at this stage, another year at the same pace leaves you exactly where you are today — with twelve more tracks in the catalogue.",
        action: "This is precisely the case where the first cycle changes the most.",
      },
      {
        max: 10,
        code: "catalogue",
        titre: "You have a catalogue, not an arc",
        texte:
          "Some things already hold: you have good instincts, sometimes a direction. But it isn't explicit, so it isn't held, so it doesn't compound. Your releases resemble each other without answering each other. It's the most frustrating stage, because the work is there and the result stays flat — and it's also the stage where a few well-placed decisions produce the most visible gap.",
        action: "What you're missing is a written direction and someone to hold you to it.",
      },
      {
        max: 15,
        code: "arc",
        titre: "Your arc has started",
        texte:
          "You already have the essentials: a direction you can articulate, a sense of what comes next, the beginnings of an audience that returns. You don't need anything repaired. What would save you time now is a regular outside read on the trade-offs — which track as a single, which opportunity is worth your time, what to drop — so you don't break what you've just built.",
        action: "Be honest: this diagnostic is only worth as much as your answers.",
      },
    ],
  },

  mecanisme: {
    etiquette: "THE MECHANISM",
    titre1: "We stop working one release at a time.",
    titre2a: "We work ",
    titre2b: "an arc",
    p1: "An arc is a run of three to six releases designed together, where each one sets up the next and confirms the last. The same principle that makes you watch eight episodes back to back when you'd never have watched eight unconnected short films.",
    p2: "In practice: first we define what your project promises — in one sentence you can say out loud without embarrassment. Then we choose the tracks that keep that promise and the order in which they build it. Then, every month, we execute one link and correct the next with what we've just learned.",
    p3: "This is neither a calendar nor a communications plan. A calendar expires in month two. An arc corrects itself without losing its direction — which is exactly why it compounds instead of dissipating.",
    proposition:
      "Going from isolated releases to an arc that compounds, in three cycles, with someone who listens to every track instead of applying a formula.",
    legende: "Twelve months of a held arc, against twelve months of isolated releases.",
  },

  cycle: {
    etiquette: "THE MONTHLY CYCLE",
    titre: "Four stages, repeated every month.",
    chapo:
      "Nothing spectacular taken on its own — and that's precisely the point. Repetition creates momentum, never the intensity of one heroic month.",
    temps: [
      {
        n: "01",
        nom: "DIAGNOSTIC",
        quand: "The first month, then every quarter",
        texte:
          "We lay your project out flat. Your music first — listened to in full, several times, without flattery. Then your identity: what your world promises, and what it actually delivers. Then your real audience, not your follower count. Then your goals, rephrased until they become verifiable. And finally your blockers, including the ones you don't dare name.",
        sortie: "A written document: where your project stands, and what's holding it back.",
      },
      {
        n: "02",
        nom: "DIRECTION",
        quand: "The start of every month",
        texte:
          "We pick two or three actions — never ten. The rare skill isn't finding ideas: it's giving up good ideas that aren't the priority right now. A direction is just as much a list of things you decide not to do.",
        sortie: "Three written priorities, and an explicit list of what we're dropping this month.",
      },
      {
        n: "03",
        nom: "EXECUTION",
        quand: "All month",
        texte:
          "You create. You release. You post. You experiment. That work doesn't change and shouldn't: it's yours. The only difference is that the important decisions get an outside read before they're made, not after.",
        sortie: "Written feedback on what you produce, throughout the month.",
      },
      {
        n: "04",
        nom: "CORRECTION",
        quand: "The end of every month",
        texte:
          "We look at what worked, what didn't, and above all why. Most artists change strategy without ever measuring the old one — they mistake novelty for correction. Here, we only change what we've understood.",
        sortie: "A written review, and the direction for the month ahead.",
      },
    ],
  },

  obtenez: {
    etiquette: "WHAT YOU GET",
    titre: "Four things you cannot give yourself.",
    chapo: "None of them replaces your work. All of them determine what your work produces.",
    cartes: [
      {
        n: "01",
        titre: "You finally know where you actually stand",
        texte:
          "Your tracks listened to in full, several times, by someone whose job is both making records and building identities. Not a friendly \u201cit sounds clean\u201d: what works, what doesn't, and what would make the track better.",
        gain: "Doubt stops being permanent. It becomes a question with an answer.",
      },
      {
        n: "02",
        titre: "You know what to release, and in what order",
        texte:
          "Which track as a single, with what concept, at what moment, followed by what. Every release is placed to set up the next instead of living three weeks and dying.",
        gain: "Your releases stop cancelling each other out and start adding up.",
      },
      {
        n: "03",
        titre: "You know what to stop doing",
        texte:
          "This is the part nobody will ever give you for free. Three priorities a month, and an explicit list of everything we're dropping — including good ideas that simply aren't the priority right now.",
        gain: "You get back the hours that spinning was taking from you.",
      },
      {
        n: "04",
        titre: "You're no longer alone when it's time to decide",
        texte:
          "An offer that lands, a feature, an image change, an opportunity that looks good. You send it over, you get a reasoned opinion before you answer — not six months later, once it's done.",
        gain: "Bad decisions cost years. These are the ones you won't make.",
      },
    ],
  },

  preuve: {
    etiquette: "WHY LISTEN TO ME",
    titre: "An artist understands your art. A strategist understands your market.",
    chapo:
      "You need one who does both. It's the only valid reason to trust me with a read on your career, and it's the only one I claim.",
    p1: "My name is Hamza El Jaouahiry. Director and composer since 2019, trained in film at Université Gustave Eiffel then Sorbonne Nouvelle, with time in the studio as a sound engineer. I produce and compose my own music project, MORI, covered by press in Spain, the UK and Brazil.",
    p2: "The rest of my time I build brand identities: I run Strawberry Production, a brand narrative studio for founders, and in 2026 I published two books on brand storytelling, including an atlas of thirty narrative architectures. Since 2024 I've also been building a transmedia universe, Sinbury.",
    p3: "Put differently: I know your problem from the inside because I live it, and its solution from the outside because it's my job.",
    reperes: [
      { annee: "2019", texte: "First projects as a director and composer." },
      { annee: "2021", texte: "Film & Audiovisual degrees — Université Gustave Eiffel, then Sorbonne Nouvelle." },
      { annee: "2023", texte: "Studio sound engineer (Dans Le Labo)." },
      { annee: "2024", texte: "Launch of Sinbury, a transmedia universe: a fictional city and its cultural ecosystem." },
      { annee: "2025", texte: "MORI — a music project produced and composed alone, covered in Spain, the UK and Brazil." },
      { annee: "2026", texte: "Published \u201c30 Architectures — An Atlas of Narrative Patterns\u201d and the essay \u201cBrand Narrative in the Age of AI\u201d." },
    ],
    pasMontrerTitre: "WHAT I CAN'T SHOW YOU",
    pasMontrer:
      "Client testimonials: MOMENTUM is young and I'd rather have an empty section than manufactured reviews. When the first arcs are a year old, they'll be here, with verifiable numbers and real names.",
    montrerTitre: "WHAT I CAN SHOW YOU",
    montrer:
      "My own work — a music project that crossed borders without a label, a brand studio, two books. And, if you apply, written feedback on one of your tracks before you pay anything at all. You'll judge the quality of the advice on the evidence.",
    verdict: "Very few artist advisors have ever been afraid to hit \u201cpublish\u201d.",
  },

  offre: {
    etiquette: "THE OFFER",
    titre: "A manager costs €2,000 a month. And won't take artists at your stage.",
    chapo:
      "Between \u201cI do everything myself\u201d and \u201cI have a full team\u201d, there's a level in between. This is it.",
    enTete: "THE PROGRAMME",
    coutLabel: "WHAT IT COSTS",
    parMois: "/ month",
    sansEngagement:
      "No minimum term. No percentage of your rights, your revenue or your future deals.",
    cta: "Apply ↓",
    sousCta: "Answer within 72h · First cycle refunded if you get nothing from it",
    autresNiveaux:
      "Two other levels exist, at €149 and €499: the comparison is just below. But if you're hesitating, this is the right one.",
    deplier: "See all three levels and the line-by-line comparison",
    replier: "Collapse the three levels",
    leplusChoisi: "Most chosen",
    comparatifTitre: "What you get",
    comparatifNote1: "Most artists should start with ",
    comparatifNote2:
      ". It's the level where the work produces visible results without requiring the budget of a full team. I only work with ",
    comparatifNote3: " artists at a time — when the places are taken, applications stay on the list.",
  },

  garantie: {
    risqueLabel: "RISK ON YOUR SIDE",
    risqueValeur: "NONE",
    titre: "The first-cycle guarantee",
    texte:
      "If after the first month you feel the programme taught you nothing about your project, you tell me and I refund you in full. No argument, and no need to justify yourself.",
  },

  places: {
    ouvertes: "{n} of {total} places open",
  },

  objections: {
    etiquette: "WHAT YOU'RE THINKING RIGHT NOW",
    titre: "The five objections, in the order they arrive.",
    items: [
      {
        q: "\u201c€299 a month is a lot for me.\u201d",
        r: "That's the price of one studio day, or two promo campaigns that will do nothing. The difference: a studio day produces a file, a cycle produces a direction — which makes every studio day after it useful. If the budget genuinely isn't there, start at €149: a level you hold for six months beats a level you abandon in month two.",
      },
      {
        q: "\u201cI can get this advice free on YouTube.\u201d",
        r: "You can get general advice about the industry, and some of it is excellent. What you can't get is someone who listens to your fourteen tracks, looks at your visuals, knows your exact stage and tells you which one to release. General advice applies to everyone; that's precisely why it changes nobody's trajectory.",
      },
      {
        q: "\u201cWhat if you don't get my style?\u201d",
        r: "Tell me so in your application. I'd rather turn down a project I couldn't serve than take three months of payment before we both notice. What transfers between styles isn't taste — it's architecture: positioning, coherence, release sequencing.",
      },
      {
        q: "\u201cI haven't come far enough to deserve this.\u201d",
        r: "This is the most common objection and the most expensive one. Waiting until you've \u201cmade it\u201d to behave like a professional is exactly what costs people years. You need a project already underway and a real appetite to build. Not a deal, not a hundred thousand followers.",
      },
      {
        q: "\u201cWhat if it doesn't work?\u201d",
        r: "I can't guarantee streams, playlists or a deal — nobody can, and anyone promising you otherwise is selling you something else. What I do guarantee is the first cycle: if it teaches you nothing about your project, you're refunded in full.",
      },
    ],
  },

  pourQui: {
    etiquette: "WHO IT'S FOR",
    titre: "You don't need to be known. You need to want to build.",
    ouiLabel: "YOU'RE IN THE RIGHT PLACE IF",
    nonLabel: "IT'S NOT FOR YOU IF",
    oui: [
      "You're an independent artist and you've already started releasing.",
      "You want to get seriously better, not to be reassured.",
      "You can take honest criticism of your work.",
      "You're ready to execute between sessions.",
      "You don't yet have the means — or the need — for a full team.",
    ],
    non: [
      "You're looking for a guarantee of going viral.",
      "You're looking for a label deal or a promised playlist.",
      "You want someone to do the work for you.",
      "You want to be told your project is already perfect.",
      "You're looking for contacts to buy rather than a trajectory to build.",
    ],
    note: "I can't guarantee your success. Nobody can, and anyone who tells you otherwise is selling you something. What I can do: help you make better decisions, present your work better, and raise the quality of your trajectory.",
  },

  faq: {
    etiquette: "FREQUENTLY ASKED",
    titre: "The rest, plainly.",
    items: [
      {
        q: "What does a month actually look like?",
        r: "A sixty-minute call at the start of the month to set the direction, your tracks and visuals sent over across the weeks with my written feedback, a second call to settle the decisions in play, and a written review at month's end that sets the direction for the next.",
      },
      {
        q: "Do you take a percentage of my career?",
        r: "Never. Fixed monthly subscription, you keep 100% of your rights, your revenue and your decisions. It's also what guarantees my advice serves your project and not my interests: I have nothing to gain from pushing you toward a deal.",
      },
      {
        q: "Do you produce or compose for me?",
        r: "No. I advise, you create. It's a line I hold: an advisor who puts his hands on the sound ends up making his own music through you, and your identity disappears.",
      },
      {
        q: "Are my unreleased tracks protected?",
        r: "Everything you send is confidential and shared with nobody. I claim no rights, no publishing share and no credit on anything you produce during the programme.",
      },
      {
        q: "Can I stop whenever I want?",
        r: "Yes, month to month, no justification needed. Be clear-eyed though: one month gives you a diagnostic, not a trajectory. The gap shows up over three cycles.",
      },
      {
        q: "Why only six artists?",
        r: "Because beyond that I can no longer listen to each project in depth — and advice given without real listening is worth nothing. It's a limit of attention, not a sales device.",
      },
    ],
  },

  candidature: {
    index: "13 — APPLICATION",
    titre: "Send me a track. I'll tell you what I think.",
    p1: "Free, before any question of money. It's the only honest way to judge an advisor: on the quality of the advice, not the quality of the sales page.",
    p2a: "I only work with ",
    p2b: " artists at a time. This form isn't a formality — it's already the start of the diagnostic, and the quality of your answers determines the quality of mine.",
    etapes: [
      ["01", "You apply", "A few honest questions. Budget eight minutes if you answer them seriously."],
      ["02", "You get written feedback", "I listen to the track you send, in full, and write you what I think. Free, whether or not anything follows."],
      ["03", "We decide", "If the fit is there, a call to set your arc and the direction for month one. If not, I tell you why."],
    ] as [string, string, string][],
    question: "A question before applying?",
  },

  formulaire: {
    nom: "Artist name",
    nomAide: "The name you release under",
    email: "Email",
    lien: "The track you want my feedback on (Spotify, SoundCloud, YouTube, Drive…)",
    niveau: "Where you're at",
    offre: "Level you have in mind",
    indecis: "I don't know yet",
    projet: "Your project in a few lines",
    projetAide: "What you do, how long you've been at it, what you want to build.",
    blocage: "What's blocking you right now?",
    blocageAide: "Be specific. It's the field I read first.",
    envoyer: "Send and get my feedback →",
    envoi: "Sending…",
    sousBouton: "Written feedback within 72h · Free · No automatic signup",
    niveaux: [
      { valeur: "debut", label: "I'm just starting to release tracks" },
      { valeur: "regulier", label: "I release regularly, audience still small" },
      { valeur: "audience", label: "I have an audience that's starting to respond" },
      { valeur: "pro", label: "I make part of my living from music" },
    ],
    erreurNiveau: "Tell me where you're at: it's what determines the right level of support.",
    erreurLimite: "Too many attempts from this connection. Try again in a few minutes.",
    erreurEnvoi: "That didn't go through. Try again, or email me directly.",
    recuLabel: "APPLICATION RECEIVED",
    recuTitre: "You'll get your written feedback within 72 hours.",
    recuTexte:
      "I listen to your track in full, several times, and write you what I think — whether or not anything follows. If the fit is there, we'll set up a call to lay out your arc. If it isn't the right moment, I'll say so plainly, and tell you why.",
    nePasRemplir: "Do not fill in",
    chargement: "Loading the form…",
  },

  cloture: {
    titre: "A year from now, you'll have released ten or so more tracks.",
    chapo: "The only question is whether they'll form a catalogue or a trajectory.",
    cta: "Apply ↑",
    sous: "Answer within 72h · No commitment · First cycle refunded if you get nothing from it",
  },

  arc: {
    bandeHaute: "Seven releases, no link",
    bandeBasse: "The same seven releases, chained",
    invite: "Hover or tap a release to see its role in the chain.",
    maillons: [
      "Release 1 — it sets the promise. Nobody is waiting for it, and that's fine: its job is to say what comes next.",
      "Release 2 — it confirms. This is the one that proves the first wasn't an accident.",
      "Release 3 — it widens. Same world, different angle: you keep the listener by showing there's more to see.",
      "Release 4 — the tipping point. Listeners from release 1 come back on their own; you're no longer starting from zero.",
      "Release 5 — it capitalises. This is when the strongest track goes out: it inherits everything before it.",
      "Release 6 — it opens. It announces what's next before what's next even exists.",
      "Release 7 — it harvests. The same work as release 1, on an audience that is no longer the same.",
    ],
    mois1: "Month 1",
    mois12: "Month 12",
    alt: "Above, seven isolated releases of identical size with no link between them. Below, the same seven releases connected to one another, each larger and higher than the last.",
    altTrajectoires:
      "Two trajectories over twelve months: spinning oscillates a lot and returns to its starting point, momentum rises slowly then accelerates.",
    agitation: "Spinning.",
    agitationTexte: " Plenty of movement, no progress.",
    elan: "Momentum.",
    elanTexte: " Slower at first. Then it's not close.",
  },

  offres: {
    tiers: [
      {
        id: "advisor",
        nom: "ADVISOR",
        promesse: "Stop working completely alone.",
        pour: "For artists starting to take their project seriously.",
        cta: "Apply for Advisor",
        inclus: [
          "1 strategic session of 60 min per month",
          "2 written reviews of your work or content",
          "The 3 priorities of the month, in writing",
          "1 curated selection of opportunities for your profile",
          "Written analysis of the important decisions",
        ],
      },
      {
        id: "development",
        nom: "ARTIST DEVELOPMENT",
        promesse: "Turn your project into a trajectory.",
        pour: "For artists who want to build, not just publish.",
        cta: "Apply for Development",
        inclus: [
          "2 strategic sessions of 60 min per month",
          "Up to 6 written reviews per month (tracks, lyrics, visuals, content)",
          "Positioning and artistic identity",
          "Release strategy: single choice, concept, timing",
          "Content strategy anchored in your identity",
          "Opportunity scouting and selection",
          "Quarterly roadmap + monthly priorities",
          "A written review at the end of each month",
        ],
      },
      {
        id: "partner",
        nom: "ARTIST PARTNER",
        promesse: "An outside read on every decision.",
        pour: "For artists already working on their project full time.",
        cta: "Apply for Partner",
        inclus: [
          "Everything in Artist Development",
          "Direct access by message, answer within 24 working hours",
          "Strategic art direction on releases",
          "Analysis of collaborations and incoming offers",
          "Review of your decks, pitches and applications",
          "End-to-end release preparation",
          "In-depth strategic review every month",
        ],
      },
    ],
    comparatif: [
      { ligne: "Monthly price", advisor: "€149", development: "€299", partner: "€499" },
      { ligne: "Strategic sessions / month", advisor: "1 × 60 min", development: "2 × 60 min", partner: "2 × 60 min + messages" },
      { ligne: "Written reviews of your work / month", advisor: "2", development: "up to 6", partner: "no reasonable ceiling" },
      { ligne: "Priorities of the month", advisor: "3, in writing", development: "3, in writing", partner: "3, in writing" },
      { ligne: "Positioning & identity", advisor: "—", development: "yes", partner: "yes" },
      { ligne: "Release strategy", advisor: "—", development: "yes", partner: "art direction included" },
      { ligne: "Opportunity scouting", advisor: "1 selection", development: "ongoing", partner: "ongoing + application prep" },
      { ligne: "Quarterly roadmap", advisor: "—", development: "yes", partner: "yes" },
      { ligne: "Written monthly review", advisor: "—", development: "yes", partner: "in depth" },
      { ligne: "Access between sessions", advisor: "—", development: "asynchronous", partner: "answer within 24 working hours" },
    ],
  },

  pied: {
    baseline:
      "Strategic advice for independent artists. We don't work one release at a time: we work an arc.",
    baseline2a: " ",
    baseline2b: " artists at a time, from ",
    sansPourcentage: "No percentage. No promise of going viral.",
    contact: "Contact",
    mentions: "Legal notice",
    signature: "An advisor, not a manager.",
  },

  erreur404: {
    label: "ERROR 404",
    titre: "This page doesn't exist.",
    texte: "The link may be old, or the address mistyped. The whole site fits on a single page.",
    retour: "Back to home",
    candidater: "Apply",
  },
}
