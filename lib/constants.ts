export const BUSINESS = {
  name: "KAM Mechanical LLC",
  phone: "504-648-6777",
  phoneFormatted: "(504) 648-6777",
  phoneHref: "tel:+15046486777",
  email: "info@kammechanicalllc.com",
  emailHref: "mailto:info@kammechanicalllc.com",
  emergencyText: "24/7 Emergency Service Available",
  serviceArea: "Serving New Orleans, Metairie, Kenner & surrounding parishes",
  extendedArea: "Commercial service available across Louisiana",
  social: {
    facebook: "https://facebook.com/kammechanicalllc",
    google: "https://g.page/kammechanicalllc",
  },
} as const;

export const COLORS = {
  background: "#000000",
  backgroundAlt: "#0a0a0a",
  gold: "#D4AF37",
  goldLight: "#E5C158",
  goldMuted: "rgba(212, 175, 55, 0.1)",
  text: "#FFFFFF",
  textMuted: "#A0A0A0",
  border: "rgba(212, 175, 55, 0.2)",
} as const;

export const ROUTES = {
  home: "/",
  services: "/services",
  projects: "/projects",
  about: "/about",
  contact: "/contact",
  coilCleaning: "/services/coil-cleaning",
  commercial: "/services/commercial",
  residential: "/services/residential",
} as const;
