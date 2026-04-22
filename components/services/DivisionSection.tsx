import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Home, Building2, Wrench } from 'lucide-react';
import { getServiceContent } from '@/lib/service-content';

type DivisionSectionProps = {
  division: 'residential' | 'commercial';
  anchorId: string;
  serviceSlugs: string[];
};

export default function DivisionSection({ 
  division, 
  anchorId, 
  serviceSlugs 
}: DivisionSectionProps) {
  const isResidential = division === 'residential';
  const Icon = isResidential ? Home : Building2;
  const divisionLabel = isResidential ? 'Residential Division' : 'Commercial Division';
  const headline = isResidential 
    ? 'For Homes Across the New Orleans Metro'
    : 'Statewide Louisiana Project Work';
  const description = isResidential
    ? 'Service, replacement, and emergency work for homeowners in Orleans, Jefferson, St. Bernard, and St. Tammany parishes.'
    : 'Commercial installations, service contracts, and large-scale mechanical work for businesses across Louisiana.';

  return (
    <section 
      id={anchorId}
      className={`w-full py-20 md:py-28 ${
        isResidential ? 'bg-black' : 'bg-neutral-950 border-y border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <Icon className="w-5 h-5 text-yellow-500" aria-hidden />
            <span className="text-xs uppercase tracking-widest 
                             text-yellow-500 font-semibold">
              {divisionLabel}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold 
                         text-white leading-tight mb-5">
            {headline}
          </h2>
          <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                        gap-6 md:gap-8">
          {serviceSlugs.map((slug) => {
            const service = getServiceContent(slug);
            if (!service) return null;
            
            const isLive = service.status === 'live';
            
            return (
              <article key={slug}>
                <Link
                  href={`/services/${slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl 
                             bg-neutral-900 border border-white/10
                             hover:border-yellow-500/40 
                             transition-all duration-300
                             focus-visible:outline-none focus-visible:ring-2 
                             focus-visible:ring-yellow-500 focus-visible:ring-offset-2 
                             focus-visible:ring-offset-black"
                >
                  {service.heroImage ? (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.heroImage}
                        alt={service.heroTitle}
                        fill
                        className="object-cover group-hover:scale-105 
                                   transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t 
                                      from-black/80 via-black/20 to-transparent" />
                      
                      {!isLive && (
                        <div className="absolute top-4 right-4 
                                        bg-yellow-500/90 text-black 
                                        text-xs uppercase tracking-widest 
                                        font-semibold px-3 py-1 rounded-full">
                          Detail Coming Soon
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-neutral-800">
                      <Wrench className="h-14 w-14 text-neutral-600" aria-hidden />
                      {!isLive && (
                        <div className="absolute top-4 right-4 
                                        bg-yellow-500/90 text-black 
                                        text-xs uppercase tracking-widest 
                                        font-semibold px-3 py-1 rounded-full">
                          Detail Coming Soon
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="text-xl md:text-2xl font-bold text-white 
                                   mb-3 leading-tight 
                                   group-hover:text-yellow-500 
                                   transition-colors">
                      {service.heroTitle}
                    </h3>
                    <p className="text-sm md:text-base text-neutral-400 
                                  leading-relaxed mb-5 line-clamp-3 flex-1">
                      {service.heroSubtitle}
                    </p>
                    <span className="inline-flex items-center gap-2 
                                     text-yellow-500 font-semibold 
                                     text-sm md:text-base
                                     group-hover:gap-3 transition-all">
                      {isLive ? 'Learn more' : 'Request info'}
                      <ArrowRight className="w-4 h-4" aria-hidden />
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
