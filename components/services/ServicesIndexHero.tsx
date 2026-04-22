import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function ServicesIndexHero() {
  return (
    <section className="relative w-full bg-black border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-8 bg-yellow-500" />
          <span className="text-xs uppercase tracking-widest 
                           text-yellow-500 font-medium">
            Our Services
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold 
                       text-white leading-tight mb-6 max-w-3xl">
          Mechanical Work, Done Right.
        </h1>
        <p className="text-base md:text-lg text-neutral-300 
                      leading-relaxed mb-10 max-w-2xl">
          Two divisions. One standard of quality — whether you're a 
          homeowner needing comfort or a facility manager needing 
          uptime across the New Orleans metro and statewide Louisiana.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="#residential"
            className="inline-flex items-center justify-center gap-2 
                       bg-yellow-500 text-black font-semibold 
                       px-6 py-3 rounded-full 
                       hover:bg-yellow-400 transition-colors
                       focus-visible:outline-none focus-visible:ring-2 
                       focus-visible:ring-yellow-500 focus-visible:ring-offset-2 
                       focus-visible:ring-offset-black"
          >
            Residential Services
            <ArrowDown className="w-4 h-4" aria-hidden />
          </Link>
          <Link 
            href="#commercial"
            className="inline-flex items-center justify-center gap-2 
                       border-2 border-yellow-500 text-yellow-500 
                       font-semibold px-6 py-3 rounded-full 
                       hover:bg-yellow-500 hover:text-black 
                       transition-colors
                       focus-visible:outline-none focus-visible:ring-2 
                       focus-visible:ring-yellow-500 focus-visible:ring-offset-2 
                       focus-visible:ring-offset-black"
          >
            Commercial Work
            <ArrowDown className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
