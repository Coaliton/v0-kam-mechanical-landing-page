export type ServiceRoutingMap = {
  slug: string;
  defaultType: 'residential' | 'commercial';
  displayName: string;
};

// Maps service slugs to their default contact form type
export const SERVICE_ROUTING: ServiceRoutingMap[] = [
  { slug: 'coil-cleaning', defaultType: 'residential', displayName: 'Coil Cleaning & Tune-Up' },
  { slug: 'ac-replacement', defaultType: 'residential', displayName: 'AC Replacement & Installation' },
  { slug: 'emergency-repair', defaultType: 'residential', displayName: '24/7 Emergency Repair' },
  { slug: 'commercial-hvac', defaultType: 'commercial', displayName: 'Commercial HVAC Systems' },
  { slug: 'boilers-chillers', defaultType: 'commercial', displayName: 'Boiler & Chiller Service' },
  { slug: 'mechanical-rooms', defaultType: 'commercial', displayName: 'Mechanical Room Buildouts' },
];

export function getServiceByIdOrSlug(slug: string | null): ServiceRoutingMap | null {
  if (!slug) return null;
  return SERVICE_ROUTING.find(s => s.slug === slug) ?? null;
}

// Residential form options
export const RESIDENTIAL_ISSUES = [
  { value: 'ac-not-cooling', label: 'AC not cooling' },
  { value: 'no-heat', label: 'No heat / furnace issue' },
  { value: 'coil-cleaning', label: 'Need coil cleaning' },
  { value: 'ac-replacement', label: 'Want an AC replacement quote' },
  { value: 'other', label: 'Something else' },
];

export const RESIDENTIAL_URGENCY = [
  { value: 'emergency', label: 'Emergency — today' },
  { value: 'this-week', label: 'This week' },
  { value: 'scheduling-ahead', label: 'Scheduling ahead' },
];

// Commercial form options
export const COMMERCIAL_PROPERTY_TYPES = [
  { value: 'office', label: 'Office' },
  { value: 'medical', label: 'Medical / Healthcare' },
  { value: 'industrial', label: 'Industrial / Manufacturing' },
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'educational', label: 'Educational' },
  { value: 'retail', label: 'Retail' },
  { value: 'other', label: 'Other' },
];

// Adaptive scope options based on service context
export const COMMERCIAL_SCOPE_DEFAULT = [
  { value: 'new-install', label: 'New system install' },
  { value: 'replacement', label: 'Replacement / Retrofit' },
  { value: 'service-contract', label: 'Ongoing service contract' },
  { value: 'emergency', label: 'Emergency repair' },
  { value: 'other', label: 'Other' },
];

export const COMMERCIAL_SCOPE_BOILERS = [
  { value: 'boiler-service', label: 'Boiler service / repair' },
  { value: 'chiller-service', label: 'Chiller service / repair' },
  { value: 'cooling-tower', label: 'Cooling tower work' },
  { value: 'maintenance-contract', label: 'Maintenance contract' },
  { value: 'emergency', label: 'Emergency repair' },
  { value: 'install-replacement', label: 'New install / replacement' },
];

export const COMMERCIAL_SCOPE_MECHANICAL_ROOMS = [
  { value: 'new-buildout', label: 'New mechanical room buildout' },
  { value: 'retrofit', label: 'Retrofit existing room' },
  { value: 'expansion', label: 'Expansion / capacity upgrade' },
  { value: 'renovation', label: 'Renovation / modernization' },
];

export const COMMERCIAL_SCOPE_HVAC = [
  { value: 'rtu-service', label: 'Rooftop unit (RTU) service' },
  { value: 'vav-work', label: 'VAV system work' },
  { value: 'new-install', label: 'New HVAC install' },
  { value: 'replacement', label: 'Replacement / retrofit' },
  { value: 'controls-bas', label: 'Controls / building automation' },
  { value: 'emergency', label: 'Emergency repair' },
];

export function getCommercialScopeOptions(serviceSlug: string | null) {
  switch (serviceSlug) {
    case 'boilers-chillers':
      return COMMERCIAL_SCOPE_BOILERS;
    case 'mechanical-rooms':
      return COMMERCIAL_SCOPE_MECHANICAL_ROOMS;
    case 'commercial-hvac':
      return COMMERCIAL_SCOPE_HVAC;
    default:
      return COMMERCIAL_SCOPE_DEFAULT;
  }
}

export const COMMERCIAL_TIMELINE = [
  { value: 'immediate', label: 'Immediate / Emergency' },
  { value: '30-days', label: 'Within 30 days' },
  { value: '1-3-months', label: '1-3 months' },
  { value: '3-6-months', label: '3-6 months' },
  { value: 'planning', label: 'Planning / Budgeting phase' },
];

// Business hours for sidebar display
export const BUSINESS_HOURS = [
  { day: 'Monday - Friday', hours: '7:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 2:00 PM' },
  { day: 'Sunday', hours: 'Emergency Service Only' },
];

export const EMERGENCY_NOTE = '24/7 Emergency Service Available Every Day';
