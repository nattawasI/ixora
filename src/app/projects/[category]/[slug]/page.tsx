import { ProjectDetailContent } from '@/components/modules/project-detail/project-detail-content'

export default async function ProjectDetail({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params

  console.log(category, slug)

  /** fetch here */
  return (
    <div className="article-detail-container-large">
      <ProjectDetailContent />
    </div>
  )
}
