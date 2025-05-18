'use client'

import { usePathname } from 'next/navigation'
import { NavigationLink } from '@/components/ui/navigation-link'
import type { NavigationItemType } from '@/components/layout/type'

const projectsItems: NavigationItemType[] = [
  { label: 'RESIDENTIAL', href: '/projects/residential' },
  { label: 'CONDOMINIUM', href: '/projects/condominium' },
  { label: 'HOSPITALITY', href: '/projects/hospitality' },
  { label: 'COMMERCIAL', href: '/projects/commercial' },
  { label: 'MASTER PLANNING', href: '/projects/master-planning' },
  { label: 'PUBLIC SPACE ', href: '/projects/public-space' },
]

const awardsAndPressItems: NavigationItemType[] = [
  { label: 'AWARDS', href: '/awards' },
  { label: 'PRESS', href: '/press' },
]

const LocalNavigation = () => {
  const pathname = usePathname()

  let items: NavigationItemType[] = []
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
            <NavigationLink key={item.href} href={item.href} isCurrent={pathname === item.href}>
              {item.label}
            </NavigationLink>
          ))}
        </nav>
      ) : null}
    </>
  )
}

export { LocalNavigation }
