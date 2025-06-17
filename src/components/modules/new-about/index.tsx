'use client'
import { useMediaQuery } from '@/libs/hooks/use-media-query'
import dynamic from 'next/dynamic'

const DesktopFullPageLayout = dynamic(() => import('./desktop').then((mod) => mod.DesktopFullPageLayout), {
  ssr: false,
})
const MobileSliderLayout = dynamic(() => import('./mobile').then((mod) => mod.MobileSliderLayout), { ssr: false })

const About = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return isMobile ? <MobileSliderLayout /> : <DesktopFullPageLayout />
}

export { About }
