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
import { ProjectResponse } from '@/libs/directus/type'

type ProjectDetailContentProps = ProjectResponse & {
  isInModal?: boolean
}

const ProjectDetailContent = ({
  isInModal,
  title,
  client,
  year,
  cover,
  location,
  content_lead,
  content_more,
  landscape_architect,
  photo_credit,
  gallery,
}: ProjectDetailContentProps) => {
  return (
    <SnsShareProvider>
      <SnsShareSticky
        isInModal={isInModal}
        title={title}
        coverImage={`${process.env.DIRECTUS_URL}/assets/${cover}`}
        className="social-share-sticky"
      />
      <section className="bg-white px-4 pt-4 lg:px-12.5 lg:pt-12.5">
        <article>
          <div className="mb-5 space-y-2.5 lg:mb-[3.75rem]">
            {isInModal ? (
              <DialogTitle className="typo-title-1 font-bold uppercase">{title}</DialogTitle>
            ) : (
              <h1 className="typo-title-1 font-bold uppercase">{title}</h1>
            )}
            <p className="typo-body-2 uppercase">{location}</p>
          </div>
          <div className="mb-5 grid max-md:gap-y-5 md:grid-cols-12 md:gap-x-7.5 lg:mb-12.5">
            <div className="flex flex-col gap-y-5 md:col-span-4 md:gap-y-7.5">
              <div className="space-y-1.25">
                <p className="typo-body-2 text-gray">Client :</p>
                <p className="typo-body-2 font-bold">{client}</p>
              </div>
              <div className="mt-auto space-y-1.25">
                <p className="typo-body-2 text-gray">Year :</p>
                <p className="typo-body-2 font-bold">{year}</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-5 md:col-span-8 md:gap-y-7.5 md:pl-7.5">
              <ReadMoreBlock
                showContentSlot={<div className="typo-body-2 whitespace-pre-line">{parse(content_lead)}</div>}
                hiddenContentSlot={<div className="typo-body-2 whitespace-pre-line">{parse(content_more)}</div>}
              />
              <div>
                <p className="typo-body-2">
                  Landscape Architect <span className="text-blue">•</span> <strong>{landscape_architect}</strong>
                </p>
                <p className="typo-body-2">
                  Photo Credit <span className="text-blue">•</span> <strong>{photo_credit}</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2.5">
            {/* <SingleImage src={`${process.env.DIRECTUS_URL}/assets/${cover}`} alt={title} />
            <ColumnImages
              images={gallery.map((item) => ({ src: `${process.env.DIRECTUS_URL}/assets/${item}`, alt: title }))}
            /> */}
            <VideoPlayer src="/mockup/video.mp4" />
          </div>
        </article>
        <SnsShareFooter
          className="py-7"
          label="Share this project"
          title={title}
          coverImage={`${process.env.DIRECTUS_URL}/assets/${cover}`}
        />
      </section>
      <section className={cn('max-lg:px-4 max-lg:pt-4', isInModal ? 'lg:px-12.5' : '')}>
        <ProjectExploreMore isInModal={isInModal} />
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
