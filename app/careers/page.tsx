import type { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { CareersHero } from "@/components/careers/careers-hero"
import { CareersBenefits } from "@/components/careers/careers-benefits"
import { CareersOpenings } from "@/components/careers/careers-openings"
import { CareersCTA } from "@/components/careers/careers-cta"

export const metadata: Metadata = {
  title: "Careers at KAM Mechanical Construction | Join Our Team",
  description: "Build your career with KAM Mechanical. We offer competitive pay, comprehensive benefits, and growth opportunities for HVAC technicians, plumbers, and mechanical engineers.",
  keywords: ["HVAC jobs", "plumber careers", "mechanical engineer jobs", "trade careers", "construction jobs"],
}

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        <CareersHero />
        <CareersBenefits />
        <CareersOpenings />
        <CareersCTA />
      </main>
      <Footer />
    </>
  )
}
