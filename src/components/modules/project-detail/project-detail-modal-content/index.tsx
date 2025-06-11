import { ProjectDetailContent } from '@/components/modules/project-detail/project-detail-content'
import { PageModalButtonsMobile, PageModalPrev, PageModalNext, PageModalClose } from '@/components/ui/page-modal'
// import { ProjectDetailModalContentLoading } from './loading'

const ProjectDetailModalContent = () => {
  return (
    <div className="bg-gray-light-2">
      {/* <ProjectDetailModalContentLoading /> */}
      <ProjectDetailContent isInModal />
      <PageModalButtonsMobile>
        <PageModalPrev variant="mobile" />
        <PageModalClose variant="mobile" label="CLOSE" />
        <PageModalNext variant="mobile" />
      </PageModalButtonsMobile>
      <PageModalPrev variant="desktop" />
      <PageModalNext variant="desktop" />
      <PageModalClose variant="desktop" />
    </div>
  )
}

export { ProjectDetailModalContent }
