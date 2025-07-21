'use client'

import { navigationLinkVariants } from '@/components/ui/navigation-link'
import { useGlobalContext } from '@/components/layout/global-context'

const ContactNav = ({ onClick }: { onClick?: () => void }) => {
  const { contactActiveValue, setContactActiveValue } = useGlobalContext()

  const handleClick = () => {
    const contactSection = document.getElementById('contact')

    if (contactSection) {
      if (contactActiveValue) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      } else {
        setContactActiveValue('contact')

        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      }
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
