"use client"

import { Phone, FileText, Calendar } from "lucide-react"
import { CTALink } from "@/components/landing/cta-button"

export function CommercialCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-charcoal to-pitch">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-warm mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-steel text-lg mb-10 max-w-2xl mx-auto">
            Our commercial team is ready to help you plan, design, and execute your next mechanical project.
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="p-6 bg-gold rounded-2xl text-center">
              <FileText className="w-10 h-10 text-pitch mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-pitch mb-4">
                Commercial Projects
              </h3>
              <CTALink href="/contact" variant="outline" size="lg" className="border-pitch text-pitch hover:bg-pitch hover:text-gold w-full">
                Request a Bid
              </CTALink>
            </div>

            <a 
              href="tel:+15046486777"
              className="group p-6 bg-pitch border border-gold/20 hover:border-gold/40 rounded-2xl transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <Phone className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-warm mb-2">
                Speak With Our Team
              </h3>
              <p className="text-gold font-bold text-lg">Call Now</p>
              <p className="text-steel text-sm mt-1">(504) 648-6777</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
