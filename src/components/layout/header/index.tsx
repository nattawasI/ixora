import Link from 'next/link'
import { FullLogo } from '@/components/ui/icons-color'
import { GlobalNavigation } from '@/components/layout/header/global-navigation'
import { HeaderNavigation } from '@/components/layout/header/header-navigation'
import { ProjectCategoriesNav } from '@/components/modules/projects/project-categories-nav'
import { AwardsAndPressNav } from '@/components/modules/awards-and-press/awards-and-press-nav'
import type { NavigationItemType } from '@/components/layout/type'

const mockupProjectCategories: NavigationItemType[] = [
  { label: 'RESIDENTIAL', href: '/projects/residential' },
  { label: 'CONDOMINIUM', href: '/projects/condominium' },
  { label: 'HOSPITALITY', href: '/projects/hospitality' },
  { label: 'COMMERCIAL', href: '/projects/commercial' },
  { label: 'MASTER PLANNING', href: '/projects/master-planning' },
  { label: 'PUBLIC SPACE ', href: '/projects/public-space' },
]

const Header = () => {
  /** fetch project categories here... */
  return (
    <header
      id="header"
      className="sticky top-0 z-20 flex h-[3.75rem] shrink-0 items-center justify-between gap-x-[1.25rem] px-4 lg:h-[6.25rem] lg:px-10"
    >
      <GlobalNavigation />
      <HeaderNavigation
        projectCategoriesNav={
          <ProjectCategoriesNav layout="horizontal" categories={mockupProjectCategories} className="max-lg:hidden" />
        }
        awardsAndPressNav={<AwardsAndPressNav className="max-lg:hidden" />}
      />
      <Link href="/" aria-label="Home" className="block w-[6.75rem] lg:w-[9.375rem]">
        <FullLogo className="h-auto w-full" />
      </Link>
    </header>
  )
}

export { Header }
