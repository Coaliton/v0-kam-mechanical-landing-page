import type { ProcessStep } from '@/lib/service-content';

type ProcessStepsProps = {
  steps: ProcessStep[];
};

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <section className="border-y border-white/10 bg-neutral-950 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px w-8 bg-yellow-500" />
          <span className="text-xs font-medium uppercase tracking-widest text-yellow-500">Our Process</span>
        </div>
        <h2 className="mb-10 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl">
          How It Works, Step By Step
        </h2>

        <div className="space-y-6 md:space-y-8">
          {steps.map((step) => (
            <article key={step.number} className="flex items-start gap-5 md:gap-8">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500 text-xl font-bold text-black md:h-14 md:w-14 md:text-2xl">
                {step.number}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">{step.title}</h3>
                <p className="text-base leading-relaxed text-neutral-300">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
