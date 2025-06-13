import { CareerAccordion } from './career-accordion'
import { TextSkeleton } from '@/components/ui/text-skeleton'
import { EmptyData } from '@/components/ui/empty-data'

/** directus */
import { getCareers } from '@/libs/directus/service/career'

const CareerList = async () => {
  /** fetch here... */
  const items = await getCareers()

  return <>{items.length > 0 ? <CareerAccordion items={items} /> : <EmptyData />}</>
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
