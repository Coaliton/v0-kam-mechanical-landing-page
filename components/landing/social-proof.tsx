"use client"

import { Star, Play, TrendingUp, Quote } from "lucide-react"

const testimonials = [
  {
    type: "video",
    company: "DataCore Technologies",
    name: "Michael Chen",
    role: "Facilities Director",
    quote: "KAM delivered our 50,000 sq ft data center cooling system 2 weeks ahead of schedule. Their BIM coordination caught conflicts that saved us $200k in rework.",
  },
  {
    type: "review",
    company: "Residential Client",
    name: "Sarah & James Whitmore",
    role: "Homeowners",
    rating: 5,
    quote: "After 3 failed AC repairs with other companies, KAM diagnosed and fixed the issue in one visit. The fixed pricing meant no surprise bills. Highly recommend!",
  },
  {
    type: "case-study",
    company: "Metro Hospital System",
    metric: "30%",
    metricLabel: "Energy ROI",
    description: "Chiller plant optimization reduced annual energy costs by $180,000 with a 14-month payback period.",
  },
]

function VideoTestimonial({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <article className="bg-charcoal border border-border rounded-xl overflow-hidden group hover-lift transition-all duration-300">
      {/* Video Placeholder */}
      <div className="relative aspect-video bg-pitch flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
        <button 
          className="w-16 h-16 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          aria-label="Play video testimonial"
        >
          <Play className="w-7 h-7 text-pitch ml-1" fill="currentColor" />
        </button>
        <span className="absolute bottom-4 left-4 px-3 py-1 bg-pitch/80 backdrop-blur-sm rounded-full text-xs text-warm">
          Project Overview
        </span>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <Quote className="w-8 h-8 text-gold/30 mb-3" />
        <p className="text-steel text-sm leading-relaxed mb-4 line-clamp-3">
          {testimonial.quote}
        </p>
        <div className="pt-4 border-t border-border">
          <p className="font-serif text-warm font-medium">{testimonial.name}</p>
          <p className="text-xs text-steel">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </article>
  )
}

function TextReview({ testimonial }: { testimonial: typeof testimonials[1] }) {
  return (
    <article className="bg-charcoal border border-border rounded-xl p-6 hover-lift hover-gold-border transition-all duration-300">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-gold fill-gold" />
        ))}
      </div>
      
      {/* Quote */}
      <Quote className="w-8 h-8 text-gold/30 mb-3" />
      <p className="text-warm leading-relaxed mb-6">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      
      {/* Attribution */}
      <div className="pt-4 border-t border-border">
        <p className="font-serif text-warm font-medium">{testimonial.name}</p>
        <p className="text-sm text-steel">{testimonial.role}</p>
      </div>
    </article>
  )
}

function CaseStudyCard({ testimonial }: { testimonial: typeof testimonials[2] }) {
  return (
    <article className="bg-charcoal border border-border rounded-xl p-6 hover-lift hover-gold-border transition-all duration-300">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/30 rounded-full text-xs font-medium text-gold mb-6">
        <TrendingUp className="w-3 h-3" />
        Case Study
      </div>
      
      {/* Metric */}
      <div className="text-center mb-6">
        <span className="font-display font-bold text-5xl lg:text-6xl text-gradient-gold">
          {testimonial.metric}
        </span>
        <p className="text-lg text-warm font-medium mt-2">{testimonial.metricLabel}</p>
      </div>
      
      {/* Description */}
      <p className="text-steel text-sm leading-relaxed mb-6">
        {testimonial.description}
      </p>
      
      {/* Company */}
      <div className="pt-4 border-t border-border">
        <p className="font-serif text-warm font-medium">{testimonial.company}</p>
        <a href="#" className="text-sm text-gold hover:text-gold-light transition-colors">
          Read full case study &rarr;
        </a>
      </div>
    </article>
  )
}

function GoogleTrustWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden lg:flex items-center gap-3 px-4 py-3 bg-charcoal border border-border rounded-full shadow-elevated hover:shadow-gold transition-shadow duration-300">
      {/* Google G Icon */}
      <div className="w-8 h-8 rounded-full bg-warm flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      </div>
      
      {/* Rating */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className="font-display font-bold text-warm">5.0</span>
          <Star className="w-4 h-4 text-gold fill-gold" />
        </div>
        <span className="text-xs text-steel">Google Reviews</span>
      </div>
    </div>
  )
}

export function SocialProof() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-pitch relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-sm font-medium text-gold mb-6">
            Client Success Stories
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-warm mb-6 text-balance">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-steel leading-relaxed text-pretty">
            See how we&apos;ve helped businesses and homeowners achieve their goals with 
            precision mechanical solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <VideoTestimonial testimonial={testimonials[0]} />
          <TextReview testimonial={testimonials[1] as typeof testimonials[1]} />
          <CaseStudyCard testimonial={testimonials[2] as typeof testimonials[2]} />
        </div>
      </div>

      {/* Google Trust Widget */}
      <GoogleTrustWidget />
    </section>
  )
}
