"use client"

import { Users, TrendingUp, Award, Heart } from "lucide-react"
import { CTALink } from "@/components/landing/cta-button"

export function CareersHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-pitch via-charcoal to-pitch overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
            <Users className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">We are Hiring</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm mb-6 leading-tight">
            Build Your Future
            <span className="block text-gold">With KAM Mechanical</span>
          </h1>

          <p className="text-lg md:text-xl text-steel max-w-2xl mx-auto mb-8 leading-relaxed">
            Join a team that values skill, integrity, and growth. We offer competitive pay, 
            comprehensive benefits, and real opportunities for advancement.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <CTALink href="#openings" variant="solid" size="lg">
              View Open Positions
            </CTALink>
            <CTALink href="/about" variant="outline" size="lg">
              Learn About Us
            </CTALink>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, value: "150+", label: "Team Members" },
              { icon: TrendingUp, value: "20%", label: "Annual Growth" },
              { icon: Award, value: "15+", label: "Years in Business" },
              { icon: Heart, value: "92%", label: "Employee Retention" },
            ].map((stat) => (
              <div key={stat.label} className="p-4 bg-charcoal/50 border border-gold/10 rounded-xl">
                <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                <p className="text-2xl font-bold text-warm">{stat.value}</p>
                <p className="text-sm text-steel">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
