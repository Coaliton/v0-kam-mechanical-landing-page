import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceCard from "./ServiceCard";
import type { Service } from "@/lib/services";

type DivisionRowProps = {
  eyebrow: string;
  headline: string;
  description: string;
  services: Service[];
  viewAllHref: string;
  viewAllLabel: string;
};

export default function DivisionRow({
  eyebrow,
  headline,
  description,
  services,
  viewAllHref,
  viewAllLabel,
}: DivisionRowProps) {
  return (
    <div className="mb-20 last:mb-0">
      <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-yellow-500" />
            <span className="text-xs font-medium tracking-widest text-yellow-500 uppercase">
              {eyebrow}
            </span>
          </div>
          <h2 className="max-w-xl text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
            {headline}
          </h2>
        </div>
        <div className="flex flex-col items-start gap-4 md:max-w-sm md:items-end">
          <p className="text-base text-neutral-400">{description}</p>
          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-yellow-500 transition-colors hover:text-yellow-400"
          >
            {viewAllLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 md:overflow-visible max-md:-mx-4 max-md:flex max-md:snap-x max-md:snap-mandatory max-md:overflow-x-auto max-md:px-4 max-md:pb-4 [&::-webkit-scrollbar]:hidden">
        {services.map((service) => (
          <div
            key={service.slug}
            className="max-md:w-[80%] max-md:flex-shrink-0 max-md:snap-center"
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
}
