import { ArticleDetailModal } from '@/components/modules/article-detail-modal'
import { PressDetailModalActions } from '@/components/modules/press-detail/press-detail-modal-actions'

export default function PressAndNewsDetailModalLayout({ children }: { children: React.ReactNode }) {
  return <ArticleDetailModal contentSize="small" content={children} actions={<PressDetailModalActions />} />
}
