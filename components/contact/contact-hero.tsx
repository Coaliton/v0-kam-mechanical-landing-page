"use client"

import { Phone, Mail, MapPin } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 bg-charcoal">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-3xl">
          <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
            Get In Touch
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm mb-6 text-balance">
            Let&apos;s Build Something{" "}
            <span className="text-gold">Together</span>
          </h1>
          <p className="text-lg text-steel max-w-2xl mb-8">
            Whether you need industrial-scale mechanical systems or home comfort solutions, 
            our team is ready to deliver excellence. Get your free estimate today.
          </p>
          
          {/* Quick Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            <a 
              href="tel:+15046486777"
              className="flex items-center gap-3 p-4 bg-pitch/50 border border-border rounded-lg hover:border-gold/50 transition-colors group"
            >
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-xs text-steel">Call Us</p>
                <p className="text-warm font-medium">(504) 648-6777</p>
              </div>
            </a>
            
            <a 
              href="mailto:kamcllc7@gmail.com"
              className="flex items-center gap-3 p-4 bg-pitch/50 border border-border rounded-lg hover:border-gold/50 transition-colors group"
            >
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-xs text-steel">Email Us</p>
                <p className="text-warm font-medium text-sm">kamcllc7@gmail.com</p>
              </div>
            </a>
            
            <div className="flex items-center gap-3 p-4 bg-pitch/50 border border-border rounded-lg">
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-xs text-steel">Visit Us</p>
                <p className="text-warm font-medium text-sm">New Orleans, LA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
