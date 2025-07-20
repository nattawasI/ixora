'use client'

import { navigationLinkVariants } from '@/components/ui/navigation-link'
import { useGlobalContext } from '@/components/layout/global-context'

const ContactNav = ({ onClick }: { onClick?: () => void }) => {
  const { setContactActiveValue } = useGlobalContext()

  const handleClick = () => {
    const contactSection = document.getElementById('contact')

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      setContactActiveValue('contact')
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
