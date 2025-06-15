import { PressDetailModal } from '@/components/modules/press-detail/press-detail-modal'
import { PressDetailModalContent } from '@/components/modules/press-detail/press-detail-modal-content'
import { getNewsDetailExploreMore } from '@/libs/directus/service/news-detail'

export default async function PressAndNewsDetailIntercepting({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const exploreMoreData = await getNewsDetailExploreMore({ slug })

  return (
    <PressDetailModal>
      <PressDetailModalContent slug={slug} exploreMoreData={exploreMoreData} />
    </PressDetailModal>
  )
}
