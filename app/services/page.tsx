import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ServicesIndexHero from '@/components/services/ServicesIndexHero';
import DivisionSection from '@/components/services/DivisionSection';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Services | KAM Mechanical | New Orleans HVAC',
  description: 'Residential and commercial HVAC services across the New Orleans metro and statewide Louisiana. Coil cleaning, AC replacement, emergency repair, commercial systems, boilers, and mechanical room buildouts.',
};

export default function ServicesIndexPage() {
  const residentialServices = [
    'coil-cleaning',
    'ac-replacement',
    'emergency-repair',
  ];
  
  const commercialServices = [
    'commercial-hvac',
    'boilers-chillers',
    'mechanical-rooms',
  ];
  
  return (
    <main className="bg-black min-h-screen">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Services' },
      ]} />
      
      <ServicesIndexHero />
      
      <DivisionSection 
        division="residential"
        anchorId="residential"
        serviceSlugs={residentialServices}
      />
      
      <DivisionSection 
        division="commercial"
        anchorId="commercial"
        serviceSlugs={commercialServices}
      />
      
      <section className="w-full bg-black py-20 md:py-28" aria-labelledby="services-cta-heading">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-yellow-500" aria-hidden />
            <span className="text-xs uppercase tracking-widest 
                             text-yellow-500 font-medium">
              Still Have Questions?
            </span>
            <div className="h-px w-8 bg-yellow-500" aria-hidden />
          </div>
          <h2 id="services-cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold 
                         text-white leading-tight mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-base md:text-lg text-neutral-300 
                        max-w-2xl mx-auto mb-10">
            Every job starts with a conversation. Tell us what's 
            going on and we'll point you in the right direction — 
            no pressure, no runaround.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center 
                          max-w-lg mx-auto">
            <a 
              href={BUSINESS.phoneHref}
              className="flex-1 inline-flex items-center justify-center 
                         gap-2 bg-yellow-500 text-black font-semibold 
                         px-6 py-4 rounded-full 
                         hover:bg-yellow-400 transition-colors
                         focus-visible:outline-none focus-visible:ring-2 
                         focus-visible:ring-yellow-500 focus-visible:ring-offset-2 
                         focus-visible:ring-offset-black"
            >
              <Phone className="w-5 h-5" aria-hidden />
              Call {BUSINESS.phoneFormatted}
            </a>
            <Link 
              href="/contact"
              className="flex-1 inline-flex items-center justify-center 
                         gap-2 border-2 border-yellow-500 text-yellow-500 
                         font-semibold px-6 py-4 rounded-full 
                         hover:bg-yellow-500 hover:text-black 
                         transition-colors
                         focus-visible:outline-none focus-visible:ring-2 
                         focus-visible:ring-yellow-500 focus-visible:ring-offset-2 
                         focus-visible:ring-offset-black"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
