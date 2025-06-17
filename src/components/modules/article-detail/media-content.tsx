import { Fragment } from 'react'
import parse from 'html-react-parser'
import { SingleImage } from '@/components/modules/article-detail/single-image'
import { ColumnImages } from '@/components/modules/article-detail/column-images'
import { VideoPlayer } from '@/components/modules/article-detail/video-player'
import type { ProjectDetailResponse, NewsDetailResponse } from '@/libs/directus/type'

const MediaContent = ({
  type,
  data,
}: {
  type: 'project' | 'press-and-news'
  data: NewsDetailResponse | ProjectDetailResponse
}) => {
  console.log(data)

  return (
    <div className="detail-media">
      {data.gallery.map((item, index) => {
        const isPriority = index <= 2

        if (item.type === 'landscape') {
          return (
            <SingleImage
              key={`gallery-${index}`}
              src={item.images[0].src}
              alt={data.title}
              sizes={type === 'project' ? '100vw, (min-width: 1024px) 1140px' : '100vw, (min-width: 1024px) 845px'}
              priority={isPriority}
            />
          )
        } else {
          return (
            <ColumnImages
              key={`gallery-${index}`}
              images={item.images.map((img) => ({
                src: img.src,
                alt: data.title,
                sizes: type === 'project' ? '50vw, (min-width: 1024px) 565px' : '50vw, (min-width: 1024px) 418px',
                priority: isPriority,
              }))}
            />
          )
        }
      })}
      {data.video.map(({ item }, index) => {
        if (item.embed_code) {
          return <div key={`video-${index}`}>{parse(item.embed_code)}</div>
        } else {
          return <Fragment key={`video-${index}`}>{item.video ? <VideoPlayer src={item.video.src} /> : null}</Fragment>
        }
      })}
    </div>
  )
}

export { MediaContent }
