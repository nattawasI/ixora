import Link from 'next/link'
import { format } from 'date-fns'
import { PressCard } from '@/components/modules/press/press-card'
import { ExploreMoreCollapsible } from '@/components/modules/article-detail/explore-more-collapsible'
import { cn } from '@/libs/utils/cn'
import { getNewsDetailExploreMore } from '@/libs/directus/service/news-detail'

type PressExploreMoreProps = {
  isInModal?: boolean
  slug: string
}

const PressExploreMore = async ({ isInModal, slug }: PressExploreMoreProps) => {
  const data = await getNewsDetailExploreMore({ slug })

  return (
    <ExploreMoreCollapsible>
      <div className={cn('space-y-4 max-lg:pt-4 lg:space-y-5', isInModal ? 'lg:pb-12.5' : '')}>
        {data.map((item, index) => (
          <Link href={`/press-and-news/${item.slug}`} className="block" key={index}>
            <PressCard
              image={{
                src: `${process.env.DIRECTUS_URL}/assets/${item.cover}`,
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
  )
}

export { PressExploreMore }
