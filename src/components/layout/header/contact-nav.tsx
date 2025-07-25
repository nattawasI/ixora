'use client'

import { usePathname } from 'next/navigation'
import { navigationLinkVariants } from '@/components/ui/navigation-link'
import { useGlobalContext } from '@/components/layout/global-context'
import { useMediaQuery } from '@/libs/hooks/use-media-query'

const ContactNav = ({ onClick }: { onClick?: () => void }) => {
  const { setContactActiveValue } = useGlobalContext()
  const pathname = usePathname()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const moveFullPageToLast = () => {
    const customEvent = new CustomEvent('moveFullPageToLast')
    document.dispatchEvent(customEvent)
  }

  const handleClick = () => {
    const contactSection = document.getElementById('contact')
    const useFullPage = pathname === '/about' && !isMobile

    if (contactSection) {
      setContactActiveValue(['email', 'offices', 'social'])

      setTimeout(() => {
        if (useFullPage) {
          moveFullPageToLast()
        } else {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 300)
    }

    onClick?.()
  }

  return (
    <button type="button" className={navigationLinkVariants()} onClick={handleClick}>
      CONTACT
    </button>
  )
}

export { ContactNav }
