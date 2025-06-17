'use client'

import { SlideWhoWeAre } from './section-who-we-are'
import { SlideWhatWeDo } from './section-what-we-do'
import { SlideOurCommitment } from './section-our-commitment'
import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP)

const DesktopFullPageLayout = () => {
  const containerRef = useRef(null)
  const isLocked = useRef(false)
  const sections = Array.from({ length: 3 }, (_, i) => i)

  const scrollToSection = (i: number) => {
    if (isLocked.current) return
    isLocked.current = true
    gsap.to(window, {
      scrollTo: { y: i * (window.innerHeight - 100) },
      duration: 0.7,
      ease: 'power2.inOut',
      onComplete: () => {
        isLocked.current = false
      },
    })
  }

  useGSAP(
    () => {
      sections.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `.section:nth-child(${i + 1})`,
          start: 'top top+=100',
          end: 'bottom top+=100',
          markers: true,
          onEnter: () => scrollToSection(i + 1),
          onEnterBack: () => scrollToSection(i),
        })
      })
    },

    { scope: containerRef },
  )

  return (
    <div ref={containerRef}>
      <section className="section h-[calc(100dvh-6.25rem)]">
        <SlideWhoWeAre />
      </section>
      <section className="section h-[calc(100dvh-6.25rem)]">
        <SlideWhatWeDo />
      </section>
      <section className="section h-[calc(100dvh-6.25rem)]">
        <SlideOurCommitment />
      </section>
    </div>
  )
}

export { DesktopFullPageLayout }
