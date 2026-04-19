import Image from "next/image";
import { MapPin, Building2, Home, Phone } from "lucide-react";
import { RESIDENTIAL_AREAS, COMMERCIAL_COVERAGE } from "@/lib/service-areas";
import { BUSINESS } from "@/lib/constants";

export default function ServiceAreaSection() {
  return (
    <section
      aria-label="Service area coverage"
      className="w-full bg-black py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-12 max-w-3xl md:mb-16">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-yellow-500" />
            <span className="text-xs font-medium uppercase tracking-widest text-yellow-500">
              Service Area
            </span>
          </div>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Serving New Orleans & All Surrounding Parishes
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-10">
            <div>
              <div className="mb-6 flex items-center gap-2">
                <Home className="h-5 w-5 text-yellow-500" />
                <span className="text-xs font-medium uppercase tracking-widest text-yellow-500">
                  Residential Coverage
                </span>
              </div>

              <div className="space-y-6">
                {RESIDENTIAL_AREAS.map((area) => (
                  <div
                    key={area.parish}
                    className="border-l-2 border-yellow-500/30 pl-4 md:pl-5"
                  >
                    <h3 className="mb-2 flex items-start gap-2 text-lg font-semibold text-white md:text-xl">
                      <MapPin
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500"
                        aria-hidden
                      />
                      {area.parish}
                    </h3>
                    <p className="pl-7 text-sm leading-relaxed text-neutral-300 md:text-base">
                      {area.cities.join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <div className="mb-4 flex items-center gap-2">
                <Building2 className="h-5 w-5 text-yellow-500" />
                <span className="text-xs font-medium uppercase tracking-widest text-yellow-500">
                  Commercial Coverage
                </span>
              </div>
              <p className="mb-3 text-base leading-relaxed text-neutral-200 md:text-lg">
                {COMMERCIAL_COVERAGE.description}
              </p>
              <p className="text-sm text-neutral-400">
                Projects in {COMMERCIAL_COVERAGE.highlights.join(", ")} and
                beyond.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="mb-3 text-base text-neutral-300">
                Not sure if we serve your area?
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 text-lg font-semibold text-yellow-500 transition-colors hover:text-yellow-400"
                aria-label={`Call KAM Mechanical at ${BUSINESS.phoneFormatted}`}
              >
                <Phone className="h-5 w-5" aria-hidden />
                Call {BUSINESS.phoneFormatted}
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 lg:aspect-[4/5] lg:order-last order-first">
            <Image
              src="/images/team/kam-van-branded.jpg"
              alt="KAM Mechanical branded service van"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
