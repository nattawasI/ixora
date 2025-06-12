import { CareerAccordion } from './career-accordion'
import { TextSkeleton } from '@/components/ui/text-skeleton'

/** directus */
import { careerQuery } from '@/libs/directus/service/career'

const CareerList = async () => {
  /** fetch here... */
  const items = await careerQuery()

  return <CareerAccordion items={items} />
}

const CareerListLoading = () => {
  return (
    <div className="space-y-5">
      {Array.from({ length: 3 }).map((_, index) => (
        <div className="border-gray-light-1 animate-pulse border-b pb-5" key={index}>
          <div className="space-y-2.5 pb-5">
            <TextSkeleton variant="typo-title-3" className="w-full max-w-80" />
            <div className="skeleton h-8.5 w-40 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  )
}

export { CareerList, CareerListLoading }
