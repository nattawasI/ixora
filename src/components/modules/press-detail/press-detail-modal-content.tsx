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

  const findIndexInList = (slug: string) => {
    return pressList.findIndex((item) => item.slug === slug)
  }

  const initIndex = findIndexInList(initSlug)

  const [index, setIndex] = useState(initIndex)

  if (index < 0) {
    return (
      <div className="bg-gray-light-2">
        <DialogTitle>News Not Found</DialogTitle>
      </div>
    )
  }

  const handleChangeIndex = (idx: number) => {
    setIndex(idx)
    const thisPressDetail = pressList[idx]
    historyReplaceState(`/press-and-news/${thisPressDetail.slug}`)
  }

  const handlePrev = () => {
    handleChangeIndex(index - 1)
  }

  const handleNext = () => {
    handleChangeIndex(index + 1)
  }

  const handleExploreMoreClick = (slug: string) => {
    const thisIndex = findIndexInList(slug)

    if (thisIndex < 0) return

    handleChangeIndex(thisIndex)
  }

  const pressDetailData = pressList[index]
  const showPrevButton = index > 0
  const showNextButton = index < pressList.length - 1

  return (
    <>
      <UpdateMetadataTitleClient title={pressDetailData.title} />
      <div className="bg-gray-light-2">
        <PressDetailContent
          isInModal
          data={pressDetailData}
          exploreMore={<PressExploreMore isInModal slug={pressDetailData.slug} onClickLink={handleExploreMoreClick} />}
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
