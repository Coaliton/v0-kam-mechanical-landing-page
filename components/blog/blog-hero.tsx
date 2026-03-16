"use client"

import { Search } from "lucide-react"
import { useState } from "react"

export function BlogHero() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative pt-32 pb-16 bg-charcoal">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6">
            Resources & Insights
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm mb-6 text-balance">
            Expert HVAC Knowledge at Your Fingertips
          </h1>
          
          <p className="text-lg text-steel mb-8 text-pretty">
            Stay informed with the latest tips, industry insights, and maintenance guides 
            from our team of mechanical construction experts.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-steel" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-pitch border border-graphite rounded-xl text-warm placeholder:text-steel focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/20 transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
