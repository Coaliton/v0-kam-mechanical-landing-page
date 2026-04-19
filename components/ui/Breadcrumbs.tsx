import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="w-full border-b border-white/5 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-3 md:px-6 md:py-4">
        <ol className="flex flex-wrap items-center gap-1 text-xs md:gap-2 md:text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1

            return (
              <li key={index} className="flex items-center gap-1 md:gap-2">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="text-neutral-400 transition-colors hover:text-yellow-500"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium text-white" aria-current={isLast ? 'page' : undefined}>
                    {item.label}
                  </span>
                )}

                {!isLast && (
                  <ChevronRight
                    className="h-3 w-3 flex-shrink-0 text-neutral-600 md:h-4 md:w-4"
                    aria-hidden="true"
                  />
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
