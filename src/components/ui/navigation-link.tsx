import { cn } from '@/libs/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'
import Link, { type LinkProps } from 'next/link'

const navigationLinkVariants = cva(
  cn('hover:text-blue typo-body-2 inline-flex font-semibold uppercase transition-colors duration-300'),
  {
    variants: {
      isCurrent: {
        true: 'text-blue',
        false: 'text-gray',
      },
    },
    defaultVariants: {
      isCurrent: false,
    },
  },
)

type NavigationLinkVariantsType = VariantProps<typeof navigationLinkVariants>

type NavigationLinkProps = NavigationLinkVariantsType & LinkProps & Omit<React.ComponentProps<'a'>, keyof LinkProps>

const NavigationLink = ({ isCurrent, className, ...props }: NavigationLinkProps) => {
  return <Link className={cn(navigationLinkVariants({ isCurrent, className }))} {...props} />
}

export { NavigationLink, navigationLinkVariants, type NavigationLinkProps }
