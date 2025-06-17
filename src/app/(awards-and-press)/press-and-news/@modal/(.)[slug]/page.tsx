import { PressDetailModal } from '@/components/modules/press-detail/press-detail-modal'
import { PressDetailModalContent } from '@/components/modules/press-detail/press-detail-modal-content'

export default async function PressAndNewsDetailIntercepting() {
  return (
    <PressDetailModal>
      <PressDetailModalContent />
    </PressDetailModal>
  )
}
