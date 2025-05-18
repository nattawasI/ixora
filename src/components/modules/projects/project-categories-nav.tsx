'use client'

import { cn } from '@/libs/utils/cn'
import { usePathname } from 'next/navigation'
import { navigationLinkVariants } from '@/components/ui/navigation-link'
import type { NavigationItemType } from '@/components/layout/type'

type ProjectCategoriesNavProps = {
  layout: 'horizontal' | 'vertical'
  categories: NavigationItemType[]
  onSelect?: () => void
}

const ProjectCategoriesNav = ({
  layout,
  categories,
  onSelect,
  className,
  ...props
}: React.ComponentProps<'nav'> & ProjectCategoriesNavProps) => {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        layout === 'horizontal' ? 'flex gap-x-5 xl:gap-x-10' : '',
        layout === 'vertical' ? 'space-y-1.25' : '',
        className,
      )}
      {...props}
    >
      {categories.map((item) => (
        <button
          type="button"
          key={item.href}
          className={navigationLinkVariants({ isCurrent: pathname.startsWith(item.href) })}
          onClick={() => {
            history.pushState(null, '', item.href)
            onSelect?.()
          }}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}

export { ProjectCategoriesNav, type ProjectCategoriesNavProps }
