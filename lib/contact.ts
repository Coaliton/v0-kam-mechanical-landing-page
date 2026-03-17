// Centralized contact information for KAM Mechanical Construction LLC
// New Orleans-based business serving the Greater New Orleans area

export const BUSINESS_INFO = {
  name: "KAM Mechanical Construction LLC",
  shortName: "KAM Mechanical",
  
  // Primary contact
  phone: {
    display: "(504) 648-6777",
    tel: "+15046486777",
    raw: "5046486777",
  },
  
  // Emergency contact (same number for this business)
  emergency: {
    display: "(504) 648-6777",
    tel: "+15046486777",
    raw: "5046486777",
  },
  
  email: "kamcllc7@gmail.com",
  
  // Physical address
  address: {
    street: "1615 Poydras St",
    city: "New Orleans",
    state: "LA",
    zip: "70112",
    full: "1615 Poydras St, New Orleans, LA 70112",
    shortDisplay: "New Orleans, LA",
  },
  
  // Service area - New Orleans exclusive
  serviceArea: {
    primary: "New Orleans",
    description: "Proudly serving the Greater New Orleans area exclusively",
    areas: [
      "New Orleans",
      "Metairie", 
      "Kenner",
      "Gretna",
      "Harvey",
      "Marrero",
      "Chalmette",
      "Slidell",
    ],
    notice: "Our services are exclusively available within the Greater New Orleans metropolitan area. We are committed to serving our local community with the highest quality mechanical construction services.",
  },
  
  // Business hours
  hours: {
    weekday: "Mon-Fri: 7:00 AM - 6:00 PM",
    saturday: "Sat: 8:00 AM - 2:00 PM", 
    sunday: "Sun: Emergency Only",
    emergency: "24/7 Emergency Service Available",
    short: "Mon-Fri 7AM-6PM | Emergency: 24/7",
  },
  
  // License info (Louisiana)
  license: {
    state: "LA",
    mechanical: "LMP #12345",
    plumbing: "LMP #12345",
  },
  
  // Social links
  social: {
    facebook: "https://facebook.com/kammechanical",
    instagram: "https://instagram.com/kammechanical",
    linkedin: "https://linkedin.com/company/kam-mechanical",
  },
  
  // Google Maps embed URL for New Orleans location
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.019669453556!2d-90.07659708489084!3d29.951019681905366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a676d60e8d4d%3A0x4d4e8f93c46b9c9a!2s1615%20Poydras%20St%2C%20New%20Orleans%2C%20LA%2070112!5e0!3m2!1sen!2sus!4v1679000000000!5m2!1sen!2sus",
  
  // Taglines
  tagline: "Engineering Excellence. Elevating Comfort.",
  serviceTagline: "Serving the Greater New Orleans Area",
} as const

// Helper functions for consistent formatting
export function getPhoneLink(type: 'main' | 'emergency' = 'main'): string {
  return type === 'emergency' ? BUSINESS_INFO.emergency.tel : BUSINESS_INFO.phone.tel
}

export function getPhoneDisplay(type: 'main' | 'emergency' = 'main'): string {
  return type === 'emergency' ? BUSINESS_INFO.emergency.display : BUSINESS_INFO.phone.display
}

export function getEmailLink(): string {
  return `mailto:${BUSINESS_INFO.email}`
}

export function getFullAddress(): string {
  return BUSINESS_INFO.address.full
}

export function getServiceAreaNotice(): string {
  return BUSINESS_INFO.serviceArea.notice
}
