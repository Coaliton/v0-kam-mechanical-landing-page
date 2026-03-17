import { Phone, Clock, Shield, Star, AlertTriangle } from "lucide-react"
import Link from "next/link"

export function ScheduleInfo() {
  return (
    <div className="space-y-6">
      {/* Emergency Banner */}
      <div className="bg-gradient-to-br from-red-900/20 to-red-950/20 border border-red-500/30 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-warm mb-1">Need Emergency Service?</h4>
            <p className="text-sm text-steel mb-3">
              For urgent HVAC emergencies, call us directly for immediate assistance.
            </p>
            <Link
              href="tel:+15046486777"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:underline"
            >
              <Phone className="w-4 h-4" />
              (504) 648-6777
            </Link>
          </div>
        </div>
      </div>

      {/* Service Hours */}
      <div className="bg-charcoal rounded-xl border border-graphite p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
            <Clock className="w-5 h-5 text-gold" />
          </div>
          <h4 className="font-semibold text-warm">Service Hours</h4>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-steel">Monday - Friday</span>
            <span className="text-warm">7:00 AM - 7:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-steel">Saturday</span>
            <span className="text-warm">8:00 AM - 5:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-steel">Sunday</span>
            <span className="text-warm">Emergency Only</span>
          </div>
        </div>
      </div>

      {/* Guarantees */}
      <div className="bg-charcoal rounded-xl border border-graphite p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-gold" />
          </div>
          <h4 className="font-semibold text-warm">Our Promise</h4>
        </div>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-gold">•</span>
            <span className="text-steel">On-time arrival or service is free</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gold">•</span>
            <span className="text-steel">Upfront pricing with no hidden fees</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gold">•</span>
            <span className="text-steel">100% satisfaction guarantee</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gold">•</span>
            <span className="text-steel">Licensed and insured technicians</span>
          </li>
        </ul>
      </div>

      {/* Rating */}
      <div className="bg-charcoal rounded-xl border border-graphite p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
          </div>
          <span className="text-warm font-semibold">4.9/5</span>
        </div>
        <p className="text-sm text-steel">
          Based on 500+ verified customer reviews
        </p>
      </div>
    </div>
  )
}
