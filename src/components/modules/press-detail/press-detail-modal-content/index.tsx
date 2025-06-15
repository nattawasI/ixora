'use client'

import { usePressList } from '@/components/modules/press/press-list-context'
import { DialogTitle } from '@radix-ui/react-dialog'
import { PressDetailContent } from '@/components/modules/press-detail/press-detail-content'
import { PressDetailModalClient } from './client'
import type { NewsDetailResponse, NewsResponse } from '@/libs/directus/type'

const PressDetailModalContent = ({ slug, exploreMoreData }: { slug: string; exploreMoreData: NewsResponse[] }) => {
  const { pressList } = usePressList()

  const data = pressList.find((item) => item.slug === slug)

  return (
    <div className="bg-gray-light-2">
      {/* {data ? <PressDetailContent isInModal data={data} exploreMoreData={exploreMoreData} />:  <DialogTitle>Press Detail</DialogTitle>} */}

      {/* <PressDetailContent isInModal data={null} exploreMoreData={exploreMoreData} /> */}
      <PressDetailModalClient />
    </div>
  )
}

export { PressDetailModalContent }
