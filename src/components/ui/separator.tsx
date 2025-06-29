'use client'

import { cn } from '@/libs/utils/cn'
import { Separator as SeparatorPrimitive } from '@radix-ui/react-separator'
import { IconLogo } from '@/components/ui/icons-color/icon-logo'

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

const SeparatorIcon = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div className={cn('my-7.5 flex justify-center md:my-[7.5rem]', className)} {...props}>
      <IconLogo className="size-[3.125rem] lg:size-[5.75rem]" />
    </div>
  )
}

export { Separator, SeparatorIcon }
