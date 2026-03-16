"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie, X, Settings } from "lucide-react"

type ConsentPreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("kam-cookie-consent")
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    const allConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    localStorage.setItem("kam-cookie-consent", JSON.stringify(allConsent))
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    const minimalConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    localStorage.setItem("kam-cookie-consent", JSON.stringify(minimalConsent))
    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("kam-cookie-consent", JSON.stringify(preferences))
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-charcoal border border-border rounded-2xl shadow-2xl overflow-hidden">
          {/* Main Banner */}
          {!showSettings ? (
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-gold" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg text-warm mb-2">
                    We Value Your Privacy
                  </h3>
                  <p className="text-steel text-sm leading-relaxed mb-4">
                    We use cookies to enhance your browsing experience, serve personalized content, 
                    and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies. 
                    Read our{" "}
                    <Link href="/privacy" className="text-gold hover:text-gold-light underline">
                      Privacy Policy
                    </Link>{" "}
                    for more information.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={handleAcceptAll}
                      className="px-5 py-2.5 bg-gold text-pitch font-semibold rounded-lg hover:bg-gold-light transition-colors"
                    >
                      Accept All
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="px-5 py-2.5 bg-pitch border border-border text-warm font-medium rounded-lg hover:border-gold/50 transition-colors"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={() => setShowSettings(true)}
                      className="flex items-center gap-2 px-5 py-2.5 text-steel hover:text-gold transition-colors"
                    >
                      <Settings className="w-4 h-4" />
                      Customize
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-2 text-steel hover:text-warm transition-colors"
                  aria-label="Close cookie banner"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            /* Settings Panel */
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-semibold text-lg text-warm">
                  Cookie Preferences
                </h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 text-steel hover:text-warm transition-colors"
                  aria-label="Close settings"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="flex items-center justify-between p-4 bg-pitch rounded-lg border border-border">
                  <div>
                    <h4 className="font-medium text-warm">Necessary Cookies</h4>
                    <p className="text-sm text-steel mt-1">
                      Required for the website to function properly. Cannot be disabled.
                    </p>
                  </div>
                  <div className="w-12 h-6 bg-gold/30 rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                    <div className="w-4 h-4 bg-gold rounded-full" />
                  </div>
                </div>
                
                {/* Analytics Cookies */}
                <div className="flex items-center justify-between p-4 bg-pitch rounded-lg border border-border">
                  <div>
                    <h4 className="font-medium text-warm">Analytics Cookies</h4>
                    <p className="text-sm text-steel mt-1">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <button
                    onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                      preferences.analytics ? 'bg-gold/30 justify-end' : 'bg-border justify-start'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full transition-colors ${
                      preferences.analytics ? 'bg-gold' : 'bg-steel'
                    }`} />
                  </button>
                </div>
                
                {/* Marketing Cookies */}
                <div className="flex items-center justify-between p-4 bg-pitch rounded-lg border border-border">
                  <div>
                    <h4 className="font-medium text-warm">Marketing Cookies</h4>
                    <p className="text-sm text-steel mt-1">
                      Used to deliver personalized advertisements and track campaigns.
                    </p>
                  </div>
                  <button
                    onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                    className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
                      preferences.marketing ? 'bg-gold/30 justify-end' : 'bg-border justify-start'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full transition-colors ${
                      preferences.marketing ? 'bg-gold' : 'bg-steel'
                    }`} />
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={handleSavePreferences}
                  className="px-5 py-2.5 bg-gold text-pitch font-semibold rounded-lg hover:bg-gold-light transition-colors"
                >
                  Save Preferences
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-5 py-2.5 text-steel hover:text-warm transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
