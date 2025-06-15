import parse from 'html-react-parser'
import { DialogTitle } from '@radix-ui/react-dialog'
import { Separator } from '@/components/ui/separator'
// import { SingleImage } from '@/components/modules/article-detail/single-image'
// import { ColumnImages } from '@/components/modules/article-detail/column-images'
// import { VideoPlayer } from '@/components/modules/article-detail/video-player'
import { SnsShareFooter } from '@/components/modules/article-detail/sns-share-footer'
import { PressExploreMore } from '@/components/modules/press-detail/press-explore-more'
import { ButtonArrowLink } from '@/components/ui/button-arrow'
import { SnsShareProvider } from '@/components/modules/article-detail/sns-share-context'
import { SnsShareSticky } from '@/components/modules/article-detail/sns-share-sticky'
import { format } from 'date-fns'
import type { NewsDetailResponse, NewsResponse } from '@/libs/directus/type'

type PressDetailContentProps = {
  isInModal?: boolean
  data: NewsDetailResponse
  exploreMoreData: NewsResponse[]
}

const PressDetailContent = ({ isInModal, data, exploreMoreData }: PressDetailContentProps) => {
  return (
    <SnsShareProvider>
      <SnsShareSticky
        isInModal={isInModal}
        title={data.title}
        coverImage={data.cover}
        className="social-share-sticky"
      />
      <div className="bg-white px-4 pt-4 lg:px-12.5 lg:pt-12.5">
        <article>
          <div className="mb-2.5 lg:mb-5">
            <p className="typo-body-2 text-gray">{format(new Date(data.published_date), 'MMMM, yyyy')}</p>
            <Separator className="mt-2.5 mb-5" />
            {isInModal ? (
              <DialogTitle className="typo-title-2 font-bold">{data.title}</DialogTitle>
            ) : (
              <h1 className="typo-title-2 font-bold">{data.title}</h1>
            )}
          </div>
          <div className="detail-content mb-5 lg:mb-7.5">{parse(data.content)}</div>
          {/* <div className="space-y-2.5">
            {data.gallery.map((item, index) => {
              if (item.type === 'landscape') {
                return (
                  <SingleImage
                    key={`gallery-${index}`}
                    src={`${process.env.DIRECTUS_URL}/assets/${item.images[0].id}`}
                    alt={data.title}
                  />
                )
              } else {
                return (
                  <ColumnImages
                    key={`gallery-${index}`}
                    images={item.images.map((img) => ({
                      src: `${process.env.DIRECTUS_URL}/assets/${img.id}`,
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
                return (
                  <VideoPlayer key={`video-${index}`} src={`${process.env.DIRECTUS_URL}/assets/${item.video?.id}`} />
                )
              }
            })}
          </div> */}
        </article>
        <SnsShareFooter className="py-7" label="Share this article" title={data.title} coverImage={data.cover} />
      </div>
      <PressExploreMore isInModal={isInModal} data={exploreMoreData} />
      {!isInModal ? (
        <div className="mt-4 max-lg:px-4 md:mt-10">
          <ButtonArrowLink href={'/press-and-news'} className="w-full">
            SEE ALL PRESS & NEWS
          </ButtonArrowLink>
        </div>
      ) : null}
    </SnsShareProvider>
  )
}

export { PressDetailContent }
