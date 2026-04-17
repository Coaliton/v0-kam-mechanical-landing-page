export type Transformation = {
  slug: string;
  label: string;
  location: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string; // defaults to "BEFORE"
  afterLabel?: string; // defaults to "AFTER"
};

export const TRANSFORMATIONS: Transformation[] = [
  {
    slug: "ductwork-replacement-marrero",
    label: "Ductwork Replacement",
    location: "Marrero, LA",
    description:
      "Deteriorating ductwork leaking conditioned air replaced with a fresh insulated trunk system and properly strapped takeoffs — restoring full airflow and efficiency.",
    beforeImage: "/images/before-after/ductwork-marrero-before.jpg",
    afterImage: "/images/before-after/ductwork-marrero-after.jpg",
  },
  {
    slug: "coil-cleaning-nola",
    label: "Deep Coil Cleaning & Tune-Up",
    location: "New Orleans, LA",
    description:
      "Years of buildup restricting airflow removed with professional coil cleaning — restoring full system performance in under 2 hours.",
    beforeImage: "/images/coil-cleaning/coil-dirty-exposed.jpg",
    afterImage: "/images/coil-cleaning/coil-clean-result.jpg",
  },
  {
    slug: "mechanical-room-commercial",
    label: "Mechanical Room Buildout",
    location: "Commercial Project",
    description:
      "From raw installation through final commissioning — a fully engineered mechanical room with PK ModuFire boilers, properly piped and ready for operation.",
    beforeImage: "/images/commercial/mechanical-room-team-install.jpg",
    afterImage: "/images/commercial/boilers-commissioned.jpg",
    beforeLabel: "IN PROGRESS",
    afterLabel: "COMMISSIONED",
  },
];
