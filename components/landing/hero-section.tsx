"use client"

import { CTALink } from "./cta-button"
import { Building2, Home, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20">
      {/* Split Background Container */}
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        {/* Commercial Side */}
        <div className="relative flex-1 bg-gradient-to-br from-pitch via-charcoal to-pitch">
          {/* Industrial Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pitch/80 via-transparent to-pitch/40" />
        </div>
        
        {/* Residential Side */}
        <div className="relative flex-1 bg-gradient-to-bl from-charcoal via-pitch to-charcoal">
          {/* Modern Grid Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pitch/80 via-transparent to-pitch/40" />
        </div>
        
        {/* Center Divider Line (Desktop) */}
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 w-full py-16 lg:py-0">
          
          {/* Commercial Panel */}
          <div className="flex flex-col justify-center items-start text-left lg:pr-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Commercial Division</span>
            </div>
            
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-warm leading-tight mb-6 text-balance">
              Engineering the Backbone of{" "}
              <span className="text-gradient-gold">Infrastructure.</span>
            </h1>
            
            <p className="text-lg text-steel leading-relaxed mb-8 max-w-lg text-pretty">
              Large-scale mechanical systems for data centers, hospitals, and industrial 
              facilities. From BIM modeling to final commissioning, we deliver precision 
              engineering that powers progress.
            </p>
            
            <CTALink href="/contact" variant="outline" size="lg" className="group">
              Request a Bid
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </CTALink>
          </div>

          {/* Residential Panel */}
          <div className="flex flex-col justify-center items-start lg:items-end text-left lg:text-right lg:pl-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
              <Home className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium text-gold">Residential Division</span>
            </div>
            
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-warm leading-tight mb-6 text-balance">
              Elevating{" "}
              <span className="text-gradient-gold">Home Comfort.</span>
            </h1>
            
            <p className="text-lg text-steel leading-relaxed mb-8 max-w-lg text-pretty">
              Premium HVAC installations, whole-home repiping, and maintenance plans 
              designed for modern living. Fixed pricing. Background-checked technicians. 
              Your comfort, guaranteed.
            </p>
            
            <CTALink href="/schedule" variant="solid" size="lg" className="group">
              Book Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </CTALink>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-steel">
        <span className="text-sm font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-steel/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gold rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
