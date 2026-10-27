export const PLAYBOOK_KEYS = [
  "marketing",
  "contenu",
  "reseaux",
  "vente",
  "support",
  "rh",
  "tarifaire",
  "coherence",
] as const

export type PlaybookKey = (typeof PLAYBOOK_KEYS)[number]

const L = { className: "pb-l" }
const A = { className: "pb-a" }

const DRAW: Record<PlaybookKey, React.ReactNode> = {
  marketing: (
    <>
      <circle cx="20" cy="22" r="13" {...L} />
      <circle cx="20" cy="22" r="7.5" {...L} />
      <circle cx="20" cy="22" r="2.4" {...A} />
      <path d="M20 22 L35 7" {...L} />
      <path d="M30 6.5 L35.5 6.5 L35.5 12" {...L} />
      <path d="M4 37 L13 30" {...L} strokeDasharray="1.5 3" />
    </>
  ),
  contenu: (
    <>
      <path d="M20 4 L29 17 L23.5 33 L16.5 33 L11 17 Z" {...L} />
      <path d="M20 4 L20 20" {...L} />
      <circle cx="20" cy="22" r="2.4" {...A} />
      <path d="M15 33 L25 33 L25 37 L15 37 Z" {...L} />
      <path d="M4 37 C 9 33, 6 29, 11 27" {...L} strokeDasharray="1.5 3" />
    </>
  ),
  reseaux: (
    <>
      <path d="M4 8 H24 V22 H12 L7 27 V22 H4 Z" {...L} />
      <path d="M17 26 V30 H29 L34 35 V30 H36 V16 H28" {...L} />
      <circle cx="10" cy="15" r="1.6" {...A} />
      <circle cx="14.5" cy="15" r="1.6" {...A} />
      <circle cx="19" cy="15" r="1.6" {...A} />
    </>
  ),
  vente: (
    <>
      <path d="M20 4 L34 9 V20 C34 29 27.5 34.5 20 37 C12.5 34.5 6 29 6 20 V9 Z" {...L} />
      <path d="M13.5 20.5 L18.5 25.5 L27.5 15.5" {...A} />
    </>
  ),
  support: (
    <>
      <circle cx="20" cy="20" r="15" {...L} />
      <circle cx="20" cy="20" r="6.5" {...L} />
      <path d="M9.4 9.4 L15.4 15.4 M30.6 9.4 L24.6 15.4 M9.4 30.6 L15.4 24.6 M30.6 30.6 L24.6 24.6" {...A} />
    </>
  ),
  rh: (
    <>
      <circle cx="16" cy="13" r="5.5" {...L} />
      <path d="M5 34 C5 26 10 22 16 22 C22 22 27 26 27 34" {...L} />
      <path d="M32 16 V26 M27 21 H37" {...A} />
    </>
  ),
  tarifaire: (
    <>
      <path d="M21 4 H35 V18 L19 34 C17.8 35.2 16.2 35.2 15 34 L5 24 C3.8 22.8 3.8 21.2 5 20 Z" {...L} />
      <circle cx="28.5" cy="10.5" r="2.4" {...A} />
      <path d="M12 23 L19 16 M15.5 26.5 L22.5 19.5" {...L} />
    </>
  ),
  coherence: (
    <>
      <path d="M20 5 V35 M12 35 H28" {...L} />
      <path d="M6 11 H34" {...L} />
      <path d="M6 11 L2.5 21 H9.5 Z M34 11 L30.5 21 H37.5 Z" {...L} />
      <circle cx="20" cy="5.5" r="2.2" {...A} />
    </>
  ),
}

export function PlaybookIcon({ k }: { k: PlaybookKey }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden className="pb-icon">
      {DRAW[k]}
    </svg>
  )
}
