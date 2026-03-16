"use client"

import { Shield, Target, Users, Zap, Heart, Scale } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Zero compromises on safety. Our perfect safety record reflects our unwavering commitment to protecting our team, clients, and communities."
  },
  {
    icon: Target,
    title: "Precision Excellence",
    description: "Every measurement matters. We bring engineering precision to every project, ensuring systems perform exactly as designed."
  },
  {
    icon: Users,
    title: "Team Integrity",
    description: "Our people are our greatest asset. We invest in ongoing training, fair compensation, and a culture of mutual respect."
  },
  {
    icon: Zap,
    title: "Innovation Forward",
    description: "We embrace new technologies and methods that improve efficiency, quality, and sustainability in mechanical construction."
  },
  {
    icon: Heart,
    title: "Client Partnership",
    description: "We build relationships, not just systems. Understanding our clients' needs allows us to deliver solutions that truly serve them."
  },
  {
    icon: Scale,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprise charges. We provide honest, upfront pricing so you can make informed decisions."
  },
]

export function Values() {
  return (
    <section className="py-20 lg:py-28 bg-pitch">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-gold" />
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Our Values</span>
            <span className="w-12 h-px bg-gold" />
          </div>
          
          <h2 className="font-display font-bold text-3xl md:text-4xl text-warm mb-6 text-balance">
            The Principles That Guide Us
          </h2>
          
          <p className="text-lg text-steel leading-relaxed text-pretty">
            These core values aren&apos;t just words on a wall—they&apos;re the foundation of every 
            decision we make and every project we deliver.
          </p>
        </div>
        
        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <article 
              key={index}
              className="group p-6 lg:p-8 bg-charcoal border border-border rounded-xl hover-gold-border transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                <value.icon className="w-7 h-7 text-gold" />
              </div>
              
              <h3 className="font-display font-semibold text-xl text-warm mb-3">
                {value.title}
              </h3>
              
              <p className="text-steel leading-relaxed">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
