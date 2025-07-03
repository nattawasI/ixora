import { ArticleDetailModal } from '@/components/modules/article-detail-modal'
import { PressDetailModalActions } from '@/components/modules/press-detail-2/press-detail-modal-actions'

export default function PressAndNewsDetailModalLayout({ children }: { children: React.ReactNode }) {
  return (
    <ArticleDetailModal contentSize="small">
      <div className="bg-gray-light-2">{children}</div>
      <PressDetailModalActions />
    </ArticleDetailModal>
  )
}
