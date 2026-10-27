const BRANDS = [
  "Sézane", "Qonto", "Typology", "Diptyque", "Alan", "Le Slip Français", "Veja", "Respire", "Doctolib", "Back Market",
  "Payfit", "Swile", "Ankorstore", "Withings", "Nature & Découvertes", "Maison Standards", "Asphalte", "Cabaïa",
  "Jimmy Fairly", "Horace", "Yuka", "Nickel", "Blissim", "La Fourche", "Bergamotte", "Michel et Augustin",
  "Merci Handy", "Aigle", "BonneGueule", "Feed",
]

export function ReadMarquee() {
  const brands = BRANDS
  const strip = [...brands, ...brands]

  return (
    <div className="border-y border-hair bg-ink-soft py-6">
      <div className="relative overflow-hidden" aria-hidden>
        <div className="flex w-max gap-12 [animation:sp-marquee_45s_linear_infinite] motion-reduce:[animation:none]">
          {strip.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="whitespace-nowrap font-sans text-[15px] font-semibold tracking-[0.06em] text-white/25"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
