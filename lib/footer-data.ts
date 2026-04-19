export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: "Services",
    links: [
      { label: "Coil Cleaning", href: "/services/coil-cleaning" },
      { label: "AC Replacement", href: "/services/ac-replacement" },
      { label: "Emergency Repair", href: "/services/emergency-repair" },
      { label: "Commercial HVAC", href: "/services/commercial-hvac" },
      { label: "Boilers & Chillers", href: "/services/boilers-chillers" },
      { label: "Mechanical Rooms", href: "/services/mechanical-rooms" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
