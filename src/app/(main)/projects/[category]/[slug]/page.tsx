import { draftMode } from 'next/headers'
import { ProjectDetailContent } from '@/components/modules/project-detail/project-detail-content'
import { ProjectExploreMore } from '@/components/modules/project-detail/project-explore-more'
import { getProjectDetail } from '@/libs/directus/service/project-detail'
import { directus } from '@/libs/directus'
import { readItems } from '@directus/sdk'
import { ProjectResponse } from '@/libs/directus/type'
import { getMetadata } from '@/libs/utils/metadata'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const data = await directus.request<ProjectResponse[]>(
    readItems('projects', {
      fields: ['*', 'category.*'],
      limit: -1,
    }),
  )

  return data.map((item) => ({
    category: item.category.slug,
    slug: item.slug,
  }))
}

type PageProps = { params: Promise<{ category: string; slug: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params

  const data = await getProjectDetail({ slug, category, isDraft: false })

  if (!data) return {}

  return getMetadata({
    pathname: `/projects/${category}/${slug}/${data.slug}`,
    data: {
      title: data.title,
      description: data.content_lead,
      ogImage: data.cover,
    },
  })
}

export default async function ProjectDetail({ params }: PageProps) {
  const { category, slug } = await params
  const { isEnabled } = await draftMode()

  const data = await getProjectDetail({ slug, category, isDraft: isEnabled })

  if (!data) notFound()

  return (
    <div className="article-detail-container-large">
      {/* {isEnabled ? (
        <h2 className="typo-title-1 mb-2 text-center font-semibold text-red-500 uppercase">draft mode</h2>
      ) : null} */}
      <ProjectDetailContent data={data} exploreMore={<ProjectExploreMore category={category} slug={slug} />} />
    </div>
  )
}
