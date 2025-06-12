import { PressDetailContent } from '@/components/modules/press-detail/press-detail-content'
import { PageModalButtonsMobile, PageModalPrev, PageModalNext, PageModalClose } from '@/components/ui/page-modal'
import { historyReplaceState } from '@/libs/utils/history'

const PressDetailModalContent = () => {
  const handlePrev = () => {
    historyReplaceState('/press/1')
  }

  const handleNext = () => {
    historyReplaceState('/press/3')
  }

  return (
    <div className="bg-gray-light-2">
      <PressDetailContent isInModal />
      <PageModalButtonsMobile>
        <PageModalPrev variant="mobile" onClick={handlePrev} />
        <PageModalClose variant="mobile" label="CLOSE" />
        <PageModalNext variant="mobile" onClick={handleNext} />
      </PageModalButtonsMobile>
      <PageModalPrev variant="desktop" onClick={handlePrev} />
      <PageModalNext variant="desktop" onClick={handleNext} />
      <PageModalClose variant="desktop" />
    </div>
  )
}

export { PressDetailModalContent }
