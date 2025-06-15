import { PressDetailContent } from '@/components/modules/press-detail/press-detail-content'
import { getNewsDetail } from '@/libs/directus/service/news-detail'
import { getNewsDetailExploreMore } from '@/libs/directus/service/news-detail'

export default async function PressAndNewsDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const [detailData, exploreMoreData] = await Promise.all([getNewsDetail({ slug }), getNewsDetailExploreMore({ slug })])

  return (
    <div className="article-detail-container-small">
      <PressDetailContent data={detailData} exploreMoreData={exploreMoreData} />
    </div>
  )
}
