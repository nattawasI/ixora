import parse from 'html-react-parser'
import { format } from 'date-fns'
import { DialogTitle } from '@radix-ui/react-dialog'
import { Separator } from '@/components/ui/separator'
import { ButtonArrowLink } from '@/components/ui/button-arrow'
import { SnsShareFooter } from '@/components/modules/article-detail/sns-share-footer'
import { SnsShareProvider } from '@/components/modules/article-detail/sns-share-context'
import { SnsShareSticky } from '@/components/modules/article-detail/sns-share-sticky'
import { MediaContent } from '@/components/modules/article-detail/media-content'
import type { NewsDetailResponse } from '@/libs/directus/type'

type PressDetailContentProps = {
  isInModal?: boolean
  data: NewsDetailResponse
  exploreMore?: React.ReactElement
}

const PressDetailContent = ({ isInModal, data, exploreMore }: PressDetailContentProps) => {
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
          <div className="mb-2.5 lg:mb-5">
            <p className="typo-body-2 text-gray">{format(new Date(data.published_date), 'MMMM, yyyy')}</p>
            <Separator className="mt-2.5 mb-5" />
            {isInModal ? (
              <DialogTitle className="typo-title-2--rps font-semibold">{data.title}</DialogTitle>
            ) : (
              <h1 className="typo-title-2--rps font-semibold">{data.title}</h1>
            )}
          </div>
          <div className="cms-content typo-body-2 mb-5 lg:mb-7.5">{parse(data.content)}</div>
          <MediaContent type="press-and-news" data={data} />
        </article>
        <SnsShareFooter className="py-7" label="Share this article" title={data.title} coverImage={data.cover.src} />
      </div>
      {exploreMore}
      {!isInModal ? (
        <div className="mt-4 max-lg:px-4.75 md:mt-10">
          <ButtonArrowLink href={'/press-and-news'} className="w-full uppercase">
            SEE ALL PRESS & NEWS
          </ButtonArrowLink>
        </div>
      ) : null}
    </SnsShareProvider>
  )
}

export { PressDetailContent }
