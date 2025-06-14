import { ProjectDetailContent } from '@/components/modules/project-detail/project-detail-content'
import type { ProjectDetailResponse } from '@/libs/directus/type'
import { ProjectDetailModalClient } from './client'

const ProjectDetailModalContent = ({ data }: { data: ProjectDetailResponse }) => {
  return (
    <div className="bg-gray-light-2">
      <ProjectDetailContent isInModal data={data} />
      <ProjectDetailModalClient />
    </div>
  )
}

export { ProjectDetailModalContent }
