import { AlertCircle, Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

export default function EmergencyCallout() {
  return (
    <div className="mb-8 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-5 md:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex items-center gap-3">
          <AlertCircle className="h-6 w-6 flex-shrink-0 text-yellow-500" />
          <div>
            <div className="text-base font-semibold text-white md:text-lg">Need service right now?</div>
            <div className="text-sm text-neutral-400">24/7 emergency service — we answer day or night</div>
          </div>
        </div>
        <a
          href={BUSINESS.phoneHref}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black transition-colors hover:bg-yellow-400 sm:ml-auto"
        >
          <Phone className="h-4 w-4" />
          {BUSINESS.phoneFormatted}
        </a>
      </div>
    </div>
  );
}
