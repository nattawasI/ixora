import { cn } from '@/libs/utils/cn'

const ArticleDetailLayout = ({
  shareSlot,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & { shareSlot: React.ReactElement }) => {
  return (
    <div className={cn('mx-auto max-w-[88.75rem] lg:px-[5.625rem]', className)} {...props}>
      <div
        className={cn(
          'fixed top-[3.75rem] z-10 w-11.5 lg:top-[6.25rem]',
          'max-[88.75rem]:right-5',
          'min-[88.75rem]:right-1/2 min-[88.75rem]:translate-x-[calc(38.75rem+4.125rem)]',
        )}
      >
        {shareSlot}
      </div>
      {children}
    </div>
  )
}

export { ArticleDetailLayout }
