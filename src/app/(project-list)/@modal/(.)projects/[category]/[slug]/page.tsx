import { ProjectDetailModal } from '@/components/modules/project-detail/project-detail-modal'
import { ProjectDetailModalContent } from '@/components/modules/project-detail/project-detail-modal-content'

export default async function ProjectDetailIntercepting({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  const { category, slug } = await params

  console.log(category, slug)

  return (
    <ProjectDetailModal>
      <ProjectDetailModalContent />
    </ProjectDetailModal>
  )
}
