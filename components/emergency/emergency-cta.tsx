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

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Call */}
            <a 
              href="tel:+18005551234"
              className="group p-6 bg-red-600 hover:bg-red-500 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <Phone className="w-10 h-10 text-white mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-white mb-2">
                Call Now
              </h3>
              <p className="text-white/80 text-sm mb-3">Fastest response time</p>
              <p className="text-white font-bold text-lg">(800) 555-1234</p>
            </a>

            {/* Chat */}
            <div className="group p-6 bg-pitch border border-gold/20 hover:border-gold/40 rounded-2xl transition-all duration-300 hover:-translate-y-1">
              <MessageCircle className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-warm mb-2">
                Live Chat
              </h3>
              <p className="text-steel text-sm mb-3">Chat with our team</p>
              <CTALink href="/contact" variant="outline" size="sm">
                Start Chat
              </CTALink>
            </div>

            {/* Schedule */}
            <div className="group p-6 bg-pitch border border-gold/20 hover:border-gold/40 rounded-2xl transition-all duration-300 hover:-translate-y-1">
              <Calendar className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-warm mb-2">
                Schedule
              </h3>
              <p className="text-steel text-sm mb-3">Book for a specific time</p>
              <CTALink href="/schedule" variant="outline" size="sm">
                Book Now
              </CTALink>
            </div>
          </div>

          {/* Service Areas */}
          <div className="p-6 bg-pitch/50 border border-gold/10 rounded-xl">
            <p className="text-steel text-sm">
              <span className="text-gold font-semibold">Service Areas:</span> Greater Metro Area, 
              including downtown, suburbs, and surrounding counties within 50 miles. 
              Extended service area available for commercial clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
