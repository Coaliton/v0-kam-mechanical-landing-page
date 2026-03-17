"use client"

import { Phone, Clock, Shield, Zap } from "lucide-react"
import { CTALink } from "@/components/landing/cta-button"

export function EmergencyHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-gradient-to-br from-pitch via-charcoal to-pitch overflow-hidden">
      {/* Animated Background Pulse */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-gold/10 rounded-full blur-2xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Emergency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/50 rounded-full mb-8 animate-pulse">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
              24/7 Emergency Service Available
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm mb-6 leading-tight">
            Emergency HVAC &
            <span className="block text-gold">Plumbing Services</span>
          </h1>

          <p className="text-lg md:text-xl text-steel max-w-2xl mx-auto mb-10 leading-relaxed">
            When disaster strikes, every minute counts. Our emergency response team is available 
            around the clock to restore your comfort and safety.
          </p>

          {/* Emergency Phone */}
          <div className="flex flex-col items-center gap-6 mb-12">
            <a 
              href="tel:+18005551234" 
              className="group flex items-center gap-4 px-8 py-5 bg-red-600 hover:bg-red-500 text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Phone className="w-8 h-8 animate-bounce" />
              <div className="text-left">
                <p className="text-sm opacity-80">Call Now - 24/7 Hotline</p>
                <p className="text-2xl font-bold">(800) 555-1234</p>
              </div>
            </a>
            
            <div className="flex flex-wrap justify-center gap-4">
              <CTALink href="/contact" variant="outline" size="lg">
                Request Emergency Service
              </CTALink>
              <CTALink href="/schedule" variant="ghost" size="lg">
                Schedule for Later
              </CTALink>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Clock, value: "< 60 min", label: "Response Time" },
              { icon: Shield, value: "24/7", label: "Availability" },
              { icon: Zap, value: "100%", label: "Same-Day Service" },
              { icon: Phone, value: "1-Call", label: "Dispatch" },
            ].map((stat) => (
              <div key={stat.label} className="p-4 bg-charcoal/50 border border-gold/20 rounded-xl">
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
