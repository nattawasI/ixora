import { ComponentProps, ReactNode } from 'react'
import { cn } from '@/libs/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'
import Link, { type LinkProps } from 'next/link'
import { ArrowLeft, ArrowRight } from '@/components/ui/icons-outline'

const buttonArrowVariants = cva(
  cn(
    'border-gray-light-1 group/button-link relative inline-flex h-14 items-center justify-center gap-x-[0.938rem] border px-[1.625rem] font-bold whitespace-nowrap transition-colors duration-300',
    'hover:border-blue hover:text-white',
    'before:bg-blue before:absolute before:top-0 before:bottom-0 before:left-0 before:w-0 before:transition-[width] before:duration-300 hover:before:w-full',
  ),
  {
    variants: {
      isFullWidth: {
        true: cn('flex w-full'),
        false: '',
      },
    },
  },
)

const iconClassName = cn('text-blue relative size-6 transition-colors duration-300 group-hover/button-link:text-white')

type ButtonArrowChildrenProps = {
  arrow?: 'left' | 'right'
  children?: ReactNode
}

const ButtonArrowChildren = ({ arrow = 'right', children }: ButtonArrowChildrenProps) => {
  return (
    <>
      {arrow === 'left' && <ArrowLeft className={iconClassName} />}
      <span className="relative">{children}</span>
      {arrow === 'right' && <ArrowRight className={iconClassName} />}
    </>
  )
}

type ButtonArrowProps = VariantProps<typeof buttonArrowVariants> &
  ComponentProps<'button'> &
  Pick<ButtonArrowChildrenProps, 'arrow'>

const ButtonArrow = ({
  type = 'button',
  arrow = 'right',
  isFullWidth,
  className,
  children,
  ...props
}: ButtonArrowProps) => {
  return (
    <button type={type} className={buttonArrowVariants({ isFullWidth, className })} {...props}>
      <ButtonArrowChildren arrow={arrow}>{children}</ButtonArrowChildren>
    </button>
  )
}

type ButtonArrowLinkProps = VariantProps<typeof buttonArrowVariants> &
  LinkProps &
  Omit<ComponentProps<'a'>, keyof LinkProps> &
  Pick<ButtonArrowChildrenProps, 'arrow'>

const ButtonArrowLink = ({ arrow = 'right', isFullWidth, className, children, ...props }: ButtonArrowLinkProps) => {
  return (
    <Link className={buttonArrowVariants({ isFullWidth, className })} {...props}>
      <ButtonArrowChildren arrow={arrow}>{children}</ButtonArrowChildren>
    </Link>
  )
}

export { ButtonArrow, ButtonArrowLink }
