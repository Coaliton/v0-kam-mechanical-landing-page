"use client"

import { Phone, MessageCircle, Calendar } from "lucide-react"
import { CTALink } from "@/components/landing/cta-button"

export function EmergencyCTA() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-warm mb-4">
            Need Emergency Service?
          </h2>
          <p className="text-steel text-lg mb-10 max-w-2xl mx-auto">
            Do not wait until a minor issue becomes a major disaster. Contact us now for immediate assistance.
          </p>

          {/* Primary Call Now CTA */}
          <div className="max-w-lg mx-auto mb-12">
            <a 
              href="tel:+15046486777"
              className="group flex flex-col items-center p-8 bg-red-600 hover:bg-red-500 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Phone className="w-16 h-16 text-white mb-4 animate-pulse" />
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Call Now
              </h3>
              <p className="text-white/90 text-sm mb-4">24/7 Emergency Response</p>
              <p className="text-white font-bold text-3xl">(504) 648-6777</p>
              <p className="text-white/70 text-sm mt-2">Fastest response time guaranteed</p>
            </a>
          </div>

          {/* Service Areas */}
          <div className="p-6 bg-gold/10 border border-gold/20 rounded-xl">
            <p className="text-warm text-sm">
              <span className="text-gold font-semibold">Service Area:</span> Greater New Orleans Area exclusively, 
              including Metairie, Kenner, Gretna, Harvey, Marrero, Chalmette, and Slidell.
            </p>
            <p className="text-steel text-xs mt-2">
              We are committed to providing dedicated, local expertise to our New Orleans community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
