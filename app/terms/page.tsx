import { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { FileText, Scale, AlertTriangle, CreditCard, Ban, RefreshCw } from "lucide-react"

export const metadata: Metadata = {
  title: 'Terms of Service | KAM Mechanical Construction',
  description: 'Terms and conditions for using KAM Mechanical Construction services.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-pitch">
      <Header />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-gold" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-warm mb-4">
                Terms of Service
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
                    Welcome to KAM Mechanical Construction LLC. By accessing our website or using our services, 
                    you agree to be bound by these Terms of Service. Please read them carefully before proceeding.
                  </p>
                </section>

                {/* Section 1 */}
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Scale className="w-6 h-6 text-gold" />
                    <h2 className="text-2xl font-display font-bold text-warm m-0">Acceptance of Terms</h2>
                  </div>
                  <div className="pl-9 text-steel space-y-4">
                    <p>
                      By accessing or using our services, you acknowledge that you have read, understood, and agree 
                      to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, 
                      please do not use our services.
                    </p>
                    <p>
                      We reserve the right to modify these terms at any time. Continued use of our services after 
                      any changes constitutes acceptance of the new terms.
                    </p>
                  </div>
                </section>

                {/* Section 2 */}
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-gold" />
                    <h2 className="text-2xl font-display font-bold text-warm m-0">Service Agreements</h2>
                  </div>
                  <div className="pl-9 text-steel space-y-4">
                    <p>All mechanical construction and HVAC services are subject to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Written estimates and scope of work approval</li>
                      <li>Site inspection and assessment requirements</li>
                      <li>Applicable building codes and permits</li>
                      <li>Manufacturer warranty terms and conditions</li>
                      <li>Industry safety standards and regulations</li>
                    </ul>
                    <p>
                      Final pricing may vary from initial estimates based on actual conditions discovered 
                      during the project. Any changes will be communicated and approved before proceeding.
                    </p>
                  </div>
                </section>

                {/* Section 3 */}
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <CreditCard className="w-6 h-6 text-gold" />
                    <h2 className="text-2xl font-display font-bold text-warm m-0">Payment Terms</h2>
                  </div>
                  <div className="pl-9 text-steel space-y-4">
                    <p>Payment terms for our services include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Deposits may be required for large projects</li>
                      <li>Progress payments for extended projects</li>
                      <li>Final payment due upon completion and inspection</li>
                      <li>Accepted payment methods: Check, Credit Card, ACH Transfer</li>
                      <li>Financing options available for qualified customers</li>
                    </ul>
                    <p>
                      Late payments may incur interest charges as permitted by law. We reserve the right 
                      to suspend services for accounts with outstanding balances.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-gold" />
                    <h2 className="text-2xl font-display font-bold text-warm m-0">Warranties & Guarantees</h2>
                  </div>
                  <div className="pl-9 text-steel space-y-4">
                    <p>Our warranty coverage includes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="text-warm font-semibold">Labor Warranty:</span> 1 year on all installation work</li>
                      <li><span className="text-warm font-semibold">Parts Warranty:</span> Per manufacturer specifications</li>
                      <li><span className="text-warm font-semibold">Satisfaction Guarantee:</span> We stand behind our work</li>
                    </ul>
                    <p>
                      Warranties do not cover damage caused by misuse, lack of maintenance, acts of nature, 
                      or modifications made by others. Documentation of regular maintenance may be required 
                      for warranty claims.
                    </p>
                  </div>
                </section>

                {/* Section 5 */}
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Ban className="w-6 h-6 text-gold" />
                    <h2 className="text-2xl font-display font-bold text-warm m-0">Limitations of Liability</h2>
                  </div>
                  <div className="pl-9 text-steel space-y-4">
                    <p>
                      To the fullest extent permitted by law, KAM Mechanical Construction LLC shall not be 
                      liable for any indirect, incidental, special, consequential, or punitive damages 
                      arising from your use of our services.
                    </p>
                    <p>
                      Our total liability for any claim arising from our services shall not exceed the 
                      amount paid by you for the specific service giving rise to the claim.
                    </p>
                  </div>
                </section>

                {/* Section 6 */}
                <section className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <RefreshCw className="w-6 h-6 text-gold" />
                    <h2 className="text-2xl font-display font-bold text-warm m-0">Cancellation Policy</h2>
                  </div>
                  <div className="pl-9 text-steel space-y-4">
                    <p>Cancellation terms vary by service type:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><span className="text-warm font-semibold">Appointments:</span> 24-hour notice required to avoid fees</li>
                      <li><span className="text-warm font-semibold">Projects:</span> Written cancellation required; deposits may be non-refundable</li>
                      <li><span className="text-warm font-semibold">Emergency Services:</span> Cancellation fees may apply after dispatch</li>
                    </ul>
                  </div>
                </section>

                {/* Contact */}
                <section className="mt-12 pt-8 border-t border-gold/10">
                  <p className="text-steel">
                    For questions about these Terms of Service, please contact us at{" "}
                    <a href="mailto:legal@kammechanical.com" className="text-gold hover:underline">
                      legal@kammechanical.com
                    </a>{" "}
                    or call <a href="tel:+18005551234" className="text-gold hover:underline">1-800-555-1234</a>.
                  </p>
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
