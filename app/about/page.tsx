import { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { AboutHero } from "@/components/about/about-hero"
import { CompanyStory } from "@/components/about/company-story"
import { TeamSection } from "@/components/about/team-section"
import { Values } from "@/components/about/values"
import { Certifications } from "@/components/about/certifications"
import { AboutCTA } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "About Us | KAM Mechanical Construction LLC",
  description: "Learn about KAM Mechanical Construction's 15+ years of excellence in mechanical construction. Meet our team, discover our values, and see our certifications.",
  keywords: ["about KAM Mechanical", "mechanical construction company", "HVAC contractor", "industrial piping company", "construction team"],
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <CompanyStory />
      <Values />
      <TeamSection />
      <Certifications />
      <AboutCTA />
      <Footer />
    </main>
  )
}
