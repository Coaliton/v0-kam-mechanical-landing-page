"use client"

import { 
  Pipette, 
  Monitor, 
  Fan, 
  Snowflake, 
  Droplets, 
  CalendarCheck,
  Check,
  BadgeCheck
} from "lucide-react"
import { CTALink } from "./cta-button"

const commercialServices = [
  {
    icon: Pipette,
    title: "Industrial Piping Systems",
    features: [
      "Process piping for manufacturing",
      "High-pressure steam systems",
      "Chilled water distribution"
    ],
    category: "commercial"
  },
  {
    icon: Monitor,
    title: "BIM Modeling & Coordination",
    features: [
      "3D clash detection",
      "MEP coordination",
      "As-built documentation"
    ],
    category: "commercial"
  },
  {
    icon: Fan,
    title: "Commercial HVAC Systems",
    features: [
      "Rooftop unit installations",
      "VAV system design",
      "Building automation integration"
    ],
    category: "commercial"
  },
]

const residentialServices = [
  {
    icon: Snowflake,
    title: "AC Replacement & Installation",
    features: [
      "Energy-efficient units",
      "Same-day installation available",
      "10-year warranty included"
    ],
    category: "residential",
    hasGuarantee: true
  },
  {
    icon: Droplets,
    title: "Home Repiping Services",
    features: [
      "PEX & copper options",
      "Minimal wall damage",
      "Lifetime pipe warranty"
    ],
    category: "residential",
    hasGuarantee: true
  },
  {
    icon: CalendarCheck,
    title: "Maintenance Plans",
    features: [
      "Bi-annual tune-ups",
      "Priority scheduling",
      "Parts discount included"
    ],
    category: "residential",
    hasGuarantee: true
  },
]

function FeatureCard({ 
  icon: Icon, 
  title, 
  features, 
  category,
  hasGuarantee = false 
}: {
  icon: React.ElementType
  title: string
  features: string[]
  category: string
  hasGuarantee?: boolean
}) {
  const isCommercial = category === "commercial"
  
  return (
    <article className="group relative bg-charcoal border border-border rounded-xl p-6 lg:p-8 hover-lift hover-gold-border transition-all duration-300">
      {/* Guarantee Badge */}
      {hasGuarantee && (
        <div className="absolute -top-3 right-6 flex items-center gap-1 px-3 py-1 bg-gold text-pitch text-xs font-semibold rounded-full">
          <BadgeCheck className="w-3 h-3" />
          Satisfaction Guaranteed
        </div>
      )}
      
      {/* Category Tag */}
      <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
        isCommercial 
          ? "bg-steel/20 text-steel" 
          : "bg-gold/10 text-gold"
      }`}>
        {isCommercial ? "Commercial" : "Residential"}
      </div>
      
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-gold" />
      </div>
      
      {/* Title */}
      <h3 className="font-display font-semibold text-xl text-warm mb-4">
        {title}
      </h3>
      
      {/* Features List */}
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-steel">
            <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <span className="text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export function FeatureGrid() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-pitch">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-sm font-medium text-gold mb-6">
            Our Services
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-warm mb-6 text-balance">
            Full-Service Mechanical Solutions
          </h2>
          <p className="text-lg text-steel leading-relaxed text-pretty">
            From large-scale industrial projects to residential comfort upgrades, 
            we deliver excellence at every scale.
          </p>
        </div>

        {/* Commercial Services */}
        <div className="mb-12">
          <h3 className="font-display font-semibold text-xl text-warm mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-gold" />
            Commercial Division
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {commercialServices.map((service, index) => (
              <FeatureCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Residential Services */}
        <div className="mb-12">
          <h3 className="font-display font-semibold text-xl text-warm mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-gold" />
            Residential Division
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {residentialServices.map((service, index) => (
              <FeatureCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <CTALink href="/services" variant="solid" size="lg">
            View All Services
          </CTALink>
        </div>
      </div>
    </section>
  )
}
