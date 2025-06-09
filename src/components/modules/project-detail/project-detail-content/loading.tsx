import { TextSkeleton } from '@/components/ui/text-skeleton'

const ProjectDetailContentLoading = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-2.5 lg:mb-[3.75rem]">
        <TextSkeleton variant="typo-title-1" className="w-1/2" />
        <TextSkeleton variant="typo-body-2" className="w-[9.375rem]" />
      </div>
      <div className="grid max-md:gap-y-5 md:grid-cols-12 md:gap-x-7.5">
        <div className="flex flex-col gap-y-5 md:col-span-4 md:gap-y-7.5">
          <div className="space-y-1.25">
            <TextSkeleton variant="typo-body-2" className="w-[5rem]" />
            <TextSkeleton variant="typo-body-2" className="w-[7.5rem]" />
          </div>
          <div className="mt-auto space-y-1.25">
            <TextSkeleton variant="typo-body-2" className="w-[5rem]" />
            <TextSkeleton variant="typo-body-2" className="w-[7.5rem]" />
          </div>
        </div>
        <div className="flex flex-col gap-y-5 md:col-span-8 md:gap-y-7.5 md:pl-7.5">
          <div>
            <TextSkeleton variant="typo-body-2" />
            <TextSkeleton variant="typo-body-2" />
            <TextSkeleton variant="typo-body-2" className="w-2/3" />
          </div>
          <div>
            <TextSkeleton variant="typo-body-2" className="w-1/3" />
            <TextSkeleton variant="typo-body-2" className="w-1/3" />
          </div>
        </div>
      </div>
      <div>
        <div className="skeleton aspect-[1.47] w-full" />
      </div>
    </div>
  )
}

export { ProjectDetailContentLoading }
