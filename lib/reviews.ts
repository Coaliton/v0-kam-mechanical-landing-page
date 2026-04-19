export type Review = {
  slug: string;
  quote: string;
  reviewerName: string;
  reviewerContext?: string; // property name, city, etc.
  rating: 1 | 2 | 3 | 4 | 5;
  date: string; // display format: "May 2025"
  source: "housecall-pro" | "google" | "facebook";
};

export const REVIEWS: Review[] = [
  {
    slug: "david-briggs-lighthouse-harbor",
    quote:
      "Has been a true pleasure to work with. Attention to detail has been perfect. Response time and execution also have been excellent. As a former contractor it is a pleasure to work with him.",
    reviewerName: "David Briggs",
    reviewerContext: "Lighthouse Harbor Condos",
    rating: 5,
    date: "May 2025",
    source: "housecall-pro",
  },
  {
    slug: "mike-garibaldi",
    quote: "Very accountable and attentive to the job. Highly recommend.",
    reviewerName: "Mike Garibaldi",
    rating: 5,
    date: "February 2025",
    source: "housecall-pro",
  },
  {
    slug: "kevin-davis",
    quote: "Quick, reliable, and excellent service. Will recommend.",
    reviewerName: "Kevin Davis",
    rating: 5,
    date: "February 2025",
    source: "housecall-pro",
  },
];

export const REVIEW_STATS = {
  averageRating: 5.0,
  totalReviews: 12, // update as you collect more
  ratingLabel: "5.0 Rating",
  countLabel: "12+ Five-Star Reviews",
};
