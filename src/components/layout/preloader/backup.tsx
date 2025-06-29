'use client'

import { MouseEvent, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { cn } from '@/libs/utils/cn'
import { useMediaQuery } from '@/libs/hooks/use-media-query'

gsap.registerPlugin(useGSAP)

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

  /* hooks */
  const isMobile = useMediaQuery('(max-width: 768px)')

  /* states */
  const [isComplete, setIsComplete] = useState<boolean>(false)
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const { contextSafe } = useGSAP(
    () => {
      const tl = gsap.timeline()

      gsap.set(logoRef.current, { opacity: 0, scale: 0.5 })
      gsap.set(boxTextRef.current, { opacity: 0, y: 20 })
      gsap.set(descriptionRef.current, { opacity: 0, y: 20 })

      tl.to(logoRef.current, { opacity: 1, scale: 1, duration: 2, ease: 'power3.inOut' })

      tl.to(
        boxTextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.inOut',
        },
        '-=0.75',
      )

      tl.to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.inOut',
        },
        '-=0.75',
      )
    },
    { scope: containerRef },
  )

  const handleMouseEnter = contextSafe(() => {
    gsap.to(boxTextRef.current, {
      width: '100%',
      duration: 0.4,
      ease: 'power2.out',
    })
  })

  const handleMouseLeave = contextSafe(() => {
    if (isClicked) return
    gsap.to(boxTextRef.current, {
      width: '37.05%',
      duration: 0.4,
      ease: 'power2.out',
    })
  })

  const handleClick = contextSafe((e: MouseEvent) => {
    e.stopPropagation()
    setIsClicked(true)
    const tl = gsap.timeline({
      onComplete: () => {
        setIsComplete(true) // unmount the Preloader after animation
      },
    })

    tl.to(logoRef.current, {
      width: 26,
      height: 26,
      top: isMobile ? 13 : 33,
      left: isMobile ? 16 : 40,
      duration: 2.5,
      ease: 'power3.inOut',
      onStart: () => {
        gsap.to(
          [lineTopLeftRef.current, lineTopRightRef.current, lineBottomRightRef.current, lineBottomLeftRef.current],
          {
            width: 10,
            height: 2,
            duration: 2,
          },
        )
        gsap.to(
          [lineTopLeftRef.current, lineTopRightRef.current, lineBottomRightRef.current, lineBottomLeftRef.current],
          {
            rotation: 0,
            duration: 1,
            delay: 1,
          },
        )
        gsap.to([lineTopLeftRef.current, lineBottomLeftRef.current], {
          left: 0,
          duration: 1,
          delay: 0.5,
        })
        gsap.to([lineTopRightRef.current, lineBottomRightRef.current], {
          right: 0,
          duration: 1,
          delay: 0.5,
        })
        gsap.to([lineTopLeftRef.current, lineTopRightRef.current], {
          top: 12,
          duration: 1,
          delay: 0.5,
        })
        gsap.to([lineBottomLeftRef.current, lineBottomRightRef.current], {
          bottom: 4,
          duration: 1,
          delay: 0.5,
        })
      },
    })

    tl.to(
      containerRef.current,
      {
        pointerEvents: 'none',
        opacity: 0,
        duration: 0.5,
        delay: 0.25,
        ease: 'power3.inOut',
      },
      '-=0.5',
    )
  })

  if (isComplete) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-y-8 bg-white"
    >
      <div className="relative size-32">
        <div ref={logoRef} className="fixed size-32">
          <span
            ref={lineTopLeftRef}
            className="bg-blue-2 absolute top-[calc(50%-40px)] left-[-6px] h-2 w-16 rotate-45 transition-all"
          />
          <span
            ref={lineTopRightRef}
            className="bg-blue absolute top-[calc(50%-40px)] right-[-6px] h-2 w-16 -rotate-45 transition-all"
          />
          <span
            ref={lineBottomLeftRef}
            className="bg-blue absolute bottom-[calc(50%-40px)] left-[-6px] h-2 w-16 -rotate-45 transition-all"
          />
          <span
            ref={lineBottomRightRef}
            className="bg-blue-2 absolute right-[-6px] bottom-[calc(50%-40px)] h-2 w-16 rotate-45 transition-all"
          />
        </div>
      </div>

      <div className="space-y-2 text-center">
        <div
          ref={boxTextRef}
          className={cn('mx-auto w-[37.05%] cursor-pointer overflow-hidden whitespace-nowrap', {
            'pointer-events-none w-full': isClicked,
          })}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <p
            ref={textRef}
            className={cn('hover:text-blue typo-title-3--rps text-gray font-semibold uppercase', {
              'text-blue': isClicked,
            })}
          >
            EXPLORE OUR PROJECTS
          </p>
        </div>
        <p ref={descriptionRef} className="typo-body-1 text-gray uppercase">
          LIMITLESS POSSIBILITY
        </p>
      </div>
    </div>
  )
}

export { Preloader }
