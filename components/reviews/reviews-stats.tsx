"use client"

import { Star, Users, ThumbsUp, Award } from "lucide-react"
import Image from "next/image"

const platforms = [
  { name: "Google", rating: 4.9, reviews: 847, logo: "/images/google-logo.svg" },
  { name: "Yelp", rating: 4.8, reviews: 312, logo: "/images/yelp-logo.svg" },
  { name: "Angi", rating: 4.9, reviews: 156, logo: "/images/angi-logo.svg" },
  { name: "BBB", rating: "A+", reviews: 89, logo: "/images/bbb-logo.svg" },
]

const stats = [
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Users, value: "10,000+", label: "Customers Served" },
  { icon: ThumbsUp, value: "98%", label: "Would Recommend" },
  { icon: Award, value: "15+", label: "Years in Business" },
]

export function ReviewsStats() {
  return (
    <section className="py-16 bg-charcoal border-y border-gold/10">
      <div className="container px-4 md:px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="text-3xl font-bold text-warm mb-1">{stat.value}</p>
              <p className="text-sm text-steel">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Platform Ratings */}
        <div className="flex flex-wrap justify-center items-center gap-8 pt-8 border-t border-gold/10">
          {platforms.map((platform) => (
            <div key={platform.name} className="flex items-center gap-3 px-6 py-3 bg-pitch rounded-xl">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-xs font-bold text-pitch">{platform.name[0]}</span>
              </div>
              <div>
                <p className="text-warm font-semibold text-sm">{platform.name}</p>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-gold fill-gold" />
                  <span className="text-gold text-xs font-bold">{platform.rating}</span>
                  <span className="text-steel text-xs">({platform.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
