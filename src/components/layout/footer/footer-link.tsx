import { cn } from '@/libs/utils/cn'

import { External } from '@/components/ui/icons-outline/external'
import Link, { type LinkProps } from 'next/link'

const FooterLink = ({
  isExternal,
  className,
  children,
  ...props
}: Omit<React.ComponentProps<'a'>, keyof LinkProps> & LinkProps & { isExternal?: boolean }) => {
  return (
    <Link
      className={cn(
        'group/footer-link typo-body-2 decoration-gray-light-1 hover:decoration-blue inline-flex items-center gap-x-2.5 underline underline-offset-4 transition-colors',
        className,
      )}
      target={isExternal ? '_blank' : undefined}
      {...props}
    >
      {children}
      {isExternal ? <External className="group-hover/footer-link:text-blue" /> : null}
    </Link>
  )
}

export { FooterLink }
