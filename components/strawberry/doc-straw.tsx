import type { StrawStep } from "@/lib/doc-six"

export function DocStraw({
  kicker,
  title,
  note,
  steps,
}: {
  kicker: string
  title: string
  note: string
  steps: StrawStep[]
}) {
  return (
    <div className="mx-auto max-w-[820px]">
      <div className="kicker mb-4">{kicker}</div>
      <h2 className="mb-5 font-serif text-[clamp(1.35rem,2.6vw,1.95rem)] font-bold tracking-[-0.005em] uppercase">{title}</h2>
      <ol className="m-0 grid list-none grid-cols-1 gap-px bg-white/[0.08] p-0 sm:grid-cols-5">
        {steps.map((s) => (
          <li key={s.letter} className="bg-ink p-5">
            <div className="font-serif text-[2.4rem] font-bold leading-none text-brand">{s.letter}</div>
            <div className="mt-3 font-sans text-[11px] uppercase tracking-[0.2em] text-white">{s.name}</div>
            <div className="mt-1.5 font-sans text-[13px] leading-snug text-chalk-55">{s.verb}</div>
            <div className="mt-3 font-sans text-[11px] uppercase tracking-[0.16em] text-chalk-40">{s.pieces}</div>
          </li>
        ))}
      </ol>
      <p className="mt-5 font-sans text-[14px] leading-relaxed text-chalk-55">{note}</p>
    </div>
  )
}
