'use client'

import { useState } from 'react'
import { usePressList } from '@/components/modules/press/press-list-context'
import { DialogTitle } from '@radix-ui/react-dialog'
import { PressDetailContent } from '@/components/modules/press-detail/press-detail-content'
import { PageModalButtonsMobile, PageModalClose, PageModalNext, PageModalPrev } from '@/components/ui/page-modal'
import { historyReplaceState } from '@/libs/utils/history'

const PressDetailModalContent = ({ initSlug }: { initSlug: string }) => {
  const { pressList } = usePressList()

  const initIndex = pressList.findIndex((item) => item.slug === initSlug)

  const [index, setIndex] = useState(initIndex)

  if (index < 0) {
    return (
      <div className="bg-gray-light-2">
        <DialogTitle>News Not Found</DialogTitle>
      </div>
    )
  }

  const handlePrev = () => {
    setIndex(index - 1)
    historyReplaceState(`/press-and-news/${pressList[index - 1].slug}`)
  }

  const handleNext = () => {
    setIndex(index + 1)
    historyReplaceState(`/press-and-news/${pressList[index + 1].slug}`)
  }

  const showPrevButton = index > 0
  const showNextButton = index < pressList.length - 1

  return (
    <>
      <div className="bg-gray-light-2">
        <PressDetailContent isInModal data={pressList[index]} />
        <PageModalButtonsMobile>
          {showPrevButton ? <PageModalPrev variant="mobile" onClick={handlePrev} /> : null}
          <PageModalClose variant="mobile" label="CLOSE" />
          {showNextButton ? <PageModalNext variant="mobile" onClick={handleNext} /> : null}
        </PageModalButtonsMobile>
        {showPrevButton ? <PageModalPrev variant="desktop" onClick={handlePrev} /> : null}
        {showNextButton ? <PageModalNext variant="desktop" onClick={handleNext} /> : null}
        <PageModalClose variant="desktop" />
      </div>
    </>
  )
}

export { PressDetailModalContent }
