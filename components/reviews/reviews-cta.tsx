"use client"

import { Star, ExternalLink } from "lucide-react"
import { CTALink } from "@/components/landing/cta-button"

export function ReviewsCTA() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Leave a Review CTA */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-warm mb-4">
              Had a Great Experience?
            </h2>
            <p className="text-steel text-lg mb-8 max-w-2xl mx-auto">
              We would love to hear from you! Share your experience and help others find quality service.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://google.com/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-pitch border border-gold/30 rounded-full text-warm hover:border-gold hover:text-gold transition-all"
              >
                <Star className="w-5 h-5" />
                Review on Google
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="https://yelp.com/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-pitch border border-gold/30 rounded-full text-warm hover:border-gold hover:text-gold transition-all"
              >
                <Star className="w-5 h-5" />
                Review on Yelp
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="p-8 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border border-gold/30 rounded-2xl text-center">
            <h3 className="font-display text-2xl font-bold text-warm mb-3">
              Ready to Experience the Difference?
            </h3>
            <p className="text-steel max-w-xl mx-auto mb-6">
              Join thousands of satisfied customers who trust KAM Mechanical for their comfort needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTALink href="/schedule" variant="solid" size="lg">
                Book Now
              </CTALink>
              <CTALink href="/contact" variant="outline" size="lg">
                Request a Bid
              </CTALink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
