"use client"

import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Flame, 
  AlertTriangle, 
  Wrench,
  Building2,
  Home
} from "lucide-react"

const emergencyServices = [
  {
    icon: Thermometer,
    title: "AC System Failure",
    description: "Complete cooling system breakdowns, refrigerant leaks, compressor failures, and frozen evaporator coils.",
    urgency: "critical",
    response: "30-60 min",
  },
  {
    icon: Flame,
    title: "Heating Emergencies",
    description: "Furnace failures, no heat situations, gas leaks, and carbon monoxide detector alerts.",
    urgency: "critical",
    response: "30-60 min",
  },
  {
    icon: Droplets,
    title: "Plumbing Emergencies",
    description: "Burst pipes, major leaks, sewer backups, water heater failures, and flooding situations.",
    urgency: "critical",
    response: "30-60 min",
  },
  {
    icon: Wind,
    title: "Ventilation Issues",
    description: "Complete ventilation failure, dangerous air quality, exhaust system breakdowns.",
    urgency: "high",
    response: "1-2 hours",
  },
  {
    icon: AlertTriangle,
    title: "Gas Line Issues",
    description: "Gas smell detection, pilot light problems, gas valve failures. Call 911 first if you smell gas.",
    urgency: "critical",
    response: "Immediate",
  },
  {
    icon: Wrench,
    title: "Industrial Equipment",
    description: "Process cooling failures, chiller breakdowns, boiler emergencies, and critical system failures.",
    urgency: "high",
    response: "1-2 hours",
  },
]

export function EmergencyServices() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-4">
            Emergency Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-warm mb-4">
            We Handle All Emergency Situations
          </h2>
          <p className="text-steel text-lg">
            From residential comfort emergencies to critical industrial system failures, 
            our team is equipped to handle any situation.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {emergencyServices.map((service) => (
            <div 
              key={service.title}
              className="group p-6 bg-pitch border border-gold/10 rounded-2xl hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  service.urgency === 'critical' ? 'bg-red-600/20' : 'bg-gold/10'
                }`}>
                  <service.icon className={`w-6 h-6 ${
                    service.urgency === 'critical' ? 'text-red-500' : 'text-gold'
                  }`} />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  service.urgency === 'critical' 
                    ? 'bg-red-600/20 text-red-400' 
                    : 'bg-gold/20 text-gold'
                }`}>
                  {service.response}
                </span>
              </div>
              
              <h3 className="font-display text-xl font-semibold text-warm mb-2">
                {service.title}
              </h3>
              <p className="text-steel text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Service Types */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-pitch border border-gold/20 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center">
                <Home className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-warm">Residential Emergency</h3>
                <p className="text-steel text-sm">For homes and apartments</p>
              </div>
            </div>
            <ul className="space-y-3">
              {["No heat in winter", "No AC in summer", "Water heater failure", "Pipe bursts", "Gas smell"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-steel">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-pitch border border-gold/20 rounded-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-warm">Commercial Emergency</h3>
                <p className="text-steel text-sm">For businesses and facilities</p>
              </div>
            </div>
            <ul className="space-y-3">
              {["HVAC system failure", "Chiller breakdown", "Process cooling failure", "Building automation issues", "Fire suppression problems"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-steel">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
