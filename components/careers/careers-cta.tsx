"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { CTALink } from "@/components/landing/cta-button"

export function CareersCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-charcoal to-pitch">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-warm mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-steel text-lg mb-6">
                Take the first step toward a rewarding career in the mechanical trades. 
                We provide the training, tools, and support you need to succeed.
              </p>
              
              <div className="space-y-4 mb-8">
                <a href="mailto:careers@kammechanical.com" className="flex items-center gap-3 text-steel hover:text-gold transition-colors">
                  <Mail className="w-5 h-5 text-gold" />
                  careers@kammechanical.com
                </a>
                <a href="tel:+18005551234" className="flex items-center gap-3 text-steel hover:text-gold transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                  (800) 555-1234 ext. HR
                </a>
                <div className="flex items-center gap-3 text-steel">
                  <MapPin className="w-5 h-5 text-gold" />
                  123 Industrial Blvd, Metro City
                </div>
              </div>

              <CTALink href="/contact" variant="solid" size="lg">
                Apply Today
              </CTALink>
            </div>

            {/* Values Card */}
            <div className="p-8 bg-pitch border border-gold/20 rounded-2xl">
              <h3 className="font-display text-xl font-semibold text-warm mb-6">
                What We Look For
              </h3>
              <ul className="space-y-4">
                {[
                  "Strong work ethic and reliability",
                  "Commitment to safety and quality",
                  "Team player mentality",
                  "Eagerness to learn and grow",
                  "Customer-first attitude",
                  "Integrity in all interactions",
                ].map((value) => (
                  <li key={value} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <span className="text-steel">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
