import { PageDetailModal } from '@/components/layout/page-detail-modal'
import { ProjectDetailContent } from '@/components/modules/project-detail/project-detail-content'

export default function ProjectDetailModal() {
  return (
    <PageDetailModal contentSize="large" noDescription prevHref={null} nextHref={'/projects/residential/3'}>
      <ProjectDetailContent isInModal />
    </PageDetailModal>
  )
}
