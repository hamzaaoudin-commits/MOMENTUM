import { DEFAULT_LANG, type Lang } from "@/lib/lang"

export function pick<T extends Partial<Record<Lang, unknown>>>(dict: T, lang: Lang): NonNullable<T["fr"]> {
  return (dict[lang] ?? dict[DEFAULT_LANG] ?? dict.en) as NonNullable<T["fr"]>
}
