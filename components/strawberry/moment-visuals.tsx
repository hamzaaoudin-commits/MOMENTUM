import type { ReactNode } from "react"

const R = "#2256ff"
const W = (a: number) => `rgba(255,255,255,${a})`

function Frame({ children, id, tint = R }: { children: ReactNode; id: string; tint?: string }) {
  return (
    <svg viewBox="0 0 600 460" role="img" aria-hidden className="h-full w-full">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0b0f19" />
          <stop offset="0.55" stopColor="#07080a" />
          <stop offset="1" stopColor="#030303" />
        </linearGradient>
        <radialGradient id={`${id}-aura`} cx="50%" cy="46%" r="60%">
          <stop offset="0" stopColor={tint} stopOpacity="0.34" />
          <stop offset="1" stopColor={tint} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-vig`} cx="50%" cy="50%" r="75%">
          <stop offset="0.55" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.8" />
        </radialGradient>
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="7" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id={`${id}-soft`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
        <filter id={`${id}-grain`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  1 0 0 0 0" />
        </filter>
        <style>{`
          .ma-spin{transform-box:fill-box;transform-origin:center;animation:ma-spin 22s linear infinite}
          .ma-bar{transform-box:fill-box;transform-origin:center;animation:ma-bar 1.6s ease-in-out infinite}
          .ma-flick{animation:ma-flick 4.5s ease-in-out infinite}
          .ma-pulse{transform-box:fill-box;transform-origin:center;animation:ma-pulse 2.4s ease-out infinite}
          .ma-float{animation:ma-float 7s ease-in-out infinite}
          @keyframes ma-spin{to{transform:rotate(360deg)}}
          @keyframes ma-bar{0%,100%{transform:scaleY(.45)}50%{transform:scaleY(1)}}
          @keyframes ma-flick{0%,100%{opacity:1}46%{opacity:1}48%{opacity:.55}50%{opacity:1}73%{opacity:.8}}
          @keyframes ma-pulse{0%{transform:scale(1);opacity:.7}100%{transform:scale(2.6);opacity:0}}
          @keyframes ma-float{0%,100%{transform:translateY(0);opacity:.2}50%{transform:translateY(-14px);opacity:.6}}
          @media (prefers-reduced-motion:reduce){.ma-spin,.ma-bar,.ma-flick,.ma-pulse,.ma-float{animation:none}}
        `}</style>
      </defs>
      <rect width="600" height="460" fill={`url(#${id}-bg)`} />
      <rect width="600" height="460" fill={`url(#${id}-aura)`} />
      {children}
      <rect width="600" height="460" fill="#fff" opacity="0.1" filter={`url(#${id}-grain)`} />
      <rect width="600" height="460" fill={`url(#${id}-vig)`} />
    </svg>
  )
}

function Waveform({ id, x, y, n, step, hMax }: { id: string; x: number; y: number; n: number; step: number; hMax: number }) {
  return (
    <g>
      {Array.from({ length: n }, (_, i) => {
        const h = 8 + Math.abs(Math.sin(i * 0.55) * Math.cos(i * 0.21)) * hMax
        return (
          <rect
            key={i}
            className="ma-bar"
            style={{ animationDelay: `${(i % 9) * 0.13}s` }}
            x={x + i * step}
            y={y - h / 2}
            width={step * 0.55}
            height={h}
            rx={step * 0.27}
            fill={i % 6 === 2 ? R : W(0.55)}
          />
        )
      })}
    </g>
  )
}

function Sun({ cx, cy, r, id }: { cx: number; cy: number; r: number; id: string }) {
  return (
    <g>
      <defs>
        <linearGradient id={`${id}-sun`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4558ff" />
          <stop offset="1" stopColor={R} />
        </linearGradient>
        <clipPath id={`${id}-sunclip`}><circle cx={cx} cy={cy} r={r} /></clipPath>
      </defs>
      <circle cx={cx} cy={cy} r={r * 1.5} fill={R} opacity="0.25" filter={`url(#${id}-soft)`} />
      <g clipPath={`url(#${id}-sunclip)`}>
        <rect x={cx - r} y={cy - r} width={r * 2} height={r * 2} fill={`url(#${id}-sun)`} />
        {[0.15, 0.3, 0.45, 0.6, 0.75].map((k, i) => (
          <rect key={i} x={cx - r} y={cy + r * (k * 1.3 - 0.35)} width={r * 2} height={2 + i * 2.2} fill="#07080a" />
        ))}
      </g>
    </g>
  )
}

export function MomentArt({ id }: { id: string }) {
  switch (id) {
    case "single":
      return (
        <Frame id={id}>
          <ellipse cx="300" cy="402" rx="250" ry="14" fill="#000" opacity="0.6" />
          <g>
            <circle cx="372" cy="220" r="168" fill="#08080a" stroke={W(0.2)} strokeWidth="1.2" />
            <g className="ma-spin">
              {Array.from({ length: 22 }, (_, i) => (
                <circle key={i} cx="372" cy="220" r={64 + i * 4.6} fill="none" stroke={W(i % 5 === 0 ? 0.1 : 0.045)} />
              ))}
              <path d="M372 220 L372 52 A168 168 0 0 1 497 108 Z" fill="url(#vsheen)" opacity="0.55" />
              <path d="M372 220 L372 388 A168 168 0 0 1 247 332 Z" fill="url(#vsheen)" opacity="0.55" />
              <circle cx="372" cy="220" r="56" fill={R} />
              <circle cx="372" cy="220" r="40" fill="none" stroke="#000" strokeOpacity="0.28" />
              <rect x="338" y="214" width="68" height="3" fill="#fff" opacity="0.75" />
              <rect x="350" y="222" width="44" height="3" fill="#fff" opacity="0.4" />
              <circle cx="372" cy="220" r="5" fill="#050505" />
            </g>
          </g>
          <defs>
            <linearGradient id="vsheen" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="sleeve" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#10131d" />
              <stop offset="1" stopColor="#050607" />
            </linearGradient>
          </defs>
          <rect x="66" y="96" width="264" height="264" fill="#000" opacity="0.5" filter={`url(#${id}-soft)`} transform="translate(8 14)" />
          <rect x="60" y="86" width="264" height="264" fill="url(#sleeve)" stroke={W(0.4)} />
          <Sun cx={192} cy={206} r={72} id={id} />
          <rect x="60" y="250" width="264" height="1.5" fill={W(0.5)} />
          <rect x="80" y="304" width="108" height="9" fill="#fff" opacity="0.92" />
          <rect x="80" y="320" width="64" height="4" fill="#fff" opacity="0.45" />
          <rect x="274" y="102" width="30" height="3" fill={R} />
          <rect x="274" y="109" width="18" height="3" fill="#fff" opacity="0.4" />
          <Waveform id={id} x={60} y={418} n={46} step={11.7} hMax={36} />
        </Frame>
      )

    case "album":
      return (
        <Frame id={id}>
          <defs>
            <pattern id="alb-stripes" width="14" height="14" patternUnits="userSpaceOnUse">
              <rect width="14" height="7" fill={R} />
            </pattern>
          </defs>
          {[
            { x: 40, y: 120, r: -16, art: "stripes" },
            { x: 102, y: 100, r: -7, art: "rings" },
            { x: 164, y: 90, r: 2, art: "split" },
            { x: 226, y: 96, r: 9, art: "sun" },
          ].map((s, i) => (
            <g key={i} transform={`rotate(${s.r} ${s.x + 110} ${s.y + 110})`}>
              <rect x={s.x + 6} y={s.y + 10} width="220" height="220" fill="#000" opacity="0.55" filter={`url(#${id}-soft)`} />
              <rect x={s.x} y={s.y} width="220" height="220" fill="#0a0b0e" stroke={W(0.18 + i * 0.1)} />
              {s.art === "stripes" && <rect x={s.x} y={s.y} width="220" height="220" fill="url(#alb-stripes)" opacity="0.55" />}
              {s.art === "rings" &&
                [86, 64, 42, 22].map((r) => <circle key={r} cx={s.x + 110} cy={s.y + 110} r={r} fill="none" stroke={r === 22 ? R : W(0.4)} strokeWidth={r === 22 ? 12 : 1.5} />)}
              {s.art === "split" && (
                <>
                  <polygon points={`${s.x},${s.y} ${s.x + 220},${s.y} ${s.x},${s.y + 220}`} fill={R} opacity="0.9" />
                  <circle cx={s.x + 110} cy={s.y + 110} r="46" fill="#07080a" stroke="#fff" strokeOpacity="0.7" strokeWidth="1.5" />
                </>
              )}
              {s.art === "sun" && (
                <>
                  <Sun cx={s.x + 110} cy={s.y + 100} r={64} id={`${id}x`} />
                  <rect x={s.x + 18} y={s.y + 188} width="96" height="8" fill="#fff" opacity="0.9" />
                  <rect x={s.x + 18} y={s.y + 202} width="58" height="4" fill="#fff" opacity="0.4" />
                </>
              )}
            </g>
          ))}
          {Array.from({ length: 8 }, (_, i) => {
            const hot = i === 3
            return (
              <g key={i}>
                {hot && <rect x="438" y={106 + i * 30 - 6} width="136" height="24" fill={R} opacity="0.16" />}
                <text x="444" y={118 + i * 30} fill={hot ? R : W(0.45)} fontSize="11" fontFamily="ui-monospace,monospace">{String(i + 1).padStart(2, "0")}</text>
                <rect x="470" y={110 + i * 30} width={74 + ((i * 29) % 46)} height="3.2" fill={hot ? "#fff" : W(0.3)} />
                {hot && <polygon points="562,108 562,122 572,115" fill={R} />}
              </g>
            )
          })}
          <line x1="60" y1="400" x2="540" y2="400" stroke={W(0.18)} />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <circle cx={90 + i * 140} cy="400" r={i === 2 ? 9 : 5} fill={i === 2 ? R : "#07080a"} stroke={R} />
              {i === 2 && <circle className="ma-pulse" cx={90 + i * 140} cy="400" r="9" fill="none" stroke={R} />}
            </g>
          ))}
        </Frame>
      )

    case "premiere":
      return (
        <Frame id={id}>
          <defs>
            <linearGradient id="curt" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#06143a" />
              <stop offset="0.5" stopColor="#1234a1" />
              <stop offset="1" stopColor="#06143a" />
            </linearGradient>
            <linearGradient id="beam2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#fff" stopOpacity="0.28" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="scr" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#1a1e2a" />
              <stop offset="1" stopColor="#07090d" />
            </linearGradient>
          </defs>
          <polygon className="ma-flick" points="170,205 430,205 560,440 40,440" fill="url(#beam2)" />
          <rect x="164" y="64" width="272" height="152" fill="#fff" opacity="0.12" filter={`url(#${id}-soft)`} />
          <rect x="170" y="70" width="260" height="140" fill="url(#scr)" stroke={W(0.45)} />
          <circle cx="300" cy="136" r="38" fill={R} filter={`url(#${id}-glow)`} />
          <polygon points="170,210 230,150 270,185 330,128 380,178 430,210" fill="#050405" opacity="0.92" />
          <rect x="196" y="86" width="64" height="3" fill="#fff" opacity="0.8" />
          <rect x="196" y="94" width="38" height="3" fill="#fff" opacity="0.4" />
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <g key={i}>
              <rect x={i * 17} y="0" width="17" height="460" fill="url(#curt)" opacity={0.85 + (i % 2) * 0.15} />
              <rect x={600 - (i + 1) * 17} y="0" width="17" height="460" fill="url(#curt)" opacity={0.85 + (i % 2) * 0.15} />
            </g>
          ))}
          <rect x="0" y="0" width="600" height="44" fill="#050d24" />
          <path d="M0 44 Q 75 66 150 44 T 300 44 T 450 44 T 600 44 V 0 H 0 Z" fill="#0d256e" />
          {[0, 1, 2].map((row) =>
            Array.from({ length: 9 - row }, (_, i) => {
              const x = 70 + i * (60 + row * 7) + row * 20
              const y = 330 + row * 38
              return (
                <g key={`${row}-${i}`}>
                  <rect x={x} y={y} width={44 + row * 6} height={36 + row * 6} rx="8" fill="#06070b" stroke={W(0.1)} />
                  {(i * 3 + row * 2) % 4 === 0 && <circle cx={x + 22 + row * 3} cy={y - 6} r={9 + row * 1.5} fill="#030303" stroke={W(0.18)} />}
                </g>
              )
            }),
          )}
        </Frame>
      )

    case "lieu":
      return (
        <Frame id={id}>
          <defs>
            <linearGradient id="door" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#7073ff" />
              <stop offset="1" stopColor="#2e49ff" />
            </linearGradient>
            <linearGradient id="spill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#4d5cff" stopOpacity="0.55" />
              <stop offset="1" stopColor="#4d5cff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="70" y="50" width="460" height="350" fill="#0c0e13" stroke={W(0.12)} />
          {Array.from({ length: 16 }, (_, i) => <line key={i} x1="70" x2="530" y1={66 + i * 22} y2={66 + i * 22} stroke={W(0.035)} />)}
          {[[110, 90], [110, 210], [430, 90], [430, 210]].map(([x, y], i) => (
            <g key={i}>
              <rect x={x} y={y} width="60" height="84" fill={i % 3 === 0 ? "url(#door)" : "#07080a"} opacity={i % 3 === 0 ? 0.55 : 1} stroke={W(0.2)} />
              <line x1={x + 30} x2={x + 30} y1={y} y2={y + 84} stroke="#050505" strokeWidth="2" />
              <line x1={x} x2={x + 60} y1={y + 42} y2={y + 42} stroke="#050505" strokeWidth="2" />
            </g>
          ))}
          <g className="ma-flick" filter={`url(#${id}-glow)`}>
            <rect x="226" y="62" width="148" height="34" rx="6" fill="none" stroke={R} strokeWidth="2.5" />
            <rect x="244" y="76" width="64" height="6" rx="3" fill={R} />
            <rect x="318" y="76" width="38" height="6" rx="3" fill="#fff" opacity="0.85" />
          </g>
          <path d="M300 400 V 218 a 70 70 0 0 1 0 0" fill="none" />
          <path d="M226 400 V 214 a 74 74 0 0 1 148 0 V 400 Z" fill="url(#door)" filter={`url(#${id}-glow)`} />
          <path d="M226 400 V 214 a 74 74 0 0 1 148 0 V 400 Z" fill="none" stroke="#10142a" strokeWidth="9" />
          <rect x="296" y="150" width="8" height="250" fill="#10142a" />
          <ellipse cx="300" cy="300" rx="60" ry="40" fill="#fff" opacity="0.18" filter={`url(#${id}-soft)`} />
          <g>
            {Array.from({ length: 9 }, (_, i) => (
              <polygon key={i} points={`${216 + i * 18.7},108 ${216 + (i + 1) * 18.7},108 ${222 + (i + 1) * 18.7},134 ${210 + i * 18.7},134`} fill={i % 2 ? "#e6e6f4" : R} opacity="0.95" />
            ))}
          </g>
          <rect x="0" y="400" width="600" height="60" fill="#060708" />
          <polygon points="226,400 374,400 460,460 140,460" fill="url(#spill)" />
          {[72, 528].map((x) => (
            <g key={x}>
              <circle cx={x} cy="206" r="46" fill="#7073ff" opacity="0.25" filter={`url(#${id}-soft)`} />
              <circle cx={x} cy="206" r="8" fill="#a8a8ff" />
              <line x1={x} x2={x} y1="214" y2="400" stroke={W(0.18)} />
            </g>
          ))}
          {[[262, 412, 1], [338, 416, 0.9]].map(([x, y, s], i) => (
            <g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
              <circle cx="0" cy="-60" r="11" fill="#050405" stroke="#7073ff" strokeOpacity="0.45" />
              <path d="M-16 0 V -34 Q 0 -50 16 -34 V 0 Z" fill="#050405" stroke="#7073ff" strokeOpacity="0.3" />
            </g>
          ))}
        </Frame>
      )

    case "marque": {
      const cells = [
        "01110", "10001", "10000", "01110", "00001", "00001", "10001", "01110",
      ]
      return (
        <Frame id={id}>
          <rect x="46" y="62" width="258" height="336" fill="#07080b" stroke={W(0.2)} />
          {cells.map((row, y) =>
            row.split("").map((c, x) =>
              c === "1" ? (
                <rect key={`${x}-${y}`} x={78 + x * 42} y={84 + y * 36} width="38" height="32" fill={(x === 4 && y === 1) || (x === 0 && y === 6) ? R : "#fff"} />
              ) : (
                <rect key={`${x}-${y}`} x={78 + x * 42} y={84 + y * 36} width="38" height="32" fill="none" stroke={W(0.05)} />
              ),
            ),
          )}
          <g transform="rotate(-8 430 150)">
            <rect x="328" y="76" width="210" height="124" fill="#000" opacity="0.5" filter={`url(#${id}-soft)`} transform="translate(8 12)" />
            <rect x="328" y="76" width="210" height="124" fill="#07080a" stroke={W(0.4)} />
            <rect x="346" y="96" width="38" height="38" fill={R} />
            <rect x="346" y="160" width="96" height="5" fill="#fff" opacity="0.85" />
            <rect x="346" y="172" width="64" height="3" fill="#fff" opacity="0.4" />
          </g>
          <g transform="rotate(6 440 290)">
            <rect x="330" y="240" width="210" height="124" fill="#000" opacity="0.5" filter={`url(#${id}-soft)`} transform="translate(8 12)" />
            <rect x="330" y="240" width="210" height="124" fill="#ececf2" />
            <rect x="348" y="262" width="110" height="9" fill="#050505" />
            <rect x="348" y="280" width="70" height="4" fill="#050505" opacity="0.5" />
            <rect x="348" y="330" width="40" height="4" fill={R} />
            <rect x="500" y="240" width="40" height="124" fill={R} />
          </g>
          {["#050505", R, "#ececf2", "#4a4f57"].map((c, i) => (
            <rect key={i} x={46 + i * 64} y="414" width="56" height="16" fill={c} stroke={W(0.25)} />
          ))}
        </Frame>
      )
    }

    case "produit":
      return (
        <Frame id={id}>
          <defs>
            <linearGradient id="cone" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#fff" stopOpacity="0.3" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="glass" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#08090b" />
              <stop offset="0.22" stopColor="#2a2e3a" />
              <stop offset="0.4" stopColor="#0f1014" />
              <stop offset="1" stopColor="#040506" />
            </linearGradient>
            <linearGradient id="ped" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#0b0c0d" />
              <stop offset="0.35" stopColor="#23252a" />
              <stop offset="1" stopColor="#060506" />
            </linearGradient>
          </defs>
          <polygon points="270,0 330,0 470,330 130,330" fill="url(#cone)" />
          <ellipse cx="300" cy="352" rx="200" ry="34" fill={R} opacity="0.28" filter={`url(#${id}-soft)`} />
          <rect x="130" y="352" width="340" height="40" fill="url(#ped)" />
          <ellipse cx="300" cy="392" rx="170" ry="26" fill="#08090a" />
          <ellipse cx="300" cy="352" rx="170" ry="26" fill="#15171c" stroke={W(0.3)} />
          <ellipse cx="300" cy="352" rx="136" ry="19" fill="none" stroke={R} strokeWidth="1.4" opacity="0.9" />
          <g transform="translate(0 0)">
            <ellipse cx="300" cy="348" rx="52" ry="9" fill="#000" opacity="0.6" />
            <rect x="248" y="150" width="104" height="196" rx="20" fill="url(#glass)" stroke={W(0.3)} />
            <path d="M274 150 L276 110 H324 L326 150 Z" fill="url(#glass)" stroke={W(0.3)} />
            <rect x="270" y="78" width="60" height="34" rx="6" fill="#08090a" stroke={W(0.4)} />
            <rect x="270" y="88" width="60" height="2" fill={R} />
            <rect x="248" y="212" width="104" height="96" fill={R} />
            <rect x="248" y="212" width="104" height="96" fill="url(#glass)" opacity="0.22" />
            <rect x="266" y="236" width="68" height="7" fill="#050505" />
            <rect x="266" y="250" width="44" height="4" fill="#050505" opacity="0.6" />
            <rect x="266" y="286" width="26" height="3" fill="#050505" opacity="0.7" />
            <rect x="260" y="164" width="9" height="170" rx="4.5" fill="#fff" opacity="0.28" />
            <rect x="338" y="172" width="4" height="150" rx="2" fill="#fff" opacity="0.12" />
          </g>
          <g>
            <polygon points="420,330 478,330 478,262 420,262" fill="#0f0f13" stroke={W(0.3)} />
            <polygon points="478,330 506,314 506,248 478,262" fill="#08090a" stroke={W(0.2)} />
            <polygon points="420,262 478,262 506,248 448,248" fill="#21242a" stroke={W(0.3)} />
            <rect x="430" y="284" width="40" height="5" fill={R} />
            <rect x="430" y="296" width="24" height="3" fill="#fff" opacity="0.4" />
          </g>
          {Array.from({ length: 14 }, (_, i) => (
            <circle key={i} className="ma-float" style={{ animationDelay: `${i * 0.5}s` }} cx={110 + ((i * 97) % 380)} cy={90 + ((i * 53) % 230)} r={1 + (i % 3) * 0.8} fill="#fff" />
          ))}
        </Frame>
      )

    case "levee":
      return (
        <Frame id={id}>
          <defs>
            <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={R} stopOpacity="0.5" />
              <stop offset="1" stopColor={R} stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 1].map((i) => (
            <rect key={i} x={48 + i * 6} y={96 + i * 22} width="70" height="46" fill="#0a0b0d" stroke={W(0.18)} />
          ))}
          <rect x="130" y="40" width="340" height="220" fill="#fff" opacity="0.1" filter={`url(#${id}-soft)`} />
          <rect x="136" y="46" width="328" height="210" fill="#07080b" stroke={W(0.5)} />
          <rect x="158" y="66" width="112" height="9" fill="#fff" opacity="0.9" />
          <rect x="158" y="84" width="68" height="4" fill="#fff" opacity="0.4" />
          <rect x="388" y="66" width="54" height="12" fill="#fff" opacity="0.85" />
          <rect x="400" y="86" width="42" height="4" fill="#fff" opacity="0.35" />
          {[0, 1, 2, 3].map((i) => <line key={i} x1="158" x2="442" y1={120 + i * 28} y2={120 + i * 28} stroke={W(0.06)} />)}
          <polygon points="158,226 206,214 252,196 300,182 342,150 386,126 442,92 442,226" fill="url(#area)" />
          <polyline points="158,226 206,214 252,196 300,182 342,150 386,126 442,92" fill="none" stroke={R} strokeWidth="3.5" strokeLinejoin="round" />
          <circle className="ma-pulse" cx="442" cy="92" r="7" fill="none" stroke={R} strokeWidth="2" />
          <circle cx="442" cy="92" r="7" fill={R} filter={`url(#${id}-glow)`} />
          <rect x="80" y="300" width="440" height="14" rx="7" fill="#101216" stroke={W(0.25)} />
          <ellipse cx="300" cy="316" rx="240" ry="10" fill="#000" opacity="0.5" />
          {[110, 220, 330, 440].map((x, i) => (
            <g key={x} opacity={i === 1 ? 1 : 0.88}>
              <circle cx={x + 10} cy="344" r="19" fill="#060506" stroke={i === 1 ? R : W(0.25)} />
              <path d={`M${x - 30} 430 Q ${x + 10} 372 ${x + 50} 430 Z`} fill="#060506" stroke={W(0.2)} />
            </g>
          ))}
          <rect x="480" y="330" width="62" height="38" fill="#0a0b0d" stroke={W(0.2)} />
          <rect x="488" y="342" width="30" height="4" fill="#fff" opacity="0.5" />
          <rect x="488" y="352" width="18" height="3" fill={R} />
        </Frame>
      )

    default:
      return (
        <Frame id={id}>
          <defs>
            <linearGradient id="old" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#4a4a4f" />
              <stop offset="1" stopColor="#202023" />
            </linearGradient>
          </defs>
          <rect x="36" y="40" width="238" height="268" fill="#0b0b0c" stroke={W(0.12)} />
          <rect x="326" y="40" width="238" height="268" fill="#080a10" stroke={R} strokeOpacity="0.6" />
          <rect x="326" y="40" width="238" height="268" fill={R} opacity="0.1" filter={`url(#${id}-soft)`} />
          <g opacity="0.85">
            <rect x="94" y="82" width="122" height="104" rx="8" fill="url(#old)" />
            <path d="M104 160 q 20 -40 40 -10 t 40 -16" fill="none" stroke={W(0.35)} strokeWidth="3" />
            <rect x="94" y="214" width="96" height="6" fill={W(0.3)} />
            <rect x="94" y="228" width="124" height="4" fill={W(0.18)} />
            <rect x="94" y="240" width="70" height="4" fill={W(0.14)} />
          </g>
          <g>
            <circle cx="445" cy="134" r="54" fill={R} filter={`url(#${id}-glow)`} />
            <circle cx="445" cy="134" r="72" fill="none" stroke="#fff" strokeOpacity="0.8" strokeWidth="1.5" />
            <rect x="384" y="228" width="122" height="9" fill="#fff" opacity="0.95" />
            <rect x="384" y="246" width="80" height="4" fill="#fff" opacity="0.5" />
            <rect x="384" y="260" width="48" height="3" fill={R} />
          </g>
          <line x1="300" x2="300" y1="30" y2="318" stroke={W(0.35)} strokeDasharray="3 6" />
          <circle cx="300" cy="174" r="16" fill="#050505" stroke={R} />
          <polygon points="295,167 307,174 295,181" fill={R} />
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const t = i / 5
            const size = 48
            return (
              <rect
                key={i}
                x={70 + i * 86}
                y={358 - Math.sin(t * Math.PI) * 14}
                width={size}
                height={size}
                rx={4 + t * 20}
                fill={i === 5 ? R : "none"}
                stroke={i === 5 ? R : W(0.18 + t * 0.5)}
                strokeWidth="1.5"
                opacity={0.45 + t * 0.55}
                filter={i === 5 ? `url(#${id}-glow)` : undefined}
              />
            )
          })}
          <rect x="70" y="428" width="48" height="3" fill={W(0.3)} />
          <rect x="482" y="428" width="48" height="3" fill={R} />
        </Frame>
      )
  }
}
