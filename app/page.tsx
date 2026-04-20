import Hero from "@/components/home/Hero"
import TrustBar from "@/components/home/TrustBar"
import ServicesSection from "@/components/home/ServicesSection"
import BeforeAfterSection from "@/components/home/BeforeAfterSection"
import SocialProofSection from "@/components/home/SocialProofSection"
import ServiceAreaSection from "@/components/home/ServiceAreaSection"
import FinalCTASection from "@/components/home/FinalCTASection"
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
        <FAQSection />
      </main>
    </>
  )
}
