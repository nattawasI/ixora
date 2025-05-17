import { ComponentProps } from 'react'
import { cn } from '@/libs/utils/cn'
import { Separator } from '@/components/ui/separator'

const HeadingPage = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={cn('mb-5 md:mb-10', className)} {...props}>
      <h1 className="typo-title-2 font-bold">{children}</h1>
      <Separator className="mt-2.5 md:mt-5" />
    </div>
  )
}

export { HeadingPage }
