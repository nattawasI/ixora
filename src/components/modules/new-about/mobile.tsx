import useEmblaCarousel from 'embla-carousel-react'
import { SlideWhoWeAre } from './section-who-we-are'
import { SlideWhatWeDo } from './section-what-we-do'
import { SlideOurCommitment } from './section-our-commitment'

const MobileSliderLayout = () => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="h-dvh flex-[0_0_100%]">
          <SlideWhoWeAre />
        </div>
        <div className="h-dvh flex-[0_0_100%]">
          <SlideWhatWeDo />
        </div>
        <div className="h-dvh flex-[0_0_100%]">
          <SlideOurCommitment />
        </div>
      </div>
    </div>
  )
}
export { MobileSliderLayout }
