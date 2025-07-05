import { ArticleDetailModal } from '@/components/modules/article-detail-modal'
import { ProjectDetailModalActions } from '@/components/modules/project-detail/project-detail-modal-actions'

export default function ProjectDetailModalLayout({ children }: { children: React.ReactNode }) {
  return <ArticleDetailModal contentSize="large" content={children} actions={<ProjectDetailModalActions />} />
}
