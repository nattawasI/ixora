'use client'

import { PageModalButtonsMobile, PageModalClose, PageModalNext, PageModalPrev } from '@/components/ui/page-modal'
import { historyReplaceState } from '@/libs/utils/history'

const PressDetailModalClient = () => {
  const handlePrev = () => {
    historyReplaceState('/press-and-news/1')
  }

  const handleNext = () => {
    historyReplaceState('/press-and-news/3')
  }

  return (
    <>
      <PageModalButtonsMobile>
        <PageModalPrev variant="mobile" onClick={handlePrev} />
        <PageModalClose variant="mobile" label="CLOSE" />
        <PageModalNext variant="mobile" onClick={handleNext} />
      </PageModalButtonsMobile>
      <PageModalPrev variant="desktop" onClick={handlePrev} />
      <PageModalNext variant="desktop" onClick={handleNext} />
      <PageModalClose variant="desktop" />
    </>
  )
}

export { PressDetailModalClient }
