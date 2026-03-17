"use client"

import { 
  Wrench, 
  Cpu, 
  Wind, 
  Droplets, 
  Gauge, 
  Settings,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { CTALink } from "@/components/landing/cta-button"

const services = [
  {
    icon: Wrench,
    title: "Industrial Piping Systems",
    description: "Complete design and installation of process piping, steam systems, compressed air, and specialty gas piping for industrial facilities.",
    features: ["Process Piping", "Steam Systems", "Compressed Air", "Medical Gas", "Chemical Lines"],
    startingPrice: "Contact for Quote",
  },
  {
    icon: Cpu,
    title: "BIM Modeling & Coordination",
    description: "Advanced 3D modeling and clash detection for complex mechanical systems, ensuring seamless integration with other building trades.",
    features: ["3D Modeling", "Clash Detection", "As-Built Documentation", "VDC Services", "Prefabrication"],
    startingPrice: "Contact for Quote",
  },
  {
    icon: Wind,
    title: "Commercial HVAC",
    description: "Design, installation, and maintenance of commercial heating, ventilation, and air conditioning systems for optimal climate control.",
    features: ["Rooftop Units", "Chillers", "Boilers", "VAV Systems", "Heat Pumps"],
    startingPrice: "From $25,000",
  },
  {
    icon: Droplets,
    title: "Commercial Plumbing",
    description: "Full-service commercial plumbing from new construction to tenant improvements and emergency repairs.",
    features: ["New Construction", "Repiping", "Backflow Prevention", "Grease Traps", "Water Heaters"],
    startingPrice: "From $5,000",
  },
  {
    icon: Gauge,
    title: "Building Automation",
    description: "Smart building controls and automation systems for energy efficiency, comfort, and operational visibility.",
    features: ["DDC Controls", "Energy Management", "Remote Monitoring", "Integration", "Analytics"],
    startingPrice: "From $15,000",
  },
  {
    icon: Settings,
    title: "Preventive Maintenance",
    description: "Comprehensive maintenance programs to maximize equipment life, minimize downtime, and reduce operating costs.",
    features: ["Scheduled Service", "Filter Programs", "Equipment Inspections", "Priority Response", "Reports"],
    startingPrice: "From $500/month",
  },
]

export function CommercialServicesList() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-warm mb-4">
            Comprehensive Commercial Solutions
          </h2>
          <p className="text-steel text-lg">
            End-to-end mechanical services designed for commercial and industrial facilities.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group p-8 bg-pitch border border-gold/10 rounded-2xl hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-7 h-7 text-gold" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-warm mb-3">
                {service.title}
              </h3>
              <p className="text-steel text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-steel">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-gold/10">
                <span className="text-gold font-semibold text-sm">{service.startingPrice}</span>
                <CTALink href="/contact" variant="ghost" size="sm" className="group/link">
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </CTALink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
