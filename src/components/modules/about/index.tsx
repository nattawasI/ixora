'use client'

/** styles */
import 'swiper/css'
import 'swiper/css/mousewheel'

/** swiper */
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import { useMediaQuery } from '@/libs/hooks/use-media-query'
import { SlideWhoWeAre } from './section-who-we-are'
import { SlideWhatWeDo } from './section-what-we-do'
import { SlideOurCommitment } from './section-our-commitment'
import { useState } from 'react'

const AboutSlider = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)')

  const [isSliderEnd, setIsSliderEnd] = useState<boolean>(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const swiper = useSwiper()

  console.log(activeIndex)

  return (
    <div className="relative">
      <Swiper
        direction={isMobile ? 'horizontal' : 'vertical'}
        slidesPerView={1}
        mousewheel={{
          enabled: !isMobile,
          releaseOnEdges: true,
          forceToAxis: true,
          eventsTarget: 'body',
        }}
        modules={[Mousewheel]}
        onSlideChange={(swiper) => {
          setIsSliderEnd(swiper.isEnd)
          setActiveIndex(swiper.activeIndex)
        }}
        className="pt-6.25rem h-dvh w-dvh"
      >
        <SwiperSlide className="h-dvh pt-[6.25rem]">
          <SlideWhoWeAre />
        </SwiperSlide>
        <SwiperSlide className="h-dvh pt-[6.25rem]">
          <SlideWhatWeDo />
        </SwiperSlide>
        <SwiperSlide className="h-dvh pt-[6.25rem]">
          <SlideOurCommitment />
        </SwiperSlide>
      </Swiper>

      <button
        type="button"
        className="absolute right-5 bottom-5 z-10"
        onClick={() => {
          swiper.slideNext()
        }}
      >
        {isSliderEnd ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}

export { AboutSlider }
