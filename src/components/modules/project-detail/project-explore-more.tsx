'use client'

import { cn } from '@/libs/utils/cn'
import { useRouter } from 'next/navigation'

import { ExploreMoreCollapsible } from '@/components/modules/article-detail/explore-more-collapsible'
import { ProjectCard } from '@/components/modules/projects/project-card'

import type { ProjectResponse } from '@/libs/directus/type'

type ProjectExploreMoreProps = {
  isInModal?: boolean
  data: ProjectResponse[]
}

const ProjectExploreMore = ({ isInModal, data }: ProjectExploreMoreProps) => {
  const router = useRouter()

  return (
    <>
      {data.length > 0 ? (
        <section className={cn('max-lg:px-4.75 max-lg:pt-4', isInModal ? 'lg:px-12.5' : '')}>
          <ExploreMoreCollapsible>
            <div className={cn('grid gap-2.5 max-lg:pt-4 md:grid-cols-3', isInModal ? 'lg:pb-10' : 'md:pb-7.5')}>
              {data.map((item, index) => {
                const href = `/projects/${item.category.slug}/${item.slug}`
                return (
                  <a
                    key={index}
                    href={href}
                    className="block"
                    onClick={(e) => {
                      if (isInModal) {
                        e.preventDefault()
                        router.replace(href, { scroll: false })
                      }
                    }}
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
                  </a>
                )
              })}
            </div>
          </ExploreMoreCollapsible>
        </section>
      ) : null}
    </>
  )
}

export { ProjectExploreMore }
