import { ArticleDetailModal } from '@/components/modules/article-detail-modal'
import { ProjectDetailModalActions } from '@/components/modules/project-detail-2/project-detail-modal-actions'

export default function ProjectDetailModalLayout({ children }: { children: React.ReactNode }) {
  return (
    <ArticleDetailModal contentSize="large">
      <div className="bg-gray-light-2">{children}</div>
      <ProjectDetailModalActions />
    </ArticleDetailModal>
  )
}
