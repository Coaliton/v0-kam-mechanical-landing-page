/**
 * KAM Mechanical Construction - Route Registry & Navigation System
 * 
 * This module provides a centralized route management system that:
 * 1. Maintains a registry of all valid routes
 * 2. Validates navigation targets
 * 3. Provides route metadata for SEO and navigation
 * 4. Supports scalable growth with easy route additions
 */

export type RouteStatus = 'active' | 'coming-soon' | 'placeholder' | 'external'

export interface RouteConfig {
  path: string
  title: string
  description?: string
  status: RouteStatus
  parent?: string
  children?: string[]
  icon?: string
  showInNav?: boolean
  showInFooter?: boolean
  requiresAuth?: boolean
}

// Central route registry - single source of truth for all application routes
export const ROUTE_REGISTRY: Record<string, RouteConfig> = {
  // Main Pages
  '/': {
    path: '/',
    title: 'Home',
    description: 'KAM Mechanical Construction - Industrial & Residential HVAC Services',
    status: 'active',
    showInNav: false,
    showInFooter: false,
  },
  '/services': {
    path: '/services',
    title: 'Services',
    description: 'Commercial and residential mechanical construction services',
    status: 'active',
    showInNav: true,
    showInFooter: true,
  },
  '/projects': {
    path: '/projects',
    title: 'Projects',
    description: 'View our portfolio of completed projects and case studies',
    status: 'active',
    showInNav: true,
    showInFooter: true,
  },
  '/about': {
    path: '/about',
    title: 'About',
    description: 'Learn about KAM Mechanical Construction and our team',
    status: 'active',
    showInNav: true,
    showInFooter: true,
  },
  '/contact': {
    path: '/contact',
    title: 'Contact',
    description: 'Get in touch with KAM Mechanical Construction',
    status: 'active',
    showInNav: true,
    showInFooter: true,
  },
  '/blog': {
    path: '/blog',
    title: 'Blog',
    description: 'HVAC tips, industry news, and expert insights',
    status: 'active',
    showInNav: false,
    showInFooter: true,
  },
  '/schedule': {
    path: '/schedule',
    title: 'Schedule Service',
    description: 'Book an appointment with our service team',
    status: 'active',
    showInNav: false,
    showInFooter: true,
  },
  '/gallery': {
    path: '/gallery',
    title: 'Gallery',
    description: 'Before and after photos of our work',
    status: 'active',
    showInNav: false,
    showInFooter: true,
  },
  '/financing': {
    path: '/financing',
    title: 'Financing',
    description: 'Flexible payment options for your HVAC needs',
    status: 'active',
    showInNav: false,
    showInFooter: true,
  },
  
  // Legal Pages
  '/privacy': {
    path: '/privacy',
    title: 'Privacy Policy',
    description: 'Our privacy policy and data handling practices',
    status: 'active',
    showInNav: false,
    showInFooter: true,
  },
  '/terms': {
    path: '/terms',
    title: 'Terms of Service',
    description: 'Terms and conditions for using our services',
    status: 'active',
    showInNav: false,
    showInFooter: true,
  },
  '/coming-soon': {
    path: '/coming-soon',
    title: 'Coming Soon',
    description: 'This page is under development',
    status: 'active',
    showInNav: false,
    showInFooter: false,
  },
  
  // Service Sub-pages
  '/services/commercial': {
    path: '/services/commercial',
    title: 'Commercial Services',
    description: 'Industrial HVAC and mechanical construction services',
    status: 'active',
    parent: '/services',
    showInNav: false,
    showInFooter: false,
  },
  '/services/residential': {
    path: '/services/residential',
    title: 'Residential Services',
    description: 'Home HVAC installation, repair, and maintenance',
    status: 'active',
    parent: '/services',
    showInNav: false,
    showInFooter: false,
  },
  '/emergency': {
    path: '/emergency',
    title: '24/7 Emergency Services',
    description: 'Round-the-clock emergency HVAC repair services',
    status: 'active',
    showInNav: false,
    showInFooter: true,
  },
  
  // Additional Pages
  '/careers': {
    path: '/careers',
    title: 'Careers',
    description: 'Join the KAM Mechanical Construction team',
    status: 'active',
    showInNav: false,
    showInFooter: true,
  },
  '/reviews': {
    path: '/reviews',
    title: 'Customer Reviews',
    description: 'Read what our customers say about us',
    status: 'active',
    showInNav: true,
    showInFooter: true,
  },
  '/faq': {
    path: '/faq',
    title: 'FAQ',
    description: 'Frequently asked questions about our services',
    status: 'active',
    showInNav: false,
    showInFooter: true,
  },
  '/service-areas': {
    path: '/service-areas',
    title: 'Service Areas',
    description: 'Areas we serve across the region',
    status: 'coming-soon',
    showInNav: false,
    showInFooter: true,
  },
}

// Helper functions
export function isValidRoute(path: string): boolean {
  // Remove query params and hash for checking
  const cleanPath = path.split('?')[0].split('#')[0]
  return cleanPath in ROUTE_REGISTRY
}

export function getRouteConfig(path: string): RouteConfig | null {
  const cleanPath = path.split('?')[0].split('#')[0]
  return ROUTE_REGISTRY[cleanPath] || null
}

export function getRouteStatus(path: string): RouteStatus | null {
  const config = getRouteConfig(path)
  return config?.status || null
}

export function isRouteActive(path: string): boolean {
  return getRouteStatus(path) === 'active'
}

export function getNavRoutes(): RouteConfig[] {
  return Object.values(ROUTE_REGISTRY).filter(route => route.showInNav)
}

export function getFooterRoutes(): RouteConfig[] {
  return Object.values(ROUTE_REGISTRY).filter(route => route.showInFooter)
}

export function getAllRoutes(): RouteConfig[] {
  return Object.values(ROUTE_REGISTRY)
}

export function getActiveRoutes(): RouteConfig[] {
  return Object.values(ROUTE_REGISTRY).filter(route => route.status === 'active')
}

export function getComingSoonRoutes(): RouteConfig[] {
  return Object.values(ROUTE_REGISTRY).filter(route => route.status === 'coming-soon')
}

// Add a new route dynamically (useful for CMS integration)
export function registerRoute(config: RouteConfig): void {
  ROUTE_REGISTRY[config.path] = config
}

// Check if a route needs a placeholder page
export function needsPlaceholder(path: string): boolean {
  const status = getRouteStatus(path)
  return status === 'coming-soon' || status === 'placeholder'
}

// Get redirect path for non-active routes
export function getRedirectPath(path: string): string {
  const config = getRouteConfig(path)
  if (!config) return '/coming-soon'
  if (config.status === 'active') return path
  if (config.parent && isRouteActive(config.parent)) return config.parent
  return '/coming-soon'
}

// External links configuration
export const EXTERNAL_LINKS = {
  facebook: 'https://facebook.com/kammechanical',
  instagram: 'https://instagram.com/kammechanical',
  linkedin: 'https://linkedin.com/company/kammechanical',
  youtube: 'https://youtube.com/@kammechanical',
  twitter: 'https://twitter.com/kammechanical',
  googleReviews: 'https://g.page/kammechanical/review',
  yelp: 'https://yelp.com/biz/kam-mechanical-construction',
}
