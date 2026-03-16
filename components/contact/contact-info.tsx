"use client"

import { Phone, Mail, MapPin, Clock, Shield, Award, AlertTriangle } from "lucide-react"

const businessHours = [
  { day: "Monday - Friday", hours: "7:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "8:00 AM - 2:00 PM" },
  { day: "Sunday", hours: "Emergency Only" },
]

const serviceAreas = [
  "Houston", "Katy", "Sugar Land", "The Woodlands", 
  "Pearland", "Pasadena", "Baytown", "League City"
]

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Emergency Banner */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-6 h-6 text-red-400" />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-warm mb-1">
              24/7 Emergency Service
            </h3>
            <p className="text-steel text-sm mb-3">
              HVAC failure? Pipe burst? We&apos;re here when you need us most.
            </p>
            <a 
              href="tel:+15559119911"
              className="inline-flex items-center gap-2 text-red-400 font-bold text-lg hover:text-red-300 transition-colors"
            >
              <Phone className="w-5 h-5" />
              (555) 911-9911
            </a>
          </div>
        </div>
      </div>

      {/* Contact Details Card */}
      <div className="bg-charcoal border border-border rounded-2xl p-8">
        <h3 className="font-display text-xl font-bold text-warm mb-6">
          Contact Information
        </h3>
        
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-sm text-steel mb-1">Main Office</p>
              <a href="tel:+15551234567" className="text-warm font-medium hover:text-gold transition-colors">
                (555) 123-4567
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-sm text-steel mb-1">Email</p>
              <a href="mailto:info@kammechanical.com" className="text-warm font-medium hover:text-gold transition-colors">
                info@kammechanical.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-gold" />
            </div>
            <div>
              <p className="text-sm text-steel mb-1">Office Address</p>
              <p className="text-warm font-medium">
                1234 Industrial Blvd, Suite 100<br />
                Houston, TX 77001
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-charcoal border border-border rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
            <Clock className="w-5 h-5 text-gold" />
          </div>
          <h3 className="font-display text-xl font-bold text-warm">
            Business Hours
          </h3>
        </div>
        
        <div className="space-y-3">
          {businessHours.map((schedule) => (
            <div key={schedule.day} className="flex justify-between items-center">
              <span className="text-steel">{schedule.day}</span>
              <span className="text-warm font-medium">{schedule.hours}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-charcoal border border-border rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
            <MapPin className="w-5 h-5 text-gold" />
          </div>
          <h3 className="font-display text-xl font-bold text-warm">
            Service Areas
          </h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {serviceAreas.map((area) => (
            <span 
              key={area}
              className="px-3 py-1.5 bg-pitch border border-border rounded-full text-sm text-steel"
            >
              {area}
            </span>
          ))}
        </div>
        <p className="text-steel text-sm mt-4">
          Don&apos;t see your area? Contact us - we may still be able to help!
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-charcoal border border-border rounded-xl p-4 text-center">
          <Shield className="w-8 h-8 text-gold mx-auto mb-2" />
          <p className="text-warm font-medium text-sm">Licensed & Insured</p>
          <p className="text-steel text-xs">TX License #12345</p>
        </div>
        <div className="bg-charcoal border border-border rounded-xl p-4 text-center">
          <Award className="w-8 h-8 text-gold mx-auto mb-2" />
          <p className="text-warm font-medium text-sm">BBB Accredited</p>
          <p className="text-steel text-xs">A+ Rating</p>
        </div>
      </div>
    </div>
  )
}
