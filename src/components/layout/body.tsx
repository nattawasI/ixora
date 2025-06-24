'use client'

import { cn } from '@/libs/utils/cn'
import { useBgColorByPathname } from '@/libs/hooks/use-bg-color-by-pathname'

const Body = ({ className, ...props }: React.ComponentProps<'body'>) => {
  const bgColor = useBgColorByPathname()

  return (
    <body className={cn('typo-body-1 flex min-h-dvh flex-col text-black antialiased', bgColor, className)} {...props} />
  )
}

export { Body }
