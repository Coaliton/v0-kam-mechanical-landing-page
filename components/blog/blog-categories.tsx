"use client"

import { useState } from "react"
import { Thermometer, Home, Factory, Wrench, Lightbulb, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All Posts", icon: null },
  { id: "hvac-tips", label: "HVAC Tips", icon: Thermometer },
  { id: "residential", label: "Home Comfort", icon: Home },
  { id: "commercial", label: "Commercial", icon: Factory },
  { id: "maintenance", label: "Maintenance", icon: Wrench },
  { id: "energy", label: "Energy Savings", icon: Lightbulb },
  { id: "safety", label: "Safety", icon: Shield },
]

export function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <section className="py-8 bg-pitch border-b border-graphite sticky top-20 z-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                  activeCategory === category.id
                    ? "bg-gold text-pitch"
                    : "bg-charcoal text-steel hover:text-warm hover:bg-graphite"
                )}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {category.label}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
