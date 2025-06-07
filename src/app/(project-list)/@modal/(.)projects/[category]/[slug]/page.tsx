import { DetailModal } from '@/components/modules/common/detail-modal'
import { ProjectDetailContent } from '@/components/modules/project-detail/project-detail-content'

export default function ProjectDetailModal() {
  return (
    <DetailModal
      contentSize="large"
      noDescription
      prevHref="/projects/residential/1"
      nextHref="/projects/residential/3"
    >
      <ProjectDetailContent isInModal />
    </DetailModal>
  )
}
