import { ProjectDetailModal } from '@/components/modules/project-detail/project-detail-modal'
import { ProjectDetailModalContent } from '@/components/modules/project-detail/project-detail-modal-content'
import { getProjectDetail } from '@/libs/directus/service/project-detail'

export default async function ProjectDetailIntercepting({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  const { category, slug } = await params

  const data = await getProjectDetail({ slug, category, isDraft: false })

  return (
    <ProjectDetailModal>
      <ProjectDetailModalContent data={data} />
    </ProjectDetailModal>
  )
}
