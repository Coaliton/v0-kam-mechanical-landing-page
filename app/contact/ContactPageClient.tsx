'use client';

import { useSearchParams } from 'next/navigation';
import PathSelector from '@/components/contact/PathSelector';
import ResidentialForm from '@/components/contact/ResidentialForm';
import CommercialForm from '@/components/contact/CommercialForm';
import ContactSidebar from '@/components/contact/ContactSidebar';
import EmergencyCallout from '@/components/contact/EmergencyCallout';

export default function ContactPageClient() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') as 'residential' | 'commercial' | null;
  const service = searchParams.get('service');

  const hasPath = type === 'residential' || type === 'commercial';

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-20">
      <div className="mb-10 max-w-3xl md:mb-14">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-yellow-500" />
          <span className="text-xs font-medium uppercase tracking-widest text-yellow-500">Contact KAM Mechanical</span>
        </div>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          {hasPath
            ? type === 'residential'
              ? 'Request Residential Service'
              : 'Commercial Project Inquiry'
            : "Let's Get You Taken Care Of"}
        </h1>
        <p className="max-w-2xl text-base text-neutral-300 md:text-lg">
          {hasPath
            ? type === 'residential'
              ? "Fill out the details below and we'll respond within 24 hours. For emergencies, call us directly."
              : 'Tell us about your project. A member of our commercial team will follow up within 24 hours.'
            : 'Pick the path that fits your needs. Residential service for homes across the New Orleans metro, or commercial project inquiry for businesses statewide.'}
        </p>
      </div>

      {!hasPath ? (
        <PathSelector />
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="space-y-6 lg:col-span-2">
            <PathSelector currentType={type} compact />
            <EmergencyCallout />
            {type === 'residential' ? (
              <ResidentialForm prefilledService={service} />
            ) : (
              <CommercialForm prefilledService={service} />
            )}
          </div>
          <div className="lg:col-span-1">
            <ContactSidebar />
          </div>
        </div>
      )}
    </div>
  );
}
