"use client"

import { Building2, Calendar, DollarSign, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const featuredProjects = [
  {
    title: "Regional Medical Center HVAC Upgrade",
    category: "Commercial",
    description: "Complete HVAC system replacement for a 250,000 sq ft hospital facility. Included new chillers, air handling units, and building automation system integration.",
    stats: {
      value: "$2.4M",
      duration: "8 months",
      team: "15 technicians"
    },
    highlights: [
      "Zero downtime during critical operations",
      "30% energy efficiency improvement",
      "LEED Gold certification support",
      "24/7 construction coordination"
    ],
    image: "medical"
  },
  {
    title: "Tech Campus Process Piping",
    category: "Commercial",
    description: "Industrial process piping installation for a new semiconductor manufacturing facility. High-purity systems requiring precision welding and clean room protocols.",
    stats: {
      value: "$3.8M",
      duration: "12 months",
      team: "22 pipefitters"
    },
    highlights: [
      "Class 100 clean room compliant",
      "3,500+ precision welds",
      "BIM coordination with 12 trades",
      "Ahead of schedule completion"
    ],
    image: "tech"
  },
  {
    title: "Luxury Home Comfort System",
    category: "Residential",
    description: "Complete mechanical system for a 12,000 sq ft custom home. Integrated HVAC, radiant heating, and smart home automation with zoned climate control.",
    stats: {
      value: "$185K",
      duration: "6 weeks",
      team: "4 technicians"
    },
    highlights: [
      "12-zone climate control",
      "Radiant floor heating",
      "Smart home integration",
      "Whisper-quiet operation"
    ],
    image: "luxury"
  },
]

function ProjectCard({ project, index }: { project: typeof featuredProjects[0], index: number }) {
  const isEven = index % 2 === 0
  
  return (
    <article className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
      {/* Image Placeholder */}
      <div className={`relative aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-charcoal border border-border ${!isEven ? 'lg:order-2' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8">
            <Building2 className="w-16 h-16 text-gold/30 mx-auto mb-4" />
            <span className="text-steel text-sm">Project Image</span>
          </div>
        </div>
        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-pitch text-xs font-semibold rounded-full">
          {project.category}
        </div>
      </div>
      
      {/* Content */}
      <div className={!isEven ? 'lg:order-1' : ''}>
        <h3 className="font-display font-bold text-2xl md:text-3xl text-warm mb-4">
          {project.title}
        </h3>
        
        <p className="text-steel leading-relaxed mb-6">
          {project.description}
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-charcoal rounded-lg border border-border">
            <DollarSign className="w-5 h-5 text-gold mb-2" />
            <span className="block font-display font-bold text-lg text-warm">{project.stats.value}</span>
            <span className="text-xs text-steel">Project Value</span>
          </div>
          <div className="p-4 bg-charcoal rounded-lg border border-border">
            <Calendar className="w-5 h-5 text-gold mb-2" />
            <span className="block font-display font-bold text-lg text-warm">{project.stats.duration}</span>
            <span className="text-xs text-steel">Duration</span>
          </div>
          <div className="p-4 bg-charcoal rounded-lg border border-border">
            <Users className="w-5 h-5 text-gold mb-2" />
            <span className="block font-display font-bold text-lg text-warm">{project.stats.team}</span>
            <span className="text-xs text-steel">Team Size</span>
          </div>
        </div>
        
        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-warm mb-3">Key Achievements</h4>
          <ul className="grid grid-cols-2 gap-2">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-steel">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <Link 
          href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
          className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium transition-colors group"
        >
          View Full Case Study
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  )
}

export function FeaturedProjects() {
  return (
    <section className="py-20 lg:py-28 bg-pitch">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-gold" />
            <span className="text-gold font-medium text-sm uppercase tracking-wider">Featured Case Studies</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-warm mb-6 text-balance">
            Projects That Define Our Excellence
          </h2>
          <p className="text-lg text-steel leading-relaxed text-pretty">
            Dive deep into some of our most challenging and rewarding projects, showcasing 
            our capabilities across commercial and residential sectors.
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="space-y-20 lg:space-y-28">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
