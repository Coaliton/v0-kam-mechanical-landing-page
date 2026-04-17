export type ProcessStep = {
  number: number;
  title: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type BeforeAfter = {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
};

export type PricingTier = {
  label: string;
  price: string;
  description?: string;
};

export type ServiceContent = {
  slug: string;
  status: 'live' | 'coming-soon';
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string | null;
  whatItIs: string;
  whyItMatters: string;
  processSteps?: ProcessStep[];
  beforeAfter?: BeforeAfter;
  included?: string[];
  bonusInspection?: {
    title: string;
    items: string[];
    note?: string;
  };
  pricing?: {
    tiers: PricingTier[];
    duration: string;
    durationDisclaimer?: string;
    notes?: string[];
  };
  promise?: string;
  faqs?: FAQ[];
};

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  'coil-cleaning': {
    slug: 'coil-cleaning',
    status: 'live',
    metaTitle: 'Coil Cleaning & Tune-Up | KAM Mechanical | New Orleans HVAC',
    metaDescription:
      'Professional AC coil cleaning in New Orleans, Metairie & surrounding parishes. $250 per unit. Honest inspection, no surprise charges. Call (504) 648-6777.',
    heroTitle: 'Coil Cleaning & Tune-Up',
    heroSubtitle:
      'Professional coil cleaning that extends system life, cuts energy bills, and gives you an honest look at your equipment — no surprise charges, no pressure.',
    heroImage: '/images/coil-cleaning/team-cleaning-service.jpg',
    whatItIs:
      "Over time, your outdoor AC unit accumulates dirt, pollen, grass clippings, and Louisiana humidity buildup on its coils. This layer of gunk acts like insulation, forcing your system to work harder to move heat — which means higher energy bills, shorter equipment life, and weaker cooling performance. Professional coil cleaning removes that buildup and restores your system to operate the way it was designed to.",
    whyItMatters:
      "A dirty coil can add 20-30% to your cooling bill and reduce the lifespan of your compressor by years. In the New Orleans climate, where AC units run hard for 8+ months a year, neglecting coil maintenance is one of the fastest ways to kill an expensive system. Most homeowners don't know what their coils look like — and most don't find out until the AC stops cooling on the hottest day of the year.",
    processSteps: [
      {
        number: 1,
        title: 'Arrive & Assess',
        description:
          "A KAM technician arrives in uniform and branded vehicle. We introduce ourselves, confirm the scope of work, and walk you through what we'll be doing before we touch anything.",
      },
      {
        number: 2,
        title: 'Professional Coil Cleaning',
        description:
          'Using professional-grade coil cleaner and proper water pressure, we clean both the outdoor condenser coil and the indoor evaporator coil. This is the core service — done right, done thoroughly.',
      },
      {
        number: 3,
        title: 'System Observation',
        description:
          'While the system runs, we observe its performance. We listen for unusual noises, check visual indicators, and note the condition of supporting equipment — without touching anything beyond the cleaning.',
      },
      {
        number: 4,
        title: 'Walkthrough & Written Report',
        description:
          "Before we leave, we walk you through what we did and what we saw. If we noticed anything worth knowing, we'll show you — honestly, with no pressure. You leave with a written report of our findings.",
      },
    ],
    beforeAfter: {
      beforeImage: '/images/coil-cleaning/coil-dirty-exposed.jpg',
      afterImage: '/images/coil-cleaning/coil-clean-result.jpg',
      caption:
        'Real customer unit in the New Orleans metro. Years of buildup removed in under 90 minutes.',
    },
    included: [
      'Complete outdoor (condenser) coil cleaning with professional-grade solvent',
      'Indoor (evaporator) coil inspection and cleaning',
      'System performance observation during operation',
      'Full equipment walkthrough with written condition report',
      'Honest, no-pressure recommendations on anything we spot',
      'Professional, background-checked KAM technician',
      'Branded, uniformed crew — no mystery contractors',
    ],
    bonusInspection: {
      title: "What We'll Also Look At — Free With Every Cleaning",
      items: [
        'Condenser age and overall condition assessment',
        'Copper refrigerant line insulation check',
        'Capacitor visual inspection for bulging or damage',
        'Disconnect box and electrical connections review',
        'Refrigerant line and drainage evaluation',
        'Thermostat operation verification',
      ],
      note: "We don't touch what we don't need to. If we spot something that needs attention, we'll tell you what we see, what it means, and what it would cost to fix — then you decide. No surprise charges. Ever.",
    },
    pricing: {
      tiers: [
        {
          label: 'Single Unit',
          price: '$250',
          description: 'Standard residential system — one condenser',
        },
        {
          label: 'Each Additional Unit',
          price: '$200',
          description: 'Multi-system homes save $50 per extra unit',
        },
      ],
      duration: '1 to 1.5 hours per unit',
      durationDisclaimer:
        "Larger systems or heavily soiled units may require additional time. We'll always confirm scope and cost before starting the job.",
      notes: [
        'Flat-rate pricing — what we quote is what you pay',
        'No trip charges within our New Orleans metro service area',
        'Scheduling available same-week in most cases',
      ],
    },
    promise:
      "We don't push upgrades. We don't invent problems. We clean what we were hired to clean, we tell you honestly what we see, and we give you the information to make your own decisions. That's the KAM difference.",
    faqs: [
      {
        question: 'How often should I clean my AC coils?',
        answer:
          'In the New Orleans climate, we recommend annual coil cleaning for most residential systems. Homes with pets, heavy pollen exposure, or older systems benefit from twice-yearly cleaning. Commercial systems often need quarterly attention.',
      },
      {
        question: "What's the difference between this and a full tune-up?",
        answer:
          "A tune-up involves hands-on work with your system — checking refrigerant, testing capacitors, adjusting components. Our coil cleaning service focuses exclusively on cleaning and observation. We don't open your system or modify components without explicit permission, which protects you from liability concerns and keeps our pricing honest.",
      },
      {
        question: 'Will you try to sell me a new system?',
        answer:
          "No. If we notice something worth mentioning, we'll tell you — but we don't pressure sell. Our written report gives you the information, and you decide what to do with it. Many customers use our reports to get competing quotes elsewhere.",
      },
      {
        question: 'Do you service commercial properties?',
        answer:
          'Yes. Our commercial division handles rooftop units, multi-zone systems, and large-scale coil cleaning for businesses across Louisiana. Contact us for a commercial quote.',
      },
      {
        question: 'What parishes do you service?',
        answer:
          'Orleans, Jefferson, St. Tammany, St. Charles, St. Bernard, and surrounding parishes for residential work. Commercial work available across Louisiana.',
      },
      {
        question: 'What if you find something wrong?',
        answer:
          "We document what we see in a written report and review it with you before we leave. If you want us to come back and fix something, we'll give you a separate quote for that work. No pressure, no upsell tactics.",
      },
    ],
  },
  'ac-replacement': {
    slug: 'ac-replacement',
    status: 'coming-soon',
    metaTitle: 'AC Replacement & Installation | KAM Mechanical',
    metaDescription:
      'Energy-efficient AC replacement and installation in New Orleans. Coming soon.',
    heroTitle: 'AC Replacement & Installation',
    heroSubtitle:
      'Full-service AC replacement with same-day install options. Detailed page coming soon.',
    heroImage: '/images/residential/ac-install-copper-work.jpg',
    whatItIs: '',
    whyItMatters: '',
  },
  'emergency-repair': {
    slug: 'emergency-repair',
    status: 'coming-soon',
    metaTitle: '24/7 Emergency HVAC Repair | KAM Mechanical',
    metaDescription:
      'Emergency HVAC service in New Orleans. Call (504) 648-6777 day or night.',
    heroTitle: '24/7 Emergency Repair',
    heroSubtitle:
      'No heat or no AC? We respond day or night. Call (504) 648-6777 now.',
    heroImage: null,
    whatItIs: '',
    whyItMatters: '',
  },
  'commercial-hvac': {
    slug: 'commercial-hvac',
    status: 'coming-soon',
    metaTitle: 'Commercial HVAC Systems | KAM Mechanical Louisiana',
    metaDescription:
      'Rooftop units, VAV systems, and building automation across Louisiana.',
    heroTitle: 'Commercial HVAC Systems',
    heroSubtitle:
      'Rooftop units, VAV systems, and building automation. Detailed page coming soon.',
    heroImage: '/images/commercial/commercial-hvac-carrier.jpg',
    whatItIs: '',
    whyItMatters: '',
  },
  'boilers-chillers': {
    slug: 'boilers-chillers',
    status: 'coming-soon',
    metaTitle: 'Boiler & Chiller Service | KAM Mechanical',
    metaDescription:
      'Installation, repair, and maintenance for commercial boilers and chillers.',
    heroTitle: 'Boiler & Chiller Service',
    heroSubtitle:
      'Installation, repair, and maintenance for critical systems. Detailed page coming soon.',
    heroImage: '/images/commercial/boilers-commissioned.jpg',
    whatItIs: '',
    whyItMatters: '',
  },
  'mechanical-rooms': {
    slug: 'mechanical-rooms',
    status: 'coming-soon',
    metaTitle: 'Mechanical Room Buildouts | KAM Mechanical',
    metaDescription:
      'Full mechanical room design and installation across Louisiana.',
    heroTitle: 'Mechanical Room Buildouts',
    heroSubtitle:
      'Full mechanical room design and installation. Detailed page coming soon.',
    heroImage: '/images/commercial/mechanical-room-team-install.jpg',
    whatItIs: '',
    whyItMatters: '',
  },
};

export function getServiceContent(slug: string): ServiceContent | null {
  return SERVICE_CONTENT[slug] ?? null;
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(SERVICE_CONTENT);
}
