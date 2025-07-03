'use client'

import { cn } from '@/libs/utils/cn'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'

import { PressCard } from '@/components/modules/press/press-card'
import { ExploreMoreCollapsible } from '@/components/modules/article-detail/explore-more-collapsible'

import type { NewsResponse } from '@/libs/directus/type'

type PressExploreMoreProps = {
  isInModal?: boolean
  data: NewsResponse[]
}

const PressExploreMore = ({ isInModal, data }: PressExploreMoreProps) => {
  const router = useRouter()

  return (
    <>
      {data.length > 0 ? (
        <section className={cn('max-lg:px-4.75 max-lg:pt-4', isInModal ? 'lg:px-12.5' : '')}>
          <ExploreMoreCollapsible>
            <div className={cn('space-y-4 max-lg:pt-4 lg:space-y-5', isInModal ? 'lg:pb-12.5' : '')}>
              {data.map((item, index) => {
                const href = `/press-and-news/${item.slug}`
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
                )
              })}
            </div>
          </ExploreMoreCollapsible>
        </section>
      ) : null}
    </>
  )
}

export { PressExploreMore }
