import { ArticleDetailModal } from '@/components/modules/article-detail-modal'
import { ProjectDetailModalContent } from '@/components/modules/project-detail/project-detail-modal-content'

export default async function ProjectDetailIntercepting({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <ArticleDetailModal>
      <ProjectDetailModalContent initSlug={slug} />
    </ArticleDetailModal>
  )
}
