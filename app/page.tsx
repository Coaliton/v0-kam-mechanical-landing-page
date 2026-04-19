import Hero from "@/components/home/Hero"
import TrustBar from "@/components/home/TrustBar"
import ServicesSection from "@/components/home/ServicesSection"
import BeforeAfterSection from "@/components/home/BeforeAfterSection"
import SocialProofSection from "@/components/home/SocialProofSection"
import ServiceAreaSection from "@/components/home/ServiceAreaSection"
import FinalCTASection from "@/components/home/FinalCTASection"
import { GuaranteeSection } from "@/components/landing/guarantee"
import { SocialProof } from "@/components/landing/social-proof"
import { FAQSection } from "@/components/landing/faq-section"

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustBar />
        <ServicesSection />
        <BeforeAfterSection />
        <SocialProofSection />
        <ServiceAreaSection />
        <FinalCTASection />
        <GuaranteeSection />
        <SocialProof />
        <FAQSection />
      </main>
    </>
  )
}
