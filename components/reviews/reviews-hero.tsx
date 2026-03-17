"use client"

import { Star } from "lucide-react"

export function ReviewsHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-pitch via-charcoal to-pitch overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-gold fill-gold" />
              ))}
            </div>
            <span className="text-gold text-sm font-medium">4.9 out of 5 Stars</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-warm mb-6 leading-tight">
            What Our Customers
            <span className="block text-gold">Are Saying</span>
          </h1>

          <p className="text-lg text-steel max-w-2xl mx-auto leading-relaxed">
            Real reviews from real customers. See why thousands of homeowners and businesses 
            trust KAM Mechanical for their comfort needs.
          </p>
        </div>
      </div>
    </section>
  )
}
