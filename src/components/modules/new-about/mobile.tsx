import useEmblaCarousel from 'embla-carousel-react'
import { SlideWhoWeAre } from './section-who-we-are'
import { SlideWhatWeDo } from './section-what-we-do'
import { SlideOurCommitment } from './section-our-commitment'

const MobileSliderLayout = () => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="h-[calc(100dvh-3.75rem)] flex-[0_0_100%] md:h-[calc(100dvh-6.25rem)]">
          <SlideWhoWeAre />
        </div>
        <div className="h-[calc(100dvh-3.75rem)] flex-[0_0_100%] md:h-[calc(100dvh-6.25rem)]">
          <SlideWhatWeDo />
        </div>
        <div className="h-[calc(100dvh-3.75rem)] flex-[0_0_100%] md:h-[calc(100dvh-6.25rem)]">
          <SlideOurCommitment />
        </div>
      </div>
    </div>
  )
}
export { MobileSliderLayout }
