'use client'

import { useRouter } from 'next/navigation'

const ExploreMoreLink = ({
  href,
  isInModal,
  onClick,
  ...props
}: { href: string; isInModal?: boolean } & Omit<React.ComponentProps<'a'>, 'href'>) => {
  const router = useRouter()

  return (
    <a
      href={href}
      className="block"
      {...props}
      onClick={(e) => {
        if (isInModal) {
          e.preventDefault()
          router.replace(href, { scroll: false })
        }
        onClick?.(e)
      }}
    ></a>
  )
}

export { ExploreMoreLink }
