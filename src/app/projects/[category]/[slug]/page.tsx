import { draftMode } from 'next/headers'
import { ProjectDetailContent } from '@/components/modules/project-detail/project-detail-content'
import { getProjectDetail } from '@/libs/directus/service/project-detail'

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
