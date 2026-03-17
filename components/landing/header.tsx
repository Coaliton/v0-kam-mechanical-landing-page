"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Building2, Home, AlertTriangle, Wrench } from "lucide-react"
import { CTALink } from "./cta-button"
import { cn } from "@/lib/utils"

const servicesDropdown = [
  { href: "/services/commercial", label: "Commercial", description: "Industrial & commercial solutions", icon: Building2 },
  { href: "/services/residential", label: "Residential", description: "Home comfort services", icon: Home },
  { href: "/emergency", label: "Emergency", description: "24/7 urgent repairs", icon: AlertTriangle },
  { href: "/services", label: "All Services", description: "View complete service list", icon: Wrench },
]

const navLinks = [
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/projects", label: "Projects", hasDropdown: false },
  { href: "/about", label: "About", hasDropdown: false },
  { href: "/reviews", label: "Reviews", hasDropdown: false },
  { href: "/blog", label: "Blog", hasDropdown: false },
  { href: "/contact", label: "Contact", hasDropdown: false },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
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
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/kam-logo.png"
              alt="KAM Mechanical Construction LLC"
              width={64}
              height={64}
              className="w-14 h-14 md:w-16 md:h-16 group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.hasDropdown ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === link.href ? null : link.href)}
                    onMouseEnter={() => setActiveDropdown(link.href)}
                    className="flex items-center gap-1 text-warm/80 hover:text-gold font-medium transition-colors duration-300"
                  >
                    {link.label}
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      activeDropdown === link.href && "rotate-180"
                    )} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="relative text-warm/80 hover:text-gold font-medium transition-colors duration-300 animated-underline"
                  >
                    {link.label}
                  </Link>
                )}

                {/* Services Dropdown */}
                {link.hasDropdown && activeDropdown === link.href && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-72 bg-pitch border border-gold/20 rounded-xl shadow-elevated overflow-hidden"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="p-2">
                      {servicesDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-charcoal transition-colors group"
                        >
                          <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors flex-shrink-0">
                            <item.icon className="w-5 h-5 text-gold" />
                          </div>
                          <div>
                            <p className="font-medium text-warm group-hover:text-gold transition-colors">
                              {item.label}
                            </p>
                            <p className="text-sm text-steel">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <CTALink href="/contact" variant="solid" size="md">
              Request a Bid
            </CTALink>
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
            isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.href ? null : link.href)}
                        className="flex items-center justify-between w-full text-warm/80 hover:text-gold font-medium transition-colors duration-300 py-2"
                      >
                        {link.label}
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          activeDropdown === link.href && "rotate-180"
                        )} />
                      </button>
                      {activeDropdown === link.href && (
                        <div className="pl-4 pb-2 space-y-1">
                          {servicesDropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => {
                                setIsMobileMenuOpen(false)
                                setActiveDropdown(null)
                              }}
                              className="flex items-center gap-2 py-2 text-steel hover:text-gold transition-colors"
                            >
                              <item.icon className="w-4 h-4 text-gold" />
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-warm/80 hover:text-gold font-medium transition-colors duration-300 py-2 block"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gold/10 mt-2">
                <CTALink href="/emergency" variant="outline" size="md" className="w-full mb-2">
                  24/7 Emergency
                </CTALink>
                <CTALink href="/contact" variant="solid" size="md" className="w-full">
                  Request a Bid
                </CTALink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
