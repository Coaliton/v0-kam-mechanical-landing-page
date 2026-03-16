"use client"

import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { CTAButton } from "@/components/landing/cta-button"

export function AboutCTA() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-warm mb-6 text-balance">
            Ready to Work With Us?
          </h2>
          
          <p className="text-lg text-steel mb-10 max-w-2xl mx-auto text-pretty">
            Whether you have a commercial project in mind or need residential service, 
            we&apos;d love to hear from you. Let&apos;s discuss how KAM can help.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <CTAButton variant="solid" size="lg">
              Request a Quote
            </CTAButton>
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 text-gold hover:text-gold-light font-medium transition-colors group"
            >
              View Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          {/* Quick Contact */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-pitch/50 border border-border rounded-full">
            <Phone className="w-5 h-5 text-gold" />
            <span className="text-steel">Or call us directly:</span>
            <a href="tel:+18005551234" className="text-gold font-semibold hover:text-gold-light transition-colors">
              (800) 555-1234
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
