/** styles */
import 'swiper/css/navigation'

/** swiper */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

/** components */
import { CategoryCard } from './card'
import { Next, Previous } from '@/components/ui/icons-outline'

const items = [
  {
    title: 'RESIDENTIAL',
    href: '/projects/residential',
    description:
      'Explore the art of landscape architecture and its role in creating sustainable and functional spaces.',
    image: {
      src: '/images/about/residential.png',
      alt: 'RESIDENTIAL',
    },
  },
  {
    title: 'CONDOMINIUM',
    href: '/projects/condominium',
    description: 'Explore the art of urban design and its role in creating sustainable and functional spaces.',
    image: {
      src: '/images/about/condominium.png',
      alt: 'CONDOMINIUM',
    },
  },
  {
    title: 'HOSPITALITY',
    href: '/projects/hospitality',
    description: 'Explore the art of interior design and its role in creating sustainable and functional spaces.',
    image: {
      src: '/images/about/hospitality.png',
      alt: 'HOSPITALITY',
    },
  },
  {
    title: 'COMMERCIAL',
    href: '/projects/commercial',
    description:
      'Explore the art of landscape architecture and its role in creating sustainable and functional spaces.',
    image: {
      src: '/images/about/commercial.png',
      alt: 'COMMERCIAL',
    },
  },
  {
    title: 'MASTER PLANNING',
    href: '/projects/master-planning',
    description: 'Explore the art of urban design and its role in creating sustainable and functional spaces.',
    image: {
      src: '/images/about/master-planning.png',
      alt: 'MASTER PLANNING',
    },
  },
  {
    title: 'PUBLIC SPACE',
    href: '/projects/public-space',
    description: 'Explore the art of interior design and its role in creating sustainable and functional spaces.',
    image: {
      src: '/images/about/public-space.png',
      alt: 'PUBLIC SPACE',
    },
  },
]

const CategorySlider = () => {
  return (
    <div className="relative">
      <Swiper slidesPerView={3} spaceBetween={30} centeredSlides={false} modules={[Navigation]}>
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <CategoryCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <div>
          <Previous />
          <Next />
        </div>
      </div>
    </div>
  )
}

export { CategorySlider }
