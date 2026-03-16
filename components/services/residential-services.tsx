"use client"

import { 
  Snowflake, 
  Droplets, 
  CalendarCheck,
  Flame,
  Wind,
  Wrench,
  Check,
  ArrowRight,
  BadgeCheck,
  Clock,
  Shield
} from "lucide-react"
import Link from "next/link"
import { CTAButton } from "@/components/landing/cta-button"

const services = [
  {
    icon: Snowflake,
    title: "AC Replacement & Installation",
    description: "Energy-efficient air conditioning systems installed by certified technicians with same-day service available.",
    features: [
      "Free in-home consultation",
      "Energy-efficient unit options",
      "Same-day installation available",
      "10-year parts & labor warranty",
      "Rebate assistance",
      "Financing options available"
    ],
    priceRange: "$4,500 - $12,000",
    guarantee: "Fixed Price Guarantee",
    popular: true
  },
  {
    icon: Droplets,
    title: "Home Repiping Services",
    description: "Complete whole-home repiping with minimal wall damage using modern PEX or copper materials.",
    features: [
      "Free pipe inspection",
      "PEX & copper options",
      "Minimal wall damage technique",
      "Lifetime pipe warranty",
      "Permits & inspections included",
      "One-week completion typical"
    ],
    priceRange: "$3,500 - $15,000",
    guarantee: "Fixed Price Guarantee",
    popular: false
  },
  {
    icon: Flame,
    title: "Heating System Services",
    description: "Furnace repair, replacement, and maintenance to keep your home warm and safe all winter.",
    features: [
      "Furnace repair & replacement",
      "Heat pump installations",
      "Ductless mini-split systems",
      "Carbon monoxide safety check",
      "Energy efficiency upgrades",
      "Emergency heat service"
    ],
    priceRange: "$3,000 - $10,000",
    guarantee: "Fixed Price Guarantee",
    popular: false
  },
  {
    icon: Wind,
    title: "Ductwork & Ventilation",
    description: "Improve air quality and system efficiency with professional ductwork services.",
    features: [
      "Duct cleaning & sanitizing",
      "Ductwork repair & sealing",
      "New duct installations",
      "Ventilation improvements",
      "Air quality testing",
      "Energy audits available"
    ],
    priceRange: "$500 - $5,000",
    guarantee: "Satisfaction Guarantee",
    popular: false
  },
  {
    icon: Wrench,
    title: "Emergency Repairs",
    description: "24/7 emergency service for urgent HVAC and plumbing issues. We're always ready to help.",
    features: [
      "24/7 emergency hotline",
      "2-hour response guarantee",
      "No overtime charges",
      "Fully stocked service vans",
      "Licensed & insured technicians",
      "Upfront pricing always"
    ],
    priceRange: "Starting at $149",
    guarantee: "Response Time Guarantee",
    popular: false
  },
  {
    icon: CalendarCheck,
    title: "Maintenance Plans",
    description: "Protect your investment with our comprehensive maintenance plans and priority service.",
    features: [
      "Bi-annual tune-ups",
      "Priority emergency scheduling",
      "15% discount on all parts",
      "No trip charges",
      "Extended equipment life",
      "Transferable to new owner"
    ],
    priceRange: "$199/year",
    guarantee: "Peace of Mind Guarantee",
    popular: true
  },
]

function ServiceCard({ 
  icon: Icon, 
  title, 
  description,
  features, 
  priceRange,
  guarantee,
  popular
}: {
  icon: React.ElementType
  title: string
  description: string
  features: string[]
  priceRange: string
  guarantee: string
  popular: boolean
}) {
  return (
    <article className={`group relative bg-charcoal border rounded-xl overflow-hidden hover-gold-border transition-all duration-300 ${popular ? 'border-gold/50 ring-1 ring-gold/20' : 'border-border'}`}>
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-0 right-0 bg-gold text-pitch text-xs font-semibold px-3 py-1 rounded-bl-lg">
          Most Popular
        </div>
      )}
      
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
        
        {/* Guarantee Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/10 border border-gold/30 rounded-full">
          <BadgeCheck className="w-4 h-4 text-gold" />
          <span className="text-xs font-medium text-gold">{guarantee}</span>
        </div>
      </div>
      
      {/* Features */}
      <div className="p-6 lg:p-8 border-b border-border">
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
          <div>
            <span className="block font-display font-bold text-lg text-gold">
              {priceRange}
            </span>
            <span className="text-xs text-steel">
              Transparent pricing, no surprises
            </span>
          </div>
          <Link 
            href="/contact?service=residential"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors group/link"
          >
            Schedule Service
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export function ResidentialServices() {
  return (
    <section id="residential" className="py-20 lg:py-28 bg-charcoal">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-gold" />
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Residential Division</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-warm mb-6 text-balance">
            Home Comfort Solutions
          </h2>
          <p className="text-lg text-steel leading-relaxed text-pretty">
            Your home deserves the same level of expertise we bring to our commercial projects. 
            We provide transparent pricing, quality workmanship, and guarantees you can trust.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <div className="flex items-center gap-3 p-4 bg-pitch/50 rounded-lg border border-border">
            <Shield className="w-8 h-8 text-gold flex-shrink-0" />
            <div>
              <span className="block text-warm font-medium text-sm">Licensed & Insured</span>
              <span className="text-xs text-steel">Full coverage protection</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-pitch/50 rounded-lg border border-border">
            <Clock className="w-8 h-8 text-gold flex-shrink-0" />
            <div>
              <span className="block text-warm font-medium text-sm">Same-Day Service</span>
              <span className="text-xs text-steel">When you need us most</span>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-pitch/50 rounded-lg border border-border">
            <BadgeCheck className="w-8 h-8 text-gold flex-shrink-0" />
            <div>
              <span className="block text-warm font-medium text-sm">Fixed Price Guarantee</span>
              <span className="text-xs text-steel">No surprise charges</span>
            </div>
          </div>
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
            Ready to improve your home comfort?
          </p>
          <CTAButton variant="solid" size="md">
            Schedule Free Consultation
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
