import { PressDetailModal } from '@/components/modules/press-detail/press-detail-modal'
import { PressDetailModalContent } from '@/components/modules/press-detail/press-detail-modal-content'

export default async function PressAndNewsDetailIntercepting({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  console.log(slug)

  return (
    <PressDetailModal>
      <PressDetailModalContent />
    </PressDetailModal>
  )
}
