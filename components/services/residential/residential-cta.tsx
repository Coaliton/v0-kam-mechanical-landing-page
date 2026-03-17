"use client"

import { Phone, Calendar, Shield } from "lucide-react"
import { CTALink } from "@/components/landing/cta-button"

export function ResidentialCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-charcoal to-pitch">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-warm mb-4">
            Ready for Better Home Comfort?
          </h2>
          <p className="text-steel text-lg mb-10 max-w-2xl mx-auto">
            Schedule your service today and experience the KAM difference.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <CTALink href="/schedule" variant="solid" size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Service
            </CTALink>
            <CTALink href="tel:+18005551234" external variant="outline" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              (800) 555-1234
            </CTALink>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              "Licensed & Insured",
              "Background Checked",
              "100% Satisfaction",
              "Upfront Pricing",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-steel">
                <Shield className="w-4 h-4 text-gold" />
                <span className="text-sm">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
