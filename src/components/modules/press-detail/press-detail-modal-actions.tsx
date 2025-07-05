'use client'

/** libs */
import { useRouter, useParams } from 'next/navigation'

/** context */
import { usePressList } from '@/components/modules/press/press-list-context'

/** components */
import { ArticleDetailModalActions } from '@/components/modules/article-detail-modal'

const PressDetailModalActions = () => {
  const { pressList } = usePressList()
  const pressListLength = pressList.length

  const router = useRouter()
  const { slug } = useParams()

  const currentIndex = pressList.findIndex((item) => item.slug === slug)

  const handleRouterReplace = (idx: number) => {
    const newsDetail = pressList[idx]
    router.replace(`/press-and-news/${newsDetail.slug}`, { scroll: false })
  }

  const handlePrev = () => {
    handleRouterReplace(currentIndex - 1)
  }

  const handleNext = () => {
    handleRouterReplace(currentIndex + 1)
  }

  const hiddenPrevButton = currentIndex === 0
  const hiddenNextButton = currentIndex === pressListLength - 1

  return (
    <ArticleDetailModalActions
      hiddenPrevButton={hiddenPrevButton}
      hiddenNextButton={hiddenNextButton}
      handlePrev={handlePrev}
      handleNext={handleNext}
    />
  )
}

export { PressDetailModalActions }
