import { CreditCard, Clock, CheckCircle, Shield } from "lucide-react"

export function FinancingHero() {
  return (
    <section className="relative pt-32 pb-16 bg-charcoal">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6">
            Flexible Payment Options
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm mb-6 text-balance">
            Comfort Now, Pay Over Time
          </h1>
          
          <p className="text-lg text-steel mb-8 text-pretty">
            Don't let budget concerns delay your comfort. We offer flexible financing options 
            with low monthly payments and competitive rates.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            <div className="bg-pitch/50 border border-graphite rounded-xl p-4 text-center">
              <CreditCard className="w-8 h-8 text-gold mx-auto mb-2" />
              <div className="font-semibold text-warm">0% APR</div>
              <div className="text-xs text-steel">For qualified buyers</div>
            </div>
            <div className="bg-pitch/50 border border-graphite rounded-xl p-4 text-center">
              <Clock className="w-8 h-8 text-gold mx-auto mb-2" />
              <div className="font-semibold text-warm">Quick Approval</div>
              <div className="text-xs text-steel">Decision in minutes</div>
            </div>
            <div className="bg-pitch/50 border border-graphite rounded-xl p-4 text-center">
              <CheckCircle className="w-8 h-8 text-gold mx-auto mb-2" />
              <div className="font-semibold text-warm">No Prepayment</div>
              <div className="text-xs text-steel">Pay off anytime</div>
            </div>
            <div className="bg-pitch/50 border border-graphite rounded-xl p-4 text-center">
              <Shield className="w-8 h-8 text-gold mx-auto mb-2" />
              <div className="font-semibold text-warm">Soft Credit Pull</div>
              <div className="text-xs text-steel">No impact on score</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
