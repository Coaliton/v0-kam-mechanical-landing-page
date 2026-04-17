import {
  Wind,
  Flame,
  Wrench,
  Droplets,
  Snowflake,
  AlertCircle,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  division: "commercial" | "residential";
  image: string | null; // null = use placeholder
  icon: LucideIcon; // fallback icon for placeholder
  featured?: boolean;
  badge?: string;
};

export const SERVICES: Service[] = [
  // COMMERCIAL
  {
    slug: "commercial-hvac",
    title: "Commercial HVAC Systems",
    shortDescription: "Rooftop units, VAV systems, and building automation",
    division: "commercial",
    image: "/images/commercial/commercial-hvac-carrier.jpg",
    icon: Wind,
  },
  {
    slug: "boilers-chillers",
    title: "Boiler & Chiller Service",
    shortDescription: "Installation, repair, and maintenance for critical systems",
    division: "commercial",
    image: "/images/commercial/boilers-commissioned.jpg",
    icon: Flame,
  },
  {
    slug: "mechanical-rooms",
    title: "Mechanical Room Buildouts",
    shortDescription: "Full mechanical room design and installation",
    division: "commercial",
    image: "/images/commercial/mechanical-room-team-install.jpg",
    icon: Wrench,
  },

  // RESIDENTIAL
  {
    slug: "coil-cleaning",
    title: "Coil Cleaning & Tune-Ups",
    shortDescription: "Extend system life and cut energy bills",
    division: "residential",
    image: "/images/coil-cleaning/team-cleaning-service.jpg",
    icon: Droplets,
    featured: true,
    badge: "Most Popular",
  },
  {
    slug: "ac-replacement",
    title: "AC Replacement & Installation",
    shortDescription: "Energy-efficient units with same-day install",
    division: "residential",
    image: "/images/residential/ac-install-copper-work.jpg",
    icon: Snowflake,
  },
  {
    slug: "emergency-repair",
    title: "24/7 Emergency Repair",
    shortDescription: "No heat or no AC? We respond day or night",
    division: "residential",
    image: null, // placeholder until reshoot
    icon: AlertCircle,
  },
];

export function getServicesByDivision(division: "commercial" | "residential") {
  return SERVICES.filter((service) => service.division === division);
}
