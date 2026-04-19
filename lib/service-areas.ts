export type ServiceArea = {
  parish: string;
  cities: string[];
};

export const RESIDENTIAL_AREAS: ServiceArea[] = [
  {
    parish: "Orleans Parish",
    cities: ["New Orleans"],
  },
  {
    parish: "Jefferson Parish",
    cities: [
      "Metairie",
      "Kenner",
      "Harvey",
      "Marrero",
      "Westwego",
      "Gretna",
      "River Ridge",
    ],
  },
  {
    parish: "St. Bernard Parish",
    cities: ["Chalmette", "Arabi", "Meraux"],
  },
  {
    parish: "St. Tammany Parish",
    cities: ["Mandeville", "Covington", "Slidell"],
  },
];

export const COMMERCIAL_COVERAGE = {
  description:
    "All residential service areas plus statewide Louisiana coverage for commercial projects.",
  highlights: [
    "New Orleans Metro",
    "Baton Rouge",
    "Lafayette",
    "Shreveport",
    "Lake Charles",
    "Alexandria",
  ],
} as const;
