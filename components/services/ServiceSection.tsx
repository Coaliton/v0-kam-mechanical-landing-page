import type { ReactNode } from 'react';

type ServiceSectionProps = {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function ServiceSection({
  eyebrow,
  title,
  children,
  className = '',
}: ServiceSectionProps) {
  return (
    <section className={`py-16 md:py-20 ${className}`}>
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        {eyebrow && (
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8 bg-yellow-500" />
            <span className="text-xs font-medium uppercase tracking-widest text-yellow-500">{eyebrow}</span>
          </div>
        )}
        <h2 className="mb-6 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">{title}</h2>
        <div className="text-base leading-relaxed text-neutral-300 md:text-lg">{children}</div>
      </div>
    </section>
  );
}
