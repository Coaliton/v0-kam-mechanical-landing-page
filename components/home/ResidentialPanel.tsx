import { Check, Home } from "lucide-react";
import Link from "next/link";

import { BUSINESS, ROUTES } from "@/lib/constants";

const items = [
  "24/7 emergency repair",
  "Fixed-price guarantees",
  "Same-day service available",
];

export default function ResidentialPanel() {
  return (
    <section className="p-8 md:p-12 lg:p-16">
      <header className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37] bg-[rgba(212,175,55,0.1)] px-4 py-1 text-xs uppercase tracking-wide text-[#E5C158]">
        <Home className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
        <span>Residential Division</span>
      </header>

      <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
        Home Comfort You Can Trust
      </h1>

      <p className="mt-4 max-w-lg text-base text-zinc-400 md:text-lg">
        HVAC installation, repair, coil cleaning, and whole-home repiping.
        Fixed pricing. Background-checked technicians. Same-day service across
        the New Orleans metro.
      </p>

      <ul className="mt-6 space-y-2 text-sm text-white">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <Link
        href={ROUTES.contact}
        className="mt-8 inline-flex rounded-full bg-[#D4AF37] px-8 py-3 font-semibold text-black transition-colors hover:bg-[#E5C158] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Book Service &rarr;
      </Link>

      <a
        href={BUSINESS.phoneHref}
        aria-label={`Call KAM Mechanical at ${BUSINESS.phone}`}
        className="mt-3 block text-sm text-zinc-400 underline transition-colors hover:text-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Or call {BUSINESS.phoneFormatted} now
      </a>
    </section>
  );
}
