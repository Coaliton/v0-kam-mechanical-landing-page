import type { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { CommercialHero } from "@/components/services/commercial/commercial-hero"
import { CommercialServicesList } from "@/components/services/commercial/commercial-services-list"
import { CommercialIndustries } from "@/components/services/commercial/commercial-industries"
import { CommercialCTA } from "@/components/services/commercial/commercial-cta"

export const metadata: Metadata = {
  title: "Commercial HVAC & Mechanical Services | KAM Mechanical Construction",
  description: "Industrial-grade mechanical construction services for commercial facilities. BIM modeling, industrial piping, HVAC systems, building automation, and preventive maintenance programs.",
  keywords: ["commercial HVAC", "industrial piping", "BIM services", "building automation", "commercial plumbing"],
}

export default function CommercialServicesPage() {
  return (
    <>
      <Header />
      <main>
        <CommercialHero />
        <CommercialServicesList />
        <CommercialIndustries />
        <CommercialCTA />
      </main>
      <Footer />
    </>
  )
}
