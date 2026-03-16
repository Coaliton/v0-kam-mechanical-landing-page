"use client"

import { useState } from "react"
import { ChevronDown, Building2, Home } from "lucide-react"
import { cn } from "@/lib/utils"

const commercialFAQs = [
  {
    question: "What are typical project timelines for commercial installations?",
    answer: "Project timelines vary based on scope. Small commercial HVAC replacements typically take 2-4 weeks. Large-scale industrial piping or chiller installations range from 3-6 months. We provide detailed project schedules during the bid phase and maintain weekly progress updates throughout."
  },
  {
    question: "What safety certifications does KAM hold?",
    answer: "KAM holds OSHA 30-hour certifications for all field supervisors, EPA 608 Universal certifications, and maintains a 100% safety record. We're also certified for work in healthcare facilities (ICRA), data centers, and food processing environments."
  },
  {
    question: "Do you offer off-hours or weekend scheduling?",
    answer: "Yes. We understand commercial operations can't always shut down during business hours. We offer nights, weekends, and holiday scheduling at standard rates for planned maintenance. Emergency services are available 24/7 with priority response times."
  },
]

const residentialFAQs = [
  {
    question: "Are there any hidden fees or surprise charges?",
    answer: "Never. We provide fixed-price quotes before any work begins. The price we quote is the price you pay—even if the job takes longer than expected. We believe in complete transparency and itemize every component of your quote."
  },
  {
    question: "Are your technicians background checked?",
    answer: "Absolutely. Every KAM technician undergoes a comprehensive background check, drug screening, and ongoing safety training. Our technicians are uniformed, drive marked vehicles, and will always present ID before entering your home."
  },
  {
    question: "What warranties do you offer for residential work?",
    answer: "All residential installations include a 2-year workmanship warranty. Most equipment comes with manufacturer warranties of 5-10 years, which we help you register and maintain. Our maintenance plan customers receive extended labor coverage at no extra cost."
  },
]

function FAQItem({ question, answer, isOpen, onToggle }: { 
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-warm group-hover:text-gold transition-colors pr-4">
          {question}
        </span>
        <ChevronDown className={cn(
          "w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300",
          isOpen && "rotate-180"
        )} />
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-out",
        isOpen ? "max-h-96 pb-5" : "max-h-0"
      )}>
        <p className="text-steel leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  )
}

function FAQColumn({ title, icon: Icon, faqs, openIndex, setOpenIndex, offset = 0 }: {
  title: string
  icon: React.ElementType
  faqs: typeof commercialFAQs
  openIndex: number | null
  setOpenIndex: (index: number | null) => void
  offset?: number
}) {
  return (
    <div>
      {/* Column Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
          <Icon className="w-5 h-5 text-gold" />
        </div>
        <h3 className="font-display font-semibold text-lg text-warm">{title}</h3>
      </div>
      
      {/* FAQ Items */}
      <div className="bg-charcoal border border-border rounded-xl px-6">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index + offset}
            onToggle={() => setOpenIndex(openIndex === index + offset ? null : index + offset)}
          />
        ))}
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 lg:py-32 bg-charcoal">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-sm font-medium text-gold mb-6">
            Common Questions
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-warm mb-6 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-steel leading-relaxed text-pretty">
            Get answers to the most common questions about our commercial and residential services.
          </p>
        </div>

        {/* Two Column FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <FAQColumn 
            title="Commercial" 
            icon={Building2} 
            faqs={commercialFAQs}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            offset={0}
          />
          <FAQColumn 
            title="Residential" 
            icon={Home} 
            faqs={residentialFAQs}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
            offset={10}
          />
        </div>
      </div>
    </section>
  )
}
