"use client"

import { useState } from "react"
import { Star, Quote, CheckCircle, ThumbsUp } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Downtown",
    date: "2 weeks ago",
    rating: 5,
    service: "AC Installation",
    type: "residential",
    verified: true,
    review: "KAM installed a new AC system in our 100-year-old home. The team was professional, clean, and finished ahead of schedule. Our energy bills have dropped by 30%! Highly recommend.",
    helpful: 24,
  },
  {
    id: 2,
    name: "James K.",
    location: "Industrial District",
    date: "1 month ago",
    rating: 5,
    service: "Commercial HVAC",
    type: "commercial",
    verified: true,
    review: "We contracted KAM for a complete HVAC overhaul of our 50,000 sq ft warehouse. Their BIM modeling caught potential issues before installation. Excellent project management.",
    helpful: 18,
  },
  {
    id: 3,
    name: "Maria G.",
    location: "Suburbs",
    date: "3 weeks ago",
    rating: 5,
    service: "Emergency Plumbing",
    type: "residential",
    verified: true,
    review: "Called at 2 AM with a burst pipe. Tech arrived in 45 minutes and had the issue fixed within an hour. Saved us from major water damage. Worth every penny!",
    helpful: 31,
  },
  {
    id: 4,
    name: "Robert T.",
    location: "Business Park",
    date: "1 week ago",
    rating: 5,
    service: "Preventive Maintenance",
    type: "commercial",
    verified: true,
    review: "Been using KAM for our office building maintenance for 3 years. Zero unplanned downtime and their reporting keeps our management informed. True partners.",
    helpful: 12,
  },
  {
    id: 5,
    name: "Jennifer L.",
    location: "Midtown",
    date: "2 months ago",
    rating: 4,
    service: "Furnace Repair",
    type: "residential",
    verified: true,
    review: "Quick response and fair pricing for our furnace repair. Tech was knowledgeable and explained everything clearly. Only 4 stars because scheduling took a bit.",
    helpful: 8,
  },
  {
    id: 6,
    name: "David C.",
    location: "Medical District",
    date: "1 month ago",
    rating: 5,
    service: "Medical Facility HVAC",
    type: "commercial",
    verified: true,
    review: "KAM handled our surgical center HVAC with the precision it required. Clean room compliance, proper documentation, and outstanding attention to detail.",
    helpful: 22,
  },
  {
    id: 7,
    name: "Lisa H.",
    location: "Eastside",
    date: "3 weeks ago",
    rating: 5,
    service: "Water Heater",
    type: "residential",
    verified: true,
    review: "Switched from a tank to tankless water heater. The KAM team made great recommendations for our family size and the installation was seamless. Hot water on demand!",
    helpful: 15,
  },
  {
    id: 8,
    name: "Michael P.",
    location: "Tech Campus",
    date: "2 weeks ago",
    rating: 5,
    service: "Building Automation",
    type: "commercial",
    verified: true,
    review: "Integrated our HVAC with a new building automation system. The energy savings have already exceeded projections. KAM understands modern building technology.",
    helpful: 27,
  },
]

const filters = [
  { id: "all", label: "All Reviews" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "5star", label: "5 Star" },
]

export function ReviewsGrid() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredReviews = reviews.filter((review) => {
    if (activeFilter === "all") return true
    if (activeFilter === "5star") return review.rating === 5
    return review.type === activeFilter
  })

  return (
    <section className="py-20 bg-pitch">
      <div className="container px-4 md:px-6">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-gold text-pitch"
                  : "bg-charcoal text-steel hover:text-warm border border-gold/20"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 bg-charcoal border border-gold/10 rounded-2xl hover:border-gold/20 transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="text-gold font-bold text-lg">{review.name[0]}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-warm">{review.name}</p>
                      {review.verified && (
                        <span className="flex items-center gap-1 text-xs text-gold">
                          <CheckCircle className="w-3 h-3" />
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-steel text-sm">{review.location} - {review.date}</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-gold/20" />
              </div>

              {/* Rating & Service */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating ? "text-gold fill-gold" : "text-steel"
                      }`}
                    />
                  ))}
                </div>
                <span className="px-2 py-1 bg-gold/10 text-gold text-xs rounded-full">
                  {review.service}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-steel leading-relaxed mb-4">
                {review.review}
              </p>

              {/* Helpful */}
              <div className="flex items-center gap-2 text-steel text-sm">
                <ThumbsUp className="w-4 h-4" />
                <span>{review.helpful} found this helpful</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-charcoal border border-gold/30 text-gold rounded-full font-medium hover:bg-gold hover:text-pitch transition-all">
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  )
}
