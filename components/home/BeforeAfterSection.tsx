import BeforeAfterCard from "./BeforeAfterCard";
import { TRANSFORMATIONS } from "@/lib/transformations";

export default function BeforeAfterSection() {
  return (
    <section
      aria-label="Before and after transformations"
      className="w-full bg-black py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 max-w-3xl md:mb-16">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-yellow-500" />
            <span className="text-xs font-medium uppercase tracking-widest text-yellow-500">
              Real Work. Real Results.
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            See The Difference We Make
          </h2>
          <p className="text-base text-neutral-400 md:text-lg">
            Every job, documented. Every transformation, real. No stock photos.
            No staged shots. Just the work our team does every week across the
            New Orleans metro.
          </p>
        </div>

        <div className="space-y-8 md:space-y-10">
          {TRANSFORMATIONS.map((transformation) => (
            <BeforeAfterCard
              key={transformation.slug}
              transformation={transformation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
