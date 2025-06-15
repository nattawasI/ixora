import { PressDetailModal } from '@/components/modules/press-detail/press-detail-modal'
import { PressDetailModalContent } from '@/components/modules/press-detail/press-detail-modal-content'
import { getNewsDetail } from '@/libs/directus/service/news-detail'

export default async function PressAndNewsDetailIntercepting({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = await getNewsDetail({ slug, isDraft: false })

  return (
    <PressDetailModal>
      <PressDetailModalContent data={data} />
    </PressDetailModal>
  )
}
