"use client"

import { useState } from "react"
import { ChevronDown, Thermometer, Droplets, DollarSign, Shield, Clock, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  {
    id: "hvac",
    title: "Heating & Cooling",
    icon: Thermometer,
    questions: [
      {
        q: "How often should I replace my air filter?",
        a: "We recommend replacing standard air filters every 1-3 months, depending on usage and air quality. Homes with pets or allergies may need more frequent changes. High-efficiency filters can last longer but should be checked monthly."
      },
      {
        q: "What size HVAC system do I need?",
        a: "System sizing depends on your home's square footage, insulation, climate zone, window efficiency, and other factors. Oversized units cycle frequently and waste energy, while undersized units run constantly. We perform a Manual J load calculation to determine the perfect size."
      },
      {
        q: "How long do HVAC systems typically last?",
        a: "With proper maintenance, furnaces last 15-20 years and air conditioners last 15-20 years. Heat pumps typically last 10-15 years. Regular maintenance can extend these lifespans significantly."
      },
      {
        q: "What's the difference between SEER ratings?",
        a: "SEER (Seasonal Energy Efficiency Ratio) measures cooling efficiency. Higher SEER ratings mean lower energy bills. While 14 SEER is the minimum allowed, we recommend 16-20 SEER for optimal efficiency and savings."
      },
    ]
  },
  {
    id: "plumbing",
    title: "Plumbing",
    icon: Droplets,
    questions: [
      {
        q: "What should I do if I have a burst pipe?",
        a: "Immediately shut off your main water supply, usually located near the water meter. Open faucets to relieve pressure, then call us for emergency service. We offer 24/7 emergency response with typical arrival times under 60 minutes."
      },
      {
        q: "How can I prevent frozen pipes?",
        a: "Insulate exposed pipes, especially in unheated areas. During extreme cold, let faucets drip slightly and open cabinet doors to allow warm air circulation. We offer pipe insulation services and freeze prevention solutions."
      },
      {
        q: "When should I consider repiping my home?",
        a: "Consider repiping if you have galvanized pipes over 40 years old, frequent leaks, rusty or discolored water, or low water pressure throughout the house. We offer whole-home repiping with minimal disruption."
      },
      {
        q: "How do I know if I need a water heater replacement?",
        a: "Signs include age over 10-12 years, rust-colored water, rumbling noises, leaks around the base, or inconsistent hot water. We can assess your unit and recommend repair vs. replacement options."
      },
    ]
  },
  {
    id: "pricing",
    title: "Pricing & Payment",
    icon: DollarSign,
    questions: [
      {
        q: "Do you offer free estimates?",
        a: "Yes! We provide free estimates for most projects including new installations, system replacements, and major repairs. Diagnostic fees may apply for troubleshooting existing system issues, which are waived if you proceed with repair."
      },
      {
        q: "What payment options do you accept?",
        a: "We accept all major credit cards, checks, and cash. We also offer financing through several partners with terms from 12-120 months, including 0% APR options for qualified buyers."
      },
      {
        q: "Do you offer senior or military discounts?",
        a: "Yes, we offer 10% off labor for seniors (65+) and active military/veterans. These discounts cannot be combined with other promotions but can be applied to maintenance plan memberships."
      },
      {
        q: "What is your service call fee?",
        a: "Our diagnostic/service call fee is $89, which covers the technician's visit and initial assessment. This fee is waived if you proceed with the recommended repair with us."
      },
    ]
  },
  {
    id: "warranty",
    title: "Warranties & Guarantees",
    icon: Shield,
    questions: [
      {
        q: "What warranties do you offer?",
        a: "We provide a 1-year labor warranty on all repairs and installations. Equipment warranties vary by manufacturer, typically 5-10 years on parts. Extended warranty packages are available for additional peace of mind."
      },
      {
        q: "What is your satisfaction guarantee?",
        a: "We stand behind our work 100%. If you're not completely satisfied within 30 days of service, we will make it right at no additional cost. For new installations, we offer a 1-year satisfaction guarantee."
      },
      {
        q: "Do warranties transfer if I sell my home?",
        a: "Yes, our labor warranties and any manufacturer warranties transfer to the new homeowner. We provide documentation to facilitate the transfer during the home sale process."
      },
    ]
  },
  {
    id: "scheduling",
    title: "Scheduling & Service",
    icon: Clock,
    questions: [
      {
        q: "How quickly can you schedule service?",
        a: "We typically offer same-day or next-day service for most repairs. Emergency services are available 24/7 with response times typically under 60 minutes. New installations are usually scheduled within 1-2 weeks."
      },
      {
        q: "What are your service hours?",
        a: "Regular service hours are Monday-Friday 7AM-6PM and Saturday 8AM-2PM. Emergency services are available 24/7/365. After-hours calls are answered by our dispatch team, not an answering service."
      },
      {
        q: "Will I know when the technician is arriving?",
        a: "Yes! You will receive a text/email confirmation with your appointment window, a notification when the technician is dispatched, and real-time GPS tracking of their arrival."
      },
    ]
  },
  {
    id: "maintenance",
    title: "Maintenance Plans",
    icon: Wrench,
    questions: [
      {
        q: "What's included in a maintenance plan?",
        a: "Our Comfort Club includes 2 tune-ups per year (heating and cooling), priority scheduling, 15% service discount, no overtime charges, and free filter delivery. Premium plans include additional benefits."
      },
      {
        q: "Is a maintenance plan worth it?",
        a: "Absolutely. Regular maintenance extends equipment life by up to 40%, improves efficiency by 15-25%, reduces breakdowns by up to 95%, and maintains manufacturer warranty coverage. Most members save more than the plan cost annually."
      },
      {
        q: "Can I cancel my maintenance plan?",
        a: "Yes, you can cancel anytime with 30 days notice. If canceling within the first year, a prorated refund applies based on services received. There are no cancellation fees after the first year."
      },
    ]
  },
]

export function FAQCategories() {
  const [activeCategory, setActiveCategory] = useState("hvac")
  const [openQuestions, setOpenQuestions] = useState<string[]>([])

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    )
  }

  const activeData = categories.find((c) => c.id === activeCategory)

  return (
    <section className="py-20 bg-pitch">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id)
                    setOpenQuestions([])
                  }}
                  className={cn(
                    "flex items-center gap-3 w-full p-4 rounded-xl transition-all text-left",
                    activeCategory === category.id
                      ? "bg-gold text-pitch"
                      : "bg-charcoal text-steel hover:text-warm border border-gold/10 hover:border-gold/30"
                  )}
                >
                  <category.icon className={cn(
                    "w-5 h-5",
                    activeCategory === category.id ? "text-pitch" : "text-gold"
                  )} />
                  <span className="font-medium">{category.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Questions */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-8">
              {activeData && <activeData.icon className="w-8 h-8 text-gold" />}
              <h2 className="font-display text-2xl font-bold text-warm">
                {activeData?.title}
              </h2>
            </div>

            <div className="space-y-4">
              {activeData?.questions.map((item, index) => {
                const questionId = `${activeCategory}-${index}`
                const isOpen = openQuestions.includes(questionId)

                return (
                  <div
                    key={questionId}
                    className="bg-charcoal border border-gold/10 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(questionId)}
                      className="flex items-center justify-between w-full p-6 text-left"
                    >
                      <span className="font-medium text-warm pr-4">{item.q}</span>
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-gold flex-shrink-0 transition-transform duration-200",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        isOpen ? "max-h-96" : "max-h-0"
                      )}
                    >
                      <div className="px-6 pb-6 text-steel leading-relaxed">
                        {item.a}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
