"use client"

import { Linkedin, Mail } from "lucide-react"

const leadership = [
  {
    name: "Michael Anderson",
    role: "Founder & CEO",
    bio: "30+ years in mechanical construction. Started as a pipefitter apprentice and built KAM into what it is today.",
    specialties: ["Strategic Planning", "Business Development", "Industry Relations"]
  },
  {
    name: "Sarah Chen",
    role: "VP of Operations",
    bio: "Former project manager at a Fortune 500 construction firm. Oversees all commercial and residential operations.",
    specialties: ["Project Management", "Process Optimization", "Quality Control"]
  },
  {
    name: "David Martinez",
    role: "Director of Commercial Services",
    bio: "20+ years specializing in industrial piping and HVAC systems. PE licensed in multiple states.",
    specialties: ["Industrial Piping", "HVAC Systems", "BIM Coordination"]
  },
  {
    name: "Jennifer Thompson",
    role: "Director of Residential Services",
    bio: "15+ years in residential HVAC. Passionate about bringing commercial-grade quality to homeowners.",
    specialties: ["Residential HVAC", "Customer Experience", "Team Training"]
  },
  {
    name: "Robert Williams",
    role: "Safety Director",
    bio: "OSHA certified with 25+ years focused on construction safety. Maintains our perfect safety record.",
    specialties: ["Safety Programs", "OSHA Compliance", "Risk Management"]
  },
  {
    name: "Lisa Park",
    role: "BIM Manager",
    bio: "Expert in 3D modeling and MEP coordination. Leads our technology initiatives.",
    specialties: ["BIM Modeling", "Clash Detection", "Virtual Reality"]
  },
]

export function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-px bg-gold" />
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Leadership Team</span>
            <span className="w-12 h-px bg-gold" />
          </div>
          
          <h2 className="font-display font-bold text-3xl md:text-4xl text-warm mb-6 text-balance">
            Meet the People Behind KAM
          </h2>
          
          <p className="text-lg text-steel leading-relaxed text-pretty">
            Our leadership team brings together decades of experience in mechanical construction, 
            project management, and customer service.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {leadership.map((member, index) => (
            <article 
              key={index}
              className="group bg-pitch border border-border rounded-xl overflow-hidden hover-gold-border transition-all duration-300"
            >
              {/* Avatar Placeholder */}
              <div className="h-48 bg-gradient-to-br from-charcoal to-pitch flex items-center justify-center border-b border-border">
                <div className="w-24 h-24 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-gold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-xl text-warm">
                  {member.name}
                </h3>
                <span className="text-gold text-sm font-medium">{member.role}</span>
                
                <p className="text-steel text-sm mt-4 leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Specialties */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.specialties.map((specialty, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-charcoal border border-border rounded text-xs text-steel"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
                  <button 
                    className="p-2 bg-charcoal rounded-lg hover:bg-gold/10 hover:text-gold transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                  <button 
                    className="p-2 bg-charcoal rounded-lg hover:bg-gold/10 hover:text-gold transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Team Stats */}
        <div className="mt-16 p-8 bg-pitch border border-border rounded-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block font-display font-bold text-3xl text-gold">50+</span>
              <span className="text-steel">Total Team Members</span>
            </div>
            <div>
              <span className="block font-display font-bold text-3xl text-gold">20+</span>
              <span className="text-steel">Licensed Journeymen</span>
            </div>
            <div>
              <span className="block font-display font-bold text-3xl text-gold">15+</span>
              <span className="text-steel">HVAC Technicians</span>
            </div>
            <div>
              <span className="block font-display font-bold text-3xl text-gold">10+</span>
              <span className="text-steel">Project Managers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
