import { AnimatedOrb } from "./animated-orb"
import { GlassCard } from "./glass-card"
import { pick } from "@/lib/t"
import type { Lang } from "@/lib/lang"

const BELIEF_COLORS = ["#2256ff", "#2e4eff", "#1044e0"]

const T = {
  en: {
    kicker: "THE STUDIO",
    h2a: "What this studio is.",
    h2b: "And what it is not.",
    p1: "Strawberry Production is a narrative studio for decisive moments, operating from Paris. One founder. Two phases: the story, then its staging. The work is editorial in shape and disciplined by inheritance.",
    p2a: "We write the ",
    p2strong: "story, the sequence and the words",
    p2b: " that make a launch, an opening, a release or a fundraise impossible to confuse — and impossible to forget.",
    quote: "In a market where everyone has access to the same machine, the loudest announcement no longer wins. The clearest story does.",
    beliefs: [
      { t: "Not a communications agency. A studio of moments.", d: "We do not run your channels or buy media. We decide what your moment says, in what order it is revealed, and we write every word of it. Distribution stays with you, with our texts in hand." },
      { t: "The story before the staging.", d: "A sequence without a story is a calendar. We write the story first — what you are, what you refuse, what this moment stands for — and only then do we decide how the audience discovers it." },
      { t: "Refusal is part of the work.", d: "When a moment cannot hold by its date, or would be better served elsewhere, we say so rather than take the work. A story that concludes “change nothing” is a successful story, and it happens." },
    ],
  },
  fr: {
    kicker: "LE STUDIO",
    h2a: "Ce qu'est ce studio.",
    h2b: "Et ce qu'il n'est pas.",
    p1: "Strawberry Production est un studio de narration des moments décisifs, basé à Paris. Un fondateur. Deux phases : le récit, puis sa mise en scène. Un travail éditorial dans sa forme, discipliné par l'héritage.",
    p2a: "Nous écrivons le ",
    p2strong: "récit, la séquence et les mots",
    p2b: " qui rendent un lancement, une ouverture, une sortie ou une levée de fonds impossibles à confondre — et impossibles à oublier.",
    quote: "Dans un marché où tout le monde a accès à la même machine, l'annonce la plus bruyante ne gagne plus. Le récit le plus clair, si.",
    beliefs: [
      { t: "Pas une agence de communication. Un studio de moments.", d: "Nous ne tenons pas vos réseaux et n'achetons pas de médias. Nous décidons ce que votre moment dit, dans quel ordre il se révèle, et nous en écrivons chaque mot. La diffusion reste chez vous, avec nos textes en main." },
      { t: "Le récit avant la mise en scène.", d: "Une séquence sans récit n'est qu'un calendrier. Nous écrivons d'abord le récit — ce que vous êtes, ce que vous refusez, ce que ce moment affirme — et seulement ensuite nous décidons comment le public le découvre." },
      { t: "Le refus fait partie du travail.", d: "Quand un moment ne peut pas tenir à sa date, ou serait mieux servi ailleurs, nous le disons plutôt que de prendre le travail. Un récit qui conclut « ne changez rien » est un récit réussi, et cela arrive." },
    ],
  },
}

export function AboutSection({ lang }: { lang: Lang }) {
  const t = pick(T, lang)
  const BELIEFS = t.beliefs.map((b, i) => ({ ...b, n: `0${i + 1}`, color: BELIEF_COLORS[i] }))

  return (
    <section id="about" className="relative overflow-hidden bg-ink px-gutter py-20">
      <AnimatedOrb color="radial-gradient(circle,#2256ff,transparent)" size={600} x="70%" y="10%" opacity={0.12} />

      <div
        className={[
          "shell relative transition-all duration-[900ms] ease-[cubic-bezier(.22,.68,0,1.2)]",
        ].join(" ")}
      >
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-5 font-sans text-[11px] font-semibold tracking-[0.14em] text-brand">
              {t.kicker}
            </div>

            <h2 className="mb-7 font-serif text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.12] tracking-[-0.005em] text-white uppercase">
              {t.h2a}
              <br />
              {t.h2b}
            </h2>

            <p className="mb-5 font-sans text-[17px] leading-[1.8] text-white/55">{t.p1}</p>

            <p className="font-sans text-[17px] leading-[1.8] text-white/55">
              {t.p2a}
              <strong className="text-chalk-90">{t.p2strong}</strong>
              {t.p2b}
            </p>

            <blockquote className="mt-10 border-l-[3px] border-brand py-2 pl-6">
              <p className="m-0 font-serif text-[clamp(1.05rem,1.6vw,1.35rem)] leading-snug text-white/70">
                {t.quote}
              </p>
            </blockquote>
          </div>

          <div className="flex flex-col gap-5">
            {BELIEFS.map((b) => (
              <GlassCard key={b.n} className="flex items-start gap-6 px-8 py-7">
                <span className="shrink-0 font-serif text-2xl font-bold" style={{ color: b.color }} aria-hidden>
                  {b.n}
                </span>
                <div>
                  <h3 className="mb-2 font-serif text-[1.2rem] font-semibold tracking-[-0.01em] text-white uppercase">
                    {b.t}
                  </h3>
                  <p className="m-0 font-sans text-[14.5px] leading-relaxed text-chalk-65">{b.d}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
