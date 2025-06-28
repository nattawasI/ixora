'use client'

import './style.css'
import { useMediaQuery } from '@/libs/hooks/use-media-query'
import { MobileAboutLayout } from './mobile'
import { DesktopAboutLayout } from './desktop'
import { cn } from '@/libs/utils/cn'

const AboutPageContent = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <main className={cn(isMobile === undefined ? 'invisible' : '')}>
      {isMobile ? <MobileAboutLayout /> : <DesktopAboutLayout />}
    </main>
  )
}

export { AboutPageContent }
