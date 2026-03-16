"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "How do I apply for financing?",
    answer: "Applying is easy! You can apply online through our secure application portal or ask your technician to help you apply on-site. The application takes just a few minutes, and you'll receive a decision within seconds.",
  },
  {
    question: "Will applying affect my credit score?",
    answer: "No. We use a soft credit pull for pre-qualification, which does not impact your credit score. A hard credit inquiry only occurs if you accept the financing offer and proceed with the application.",
  },
  {
    question: "What credit score do I need to qualify?",
    answer: "We work with multiple lending partners to accommodate a wide range of credit profiles. While requirements vary, we have options for customers with credit scores as low as 580. The best rates are available to those with scores above 700.",
  },
  {
    question: "Can I pay off my loan early?",
    answer: "Yes! All of our financing plans have no prepayment penalties. You can pay off your balance at any time without any additional fees.",
  },
  {
    question: "What is the minimum purchase amount for financing?",
    answer: "Minimum purchase amounts vary by plan. Our 0% APR plans start at $500 for 6-month terms and $1,000 for 12-month terms. Longer-term financing typically requires a minimum of $2,500.",
  },
  {
    question: "How long does approval take?",
    answer: "Most applications receive an instant decision. In some cases, additional verification may be required, which can take 1-2 business days.",
  },
]

export function FinancingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 bg-pitch">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-warm mb-2">
              Financing FAQ
            </h2>
            <p className="text-steel">
              Common questions about our financing options
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-charcoal rounded-xl border border-graphite overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-warm pr-4">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-gold flex-shrink-0 transition-transform",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === index ? "max-h-96" : "max-h-0"
                  )}
                >
                  <div className="px-5 pb-5 text-steel">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-steel mb-4">Still have questions about financing?</p>
            <button className="px-8 py-3 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-pitch transition-all">
              Contact Our Finance Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
