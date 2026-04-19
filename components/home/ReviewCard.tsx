import { Star, Quote } from "lucide-react";
import type { Review } from "@/lib/reviews";

type ReviewCardProps = {
  review: Review;
};

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article
      className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-neutral-900 p-6 transition-colors hover:border-yellow-500/30 md:p-8"
    >
      <Quote
        className="absolute right-6 top-6 h-8 w-8 text-yellow-500/20"
        aria-hidden="true"
      />

      <div
        className="mb-4 flex gap-1"
        aria-label={`${review.rating} out of 5 stars`}
      >
        {Array.from({ length: review.rating }, (_, i) => (
          <Star
            key={i}
            className="h-5 w-5 fill-yellow-500 text-yellow-500"
          />
        ))}
      </div>

      <p className="mb-6 flex-1 text-base italic leading-relaxed text-neutral-200 md:text-lg">
        &ldquo;{review.quote}&rdquo;
      </p>

      <div className="border-t border-white/10 pt-6">
        <div className="font-semibold text-white">{review.reviewerName}</div>
        {review.reviewerContext ? (
          <div className="mt-0.5 text-sm text-neutral-400">
            {review.reviewerContext}
          </div>
        ) : null}
        <div className="mt-2 text-xs text-neutral-500">{review.date}</div>
      </div>
    </article>
  );
}
