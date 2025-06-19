import { ProjectDetailContent } from '@/components/modules/project-detail/project-detail-content'
// import { ArticleDetailModalActions } from '@/components/modules/article-detail-modal'
import { ProjectExploreMore } from '@/components/modules/project-detail/project-explore-more'

import type { ProjectDetailResponse } from '@/libs/directus/type'

const ProjectDetailModalContent = ({ data }: { data: ProjectDetailResponse }) => {
  return (
    <div className="bg-gray-light-2">
      <ProjectDetailContent
        isInModal
        data={data}
        exploreMore={<ProjectExploreMore isInModal slug={data.slug} category={data.category.slug} />}
      />
      {/* <ArticleDetailModalActions /> */}
    </div>
  )
}

export { ProjectDetailModalContent }
