import type { FAQ } from '@/lib/service-content';

type ServiceFAQProps = {
  faqs: FAQ[];
};

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
  return (
    <section className="border-y border-white/10 bg-neutral-950 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-yellow-500" />
          <span className="text-xs font-medium uppercase tracking-widest text-yellow-500">
            Frequently Asked Questions
          </span>
        </div>
        <h2 className="mb-10 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
          Questions? We've Got Answers.
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={faq.question + i}
              className="group rounded-xl border border-white/10 bg-neutral-900 p-6 transition-colors hover:border-yellow-500/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-white">
                <span>{faq.question}</span>
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-500 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-neutral-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
