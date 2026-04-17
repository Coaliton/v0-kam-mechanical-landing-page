import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export default function ServiceCTA() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
          Ready to Get Started?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-neutral-300 md:text-xl">
          Book online or call now. 24/7 emergency service available across the New Orleans metro.
        </p>

        <div className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition-colors hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Book Service
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-yellow-500 px-8 py-4 font-semibold text-yellow-500 transition-colors hover:bg-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label={`Call KAM Mechanical at ${BUSINESS.phoneFormatted}`}
          >
            <Phone className="h-5 w-5" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
