import { ProjectDetailContent } from '@/components/modules/project-detail/project-detail-content'
import { PageModalButtonsMobile, PageModalPrev, PageModalNext, PageModalClose } from '@/components/ui/page-modal'
// import { ProjectDetailModalContentLoading } from './loading'
import type { ProjectResponse } from '@/libs/directus/type'

const ProjectDetailModalContent = ({ data }: { data: ProjectResponse }) => {
  // const handlePrev = () => {
  //   historyReplaceState('/projects/residential/1')
  // }

  // const handleNext = () => {
  //   historyReplaceState('/projects/residential/3')
  // }

  return (
    <div className="bg-gray-light-2">
      <ProjectDetailContent isInModal {...data} />
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
