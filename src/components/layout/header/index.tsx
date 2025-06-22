import Link from 'next/link'
import { HeaderWrapper } from '@/components/layout/header/wrapper'
import { FullLogo } from '@/components/ui/icons-color'
import { GlobalNavigation } from '@/components/layout/header/global-navigation'
import { HeaderNavigation } from '@/components/layout/header/header-navigation'
import { ProjectCategoriesNav } from '@/components/modules/projects/project-categories-nav'
import { AwardsAndPressNav } from '@/components/modules/awards-and-press/awards-and-press-nav'

const Header = () => {
  return (
    <HeaderWrapper>
      <GlobalNavigation />
      <HeaderNavigation
        projectCategoriesNav={
          <ProjectCategoriesNav
            layout="horizontal"
            className="absolute top-1/2 left-0 -translate-y-1/2 max-lg:hidden"
          />
        }
        awardsAndPressNav={
          <AwardsAndPressNav className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:hidden" />
        }
      />
      <Link href="/" aria-label="Home" className="relative z-[1] block w-[6.75rem] xl:w-[9.375rem]">
        <FullLogo className="h-auto w-full" />
      </Link>
    </HeaderWrapper>
  )
}

export { Header }
