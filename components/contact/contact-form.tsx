"use client"

import { useState } from "react"
import { Send, Loader2, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

type ServiceType = "commercial" | "residential" | "emergency" | "consultation"

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  serviceType: ServiceType | ""
  projectDetails: string
  preferredContact: "phone" | "email"
  urgency: "standard" | "urgent" | "emergency"
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    projectDetails: "",
    preferredContact: "phone",
    urgency: "standard",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="bg-charcoal border border-border rounded-2xl p-8 lg:p-10 flex flex-col items-center justify-center text-center min-h-[500px]">
        <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-gold" />
        </div>
        <h3 className="font-display text-2xl font-bold text-warm mb-4">
          Thank You!
        </h3>
        <p className="text-steel max-w-md mb-6">
          Your request has been received. Our team will review your project details 
          and contact you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              serviceType: "",
              projectDetails: "",
              preferredContact: "phone",
              urgency: "standard",
            })
          }}
          className="text-gold hover:text-gold/80 font-medium transition-colors"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-charcoal border border-border rounded-2xl p-8 lg:p-10">
      <h2 className="font-display text-2xl font-bold text-warm mb-2">
        Request a Free Estimate
      </h2>
      <p className="text-steel mb-8">
        Fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>

      <div className="space-y-6">
        {/* Name & Email */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-warm mb-2">
              Full Name <span className="text-gold">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-pitch border border-border rounded-lg text-warm placeholder:text-steel/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-warm mb-2">
              Email Address <span className="text-gold">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-pitch border border-border rounded-lg text-warm placeholder:text-steel/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors"
              placeholder="john@company.com"
            />
          </div>
        </div>

        {/* Phone & Company */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-warm mb-2">
              Phone Number <span className="text-gold">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-pitch border border-border rounded-lg text-warm placeholder:text-steel/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-warm mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-pitch border border-border rounded-lg text-warm placeholder:text-steel/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors"
              placeholder="Your Company (if applicable)"
            />
          </div>
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-warm mb-2">
            Service Type <span className="text-gold">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-pitch border border-border rounded-lg text-warm focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors"
          >
            <option value="">Select a service type</option>
            <option value="commercial">Commercial / Industrial</option>
            <option value="residential">Residential</option>
            <option value="emergency">Emergency Service</option>
            <option value="consultation">Consultation / Assessment</option>
          </select>
        </div>

        {/* Urgency */}
        <div>
          <label className="block text-sm font-medium text-warm mb-3">
            Project Urgency
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: "standard", label: "Standard", desc: "2-4 weeks" },
              { value: "urgent", label: "Urgent", desc: "Within 1 week" },
              { value: "emergency", label: "Emergency", desc: "ASAP" },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, urgency: option.value as FormData["urgency"] }))}
                className={cn(
                  "p-3 border rounded-lg text-center transition-all",
                  formData.urgency === option.value
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-border text-steel hover:border-steel"
                )}
              >
                <span className="block font-medium text-sm">{option.label}</span>
                <span className="block text-xs opacity-70">{option.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div>
          <label htmlFor="projectDetails" className="block text-sm font-medium text-warm mb-2">
            Project Details <span className="text-gold">*</span>
          </label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-pitch border border-border rounded-lg text-warm placeholder:text-steel/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-colors resize-none"
            placeholder="Tell us about your project, requirements, and any specific needs..."
          />
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block text-sm font-medium text-warm mb-3">
            Preferred Contact Method
          </label>
          <div className="flex gap-4">
            {[
              { value: "phone", label: "Phone Call" },
              { value: "email", label: "Email" },
            ].map((option) => (
              <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value={option.value}
                  checked={formData.preferredContact === option.value}
                  onChange={handleChange}
                  className="w-4 h-4 text-gold bg-pitch border-border focus:ring-gold/50"
                />
                <span className="text-warm text-sm">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-gold text-pitch font-bold rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Submit Request
            </>
          )}
        </button>

        <p className="text-xs text-steel text-center">
          By submitting this form, you agree to our{" "}
          <a href="/privacy" className="text-gold hover:underline">Privacy Policy</a>
          {" "}and{" "}
          <a href="/terms" className="text-gold hover:underline">Terms of Service</a>.
        </p>
      </div>
    </form>
  )
}
