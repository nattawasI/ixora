import { format } from 'date-fns'
import { getNews } from '@/libs/directus/service/news'
import Link from 'next/link'
import { CardPress, CardPressLoading } from '@/components/ui/card-press'
import { UpdatePressListContext } from '@/components/modules/press/update-press-list-context'
import { EmptyData } from '@/components/ui/empty-data'

const PressList = async () => {
  const data = await getNews()

  if (data.length === 0) {
    return <EmptyData />
  }

  return (
    <>
      <UpdatePressListContext data={data} />
      <div className="list-awards-press">
        {data.map((item, index) => (
          <Link href={`/press-and-news/${item.slug}`} className="block" key={index} scroll={false} prefetch={false}>
            <CardPress
              data-cursor-target
              className="cursor-none"
              image={{
                src: item.cover.src,
                alt: item.title,
                sizes: '100vw, (min-width: 1024px) 50vw',
                priority: index <= 2,
              }}
              date={format(new Date(item.published_date), 'MMMM, yyyy')}
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
    </>
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
