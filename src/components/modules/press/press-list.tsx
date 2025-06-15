import Link from 'next/link'
import { CardPressLoading } from '@/components/ui/card-press'
import { PressCard } from '@/components/modules/press/press-card'
import { CursorProvider } from '@/libs/context/cursor'
import type { NewsResponse } from '@/libs/directus/type'

const PressList = ({ data }: { data: NewsResponse[] }) => {
  return (
    <CursorProvider>
      <div className="list-awards-press">
        {data.map((item, index) => (
          <Link href={`/press-and-news/${item.slug}`} className="block" key={index}>
            <PressCard
              image={{
                src: item.cover,
                alt: item.title,
                sizes: '100vw, (min-width: 1024px) 50vw',
              }}
              date={item.published_date}
              title={{
                tag: 'h2',
                text: item.title,
              }}
              description={item.description}
              isImageRight={index % 2 === 0}
            />
          </Link>
        ))}
      </div>
    </CursorProvider>
  )
}

const PressListLoading = () => {
  return (
    <div className="list-awards-press">
      {Array.from({ length: 2 }).map((_, index) => (
        <CardPressLoading key={index} isImageRight={index % 2 === 0} />
      ))}
    </div>
  )
}

export { PressList, PressListLoading }
