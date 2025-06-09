'use client'

import { navigationLinkVariants } from '@/components/ui/navigation-link'

const ContactNav = ({ onClick }: { onClick?: () => void }) => {
  const handleClick = () => {
    const contactSection = document.getElementById('contact')

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
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
