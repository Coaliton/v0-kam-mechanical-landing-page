import type { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ScheduleHero } from "@/components/schedule/schedule-hero"
import { AppointmentScheduler } from "@/components/schedule/appointment-scheduler"
import { ScheduleInfo } from "@/components/schedule/schedule-info"

export const metadata: Metadata = {
  title: "Schedule Service | KAM Mechanical Construction LLC",
  description: "Book your HVAC service appointment online. Choose your preferred date and time for residential or commercial service.",
}

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ScheduleHero />
      <div className="py-16 bg-pitch">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AppointmentScheduler />
            </div>
            <div>
              <ScheduleInfo />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
