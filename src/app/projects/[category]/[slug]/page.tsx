import { draftMode } from 'next/headers'
import { ProjectDetailContent } from '@/components/modules/project-detail/project-detail-content'
import { getProjectDetail } from '@/libs/directus/service/project-detail'
import { directus } from '@/libs/directus'
import { readItems } from '@directus/sdk'
import { ProjectResponse } from '@/libs/directus/type'

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

export default async function ProjectDetail({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params
  const { isEnabled } = await draftMode()

  /** fetch here */
  const data = await getProjectDetail({ slug, category, isDraft: isEnabled })

  return (
    <div className="article-detail-container-large">
      {isEnabled ? (
        <h2 className="typo-title-1 mb-2 text-center font-bold text-red-500 uppercase">draft mode</h2>
      ) : null}
      <ProjectDetailContent data={data} />
    </div>
  )
}
