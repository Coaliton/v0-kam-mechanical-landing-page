import type { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ResidentialHero } from "@/components/services/residential/residential-hero"
import { ResidentialServicesList } from "@/components/services/residential/residential-services-list"
import { ResidentialPricing } from "@/components/services/residential/residential-pricing"
import { ResidentialCTA } from "@/components/services/residential/residential-cta"

export const metadata: Metadata = {
  title: "Residential HVAC & Plumbing Services | KAM Mechanical Construction",
  description: "Professional residential mechanical services including AC installation, heating systems, plumbing, and 24/7 emergency repairs. Licensed technicians, upfront pricing, satisfaction guaranteed.",
  keywords: ["residential HVAC", "home AC installation", "residential plumbing", "furnace repair", "water heater installation"],
}

export default function ResidentialServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ResidentialHero />
        <ResidentialServicesList />
        <ResidentialPricing />
        <ResidentialCTA />
      </main>
      <Footer />
    </>
  )
}
