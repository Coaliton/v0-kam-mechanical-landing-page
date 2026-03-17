"use client"

import { Phone, FileText } from "lucide-react"
import { CTALink } from "@/components/landing/cta-button"

export function ProjectsCTA() {
  return (
    <section className="py-20 lg:py-28 bg-pitch">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="certificate-border rounded-2xl bg-charcoal p-8 lg:p-12 text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-warm mb-4 text-balance">
              Let&apos;s Build Your Next Project
            </h2>
            <p className="text-lg text-steel mb-8 max-w-2xl mx-auto text-pretty">
              Whether it&apos;s a multi-million dollar commercial installation or a residential 
              comfort upgrade, we bring the same commitment to excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <CTALink href="/contact" variant="solid" size="lg">
                <FileText className="w-5 h-5 mr-2" />
                Request a Bid
              </CTALink>
              <CTALink href="tel:+15046486777" external variant="outline" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </CTALink>
            </div>
            
            <p className="text-sm text-steel">
              Commercial bids within 48 hours. Residential bookings available same-day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
