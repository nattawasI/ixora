import { cn } from '@/libs/utils/cn'

type TextSkeletonProps = {
  variant?: 'typo-title-1' | 'typo-title-2' | 'typo-body-1' | 'typo-body-2' | 'typo-body-3'
  className?: string
}

const TextSkeleton = ({ variant = 'typo-body-1', className }: TextSkeletonProps) => {
  const lineHeightClassName: Record<NonNullable<TextSkeletonProps['variant']>, string> = {
    'typo-title-1': 'h-[2.188rem] lg:h-[2.875rem]',
    'typo-title-2': 'h-[1.813rem] lg:h-[2.25rem]',
    'typo-body-1': 'h-6',
    'typo-body-2': 'h-[1.375rem]',
    'typo-body-3': 'h-4',
  }

  const skeletonClassName: Record<NonNullable<TextSkeletonProps['variant']>, string> = {
    'typo-title-1': 'h-[1.625rem] lg:h-[2.25rem]',
    'typo-title-2': 'h-[1.25rem] lg:h-[1.625rem]',
    'typo-body-1': 'h-[0.938rem]',
    'typo-body-2': 'h-[0.813rem]',
    'typo-body-3': 'h-2.5',
  }

  return (
    <div className={cn('flex items-center', lineHeightClassName[variant])}>
      <div className={cn('skeleton w-full', skeletonClassName[variant], className)} />
    </div>
  )
}

export { TextSkeleton }
