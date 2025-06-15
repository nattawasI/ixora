'use client'

import { usePressList } from '@/components/modules/press/press-list-context'
import { DialogTitle } from '@radix-ui/react-dialog'
import { PressDetailContent } from '@/components/modules/press-detail/press-detail-content'
import { PageModalButtonsMobile, PageModalClose, PageModalNext, PageModalPrev } from '@/components/ui/page-modal'
import { historyReplaceState } from '@/libs/utils/history'
import type { NewsDetailResponse, NewsResponse } from '@/libs/directus/type'

const PressDetailModalContent = ({ slug, exploreMoreData }: { slug: string; exploreMoreData: NewsResponse[] }) => {
  const { pressList } = usePressList()

  const length = pressList.length
  const index = pressList.findIndex((item) => item.slug === slug)

  if (index < 0) {
    return (
      <div className="bg-gray-light-2">
        <DialogTitle>News Not Found</DialogTitle>
      </div>
    )
  }

  const data = pressList[index]

  const handlePrev = () => {
    historyReplaceState(`/press-and-news/${pressList[index - 1].slug}`)
  }

  const handleNext = () => {
    historyReplaceState(`/press-and-news/${pressList[index + 1].slug}`)
  }

  const showPrevButton = index > 0
  const showNextButton = index < length - 1

  return (
    <>
      <div className="bg-gray-light-2">
        <PressDetailContent isInModal data={data} exploreMoreData={exploreMoreData} />
      </div>
      <PageModalButtonsMobile>
        {showPrevButton ? <PageModalPrev variant="mobile" onClick={handlePrev} /> : null}
        <PageModalClose variant="mobile" label="CLOSE" />
        {showNextButton ? <PageModalNext variant="mobile" onClick={handleNext} /> : null}
      </PageModalButtonsMobile>
      {showPrevButton ? <PageModalPrev variant="desktop" onClick={handlePrev} /> : null}
      {showNextButton ? <PageModalNext variant="desktop" onClick={handleNext} /> : null}
      <PageModalClose variant="desktop" />
    </>
  )
}

export { PressDetailModalContent }
