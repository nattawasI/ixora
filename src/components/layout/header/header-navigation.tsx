'use client'

import { usePathname } from 'next/navigation'

const HeaderNavigation = ({
  projectCategoriesNav,
  awardsAndPressNav,
}: {
  projectCategoriesNav: React.ReactElement
  awardsAndPressNav: React.ReactElement
}) => {
  const pathname = usePathname()

  if (pathname === '/' || pathname.startsWith('/projects')) {
    return projectCategoriesNav
  } else if (pathname.startsWith('/awards') || pathname.startsWith('/press')) {
    return awardsAndPressNav
  } else {
    return null
  }
}

export { HeaderNavigation }
