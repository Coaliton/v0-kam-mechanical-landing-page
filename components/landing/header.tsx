"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { PhoneCTA } from "@/components/ui/PhoneCTA"
import { ROUTES } from "@/lib/constants"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="w-full border-b border-white/10 bg-black">
      <nav className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="flex min-h-[72px] items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/kam-logo.png"
              alt="KAM Mechanical Construction LLC"
              width={48}
              height={48}
              className="h-12 w-12"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-300 transition-colors hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <PhoneCTA variant="primary" label="Call Now" />
            <Link
              href={ROUTES.contact}
              className="text-sm font-semibold text-zinc-200 underline underline-offset-4 transition-colors hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Get a Quote
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <PhoneCTA variant="primary" label="Call Now" className="px-3 py-2 text-xs" />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-zinc-200 transition-colors hover:text-[#D4AF37]"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/10 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-[#D4AF37]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={ROUTES.contact}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 w-full text-sm font-semibold text-zinc-200 underline underline-offset-4 transition-colors hover:text-[#D4AF37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
