'use client'

import './style.css'
import { useMediaQuery } from '@/libs/hooks/use-media-query'
import { MobileAboutLayout } from './mobile'
import { DesktopAboutLayout } from './desktop'

const AboutPageContent = () => {
  /** hooks */
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <main className={isMobile === undefined ? 'invisible' : ''}>
      {isMobile ? <MobileAboutLayout /> : <DesktopAboutLayout />}
    </main>
  )
}

export { AboutPageContent }
