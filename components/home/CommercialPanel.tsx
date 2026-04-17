import { Building2, Check } from "lucide-react";
import Link from "next/link";

import { ROUTES } from "@/lib/constants";

const items = [
  "Industrial piping & HVAC systems",
  "BIM modeling & coordination",
  "Statewide Louisiana service",
];

export default function CommercialPanel() {
  return (
    <section className="p-8 md:p-12 lg:p-16">
      <header className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37] bg-[rgba(212,175,55,0.1)] px-4 py-1 text-xs uppercase tracking-wide text-[#E5C158]">
        <Building2 className="h-4 w-4 text-[#D4AF37]" aria-hidden="true" />
        <span>Commercial Division</span>
      </header>

      <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
        Mechanical Systems That Power Louisiana
      </h1>

      <p className="mt-4 max-w-lg text-base text-zinc-400 md:text-lg">
        Full-service mechanical contracting for data centers, hospitals,
        industrial facilities, and commercial buildings. From BIM modeling to
        final commissioning-statewide Louisiana service.
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
        href={ROUTES.services}
        className="mt-8 inline-flex rounded-full border-2 border-[#D4AF37] px-8 py-3 font-semibold text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Commercial Solutions &rarr;
      </Link>
    </section>
  );
}
