"use client"

import Link from "next/link"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

const featuredPosts = [
  {
    id: 1,
    title: "The Complete Guide to Commercial HVAC Preventive Maintenance",
    excerpt: "Learn how regular maintenance can extend equipment life by 40% and reduce energy costs by up to 25%. Our comprehensive checklist covers everything from filter changes to refrigerant levels.",
    category: "Commercial",
    author: "Michael Torres",
    date: "March 12, 2026",
    readTime: "8 min read",
    image: "/images/blog/commercial-hvac.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "5 Signs Your Home AC Needs Professional Attention",
    excerpt: "Don't wait for a complete breakdown. These warning signs indicate it's time to call a professional before small issues become expensive repairs.",
    category: "Residential",
    author: "Sarah Chen",
    date: "March 10, 2026",
    readTime: "5 min read",
    image: "/images/blog/home-ac.jpg",
    featured: true,
  },
]

export function FeaturedPosts() {
  return (
    <section className="py-16 bg-pitch">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-warm mb-2">
              Featured Articles
            </h2>
            <p className="text-steel">Hand-picked insights from our experts</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {featuredPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group relative bg-charcoal rounded-2xl overflow-hidden border border-graphite hover:border-gold/30 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-graphite to-charcoal relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-gold text-pitch text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
                {index === 0 && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-pitch/80 text-gold text-xs font-semibold rounded-full border border-gold/30">
                      Editor's Pick
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-warm mb-3 group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-steel text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-steel">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
