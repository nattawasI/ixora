import parse from 'html-react-parser'
import { cn } from '@/libs/utils/cn'
import { DialogTitle } from '@radix-ui/react-dialog'
import { ReadMoreBlock } from '@/components/ui/read-more-block'
import { SingleImage } from '@/components/modules/article-detail/single-image'
import { ColumnImages } from '@/components/modules/article-detail/column-images'
import { VideoPlayer } from '@/components/modules/article-detail/video-player'
import { SnsShareFooter } from '@/components/modules/article-detail/sns-share-footer'
import { ButtonArrowLink } from '@/components/ui/button-arrow'
import { SnsShareProvider } from '@/components/modules/article-detail/sns-share-context'
import { SnsShareSticky } from '@/components/modules/article-detail/sns-share-sticky'
import { ProjectExploreMore } from '@/components/modules/project-detail/project-explore-more'

/** type */
import type { ProjectDetailResponse } from '@/libs/directus/type'

type ProjectDetailContentProps = {
  isInModal?: boolean
  data: ProjectDetailResponse
}

const ProjectDetailContent = ({ isInModal, data }: ProjectDetailContentProps) => {
  return (
    <SnsShareProvider>
      <SnsShareSticky
        isInModal={isInModal}
        title={data.title}
        coverImage={`${process.env.DIRECTUS_URL}/assets/${data.cover}`}
        className="social-share-sticky"
      />
      <section className="bg-white px-4 pt-4 lg:px-12.5 lg:pt-12.5">
        <article>
          <div className="mb-5 space-y-2.5 lg:mb-[3.75rem]">
            {isInModal ? (
              <DialogTitle className="typo-title-1 font-bold uppercase">{data.title}</DialogTitle>
            ) : (
              <h1 className="typo-title-1 font-bold uppercase">{data.title}</h1>
            )}
            <p className="typo-body-2 uppercase">{data.location}</p>
          </div>
          <div className="mb-5 grid max-md:gap-y-5 md:grid-cols-12 md:gap-x-7.5 lg:mb-12.5">
            <div className="flex flex-col gap-y-5 md:col-span-4 md:gap-y-7.5">
              <div className="space-y-1.25">
                <p className="typo-body-2 text-gray">Client :</p>
                <p className="typo-body-2 font-bold">{data.client}</p>
              </div>
              <div className="mt-auto space-y-1.25">
                <p className="typo-body-2 text-gray">Year :</p>
                <p className="typo-body-2 font-bold">{data.year}</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-5 md:col-span-8 md:gap-y-7.5 md:pl-7.5">
              <ReadMoreBlock contentLead={parse(data.content_lead)} contentMore={parse(data.content_more)} />
              <div>
                <p className="typo-body-2">
                  Landscape Architect <span className="text-blue">•</span> <strong>{data.landscape_architect}</strong>
                </p>
                <p className="typo-body-2">
                  Photo Credit <span className="text-blue">•</span> <strong>{data.photo_credit}</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2.5">
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
          </div>
        </article>
        <SnsShareFooter
          className="py-7"
          label="Share this project"
          title={data.title}
          coverImage={`${process.env.DIRECTUS_URL}/assets/${data.cover}`}
        />
      </section>
      <section className={cn('max-lg:px-4 max-lg:pt-4', isInModal ? 'lg:px-12.5' : '')}>
        <ProjectExploreMore isInModal={isInModal} slug={data.slug} category={data.category.slug} />
      </section>
      {!isInModal ? (
        <div className="mt-4 max-lg:px-4 md:mt-10">
          <ButtonArrowLink
            href={'/projects/residential'}
            className="w-full"
          >{`SEE ALL ${'RESIDENTIAL'} PROJECTS`}</ButtonArrowLink>
        </div>
      ) : null}
    </SnsShareProvider>
  )
}

export { ProjectDetailContent }
