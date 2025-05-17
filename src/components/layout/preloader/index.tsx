'use client'

import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { cn } from '@/libs/utils/cn'
import { useMediaQuery } from '@/libs/hooks/use-media-query'


gsap.registerPlugin(useGSAP); 

const Preloader = () => {
  /* refs */
  const containerRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const boxTextRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const lineTopLeftRef = useRef<HTMLSpanElement>(null)
  const lineTopRightRef = useRef<HTMLSpanElement>(null)
  const lineBottomRightRef = useRef<HTMLSpanElement>(null)
  const lineBottomLeftRef = useRef<HTMLSpanElement>(null)

  const [isComplete, setIsComplete] = useState<boolean>(false)

  const isMobile = useMediaQuery("(max-width: 768px)")
  const {contextSafe} = useGSAP(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 2, ease: 'power3.inOut' }
    )

    tl.fromTo(
      boxTextRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.inOut',
      }, "-=0.75"
    )

    tl.fromTo(
      descriptionRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.inOut',
      }, "-=0.75"
    )

  },{scope: containerRef})

  const handleMouseEnter = contextSafe(() => {
    gsap.to(boxTextRef.current, {
      width: "100%",
      duration: 0.4,
      ease: "power2.out",
    })
  })

  const handleMouseLeave = contextSafe(() => {
    gsap.to(boxTextRef.current, {
      width: isMobile ? "90px" : "105px",
      duration: 0.4,
      ease: "power2.out",
    })
  })

  const handleClick = contextSafe(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsComplete(true) // unmount the Preloader after animation
      },
    })

    tl.to(logoRef.current, {
      width: 26,
      height: 26,
      top: 33,
      left: 40,
      duration: 2.5,
      ease: 'power3.inOut',
      onStart: () => {
        gsap.to(
          [
            lineTopLeftRef.current,
            lineTopRightRef.current,
            lineBottomRightRef.current,
            lineBottomLeftRef.current,
          ],
          {
            width: 10,
            height: 2,
            duration: 2,
          }
        )
        gsap.to(
          [
            lineTopLeftRef.current,
            lineTopRightRef.current,
            lineBottomRightRef.current,
            lineBottomLeftRef.current,
          ],
          {
            rotation: 0,
            duration: 1,
            delay: 1,
          }
        )
        gsap.to(
          [lineTopLeftRef.current, lineBottomLeftRef.current],
          {
            left: 0,
            duration: 1,
            delay: 0.5,
          }
        )
        gsap.to(
          [lineTopRightRef.current, lineBottomRightRef.current],
          {
            right: 0,
            duration: 1,
            delay: 0.5,
          }
        )
        gsap.to(
          [lineTopLeftRef.current, lineTopRightRef.current],
          {
            top: 12,
            duration: 1,
            delay: 0.5,
          }
        )
        gsap.to(
          [lineBottomLeftRef.current, lineBottomRightRef.current],
          {
            bottom: 4,
            duration: 1,
            delay: 0.5,
          }
        )
      },
    })

    tl.to(containerRef.current, {
      pointerEvents: 'none',
      opacity: 0,
      duration: 1,
      delay: 0.25,
      ease: 'power3.inOut',
    })
  })


  if (isComplete) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-y-8"
    >
      <div className="relative size-32">
        <div ref={logoRef} className="fixed size-32">
          <span
            ref={lineTopLeftRef}
            className="absolute w-16 h-2 rotate-45 top-[calc(50%-40px)] left-[-6px] bg-blue-2 transition-all"
          />
          <span
            ref={lineTopRightRef}
            className="absolute w-16 h-2 -rotate-45 top-[calc(50%-40px)] right-[-6px] bg-blue transition-all"
          />
          <span
            ref={lineBottomLeftRef}
            className="absolute w-16 h-2 -rotate-45 bottom-[calc(50%-40px)] left-[-6px] bg-blue transition-all"
          />
          <span
            ref={lineBottomRightRef}
            className="absolute w-16 h-2 rotate-45 bottom-[calc(50%-40px)] right-[-6px] bg-blue-2 transition-all"
          />
        </div>
      </div>

      <div className="space-y-2 text-center">
        <div
          ref={boxTextRef}
          className={cn("whitespace-nowrap overflow-hidden cursor-pointer mx-auto", isMobile ? 'w-[90px]' : 'w-[105px]')}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <p
            ref={textRef}
            className="hover:text-blue typo-title-3 font-bold uppercase text-gray"
          >
            EXPLORE OUR PROJECTS
          </p>
        </div>
        <p ref={descriptionRef} className="typo-body-1 uppercase text-gray">
          LIMITLESS POSSIBILITY
        </p>
      </div>
    </div>
  )
}

export { Preloader }
