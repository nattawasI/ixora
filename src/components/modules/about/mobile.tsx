/** swiper */
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

/** components */
import { SlideWhoWeAre } from './section-who-we-are'
import { SlideWhatWeDo } from './section-what-we-do'
import { SlideOurCommitment } from './section-our-commitment'
import { Footer } from '@/components/layout/footer'
import { SwiperOptions } from 'swiper/types'
import { useRef } from 'react'
import { cn } from '@/libs/utils/cn'

const MobileAboutLayout = () => {
  /** ref */
  const paginationRef = useRef<HTMLDivElement>(null)

  /** swiper pagination options */
  const pagination: SwiperOptions['pagination'] = {
    el: paginationRef.current,
    clickable: true,
    renderBullet: function (_, className) {
      return `<span class="${className}"></span>`
    },
    bulletClass: 'rounded-full size-2 border border-gray m-0 p-0',
    bulletActiveClass: 'bg-blue border-blue',
  }

  return (
    <div className="h-full">
      <div className="relative">
        <Swiper
          autoHeight
          slidesPerView={1}
          spaceBetween={0}
          modules={[Pagination]}
          className="h-full min-h-[calc(100vh-3.75rem)] w-full"
          pagination={pagination}
          onInit={(swiper) => {
            swiper.pagination.init()
            swiper.pagination.update()
          }}
        >
          <SwiperSlide>
            <SlideWhoWeAre />
          </SwiperSlide>
          <SwiperSlide>
            <SlideWhatWeDo />
          </SwiperSlide>
          <SwiperSlide>
            <SlideOurCommitment />
          </SwiperSlide>
        </Swiper>
        <div
          className={cn(
            'absolute bottom-10 left-1/2 z-30 -translate-x-1/2',
            'rounded-4xl bg-white/90 px-5 py-3 shadow-2xs',
          )}
        >
          <div className="flex items-center gap-x-5" ref={paginationRef} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export { MobileAboutLayout }
