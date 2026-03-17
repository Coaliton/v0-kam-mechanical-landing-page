"use client"

import { MessageCircle, Phone, Mail } from "lucide-react"
import { CTALink } from "@/components/landing/cta-button"

export function FAQCta() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-warm mb-4">
            Still Have Questions?
          </h2>
          <p className="text-steel text-lg mb-10 max-w-2xl mx-auto">
            Our team is here to help. Reach out through your preferred channel and we will get back to you promptly.
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a 
              href="tel:+15046486777"
              className="group p-6 bg-pitch border border-gold/20 hover:border-gold/40 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <Phone className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-warm mb-2">
                Call Us
              </h3>
              <p className="text-steel text-sm mb-2">Mon-Fri 7AM-6PM</p>
              <p className="text-gold font-semibold">(504) 648-6777</p>
            </a>

            <a
              href="mailto:kamcllc7@gmail.com"
              className="group p-6 bg-pitch border border-gold/20 hover:border-gold/40 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <Mail className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-warm mb-2">
                Email Us
              </h3>
              <p className="text-steel text-sm mb-2">Response within 24hrs</p>
              <p className="text-gold font-semibold">kamcllc7@gmail.com</p>
            </a>

            <div className="group p-6 bg-pitch border border-gold/20 hover:border-gold/40 rounded-2xl transition-all duration-300 hover:-translate-y-1">
              <MessageCircle className="w-10 h-10 text-gold mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-warm mb-2">
                Live Chat
              </h3>
              <p className="text-steel text-sm mb-2">Available during hours</p>
              <CTALink href="/contact" variant="ghost" size="sm">
                Start Chat
              </CTALink>
            </div>
          </div>

          {/* Schedule CTA */}
          <div className="p-8 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border border-gold/30 rounded-2xl">
            <h3 className="font-display text-2xl font-bold text-warm mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-steel max-w-xl mx-auto mb-6">
              Schedule your service today and experience the KAM difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTALink href="/schedule" variant="solid" size="lg">
                Schedule Service
              </CTALink>
              <CTALink href="/contact" variant="outline" size="lg">
                Contact Us
              </CTALink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
