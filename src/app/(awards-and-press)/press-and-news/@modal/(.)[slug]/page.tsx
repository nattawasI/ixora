import { ArticleDetailModal } from '@/components/modules/article-detail-modal'
import { PressDetailModalContent } from '@/components/modules/press-detail/press-detail-modal-content'

export default async function PressAndNewsDetailIntercepting({
  params,
}: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params

  return (
    <ArticleDetailModal>
      <PressDetailModalContent initSlug={slug} />
    </ArticleDetailModal>
  )
}
