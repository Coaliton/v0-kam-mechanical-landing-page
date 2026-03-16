import { Calendar, Clock, CheckCircle } from "lucide-react"

export function ScheduleHero() {
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
            Online Scheduling
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm mb-6 text-balance">
            Book Your Service Appointment
          </h1>
          
          <p className="text-lg text-steel mb-8 text-pretty">
            Schedule your HVAC service at a time that works for you. 
            Same-day appointments available for emergencies.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-steel">
              <Calendar className="w-5 h-5 text-gold" />
              <span>Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2 text-steel">
              <Clock className="w-5 h-5 text-gold" />
              <span>2-Hour Windows</span>
            </div>
            <div className="flex items-center gap-2 text-steel">
              <CheckCircle className="w-5 h-5 text-gold" />
              <span>Instant Confirmation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
