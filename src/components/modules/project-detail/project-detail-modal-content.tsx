'use client'

/** libs */
import { useState } from 'react'
import { useProjectList } from '@/components/modules/projects/project-list-context'
import { historyReplaceState } from '@/libs/utils/history'

/** components */
import { DialogTitle } from '@radix-ui/react-dialog'
import { ArticleDetailModalActions } from '@/components/modules/article-detail-modal'
import { UpdateMetadataTitleClient } from '@/components/modules/common/update-metadata-title-client'
import { ProjectDetailContent } from '@/components/modules/project-detail/project-detail-content'
import { ProjectExploreMore } from '@/components/modules/project-detail/project-explore-more'

const ProjectDetailModalContent = ({ initSlug }: { initSlug: string }) => {
  const { projectList } = useProjectList()

  const initIndex = projectList.findIndex((item) => item.slug === initSlug)

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(initIndex)

  const projectDetailData = projectList[index]

  if (!projectDetailData) {
    return (
      <div className="bg-gray-light-2">
        <DialogTitle>News Not Found</DialogTitle>
      </div>
    )
  }

  const handleChangeIndex = (index: number) => {
    setIndex(index)
    historyReplaceState(`/projects/${projectDetailData.category.slug}/${projectDetailData.slug}`)
    setOpen(false)
  }

  const handlePrev = () => {
    handleChangeIndex(index - 1)
  }

  const handleNext = () => {
    handleChangeIndex(index + 1)
  }

  const handleExploreMoreClick = (slug: string) => {
    handleChangeIndex(projectList.findIndex((item) => item.slug === slug))
  }

  const showPrevButton = index > 0
  const showNextButton = index < projectList.length - 1

  return (
    <>
      <UpdateMetadataTitleClient title={projectDetailData.title} />
      <div className="bg-gray-light-2">
        <ProjectDetailContent
          isInModal
          data={projectDetailData}
          exploreMore={
            <ProjectExploreMore
              isInModal
              open={open}
              onOpenChange={setOpen}
              category={projectDetailData.category.slug}
              slug={projectDetailData.slug}
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

export { ProjectDetailModalContent }
