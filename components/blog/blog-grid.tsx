"use client"

import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 3,
    title: "Understanding SEER Ratings: What They Mean for Your Wallet",
    excerpt: "Higher SEER ratings mean better efficiency, but is the upgrade worth it? We break down the numbers.",
    category: "Energy Savings",
    date: "March 8, 2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Industrial Piping Best Practices for Manufacturing Facilities",
    excerpt: "Proper pipe installation and maintenance prevents costly downtime and safety hazards.",
    category: "Commercial",
    date: "March 5, 2026",
    readTime: "10 min read",
  },
  {
    id: 5,
    title: "Spring HVAC Checklist: Prepare Your System for Summer",
    excerpt: "Get your cooling system ready before the heat hits with our seasonal maintenance guide.",
    category: "Maintenance",
    date: "March 3, 2026",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "The Benefits of BIM in Modern Mechanical Construction",
    excerpt: "How Building Information Modeling is revolutionizing project planning and execution.",
    category: "Commercial",
    date: "Feb 28, 2026",
    readTime: "7 min read",
  },
  {
    id: 7,
    title: "Heat Pump vs. Traditional HVAC: Which is Right for You?",
    excerpt: "Compare efficiency, costs, and climate considerations to make the best choice for your home.",
    category: "Residential",
    date: "Feb 25, 2026",
    readTime: "8 min read",
  },
  {
    id: 8,
    title: "Safety Protocols Every HVAC Technician Should Follow",
    excerpt: "Industry-leading safety practices that protect workers and ensure quality service.",
    category: "Safety",
    date: "Feb 22, 2026",
    readTime: "5 min read",
  },
  {
    id: 9,
    title: "How Smart Thermostats Can Cut Your Energy Bills by 30%",
    excerpt: "Maximize comfort and savings with intelligent temperature control technology.",
    category: "Energy Savings",
    date: "Feb 20, 2026",
    readTime: "4 min read",
  },
  {
    id: 10,
    title: "Common AC Problems and How to Troubleshoot Them",
    excerpt: "Quick fixes you can try before calling a professional, plus when to seek expert help.",
    category: "HVAC Tips",
    date: "Feb 18, 2026",
    readTime: "6 min read",
  },
  {
    id: 11,
    title: "The Future of Sustainable Commercial HVAC Systems",
    excerpt: "Exploring green technologies and eco-friendly solutions for modern buildings.",
    category: "Commercial",
    date: "Feb 15, 2026",
    readTime: "9 min read",
  },
]

export function BlogGrid() {
  return (
    <section className="py-16 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-warm mb-2">
              Latest Articles
            </h2>
            <p className="text-steel">Stay up to date with industry trends and tips</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group bg-pitch rounded-xl overflow-hidden border border-graphite hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-graphite to-charcoal relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-colors" />
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 bg-gold/90 text-pitch text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-warm mb-2 group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-steel text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-steel">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-transparent border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-pitch transition-all duration-300">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  )
}
