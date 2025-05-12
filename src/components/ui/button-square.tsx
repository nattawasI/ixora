import { ComponentProps } from 'react'
import { cn } from '@/libs/utils/cn'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonSquareVariants = cva(
  cn('flex items-center justify-center transition-colors duration-300 [&>*]:duration-300'),
  {
    variants: {
      theme: {
        default: cn('bg-white text-black', 'hover:bg-blue hover:text-white'),
        blue: cn(
          'bg-blue text-white',
          'before:bg-blue-2/0 before:transition-color hover:before:bg-blue-2/30 relative before:absolute before:inset-0 before:duration-300 [&>*]:relative',
        ),
        gray: cn('bg-gray text-white', 'hover:bg-blue'),
        'text-blue': cn('text-blue', 'hover:bg-blue hover:text-white'),
      },
      size: {
        default: cn('size-[3.125rem]'),
        small: cn('size-10'),
      },
    },
    defaultVariants: {
      theme: 'default',
      size: 'default',
    },
  },
)

export type ButtonSquareProps = ComponentProps<'button'> & VariantProps<typeof buttonSquareVariants>

const ButtonSquare = ({ type = 'button', className, theme, size, ...props }: ButtonSquareProps) => {
  return <button type={type} className={cn(buttonSquareVariants({ theme, size, className }))} {...props} />
}

export { ButtonSquare, buttonSquareVariants }
