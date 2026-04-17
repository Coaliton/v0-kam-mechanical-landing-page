import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/services";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  const href = `/services/${service.slug}`;

  return (
    <Link
      href={href}
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 transition-all duration-300 hover:scale-[1.02] hover:border-yellow-500/40 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
      aria-label={`Learn more about ${service.title}`}
    >
      {service.badge && (
        <div className="absolute top-4 left-4 z-20 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-black">
          {service.badge}
        </div>
      )}

      {service.image ? (
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 80vw, (max-width: 1024px) 33vw, 400px"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-950">
          <Icon className="mb-4 h-16 w-16 text-yellow-500/40" />
          <span className="text-xs uppercase tracking-widest text-neutral-600">
            Photo Coming Soon
          </span>
        </div>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/70 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div>
          <h3 className="text-lg leading-tight font-semibold text-white md:text-xl">
            {service.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs text-neutral-400 md:text-sm">
            {service.shortDescription}
          </p>
        </div>
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500/90 transition-transform duration-300 group-hover:rotate-45">
          <ArrowUpRight className="h-5 w-5 text-black" />
        </div>
      </div>
    </Link>
  );
}
