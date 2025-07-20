import { cn } from '@/libs/utils/cn'

import { ExploreMoreLink } from '@/components/modules/article-detail/explore-more-link'
import { ProjectCard } from '@/components/modules/projects/project-card'

import type { ProjectResponse } from '@/libs/directus/type'

type ProjectExploreMoreProps = {
  isInModal?: boolean
  data: ProjectResponse[]
}

const ProjectExploreMore = ({ isInModal, data }: ProjectExploreMoreProps) => {
  return (
    <>
      {data.length > 0 ? (
        <div className={cn('bg-gray-light-2 max-lg:px-4.75 max-lg:pt-4', isInModal ? 'lg:px-12.5' : '')}>
          <h2 className="flex h-[3.75rem] w-full items-center justify-center ring-offset-0 lg:h-[5.625rem]">
            <span className="typo-title-3 font-semibold">EXPLORE MORE</span>
          </h2>
          <div className={cn('grid gap-2.5 max-lg:pt-4 md:grid-cols-3', isInModal ? 'lg:pb-10' : 'md:pb-7.5')}>
            {data.map((item, index) => {
              return (
                <ExploreMoreLink
                  key={index}
                  href={`/projects/${item.category.slug}/${item.slug}`}
                  isInModal={isInModal}
                >
                  <ProjectCard
                    image={{
                      src: item.cover.src,
                      alt: item.title,
                      sizes: '100vw, (min-width: 768px) 33vw',
                    }}
                    title={{
                      tag: 'h3',
                      text: item.title,
                    }}
                    location={item.location}
                  />
                </ExploreMoreLink>
              )
            })}
          </div>
        </div>
      ) : null}
    </>
  )
}

export { ProjectExploreMore }
