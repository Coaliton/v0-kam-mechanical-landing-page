"use client"

import { CheckCircle, Star } from "lucide-react"
import { CTALink } from "@/components/landing/cta-button"

const plans = [
  {
    name: "Basic",
    description: "For occasional service needs",
    price: "Pay Per Service",
    features: [
      "Standard response time",
      "Licensed technicians",
      "90-day warranty",
      "Upfront pricing",
    ],
    highlighted: false,
  },
  {
    name: "Comfort Club",
    description: "Most popular for homeowners",
    price: "$15/month",
    features: [
      "Priority scheduling",
      "2 tune-ups per year",
      "15% service discount",
      "No overtime charges",
      "Extended warranties",
      "Filter delivery",
    ],
    highlighted: true,
  },
  {
    name: "Premium Care",
    description: "Complete peace of mind",
    price: "$35/month",
    features: [
      "Same-day service",
      "4 tune-ups per year",
      "25% service discount",
      "No overtime charges",
      "Extended warranties",
      "Indoor air quality check",
      "Dedicated technician",
    ],
    highlighted: false,
  },
]

export function ResidentialPricing() {
  return (
    <section className="py-20 bg-pitch">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-4">
            Maintenance Plans
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-warm mb-4">
            Choose Your Comfort Level
          </h2>
          <p className="text-steel text-lg">
            Save money and prevent breakdowns with our maintenance plans.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted 
                  ? 'bg-gold text-pitch border-2 border-gold' 
                  : 'bg-charcoal border border-gold/20 hover:border-gold/40'
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1 bg-pitch text-gold text-sm font-bold rounded-full">
                  <Star className="w-4 h-4 fill-gold" />
                  Most Popular
                </div>
              )}

              {/* Plan Info */}
              <div className="text-center mb-8">
                <h3 className={`font-display text-2xl font-bold mb-2 ${plan.highlighted ? 'text-pitch' : 'text-warm'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? 'text-pitch/70' : 'text-steel'}`}>
                  {plan.description}
                </p>
                <p className={`text-3xl font-bold ${plan.highlighted ? 'text-pitch' : 'text-gold'}`}>
                  {plan.price}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? 'text-pitch' : 'text-gold'}`} />
                    <span className={plan.highlighted ? 'text-pitch' : 'text-steel'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <CTALink 
                href="/contact" 
                variant={plan.highlighted ? "outline" : "solid"} 
                size="md"
                className={`w-full ${plan.highlighted ? 'border-pitch text-pitch hover:bg-pitch hover:text-gold' : ''}`}
              >
                Get Started
              </CTALink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
