import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Clock, ArrowLeft, Bell, Phone, Mail } from "lucide-react"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { getComingSoonRoutes } from "@/lib/routes"

export const metadata: Metadata = {
  title: 'Coming Soon | KAM Mechanical Construction',
  description: 'This page is currently under development. Check back soon for updates.',
}

export default function ComingSoonPage() {
  const comingSoonRoutes = getComingSoonRoutes()

  return (
    <main className="min-h-screen bg-pitch">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8">
              <Image
                src="/images/kam-logo.png"
                alt="KAM Mechanical Construction"
                width={120}
                height={120}
                className="mx-auto"
              />
            </div>

            {/* Icon */}
            <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-gold" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-display font-bold text-warm mb-4">
              Coming Soon
            </h1>
            <p className="text-xl text-steel mb-8">
              We&apos;re working hard to bring you this page. 
              In the meantime, explore our available services or get in touch.
            </p>

            {/* Notification Signup */}
            <div className="bg-charcoal rounded-2xl p-6 mb-8 border border-gold/10">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="w-5 h-5 text-gold" />
                <span className="font-semibold text-warm">Get Notified</span>
              </div>
              <p className="text-steel text-sm mb-4">
                Enter your email to be notified when this page launches.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 bg-pitch border border-gold/20 rounded-lg text-warm placeholder:text-steel focus:outline-none focus:border-gold"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gold text-pitch font-semibold rounded-lg hover:bg-gold-light transition-colors"
                >
                  Notify Me
                </button>
              </form>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal text-warm rounded-lg hover:bg-pitch border border-gold/20 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-pitch font-semibold rounded-lg hover:bg-gold-light transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </Link>
              <a
                href="tel:+18005551234"
                className="inline-flex items-center gap-2 px-4 py-2 bg-charcoal text-warm rounded-lg hover:bg-pitch border border-gold/20 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Pages in Development */}
            {comingSoonRoutes.length > 0 && (
              <div className="bg-charcoal/50 rounded-2xl p-6 border border-gold/10">
                <h3 className="font-semibold text-warm mb-4">Pages in Development</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {comingSoonRoutes.map((route) => (
                    <div
                      key={route.path}
                      className="px-3 py-2 bg-pitch rounded-lg text-sm text-steel flex items-center gap-2"
                    >
                      <Clock className="w-3 h-3 text-gold" />
                      {route.title}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
