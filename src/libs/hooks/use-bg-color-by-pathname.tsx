import { usePathname } from 'next/navigation'

const useBgColorByPathname = () => {
  const pathname = usePathname()

  const isGrayBg =
    (pathname.startsWith('/projects') && pathname.split('/').filter(Boolean).length === 3) ||
    pathname.startsWith('/awards') ||
    pathname.startsWith('/press-and-news')

  return isGrayBg ? 'bg-gray-light-2' : 'bg-white'
}

export { useBgColorByPathname }
