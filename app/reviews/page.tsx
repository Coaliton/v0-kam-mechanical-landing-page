import type { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ReviewsHero } from "@/components/reviews/reviews-hero"
import { ReviewsStats } from "@/components/reviews/reviews-stats"
import { ReviewsGrid } from "@/components/reviews/reviews-grid"
import { ReviewsCTA } from "@/components/reviews/reviews-cta"

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | KAM Mechanical Construction",
  description: "Read verified customer reviews and testimonials. See why thousands of homeowners and businesses trust KAM Mechanical for their HVAC and plumbing needs. 4.9/5 average rating.",
  keywords: ["HVAC reviews", "plumbing reviews", "customer testimonials", "KAM reviews", "contractor reviews"],
}

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main>
        <ReviewsHero />
        <ReviewsStats />
        <ReviewsGrid />
        <ReviewsCTA />
      </main>
      <Footer />
    </>
  )
}
