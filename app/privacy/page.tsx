import { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Shield, Lock, Eye, Database, UserCheck, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: 'Privacy Policy | KAM Mechanical Construction',
  description: 'Learn how KAM Mechanical Construction collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-pitch">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-gold" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-warm mb-4">
                Privacy Policy
              </h1>
              <p className="text-steel">
                Last updated: March 16, 2026
              </p>
            </div>

            {/* Content */}
            <div className="bg-charcoal rounded-2xl p-8 md:p-12 border border-gold/10">
              <div className="prose prose-invert max-w-none">
                
                {/* Introduction */}
                <section className="mb-10">
                  <p className="text-steel leading-relaxed">
                    KAM Mechanical Construction LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                    our website or use our services.
                  </p>
                </section>

                {/* Section 1 */}
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-gold" />
                    <h2 className="text-2xl font-display font-bold text-warm m-0">Information We Collect</h2>
                  </div>
                  <div className="pl-9 text-steel space-y-4">
                    <p>We collect information that you provide directly to us, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Name, email address, phone number, and mailing address</li>
                      <li>Service requests and project details</li>
                      <li>Payment and billing information</li>
                      <li>Communications with our team</li>
                      <li>Feedback and survey responses</li>
                    </ul>
                    <p>We also automatically collect certain information when you visit our website:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>IP address and browser type</li>
                      <li>Device information and operating system</li>
                      <li>Pages visited and time spent on site</li>
                      <li>Referral sources and click patterns</li>
                    </ul>
                  </div>
                </section>

                {/* Section 2 */}
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-gold" />
                    <h2 className="text-2xl font-display font-bold text-warm m-0">How We Use Your Information</h2>
                  </div>
                  <div className="pl-9 text-steel space-y-4">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Respond to your comments, questions, and requests</li>
                      <li>Send promotional communications (with your consent)</li>
                      <li>Monitor and analyze trends, usage, and activities</li>
                      <li>Detect, investigate, and prevent fraudulent transactions</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </div>
                </section>

                {/* Section 3 */}
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-6 h-6 text-gold" />
                    <h2 className="text-2xl font-display font-bold text-warm m-0">Information Security</h2>
                  </div>
                  <div className="pl-9 text-steel space-y-4">
                    <p>
                      We implement appropriate technical and organizational security measures to protect your personal 
                      information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>SSL/TLS encryption for data transmission</li>
                      <li>Secure storage with access controls</li>
                      <li>Regular security assessments and updates</li>
                      <li>Employee training on data protection</li>
                    </ul>
                  </div>
                </section>

                {/* Section 4 */}
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <UserCheck className="w-6 h-6 text-gold" />
                    <h2 className="text-2xl font-display font-bold text-warm m-0">Your Rights</h2>
                  </div>
                  <div className="pl-9 text-steel space-y-4">
                    <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access and receive a copy of your data</li>
                      <li>Rectify or update inaccurate information</li>
                      <li>Request deletion of your data</li>
                      <li>Object to or restrict certain processing</li>
                      <li>Data portability</li>
                      <li>Withdraw consent at any time</li>
                    </ul>
                  </div>
                </section>

                {/* Section 5 */}
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-6 h-6 text-gold" />
                    <h2 className="text-2xl font-display font-bold text-warm m-0">Contact Us</h2>
                  </div>
                  <div className="pl-9 text-steel space-y-4">
                    <p>
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="bg-pitch rounded-lg p-4 border border-gold/10">
                      <p className="font-semibold text-warm mb-2">KAM Mechanical Construction LLC</p>
                      <p>Email: kamcllc7@gmail.com</p>
                      <p>Phone: (504) 648-6777</p>
                      <p>Address: 1615 Poydras St, New Orleans, LA 70112</p>
                    </div>
                    <p className="mt-4 text-sm text-gold">
                      Service Area: Greater New Orleans metropolitan area only
                    </p>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
