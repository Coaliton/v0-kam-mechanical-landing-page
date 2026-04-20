'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Home, Building2, ArrowRight } from 'lucide-react';

type PathSelectorProps = {
  currentType?: 'residential' | 'commercial';
  compact?: boolean;
};

export default function PathSelector({ currentType, compact = false }: PathSelectorProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setType = (type: 'residential' | 'commercial') => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('type', type);
    router.push(`/contact?${params.toString()}`);
  };

  if (compact && currentType) {
    return (
      <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-6">
        <span className="text-sm text-neutral-400">Path:</span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setType('residential')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              currentType === 'residential'
                ? 'bg-yellow-500 text-black'
                : 'bg-white/5 text-neutral-400 hover:bg-white/10'
            }`}
          >
            Residential
          </button>
          <button
            type="button"
            onClick={() => setType('commercial')}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              currentType === 'commercial'
                ? 'bg-yellow-500 text-black'
                : 'bg-white/5 text-neutral-400 hover:bg-white/10'
            }`}
          >
            Commercial
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
      <button
        type="button"
        onClick={() => setType('residential')}
        className="group relative overflow-hidden rounded-2xl border-2 border-white/10 bg-neutral-950 p-8 text-left transition-all hover:border-yellow-500/50 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 md:p-10"
      >
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">
          <Home className="h-7 w-7 text-yellow-500" />
        </div>
        <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">Residential Service</h3>
        <p className="mb-6 text-base leading-relaxed text-neutral-300">
          AC repair, replacement, coil cleaning, heating — for your home across the New Orleans metro.
        </p>
        <span className="inline-flex items-center gap-2 font-semibold text-yellow-500 transition-all group-hover:gap-3">
          Start residential request
          <ArrowRight className="h-4 w-4" />
        </span>
      </button>

      <button
        type="button"
        onClick={() => setType('commercial')}
        className="group relative overflow-hidden rounded-2xl border-2 border-white/10 bg-neutral-950 p-8 text-left transition-all hover:border-yellow-500/50 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 md:p-10"
      >
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10">
          <Building2 className="h-7 w-7 text-yellow-500" />
        </div>
        <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">Commercial Project</h3>
        <p className="mb-6 text-base leading-relaxed text-neutral-300">
          HVAC systems, boilers, chillers, mechanical rooms, service contracts — statewide Louisiana coverage.
        </p>
        <span className="inline-flex items-center gap-2 font-semibold text-yellow-500 transition-all group-hover:gap-3">
          Start commercial inquiry
          <ArrowRight className="h-4 w-4" />
        </span>
      </button>
    </div>
  );
}
