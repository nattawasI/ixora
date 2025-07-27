import { cn } from '@/libs/utils/cn'
import { format } from 'date-fns'

import { ExploreMoreHeading } from '@/components/modules/article-detail/explore-more-heading'
import { ExploreMoreLink } from '@/components/modules/article-detail/explore-more-link'
import { CardPress } from '@/components/ui/card-press'

import type { NewsResponse } from '@/libs/directus/type'

type PressExploreMoreProps = {
  isInModal?: boolean
  data: NewsResponse[]
}

const PressExploreMore = ({ isInModal, data }: PressExploreMoreProps) => {
  return (
    <>
      {data.length > 0 ? (
        <div className={cn('bg-gray-light-2 max-lg:px-4.75 max-lg:pt-4', isInModal ? 'lg:px-12.5' : '')}>
          <ExploreMoreHeading />
          <div className={cn('space-y-4 max-lg:pt-4 lg:space-y-5', isInModal ? 'lg:pb-12.5' : '')}>
            {data.map((item, index) => {
              return (
                <ExploreMoreLink key={index} href={`/press-and-news/${item.slug}`} isInModal={isInModal}>
                  <CardPress
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
                    isInModal={isInModal}
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

export { PressExploreMore }
