'use client'

import { PageModalButtonsMobile, PageModalClose, PageModalNext, PageModalPrev } from '@/components/ui/page-modal'
import { historyReplaceState } from '@/libs/utils/history'

const ProjectDetailModalClient = () => {
  const handlePrev = () => {
    historyReplaceState('/projects/residential/1')
  }

  const handleNext = () => {
    historyReplaceState('/projects/residential/3')
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

export { ProjectDetailModalClient }
