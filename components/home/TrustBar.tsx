import { BadgeCheck, Clock, MapPin, ShieldCheck } from "lucide-react"

type TrustItem = {
  icon: React.ElementType
  title: string
  description: string
}

const trustItems: TrustItem[] = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Full coverage protection",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "When you need us most",
  },
  {
    icon: BadgeCheck,
    title: "Fixed Price Guarantee",
    description: "No surprise charges",
  },
  {
    icon: MapPin,
    title: "Local to New Orleans",
    description: "All surrounding parishes",
  },
]

export default function TrustBar() {
  return (
    <section
      aria-label="KAM Mechanical trust signals"
      className="w-full border-y border-yellow-500/10 bg-[#0a0a0a] py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          {trustItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-3 sm:text-center"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-500/10">
                  <Icon className="h-6 w-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-400 md:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
