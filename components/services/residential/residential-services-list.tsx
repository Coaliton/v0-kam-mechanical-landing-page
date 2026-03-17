"use client"

import { 
  Thermometer, 
  Flame, 
  Droplets, 
  Wind, 
  Wrench,
  Sparkles,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { CTALink } from "@/components/landing/cta-button"

const services = [
  {
    icon: Thermometer,
    title: "AC Installation & Repair",
    description: "Complete air conditioning services from new installations to repairs and maintenance. We service all major brands.",
    features: ["New AC Installation", "AC Repair", "Tune-Ups", "Refrigerant Recharge", "Ductwork"],
    startingPrice: "From $150",
    popular: true,
  },
  {
    icon: Flame,
    title: "Heating Systems",
    description: "Keep warm all winter with our furnace, heat pump, and boiler services including emergency repairs.",
    features: ["Furnace Repair", "Heat Pumps", "Boilers", "Radiant Heating", "Thermostats"],
    startingPrice: "From $150",
    popular: false,
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description: "From leaky faucets to whole-home repiping, our licensed plumbers handle it all.",
    features: ["Leak Repair", "Drain Cleaning", "Repiping", "Fixture Install", "Sewer Lines"],
    startingPrice: "From $99",
    popular: false,
  },
  {
    icon: Wind,
    title: "Indoor Air Quality",
    description: "Breathe easier with our air quality solutions including filtration, humidification, and UV purification.",
    features: ["Air Purifiers", "Humidifiers", "UV Lights", "Duct Cleaning", "Ventilation"],
    startingPrice: "From $299",
    popular: false,
  },
  {
    icon: Wrench,
    title: "Water Heaters",
    description: "Traditional and tankless water heater installation, repair, and maintenance services.",
    features: ["Tank Water Heaters", "Tankless Systems", "Repairs", "Maintenance", "Expansion Tanks"],
    startingPrice: "From $199",
    popular: true,
  },
  {
    icon: Sparkles,
    title: "Maintenance Plans",
    description: "Preventive maintenance programs to keep your systems running efficiently and extend equipment life.",
    features: ["Annual Tune-Ups", "Priority Service", "Discounts", "No OT Charges", "Filter Delivery"],
    startingPrice: "From $15/month",
    popular: false,
  },
]

export function ResidentialServicesList() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-warm mb-4">
            Complete Home Comfort Solutions
          </h2>
          <p className="text-steel text-lg">
            Professional residential services with upfront pricing and satisfaction guaranteed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group relative p-8 bg-pitch border border-gold/10 rounded-2xl hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 right-6 px-3 py-1 bg-gold text-pitch text-xs font-bold rounded-full">
                  Popular
                </div>
              )}

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
                <CTALink href="/schedule" variant="ghost" size="sm" className="group/link">
                  Book Now
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
