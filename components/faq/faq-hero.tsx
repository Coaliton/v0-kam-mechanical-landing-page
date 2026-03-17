"use client"

import { HelpCircle } from "lucide-react"

export function FAQHero() {
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
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">Help Center</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-warm mb-6 leading-tight">
            Frequently Asked
            <span className="block text-gold">Questions</span>
          </h1>

          <p className="text-lg text-steel max-w-2xl mx-auto leading-relaxed">
            Find answers to the most common questions about our services, pricing, 
            warranties, and more. Cannot find what you are looking for? Contact us directly.
          </p>
        </div>
      </div>
    </section>
  )
}
