"use client"

import { Building2, Shield, Award, Clock } from "lucide-react"
import { CTALink } from "@/components/landing/cta-button"

export function CommercialHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-pitch via-charcoal to-pitch overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-2xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">Commercial Division</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm mb-6 leading-tight">
            Industrial-Grade
            <span className="block text-gold">Mechanical Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-steel max-w-2xl mb-8 leading-relaxed">
            From complex industrial piping systems to advanced building automation, 
            we deliver precision-engineered mechanical solutions for commercial facilities of any scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <CTALink href="/contact" variant="solid" size="lg">
              Request Commercial Bid
            </CTALink>
            <CTALink href="/projects" variant="outline" size="lg">
              View Our Projects
            </CTALink>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Building2, value: "500+", label: "Projects Completed" },
              { icon: Shield, value: "100%", label: "Safety Record" },
              { icon: Award, value: "15+", label: "Years Experience" },
              { icon: Clock, value: "24/7", label: "Emergency Support" },
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
