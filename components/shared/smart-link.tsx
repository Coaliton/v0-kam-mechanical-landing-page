"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useCallback, type ReactNode, type MouseEvent } from "react"
import { 
  isValidRoute, 
  getRouteStatus, 
  getRouteConfig, 
  getRedirectPath,
  type RouteStatus 
} from "@/lib/routes"
import { cn } from "@/lib/utils"
import { ExternalLink, Clock, Construction, AlertCircle } from "lucide-react"

interface SmartLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
  showStatusIndicator?: boolean
  fallbackBehavior?: 'redirect' | 'modal' | 'toast' | 'disabled'
  external?: boolean
  newTab?: boolean
  ariaLabel?: string
  prefetch?: boolean
  trackClick?: boolean
}

interface ToastState {
  show: boolean
  message: string
  type: 'info' | 'warning'
}

export function SmartLink({
  href,
  children,
  className,
  onClick,
  showStatusIndicator = false,
  fallbackBehavior = 'redirect',
  external = false,
  newTab = false,
  ariaLabel,
  prefetch = true,
  trackClick = true,
}: SmartLinkProps) {
  const router = useRouter()
  const [showToast, setShowToast] = useState<ToastState>({ show: false, message: '', type: 'info' })
  const [showModal, setShowModal] = useState(false)

  // Determine if link is external
  const isExternal = external || href.startsWith('http') || href.startsWith('//')
  
  // Get route information for internal links
  const routeConfig = !isExternal ? getRouteConfig(href) : null
  const routeStatus = !isExternal ? getRouteStatus(href) : null
  const isActive = routeStatus === 'active'

  // Track click event (for analytics integration)
  const trackClickEvent = useCallback((path: string, status: RouteStatus | null) => {
    if (!trackClick) return
    
    // Log for development - can be replaced with actual analytics
    if (process.env.NODE_ENV === 'development') {
      console.log('[SmartLink] Navigation:', { path, status, timestamp: new Date().toISOString() })
    }
    
    // Future: integrate with analytics
    // analytics.track('link_click', { path, status })
  }, [trackClick])

  // Handle click based on route status
  const handleClick = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    // Call custom onClick if provided
    onClick?.(e)
    
    // Skip handling if already prevented
    if (e.defaultPrevented) return
    
    // Handle external links normally
    if (isExternal) {
      trackClickEvent(href, 'external')
      return
    }
    
    // Track the click
    trackClickEvent(href, routeStatus)
    
    // If route is active, proceed normally
    if (isActive) return
    
    // Handle non-active routes based on fallback behavior
    e.preventDefault()
    
    switch (fallbackBehavior) {
      case 'redirect':
        const redirectPath = getRedirectPath(href)
        router.push(redirectPath)
        break
        
      case 'modal':
        setShowModal(true)
        break
        
      case 'toast':
        const message = routeStatus === 'coming-soon' 
          ? `${routeConfig?.title || 'This page'} is coming soon!`
          : `${routeConfig?.title || 'This page'} is under construction.`
        setShowToast({ show: true, message, type: 'info' })
        setTimeout(() => setShowToast({ show: false, message: '', type: 'info' }), 3000)
        break
        
      case 'disabled':
        // Do nothing - link is disabled
        break
    }
  }, [href, isExternal, isActive, routeStatus, routeConfig, fallbackBehavior, onClick, router, trackClickEvent])

  // Determine link attributes
  const linkProps = {
    className: cn(
      className,
      !isActive && fallbackBehavior === 'disabled' && 'opacity-50 cursor-not-allowed',
      !isActive && showStatusIndicator && 'relative'
    ),
    'aria-label': ariaLabel || routeConfig?.title,
    ...(newTab || isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
  }

  // Status indicator component
  const StatusIndicator = () => {
    if (!showStatusIndicator || isActive || isExternal) return null
    
    return (
      <span className="ml-1 inline-flex items-center">
        {routeStatus === 'coming-soon' && (
          <Clock className="w-3 h-3 text-gold" title="Coming Soon" />
        )}
        {routeStatus === 'placeholder' && (
          <Construction className="w-3 h-3 text-steel" title="Under Construction" />
        )}
        {!routeStatus && (
          <AlertCircle className="w-3 h-3 text-destructive" title="Unknown Route" />
        )}
      </span>
    )
  }

  // External link indicator
  const ExternalIndicator = () => {
    if (!isExternal || !showStatusIndicator) return null
    return <ExternalLink className="ml-1 w-3 h-3 inline" />
  }

  // Toast notification
  const Toast = () => {
    if (!showToast.show) return null
    
    return (
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-2">
        <div className={cn(
          "px-4 py-2 rounded-lg shadow-lg flex items-center gap-2",
          showToast.type === 'info' ? "bg-charcoal text-warm" : "bg-gold text-pitch"
        )}>
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">{showToast.message}</span>
        </div>
      </div>
    )
  }

  // Coming Soon Modal
  const ComingSoonModal = () => {
    if (!showModal) return null
    
    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-pitch/80 backdrop-blur-sm animate-in fade-in"
        onClick={() => setShowModal(false)}
      >
        <div 
          className="bg-charcoal rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl border border-gold/20"
          onClick={e => e.stopPropagation()}
        >
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-gold" />
          </div>
          <h3 className="text-2xl font-display font-bold text-warm mb-2">
            {routeConfig?.title || 'Coming Soon'}
          </h3>
          <p className="text-steel mb-6">
            {routeConfig?.description || 'This page is currently under development and will be available soon.'}
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-charcoal border border-gold/30 text-warm rounded-lg hover:bg-pitch transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                setShowModal(false)
                router.push('/contact')
              }}
              className="px-4 py-2 bg-gold text-pitch font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Render external links with regular anchor
  if (isExternal) {
    return (
      <>
        <a href={href} {...linkProps} onClick={handleClick}>
          {children}
          <ExternalIndicator />
        </a>
        <Toast />
      </>
    )
  }

  // Render internal links with Next.js Link
  return (
    <>
      <Link 
        href={isActive ? href : '#'} 
        {...linkProps} 
        onClick={handleClick}
        prefetch={isActive && prefetch}
      >
        {children}
        <StatusIndicator />
      </Link>
      <Toast />
      <ComingSoonModal />
    </>
  )
}

// Convenience wrapper for navigation buttons
interface SmartButtonProps extends Omit<SmartLinkProps, 'children'> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function SmartButton({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: SmartButtonProps) {
  const variants = {
    primary: 'bg-gold text-pitch font-semibold hover:bg-gold-light',
    secondary: 'bg-charcoal text-warm border border-gold/30 hover:bg-pitch',
    outline: 'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-pitch',
    ghost: 'bg-transparent text-warm hover:text-gold',
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded',
    md: 'px-4 py-2 rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl',
  }

  return (
    <SmartLink
      className={cn(
        'inline-flex items-center justify-center transition-all duration-200',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
}
