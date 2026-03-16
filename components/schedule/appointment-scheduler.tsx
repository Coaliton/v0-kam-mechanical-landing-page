"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Check, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const serviceTypes = [
  { id: "ac-repair", label: "AC Repair", duration: "1-2 hours" },
  { id: "ac-install", label: "AC Installation", duration: "4-6 hours" },
  { id: "heating-repair", label: "Heating Repair", duration: "1-2 hours" },
  { id: "maintenance", label: "Maintenance", duration: "1 hour" },
  { id: "duct-cleaning", label: "Duct Cleaning", duration: "2-3 hours" },
  { id: "emergency", label: "Emergency Service", duration: "ASAP" },
]

const timeSlots = [
  "8:00 AM - 10:00 AM",
  "10:00 AM - 12:00 PM",
  "12:00 PM - 2:00 PM",
  "2:00 PM - 4:00 PM",
  "4:00 PM - 6:00 PM",
]

export function AppointmentScheduler() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState("")
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState("")
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    return { firstDay, daysInMonth }
  }

  const { firstDay, daysInMonth } = getDaysInMonth(currentMonth)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const isDateAvailable = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    return date >= today && date.getDay() !== 0
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  return (
    <div className="bg-charcoal rounded-2xl border border-graphite overflow-hidden">
      {/* Progress Steps */}
      <div className="flex border-b border-graphite">
        {[
          { num: 1, label: "Service" },
          { num: 2, label: "Date" },
          { num: 3, label: "Time" },
          { num: 4, label: "Confirm" },
        ].map((s, i) => (
          <div
            key={s.num}
            className={cn(
              "flex-1 py-4 text-center border-r border-graphite last:border-r-0 transition-colors",
              step === s.num ? "bg-gold/10" : "",
              step > s.num ? "bg-gold/5" : ""
            )}
          >
            <div className="flex items-center justify-center gap-2">
              <div
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                  step > s.num ? "bg-gold text-pitch" : "",
                  step === s.num ? "bg-gold text-pitch" : "bg-graphite text-steel"
                )}
              >
                {step > s.num ? <Check className="w-3.5 h-3.5" /> : s.num}
              </div>
              <span className={cn(
                "text-sm font-medium hidden sm:block",
                step >= s.num ? "text-warm" : "text-steel"
              )}>
                {s.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6">
        {/* Step 1: Select Service */}
        {step === 1 && (
          <div>
            <h3 className="font-display text-xl font-bold text-warm mb-4">Select Service Type</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {serviceTypes.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={cn(
                    "p-4 rounded-xl border text-left transition-all",
                    selectedService === service.id
                      ? "border-gold bg-gold/10"
                      : "border-graphite hover:border-gold/30"
                  )}
                >
                  <div className="font-semibold text-warm mb-1">{service.label}</div>
                  <div className="text-sm text-steel">Est. {service.duration}</div>
                  {service.id === "emergency" && (
                    <div className="flex items-center gap-1 mt-2 text-xs text-gold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      Priority Response
                    </div>
                  )}
                </button>
              ))}
            </div>
            <button
              onClick={() => selectedService && setStep(2)}
              disabled={!selectedService}
              className="w-full mt-6 py-3 bg-gold text-pitch font-semibold rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        )}

        {/* Step 2: Select Date */}
        {step === 2 && (
          <div>
            <h3 className="font-display text-xl font-bold text-warm mb-4">Select Date</h3>
            
            {/* Calendar */}
            <div className="bg-pitch rounded-xl p-4 border border-graphite">
              <div className="flex items-center justify-between mb-4">
                <button onClick={prevMonth} className="p-2 hover:bg-graphite rounded-lg transition-colors">
                  <ChevronLeft className="w-5 h-5 text-steel" />
                </button>
                <span className="font-semibold text-warm">
                  {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </span>
                <button onClick={nextMonth} className="p-2 hover:bg-graphite rounded-lg transition-colors">
                  <ChevronRight className="w-5 h-5 text-steel" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-xs text-steel py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`empty-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1
                  const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
                  const isAvailable = isDateAvailable(day)
                  const isSelected = selectedDate?.toDateString() === date.toDateString()

                  return (
                    <button
                      key={day}
                      onClick={() => isAvailable && setSelectedDate(date)}
                      disabled={!isAvailable}
                      className={cn(
                        "aspect-square rounded-lg text-sm font-medium transition-all",
                        isAvailable ? "hover:bg-gold/20" : "text-steel/30 cursor-not-allowed",
                        isSelected ? "bg-gold text-pitch" : "text-warm"
                      )}
                    >
                      {day}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-3 border border-graphite text-steel font-semibold rounded-lg hover:bg-graphite transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => selectedDate && setStep(3)}
                disabled={!selectedDate}
                className="flex-1 py-3 bg-gold text-pitch font-semibold rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Select Time */}
        {step === 3 && (
          <div>
            <h3 className="font-display text-xl font-bold text-warm mb-2">Select Time</h3>
            <p className="text-steel mb-4">
              {selectedDate && formatDate(selectedDate)}
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedTime(slot)}
                  className={cn(
                    "p-4 rounded-xl border text-center font-medium transition-all",
                    selectedTime === slot
                      ? "border-gold bg-gold/10 text-gold"
                      : "border-graphite text-warm hover:border-gold/30"
                  )}
                >
                  {slot}
                </button>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setStep(2)}
                className="flex-1 py-3 border border-graphite text-steel font-semibold rounded-lg hover:bg-graphite transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => selectedTime && setStep(4)}
                disabled={!selectedTime}
                className="flex-1 py-3 bg-gold text-pitch font-semibold rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div>
            <h3 className="font-display text-xl font-bold text-warm mb-4">Confirm Appointment</h3>
            
            <div className="bg-pitch rounded-xl p-5 border border-graphite mb-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-steel">Service</span>
                  <span className="text-warm font-medium">
                    {serviceTypes.find(s => s.id === selectedService)?.label}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-steel">Date</span>
                  <span className="text-warm font-medium">
                    {selectedDate && formatDate(selectedDate)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-steel">Time</span>
                  <span className="text-warm font-medium">{selectedTime}</span>
                </div>
              </div>
            </div>

            {/* Contact Info Form */}
            <div className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-pitch border border-graphite rounded-lg text-warm placeholder:text-steel focus:outline-none focus:border-gold/50"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-pitch border border-graphite rounded-lg text-warm placeholder:text-steel focus:outline-none focus:border-gold/50"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-pitch border border-graphite rounded-lg text-warm placeholder:text-steel focus:outline-none focus:border-gold/50"
              />
              <input
                type="text"
                placeholder="Service Address"
                className="w-full px-4 py-3 bg-pitch border border-graphite rounded-lg text-warm placeholder:text-steel focus:outline-none focus:border-gold/50"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(3)}
                className="flex-1 py-3 border border-graphite text-steel font-semibold rounded-lg hover:bg-graphite transition-colors"
              >
                Back
              </button>
              <button
                className="flex-1 py-3 bg-gold text-pitch font-semibold rounded-lg hover:bg-gold/90 transition-colors"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
