'use client'

/** styles */
import '../style.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

/** context */
import { useAboutCategory } from './context'

/** libs */
import { useRef } from 'react'

/** hooks */
import { useMediaQuery } from '@/libs/hooks/use-media-query'

/** swiper */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

/** components */
import { ArrowPrev, ArrowNext } from '@/components/ui/icons-outline'
import { CategoryCard } from './card'

/** utils */
import { cn } from '@/libs/utils/cn'

const CategorySlider = () => {
  const isMobile = useMediaQuery('(max-width: 767px)')

  const { categories } = useAboutCategory()

  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const paginationRef = useRef<HTMLDivElement>(null)

  const buttonArrowStyle = cn(
    'nav-button disabled:text-gray-light-1 hover:text-blue disabled:cursor-not-allowed [&_svg]:transition-colors [&_svg]:duration-300',
  )

  return (
    <>
      {isMobile ? (
        <div className="c-container grid grid-cols-2 gap-2.5">
          {categories.map((item, i) => (
            <div key={i}>
              <CategoryCard href={`/projects/${item.slug}`} {...item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="custom-slider c-container-sm relative space-y-14">
          <div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              centeredSlides={false}
              grabCursor={false}
              modules={[Pagination, Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{
                type: 'progressbar',
                el: paginationRef.current,
              }}
              className="!overflow-visible select-none"
              onInit={(swiper) => {
                swiper.navigation.init()
                swiper.navigation.update()
                swiper.pagination.init()
                swiper.pagination.render()
                swiper.pagination.update()
              }}
            >
              {categories.map((item, i) => (
                <SwiperSlide key={i}>
                  <CategoryCard href={`/projects/${item.slug}`} {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="custom-navigation">
            <div className="flex items-center gap-x-5">
              <button type="button" ref={prevRef} aria-label="Previous slide" className={buttonArrowStyle}>
                <ArrowPrev />
              </button>
              <button type="button" ref={nextRef} aria-label="Next slide" className={buttonArrowStyle}>
                <ArrowNext />
              </button>
            </div>
            <div ref={paginationRef} className="custom-pagination" />
          </div>
        </div>
      )}
    </>
  )
}

export { CategorySlider }
