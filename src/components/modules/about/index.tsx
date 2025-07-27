'use client'

import './style.css'
import { useMediaQuery } from '@/libs/hooks/use-media-query'
import { MobileAboutLayout } from './mobile'
import { DesktopAboutLayout } from './desktop'
import { MotionPageFade } from '@/components/common/motion'
import { cn } from '@/libs/utils/cn'

const AboutPageContent = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <MotionPageFade>
      <main className={cn(isMobile === undefined ? 'invisible' : '')} data-cursor-target>
        {isMobile ? <MobileAboutLayout /> : <DesktopAboutLayout />}
      </main>
    </MotionPageFade>
  )
}

export { AboutPageContent }
