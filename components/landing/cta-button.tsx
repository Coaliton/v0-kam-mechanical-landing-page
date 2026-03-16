"use client"

import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = "solid", size = "md", children, ...props }, ref) => {
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

export { CTAButton }
