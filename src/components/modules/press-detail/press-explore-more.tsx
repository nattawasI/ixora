'use client'

import { cn } from '@/libs/utils/cn'
import { useState } from 'react'
import useSWR from 'swr'
import { format } from 'date-fns'
import { PressCard } from '@/components/modules/press/press-card'
import { ExploreMoreCollapsible } from '@/components/modules/article-detail/explore-more-collapsible'

import type { NewsResponse } from '@/libs/directus/type'

type PressExploreMoreProps = {
  isInModal?: boolean
  slug: string
  onClickLink?: (slug: string) => void
}

const PressExploreMore = ({ isInModal, slug, onClickLink }: PressExploreMoreProps) => {
  const [open, setOpen] = useState(false)

  const { data, error } = useSWR<NewsResponse[]>(`/api/news-explore-more?slug=${slug}`, (url: string) =>
    fetch(url).then((res) => res.json()),
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
            <div className={cn('space-y-4 max-lg:pt-4 lg:space-y-5', isInModal ? 'lg:pb-12.5' : '')}>
              {data.map((item, index) => (
                <a
                  href={`/press-and-news/${item.slug}`}
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
                  <PressCard
                    image={{
                      src: item.cover.src,
                      alt: item.title,
                      sizes: '100vw, (min-width: 1024px) 50vw',
                    }}
                    date={format(new Date(item.published_date), 'MMMM, yyyy')}
                    title={{
                      tag: 'h3',
                      text: item.title,
                    }}
                    description={item.description}
                    isImageRight={index % 2 === 0}
                    isInModal
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

export { PressExploreMore }
