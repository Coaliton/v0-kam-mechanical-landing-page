import { Metadata } from "next"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { FeaturedProjects } from "@/components/projects/featured-projects"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { ProjectsCTA } from "@/components/projects/projects-cta"

export const metadata: Metadata = {
  title: "Projects & Case Studies | KAM Mechanical Construction LLC",
  description: "Explore our portfolio of commercial and residential mechanical construction projects. See how KAM delivers excellence across industrial piping, HVAC, and home comfort solutions.",
  keywords: ["mechanical construction projects", "HVAC case studies", "industrial piping portfolio", "construction portfolio"],
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <ProjectsHero />
      <FeaturedProjects />
      <ProjectsGrid />
      <ProjectsCTA />
    </main>
  )
}
