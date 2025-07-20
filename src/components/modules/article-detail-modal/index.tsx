'use client'

import { createContext, useContext, useRef, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { PageModal, PageModalContent } from '@/components/ui/page-modal'
import {
  PageModalClose,
  PageModalChevron,
  PageModalFooterButtons,
  PageModalFooterChevron,
  PageModalFooterClose,
  type PageModalContentProps,
} from '@/components/ui/page-modal'

// Create context
type ArticleDetailContextType = {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const ArticleDetailContext = createContext<ArticleDetailContextType | undefined>(undefined)

export const useArticleDetail = () => {
  const context = useContext(ArticleDetailContext)
  if (context === undefined) {
    throw new Error('useArticleDetail must be used within an ArticleDetailProvider')
  }
  return context
}

const ArticleDetailModal = ({
  content,
  actions,
  contentSize,
}: { content: React.ReactNode; actions: React.ReactNode } & Pick<PageModalContentProps, 'contentSize'>) => {
  const router = useRouter()
  const pathname = usePathname()

  const [open, setOpen] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
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
        <ArticleDetailContext.Provider value={{ isLoading, setIsLoading }}>
          <PageModalClose aria-label="CLOSE" />
          <div className="flex min-h-full flex-col bg-white">
            <div className="flex-1">{content}</div>
            <div className="shrink-0">{actions}</div>
          </div>
        </ArticleDetailContext.Provider>
      </PageModalContent>
    </PageModal>
  )
}

const ArticleDetailModalActions = ({
  hiddenPrevButton,
  hiddenNextButton,
  handlePrev,
  handleNext,
}: {
  hiddenPrevButton: boolean
  hiddenNextButton: boolean
  handlePrev: () => void
  handleNext: () => void
}) => {
  const { isLoading } = useArticleDetail()
  return (
    <>
      <PageModalFooterButtons>
        <PageModalFooterChevron
          direction="prev"
          isInvisible={hiddenPrevButton}
          disabled={isLoading}
          onClick={handlePrev}
        />
        <PageModalFooterClose label="CLOSE" />
        <PageModalFooterChevron
          direction="next"
          isInvisible={hiddenNextButton}
          disabled={isLoading}
          onClick={handleNext}
        />
      </PageModalFooterButtons>
      <PageModalChevron direction="prev" isInvisible={hiddenPrevButton} disabled={isLoading} onClick={handlePrev} />
      <PageModalChevron direction="next" isInvisible={hiddenNextButton} disabled={isLoading} onClick={handleNext} />
    </>
  )
}

export { ArticleDetailModal, ArticleDetailModalActions }
