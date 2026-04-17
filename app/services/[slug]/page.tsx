import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Check } from 'lucide-react';
import {
  getServiceContent,
  getAllServiceSlugs,
} from '@/lib/service-content';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceSection from '@/components/services/ServiceSection';
import ProcessSteps from '@/components/services/ProcessSteps';
import PricingCard from '@/components/services/PricingCard';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceCTA from '@/components/services/ServiceCTA';
import ComingSoonStub from '@/components/services/ComingSoonStub';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceContent(slug);

  if (!service) return { title: 'Service Not Found' };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceContent(slug);

  if (!service) {
    notFound();
  }

  if (service.status === 'coming-soon') {
    return (
      <main className="bg-black">
        <ComingSoonStub title={service.heroTitle} subtitle={service.heroSubtitle} />
      </main>
    );
  }

  return (
    <main className="bg-black">
      <ServiceHero title={service.heroTitle} subtitle={service.heroSubtitle} image={service.heroImage} />

      {service.whatItIs && (
        <ServiceSection eyebrow="The Service" title="What It Is">
          <p>{service.whatItIs}</p>
        </ServiceSection>
      )}

      {service.whyItMatters && (
        <ServiceSection
          eyebrow="Why It Matters"
          title="Why You Shouldn't Skip It"
          className="border-y border-white/10 bg-neutral-950"
        >
          <p>{service.whyItMatters}</p>
        </ServiceSection>
      )}

      {service.processSteps && service.processSteps.length > 0 && <ProcessSteps steps={service.processSteps} />}

      {service.beforeAfter && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-yellow-500" />
              <span className="text-xs font-medium uppercase tracking-widest text-yellow-500">Real Results</span>
            </div>
            <h2 className="mb-8 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
              The Difference Is Visible
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              <article className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={service.beforeAfter.beforeImage}
                  alt={`${service.heroTitle} before service`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
                  {service.beforeAfter.beforeLabel ?? 'Before'}
                </div>
              </article>
              <article className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={service.beforeAfter.afterImage}
                  alt={`${service.heroTitle} after service`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute left-4 top-4 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-black">
                  {service.beforeAfter.afterLabel ?? 'After'}
                </div>
              </article>
            </div>
            {service.beforeAfter.caption && (
              <p className="mt-6 text-center text-sm text-neutral-400">{service.beforeAfter.caption}</p>
            )}
          </div>
        </section>
      )}

      {service.included && service.included.length > 0 && (
        <section className="border-y border-white/10 bg-neutral-950 py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-yellow-500" />
              <span className="text-xs font-medium uppercase tracking-widest text-yellow-500">What's Included</span>
            </div>
            <h2 className="mb-8 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
              Everything You Get
            </h2>
            <ul className="space-y-4">
              {service.included.map((item, i) => (
                <li key={item + i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500/20">
                    <Check className="h-4 w-4 text-yellow-500" />
                  </div>
                  <span className="text-base text-neutral-200 md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {service.bonusInspection && (
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-8 bg-yellow-500" />
              <span className="text-xs font-medium uppercase tracking-widest text-yellow-500">Bonus Value</span>
            </div>
            <h2 className="mb-8 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
              {service.bonusInspection.title}
            </h2>
            <ul className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {service.bonusInspection.items.map((item, i) => (
                <li key={item + i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500/20">
                    <Check className="h-4 w-4 text-yellow-500" />
                  </div>
                  <span className="text-base text-neutral-200">{item}</span>
                </li>
              ))}
            </ul>
            {service.bonusInspection.note && (
              <div className="rounded-r-xl border-l-4 border-yellow-500 bg-neutral-900 p-5 md:p-6">
                <p className="text-base italic leading-relaxed text-neutral-200">{service.bonusInspection.note}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {service.pricing && (
        <PricingCard
          tiers={service.pricing.tiers}
          duration={service.pricing.duration}
          durationDisclaimer={service.pricing.durationDisclaimer}
          notes={service.pricing.notes}
        />
      )}

      {service.promise && (
        <section className="border-y border-white/10 bg-neutral-950 py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-yellow-500" />
              <span className="text-xs font-medium uppercase tracking-widest text-yellow-500">Our Promise</span>
              <div className="h-px w-8 bg-yellow-500" />
            </div>
            <p className="mx-auto max-w-3xl text-xl font-medium italic leading-relaxed text-white md:text-2xl">
              "{service.promise}"
            </p>
          </div>
        </section>
      )}

      {service.faqs && service.faqs.length > 0 && <ServiceFAQ faqs={service.faqs} />}

      <ServiceCTA />
    </main>
  );
}
