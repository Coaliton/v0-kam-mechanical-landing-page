"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    id: 1,
    title: "Commercial HVAC Replacement",
    location: "Downtown Office Complex",
    description: "Complete replacement of a 30-year-old rooftop unit with a high-efficiency system.",
  },
  {
    id: 2,
    title: "Residential AC Installation",
    location: "Suburban Family Home",
    description: "New central air conditioning installation with smart thermostat integration.",
  },
  {
    id: 3,
    title: "Industrial Piping System",
    location: "Manufacturing Facility",
    description: "Full industrial piping overhaul including steam and chilled water lines.",
  },
]

function SliderItem({ project }: { project: typeof projects[0] }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseDown = () => { isDragging.current = true }
  const handleMouseUp = () => { isDragging.current = false }
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX)
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX)

  useEffect(() => {
    const handleGlobalMouseUp = () => { isDragging.current = false }
    window.addEventListener('mouseup', handleGlobalMouseUp)
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp)
  }, [])

  return (
    <div className="bg-charcoal rounded-2xl border border-graphite overflow-hidden">
      <div
        ref={containerRef}
        className="relative aspect-[16/10] cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* Before Image (Background) */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-red-950/30">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-red-400/50 font-bold text-2xl">BEFORE</span>
          </div>
        </div>

        {/* After Image (Foreground with clip) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-green-900/30 to-green-950/30"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-green-400/50 font-bold text-2xl">AFTER</span>
          </div>
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gold shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gold rounded-full flex items-center justify-center shadow-xl">
            <div className="flex items-center gap-0.5">
              <ChevronLeft className="w-4 h-4 text-pitch" />
              <ChevronRight className="w-4 h-4 text-pitch" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-pitch/80 backdrop-blur-sm rounded-full text-xs font-medium text-steel">
          Before
        </div>
        <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-pitch/80 backdrop-blur-sm rounded-full text-xs font-medium text-steel">
          After
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-warm mb-1">{project.title}</h3>
        <p className="text-sm text-gold mb-2">{project.location}</p>
        <p className="text-steel text-sm">{project.description}</p>
      </div>
    </div>
  )
}

export function BeforeAfterSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-16 bg-pitch">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-warm mb-2">
            Before & After
          </h2>
          <p className="text-steel">
            Drag the slider to see the transformation
          </p>
        </div>

        {/* Active Project */}
        <div className="max-w-4xl mx-auto mb-8">
          <SliderItem project={projects[activeIndex]} />
        </div>

        {/* Project Selector */}
        <div className="flex justify-center gap-3">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                activeIndex === index
                  ? "bg-gold text-pitch"
                  : "bg-charcoal text-steel hover:text-warm border border-graphite"
              )}
            >
              {project.title.split(' ').slice(0, 2).join(' ')}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
