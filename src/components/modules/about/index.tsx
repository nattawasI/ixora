'use client'

/** styles */
import 'swiper/css'
import 'swiper/css/mousewheel'

/** swiper */
import { useCallback, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'

import { useMediaQuery } from '@/libs/hooks/use-media-query'
import { SlideWhoWeAre } from './section-who-we-are'
import { SlideWhatWeDo } from './section-what-we-do'
import { SlideOurCommitment } from './section-our-commitment'

const AboutSlider = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)')
  const [isSwiperOnLastSlide, setIsSwiperOnLastSlide] = useState(false)
  const [canScroll, setCanScroll] = useState(true)
  const [blockSwiperScroll, setBlockSwiperScroll] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null) // A sentinel for the footer
  const footerSentinelRef = useRef<HTMLDivElement>(null) // A sentinel for the footer
  const swiperRef = useRef<SwiperRef>(null)

  // Callback from MainSwiper to notify about last slide status
  const handleSwiperEnd = useCallback((isEnded: boolean) => {
    setIsSwiperOnLastSlide(isEnded)
  }, [])

  // // Effect to manage body overflow and Swiper scroll blocking
  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Check if the footer sentinel is visible
  //     const footerSentinel = footerSentinelRef.current
  //     let isFooterAreaVisible = false
  //     if (footerSentinel) {
  //       const rect = footerSentinel.getBoundingClientRect()
  //       // Considered visible if any part of it is in the viewport
  //       isFooterAreaVisible = rect.top < window.innerHeight && rect.bottom > 0
  //     }

  //     if (isSwiperOnLastSlide && isFooterAreaVisible) {
  //       // When on last slide AND footer area is visible,
  //       // disable swiper scroll and allow native body scroll
  //       setBlockSwiperScroll(true)
  //       document.documentElement.style.overflowY = 'auto'
  //     } else {
  //       // Otherwise, enable swiper scroll and hide body scroll
  //       setBlockSwiperScroll(false)
  //       document.documentElement.style.overflowY = 'hidden'
  //     }
  //   }

  //   // Add scroll listener
  //   window.addEventListener('scroll', handleScroll)
  //   // Initial check
  //   handleScroll()

  //   // Clean up
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //     document.body.style.overflowY = '' // Reset on unmount
  //     document.documentElement.style.overflowY = ''
  //   }
  // }, [isSwiperOnLastSlide]) // Re-run when last slide status changes

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return
    const footer = document.querySelector('footer')
    if (!footer) return

    const footerRect = footer.getBoundingClientRect()
    const viewportHeight = window.innerHeight

    // ถ้า footer เข้ามาใน viewport มากกว่า 0px -> disable swiper
    if (footerRect.top < viewportHeight && footerRect.top > 0) {
      setCanScroll(false)
    } else {
      setCanScroll(true)
    }
  }, [containerRef])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll() // เช็คทันทีตอน mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div ref={containerRef}>
      <Swiper
        autoHeight={true}
        direction={isMobile ? 'horizontal' : 'vertical'}
        slidesPerView={1}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true, eventsTarget: 'body' }}
        modules={[Mousewheel]}
        onSlideChange={(swiper) => {
          handleSwiperEnd(swiper.isEnd)
        }}
        ref={swiperRef}
        allowTouchMove={canScroll}
        allowSlideNext={canScroll}
        allowSlidePrev={canScroll}
        className="h-[calc(100vh-100px)] w-full"
      >
        <SwiperSlide>
          <div className="flex h-full w-full items-center justify-center">
            <SlideWhoWeAre />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full w-full items-center justify-center">
            <SlideWhatWeDo />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-full w-full items-center justify-center">
            <SlideOurCommitment />
          </div>
        </SwiperSlide>
      </Swiper>
      <div ref={footerSentinelRef} className="h-[100px]" />
    </div>
  )
}
// const Layout: React.FC<LayoutProps> = ({ children, isSwiperOnLastSlide }) => {
//   const footerRef = useRef<HTMLDivElement>(null);
//   const [isFooterVisible, setIsFooterVisible] = useState(false);

//   // Intersection Observer to detect footer visibility
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsFooterVisible(entry.isIntersecting);
//       },
//       {
//         root: null, // viewport
//         rootMargin: '0px',
//         threshold: 0.1, // Adjust as needed (e.g., 10% of footer visible)
//       }
//     );

//     if (footerRef.current) {
//       observer.observe(footerRef.current);
//     }

//     return () => {
//       if (footerRef.current) {
//         observer.unobserve(footerRef.current);
//       }
//     };
//   }, []);

//   // Control body scroll based on footer visibility and swiper state
//   useEffect(() => {
//     if (isFooterVisible && isSwiperOnLastSlide) {
//       // Prevent body scroll only when footer is visible AND swiper is on last slide
//       document.body.style.overflow = 'auto'; // Allow native scroll to show footer
//       document.documentElement.style.overflow = 'auto';
//     } else if (isSwiperOnLastSlide && !isFooterVisible) {
//       // On last slide but footer not visible, still prevent body scroll to allow
//       // the user to scroll down to the footer.
//       document.body.style.overflow = 'hidden';
//       document.documentElement.style.overflow = 'hidden';
//     } else {
//       // Swiper is active on other slides, prevent body scroll
//       document.body.style.overflow = 'hidden';
//       document.documentElement.style.overflow = 'hidden';
//     }

//     // Cleanup function to reset overflow style when component unmounts
//     return () => {
//       document.body.style.overflow = '';
//       document.documentElement.style.overflow = '';
//     };
//   }, [isFooterVisible, isSwiperOnLastSlide]);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <div className="relative flex flex-col flex-grow"
//            style={{ height: isSwiperOnLastSlide && isFooterVisible ? 'auto' : 'calc(100vh - (var(--header-height, 100px) + var(--footer-height, 0px)))' }}>
//         {/*
//           This div's height calculation is tricky and might need fine-tuning.
//           Using custom CSS properties might be more robust if heights are truly dynamic.
//           For fixed heights, we can use `h-[calc(100vh-100px)]` etc. directly in MainSwiper's parent.
//         */}
//         {children} {/* MainSwiper content goes here */}
//       </div>
//       <div ref={footerRef} className="shrink-0"> {/* shrink-0 to ensure footer doesn't compress */}
//         <Footer />
//       </div>
//     </div>
//   );
// };
export { AboutSlider }

{
  /* <button
        type="button"
        className="absolute right-5 bottom-5 z-10"
        onClick={() => {
          swiper.slideNext()
        }}
      >
        {isSliderEnd ? 'Hide' : 'Show'}
      </button> */
}
