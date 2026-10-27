export function SuccessCheck() {
  return (
    <svg
      viewBox="0 0 52 52"
      width="44"
      height="44"
      aria-hidden
      className="mb-3 inline-block"
    >
      <circle
        cx="26"
        cy="26"
        r="23"
        fill="none"
        stroke="#3961e6"
        strokeWidth="1.5"
        pathLength={1}
        strokeDasharray={1}
        style={{ animation: "sp-check-circle 550ms cubic-bezier(.22,.68,0,1) forwards" }}
      />
      <path
        d="M15 27l7 7 15-16"
        fill="none"
        stroke="#3961e6"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        strokeDasharray={1}
        style={{ animation: "sp-check-mark 350ms cubic-bezier(.22,.68,0,1) 500ms both" }}
      />
    </svg>
  )
}
