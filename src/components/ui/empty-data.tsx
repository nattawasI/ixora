import { cn } from '@/libs/utils/cn'

const EmptyData = ({
  className,
  label,
  ...props
}: Omit<React.ComponentProps<'div'>, 'children'> & { label?: string }) => {
  return (
    <div className={cn('mx-auto flex h-80 w-80 items-center justify-center p-4', className)} {...props}>
      <p className="typo-title-3 text-gray">{label || 'No data.'}</p>
    </div>
  )
}

export { EmptyData }
