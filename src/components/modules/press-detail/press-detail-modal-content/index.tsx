import { PressDetailContent } from '@/components/modules/press-detail/press-detail-content'
import { PressDetailModalClient } from './client'
import { NewsDetailResponse } from '@/libs/directus/type'

const PressDetailModalContent = ({ data }: { data: NewsDetailResponse }) => {
  return (
    <div className="bg-gray-light-2">
      <PressDetailContent isInModal data={data} />
      <PressDetailModalClient />
    </div>
  )
}

export { PressDetailModalContent }
