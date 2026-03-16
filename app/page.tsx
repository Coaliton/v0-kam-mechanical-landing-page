import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { StatsStrip } from "@/components/landing/stats-strip"
import { FeatureGrid } from "@/components/landing/feature-grid"
import { GuaranteeSection } from "@/components/landing/guarantee"
import { SocialProof } from "@/components/landing/social-proof"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsStrip />
        <FeatureGrid />
        <GuaranteeSection />
        <SocialProof />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
