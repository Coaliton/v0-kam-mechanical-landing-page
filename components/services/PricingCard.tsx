import { Clock, Info } from 'lucide-react';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import type { PricingTier } from '@/lib/service-content';

type PricingCardProps = {
  tiers: PricingTier[];
  duration: string;
  durationDisclaimer?: string;
  notes?: string[];
};

export default function PricingCard({
  tiers,
  duration,
  durationDisclaimer,
  notes,
}: PricingCardProps) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-yellow-500" />
          <span className="text-xs font-medium uppercase tracking-widest text-yellow-500">Pricing & Timing</span>
        </div>
        <h2 className="mb-10 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
          Transparent, Flat-Rate Pricing
        </h2>

        <div className="rounded-2xl border border-yellow-500/20 bg-neutral-900 p-6 md:p-10">
          <div className="mb-8 grid grid-cols-1 gap-6 border-b border-white/10 pb-8 md:grid-cols-2 md:gap-8">
            {tiers.map((tier) => (
              <div key={tier.label}>
                <div className="mb-2 text-sm uppercase tracking-wider text-neutral-400">{tier.label}</div>
                <div className="mb-2 text-4xl font-bold text-yellow-500 md:text-5xl">{tier.price}</div>
                {tier.description && <p className="text-sm text-neutral-400">{tier.description}</p>}
              </div>
            ))}
          </div>

          <div className="mb-4 flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
            <div>
              <div className="mb-1 font-semibold text-white">Typical Duration: {duration}</div>
              {durationDisclaimer && (
                <p className="text-sm leading-relaxed text-neutral-400">{durationDisclaimer}</p>
              )}
            </div>
          </div>

          {notes && notes.length > 0 && (
            <div className="mt-6 space-y-2 border-t border-white/10 pt-6">
              {notes.map((note, i) => (
                <div key={note + i} className="flex items-start gap-2">
                  <Info className="mt-1 h-4 w-4 flex-shrink-0 text-neutral-500" />
                  <p className="text-sm text-neutral-300">{note}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex flex-1 items-center justify-center rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition-colors hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              Book Now
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-yellow-500 px-6 py-3 font-semibold text-yellow-500 transition-colors hover:bg-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
              aria-label={`Call KAM Mechanical at ${BUSINESS.phoneFormatted}`}
            >
              Call {BUSINESS.phoneFormatted}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
