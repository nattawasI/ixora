'use client'

/** libs */
import { useRouter, useParams } from 'next/navigation'

/** context */
import { useProjectList } from '@/components/modules/projects/project-list-context'

/** components */
import { ArticleDetailModalActions } from '@/components/modules/article-detail-modal'

const ProjectDetailModalActions = () => {
  const { projectList } = useProjectList()

  const projectListLength = projectList.length

  const router = useRouter()
  const { slug } = useParams()

  const currentIndex = projectList.findIndex((item) => item.slug === slug)

  const handleRouterReplace = (idx: number) => {
    const projectDetail = projectList[idx]
    router.replace(`/projects/${projectDetail.category.slug}/${projectDetail.slug}`, { scroll: false })
  }

  const handlePrev = () => {
    handleRouterReplace(currentIndex - 1)
  }

  const handleNext = () => {
    handleRouterReplace(currentIndex + 1)
  }

  const hiddenPrevButton = currentIndex === 0
  const hiddenNextButton = currentIndex === projectListLength - 1

  return (
    <ArticleDetailModalActions
      hiddenPrevButton={hiddenPrevButton}
      hiddenNextButton={hiddenNextButton}
      handlePrev={handlePrev}
      handleNext={handleNext}
    />
  )
}

export { ProjectDetailModalActions }
