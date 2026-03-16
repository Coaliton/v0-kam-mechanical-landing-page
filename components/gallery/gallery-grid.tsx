"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["All", "Commercial", "Residential", "Industrial", "Emergency"]

const galleryItems = [
  { id: 1, title: "Rooftop Unit Installation", category: "Commercial", size: "large" },
  { id: 2, title: "Home AC Replacement", category: "Residential", size: "small" },
  { id: 3, title: "Ductwork Renovation", category: "Residential", size: "small" },
  { id: 4, title: "Chiller System Upgrade", category: "Industrial", size: "medium" },
  { id: 5, title: "Emergency Repair", category: "Emergency", size: "small" },
  { id: 6, title: "Multi-Zone System", category: "Commercial", size: "medium" },
  { id: 7, title: "Heat Pump Installation", category: "Residential", size: "small" },
  { id: 8, title: "Boiler Replacement", category: "Industrial", size: "large" },
  { id: 9, title: "Smart Thermostat Setup", category: "Residential", size: "small" },
  { id: 10, title: "Commercial Ventilation", category: "Commercial", size: "small" },
  { id: 11, title: "Pipe Insulation", category: "Industrial", size: "medium" },
  { id: 12, title: "24/7 Repair Service", category: "Emergency", size: "small" },
]

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const nextImage = () => setLightboxIndex(prev => prev !== null ? (prev + 1) % filteredItems.length : 0)
  const prevImage = () => setLightboxIndex(prev => prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0)

  return (
    <section className="py-16 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-warm mb-2">
            Project Gallery
          </h2>
          <p className="text-steel mb-8">
            Browse our completed projects by category
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-gold text-pitch"
                    : "bg-pitch text-steel hover:text-warm border border-graphite"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={cn(
                "relative group cursor-pointer break-inside-avoid bg-pitch rounded-xl overflow-hidden border border-graphite hover:border-gold/30 transition-all",
                item.size === "large" ? "aspect-[4/5]" : "",
                item.size === "medium" ? "aspect-[4/3]" : "",
                item.size === "small" ? "aspect-square" : ""
              )}
            >
              {/* Placeholder Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-graphite to-charcoal" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-pitch/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center p-4">
                  <Maximize2 className="w-8 h-8 text-gold mx-auto mb-3" />
                  <h4 className="font-semibold text-warm mb-1">{item.title}</h4>
                  <span className="text-xs text-gold">{item.category}</span>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 bg-gold/90 text-pitch text-xs font-semibold rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-transparent border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-pitch transition-all duration-300">
            Load More Projects
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-pitch/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-steel hover:text-warm transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 p-3 bg-charcoal rounded-full text-steel hover:text-warm transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full">
            <div className="aspect-video bg-charcoal rounded-xl border border-graphite flex items-center justify-center">
              <div className="text-center">
                <h3 className="font-display text-2xl font-bold text-warm mb-2">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <span className="text-gold">{filteredItems[lightboxIndex].category}</span>
              </div>
            </div>
            <div className="text-center mt-4 text-steel text-sm">
              {lightboxIndex + 1} of {filteredItems.length}
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 p-3 bg-charcoal rounded-full text-steel hover:text-warm transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  )
}
