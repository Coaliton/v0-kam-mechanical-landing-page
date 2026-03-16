"use client"

import { useState, useMemo } from "react"
import { Calculator } from "lucide-react"
import { cn } from "@/lib/utils"

const termOptions = [
  { months: 6, rate: 0 },
  { months: 12, rate: 0 },
  { months: 24, rate: 5.99 },
  { months: 36, rate: 7.99 },
  { months: 60, rate: 9.99 },
  { months: 84, rate: 11.99 },
]

export function PaymentCalculator() {
  const [amount, setAmount] = useState(5000)
  const [selectedTerm, setSelectedTerm] = useState(12)

  const selectedOption = termOptions.find(t => t.months === selectedTerm) || termOptions[1]

  const monthlyPayment = useMemo(() => {
    const rate = selectedOption.rate / 100 / 12
    const months = selectedOption.months
    
    if (rate === 0) {
      return amount / months
    }
    
    return (amount * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1)
  }, [amount, selectedOption])

  const totalPayment = monthlyPayment * selectedOption.months
  const totalInterest = totalPayment - amount

  return (
    <section className="py-16 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium mb-4">
              <Calculator className="w-4 h-4" />
              Payment Calculator
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-warm mb-2">
              Estimate Your Monthly Payment
            </h2>
            <p className="text-steel">
              Adjust the amount and term to see your estimated monthly payment
            </p>
          </div>

          <div className="bg-pitch rounded-2xl border border-graphite p-6 md:p-8">
            {/* Amount Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-warm">Project Amount</label>
                <div className="text-2xl font-bold text-gold">
                  ${amount.toLocaleString()}
                </div>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-2 bg-graphite rounded-lg appearance-none cursor-pointer accent-gold"
              />
              <div className="flex justify-between text-xs text-steel mt-2">
                <span>$500</span>
                <span>$50,000</span>
              </div>
            </div>

            {/* Term Selection */}
            <div className="mb-8">
              <label className="text-sm font-medium text-warm mb-3 block">Select Term</label>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {termOptions.map((option) => (
                  <button
                    key={option.months}
                    onClick={() => setSelectedTerm(option.months)}
                    className={cn(
                      "py-3 px-2 rounded-lg text-center transition-all",
                      selectedTerm === option.months
                        ? "bg-gold text-pitch"
                        : "bg-charcoal border border-graphite text-steel hover:border-gold/30"
                    )}
                  >
                    <div className="font-semibold text-sm">{option.months} mo</div>
                    <div className="text-xs opacity-75">{option.rate}% APR</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="bg-charcoal rounded-xl p-6 border border-graphite">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-sm text-steel mb-1">Monthly Payment</div>
                  <div className="text-3xl font-bold text-gold">
                    ${monthlyPayment.toFixed(2)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-steel mb-1">Total Interest</div>
                  <div className="text-2xl font-semibold text-warm">
                    ${totalInterest.toFixed(2)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-steel mb-1">Total Payment</div>
                  <div className="text-2xl font-semibold text-warm">
                    ${totalPayment.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-steel text-center mt-4">
              * This is an estimate only. Actual terms and rates may vary based on credit approval.
            </p>

            <button className="w-full mt-6 py-4 bg-gold text-pitch font-semibold rounded-lg hover:bg-gold/90 transition-colors">
              Check Your Rate (No Impact on Credit)
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
