'use client'

/** libs */
import { useState, useEffect } from 'react'
import { usePressList } from '@/components/modules/press/press-list-context'
import { historyReplaceState } from '@/libs/utils/history'

/** components */
import { DialogTitle } from '@radix-ui/react-dialog'
import { PressDetailContent } from '@/components/modules/press-detail/press-detail-content'
import { PageModalButtonsMobile, PageModalClose, PageModalNext, PageModalPrev } from '@/components/ui/page-modal'
import { PressExploreMore } from '@/components/modules/press-detail/press-explore-more'

const PressDetailModalContent = ({ initSlug }: { initSlug: string }) => {
  const { pressList } = usePressList()

  const initIndex = pressList.findIndex((item) => item.slug === initSlug)

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(initIndex)

  const pressDetailData = pressList[index]

  useEffect(() => {
    if (!pressDetailData) return
    document.title = pressDetailData.title
  }, [pressDetailData])

  if (!pressDetailData) {
    return (
      <div className="bg-gray-light-2">
        <DialogTitle>News Not Found</DialogTitle>
      </div>
    )
  }

  const handleChangeIndex = (index: number) => {
    setIndex(index)
    historyReplaceState(`/press-and-news/${pressList[index].slug}`)
    setOpen(false)
  }

  const handlePrev = () => {
    handleChangeIndex(index - 1)
  }

  const handleNext = () => {
    handleChangeIndex(index + 1)
  }

  const handleExploreMoreClick = (slug: string) => {
    handleChangeIndex(pressList.findIndex((item) => item.slug === slug))
  }

  const showPrevButton = index > 0
  const showNextButton = index < pressList.length - 1

  return (
    <>
      <div className="bg-gray-light-2">
        <PressDetailContent
          isInModal
          data={pressDetailData}
          exploreMore={
            <PressExploreMore
              isInModal
              open={open}
              onOpenChange={setOpen}
              slug={pressDetailData.slug}
              onClickLink={handleExploreMoreClick}
            />
          }
        />
        <PageModalButtonsMobile>
          {showPrevButton ? <PageModalPrev variant="mobile" onClick={handlePrev} /> : null}
          <PageModalClose variant="mobile" label="CLOSE" />
          {showNextButton ? <PageModalNext variant="mobile" onClick={handleNext} /> : null}
        </PageModalButtonsMobile>
        {showPrevButton ? <PageModalPrev variant="desktop" onClick={handlePrev} /> : null}
        {showNextButton ? <PageModalNext variant="desktop" onClick={handleNext} /> : null}
        <PageModalClose variant="desktop" />
      </div>
    </>
  )
}

export { PressDetailModalContent }
