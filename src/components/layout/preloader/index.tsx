'use client'

/** libs */
import { useEffect, useState } from 'react'
import { RemoveScroll } from 'react-remove-scroll'
import { AnimatePresence, motion, useAnimation } from 'motion/react'

/** components */
import { useMediaQuery } from '@/libs/hooks/use-media-query'
import { PreloaderFooter } from '@/components/layout/preloader/footer'

/** utils */
import { cn } from '@/libs/utils/cn'
import { setVisitedCookie } from './set-visited-cookie'

const Preloader = () => {
  /** hook */
  const isMobile = useMediaQuery('(max-width: 768px)')

  /** state */
  const [isComplete, setIsComplete] = useState<boolean>(false)
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isReady, setIsReady] = useState<boolean>(false)

  /** animation */
  const containerControls = useAnimation()
  const logoControls = useAnimation()
  const footerControls = useAnimation()
  const lineTopLeftControls = useAnimation()
  const lineTopRightControls = useAnimation()
  const lineBottomLeftControls = useAnimation()
  const lineBottomRightControls = useAnimation()

  const lineTargetDuration = { transition: { delay: 1, duration: 0.3 } }
  const yPosition = 18
  const rotatePosition = 45

  const logoVariants = {
    hidden: { scale: 0.5, opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    visible: () => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    }),
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (!isClicked && isReady) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (!isClicked && isReady) {
      setIsHovered(false)
    }
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => {
    if (!isReady) return
    e.stopPropagation()

    setIsClicked(true)

    const logoTarget = {
      width: 24,
      height: 24,
      top: isMobile ? 17 : 37,
      left: isMobile ? 19 : 40,
      transition: { duration: 1.2, ease: [0.455, 0.03, 0.515, 0.955] },
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

    footerControls.start({ opacity: 0, transition: { delay: 0.2, duration: 0.4, ease: 'easeInOut' } })

    containerControls
      .start({
        opacity: 0,
        pointerEvents: 'all',
        transition: { delay: 1.2, duration: 0.4, ease: 'easeInOut' },
      })
      .then(() => {
        setIsComplete(true)
        setVisitedCookie()
      })
  }

  useEffect(() => {
    const startAnimations = async () => {
      await Promise.all([
        logoControls.start({ opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeInOut' } }),
        footerControls.start({ opacity: 1, transition: { duration: 0.6, delay: 1.2, ease: 'easeInOut' } }),
      ])
      setIsReady(true)
    }
    startAnimations()
  }, [logoControls, footerControls])

  if (isComplete) return null

  return (
    <RemoveScroll enabled={!isComplete}>
      <AnimatePresence mode="wait">
        <motion.div animate={containerControls} className="fixed inset-0 z-[9999] flex flex-col bg-white">
          <div
            role="button"
            tabIndex={0}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.key === 'Enter') handleClick(e)
            }}
            className={cn('group m-auto flex flex-col items-center justify-center gap-y-8 hover:cursor-pointer', {
              'pointer-events-none': !isReady || isClicked,
            })}
          >
            <div className="relative size-32">
              <motion.svg
                width="128"
                height="128"
                viewBox="0 0 128 128"
                animate={logoControls}
                initial="hidden"
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

            <motion.div
              animate={{
                opacity: isClicked ? 0 : 1,
                transition: { duration: 0.4, delay: isMobile ? 0.8 : 0, ease: 'easeOut' },
              }}
              className="space-y-2 text-center"
            >
              <motion.div
                animate={{
                  opacity: 1,
                  width: isHovered ? '100%' : '37.05%',
                  transition: { duration: 0.4, ease: 'easeOut' },
                }}
                className="mx-auto w-[37.05%] overflow-hidden whitespace-nowrap"
              >
                <motion.p
                  animate="visible"
                  initial="hidden"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.6, delay: 0.4, ease: 'easeOut' } },
                  }}
                  className={cn('typo-title-3--rps text-gray font-semibold uppercase', {
                    'text-blue': isClicked || isHovered,
                  })}
                >
                  EXPLORE OUR PROJECTS
                </motion.p>
              </motion.div>
              <motion.p
                animate="visible"
                initial="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.6, delay: 0.8, ease: 'easeOut' } },
                }}
                className="typo-body-1 text-gray uppercase"
              >
                LIMITLESS POSSIBILITY
              </motion.p>
            </motion.div>
          </div>

          <motion.div
            animate={footerControls}
            initial="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.6, delay: 1.2, ease: 'easeOut' } },
            }}
            className="fixed bottom-6 left-0 flex w-full justify-center px-4"
          >
            <PreloaderFooter />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </RemoveScroll>
  )
}

export { Preloader }
