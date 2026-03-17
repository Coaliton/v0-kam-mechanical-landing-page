"use client"

import { 
  DollarSign, 
  Heart, 
  GraduationCap, 
  Clock, 
  Truck, 
  Shield,
  Calendar,
  TrendingUp
} from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Industry-leading wages with regular performance reviews and annual increases.",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Comprehensive medical, dental, and vision coverage for you and your family.",
  },
  {
    icon: GraduationCap,
    title: "Training & Certification",
    description: "Paid training, apprenticeship programs, and certification sponsorship.",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Consistent schedules, paid time off, and respect for your personal time.",
  },
  {
    icon: Truck,
    title: "Company Vehicles",
    description: "Take-home vehicles for field technicians with fuel cards included.",
  },
  {
    icon: Shield,
    title: "401(k) Matching",
    description: "Generous retirement matching to help you build your future.",
  },
  {
    icon: Calendar,
    title: "Paid Holidays",
    description: "10 paid holidays plus additional PTO that increases with tenure.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear advancement paths from apprentice to lead to management.",
  },
]

export function CareersBenefits() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-4">
            Why Join Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-warm mb-4">
            Benefits That Matter
          </h2>
          <p className="text-steel text-lg">
            We invest in our people because great teams build great projects.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="group p-6 bg-pitch border border-gold/10 rounded-2xl hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold text-warm mb-2">
                {benefit.title}
              </h3>
              <p className="text-steel text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
