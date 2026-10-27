import { NavBar } from "@/components/strawberry/navbar"
import { HeroSection } from "@/components/strawberry/hero-section"
import { TourSection } from "@/components/strawberry/tour-section"
import { StagingSection } from "@/components/strawberry/staging-section"
import { MethodSection } from "@/components/strawberry/method-section"
import { ReadMarquee } from "@/components/strawberry/read-marquee"
import { ProblemSection } from "@/components/strawberry/problem-section"
import { WhySection } from "@/components/strawberry/why-section"
import { DiagnosisSection } from "@/components/strawberry/diagnosis-section"
import { ImpactStats } from "@/components/strawberry/impact-stats"
import { FaqSection } from "@/components/strawberry/faq-section"
import { FAQ } from "@/lib/faqs"
import { CTABanner } from "@/components/strawberry/cta-banner"
import { ContactSection } from "@/components/strawberry/contact-section"
import { Footer } from "@/components/strawberry/footer"
import { isLang, type Lang } from "@/lib/lang"

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang: raw } = await params
  const lang: Lang = isLang(raw) ? raw : "fr"

  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <ProblemSection lang={lang} />
      <DiagnosisSection lang={lang} />
      <WhySection lang={lang} />
      <TourSection />
      <MethodSection lang={lang} />
      <StagingSection lang={lang} />
      <ReadMarquee />
      <ImpactStats lang={lang} />
      <CTABanner />
      <FaqSection faqs={FAQ} />
      <ContactSection />
      <Footer />
    </main>
  )
}
