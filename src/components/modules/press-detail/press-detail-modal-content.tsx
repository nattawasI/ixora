'use client'

/** libs */
import { useState } from 'react'
import { usePressList } from '@/components/modules/press/press-list-context'
import { historyReplaceState } from '@/libs/utils/history'

/** components */
import { DialogTitle } from '@radix-ui/react-dialog'
import { ArticleDetailModalActions } from '@/components/modules/article-detail-modal'
import { UpdateMetadataTitleClient } from '@/components/modules/common/update-metadata-title-client'
import { PressDetailContent } from '@/components/modules/press-detail/press-detail-content'
import { PressExploreMore } from '@/components/modules/press-detail/press-explore-more'

const PressDetailModalContent = ({ initSlug }: { initSlug: string }) => {
  const { pressList } = usePressList()

  const initIndex = pressList.findIndex((item) => item.slug === initSlug)

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(initIndex)

  const pressDetailData = pressList[index]

  if (!pressDetailData) {
    return (
      <div className="bg-gray-light-2">
        <DialogTitle>News Not Found</DialogTitle>
      </div>
    )
  }

  const handleChangeIndex = (index: number) => {
    setIndex(index)
    historyReplaceState(`/press-and-news/${pressDetailData.slug}`)
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
      <UpdateMetadataTitleClient title={pressDetailData.title} />
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
        <ArticleDetailModalActions
          showPrevButton={showPrevButton}
          showNextButton={showNextButton}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>
    </>
  )
}

export { PressDetailModalContent }
