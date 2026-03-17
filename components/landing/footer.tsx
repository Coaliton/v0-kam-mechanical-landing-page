"use client"

import Image from "next/image"
import { Phone, MapPin, Mail, Clock, ChevronRight } from "lucide-react"
import { CTAButton } from "./cta-button"
import { SmartLink } from "@/components/shared/smart-link"

const residentialLinks = [
  { label: "AC Installation", href: "/services/residential" },
  { label: "Home Repiping", href: "/services/residential" },
  { label: "Maintenance Plans", href: "/services/residential" },
  { label: "Emergency Repairs", href: "/services/emergency" },
  { label: "Indoor Air Quality", href: "/services/residential" },
]

const commercialLinks = [
  { label: "Industrial Piping", href: "/services/commercial" },
  { label: "BIM Services", href: "/services/commercial" },
  { label: "HVAC Systems", href: "/services/commercial" },
  { label: "Building Automation", href: "/services/commercial" },
  { label: "Preventive Maintenance", href: "/services/commercial" },
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
              href="tel:+15046486777" 
              className="font-display font-bold text-2xl text-pitch hover:underline"
            >
              (504) 648-6777
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Logo & Mission */}
          <div className="lg:col-span-1">
            <SmartLink href="/" className="inline-block mb-6">
              <Image
                src="/images/kam-logo.png"
                alt="KAM Mechanical Construction LLC"
                width={100}
                height={100}
                className="w-24 h-24 hover:scale-105 transition-transform duration-300"
              />
            </SmartLink>
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
                  <SmartLink 
                    href={link.href}
                    className="flex items-center gap-2 text-steel hover:text-gold transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                    <span>{link.label}</span>
                  </SmartLink>
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
                  <SmartLink 
                    href={link.href}
                    className="flex items-center gap-2 text-steel hover:text-gold transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                    <span>{link.label}</span>
                  </SmartLink>
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
                <p>1615 Poydras St</p>
                <p>New Orleans, LA 70112</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <a href="tel:+15046486777" className="flex items-center gap-3 text-steel hover:text-gold transition-colors">
                <Phone className="w-5 h-5 text-gold" />
                <span className="text-sm">(504) 648-6777</span>
              </a>
              <a href="mailto:kamcllc7@gmail.com" className="flex items-center gap-3 text-steel hover:text-gold transition-colors">
                <Mail className="w-5 h-5 text-gold" />
                <span className="text-sm">kamcllc7@gmail.com</span>
              </a>
            </div>

            {/* Service Area Notice */}
            <div className="p-3 bg-gold/10 border border-gold/20 rounded-lg mb-4">
              <p className="text-xs text-gold font-medium">
                Serving New Orleans Area Exclusively
              </p>
            </div>

            {/* License */}
            <p className="text-xs text-steel">
              LA Mechanical License #LMP-12345
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
              <SmartLink href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</SmartLink>
              <SmartLink href="/terms" className="hover:text-gold transition-colors">Terms of Service</SmartLink>
              <span>&copy; {new Date().getFullYear()} KAM Mechanical Construction LLC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
