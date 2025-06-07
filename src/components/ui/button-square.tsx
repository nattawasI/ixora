import { ComponentProps } from 'react'
import { cn } from '@/libs/utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonSquareVariants = cva(
  cn('typo-body-2 flex size-11.5 items-center justify-center gap-x-2.5 font-bold transition-colors'),
  {
    variants: {
      theme: {
        default: cn('border-gray-light-1 border bg-transparent text-black', 'hover:bg-blue hover:text-white'),
        blue: cn(
          'bg-blue text-white',
          'before:bg-blue-2/0 before:transition-color hover:before:bg-blue-2/30 relative before:absolute before:inset-0 before:duration-300 [&>*]:relative',
        ),
        gray: cn('bg-gray text-white', 'hover:bg-blue'),
        'text-blue': cn('text-blue', 'hover:bg-blue hover:text-white'),
      },
    },
    defaultVariants: {
      theme: 'default',
    },
  },
)

export type ButtonSquareProps = ComponentProps<'button'> & VariantProps<typeof buttonSquareVariants>

const ButtonSquare = ({ type = 'button', className, theme, ...props }: ButtonSquareProps) => {
  return <button type={type} className={cn(buttonSquareVariants({ theme, className }))} {...props} />
}

export { ButtonSquare, buttonSquareVariants }
