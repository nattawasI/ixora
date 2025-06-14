'use client'

import { cn } from '@/libs/utils/cn'
import { useState } from 'react'

const SlideWhoWeAre = () => {
  const [isShowMore, setIsShowMore] = useState(false)

  return (
    <div className="c-container relative">
      <div className="space-y-7">
        <div className="space-y-5">
          <h2 className="typo-title-2 font-bold">WHO WE AREA</h2>
          <h3 className="typo-title-3">
            We are dedicated to exploring the limitless possibilities of landscape architectural design, crafting spaces
            that seamlessly integrate the beauty of nature with human needs.
          </h3>
        </div>
        <p>
          <span className="font-bold">IXORA DESIGN</span> was founded in 2003, Ixora Design emerged from the
          collaborative vision of four seasoned landscape architects with a wealth of international experience spanning
          Thailand, Asia, Australia, and the United States. Driven by a passion to elevate the profession, our dynamic
          team is committed to delivering innovative and{' '}
          <span className="font-bold">sustainable landscape solutions</span>
        </p>

        <p className={cn('hidden', isShowMore ? 'block' : 'hidden')}>
          Over two decades, Ixora Design has not only delivered commercially successful projects but has also cultivated{' '}
          <span className="font-bold">a deep expertise in sustainable design</span>. Through experimental projects,
          design competitions, and collaborations with educational, public, and private sectors, we translate ecological
          design theories into practical, sustainable and impactful solutions. We are dedicated to environmental
          preservation and restoring balance to natural ecosystems. Ixora Design partners with clients to create
          exceptional landscapes that seamlessly integrate function, technology, and aesthetic design with the natural
          environment. We are committed to fostering a sustainable future for people, animals, and the planet.
        </p>

        <button className="uppercase" type="button" onClick={() => setIsShowMore((prev) => !prev)}>
          {isShowMore ? 'SHOW LESS' : 'READ MORE'}
        </button>
      </div>
    </div>
  )
}

export { SlideWhoWeAre }
