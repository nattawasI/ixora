'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useAnimation } from 'motion/react'
import { cn } from '@/libs/utils/cn'
import { useMediaQuery } from '@/libs/hooks/use-media-query'
import { PreloaderFooter } from '@/components/layout/preloader/footer'

const Preloader = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [isComplete, setIsComplete] = useState<boolean>(false)
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const containerControls = useAnimation()
  const logoControls = useAnimation()
  const lineTopLeftControls = useAnimation()
  const lineTopRightControls = useAnimation()
  const lineBottomLeftControls = useAnimation()
  const lineBottomRightControls = useAnimation()
  const boxTextControls = useAnimation()

  const lineTargetDuration = {
    transition: { delay: 1, duration: 0.3 },
  }
  const yPosition = 18
  const rotatePosition = 45

  const logoVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: () => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    }),
  }

  const handleMouseEnter = () => {
    if (!isClicked) {
      boxTextControls.start({ width: '100%', transition: { duration: 0.25, ease: 'easeOut' } })
    }
  }

  const handleMouseLeave = () => {
    if (!isClicked) {
      boxTextControls.start({ width: '37.05%', transition: { duration: 0.25, ease: 'easeOut' } })
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setIsClicked(true)

    const logoTarget = {
      width: 26,
      height: 26,
      top: isMobile ? 16 : 37,
      left: isMobile ? 16 : 40,
      transition: { duration: 1, ease: 'easeInOut' },
    }

    logoControls.start(logoTarget)

    lineTopLeftControls.start({
      ...lineTargetDuration,
      y: yPosition,
      rotate: -rotatePosition,
    })

    lineTopRightControls.start({
      ...lineTargetDuration,
      y: yPosition,
      rotate: rotatePosition,
    })

    lineBottomLeftControls.start({
      ...lineTargetDuration,
      y: -yPosition,
      rotate: rotatePosition,
    })

    lineBottomRightControls.start({
      ...lineTargetDuration,
      y: -yPosition,
      rotate: -rotatePosition,
    })

    containerControls
      .start({
        opacity: 0,
        pointerEvents: 'all',
        transition: { delay: 1.5, duration: 0.2, ease: 'easeInOut' },
      })
      .then(() => setIsComplete(true))
  }

  if (isComplete) return null

  return (
    <AnimatePresence mode="wait">
      <motion.div animate={containerControls} className="fixed inset-0 z-[9999] flex flex-col bg-white">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className={cn('group m-auto flex flex-col items-center justify-center gap-y-8 hover:cursor-pointer', {
            'pointer-events-none': isClicked,
          })}
        >
          <div className="relative size-32">
            <motion.svg
              width="128"
              height="128"
              viewBox="0 0 128 128"
              animate={logoControls}
              variants={logoVariants}
              className="fixed size-32"
            >
              <motion.line
                x1="4"
                y1="4"
                x2="44"
                y2="44"
                stroke="#89cee7"
                strokeWidth="8"
                animate={lineTopLeftControls}
              />
              <motion.line
                x1="124"
                y1="4"
                x2="84"
                y2="44"
                stroke="#009bc9"
                strokeWidth="8"
                animate={lineTopRightControls}
              />
              <motion.line
                x1="4"
                y1="124"
                x2="44"
                y2="84"
                stroke="#009bc9"
                strokeWidth="8"
                animate={lineBottomLeftControls}
              />
              <motion.line
                x1="124"
                y1="124"
                x2="84"
                y2="84"
                stroke="#89cee7"
                strokeWidth="8"
                animate={lineBottomRightControls}
              />
            </motion.svg>
          </div>

          <div className="space-y-2 text-center">
            <motion.div animate={boxTextControls} className="mx-auto w-[37.05%] overflow-hidden whitespace-nowrap">
              <p className={cn('typo-title-3 text-gray font-bold uppercase', { 'text-blue': isClicked })}>
                EXPLORE OUR PROJECTS
              </p>
            </motion.div>
            <motion.p className="typo-body-1 text-gray uppercase">LIMITLESS POSSIBILITY</motion.p>
          </div>
        </div>

        <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
          <PreloaderFooter />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export { Preloader }
