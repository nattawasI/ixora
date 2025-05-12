'use client'

import { cn } from '@/libs/utils/cn'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const projectsItems: { label: string; href: string }[] = [
  { label: 'RESIDENTIAL', href: '/projects/residential' },
  { label: 'CONDOMINIUM', href: '/projects/condominium' },
  { label: 'HOSPITALITY', href: '/projects/hospitality' },
  { label: 'COMMERCIAL', href: '/projects/commercial' },
  { label: 'MASTER PLANNING', href: '/projects/master-planning' },
  { label: 'PUBLIC SPACE ', href: '/projects/public-space' },
]

const awardsAndPressItems: { label: string; href: string }[] = [
  { label: 'AWARDS', href: '/awards' },
  { label: 'PRESS', href: '/press' },
]

const LocalNavigation = () => {
  const pathname = usePathname()

  let items: { label: string; href: string }[] = []
  if (pathname.startsWith('/projects')) {
    items = projectsItems
  } else if (pathname.startsWith('/awards') || pathname.startsWith('/press')) {
    items = awardsAndPressItems
  }

  return (
    <>
      {items.length > 0 ? (
        <nav className="flex gap-x-10 max-xl:hidden">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'hover:text-blue typo-body-2 inline-block font-bold uppercase transition-colors duration-300',
                pathname === item.href ? 'text-blue' : 'text-gray',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </>
  )
}

export { LocalNavigation }
