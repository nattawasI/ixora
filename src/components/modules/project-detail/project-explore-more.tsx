import { cn } from '@/libs/utils/cn'
import useSWR from 'swr'

import {
  ExploreMoreCollapsible,
  type ExploreMoreCollapsibleProps,
} from '@/components/modules/article-detail/explore-more-collapsible'
import { ProjectCard } from '@/components/modules/projects/project-card'

import type { ProjectResponse } from '@/libs/directus/type'

type ProjectExploreMoreProps = {
  isInModal?: boolean
  slug: string
  category: string
  onClickLink?: (slug: string) => void
} & Pick<ExploreMoreCollapsibleProps, 'open' | 'onOpenChange'>

const ProjectExploreMore = ({ isInModal, slug, category, onClickLink, ...props }: ProjectExploreMoreProps) => {
  const { data, error } = useSWR<ProjectResponse[]>(
    `/api/projects-explore-more?category=${category}&slug=${slug}`,
    (url: string) => fetch(url).then((res) => res.json()),
  )

  if (error) {
    console.error(error)
    return null
  }
  if (!data) return null

  return (
    <section className={cn('max-lg:px-4 max-lg:pt-4', isInModal ? 'lg:px-12.5' : '')}>
      <ExploreMoreCollapsible {...props}>
        <div className={cn('grid gap-2.5 max-lg:pt-4 md:grid-cols-3', isInModal ? 'lg:pb-10' : 'md:pb-7.5')}>
          {data.map((item, index) => (
            <a
              href={`/projects/${item.category.slug}/${item.slug}`}
              className="block"
              key={index}
              onClick={(e) => {
                if (onClickLink) {
                  e.preventDefault()
                  onClickLink(item.slug)
                }
              }}
            >
              <ProjectCard
                image={{
                  src: item.cover,
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
          ))}
        </div>
      </ExploreMoreCollapsible>
    </section>
  )
}

export { ProjectExploreMore }
