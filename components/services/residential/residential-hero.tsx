"use client"

import { Home, Shield, Star, Clock } from "lucide-react"
import { CTALink } from "@/components/landing/cta-button"

export function ResidentialHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-pitch via-charcoal to-pitch overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-2xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
            <Home className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">Residential Services</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm mb-6 leading-tight">
            Home Comfort
            <span className="block text-gold">You Can Trust</span>
          </h1>

          <p className="text-lg md:text-xl text-steel max-w-2xl mb-8 leading-relaxed">
            From routine maintenance to complete system installations, we keep your home comfortable 
            year-round with professional HVAC and plumbing services.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <CTALink href="/schedule" variant="solid" size="lg">
              Schedule Service
            </CTALink>
            <CTALink href="/financing" variant="outline" size="lg">
              Financing Options
            </CTALink>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Home, value: "10,000+", label: "Homes Served" },
              { icon: Star, value: "4.9/5", label: "Customer Rating" },
              { icon: Shield, value: "100%", label: "Satisfaction" },
              { icon: Clock, value: "Same-Day", label: "Service Available" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <stat.icon className="w-8 h-8 text-gold flex-shrink-0" />
                <div>
                  <p className="text-xl font-bold text-warm">{stat.value}</p>
                  <p className="text-sm text-steel">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
