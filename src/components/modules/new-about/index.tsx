'use client'
import { useMediaQuery } from '@/libs/hooks/use-media-query'
import { DesktopFullPageLayout } from './desktop'
import { MobileSliderLayout } from './mobile'

const About = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return isMobile ? <MobileSliderLayout /> : <DesktopFullPageLayout />
}

export { About }
