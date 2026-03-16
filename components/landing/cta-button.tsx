"use client"

import { cn } from "@/lib/utils"
import { forwardRef, type ReactNode, type MouseEvent } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { 
  isRouteActive, 
  getRouteConfig, 
  getRedirectPath,
  isValidRoute 
} from "@/lib/routes"

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  href?: string
  external?: boolean
  fallbackBehavior?: 'redirect' | 'modal' | 'disabled'
}

const baseStyles = "inline-flex items-center justify-center font-display font-semibold transition-all duration-300 ease-out rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none"

const variants = {
  solid: "bg-gold text-pitch hover:bg-gold-light hover:-translate-y-1 hover:shadow-lift active:translate-y-0",
  outline: "border-2 border-gold text-gold hover:bg-gold hover:text-pitch hover:-translate-y-1 hover:shadow-gold active:translate-y-0",
  ghost: "text-gold hover:bg-gold/10 hover:-translate-y-1"
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg"
}

// Button-only version (no navigation)
const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = "solid", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
CTAButton.displayName = "CTAButton"

// Link version with smart navigation
interface CTALinkProps {
  href: string
  variant?: "solid" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  children: ReactNode
  external?: boolean
  fallbackBehavior?: 'redirect' | 'modal' | 'disabled'
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}

function CTALink({
  href,
  variant = "solid",
  size = "md",
  className,
  children,
  external = false,
  fallbackBehavior = 'redirect',
  onClick,
}: CTALinkProps) {
  const router = useRouter()
  const isExternal = external || href.startsWith('http') || href.startsWith('//')
  const isActive = !isExternal && isRouteActive(href)
  const routeConfig = !isExternal ? getRouteConfig(href) : null
  
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (e.defaultPrevented) return
    
    // External links proceed normally
    if (isExternal) return
    
    // Active routes proceed normally
    if (isActive) return
    
    // Handle non-active routes
    e.preventDefault()
    
    if (fallbackBehavior === 'redirect') {
      const redirectPath = getRedirectPath(href)
      router.push(redirectPath)
    } else if (fallbackBehavior === 'disabled') {
      // Do nothing
    }
  }

  const buttonClasses = cn(
    baseStyles, 
    variants[variant], 
    sizes[size], 
    !isActive && !isExternal && fallbackBehavior === 'disabled' && 'opacity-50 cursor-not-allowed',
    className
  )

  if (isExternal) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <Link 
      href={isActive ? href : '#'} 
      className={buttonClasses}
      onClick={handleClick}
      prefetch={isActive}
    >
      {children}
    </Link>
  )
}

export { CTAButton, CTALink }
