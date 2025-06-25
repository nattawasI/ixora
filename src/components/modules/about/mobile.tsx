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
import { cn } from '@/libs/utils/cn'

const MobileAboutLayout = () => {
  return (
    <div className="h-full">
      <div className="relative">
        <Swiper
          autoHeight
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'block shrink-0 rounded-full size-2 border border-gray m-0 p-0',
            bulletActiveClass: 'bg-blue border-blue',
          }}
          modules={[Pagination]}
          className="h-full min-h-[calc(100vh-3.75rem)] w-full"
          onSwiper={(swiper) => {
            swiper.on('slideChange', () => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            })
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
            'absolute !bottom-10 !left-1/2 z-30 -translate-x-1/2',
            'rounded-4xl bg-white/90 px-5 py-3 shadow-2xs',
            'swiper-pagination flex !w-auto items-center gap-x-5',
          )}
        ></div>
      </div>
      <Footer />
    </div>
  )
}

export { MobileAboutLayout }
