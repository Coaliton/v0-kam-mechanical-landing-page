import type { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { FAQHero } from "@/components/faq/faq-hero"
import { FAQCategories } from "@/components/faq/faq-categories"
import { FAQSearch } from "@/components/faq/faq-search"
import { FAQCta } from "@/components/faq/faq-cta"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | KAM Mechanical Construction",
  description: "Find answers to common questions about our HVAC, plumbing, and mechanical services. Learn about pricing, warranties, scheduling, and more.",
  keywords: ["HVAC FAQ", "plumbing questions", "mechanical services FAQ", "heating cooling questions"],
}

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <FAQHero />
        <FAQSearch />
        <FAQCategories />
        <FAQCta />
      </main>
      <Footer />
    </>
  )
}
