"use client"

import { MapPin, Clock, DollarSign, ArrowRight } from "lucide-react"
import { CTALink } from "@/components/landing/cta-button"

const openings = [
  {
    id: 1,
    title: "HVAC Service Technician",
    department: "Residential Services",
    location: "Multiple Locations",
    type: "Full-time",
    salary: "$55,000 - $85,000",
    description: "Service and repair residential HVAC systems. EPA certification required.",
    requirements: ["EPA 608 Certified", "3+ years experience", "Valid driver's license", "Customer service skills"],
    urgent: true,
  },
  {
    id: 2,
    title: "Commercial Pipefitter",
    department: "Commercial Division",
    location: "Metro Area",
    type: "Full-time",
    salary: "$60,000 - $90,000",
    description: "Install and maintain commercial and industrial piping systems.",
    requirements: ["Journeyman license", "5+ years experience", "Blueprint reading", "Welding certification preferred"],
    urgent: false,
  },
  {
    id: 3,
    title: "BIM Modeler",
    department: "Engineering",
    location: "Headquarters",
    type: "Full-time",
    salary: "$65,000 - $95,000",
    description: "Create detailed 3D models and coordinate MEP systems using Revit.",
    requirements: ["Revit proficiency", "AutoCAD experience", "Mechanical systems knowledge", "Bachelor's preferred"],
    urgent: false,
  },
  {
    id: 4,
    title: "Plumbing Apprentice",
    department: "Residential Services",
    location: "Multiple Locations",
    type: "Full-time",
    salary: "$35,000 - $45,000",
    description: "Learn the trade while earning. Paid training and certification support.",
    requirements: ["High school diploma", "Mechanical aptitude", "Willingness to learn", "Valid driver's license"],
    urgent: true,
  },
  {
    id: 5,
    title: "Project Manager",
    department: "Commercial Division",
    location: "Headquarters",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    description: "Manage commercial mechanical construction projects from bid to completion.",
    requirements: ["PMP preferred", "7+ years mechanical", "Budget management", "Team leadership"],
    urgent: false,
  },
  {
    id: 6,
    title: "Dispatcher/Coordinator",
    department: "Operations",
    location: "Headquarters",
    type: "Full-time",
    salary: "$45,000 - $55,000",
    description: "Coordinate service calls, schedule technicians, and ensure customer satisfaction.",
    requirements: ["Dispatch experience", "ServiceTitan preferred", "Multi-tasking ability", "Customer service"],
    urgent: false,
  },
]

export function CareersOpenings() {
  return (
    <section id="openings" className="py-20 bg-pitch scroll-mt-20">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-4">
            Open Positions
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-warm mb-4">
            Current Opportunities
          </h2>
          <p className="text-steel text-lg">
            Find your next career move. We are always looking for talented individuals.
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {openings.map((job) => (
            <div 
              key={job.id}
              className="group p-6 bg-charcoal border border-gold/10 rounded-2xl hover:border-gold/30 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Job Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-xl font-semibold text-warm">
                      {job.title}
                    </h3>
                    {job.urgent && (
                      <span className="px-2 py-1 bg-red-600/20 text-red-400 text-xs font-semibold rounded-full">
                        Urgent
                      </span>
                    )}
                  </div>
                  <p className="text-steel text-sm mb-3">{job.description}</p>
                  
                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-steel">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gold" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-gold" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-gold" />
                      {job.salary}
                    </span>
                  </div>
                </div>

                {/* Apply Button */}
                <CTALink href="/contact" variant="outline" size="md" className="group/btn shrink-0">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </CTALink>
              </div>
            </div>
          ))}
        </div>

        {/* Don't See Your Role */}
        <div className="text-center mt-12">
          <p className="text-steel mb-4">
            Do not see the right role? We are always interested in hearing from talented professionals.
          </p>
          <CTALink href="/contact" variant="ghost" size="md">
            Submit General Application
          </CTALink>
        </div>
      </div>
    </section>
  )
}
