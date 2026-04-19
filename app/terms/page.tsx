import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | KAM Mechanical",
  description: "KAM Mechanical LLC terms of service.",
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-black min-h-screen">
      <section className="min-h-[60vh] flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 md:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full mb-6">
            Coming Soon
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Terms of Service</h1>
          <p className="text-lg text-neutral-300 mb-10 max-w-xl mx-auto">
            Our formal terms of service are being prepared. For questions about our service agreements, please
            contact us directly at {BUSINESS.email}.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
