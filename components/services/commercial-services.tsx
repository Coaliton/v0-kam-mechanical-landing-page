"use client"

import { 
  Pipette, 
  Monitor, 
  Fan, 
  Thermometer,
  Cog,
  FileCheck,
  Check,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { CTAButton } from "@/components/landing/cta-button"

const services = [
  {
    icon: Pipette,
    title: "Industrial Piping Systems",
    description: "Comprehensive piping solutions for manufacturing facilities, processing plants, and commercial buildings.",
    features: [
      "Process piping for manufacturing",
      "High-pressure steam systems",
      "Chilled water distribution",
      "Compressed air systems",
      "Chemical processing lines",
      "Welded & threaded installations"
    ],
    timeline: "2-8 weeks depending on scope"
  },
  {
    icon: Monitor,
    title: "BIM Modeling & Coordination",
    description: "Advanced 3D modeling and MEP coordination to prevent costly on-site conflicts and delays.",
    features: [
      "3D clash detection & resolution",
      "MEP coordination services",
      "As-built documentation",
      "Shop drawing preparation",
      "Prefabrication planning",
      "Virtual reality walkthroughs"
    ],
    timeline: "1-4 weeks depending on project size"
  },
  {
    icon: Fan,
    title: "Commercial HVAC Systems",
    description: "Complete heating, ventilation, and air conditioning solutions for buildings of all sizes.",
    features: [
      "Rooftop unit installations",
      "VAV system design & install",
      "Building automation integration",
      "Chiller plant construction",
      "Air handling unit installations",
      "Ductwork fabrication & install"
    ],
    timeline: "4-16 weeks depending on scope"
  },
  {
    icon: Thermometer,
    title: "Process Heating & Cooling",
    description: "Specialized temperature control systems for industrial processes and manufacturing.",
    features: [
      "Heat exchanger systems",
      "Cooling tower installations",
      "Glycol heating systems",
      "Steam-to-water converters",
      "Thermal oil systems",
      "Process temperature controls"
    ],
    timeline: "3-10 weeks depending on complexity"
  },
  {
    icon: Cog,
    title: "Mechanical Equipment Installation",
    description: "Expert installation and startup of all types of mechanical equipment and systems.",
    features: [
      "Pump station installations",
      "Boiler system installations",
      "Equipment rigging & setting",
      "Vibration isolation systems",
      "Seismic restraint systems",
      "Startup & commissioning"
    ],
    timeline: "1-6 weeks depending on equipment"
  },
  {
    icon: FileCheck,
    title: "Design-Build Services",
    description: "End-to-end project delivery from initial concept through final commissioning.",
    features: [
      "Conceptual design assistance",
      "Value engineering options",
      "Permit & code compliance",
      "Project management",
      "Quality assurance program",
      "Warranty & service support"
    ],
    timeline: "Varies by project scope"
  },
]

function ServiceCard({ 
  icon: Icon, 
  title, 
  description,
  features, 
  timeline 
}: {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  timeline: string
}) {
  return (
    <article className="group bg-charcoal border border-border rounded-xl overflow-hidden hover-gold-border transition-all duration-300">
      {/* Header */}
      <div className="p-6 lg:p-8 border-b border-border">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
            <Icon className="w-7 h-7 text-gold" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-xl text-warm mb-2">
              {title}
            </h3>
            <p className="text-steel text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div className="p-6 lg:p-8 border-b border-border">
        <h4 className="text-xs font-semibold text-steel uppercase tracking-wider mb-4">
          What&apos;s Included
        </h4>
        <ul className="grid grid-cols-1 gap-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-warm/80">
              <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Footer */}
      <div className="p-6 lg:p-8 bg-pitch/50">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-xs text-steel">
            Timeline: {timeline}
          </span>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 py-2 px-4 bg-gold text-pitch font-semibold rounded-lg hover:bg-gold-light transition-colors group/link"
          >
            Request a Bid
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export function CommercialServices() {
  return (
    <section id="commercial" className="py-20 lg:py-28 bg-pitch">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-gold" />
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Commercial Division</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-warm mb-6 text-balance">
            Industrial-Scale Solutions
          </h2>
          <p className="text-lg text-steel leading-relaxed text-pretty">
            Our commercial division specializes in complex mechanical systems for manufacturing facilities, 
            data centers, hospitals, and multi-story buildings. We bring precision engineering and 
            decades of experience to every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-border">
          <p className="text-steel text-center sm:text-left">
            Have a commercial project in mind?
          </p>
          <CTAButton variant="solid" size="md">
            Request Commercial Bid
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
