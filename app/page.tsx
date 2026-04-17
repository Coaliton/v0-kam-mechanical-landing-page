import { Header } from "@/components/landing/header"
import TopUtilityBar from "@/components/home/TopUtilityBar"
import Hero from "@/components/home/Hero"
import { StatsStrip } from "@/components/landing/stats-strip"
import { FeatureGrid } from "@/components/landing/feature-grid"
import { GuaranteeSection } from "@/components/landing/guarantee"
import { SocialProof } from "@/components/landing/social-proof"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <>
      <TopUtilityBar />
      <Header />
      <main>
        <Hero />
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
