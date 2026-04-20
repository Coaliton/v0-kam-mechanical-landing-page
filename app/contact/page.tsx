import { Suspense } from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact KAM Mechanical | HVAC Service New Orleans',
  description:
    'Request residential AC service or submit a commercial HVAC project inquiry. Serving New Orleans metro & statewide Louisiana. 24/7 emergency.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />

      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <ContactPageClient />
      </Suspense>
    </main>
  );
}
