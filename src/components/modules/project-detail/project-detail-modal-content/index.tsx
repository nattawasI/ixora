'use client'

import { ProjectDetailContent } from '@/components/modules/project-detail/project-detail-content'
import { PageModalButtonsMobile, PageModalPrev, PageModalNext, PageModalClose } from '@/components/ui/page-modal'
import { historyReplaceState } from '@/libs/utils/history'
// import { ProjectDetailModalContentLoading } from './loading'
import type { ProjectDetailResponse } from '@/libs/directus/type'

const ProjectDetailModalContent = ({ data }: { data: ProjectDetailResponse }) => {
  // const handlePrev = () => {
  const handlePrev = () => {
    historyReplaceState('/projects/residential/1')
  }

  const handleNext = () => {
    historyReplaceState('/projects/residential/3')
  }

  return (
    <div className="bg-gray-light-2">
      <ProjectDetailContent isInModal {...data} />
      <PageModalButtonsMobile>
        <PageModalPrev variant="mobile" onClick={handlePrev} />
        <PageModalClose variant="mobile" label="CLOSE" />
        <PageModalNext variant="mobile" onClick={handleNext} />
      </PageModalButtonsMobile>
      <PageModalPrev variant="desktop" onClick={handlePrev} />
      <PageModalNext variant="desktop" onClick={handleNext} />
      <PageModalClose variant="desktop" />
    </div>
  )
}

export { ProjectDetailModalContent }
