'use client'

import Link from 'next/link'
import { format } from 'date-fns'
import { PressCard } from '@/components/modules/press/press-card'
import { ExploreMoreCollapsible } from '@/components/modules/article-detail/explore-more-collapsible'
import { cn } from '@/libs/utils/cn'
import useSWR from 'swr'
import type { NewsResponse } from '@/libs/directus/type'

const PressExploreMore = ({ isInModal, slug }: { isInModal?: boolean; slug: string }) => {
  const { data, error } = useSWR<NewsResponse[]>(`/api/news-detail-explore-more?slug=${slug}`, (url: string) =>
    fetch(url).then((res) => res.json()),
  )

  if (error) return <p className="text-gray text-center">failed to load</p>
  if (!data) return null

  return (
    <>
      {data.length > 0 ? (
        <section className={cn('max-lg:px-4 max-lg:pt-4', isInModal ? 'lg:px-12.5' : '')}>
          <ExploreMoreCollapsible>
            <div className={cn('space-y-4 max-lg:pt-4 lg:space-y-5', isInModal ? 'lg:pb-12.5' : '')}>
              {data.map((item, index) => (
                <Link href={`/press-and-news/${item.slug}`} className="block" key={index}>
                  <PressCard
                    image={{
                      src: item.cover,
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
                  />
                </Link>
              ))}
            </div>
          </ExploreMoreCollapsible>
        </section>
      ) : null}
    </>
  )
}

export { PressExploreMore }
