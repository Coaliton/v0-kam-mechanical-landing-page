import { Header } from "@/components/landing/header"
import TopUtilityBar from "@/components/home/TopUtilityBar"
import Hero from "@/components/home/Hero"
import TrustBar from "@/components/home/TrustBar"
import ServicesSection from "@/components/home/ServicesSection"
import BeforeAfterSection from "@/components/home/BeforeAfterSection"
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
        <TrustBar />
        <ServicesSection />
        <BeforeAfterSection />
        <GuaranteeSection />
        <SocialProof />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
