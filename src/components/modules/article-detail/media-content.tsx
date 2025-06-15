import { Fragment } from 'react'
import parse from 'html-react-parser'
import { SingleImage } from '@/components/modules/article-detail/single-image'
import { ColumnImages } from '@/components/modules/article-detail/column-images'
import { VideoPlayer } from '@/components/modules/article-detail/video-player'
import type { ProjectDetailResponse, NewsDetailResponse } from '@/libs/directus/type'

const MediaContent = ({ data }: { data: NewsDetailResponse | ProjectDetailResponse }) => {
  return (
    <div className="detail-media">
      {data.gallery.map((item, index) => {
        if (item.type === 'landscape') {
          return <SingleImage key={`gallery-${index}`} src={item.images[0].src} alt={data.title} />
        } else {
          return (
            <ColumnImages
              key={`gallery-${index}`}
              images={item.images.map((img) => ({
                src: img.src,
                alt: data.title,
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
