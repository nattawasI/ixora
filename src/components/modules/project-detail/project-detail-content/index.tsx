import parse from 'html-react-parser'
import { DialogTitle } from '@radix-ui/react-dialog'
import { ReadMoreBlock } from '@/components/ui/read-more-block'
import { ButtonArrowLink } from '@/components/ui/button-arrow'
import { SnsShareFooter } from '@/components/modules/article-detail/sns-share-footer'
import { SnsShareProvider } from '@/components/modules/article-detail/sns-share-context'
import { SnsShareSticky } from '@/components/modules/article-detail/sns-share-sticky'
import { MediaContent } from '@/components/modules/article-detail/media-content'

/** type */
import type { ProjectDetailResponse } from '@/libs/directus/type'

type ProjectDetailContentProps = {
  isInModal?: boolean
  data: ProjectDetailResponse
  exploreMore?: React.ReactElement
}

const ProjectDetailContent = ({ isInModal, data, exploreMore }: ProjectDetailContentProps) => {
  return (
    <SnsShareProvider>
      <SnsShareSticky
        isInModal={isInModal}
        title={data.title}
        coverImage={data.cover.src}
        className="social-share-sticky"
      />
      <div className="bg-white px-4.75 pt-4 lg:px-12.5 lg:pt-12.5">
        <article>
          <div className="mb-5 space-y-2.5 lg:mb-[3.75rem]">
            {isInModal ? (
              <DialogTitle className="typo-title-1--rps font-semibold uppercase">{data.title}</DialogTitle>
            ) : (
              <h1 className="typo-title-1--rps font-semibold uppercase">{data.title}</h1>
            )}
            <p className="typo-body-2 uppercase">{data.location}</p>
          </div>
          <div className="mb-5 grid max-md:gap-y-5 md:grid-cols-12 md:gap-x-7.5 lg:mb-12.5">
            <div className="flex flex-col gap-y-5 md:col-span-4 md:gap-y-7.5">
              <div className="space-y-1.25">
                <p className="typo-body-2 text-gray">Client :</p>
                <p className="typo-body-2 font-semibold">{data.client}</p>
              </div>
              <div className="mt-auto space-y-1.25">
                <p className="typo-body-2 text-gray">Year :</p>
                <p className="typo-body-2 font-semibold">{data.year}</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-5 md:col-span-8 md:gap-y-7.5 md:pl-7.5">
              {data.content_lead && data.content_more ? (
                <ReadMoreBlock
                  className="typo-body-2 cms-content"
                  contentLead={parse(data.content_lead)}
                  contentMore={<div className="pt-5">{parse(data.content_more)}</div>}
                />
              ) : data.content_lead || data.content_more ? (
                <div className="typo-body-2 cms-content">{parse(data.content_lead || data.content_more)}</div>
              ) : null}
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
          <MediaContent type="project" data={data} />
        </article>
        <SnsShareFooter className="py-7" label="Share this project" title={data.title} coverImage={data.cover.src} />
      </div>
      {exploreMore}
      {!isInModal ? (
        <div className="mt-4 max-lg:px-4.75 md:mt-10">
          <ButtonArrowLink
            href={`/projects/${data.category.slug}`}
            className="w-full uppercase"
          >{`SEE ALL ${data.category.title} PROJECTS`}</ButtonArrowLink>
        </div>
      ) : null}
    </SnsShareProvider>
  )
}

export { ProjectDetailContent }
