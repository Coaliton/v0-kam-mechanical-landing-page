"use client"

import { Clock, Building, Shield, Award } from "lucide-react"

const stats = [
  {
    icon: Clock,
    value: "15+",
    label: "Years Experience",
  },
  {
    icon: Building,
    value: "500+",
    label: "Projects Completed",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Safety Record",
  },
  {
    icon: Award,
    value: "Licensed",
    label: "& Insured",
  },
]

export function StatsStrip() {
  return (
    <section className="relative bg-charcoal border-y border-gold/20">
      {/* Subtle Gold Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5" />
      
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-4 group-hover:bg-gold/20 group-hover:border-gold/50 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-gold" />
              </div>
              
              {/* Value */}
              <span className="font-display font-bold text-3xl lg:text-4xl text-warm mb-1">
                {stat.value}
              </span>
              
              {/* Label */}
              <span className="text-sm lg:text-base text-steel font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
