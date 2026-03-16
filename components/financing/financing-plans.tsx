import { Check, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "6 Months",
    rate: "0%",
    rateLabel: "APR",
    description: "Same as cash if paid in full",
    features: [
      "No interest if paid in 6 months",
      "Low minimum monthly payments",
      "No prepayment penalty",
      "Quick online application",
    ],
    popular: false,
    minPurchase: "$500",
  },
  {
    name: "12 Months",
    rate: "0%",
    rateLabel: "APR",
    description: "Extended interest-free period",
    features: [
      "No interest if paid in 12 months",
      "Manageable monthly payments",
      "No prepayment penalty",
      "Ideal for larger projects",
    ],
    popular: true,
    minPurchase: "$1,000",
  },
  {
    name: "60 Months",
    rate: "9.99%",
    rateLabel: "APR",
    description: "Low fixed monthly payments",
    features: [
      "Fixed rate for term length",
      "Lowest monthly payment option",
      "No prepayment penalty",
      "Best for major installations",
    ],
    popular: false,
    minPurchase: "$2,500",
  },
  {
    name: "84 Months",
    rate: "11.99%",
    rateLabel: "APR",
    description: "Maximum flexibility",
    features: [
      "Extended payment timeline",
      "Very low monthly payments",
      "No prepayment penalty",
      "For premium systems",
    ],
    popular: false,
    minPurchase: "$5,000",
  },
]

export function FinancingPlans() {
  return (
    <section className="py-16 bg-pitch">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-warm mb-2">
            Choose Your Plan
          </h2>
          <p className="text-steel">
            Select the financing option that works best for your budget
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative bg-charcoal rounded-2xl border overflow-hidden transition-all hover:-translate-y-1",
                plan.popular ? "border-gold" : "border-graphite"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gold py-1.5 text-center">
                  <div className="flex items-center justify-center gap-1 text-pitch text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-pitch" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className={cn("p-6", plan.popular && "pt-12")}>
                <h3 className="font-display text-xl font-bold text-warm mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-steel mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gold">{plan.rate}</span>
                  <span className="text-steel ml-1">{plan.rateLabel}</span>
                </div>

                <div className="text-xs text-steel mb-4">
                  Min. purchase: {plan.minPurchase}
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-steel">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={cn(
                    "w-full py-3 rounded-lg font-semibold transition-all",
                    plan.popular
                      ? "bg-gold text-pitch hover:bg-gold/90"
                      : "border border-gold text-gold hover:bg-gold hover:text-pitch"
                  )}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-sm text-steel mb-4">Financing provided by trusted partners:</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="text-warm font-bold">GreenSky</div>
            <div className="text-warm font-bold">Synchrony</div>
            <div className="text-warm font-bold">Wells Fargo</div>
          </div>
        </div>
      </div>
    </section>
  )
}
