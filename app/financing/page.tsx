import type { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { FinancingHero } from "@/components/financing/financing-hero"
import { FinancingPlans } from "@/components/financing/financing-plans"
import { PaymentCalculator } from "@/components/financing/payment-calculator"
import { FinancingFAQ } from "@/components/financing/financing-faq"

export const metadata: Metadata = {
  title: "Financing Options | KAM Mechanical Construction LLC",
  description: "Flexible financing options for HVAC installations and repairs. 0% APR available. Get approved in minutes with no impact on your credit score.",
}

export default function FinancingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <FinancingHero />
      <FinancingPlans />
      <PaymentCalculator />
      <FinancingFAQ />
      <Footer />
    </main>
  )
}
