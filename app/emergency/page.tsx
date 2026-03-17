import type { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { EmergencyHero } from "@/components/emergency/emergency-hero"
import { EmergencyServices } from "@/components/emergency/emergency-services"
import { EmergencyProcess } from "@/components/emergency/emergency-process"
import { EmergencyCTA } from "@/components/emergency/emergency-cta"

export const metadata: Metadata = {
  title: "24/7 Emergency HVAC & Plumbing Services | KAM Mechanical Construction",
  description: "Round-the-clock emergency mechanical services. Fast response times, licensed technicians available 24/7 for HVAC failures, plumbing emergencies, and industrial system breakdowns.",
  keywords: ["emergency HVAC", "24/7 plumbing", "emergency AC repair", "after hours HVAC", "emergency heating repair"],
}

export default function EmergencyPage() {
  return (
    <>
      <Header />
      <main>
        <EmergencyHero />
        <EmergencyServices />
        <EmergencyProcess />
        <EmergencyCTA />
      </main>
      <Footer />
    </>
  )
}
