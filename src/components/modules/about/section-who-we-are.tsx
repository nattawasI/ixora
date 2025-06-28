'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { useSwiper } from 'swiper/react'
import { ReadMoreBlock } from '@/components/ui/read-more-block'

const SectionWhoWeAre = ({ isDesktop }: { isDesktop?: boolean }) => {
  const contentRootRef = useRef<HTMLDivElement>(null)
  const contentMoreRef = useRef<HTMLDivElement>(null)

  const [open, setOpen] = useState(false)
  const [wrapperHeight, setWrapperHeight] = useState<number | 'auto'>('auto')

  const swiper = useSwiper()

  const updateContentHeight = useCallback(() => {
    const contentRootEl = contentRootRef.current
    const contentMoreEl = contentMoreRef.current

    if (contentRootEl && contentMoreEl && isDesktop) {
      // Reset height to auto to get the natural height
      contentRootEl.style.height = 'auto'
      setWrapperHeight(contentRootEl.scrollHeight + contentMoreEl.scrollHeight)
    }
  }, [isDesktop])

  useEffect(() => {
    // Initial update
    updateContentHeight()

    // Add resize event listener
    window.addEventListener('resize', updateContentHeight)

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateContentHeight)
    }
  }, [updateContentHeight])

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }, 0)
    }
  }, [open])

  return (
    <div className="c-container about-page-container relative">
      <div className="grid grid-cols-12">
        <div
          className="col-span-12 space-y-7 md:col-span-9 md:col-start-4"
          ref={contentRootRef}
          style={{ height: wrapperHeight }}
        >
          <div className="space-y-5">
            <h2 className="typo-title-2 font-bold">WHO WE AREA</h2>
            <h3 className="typo-body-2 md:typo-title-3">
              We are dedicated to exploring the limitless possibilities of landscape architectural design, crafting
              spaces that seamlessly integrate the beauty of nature with human needs.
            </h3>
          </div>
          <ReadMoreBlock
            contentLead={
              <p>
                <span className="font-bold">IXORA DESIGN</span> was founded in 2003, Ixora Design emerged from the
                collaborative vision of four seasoned landscape architects with a wealth of international experience
                spanning Thailand, Asia, Australia, and the United States. Driven by a passion to elevate the
                profession, our dynamic team is committed to delivering innovative and&nbsp;
                <span className="font-bold">sustainable landscape solutions</span>
              </p>
            }
            contentMoreRef={contentMoreRef}
            contentMore={
              <p>
                Over two decades, Ixora Design has not only delivered commercially successful projects but has also
                cultivated&nbsp;
                <span className="font-bold">a deep expertise in sustainable design</span>. Through experimental
                projects, design competitions, and collaborations with educational, public, and private sectors, we
                translate ecological design theories into practical, sustainable and impactful solutions. We are
                dedicated to environmental preservation and restoring balance to natural ecosystems. Ixora Design
                partners with clients to create exceptional landscapes that seamlessly integrate function, technology,
                and aesthetic design with the natural environment. We are committed to fostering a sustainable future
                for people, animals, and the planet.
              </p>
            }
            open={open}
            onOpenChange={setOpen}
            onAnimationComplete={() => {
              swiper.updateAutoHeight()
            }}
          />
        </div>
      </div>
    </div>
  )
}

export { SectionWhoWeAre }
