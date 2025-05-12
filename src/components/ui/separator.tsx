'use client'

import { cn } from '@/libs/utils/cn'
import { Separator as SeparatorPrimitive } from '@radix-ui/react-separator'

const Separator = ({
  orientation = 'horizontal',
  className,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive>) => {
  return (
    <SeparatorPrimitive
      orientation={orientation}
      className={cn('bg-gray-light-1', orientation === 'horizontal' ? 'h-px' : 'w-px', className)}
      {...props}
    />
  )
}

export { Separator }
