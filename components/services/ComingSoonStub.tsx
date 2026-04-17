import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type ComingSoonStubProps = {
  title: string;
  subtitle: string;
};

export default function ComingSoonStub({ title, subtitle }: ComingSoonStubProps) {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-yellow-500">
          Coming Soon
        </div>
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">{title}</h1>
        <p className="mx-auto mb-10 max-w-xl text-lg text-neutral-300">{subtitle}</p>
        <Link href="/services" className="inline-flex items-center gap-2 text-yellow-500 transition-colors hover:text-yellow-400">
          <ArrowLeft className="h-4 w-4" />
          Back to All Services
        </Link>
      </div>
    </section>
  );
}
