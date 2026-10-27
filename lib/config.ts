function env(value: string | undefined, fallback: string): string {
  const v = value?.trim()
  return v && v.length > 0 ? v : fallback
}

export const CONTACT_ENDPOINT = "/api/contact"

export const STRIPE_LINKS = {
  architecture: env(process.env.NEXT_PUBLIC_STRIPE_ARCHITECTURE_URL, "https://buy.stripe.com/eVq7sEb2AfDe8Am2Raf7i0g"),
} as const

export const BOOK_URL = env(process.env.NEXT_PUBLIC_BOOK_URL, "https://buy.stripe.com/cNi6oAb2A4YA9EqfDWf7i0f")
