import { Star } from "lucide-react";
import ReviewCard from "./ReviewCard";
import { REVIEWS, REVIEW_STATS } from "@/lib/reviews";

export default function SocialProofSection() {
  return (
    <section
      aria-label="Customer reviews and testimonials"
      className="w-full border-y border-white/10 bg-black py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 max-w-3xl md:mb-16">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-yellow-500" />
            <span className="text-xs font-medium uppercase tracking-widest text-yellow-500">
              What Customers Say
            </span>
          </div>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Real Work. Real Results. Real Reviews.
          </h2>

          <div className="flex flex-wrap items-center gap-4">
            <div
              className="flex gap-1"
              aria-label={`${REVIEW_STATS.averageRating} out of 5 stars`}
            >
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-yellow-500 text-yellow-500"
                />
              ))}
            </div>
            <div className="text-lg font-semibold text-white md:text-xl">
              {REVIEW_STATS.ratingLabel}
            </div>
            <div className="text-neutral-400">•</div>
            <div className="text-base text-neutral-300 md:text-lg">
              {REVIEW_STATS.countLabel}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.slug} review={review} />
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-neutral-500">
          Sourced from verified customers via Housecall Pro
        </p>
      </div>
    </section>
  );
}
