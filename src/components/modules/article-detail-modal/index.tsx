'use client'

import { useRouter } from 'next/navigation'
import { PageModal, PageModalContent } from '@/components/ui/page-modal'
import { PageModalButtonsMobile, PageModalClose, PageModalNext, PageModalPrev } from '@/components/ui/page-modal'

const ArticleDetailModal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  return (
    <PageModal
      defaultOpen
      onOpenChange={() => {
        router.back()
      }}
    >
      <PageModalContent aria-describedby={undefined} contentSize="small">
        {children}
      </PageModalContent>
    </PageModal>
  )
}

const ArticleDetailModalActions = ({
  showPrevButton,
  showNextButton,
  handlePrev,
  handleNext,
}: {
  showPrevButton: boolean
  showNextButton: boolean
  handlePrev: () => void
  handleNext: () => void
}) => {
  return (
    <>
      <PageModalButtonsMobile>
        {showPrevButton ? <PageModalPrev variant="mobile" onClick={handlePrev} /> : null}
        <PageModalClose variant="mobile" label="CLOSE" />
        {showNextButton ? <PageModalNext variant="mobile" onClick={handleNext} /> : null}
      </PageModalButtonsMobile>
      {showPrevButton ? <PageModalPrev variant="desktop" onClick={handlePrev} /> : null}
      {showNextButton ? <PageModalNext variant="desktop" onClick={handleNext} /> : null}
      <PageModalClose variant="desktop" />
    </>
  )
}

export { ArticleDetailModal, ArticleDetailModalActions }
