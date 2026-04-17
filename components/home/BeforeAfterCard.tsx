import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Transformation } from "@/lib/transformations";

type BeforeAfterCardProps = {
  transformation: Transformation;
};

export default function BeforeAfterCard({
  transformation,
}: BeforeAfterCardProps) {
  const beforeLabel = transformation.beforeLabel ?? "BEFORE";
  const afterLabel = transformation.afterLabel ?? "AFTER";

  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
      <div className="relative grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/3] md:border-r md:border-white/10">
          <Image
            src={transformation.beforeImage}
            alt={`Before: ${transformation.label}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute left-3 top-3 z-10 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
            {beforeLabel}
          </div>
        </div>

        <div className="relative aspect-[4/3]">
          <Image
            src={transformation.afterImage}
            alt={`After: ${transformation.label}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute left-3 top-3 z-10 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-black">
            {afterLabel}
          </div>
        </div>

        <div
          className="absolute left-1/2 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-500 shadow-lg md:flex"
          aria-hidden="true"
        >
          <ArrowRight className="h-6 w-6 text-black" />
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
          <h3 className="text-lg font-semibold text-white md:text-xl">
            {transformation.label}
          </h3>
          <span className="text-sm text-neutral-400">
            {transformation.location}
          </span>
        </div>
        <p className="max-w-2xl text-sm text-neutral-300 md:text-base">
          {transformation.description}
        </p>
      </div>
    </article>
  );
}
