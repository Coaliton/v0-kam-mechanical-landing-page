"use client"

import Link from "next/link"
import { Wrench, Phone, MapPin, Mail, Clock, ChevronRight } from "lucide-react"
import { CTAButton } from "./cta-button"

const residentialLinks = [
  { label: "AC Installation", href: "#" },
  { label: "Home Repiping", href: "#" },
  { label: "Maintenance Plans", href: "#" },
  { label: "Emergency Repairs", href: "#" },
  { label: "Indoor Air Quality", href: "#" },
]

const commercialLinks = [
  { label: "Industrial Piping", href: "#" },
  { label: "BIM Services", href: "#" },
  { label: "HVAC Systems", href: "#" },
  { label: "Building Automation", href: "#" },
  { label: "Preventive Maintenance", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-pitch">
      {/* Emergency CTA Bar */}
      <div className="bg-gold">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-pitch animate-pulse" />
              <span className="font-display font-bold text-pitch text-lg">
                24/7 Emergency Support:
              </span>
            </div>
            <a 
              href="tel:+15551234567" 
              className="font-display font-bold text-2xl text-pitch hover:underline"
            >
              (555) 123-4567
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Logo & Mission */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-pitch" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-warm leading-tight">KAM</span>
                <span className="text-xs text-steel leading-tight">Mechanical Construction</span>
              </div>
            </Link>
            <p className="text-steel text-sm leading-relaxed mb-6">
              Engineering the backbone of infrastructure while elevating home comfort. 
              Serving commercial and residential clients with precision and integrity since 2009.
            </p>
            <div className="flex items-center gap-2 text-steel text-sm">
              <Clock className="w-4 h-4 text-gold" />
              <span>Mon-Fri: 7AM-6PM | Emergency: 24/7</span>
            </div>
          </div>

          {/* Column 2: Residential Links */}
          <div>
            <h4 className="font-display font-semibold text-warm mb-6">Residential Services</h4>
            <ul className="space-y-3">
              {residentialLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 text-steel hover:text-gold transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Commercial Links */}
          <div>
            <h4 className="font-display font-semibold text-warm mb-6">Commercial Services</h4>
            <ul className="space-y-3">
              {commercialLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 text-steel hover:text-gold transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Map */}
          <div>
            <h4 className="font-display font-semibold text-warm mb-6">Contact Us</h4>
            
            {/* Address */}
            <div className="flex items-start gap-3 mb-4">
              <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div className="text-steel text-sm">
                <p>1234 Industrial Boulevard</p>
                <p>Suite 500</p>
                <p>Houston, TX 77001</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <a href="tel:+15551234567" className="flex items-center gap-3 text-steel hover:text-gold transition-colors">
                <Phone className="w-5 h-5 text-gold" />
                <span className="text-sm">(555) 123-4567</span>
              </a>
              <a href="mailto:info@kammech.com" className="flex items-center gap-3 text-steel hover:text-gold transition-colors">
                <Mail className="w-5 h-5 text-gold" />
                <span className="text-sm">info@kammech.com</span>
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-charcoal border border-border rounded-lg flex items-center justify-center mb-4">
              <span className="text-xs text-steel">Interactive Map</span>
            </div>

            {/* License */}
            <p className="text-xs text-steel">
              TX License #TACLA12345 | TX Plumbing #M-54321
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter & Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Newsletter */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <label htmlFor="newsletter" className="text-warm font-medium whitespace-nowrap">
                Stay Updated:
              </label>
              <div className="flex w-full sm:w-auto gap-2">
                <input
                  id="newsletter"
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-charcoal border border-border rounded-lg text-warm placeholder:text-steel focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent w-full sm:w-64"
                />
                <CTAButton variant="solid" size="md">
                  Subscribe
                </CTAButton>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm text-steel">
              <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
              <span>&copy; {new Date().getFullYear()} KAM Mechanical Construction LLC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
