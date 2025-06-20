import { ProjectDetailContent } from '@/components/modules/project-detail/project-detail-content'
import { projectDetailQuery } from '@/libs/directus/service/project-detail'

export default async function ProjectDetail({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params

  /** fetch here */
  const data = await projectDetailQuery({ slug, category })

  console.log(data)

  return (
    <div className="article-detail-container-large">
      <ProjectDetailContent />
    </div>
  )
}
