'use client'

import { cn } from '@/libs/utils/cn'
import { useBgColorByPathname } from '@/libs/hooks/use-bg-color-by-pathname'

const HeaderWrapper = ({ className, ...props }: React.ComponentProps<'header'>) => {
  const bgColor = useBgColorByPathname()

  return (
    <header
      id="header"
      className={cn(
        'sticky top-0 z-20 flex h-[3.75rem] shrink-0 items-center justify-between gap-x-[1.25rem] px-4.75 lg:h-[6.25rem] lg:px-10',
        bgColor,
        className,
      )}
      {...props}
    />
  )
}

export { HeaderWrapper }
