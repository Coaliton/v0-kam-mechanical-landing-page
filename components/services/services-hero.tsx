"use client"

import { Wrench, Building2, Home } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-pitch overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-sm font-medium text-gold mb-8">
            <Wrench className="w-4 h-4" />
            Full-Service Mechanical Solutions
          </div>
          
          {/* Title */}
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-warm mb-6 text-balance">
            Our Services
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-steel leading-relaxed max-w-3xl mx-auto mb-12 text-pretty">
            From large-scale industrial projects to residential comfort upgrades, 
            we deliver excellence at every scale with over 15 years of expertise.
          </p>
          
          {/* Division Pills */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#commercial"
              className="flex items-center gap-3 px-6 py-4 bg-charcoal border border-border rounded-xl hover:border-gold/50 hover:bg-charcoal/80 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Building2 className="w-6 h-6 text-gold" />
              </div>
              <div className="text-left">
                <span className="block font-display font-semibold text-warm">Commercial Division</span>
                <span className="text-sm text-steel">Industrial-scale projects</span>
              </div>
            </a>
            
            <a 
              href="#residential"
              className="flex items-center gap-3 px-6 py-4 bg-charcoal border border-border rounded-xl hover:border-gold/50 hover:bg-charcoal/80 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Home className="w-6 h-6 text-gold" />
              </div>
              <div className="text-left">
                <span className="block font-display font-semibold text-warm">Residential Division</span>
                <span className="text-sm text-steel">Home comfort solutions</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pitch to-transparent" />
    </section>
  )
}
