import { ProjectDetailContent } from '@/components/modules/project-detail/project-detail-content'
import { PageModalButtonsMobile, PageModalPrev, PageModalNext, PageModalClose } from '@/components/ui/page-modal'
// import { ProjectDetailModalContentLoading } from './loading'

const ProjectDetailModalContent = () => {
  return (
    <div className="bg-gray-light-2">
      {/* <ProjectDetailModalContentLoading /> */}
      <ProjectDetailContent isInModal />
      <PageModalButtonsMobile>
        <PageModalPrev variant="mobile" href="" />
        <PageModalClose variant="mobile" />
        <PageModalNext variant="mobile" href="" />
      </PageModalButtonsMobile>
      <PageModalPrev variant="desktop" href="" />
      <PageModalNext variant="desktop" href="" />
      <PageModalClose variant="desktop" />
    </div>
  )
}

export { ProjectDetailModalContent }
