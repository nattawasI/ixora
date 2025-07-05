'use client'

import { createContext, useContext, useRef, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { cn } from '@/libs/utils/cn'
import { PageModal, PageModalContent } from '@/components/ui/page-modal'
import {
  PageModalButtonsMobile,
  PageModalClose,
  PageModalNext,
  PageModalPrev,
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
  const [isLoading, setIsLoading] = useState(true)
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
          <div className="bg-gray-light-2 flex min-h-full flex-col">
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
      <PageModalButtonsMobile>
        <PageModalPrev variant="mobile" isInvisible={hiddenPrevButton} disabled={isLoading} onClick={handlePrev} />
        <PageModalClose variant="mobile" label="CLOSE" />
        <PageModalNext variant="mobile" isInvisible={hiddenNextButton} disabled={isLoading} onClick={handleNext} />
      </PageModalButtonsMobile>
      <PageModalPrev variant="desktop" isInvisible={hiddenPrevButton} disabled={isLoading} onClick={handlePrev} />
      <PageModalNext variant="desktop" isInvisible={hiddenNextButton} disabled={isLoading} onClick={handleNext} />
      <PageModalClose variant="desktop" />
    </>
  )
}

export { ArticleDetailModal, ArticleDetailModalActions }
