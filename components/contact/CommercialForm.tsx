'use client';

import { useState } from 'react';
import { Send, CheckCircle, Info } from 'lucide-react';
import {
  COMMERCIAL_PROPERTY_TYPES,
  COMMERCIAL_TIMELINE,
  getCommercialScopeOptions,
  getServiceByIdOrSlug,
} from '@/lib/contact-config';

type CommercialFormProps = {
  prefilledService?: string | null;
};

export default function CommercialForm({ prefilledService }: CommercialFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [scopeError, setScopeError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    phone: '',
    email: '',
    propertyAddress: '',
    propertyType: '',
    scope: [] as string[],
    timeline: '',
    details: '',
  });

  const service = getServiceByIdOrSlug(prefilledService ?? null);
  const scopeOptions = getCommercialScopeOptions(prefilledService ?? null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.scope.length === 0) {
      setScopeError(true);
      return;
    }
    setScopeError(false);
    console.log('Commercial submission:', formData);
    setSubmitted(true);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleScope = (value: string) => {
    setScopeError(false);
    setFormData((prev) => ({
      ...prev,
      scope: prev.scope.includes(value) ? prev.scope.filter((s) => s !== value) : [...prev.scope, value],
    }));
  };

  if (submitted) {
    const refNumber = `KAM-C-${Date.now().toString().slice(-6)}`;
    return (
      <div className="rounded-2xl border border-yellow-500/30 bg-neutral-900 p-8 text-center md:p-12">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10">
          <CheckCircle className="h-8 w-8 text-yellow-500" />
        </div>
        <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">Inquiry received. Thank you.</h2>
        <p className="mb-2 text-base text-neutral-300">
          A member of our commercial team will respond within 24 hours.
        </p>
        <p className="mb-6 text-sm text-neutral-400">
          Reference: <span className="font-mono text-yellow-500">{refNumber}</span>
        </p>
        <div className="mb-6 rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4 text-left">
          <p className="text-sm text-neutral-300">
            <span className="font-semibold text-yellow-500">Need to share drawings, specs, or photos?</span>{' '}
            Email them to{' '}
            <a href="mailto:info@kammechanicalllc.com" className="text-yellow-500 hover:text-yellow-400">
              info@kammechanicalllc.com
            </a>{' '}
            with your reference number in the subject line.
          </p>
        </div>
        <div className="border-t border-white/10 pt-6">
          <p className="mb-2 text-sm text-neutral-400">Emergency commercial issue?</p>
          <a href="tel:+15046486777" className="text-lg font-semibold text-yellow-500 hover:text-yellow-400">
            Call (504) 648-6777
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {service && (
        <div className="flex items-start gap-3 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
          <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
          <div>
            <p className="text-sm font-medium text-white">Inquiry type: {service.displayName}</p>
            <p className="mt-0.5 text-xs text-neutral-400">Scope options below are tailored to this service.</p>
          </div>
        </div>
      )}

      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="h-px w-6 bg-yellow-500" />
          <span className="text-xs font-semibold uppercase tracking-widest text-yellow-500">Who You Are</span>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="commercial-name" className="mb-2 block text-sm font-medium text-neutral-300">
              Your Name <span className="text-yellow-500">*</span>
            </label>
            <input
              id="commercial-name"
              type="text"
              required
              aria-required="true"
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-base text-white placeholder:text-neutral-500 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-medium text-neutral-300">
                Company Name <span className="text-yellow-500">*</span>
              </label>
              <input
                id="company"
                type="text"
                required
                aria-required="true"
                value={formData.company}
                onChange={(e) => updateField('company', e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-base text-white focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="role" className="mb-2 block text-sm font-medium text-neutral-300">
                Role / Title
              </label>
              <input
                id="role"
                type="text"
                value={formData.role}
                onChange={(e) => updateField('role', e.target.value)}
                placeholder="Facilities Manager, GC, Owner..."
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-base text-white placeholder:text-neutral-500 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="commercial-phone" className="mb-2 block text-sm font-medium text-neutral-300">
                Phone Number <span className="text-yellow-500">*</span>
              </label>
              <input
                id="commercial-phone"
                type="tel"
                required
                aria-required="true"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-base text-white focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="commercial-email" className="mb-2 block text-sm font-medium text-neutral-300">
                Email <span className="text-yellow-500">*</span>
              </label>
              <input
                id="commercial-email"
                type="email"
                required
                aria-required="true"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-base text-white focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="h-px w-6 bg-yellow-500" />
          <span className="text-xs font-semibold uppercase tracking-widest text-yellow-500">Property Details</span>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="propertyAddress" className="mb-2 block text-sm font-medium text-neutral-300">
              Property Address <span className="text-yellow-500">*</span>
            </label>
            <input
              id="propertyAddress"
              type="text"
              required
              aria-required="true"
              value={formData.propertyAddress}
              onChange={(e) => updateField('propertyAddress', e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-base text-white focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label htmlFor="propertyType" className="mb-2 block text-sm font-medium text-neutral-300">
              Property Type <span className="text-yellow-500">*</span>
            </label>
            <select
              id="propertyType"
              required
              aria-required="true"
              value={formData.propertyType}
              onChange={(e) => updateField('propertyType', e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-base text-white focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
            >
              <option value="">Select property type</option>
              {COMMERCIAL_PROPERTY_TYPES.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="h-px w-6 bg-yellow-500" />
          <span className="text-xs font-semibold uppercase tracking-widest text-yellow-500">What You Need</span>
        </div>
        <fieldset aria-invalid={scopeError || undefined}>
          <legend className="mb-3 block text-sm font-medium text-neutral-300">
            Scope of work <span className="text-yellow-500">*</span>
            <span className="mt-1 block text-xs font-normal text-neutral-500">Select all that apply</span>
          </legend>
          {scopeError && (
            <p className="mb-3 text-sm text-red-400" role="alert">
              Please select at least one scope option.
            </p>
          )}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {scopeOptions.map((option) => (
              <label
                key={option.value}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors ${
                  formData.scope.includes(option.value)
                    ? 'border-yellow-500/50 bg-yellow-500/10'
                    : 'border-white/10 bg-neutral-900 hover:border-white/30'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.scope.includes(option.value)}
                  onChange={() => toggleScope(option.value)}
                  className="h-4 w-4 accent-yellow-500"
                />
                <span className="text-sm text-white">{option.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="h-px w-6 bg-yellow-500" />
          <span className="text-xs font-semibold uppercase tracking-widest text-yellow-500">Timeline</span>
        </div>
        <fieldset>
          <legend className="mb-3 block text-sm font-medium text-neutral-300">
            Project timeline <span className="text-yellow-500">*</span>
          </legend>
          <div className="space-y-2">
            {COMMERCIAL_TIMELINE.map((option) => (
              <label
                key={option.value}
                className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors ${
                  formData.timeline === option.value
                    ? 'border-yellow-500/50 bg-yellow-500/10'
                    : 'border-white/10 bg-neutral-900 hover:border-white/30'
                }`}
              >
                <input
                  type="radio"
                  name="timeline"
                  value={option.value}
                  required
                  aria-required="true"
                  checked={formData.timeline === option.value}
                  onChange={(e) => updateField('timeline', e.target.value)}
                  className="h-4 w-4 accent-yellow-500"
                />
                <span className="text-sm text-white">{option.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="h-px w-6 bg-yellow-500" />
          <span className="text-xs font-semibold uppercase tracking-widest text-yellow-500">Project Details</span>
        </div>
        <div>
          <label htmlFor="details" className="mb-2 block text-sm font-medium text-neutral-300">
            Tell us about your project <span className="text-yellow-500">*</span>
          </label>
          <textarea
            id="details"
            rows={6}
            required
            aria-required="true"
            value={formData.details}
            onChange={(e) => updateField('details', e.target.value)}
            placeholder="Existing equipment, square footage, specific requirements, problem description, project phase (design/permit/bid)..."
            className="w-full resize-none rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-base text-white placeholder:text-neutral-500 focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
          />
          <p className="mt-2 text-xs text-neutral-500">
            Have drawings, specs, or photos? You can email those to info@kammechanicalllc.com after you submit this
            form.
          </p>
        </div>
      </section>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-semibold text-black transition-colors hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black"
      >
        Submit Inquiry
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
