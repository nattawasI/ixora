/** styles */
import 'swiper/css/navigation'

/** swiper */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import CategoryCard from './category-card'

const items = [
  {
    title: 'Landscape Architecture',
    href: '/about/landscape-architecture',
    description:
      'Explore the art of landscape architecture and its role in creating sustainable and functional spaces.',
  },
  {
    title: 'Urban Design',
    href: '/about/urban-design',
    description: 'Explore the art of urban design and its role in creating sustainable and functional spaces.',
  },
  {
    title: 'Interior Design',
    href: '/about/interior-design',
    description: 'Explore the art of interior design and its role in creating sustainable and functional spaces.',
  },
  {
    title: 'Landscape Architecture',
    href: '/about/landscape-architecture',
    description:
      'Explore the art of landscape architecture and its role in creating sustainable and functional spaces.',
  },
  {
    title: 'Urban Design',
    href: '/about/urban-design',
    description: 'Explore the art of urban design and its role in creating sustainable and functional spaces.',
  },
  {
    title: 'Interior Design',
    href: '/about/interior-design',
    description: 'Explore the art of interior design and its role in creating sustainable and functional spaces.',
  },
  {
    title: 'Landscape Architecture',
    href: '/about/landscape-architecture',
    description:
      'Explore the art of landscape architecture and its role in creating sustainable and functional spaces.',
  },
  {
    title: 'Urban Design',
    href: '/about/urban-design',
    description: 'Explore the art of urban design and its role in creating sustainable and functional spaces.',
  },
  {
    title: 'Interior Design',
    href: '/about/interior-design',
    description: 'Explore the art of interior design and its role in creating sustainable and functional spaces.',
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
    </div>
  )
}

export { CategorySlider }
