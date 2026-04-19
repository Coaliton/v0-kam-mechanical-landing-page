import Link from "next/link";
import { Phone, ArrowRight, Check } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function FinalCTASection() {
  return (
    <section
      aria-label="Contact KAM Mechanical"
      className="w-full bg-gradient-to-b from-black via-neutral-950 to-black py-20 md:py-28 border-y border-yellow-500/20"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-yellow-500" />
          <span className="text-xs uppercase tracking-widest text-yellow-500 font-medium">
            Ready When You Are
          </span>
          <div className="h-px w-8 bg-yellow-500" />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          Let&apos;s Get Your Home or Business
          <br className="hidden md:block" /> Running Right
        </h2>

        <p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto mb-10">
          Licensed. Local. Background-checked. Book online or call — we answer day or night
          across the New Orleans metro.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-10">
          <Link
            href="/contact"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full hover:bg-yellow-400 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Book Service
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-yellow-500 text-yellow-500 font-semibold px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition-colors"
            aria-label={`Call KAM Mechanical at ${BUSINESS.phoneFormatted}`}
          >
            <Phone className="w-5 h-5" />
            {BUSINESS.phoneFormatted}
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-neutral-400">
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-yellow-500" />
            24/7 Emergency
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-yellow-500" />
            Fixed-Rate Pricing
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-yellow-500" />
            Same-Day Available
          </span>
        </div>
      </div>
    </section>
  );
}
