import { ProjectDetailContentLoading } from '@/components/modules/project-detail/project-detail-content/loading'

export default function Loading() {
  return (
    <div className="article-detail-container-large">
      <div className="bg-white p-4 lg:p-12.5">
        <ProjectDetailContentLoading />
      </div>
    </div>
  )
}
