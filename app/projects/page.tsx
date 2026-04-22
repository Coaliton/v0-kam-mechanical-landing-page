import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Projects | KAM Mechanical | New Orleans HVAC',
  description: 'KAM Mechanical project portfolio coming soon. Real work from across the New Orleans metro and Louisiana.',
};

export default function ProjectsPage() {
  return (
    <main className="bg-black min-h-screen">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Projects' },
      ]} />
      
      <section className="min-h-[60vh] flex items-center justify-center 
                          py-20">
        <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 
                          bg-yellow-500/10 border border-yellow-500/30
                          text-yellow-500 text-xs uppercase 
                          tracking-widest font-semibold 
                          px-4 py-2 rounded-full mb-6">
            Coming Soon
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white 
                         mb-6 leading-tight">
            Our Projects
          </h1>
          <p className="text-lg text-neutral-300 mb-4 max-w-xl mx-auto 
                        leading-relaxed">
            We're putting together a portfolio of real KAM Mechanical 
            work — residential transformations and commercial 
            installations across the New Orleans metro and Louisiana.
          </p>
          <p className="text-sm text-neutral-400 mb-10 max-w-xl mx-auto">
            For project references or to discuss your own project, 
            give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center gap-2 
                         text-yellow-500 hover:text-yellow-400 
                         focus-visible:outline-none focus-visible:ring-2 
                         focus-visible:ring-yellow-500 focus-visible:ring-offset-2 
                         focus-visible:ring-offset-black rounded-sm
                         transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center 
                         text-yellow-500 hover:text-yellow-400 
                         focus-visible:outline-none focus-visible:ring-2 
                         focus-visible:ring-yellow-500 focus-visible:ring-offset-2 
                         focus-visible:ring-offset-black rounded-sm
                         transition-colors"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
