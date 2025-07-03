'use client'

import { useRef, useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { PageModal, PageModalContent } from '@/components/ui/page-modal'
import {
  PageModalButtonsMobile,
  PageModalClose,
  PageModalNext,
  PageModalPrev,
  type PageModalContentProps,
} from '@/components/ui/page-modal'

const ArticleDetailModal = ({
  children,
  contentSize,
}: { children: React.ReactNode } & Pick<PageModalContentProps, 'contentSize'>) => {
  const router = useRouter()
  const pathname = usePathname()

  const [open, setOpen] = useState(true)

  const overlayRef = useRef<HTMLDivElement | null>(null)

  /** scroll to top when pathname changes */
  useEffect(() => {
    const overlay = overlayRef.current
    if (overlay) {
      overlay.scrollTo({ top: 0 })
    }
  }, [pathname])

  return (
    <PageModal open={open} onOpenChange={setOpen}>
      <PageModalContent
        overlayRef={overlayRef}
        aria-describedby={undefined}
        contentSize={contentSize}
        onAnimationEnd={() => {
          if (!open) {
            router.back()
          }
        }}
      >
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
