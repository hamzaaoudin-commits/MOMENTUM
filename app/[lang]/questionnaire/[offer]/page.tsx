import { notFound } from "next/navigation"
import { isOfferKey, isTerrainKey, type TerrainKey } from "@/lib/questionnaire-data"
import { isLang, DEFAULT_LANG } from "@/lib/lang"
import { QuestionnaireFlow } from "@/components/strawberry/questionnaire/questionnaire-flow"

interface PageProps {
  params: Promise<{ lang: string; offer: string }>
  searchParams: Promise<{ name?: string; house?: string; email?: string; terrain?: string }>
}

export default async function QuestionnairePage({ params, searchParams }: PageProps) {
  const { lang, offer } = await params
  const { name, house, email, terrain } = await searchParams

  if (!isOfferKey(offer)) notFound()
  const resolvedLang = isLang(lang) ? lang : DEFAULT_LANG

  return (
    <main className="q-grain q-shell relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink px-gutter py-16 sm:py-20">
      <div className="relative w-full">
        <QuestionnaireFlow
          offer={offer}
          lang={resolvedLang}
          terrain={isTerrainKey(terrain) ? terrain : undefined}
          prefill={{ name, house, email }}
        />
      </div>
    </main>
  )
}
