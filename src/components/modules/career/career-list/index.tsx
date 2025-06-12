import { CareerAccordion } from './career-accordion'
import { TextSkeleton } from '@/components/ui/text-skeleton'

/** directus */
import { readSingleton } from '@directus/sdk'
import { directus } from '@/libs/directus'
import type { CareerResponse } from '@/libs/directus/type'

const CareerList = async () => {
  /** fetch here... */
  const items = await directus.request<CareerResponse[]>(
    readSingleton('career', {
      filter: {
        status: {
          _eq: 'published',
        },
      },
      fields: ['id', 'status', 'title', 'position_required', 'requirement'],
    }),
  )

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
