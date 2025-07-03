import { TextSkeleton } from '@/components/ui/text-skeleton'
import { Separator } from '@/components/ui/separator'

const PressDetailContentLoading = () => {
  return (
    <>
      <div className="mb-2.5 lg:mb-5">
        <TextSkeleton variant="typo-body-2" className="w-[9.375rem]" />
        <Separator className="mt-2.5 mb-5 animate-pulse" />
        <TextSkeleton variant="typo-title-2--rps" className="w-1/2" />
      </div>
      <div className="mb-5 space-y-7.5 lg:mb-7.5">
        <div>
          <TextSkeleton variant="typo-body-2" />
          <TextSkeleton variant="typo-body-2" />
          <TextSkeleton variant="typo-body-2" className="w-2/3" />
        </div>
        <div>
          <TextSkeleton variant="typo-body-2" />
          <TextSkeleton variant="typo-body-2" className="w-2/3" />
        </div>
      </div>
      <div>
        <div className="skeleton aspect-[1.47] w-full" />
      </div>
    </>
  )
}

export { PressDetailContentLoading }
