'use client'

import { cn } from '@/libs/utils/cn'
import { usePathname } from 'next/navigation'
import { NavigationLink } from '@/components/ui/navigation-link'

import { projectCategories } from '@/libs/data/project-categories'

type ProjectCategoriesNavProps = {
  layout: 'horizontal' | 'vertical'
  onSelect?: () => void
}

const ProjectCategoriesNav = ({
  layout,
  onSelect,
  className,
  ...props
}: React.ComponentProps<'nav'> & ProjectCategoriesNavProps) => {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        layout === 'horizontal' ? 'flex w-full justify-center gap-x-4 min-[73.75rem]:gap-x-5 xl:gap-x-10' : '',
        layout === 'vertical' ? 'space-y-1.25' : '',
        className,
      )}
      {...props}
    >
      {projectCategories.map((item) => (
        <NavigationLink
          key={item.href}
          href={item.href}
          isCurrent={pathname.startsWith(item.href)}
          onClick={() => {
            onSelect?.()
          }}
        >
          {item.label}
        </NavigationLink>
      ))}
    </nav>
  )
}

export { ProjectCategoriesNav, type ProjectCategoriesNavProps }
