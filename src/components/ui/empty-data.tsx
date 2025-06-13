import { cn } from '@/libs/utils/cn'

const EmptyData = ({ className, children, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn('mx-auto flex aspect-square w-full max-w-80 items-center justify-center p-4', className)}
      {...props}
    >
      <p className="typo-title-3 text-gray">{children || 'No data.'}</p>
    </div>
  )
}

export { EmptyData }
