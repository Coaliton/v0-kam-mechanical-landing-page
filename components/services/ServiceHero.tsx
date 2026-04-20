import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

type ServiceHeroProps = {
  title: string;
  subtitle: string;
  image: string | null;
  bookHref?: string;
};

export default function ServiceHero({ title, subtitle, image, bookHref = '/contact' }: ServiceHeroProps) {
  return (
    <section className="relative w-full border-b border-white/10 bg-black" aria-label="Service overview">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">{title}</h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl">{subtitle}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={bookHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition-colors hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Book This Service
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-yellow-500 px-8 py-4 font-semibold text-yellow-500 transition-colors hover:bg-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
                aria-label={`Call KAM Mechanical at ${BUSINESS.phoneFormatted}`}
              >
                <Phone className="h-5 w-5" />
                {BUSINESS.phoneFormatted}
              </a>
            </div>
          </div>

          {image && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
              <Image src={image} alt={title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
