export const LIMITS = {
  name: 120,
  email: 254,
  message: 4000,
  goal: 120,
  short: 400,
  narrative: 6000,
} as const

export const MIN_FILL_MS = 2500

const EMAIL_RE = /^[^\s@<>()[\]\\,;:]+@[^\s@<>()[\]\\,;:]+\.[A-Za-z]{2,}$/

export function isValidEmail(value: string): boolean {
  const v = value.trim()
  if (v.length === 0 || v.length > LIMITS.email) return false
  if (/[\r\n\t]/.test(v)) return false
  return EMAIL_RE.test(v)
}

export function sanitize(value: string, maxLength: number): string {
  return value
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/[\r\n]{3,}/g, "\n\n")
    .trim()
    .slice(0, maxLength)
}

export function isBot(honeypot: string, startedAt: number): boolean {
  if (honeypot.trim().length > 0) return true
  if (Date.now() - startedAt < MIN_FILL_MS) return true
  return false
}

export function rateLimit(key: string, minIntervalMs = 30_000): { ok: boolean; waitMs: number } {
  try {
    const last = Number(sessionStorage.getItem(`rl:${key}`) ?? 0)
    const elapsed = Date.now() - last
    if (last && elapsed < minIntervalMs) {
      return { ok: false, waitMs: minIntervalMs - elapsed }
    }
    sessionStorage.setItem(`rl:${key}`, String(Date.now()))
    return { ok: true, waitMs: 0 }
  } catch {
    return { ok: true, waitMs: 0 }
  }
}

export const honeypotProps = {
  type: "text" as const,
  tabIndex: -1,
  autoComplete: "off",
  "aria-hidden": true,
  style: {
    position: "absolute" as const,
    left: "-9999px",
    width: 1,
    height: 1,
    opacity: 0,
    pointerEvents: "none" as const,
  },
}
