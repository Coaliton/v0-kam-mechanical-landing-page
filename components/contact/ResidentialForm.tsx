'use client';

import { useState } from 'react';
import { Send, CheckCircle, Info } from 'lucide-react';
import { RESIDENTIAL_ISSUES, RESIDENTIAL_URGENCY, getServiceByIdOrSlug } from '@/lib/contact-config';

type ResidentialFormProps = {
  prefilledService?: string | null;
};

export default function ResidentialForm({ prefilledService }: ResidentialFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    issue:
      prefilledService === 'coil-cleaning'
        ? 'coil-cleaning'
        : prefilledService === 'ac-replacement'
          ? 'ac-replacement'
          : '',
    urgency: '',
    notes: '',
  });

  const service = getServiceByIdOrSlug(prefilledService ?? null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Residential submission:', formData);
    setSubmitted(true);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    const refNumber = `KAM-R-${Date.now().toString().slice(-6)}`;
    return (
      <div className="rounded-2xl border border-yellow-500/30 bg-neutral-900 p-8 text-center md:p-12">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10">
          <CheckCircle className="h-8 w-8 text-yellow-500" />
        </div>
        <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">Request received. Thank you.</h2>
        <p className="mb-2 text-base text-neutral-300">We&apos;ll respond within 24 hours.</p>
        <p className="mb-6 text-sm text-neutral-400">
          Reference: <span className="font-mono text-yellow-500">{refNumber}</span>
        </p>
        <div className="border-t border-white/10 pt-6">
          <p className="mb-2 text-sm text-neutral-400">Need service right now?</p>
          <a href="tel:+15046486777" className="text-lg font-semibold text-yellow-500 hover:text-yellow-400">
            Call (504) 648-6777
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {service && (
        <div className="flex items-start gap-3 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
          <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <p className="text-sm font-medium text-white">Booking: {service.displayName}</p>
            <p className="mt-0.5 text-xs text-neutral-400">Just need your details below.</p>
          </div>
        </div>
      )}

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-300">
          Your Name <span className="text-yellow-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          aria-required="true"
          value={formData.name}
          onChange={(e) => updateField('name', e.target.value)}
          placeholder="John Smith"
          className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-base text-white placeholder:text-neutral-500 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-neutral-300">
            Phone Number <span className="text-yellow-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            aria-required="true"
            value={formData.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            placeholder="(504) 555-0100"
            className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-base text-white placeholder:text-neutral-500 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-300">
            Email <span className="text-yellow-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            aria-required="true"
            value={formData.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-base text-white placeholder:text-neutral-500 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="address" className="mb-2 block text-sm font-medium text-neutral-300">
          Property Address or Neighborhood <span className="text-yellow-500">*</span>
        </label>
        <input
          id="address"
          type="text"
          required
          aria-required="true"
          value={formData.address}
          onChange={(e) => updateField('address', e.target.value)}
          placeholder="123 Magnolia St, Metairie — or just 'Lakeview area'"
          className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-base text-white placeholder:text-neutral-500 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />
      </div>

      <fieldset>
        <legend className="mb-3 block text-sm font-medium text-neutral-300">
          What&apos;s going on? <span className="text-yellow-500">*</span>
        </legend>
        <div className="space-y-2">
          {RESIDENTIAL_ISSUES.map((option) => (
            <label
              key={option.value}
              className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors ${
                formData.issue === option.value
                  ? 'border-yellow-500/50 bg-yellow-500/10'
                  : 'border-white/10 bg-neutral-900 hover:border-white/30'
              }`}
            >
              <input
                type="radio"
                name="issue"
                value={option.value}
                required
                aria-required="true"
                checked={formData.issue === option.value}
                onChange={(e) => updateField('issue', e.target.value)}
                className="h-4 w-4 accent-yellow-500"
              />
              <span className="text-sm text-white">{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-3 block text-sm font-medium text-neutral-300">
          When do you need help? <span className="text-yellow-500">*</span>
        </legend>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {RESIDENTIAL_URGENCY.map((option) => (
            <label
              key={option.value}
              className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg border p-4 text-center transition-colors ${
                formData.urgency === option.value
                  ? 'border-yellow-500/50 bg-yellow-500/10'
                  : 'border-white/10 bg-neutral-900 hover:border-white/30'
              }`}
            >
              <input
                type="radio"
                name="urgency"
                value={option.value}
                required
                aria-required="true"
                checked={formData.urgency === option.value}
                onChange={(e) => updateField('urgency', e.target.value)}
                className="sr-only"
              />
              <span className="text-sm font-medium text-white">{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="notes" className="mb-2 block text-sm font-medium text-neutral-300">
          Additional details (optional)
        </label>
        <textarea
          id="notes"
          rows={4}
          value={formData.notes}
          onChange={(e) => updateField('notes', e.target.value)}
          placeholder="Anything else we should know before we head out?"
          className="w-full resize-none rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-base text-white placeholder:text-neutral-500 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition-colors hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
      >
        Request Service
        <Send className="h-5 w-5" />
      </button>

      <p className="text-center text-xs text-neutral-500">
        By submitting, you agree to our{' '}
        <a href="/privacy" className="text-yellow-500 hover:text-yellow-400">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="/terms" className="text-yellow-500 hover:text-yellow-400">
          Terms of Service
        </a>
        .
      </p>
    </form>
  );
}
