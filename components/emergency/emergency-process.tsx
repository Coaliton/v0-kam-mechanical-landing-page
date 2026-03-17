"use client"

import { Phone, MapPin, Wrench, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Call Our Hotline",
    description: "Reach our 24/7 emergency dispatch center. Our operators will gather essential information about your situation.",
  },
  {
    icon: MapPin,
    step: "02",
    title: "Rapid Dispatch",
    description: "We dispatch the nearest qualified technician to your location with a fully-stocked service vehicle.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Expert Repair",
    description: "Our licensed technician diagnoses and repairs the issue. Most emergencies are resolved in a single visit.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "System Restored",
    description: "Your system is back online and we provide recommendations to prevent future emergencies.",
  },
]

export function EmergencyProcess() {
  return (
    <section className="py-20 bg-pitch">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-warm mb-4">
            From Call to Resolution in Hours
          </h2>
          <p className="text-steel text-lg">
            Our streamlined emergency response process ensures fast, efficient service when you need it most.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0 -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="relative group"
              >
                {/* Step Card */}
                <div className="relative z-10 p-6 bg-charcoal border border-gold/20 rounded-2xl hover:border-gold/40 transition-all duration-300 hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                    <span className="text-pitch font-bold text-sm">{step.step}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <step.icon className="w-7 h-7 text-gold" />
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-warm mb-2">
                    {step.title}
                  </h3>
                  <p className="text-steel text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-0.5 h-8 bg-gold/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border border-gold/30 rounded-2xl text-center">
          <h3 className="font-display text-2xl font-bold text-warm mb-3">
            Our Emergency Service Guarantee
          </h3>
          <p className="text-steel max-w-2xl mx-auto mb-6">
            If we cannot reach your location within our promised response time, your emergency service call fee is waived. 
            That is our commitment to you.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-gold">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">60-Minute Response</span>
            </div>
            <div className="flex items-center gap-2 text-gold">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Licensed Technicians</span>
            </div>
            <div className="flex items-center gap-2 text-gold">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Upfront Pricing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
