'use client'

import { cn } from '@/libs/utils/cn'
import { usePathname } from 'next/navigation'
import { NavigationLink } from '@/components/ui/navigation-link'
import type { NavigationItemType } from '@/components/layout/type'

const items: NavigationItemType[] = [
  { label: 'AWARDS', href: '/awards' },
  { label: 'PRESS & NEWS', href: '/press' },
]

const AwardsAndPressNav = ({ className, ...props }: React.ComponentProps<'nav'>) => {
  const pathname = usePathname()

  return (
    <nav className={cn('flex gap-x-10', className)} {...props}>
      {items.map((item) => (
        <NavigationLink type="button" key={item.href} isCurrent={pathname.startsWith(item.href)} href={item.href}>
          {item.label}
        </NavigationLink>
      ))}
    </nav>
  )
}

export { AwardsAndPressNav }
