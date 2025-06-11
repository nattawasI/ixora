import { PressDetailContent } from '@/components/modules/press-detail/press-detail-content'
import { PageModalButtonsMobile, PageModalPrev, PageModalNext, PageModalClose } from '@/components/ui/page-modal'
// import { PressDetailModalContentLoading } from './loading'

const PressDetailModalContent = () => {
  return (
    <div className="bg-gray-light-2">
      {/* <PressDetailModalContentLoading /> */}
      <PressDetailContent isInModal />
      <PageModalButtonsMobile>
        <PageModalPrev variant="mobile" />
        <PageModalClose variant="mobile" label="CLOSE" />
        <PageModalNext variant="mobile" />
      </PageModalButtonsMobile>
      <PageModalPrev variant="desktop" />
      <PageModalNext variant="desktop" />
      <PageModalClose variant="desktop" />
    </div>
  )
}

export { PressDetailModalContent }
