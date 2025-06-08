import { cn } from '@/libs/utils/cn'
import parse from 'html-react-parser'
import { DialogTitle } from '@radix-ui/react-dialog'
import { Separator } from '@/components/ui/separator'
import { SingleImage } from '@/components/modules/article-detail/single-image'
import { ColumnImages } from '@/components/modules/article-detail/column-images'
import { VideoPlayer } from '@/components/modules/article-detail/video-player'
import { SnsShareFooter } from '@/components/modules/article-detail/sns-share-footer'
import { PressExploreMore } from '@/components/modules/press-detail/press-explore-more'
import { ButtonArrowLink } from '@/components/ui/button-arrow'
import { SnsShareProvider } from '@/components/modules/article-detail/sns-share-context'
import { SnsShareSticky } from '@/components/modules/article-detail/sns-share-sticky'

const PressDetailContent = ({ isInModal }: { isInModal?: boolean }) => {
  return (
    <SnsShareProvider>
      <SnsShareSticky
        isInModal={isInModal}
        title="Topic of press Abc..."
        coverImage="/mockup/press-detail-1.jpg"
        className="social-share-sticky"
      />
      <div className="bg-white px-4 pt-4 lg:px-12.5 lg:pt-12.5">
        <article>
          <div className="mb-2.5 lg:mb-5">
            <p className="typo-body-2 text-gray">April, 2025</p>
            <Separator className="mt-2.5 mb-5" />
            {isInModal ? (
              <DialogTitle className="typo-title-2 font-bold">Topic of press Abc...</DialogTitle>
            ) : (
              <h1 className="typo-title-2 font-bold">Topic of press Abc...</h1>
            )}
          </div>
          <div className="detail-content mb-5 lg:mb-7.5">
            {parse(`<p>A new campus community redefines suburban living with the concept of "<strong>Convergent with The Divergent Design.</strong>"
            This approach uses experimental designs reflecting distinctive personality traits, linked by a convergent
            iconic bridge that seamlessly connects diverse characteristics, offering an unparalleled living
            experience.</p><br /><br /><p>A new campus community redefines suburban living with the concept of "Convergent with The Divergent Design." This approach uses experimental designs reflecting distinctive personality traits, linked by a convergent iconic bridge that seamlessly connects diverse characteristics, offering an unparalleled living experience.</p>`)}
          </div>
          <div className="space-y-2.5">
            <SingleImage src="/mockup/press-detail-1.jpg" alt="Topic of press Abc..." />
            <SingleImage src="/mockup/press-detail-2.jpg" alt="Topic of press Abc..." />
            <ColumnImages
              images={[
                { src: '/mockup/press-detail-3.jpg', alt: 'Topic of press Abc...' },
                { src: '/mockup/press-detail-4.jpg', alt: 'Topic of press Abc...' },
              ]}
            />
            <VideoPlayer src="/mockup/video.mp4" />
          </div>
        </article>
        <SnsShareFooter
          className="py-7"
          label="Share this article"
          title="Topic of press Abc..."
          coverImage="/mockup/press-detail-1.jpg"
        />
      </div>
      <section className={cn('max-lg:px-4 max-lg:pt-4', isInModal ? 'lg:px-12.5' : '')}>
        <PressExploreMore />
      </section>
      {!isInModal ? (
        <div className="mt-4 max-lg:px-4 md:mt-10">
          <ButtonArrowLink href={'/press'} className="w-full">
            SEE ALL PRESS & NEWS
          </ButtonArrowLink>
        </div>
      ) : null}
    </SnsShareProvider>
  )
}

export { PressDetailContent }
