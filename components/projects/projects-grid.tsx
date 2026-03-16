"use client"

import { Building2, Home, ArrowRight } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Data Center Cooling System",
    category: "Commercial",
    type: "HVAC",
    value: "$1.2M",
    location: "Austin, TX"
  },
  {
    title: "Apartment Complex Repiping",
    category: "Commercial",
    type: "Plumbing",
    value: "$420K",
    location: "Dallas, TX"
  },
  {
    title: "Food Processing Plant Piping",
    category: "Commercial",
    type: "Industrial Piping",
    value: "$890K",
    location: "Houston, TX"
  },
  {
    title: "Office Building BIM Coordination",
    category: "Commercial",
    type: "BIM Services",
    value: "$65K",
    location: "San Antonio, TX"
  },
  {
    title: "Whole Home HVAC Replacement",
    category: "Residential",
    type: "HVAC",
    value: "$18K",
    location: "Plano, TX"
  },
  {
    title: "Historic Home Repiping",
    category: "Residential",
    type: "Plumbing",
    value: "$12K",
    location: "Fort Worth, TX"
  },
  {
    title: "Smart Home Climate Integration",
    category: "Residential",
    type: "HVAC",
    value: "$25K",
    location: "Frisco, TX"
  },
  {
    title: "Emergency Boiler Replacement",
    category: "Commercial",
    type: "HVAC",
    value: "$340K",
    location: "Arlington, TX"
  },
  {
    title: "School District HVAC Upgrade",
    category: "Commercial",
    type: "HVAC",
    value: "$2.1M",
    location: "Irving, TX"
  },
  {
    title: "Custom Pool House Mechanical",
    category: "Residential",
    type: "HVAC",
    value: "$35K",
    location: "Highland Park, TX"
  },
  {
    title: "Warehouse Ventilation System",
    category: "Commercial",
    type: "HVAC",
    value: "$180K",
    location: "Garland, TX"
  },
  {
    title: "Multi-Zone Ductless Installation",
    category: "Residential",
    type: "HVAC",
    value: "$22K",
    location: "McKinney, TX"
  },
]

function ProjectTile({ project }: { project: typeof projects[0] }) {
  const isCommercial = project.category === "Commercial"
  
  return (
    <article className="group bg-charcoal border border-border rounded-xl p-6 hover-gold-border transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
          isCommercial 
            ? "bg-steel/20 text-steel" 
            : "bg-gold/10 text-gold"
        }`}>
          {isCommercial ? <Building2 className="w-3 h-3" /> : <Home className="w-3 h-3" />}
          {project.category}
        </div>
        <span className="text-xs text-steel">{project.type}</span>
      </div>
      
      {/* Title */}
      <h3 className="font-display font-semibold text-lg text-warm mb-3 group-hover:text-gold transition-colors">
        {project.title}
      </h3>
      
      {/* Details */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-steel">{project.location}</span>
        <span className="font-display font-bold text-gold">{project.value}</span>
      </div>
      
      {/* Hover Link */}
      <div className="mt-4 pt-4 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity">
        <Link 
          href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
          className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
        >
          View Details
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </article>
  )
}

export function ProjectsGrid() {
  return (
    <section className="py-20 lg:py-28 bg-charcoal">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-gold" />
            <span className="text-gold font-medium text-sm uppercase tracking-wider">More Projects</span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-warm mb-6 text-balance">
            Recent Completions
          </h2>
          <p className="text-lg text-steel leading-relaxed text-pretty">
            A selection of our recent commercial and residential projects across Texas.
          </p>
        </div>
        
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectTile key={index} project={project} />
          ))}
        </div>
        
        {/* Load More */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal border border-border rounded-full text-warm hover:border-gold/50 hover:text-gold transition-all duration-300">
            Load More Projects
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
