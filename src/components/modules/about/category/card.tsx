'use client'

/** libs */
import { useState } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Image, { type ImageProps } from 'next/image'

/** components */
import { ArrowRight } from '@/components/ui/icons-outline'

/** utils */
import { cn } from '@/libs/utils/cn'

type CategoryCardProps = {
  title: string
  description: string
  href: string
  image: ImageProps
}

const CategoryCard = ({ title, description, href, image }: CategoryCardProps) => {
  /** state */
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative aspect-[3/4] overflow-hidden"
    >
      <Link href={href} className="absolute inset-0 z-20" />
      <div className={cn('absolute inset-0 z-10 bg-black/30 transition-colors', { 'bg-black/10': isHovered })} />
      <Image
        {...image}
        alt={title}
        fill
        className={cn('scale-100 object-cover object-center transition-transform duration-300', {
          'scale-110': isHovered,
        })}
      />
      <div className="absolute right-0 bottom-0 left-0 z-10 space-y-4 p-7">
        <div className="space-y-1">
          <h3 className="typo-title-3 font-bold text-white">{title}</h3>
          <motion.p
            className="typo-body-2 overflow-hidden font-bold text-white"
            animate={{ height: isHovered ? 'auto' : 0 }}
          >
            {description}
          </motion.p>
        </div>
        <motion.button
          animate={{ x: isHovered ? 10 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2 text-sm text-white"
        >
          <motion.span
            className={cn('border-blue flex size-8 items-center justify-center rounded-full border transition-colors', {
              'bg-blue': isHovered,
            })}
          >
            <ArrowRight />
          </motion.span>
          <span>Learn More</span>
        </motion.button>
      </div>
    </motion.div>
  )
}

export { CategoryCard }
