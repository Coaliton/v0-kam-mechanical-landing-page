import type { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { BlogHero } from "@/components/blog/blog-hero"
import { FeaturedPosts } from "@/components/blog/featured-posts"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogCategories } from "@/components/blog/blog-categories"

export const metadata: Metadata = {
  title: "Blog & Resources | KAM Mechanical Construction LLC",
  description: "Expert insights on HVAC maintenance, energy efficiency tips, industry news, and home comfort guides from KAM Mechanical Construction.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <BlogHero />
      <BlogCategories />
      <FeaturedPosts />
      <BlogGrid />
      <Footer />
    </main>
  )
}
