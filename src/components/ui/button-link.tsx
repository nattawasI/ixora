import { ComponentProps } from 'react'
import { cn } from '@/libs/utils/cn'
import Link, { type LinkProps } from 'next/link'
import { ArrowLeft, ArrowRight } from '@/components/ui/icons'

type ButtonLinkProps = LinkProps &
  Omit<ComponentProps<'a'>, keyof LinkProps> & {
    arrow?: 'left' | 'right'
    isFullWidth?: boolean
  }

const ButtonLink = ({ arrow = 'right', isFullWidth, className, children, ...props }: ButtonLinkProps) => {
  const iconClassName = cn(
    'text-blue relative size-6 transition-colors duration-300 group-hover/button-link:text-white',
  )

  return (
    <Link
      className={cn(
        'border-gray-light-1 group/button-link relative inline-flex h-14 items-center justify-center gap-x-[0.938rem] border px-[1.625rem] font-bold transition-colors duration-300',
        isFullWidth ? 'flex w-full' : '',
        'hover:border-blue hover:text-white',
        'before:bg-blue before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0 before:transition-[width] before:duration-300 hover:before:w-full',
        className,
      )}
      {...props}
    >
      {arrow === 'left' && <ArrowLeft className={iconClassName} />}
      <span className="relative">{children}</span>
      {arrow === 'right' && <ArrowRight className={iconClassName} />}
    </Link>
  )
}

export { ButtonLink }
