"use client"

import { 
  Building, 
  Factory, 
  Stethoscope, 
  GraduationCap, 
  ShoppingBag, 
  Warehouse
} from "lucide-react"

const industries = [
  {
    icon: Building,
    title: "Office Buildings",
    description: "Multi-story office complexes, corporate campuses, and mixed-use developments.",
  },
  {
    icon: Factory,
    title: "Industrial Facilities",
    description: "Manufacturing plants, processing facilities, and distribution centers.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Hospitals, clinics, laboratories, and medical office buildings.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Schools, universities, research facilities, and athletic complexes.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description: "Shopping centers, standalone retail, and restaurant facilities.",
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "Cold storage, fulfillment centers, and logistics facilities.",
  },
]

export function CommercialIndustries() {
  return (
    <section className="py-20 bg-pitch">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-warm mb-4">
            Expertise Across Sectors
          </h2>
          <p className="text-steel text-lg">
            We bring specialized knowledge and experience to every industry we serve.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry) => (
            <div 
              key={industry.title}
              className="group p-6 bg-charcoal border border-gold/10 rounded-2xl hover:border-gold/30 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <industry.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold text-warm mb-2">
                {industry.title}
              </h3>
              <p className="text-steel text-xs leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
