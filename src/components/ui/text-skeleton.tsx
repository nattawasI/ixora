import { cn } from '@/libs/utils/cn'

type TextSkeletonProps = {
  variant?:
    | 'typo-title-1--rps'
    | 'typo-title-2--rps'
    | 'typo-title-3--rps'
    | 'typo-body-1'
    | 'typo-body-2'
    | 'typo-body-2--1'
    | 'typo-body-3'
    | 'typo-body-3--2'
  className?: string
}

const TextSkeleton = ({ variant = 'typo-body-1', className }: TextSkeletonProps) => {
  const lineHeightClassName: Record<NonNullable<TextSkeletonProps['variant']>, string> = {
    'typo-title-1--rps': 'h-[2.188rem] lg:h-[2.875rem]',
    'typo-title-2--rps': 'h-[1.813rem] lg:h-[2.25rem]',
    'typo-title-3--rps': 'h-[1.688rem] lg:h-[1.938rem]',
    'typo-body-1': 'h-6.25',
    'typo-body-2': 'h-4.5',
    'typo-body-2--1': 'h-4.5 lg:h-6.25',
    'typo-body-3': 'h-4',
    'typo-body-3--2': 'h-4 lg:h-4.5',
  }

  const skeletonClassName: Record<NonNullable<TextSkeletonProps['variant']>, string> = {
    'typo-title-1--rps': 'h-[1.625rem] lg:h-[2.25rem]',
    'typo-title-2--rps': 'h-[1.25rem] lg:h-[1.625rem]',
    'typo-title-3--rps': 'h-[1.125rem] lg:h-[1.313rem]',
    'typo-body-1': 'h-3.75',
    'typo-body-2': 'h-3.25',
    'typo-body-2--1': 'h-3.25 lg:h-3.75',
    'typo-body-3': 'h-2.5',
    'typo-body-3--2': 'h-2.5 lg:h-3.25',
  }

  return (
    <div className={cn('flex items-center', lineHeightClassName[variant])}>
      <div className={cn('skeleton w-full', skeletonClassName[variant], className)} />
    </div>
  )
}

export { TextSkeleton }
