"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Wrench } from "lucide-react"
import { CTAButton } from "./cta-button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#safety", label: "Safety" },
  { href: "#faq", label: "FAQ" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-pitch/95 backdrop-blur-md border-b border-border shadow-elevated" 
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center group-hover:shadow-gold transition-shadow duration-300">
              <Wrench className="w-6 h-6 text-pitch" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-warm leading-tight">KAM</span>
              <span className="text-xs text-steel leading-tight">Mechanical Construction</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-warm/80 hover:text-gold font-medium transition-colors duration-300 animated-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <CTAButton variant="solid" size="md">
              Request a Bid
            </CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-warm hover:text-gold transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-out",
            isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-warm/80 hover:text-gold font-medium transition-colors duration-300 py-2"
                >
                  {link.label}
                </Link>
              ))}
              <CTAButton variant="solid" size="md" className="mt-2 w-full">
                Request a Bid
              </CTAButton>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
