"use client"

import { Award, Shield, Clock, CheckCircle } from "lucide-react"
import { CTAButton } from "./cta-button"

const guarantees = [
  {
    icon: Shield,
    title: "100% Code Compliance",
    description: "Every project meets or exceeds local and federal building codes"
  },
  {
    icon: Clock,
    title: "2-Year Workmanship Warranty",
    description: "Full coverage on labor and installation for peace of mind"
  },
  {
    icon: CheckCircle,
    title: "On-Time Commissioning",
    description: "Project deadlines met or your next service is on us"
  },
]

export function GuaranteeSection() {
  return (
    <section id="safety" className="py-20 lg:py-32 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--metallic-gold) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Certificate Container */}
        <div className="certificate-border bg-pitch rounded-2xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto">
          {/* Seal */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center">
              <Award className="w-12 h-12 text-gold" />
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-warm mb-4">
              The KAM Performance Guarantee
            </h2>
            <p className="text-lg text-steel max-w-2xl mx-auto">
              Our commitment to excellence is backed by guarantees that put your satisfaction first.
            </p>
          </div>

          {/* Guarantee Items */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {guarantees.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display font-semibold text-lg text-warm mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-steel leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <CTAButton variant="solid" size="lg">
              Get Your Free Estimate
            </CTAButton>
          </div>

          {/* Certificate Footer */}
          <div className="mt-12 pt-8 border-t border-gold/20 text-center">
            <p className="text-xs text-steel uppercase tracking-wider">
              Licensed &bull; Bonded &bull; Insured &bull; Est. 2009
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
