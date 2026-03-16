"use client"

import { Award, ShieldCheck, BadgeCheck, FileCheck } from "lucide-react"

const certifications = [
  {
    icon: ShieldCheck,
    name: "OSHA 30-Hour Certified",
    description: "All field supervisors complete 30-hour OSHA construction safety training."
  },
  {
    icon: BadgeCheck,
    name: "EPA 608 Certified",
    description: "Universal certification for handling refrigerants safely and responsibly."
  },
  {
    icon: FileCheck,
    name: "State Licensed Contractor",
    description: "Fully licensed mechanical contractor in all states where we operate."
  },
  {
    icon: Award,
    name: "NATE Certified Technicians",
    description: "North American Technician Excellence certification for HVAC professionals."
  },
]

const affiliations = [
  "Mechanical Contractors Association of America (MCAA)",
  "United Association of Plumbers and Pipefitters",
  "Air Conditioning Contractors of America (ACCA)",
  "Building Information Modeling Institute",
  "Local Chamber of Commerce",
  "Better Business Bureau (A+ Rating)",
]

export function Certifications() {
  return (
    <section className="py-20 lg:py-28 bg-pitch">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-gold" />
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Certifications & Affiliations</span>
            <span className="w-12 h-px bg-gold" />
          </div>
          
          <h2 className="font-display font-bold text-3xl md:text-4xl text-warm mb-6 text-balance">
            Credentials You Can Trust
          </h2>
          
          <p className="text-lg text-steel leading-relaxed text-pretty">
            We maintain the highest industry standards through continuous training, 
            certification, and active participation in professional organizations.
          </p>
        </div>
        
        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="p-6 bg-charcoal border border-border rounded-xl text-center hover-gold-border transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4">
                <cert.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display font-semibold text-warm mb-2">{cert.name}</h3>
              <p className="text-sm text-steel leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
        
        {/* Affiliations */}
        <div className="certificate-border rounded-xl bg-charcoal p-8 lg:p-12">
          <h3 className="font-display font-semibold text-xl text-warm text-center mb-8">
            Professional Affiliations
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {affiliations.map((affiliation, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 bg-pitch/50 rounded-lg"
              >
                <BadgeCheck className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-warm text-sm">{affiliation}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
