"use client"

import Image from "next/image"
import { Building2, Award, Users, Calendar } from "lucide-react"

const stats = [
  { icon: Calendar, value: "15+", label: "Years Experience" },
  { icon: Building2, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Award, value: "100%", label: "Safety Record" },
]

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-pitch overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 to-pitch" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-sm font-medium text-gold mb-8">
              <Award className="w-4 h-4" />
              Established 2009
            </div>
            
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-warm mb-6 text-balance">
              Building Excellence, <br />
              <span className="text-gradient-gold">One Project at a Time</span>
            </h1>
            
            <p className="text-xl text-steel leading-relaxed mb-8 text-pretty">
              KAM Mechanical Construction LLC is a full-service mechanical contractor 
              delivering exceptional quality in industrial piping, HVAC systems, and 
              residential comfort solutions throughout the region.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-charcoal/50 rounded-lg border border-border">
                  <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
                  <span className="block font-display font-bold text-2xl text-gold">{stat.value}</span>
                  <span className="text-xs text-steel">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border">
              <Image
                src="/images/kam-logo.png"
                alt="KAM Mechanical Construction LLC"
                fill
                className="object-contain p-8 bg-charcoal"
                priority
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/5 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
