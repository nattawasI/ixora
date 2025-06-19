import useEmblaCarousel from 'embla-carousel-react'
import AutoHeight from 'embla-carousel-auto-height'
import { SlideWhoWeAre } from './section-who-we-are'
import { SlideWhatWeDo } from './section-what-we-do'
import { SlideOurCommitment } from './section-our-commitment'
import { DotButton, useDotButton } from './slider-pagination'
import { cn } from '@/libs/utils/cn'

const MobileSliderLayout = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [AutoHeight()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <div className="embla relative h-full overflow-hidden pt-[3.75rem] pb-11" ref={emblaRef}>
      <div className="flex">
        <div className="flex-[0_0_100%]">
          <SlideWhoWeAre />
        </div>
        <div className="flex-[0_0_100%]">
          <SlideWhatWeDo />
        </div>
        <div className="flex-[0_0_100%]">
          <SlideOurCommitment />
        </div>
      </div>
      <div
        className={cn(
          'absolute bottom-9 left-1/2 z-10 -translate-x-1/2',
          'flex items-center gap-x-5 rounded-4xl bg-white/90 px-5 py-4 shadow-2xs',
        )}
      >
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            className={cn('border-gray size-1.5 rounded-full border', {
              'bg-blue border-blue': selectedIndex === index,
            })}
            onClick={() => onDotButtonClick(index)}
          />
        ))}
      </div>
    </div>
  )
}
export { MobileSliderLayout }
