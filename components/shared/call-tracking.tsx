"use client"

import { Phone, Clock } from "lucide-react"

interface CallTrackingButtonProps {
  variant?: "primary" | "secondary" | "minimal"
  size?: "sm" | "md" | "lg"
  showHours?: boolean
  className?: string
}

// Phone numbers for KAM Mechanical - New Orleans
// Single number for all tracking sources
const PHONE_NUMBERS = {
  main: "(504) 648-6777",
  emergency: "(504) 648-6777",
  commercial: "(504) 648-6777",
  residential: "(504) 648-6777",
}

export function CallTrackingButton({
  variant = "primary",
  size = "md",
  showHours = false,
  className = "",
}: CallTrackingButtonProps) {
  // In production, this would detect UTM params and assign appropriate tracking number
  const trackingNumber = PHONE_NUMBERS.main
  const telNumber = trackingNumber.replace(/\D/g, "")

  const handleClick = () => {
    // Track call click event
    if (typeof window !== "undefined" && (window as unknown as { gtag?: (command: string, event: string, params: Record<string, string>) => void }).gtag) {
      ;(window as unknown as { gtag: (command: string, event: string, params: Record<string, string>) => void }).gtag("event", "call_click", {
        event_category: "engagement",
        event_label: trackingNumber,
      })
    }
  }

  const baseStyles = "inline-flex items-center gap-2 font-semibold transition-all duration-300"
  
  const variantStyles = {
    primary: "bg-gold text-pitch hover:bg-gold-light rounded-full",
    secondary: "bg-charcoal border border-gold/50 text-gold hover:bg-gold/10 rounded-full",
    minimal: "text-gold hover:text-gold-light",
  }
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  }

  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <a
        href={`tel:+1${telNumber}`}
        onClick={handleClick}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
        aria-label={`Call us at ${trackingNumber}`}
      >
        <Phone className={size === "lg" ? "w-5 h-5" : "w-4 h-4"} />
        {trackingNumber}
      </a>
      {showHours && (
        <span className="flex items-center gap-1 text-xs text-steel">
          <Clock className="w-3 h-3" />
          Mon-Fri 7am-6pm | 24/7 Emergency
        </span>
      )}
    </div>
  )
}

// Floating Call Button for Mobile
export function MobileCallButton() {
  const trackingNumber = PHONE_NUMBERS.main
  const telNumber = trackingNumber.replace(/\D/g, "")

  const handleClick = () => {
    if (typeof window !== "undefined" && (window as unknown as { gtag?: (command: string, event: string, params: Record<string, string>) => void }).gtag) {
      ;(window as unknown as { gtag: (command: string, event: string, params: Record<string, string>) => void }).gtag("event", "mobile_call_click", {
        event_category: "engagement",
        event_label: trackingNumber,
      })
    }
  }

  return (
    <a
      href={`tel:+1${telNumber}`}
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 md:hidden flex items-center gap-2 px-4 py-3 bg-gold text-pitch font-semibold rounded-full shadow-lg gold-glow hover:bg-gold-light transition-colors"
      aria-label={`Call us at ${trackingNumber}`}
    >
      <Phone className="w-5 h-5" />
      <span className="sr-only">{trackingNumber}</span>
    </a>
  )
}

// Emergency Call Banner
export function EmergencyCallBanner() {
  const emergencyNumber = PHONE_NUMBERS.emergency
  const telNumber = emergencyNumber.replace(/\D/g, "")

  return (
    <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <span className="block text-warm font-display font-semibold">
            24/7 Emergency Service
          </span>
          <span className="text-steel text-sm">
            For urgent HVAC or plumbing emergencies
          </span>
        </div>
        <a
          href={`tel:+1${telNumber}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-pitch font-semibold rounded-full hover:bg-gold-light transition-colors"
        >
          <Phone className="w-4 h-4" />
          {emergencyNumber}
        </a>
      </div>
    </div>
  )
}

// Phone number display with tracking data attribute
export function TrackedPhoneNumber({
  type = "main",
  className = "",
}: {
  type?: keyof typeof PHONE_NUMBERS
  className?: string
}) {
  const number = PHONE_NUMBERS[type]
  const telNumber = number.replace(/\D/g, "")

  return (
    <a
      href={`tel:+1${telNumber}`}
      className={`text-gold hover:text-gold-light font-semibold transition-colors ${className}`}
      data-tracking-source={type}
    >
      {number}
    </a>
  )
}
