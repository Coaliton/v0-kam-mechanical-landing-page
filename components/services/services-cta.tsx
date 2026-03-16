"use client"

import { Phone, Mail, Clock } from "lucide-react"
import { CTAButton } from "@/components/landing/cta-button"

export function ServicesCTA() {
  return (
    <section className="py-20 lg:py-28 bg-pitch relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="certificate-border rounded-2xl bg-charcoal p-8 lg:p-12 text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-warm mb-4 text-balance">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-steel mb-8 max-w-2xl mx-auto text-pretty">
              Whether you need a commercial bid or residential service, our team is ready to help. 
              Contact us today for a free consultation and transparent quote.
            </p>
            
            {/* Contact Options */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <span className="text-warm font-medium mb-1">Call Us</span>
                <a href="tel:+18005551234" className="text-gold hover:text-gold-light transition-colors">
                  (800) 555-1234
                </a>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <span className="text-warm font-medium mb-1">Email Us</span>
                <a href="mailto:info@kammechanical.com" className="text-gold hover:text-gold-light transition-colors">
                  info@kammechanical.com
                </a>
              </div>
              
              <div className="flex flex-col items-center p-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <span className="text-warm font-medium mb-1">Hours</span>
                <span className="text-steel text-sm">Mon-Fri: 7am-6pm</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton variant="solid" size="lg">
                Request a Quote
              </CTAButton>
              <CTAButton variant="outline" size="lg">
                Schedule Consultation
              </CTAButton>
            </div>
          </div>
          
          {/* Emergency Banner */}
          <div className="mt-8 p-6 bg-gold/10 border border-gold/30 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="block text-warm font-display font-semibold">24/7 Emergency Service Available</span>
              <span className="text-steel text-sm">For urgent residential repairs, we&apos;re always just a call away.</span>
            </div>
            <a 
              href="tel:+18005551234"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-pitch font-semibold rounded-full hover:bg-gold-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              Emergency Line
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
