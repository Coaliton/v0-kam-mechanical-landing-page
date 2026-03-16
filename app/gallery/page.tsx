import type { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { GalleryHero } from "@/components/gallery/gallery-hero"
import { BeforeAfterSlider } from "@/components/gallery/before-after-slider"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

export const metadata: Metadata = {
  title: "Project Gallery | KAM Mechanical Construction LLC",
  description: "See our work in action. Browse before and after photos of our HVAC installations, repairs, and commercial projects.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <GalleryHero />
      <BeforeAfterSlider />
      <GalleryGrid />
      <Footer />
    </main>
  )
}
