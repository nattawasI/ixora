import Link from 'next/link'
import { FullLogo } from '@/components/ui/icons-color'
import { GlobalNavigation } from '@/components/layout/header/global-navigation'

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-[3.75rem] shrink-0 items-center justify-between gap-x-[1.25rem] bg-white px-4 lg:h-[6.25rem] lg:px-10">
      <GlobalNavigation />
      <Link href="/" className="block w-[6.75rem] lg:w-[9.375rem]">
        <FullLogo className="h-auto w-full" />
      </Link>
    </header>
  )
}

export { Header }
