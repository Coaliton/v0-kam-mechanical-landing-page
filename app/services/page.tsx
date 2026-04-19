import { Metadata } from "next"
import { Footer } from "@/components/landing/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { CommercialServices } from "@/components/services/commercial-services"
import { ResidentialServices } from "@/components/services/residential-services"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Services | KAM Mechanical Construction LLC",
  description: "Comprehensive mechanical construction services for commercial and residential clients. Industrial piping, HVAC systems, BIM modeling, AC installation, repiping, and maintenance plans.",
  keywords: ["HVAC services", "mechanical construction", "industrial piping", "commercial HVAC", "residential AC", "plumbing services", "BIM modeling"],
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <ServicesHero />
      <CommercialServices />
      <ResidentialServices />
      <ServicesCTA />
      <Footer />
    </main>
  )
}
