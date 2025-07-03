import { getNewsDetail, getNewsDetailExploreMore } from '@/libs/directus/service/news-detail'
import { notFound } from 'next/navigation'

import { PressDetailContent } from '@/components/modules/press-detail-2/press-detail-content'
import { PressExploreMore } from '@/components/modules/press-detail-2/press-explore-more'

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function PressAndNewsDetailIntercepting({ params }: PageProps) {
  const { slug } = await params

  const [data, exploreMoreData] = await Promise.all([
    getNewsDetail({ slug, isDraft: false }),
    getNewsDetailExploreMore({ slug }),
  ])

  if (!data) notFound()

  return (
    <PressDetailContent isInModal data={data} exploreMore={<PressExploreMore isInModal data={exploreMoreData} />} />
  )
}
