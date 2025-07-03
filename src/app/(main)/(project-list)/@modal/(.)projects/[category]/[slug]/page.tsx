import { getProjectDetail, getProjectDetailExploreMore } from '@/libs/directus/service/project-detail'
import { notFound } from 'next/navigation'

import { ProjectDetailContent } from '@/components/modules/project-detail-2/project-detail-content'
import { ProjectExploreMore } from '@/components/modules/project-detail-2/project-explore-more'

type PageProps = {
  params: Promise<{ category: string; slug: string }>
}

export default async function ProjectDetailIntercepting({ params }: PageProps) {
  const { category, slug } = await params

  const [data, exploreMoreData] = await Promise.all([
    getProjectDetail({ slug, category, isDraft: false }),
    getProjectDetailExploreMore({ slug, category }),
  ])

  if (!data) notFound()

  return (
    <ProjectDetailContent isInModal data={data} exploreMore={<ProjectExploreMore isInModal data={exploreMoreData} />} />
  )
}
