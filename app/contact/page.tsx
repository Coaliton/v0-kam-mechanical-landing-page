import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact Us | KAM Mechanical Construction LLC",
  description: "Get in touch with KAM Mechanical Construction. Request a quote, schedule service, or reach our 24/7 emergency line. Commercial and residential HVAC experts.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-pitch">
      <ContactHero />
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </main>
  )
}
