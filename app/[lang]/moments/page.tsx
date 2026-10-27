import { LocaleLink as Link } from "@/components/locale-link"
import { NavBar } from "@/components/strawberry/navbar"
import { Footer } from "@/components/strawberry/footer"
import { pick } from "@/lib/t"
import { isLang, type Lang } from "@/lib/lang"
import { STRIPE_LINKS } from "@/lib/config"
import { MomentArt } from "@/components/strawberry/moment-visuals"

type Moment = {
  id: string
  name: string
  hook: string
  steps: { when: string; what: string }[]
  gets: string[]
  not: string
  da: string
}

type Copy = {
  kicker: string
  h1a: string
  h1b: string
  lead: string
  honest: string
  jump: string
  doTitle: string
  daTitle: string
  getTitle: string
  notTitle: string
  cta: string
  order: string
  closeTitle: string
  closeBody: string
  priceStory: string
  priceMoment: string
  moments: Moment[]
}

const T: Record<Lang, Copy> = {
  fr: {
    kicker: "Les moments",
    h1a: "Chaque moment a sa forme.",
    h1b: "Voici ce que nous faisons pour chacun.",
    lead: "Un single ne se lance pas comme une ouverture de restaurant, ni une levée de fonds comme un film. La méthode est la même ; ce que nous écrivons, et dans quel ordre, change. Pour chaque type de moment : ce que nous faisons, et ce que vous recevez.",
    honest:
      "Ces pages décrivent ce que nous livrons. Ce ne sont pas des études de cas de clients : nous ne montrons que ce qui est vrai, et nos premiers moments sont à venir.",
    jump: "Aller à un moment",
    doTitle: "Ce que nous faisons",
    daTitle: "L'accompagnement direction artistique",
    getTitle: "Ce que vous recevez",
    notTitle: "Ce que nous ne faisons pas",
    cta: "Parlez-nous de ce moment",
    order: "Commander le récit · 2 900 €",
    closeTitle: "Votre moment n'est pas dans la liste ?",
    closeBody:
      "Une exposition, un livre, une saison, un changement de direction. Si une date existe et que ce jour-là doit compter, nous pouvons l'écrire. Dites-nous la date, nous vous dirons honnêtement ce qui peut tenir.",
    priceStory: "Le récit seul · 2 900 €",
    priceMoment: "Le moment complet · à partir de 6 000 €, sur devis",
    moments: [
      {
        id: "single",
        name: "Sortie d'un single",
        hook: "Un single, c'est trois minutes et une seule première impression. Sans récit, il sort comme tous les autres du vendredi.",
        steps: [
          { when: "J-60 à J-40", what: "Le récit : ce que ce morceau dit de vous, ce qu'il refuse, et le mot que personne dans votre zone ne tient." },
          { when: "J-40 à J-30", what: "Le concept : l'idée qui porte la sortie, la phrase qui la dit, ce qu'on montre avant et ce qu'on garde pour le jour J." },
          { when: "J-30 à J-1", what: "La séquence : ce qui sort, quand et sur quel support, avec chaque texte écrit à l'avance." },
          { when: "Jour J", what: "Nous suivons la sortie et ajustons les textes en direct." },
          { when: "J+1 à J+30", what: "La suite : les textes qui prolongent la sortie, puis un bilan écrit de ce qui a porté." },
        ],
        gets: [
          "La plateforme de l'artiste : positionnement, ton de voix, trois refus écrits",
          "La carte des artistes voisins, leur bio citée telle quelle, et la zone qu'ils laissent libre",
          "Le concept de sortie et sa phrase",
          "Le calendrier de révélation, jour par jour",
          "Tous les textes prêts à publier : teaser, annonce, légendes, newsletter, message de pré-sauvegarde",
          "La bio en quatre formats : presse, plateformes, dossier, version courte",
          "Le communiqué et le mail aux blogs, médias et programmateurs (le texte, pas l'envoi)",
          "Le texte de pochette ou la note d'intention",
          "Le brief de direction artistique, et notre avis écrit sur les propositions reçues",
          "Le bilan écrit à J+30",
        ],
        not: "Nous n'envoyons pas les mails, ne gérons pas les playlists, la publicité ni la distribution. Vous publiez avec nos textes.",
        da: "Nous vous accompagnons dans le choix de la direction artistique de la sortie : pochette, univers visuel, références, couleurs, ce que le clip et les visuels doivent dire. Nous écrivons le brief artistique pour le graphiste ou le réalisateur, puis nous comparons avec vous leurs propositions à l'aune du récit, pour que la sortie devienne un événement marquant.",
      },
      {
        id: "album",
        name: "Sortie d'un album ou d'un EP",
        hook: "Un album n'est pas un gros single. C'est une histoire en plusieurs temps : annonce, premier extrait, deuxième extrait, sortie. Chaque temps doit dire quelque chose de nouveau.",
        steps: [
          { when: "J-60 à J-40", what: "Le récit : l'idée de l'album, ce qu'il refuse, ce qui le distingue des artistes de votre zone." },
          { when: "J-40 à J-30", what: "Le concept : le fil qui relie les titres, le titre de l'album dit en une phrase, l'ordre des temps forts." },
          { when: "J-30 à J-1", what: "La séquence : un calendrier avec un temps par extrait, ce que chacun révèle, et les textes de chacun." },
          { when: "Jour J", what: "Nous suivons la sortie de l'album et ajustons en direct." },
          { when: "J+1 à J+30", what: "La suite : textes de prolongement, puis un bilan écrit. Un cycle plus long s'étale, et nous le disons au devis." },
        ],
        gets: [
          "La plateforme de l'artiste, la carte de la zone et les décisions, dans l'ordre",
          "Le concept de l'album et sa phrase",
          "Le calendrier de révélation : un temps fort par extrait, avec ce que chacun dévoile",
          "Les textes de chaque extrait, prêts à publier",
          "La présentation de l'album titre par titre, pour la presse",
          "La note d'intention et le texte de pochette",
          "Le dossier de presse (texte, citations, faits) et la bio en quatre formats",
          "Les textes de la sortie : annonce, newsletter, légendes, message de remerciement",
          "Le brief de direction artistique, et notre avis écrit sur les propositions reçues",
          "Le bilan écrit à J+30",
        ],
        not: "Nous ne réalisons pas la musique, les visuels ni les clips : nous en choisissons la direction avec vous, d'autres les exécutent. Nous ne gérons ni la distribution ni la promotion payante.",
        da: "Nous vous accompagnons dans le choix de la direction artistique de l'album : univers visuel, pochette, identité des extraits, cohérence d'un temps fort à l'autre. Nous écrivons le brief pour ceux qui réalisent, puis nous jugeons leurs propositions avec vous à l'aune du récit, pour que chaque temps marque.",
      },
      {
        id: "premiere",
        name: "Sortie d'un film, d'un livre ou d'une exposition",
        hook: "Une première est un rendez-vous : une salle, un vernissage, une date. Ce qu'on en dit avant décide qui s'y déplace et ce qu'il en racontera le lendemain.",
        steps: [
          { when: "J-60 à J-40", what: "Le récit : ce que l'œuvre affirme, ce qu'elle refuse, face à quoi on la rangera spontanément." },
          { when: "J-40 à J-30", what: "Le concept de la première : l'angle, la phrase, ce qui est montré avant et ce qui n'existe que le jour J." },
          { when: "J-30 à J-1", what: "La séquence : teasers, annonces, invitations, textes de presse, dans l'ordre où le public doit les découvrir." },
          { when: "Jour J", what: "Nous sommes présents à la première ou à distance, et ajustons ce qui doit l'être." },
          { when: "J+1 à J+30", what: "La suite : textes pour la sortie en salle ou en librairie, retours, puis un bilan écrit." },
        ],
        gets: [
          "La plateforme de l'œuvre et de son auteur",
          "La carte des œuvres voisines, leur présentation citée, et la place libre",
          "Le concept de la première et sa phrase",
          "La phrase d'accroche, le synopsis ou le texte de présentation, la note d'intention",
          "Le calendrier de révélation et les textes de chaque étape",
          "Les invitations et les mots de la soirée : accueil, présentation, remerciements",
          "Le communiqué, le dossier de presse (texte) et le mail aux programmateurs, festivals ou libraires (le texte)",
          "La bio de l'auteur en quatre formats",
          "Le brief de direction artistique, et notre avis écrit sur les propositions reçues",
          "Le bilan écrit à J+30",
        ],
        not: "Nous ne réalisons ni l'œuvre, ni l'affiche, ni la bande-annonce, et nous n'organisons pas l'événement : nous en guidons la direction artistique.",
        da: "Nous vous accompagnons dans le choix de la direction artistique de la première : affiche, atmosphère de la soirée, ce que la salle ou le vernissage donne à voir. Nous écrivons le brief artistique et jugeons avec vous les propositions à l'aune du récit, pour que la soirée reste dans les mémoires.",
      },
      {
        id: "lieu",
        name: "Ouverture d'un lieu",
        hook: "Un restaurant, un bar, un hôtel, une boutique : le premier mois décide de ce qu'on dira de vous pendant des années. L'adresse est connue, l'histoire du lieu, rarement.",
        steps: [
          { when: "J-60 à J-40", what: "Le récit : ce que ce lieu est, ce qu'il refuse, et ce que les adresses voisines revendiquent déjà." },
          { when: "J-40 à J-30", what: "Le concept d'ouverture : l'idée de la soirée, la phrase de la porte, ce qu'on dévoile avant l'ouverture." },
          { when: "J-30 à J-1", what: "La séquence : annonce, coulisses, liste d'invités, soft opening, avec les textes de chaque étape." },
          { when: "Jour J", what: "Nous sommes là le soir de l'ouverture et ajustons ce qui doit l'être." },
          { when: "J+1 à J+30", what: "La suite : les textes du premier mois, la manière de répondre aux premiers avis, puis un bilan écrit." },
        ],
        gets: [
          "La plateforme du lieu : raison d'être, ton de voix, trois refus",
          "La carte du quartier : ce que les adresses voisines disent d'elles-mêmes, et la place libre",
          "Le concept d'ouverture et sa phrase",
          "Le calendrier de révélation, jour par jour",
          "Les textes prêts à publier : annonce, invitations, légendes, newsletter, fiche Google et bio Instagram",
          "Les textes qu'on lit en entrant : carte, porte, mur, mot de bienvenue",
          "Le communiqué et le dossier de presse (texte)",
          "Un guide de ton pour l'équipe : comment accueillir, comment répondre à un avis",
          "Le brief de direction artistique, et notre avis écrit sur les propositions reçues",
          "Le bilan écrit à J+30",
        ],
        not: "Nous ne gérons pas l'organisation de la soirée, la décoration, le recrutement ni la publicité. Nous écrivons ce que le lieu dit.",
        da: "Nous vous accompagnons dans le choix de la direction artistique de l'ouverture : identité de la soirée, ambiance, signalétique, détails que l'on photographie. Nous écrivons le brief pour les prestataires et jugeons avec vous leurs propositions à l'aune du récit, pour que l'ouverture devienne un événement dont on parle.",
      },
      {
        id: "marque",
        name: "Lancement d'une marque",
        hook: "Une marque qui se lance annonce toujours la même chose que ses voisines : qualité, passion, savoir-faire. Le jour du lancement est la seule fois où on vous écoute encore sans parti pris.",
        steps: [
          { when: "J-60 à J-40", what: "Le récit : la plateforme de la marque, le diagnostic de ce qui existe déjà, la carte des concurrents et du terrain libre." },
          { when: "J-40 à J-30", what: "Le concept de lancement : l'idée qui porte l'annonce et la phrase qui la dit." },
          { when: "J-30 à J-1", what: "La séquence : ce qu'on révèle, dans quel ordre, avec chaque texte écrit à l'avance." },
          { when: "Jour J", what: "Nous suivons le lancement et ajustons ce qui doit l'être." },
          { when: "J+1 à J+30", what: "La suite : textes de prolongement, réponses aux premières objections, puis un bilan écrit." },
        ],
        gets: [
          "Le récit en six pièces : plateforme, diagnostic, carte, décisions, playbooks, langage",
          "Le concept de lancement et sa phrase",
          "Le calendrier de révélation, jour par jour",
          "La page de lancement, l'annonce, les emails et les mots du fondateur, prêts à publier",
          "Le dossier de presse (texte) et le communiqué",
          "Les playbooks : marketing, contenu, réseaux, vente, support, RH, tarifaire, cohérence",
          "Le lexique, les textes réécrits et le bloc à coller dans votre outil IA",
          "Le brief de direction artistique, et notre avis écrit sur les propositions reçues",
          "Le bilan écrit à J+30",
        ],
        not: "Nous ne dessinons ni le logo, ni le site, et nous ne gérons pas la publicité. Nous écrivons le brief, les textes, et guidons le choix de la direction.",
        da: "Nous vous accompagnons dans le choix de la direction artistique du lancement : univers visuel, ton des images, mise en scène de l'annonce. Nous écrivons le brief pour le designer ou le studio et jugeons avec vous leurs propositions à l'aune du récit, pour que le lancement marque.",
      },
      {
        id: "produit",
        name: "Lancement d'un produit",
        hook: "Un produit se compare avant d'être compris : sur une page, au rayon, dans un fil. La promesse doit tenir en une phrase que personne d'autre ne peut signer.",
        steps: [
          { when: "J-60 à J-40", what: "Le récit : la promesse du produit, la carte de ce que les concurrents affirment, l'angle qu'ils laissent libre." },
          { when: "J-40 à J-30", what: "Le concept de lancement : l'angle d'annonce et la phrase du produit." },
          { when: "J-30 à J-1", what: "La séquence : teaser, précommande ou liste d'attente, annonce, avec chaque texte prêt." },
          { when: "Jour J", what: "Nous suivons la sortie et ajustons les textes selon les premières réactions." },
          { when: "J+1 à J+30", what: "La suite : réponses aux objections réelles, textes de relance, bilan écrit." },
        ],
        gets: [
          "La promesse du produit en une phrase, et les trois refus qui l'accompagnent",
          "La carte des produits concurrents : leur argument cité, et ce qu'ils ne disent pas",
          "Le concept de lancement et le calendrier de révélation",
          "La page produit, l'annonce, les emails et les légendes, prêts à publier",
          "L'argumentaire de vente et les réponses aux objections, avec vos mots",
          "Le dossier de presse (texte) et le communiqué",
          "Le lexique et les textes réécrits, avec le bloc à coller dans votre outil IA",
          "Le brief de direction artistique, et notre avis écrit sur les propositions reçues",
          "Le bilan écrit à J+30",
        ],
        not: "Nous ne concevons ni le produit, ni l'emballage, et ne prenons pas les photos : nous guidons le choix de leur direction. Nous ne gérons pas la publicité.",
        da: "Nous vous accompagnons dans le choix de la direction artistique du lancement : image du produit, mise en scène, univers de la campagne. Nous écrivons le brief pour le photographe ou le designer et jugeons avec vous leurs propositions à l'aune du récit, pour que le lancement se remarque.",
      },
      {
        id: "levee",
        name: "Levée de fonds",
        hook: "Un investisseur lit un récit avant de lire un chiffre. Si votre histoire n'est pas claire en une minute, personne ne regarde le reste.",
        steps: [
          { when: "J-60 à J-40", what: "Le récit : la thèse en une phrase, pourquoi vous, pourquoi maintenant, ce que les concurrents laissent ouvert." },
          { when: "J-40 à J-30", what: "Le concept de la levée : l'histoire que le tour raconte et l'ordre dans lequel vous la dévoilez." },
          { when: "J-30 à J-1", what: "La séquence : le texte du pitch, les emails d'introduction et de relance, les réponses aux objections." },
          { when: "Jour J", what: "Le jour de l'annonce du tour ou du rendez-vous clé, nous suivons et ajustons." },
          { when: "J+1 à J+30", what: "La suite : l'annonce de la levée, les textes pour vos clients et votre équipe, puis un bilan écrit." },
        ],
        gets: [
          "La thèse d'investissement en une phrase, et le récit fondateur",
          "La carte des acteurs du marché et la place que vous seul tenez",
          "Le texte de chaque slide du deck (le texte, pas la mise en page)",
          "Le script du pitch en trois minutes",
          "Les emails d'introduction et de relance, et la FAQ investisseur : objections et réponses",
          "Le communiqué d'annonce, le post, le mail aux clients et à l'équipe",
          "Le lexique et le bloc à coller dans votre outil IA",
          "Le brief de direction artistique, et notre avis écrit sur les propositions reçues",
          "Le bilan écrit à J+30",
        ],
        not: "Nous ne construisons pas le modèle financier, ne présentons pas d'investisseurs et ne garantissons aucune levée.",
        da: "Nous vous accompagnons dans le choix de la direction artistique du deck et de la présentation : parti pris visuel, rythme, ce qui reste en mémoire après le rendez-vous. Nous écrivons le brief pour le designer et jugeons avec vous sa proposition à l'aune du récit.",
      },
      {
        id: "repositionnement",
        name: "Repositionnement",
        hook: "Changer ce qu'on dit de soi est plus difficile que dire quelque chose la première fois : l'ancienne image est déjà dans la tête de tout le monde.",
        steps: [
          { when: "J-60 à J-40", what: "Le récit : ce que vous dites aujourd'hui, ce qu'on en retient, et ce qui doit changer." },
          { when: "J-40 à J-30", what: "Le concept du changement : ce qui change, ce qui reste, et la phrase qui l'annonce." },
          { when: "J-30 à J-1", what: "La séquence de transition : à qui l'annoncer d'abord (équipe, clients, public) et avec quels mots." },
          { when: "Jour J", what: "Nous suivons l'annonce et ajustons ce qui doit l'être." },
          { when: "J+1 à J+30", what: "La suite : réécriture des textes clés, réponses aux réactions, puis un bilan écrit." },
        ],
        gets: [
          "Le diagnostic : vos supports lus un par un, les écarts relevés",
          "La carte du champ et la nouvelle position, avec ses refus",
          "Le plan de transition : ce qui change, ce qui reste, dans quel ordre",
          "Le texte d'annonce pour l'équipe, les clients et le public",
          "La réécriture des textes clés : site, bio, signature, présentation",
          "Le lexique : mots à retirer, mots à prendre, et le bloc à coller dans votre outil IA",
          "Le brief de direction artistique, et notre avis écrit sur les propositions reçues",
          "Le bilan écrit à J+30",
        ],
        not: "Nous ne redessinons ni l'identité visuelle ni le site. Nous écrivons le brief, les textes, et guidons le choix de la direction.",
        da: "Nous vous accompagnons dans le choix de la direction artistique du changement : ce que la nouvelle position doit montrer, ce qui disparaît, ce qui reste. Nous écrivons le brief pour le designer ou le studio et jugeons avec vous leurs propositions à l'aune du récit, pour que le changement soit visible et marquant.",
      },
    ],
  },
  en: {
    kicker: "The moments",
    h1a: "Every moment has its own shape.",
    h1b: "Here is what we do for each.",
    lead: "A single is not launched like a restaurant opening, nor a fundraise like a film. The method is the same; what we write, and in what order, changes. For each kind of moment: what we do, and what you receive.",
    honest:
      "These pages describe what we deliver. They are not client case studies: we only show what is true, and our first moments are still to come.",
    jump: "Jump to a moment",
    doTitle: "What we do",
    daTitle: "Art direction guidance",
    getTitle: "What you receive",
    notTitle: "What we do not do",
    cta: "Tell us about this moment",
    order: "Order the story · €2,900",
    closeTitle: "Is your moment not on the list?",
    closeBody:
      "An exhibition, a book, a season, a change of leadership. If there is a date and that day has to count, we can write it. Tell us the date, and we will tell you honestly what can hold.",
    priceStory: "The story alone · €2,900",
    priceMoment: "The full moment · from €6,000, by quote",
    moments: [
      {
        id: "single",
        name: "A single release",
        hook: "A single is three minutes and one first impression. Without a story, it comes out like every other Friday release.",
        steps: [
          { when: "D-60 to D-40", what: "The story: what this track says about you, what it refuses, and the word nobody in your lane holds." },
          { when: "D-40 to D-30", what: "The concept: the idea carrying the release, the sentence that says it, what is shown before and what is kept for day D." },
          { when: "D-30 to D-1", what: "The sequence: what comes out, when and on which channel, every text written in advance." },
          { when: "Day D", what: "We follow the release and adjust the texts live." },
          { when: "D+1 to D+30", what: "What follows: the texts that extend the release, then a written review of what carried." },
        ],
        gets: [
          "The artist platform: positioning, tone of voice, three written refusals",
          "The map of neighbouring artists, their bios quoted as they stand, and the ground they leave open",
          "The release concept and its sentence",
          "The reveal calendar, day by day",
          "Every text ready to publish: teaser, announcement, captions, newsletter, pre-save message",
          "The bio in four formats: press, platforms, file, short version",
          "The press release and the email to blogs, media and programmers (the text, not the sending)",
          "The sleeve text or statement of intent",
          "The art direction brief, and our written opinion on the proposals received",
          "The written review at D+30",
        ],
        not: "We do not send the emails, manage playlists, advertising or distribution. You publish with our texts.",
        da: "We guide you in choosing the release's art direction: sleeve, visual world, references, colours, what the video and visuals must say. We write the art brief for the designer or director, then weigh their proposals with you against the story, so the release becomes a landmark event.",
      },
      {
        id: "album",
        name: "An album or EP release",
        hook: "An album is not a big single. It is a story in several beats: announcement, first extract, second extract, release. Each beat must say something new.",
        steps: [
          { when: "D-60 to D-40", what: "The story: the idea of the album, what it refuses, what sets it apart from the artists in your lane." },
          { when: "D-40 to D-30", what: "The concept: the thread linking the tracks, the album's title said in one sentence, the order of the key beats." },
          { when: "D-30 to D-1", what: "The sequence: a calendar with one beat per extract, what each reveals, and the texts for each." },
          { when: "Day D", what: "We follow the album's release and adjust live." },
          { when: "D+1 to D+30", what: "What follows: extension texts, then a written review. A longer cycle is spread out, and we say so in the quote." },
        ],
        gets: [
          "The artist platform, the map of the lane and the decisions, in order",
          "The album concept and its sentence",
          "The reveal calendar: one key beat per extract, with what each unveils",
          "The texts for each extract, ready to publish",
          "The track-by-track presentation of the album, for the press",
          "The statement of intent and the sleeve text",
          "The press kit (text, quotes, facts) and the bio in four formats",
          "The release texts: announcement, newsletter, captions, thank-you message",
          "The art direction brief, and our written opinion on the proposals received",
          "The written review at D+30",
        ],
        not: "We do not make the music, visuals or videos: we choose their direction with you, others execute. We do not handle distribution or paid promotion.",
        da: "We guide you in choosing the album's art direction: visual world, sleeve, identity of each extract, coherence from one beat to the next. We write the brief for those who execute, then judge their proposals with you against the story, so every beat lands.",
      },
      {
        id: "premiere",
        name: "A film, book or exhibition release",
        hook: "A premiere is an appointment: a room, an opening night, a date. What is said before decides who turns up and what they tell others the next day.",
        steps: [
          { when: "D-60 to D-40", what: "The story: what the work asserts, what it refuses, what people will spontaneously file it next to." },
          { when: "D-40 to D-30", what: "The premiere concept: the angle, the sentence, what is shown before and what exists only on day D." },
          { when: "D-30 to D-1", what: "The sequence: teasers, announcements, invitations, press texts, in the order the public should discover them." },
          { when: "Day D", what: "We are at the premiere or on call, and adjust what needs adjusting." },
          { when: "D+1 to D+30", what: "What follows: texts for the wider release, reactions, then a written review." },
        ],
        gets: [
          "The platform of the work and of its author",
          "The map of neighbouring works, their presentation quoted, and the open ground",
          "The premiere concept and its sentence",
          "The tagline, the synopsis or presentation text, the statement of intent",
          "The reveal calendar and the texts for each step",
          "The invitations and the words of the evening: welcome, introduction, thanks",
          "The press release, the press kit (text) and the email to programmers, festivals or booksellers (the text)",
          "The author's bio in four formats",
          "The art direction brief, and our written opinion on the proposals received",
          "The written review at D+30",
        ],
        not: "We do not make the work, poster or trailer, and we do not organise the event: we guide their art direction.",
        da: "We guide you in choosing the premiere's art direction: poster, atmosphere of the evening, what the room or opening night gives to see. We write the art brief and judge proposals with you against the story, so the evening stays in memory.",
      },
      {
        id: "lieu",
        name: "A venue opening",
        hook: "A restaurant, a bar, a hotel, a shop: the first month decides what is said about you for years. The address is known, the story of the place rarely is.",
        steps: [
          { when: "D-60 to D-40", what: "The story: what this venue is, what it refuses, and what the neighbouring venues already claim." },
          { when: "D-40 to D-30", what: "The opening concept: the idea of the evening, the sentence on the door, what is revealed before opening." },
          { when: "D-30 to D-1", what: "The sequence: announcement, behind the scenes, guest list, soft opening, with the texts for each step." },
          { when: "Day D", what: "We are there on opening night and adjust what needs adjusting." },
          { when: "D+1 to D+30", what: "What follows: the texts of the first month, how to answer the first reviews, then a written review." },
        ],
        gets: [
          "The venue's platform: purpose, tone of voice, three refusals",
          "The map of the neighbourhood: what neighbouring venues say about themselves, and the open ground",
          "The opening concept and its sentence",
          "The reveal calendar, day by day",
          "Texts ready to publish: announcement, invitations, captions, newsletter, Google listing and Instagram bio",
          "The texts people read on entering: menu, door, wall, welcome note",
          "The press release and the press kit (text)",
          "A tone guide for the team: how to welcome, how to answer a review",
          "The art direction brief, and our written opinion on the proposals received",
          "The written review at D+30",
        ],
        not: "We do not organise the evening, the decoration, the hiring or the advertising. We write what the venue says.",
        da: "We guide you in choosing the opening's art direction: identity of the evening, atmosphere, signage, the details people photograph. We write the brief for suppliers and judge their proposals with you against the story, so the opening becomes an event people talk about.",
      },
      {
        id: "marque",
        name: "A brand launch",
        hook: "A brand that launches always announces the same thing as its neighbours: quality, passion, craft. Launch day is the only time people still listen without bias.",
        steps: [
          { when: "D-60 to D-40", what: "The story: the brand's platform, the diagnosis of what already exists, the map of competitors and open ground." },
          { when: "D-40 to D-30", what: "The launch concept: the idea carrying the announcement and the sentence that says it." },
          { when: "D-30 to D-1", what: "The sequence: what is revealed, in what order, with every text written in advance." },
          { when: "Day D", what: "We follow the launch and adjust what needs adjusting." },
          { when: "D+1 to D+30", what: "What follows: extension texts, answers to the first objections, then a written review." },
        ],
        gets: [
          "The story in six pieces: platform, diagnosis, map, decisions, playbooks, language",
          "The launch concept and its sentence",
          "The reveal calendar, day by day",
          "The launch page, the announcement, the emails and the founder's words, ready to publish",
          "The press kit (text) and the press release",
          "The playbooks: marketing, content, social, sales, support, HR, pricing, coherence",
          "The lexicon, the rewritten texts and the block to paste into your AI tool",
          "The art direction brief, and our written opinion on the proposals received",
          "The written review at D+30",
        ],
        not: "We do not draw the logo or the site, and we do not run advertising. We write the brief, the texts, and guide the choice of direction.",
        da: "We guide you in choosing the launch's art direction: visual world, tone of the images, staging of the announcement. We write the brief for the designer or studio and judge their proposals with you against the story, so the launch makes a mark.",
      },
      {
        id: "produit",
        name: "A product launch",
        hook: "A product is compared before it is understood: on a page, on a shelf, in a feed. The promise must fit in one sentence nobody else can sign.",
        steps: [
          { when: "D-60 to D-40", what: "The story: the product's promise, the map of what competitors claim, the angle they leave open." },
          { when: "D-40 to D-30", what: "The launch concept: the announcement angle and the product's sentence." },
          { when: "D-30 to D-1", what: "The sequence: teaser, pre-order or waiting list, announcement, with every text ready." },
          { when: "Day D", what: "We follow the release and adjust the texts to the first reactions." },
          { when: "D+1 to D+30", what: "What follows: answers to real objections, follow-up texts, a written review." },
        ],
        gets: [
          "The product's promise in one sentence, and the three refusals that go with it",
          "The map of competing products: their argument quoted, and what they leave unsaid",
          "The launch concept and the reveal calendar",
          "The product page, the announcement, the emails and the captions, ready to publish",
          "The sales pitch and the answers to objections, in your own words",
          "The press kit (text) and the press release",
          "The lexicon and the rewritten texts, with the block to paste into your AI tool",
          "The art direction brief, and our written opinion on the proposals received",
          "The written review at D+30",
        ],
        not: "We do not design the product or packaging, nor take the photos: we guide the choice of their direction. We do not run advertising.",
        da: "We guide you in choosing the launch's art direction: the product's image, staging, the campaign's world. We write the brief for the photographer or designer and judge their proposals with you against the story, so the launch stands out.",
      },
      {
        id: "levee",
        name: "A fundraise",
        hook: "An investor reads a story before reading a number. If yours is not clear in one minute, nobody looks at the rest.",
        steps: [
          { when: "D-60 to D-40", what: "The story: the thesis in one sentence, why you, why now, what competitors leave open." },
          { when: "D-40 to D-30", what: "The fundraise concept: the story the round tells and the order in which you reveal it." },
          { when: "D-30 to D-1", what: "The sequence: the pitch text, the introduction and follow-up emails, the answers to objections." },
          { when: "Day D", what: "On the day of the announcement or the key meeting, we follow and adjust." },
          { when: "D+1 to D+30", what: "What follows: the funding announcement, the texts for your customers and team, then a written review." },
        ],
        gets: [
          "The investment thesis in one sentence, and the founding story",
          "The map of market players and the ground only you hold",
          "The text of each slide of the deck (the text, not the layout)",
          "The three-minute pitch script",
          "The introduction and follow-up emails, and the investor FAQ: objections and answers",
          "The announcement release, the post, the email to customers and the team",
          "The lexicon and the block to paste into your AI tool",
          "The art direction brief, and our written opinion on the proposals received",
          "The written review at D+30",
        ],
        not: "We do not build the financial model, introduce investors, or guarantee any raise.",
        da: "We guide you in choosing the art direction of the deck and presentation: visual stance, rhythm, what stays in memory after the meeting. We write the brief for the designer and judge their proposal with you against the story.",
      },
      {
        id: "repositionnement",
        name: "A repositioning",
        hook: "Changing what is said about you is harder than saying something the first time: the old image is already in everyone's head.",
        steps: [
          { when: "D-60 to D-40", what: "The story: what you say today, what people keep of it, and what must change." },
          { when: "D-40 to D-30", what: "The change concept: what changes, what stays, and the sentence that announces it." },
          { when: "D-30 to D-1", what: "The transition sequence: who hears first (team, customers, public) and in which words." },
          { when: "Day D", what: "We follow the announcement and adjust what needs adjusting." },
          { when: "D+1 to D+30", what: "What follows: rewriting the key texts, answering reactions, then a written review." },
        ],
        gets: [
          "The diagnosis: your materials read one by one, the gaps recorded",
          "The map of the field and the new position, with its refusals",
          "The transition plan: what changes, what stays, in which order",
          "The announcement text for the team, customers and the public",
          "The rewrite of the key texts: site, bio, signature, presentation",
          "The lexicon: words to retire, words to take, and the block to paste into your AI tool",
          "The art direction brief, and our written opinion on the proposals received",
          "The written review at D+30",
        ],
        not: "We do not redraw the visual identity or the site. We write the brief, the texts, and guide the choice of direction.",
        da: "We guide you in choosing the art direction of the change: what the new position must show, what disappears, what stays. We write the brief for the designer or studio and judge their proposals with you against the story, so the change is visible and memorable.",
      },
    ],
  },
}

export default async function MomentsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"
  const t = pick(T, lang)

  return (
    <main className="min-h-screen bg-ink text-white">
      <NavBar />

      <section className="section-hero pb-10 pt-36">
        <div className="shell">
          <div className="kicker mb-6">{t.kicker}</div>
          <h1 className="mb-7 max-w-[900px] font-serif text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.08] tracking-[-0.005em]">
            {t.h1a}
            <br />
            <span className="text-gradient">{t.h1b}</span>
          </h1>
          <p className="lede max-w-[680px]">{t.lead}</p>
          <p className="mt-5 max-w-[680px] font-sans text-[13.5px] leading-relaxed text-chalk-55">{t.honest}</p>

          <div className="mt-10">
            <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-chalk-40">{t.jump}</div>
            <div className="flex flex-wrap gap-2">
              {t.moments.map((m) => (
                <a
                  key={m.id}
                  href={`#${m.id}`}
                  className="rounded-full border border-hair px-4 py-2 font-sans text-[13px] text-chalk-65 no-underline transition-colors hover:border-brand/50 hover:text-white"
                >
                  {m.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {t.moments.map((m, i) => (
        <section key={m.id} id={m.id} className="section scroll-mt-24 border-t border-hair">
          <div className="shell">
            <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-brand">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="mb-12 grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,480px)] md:gap-12">
              <div>
                <h2 className="mb-5 max-w-[820px] font-serif text-[clamp(1.7rem,3.6vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.005em]">
                  {m.name}
                </h2>
                <p className="max-w-[680px] font-sans text-[16px] leading-[1.7] text-chalk-65">{m.hook}</p>
              </div>
              <div className="mx-auto aspect-[30/23] w-full max-w-[480px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_-30px_rgba(34,86,255,0.35)] md:order-last">
                <MomentArt id={m.id} />
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
              <div>
                <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-chalk-40">{t.doTitle}</div>
                <ol className="m-0 list-none p-0">
                  {m.steps.map((s) => (
                    <li
                      key={s.when}
                      className="grid grid-cols-[6.5rem_1fr] gap-4 border-t border-white/10 py-4 last:border-b sm:grid-cols-[8rem_1fr]"
                    >
                      <span className="pt-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-brand">{s.when}</span>
                      <p className="m-0 font-sans text-[15px] leading-[1.6] text-white/70">{s.what}</p>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 rounded-xl border border-brand/30 bg-brand/[0.06] p-5">
                  <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-brand">{t.daTitle}</div>
                  <p className="m-0 font-sans text-[14.5px] leading-[1.65] text-white/80">{m.da}</p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand/30 bg-ink-soft p-7 sm:p-8">
                <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-brand">{t.getTitle}</div>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {m.gets.map((g) => (
                    <li key={g} className="relative pl-5 font-sans text-[14.5px] leading-[1.55] text-white/80">
                      <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-3 bg-brand" />
                      {g}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-chalk-40">{t.notTitle}</div>
                  <p className="m-0 font-sans text-[13.5px] leading-[1.6] text-chalk-55">{m.not}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/#contact" className="btn-primary">
                {t.cta} →
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="section border-t border-hair">
        <div className="shell">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="mb-5 font-serif text-[clamp(1.6rem,3.4vw,2.4rem)] font-bold leading-[1.15]">{t.closeTitle}</h2>
            <p className="lede mx-auto mb-8 max-w-[600px]">{t.closeBody}</p>
            <div className="mb-8 flex flex-col items-center gap-1 font-mono text-[11px] uppercase tracking-[0.16em] text-chalk-55">
              <span>{t.priceStory}</span>
              <span>{t.priceMoment}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/#contact" className="btn-primary">
                {t.cta} →
              </Link>
              <a href={STRIPE_LINKS.architecture} target="_blank" rel="noopener" className="btn-quiet no-underline">
                {t.order}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
