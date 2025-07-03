import { getMetadata } from '@/libs/utils/metadata'
import { directus } from '@/libs/directus'
import { getNewsDetail, getNewsDetailExploreMore } from '@/libs/directus/service/news-detail'
import { draftMode } from 'next/headers'
import { NewsResponse } from '@/libs/directus/type'
import { readItems } from '@directus/sdk'
import { PressDetailContent } from '@/components/modules/press-detail/press-detail-content'
import { PressExploreMore } from '@/components/modules/press-detail/press-explore-more'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const data = await directus.request<NewsResponse[]>(
    readItems('news', {
      fields: ['*'],
      limit: -1,
    }),
  )

  return data.map((item) => ({
    slug: item.slug,
  }))
}

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const data = await getNewsDetail({ slug, isDraft: false })

  if (!data) return {}

  return getMetadata({
    pathname: `/${data.slug}`,
    data: {
      title: data.title,
      description: data.description,
      ogImage: data.cover.src,
    },
  })
}

export default async function PressAndNewsDetail({ params }: PageProps) {
  const { slug } = await params
  const { isEnabled } = await draftMode()
  const [data, exploreMoreData] = await Promise.all([
    getNewsDetail({ slug, isDraft: isEnabled }),
    getNewsDetailExploreMore({ slug }),
  ])

  if (!data) notFound()

  return (
    <div className="article-detail-container-small">
      {/* {isEnabled ? (
        <h2 className="typo-title-1--rps mb-2 text-center font-semibold text-red-500 uppercase">draft mode</h2>
      ) : null} */}
      <PressDetailContent data={data} exploreMore={<PressExploreMore data={exploreMoreData} />} />
    </div>
  )
}
