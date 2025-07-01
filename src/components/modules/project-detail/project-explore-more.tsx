'use client'

import { cn } from '@/libs/utils/cn'
import { useState } from 'react'
import useSWR from 'swr'

import { ExploreMoreCollapsible } from '@/components/modules/article-detail/explore-more-collapsible'
import { ProjectCard } from '@/components/modules/projects/project-card'

import type { ProjectResponse } from '@/libs/directus/type'

type ProjectExploreMoreProps = {
  isInModal?: boolean
  category: string
  slug: string
  onClickLink?: (slug: string) => void
}

const ProjectExploreMore = ({ isInModal, category, slug, onClickLink }: ProjectExploreMoreProps) => {
  const [open, setOpen] = useState(false)

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
    <>
      {data.length > 0 ? (
        <section className={cn('max-lg:px-4.75 max-lg:pt-4', isInModal ? 'lg:px-12.5' : '')}>
          <ExploreMoreCollapsible open={open} onOpenChange={setOpen}>
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
                      setOpen(false)
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
              ))}
            </div>
          </ExploreMoreCollapsible>
        </section>
      ) : null}
    </>
  )
}

export { ProjectExploreMore }
