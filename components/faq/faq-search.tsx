"use client"

import { useState } from "react"
import { Search, Phone, Mail, MessageCircle } from "lucide-react"

const quickLinks = [
  { icon: Phone, label: "Call Us", value: "(504) 648-6777", href: "tel:+15046486777" },
  { icon: Mail, label: "Email", value: "kamcllc7@gmail.com", href: "mailto:kamcllc7@gmail.com" },
  { icon: MessageCircle, label: "Live Chat", value: "Chat Now", href: "#" },
]

export function FAQSearch() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="py-12 bg-charcoal border-b border-gold/10">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-steel" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-pitch border border-gold/20 rounded-xl text-warm placeholder:text-steel focus:outline-none focus:border-gold transition-colors"
            />
          </div>

          {/* Quick Contact */}
          <div className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 px-4 py-2 bg-pitch border border-gold/10 rounded-lg hover:border-gold/30 transition-colors"
              >
                <link.icon className="w-4 h-4 text-gold" />
                <span className="text-steel text-sm">{link.label}:</span>
                <span className="text-warm text-sm font-medium">{link.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
