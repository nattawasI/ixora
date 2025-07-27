'use client'

import { useEffect, useRef, useState, createContext, useContext } from 'react'
import { motion, useMotionValue } from 'motion/react'
import { cn } from '@/libs/utils/cn'
import { useMediaQuery } from '@/libs/hooks/use-media-query'
import { CursorLogo, CursorScroller } from '@/components/ui/icons-outline'

const CursorContext = createContext({} as { visible: boolean })

export const CursorProvider = ({
  children,
  cursorIcon = 'logo',
}: {
  children: React.ReactNode
  cursorIcon?: 'logo' | 'scroller'
}) => {
  const isTablet = useMediaQuery('(max-width: 1023px)')

  const [visible, setVisible] = useState(false)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (isTablet) return

    let x = 0
    let y = 0

    const handleMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      cursorX.set(x)
      cursorY.set(y)
    }

    const updateCursorTarget = () => {
      const el = document.elementFromPoint(x, y) as HTMLElement | null
      const isTarget = el?.closest('[data-cursor-target]')
      setVisible(!!isTarget)
    }

    const loop = () => {
      updateCursorTarget()
      rafRef.current = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', handleMove)
    loop()

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(rafRef.current!)
    }
  }, [isTablet, cursorX, cursorY])

  if (isTablet) return <>{children}</>

  return (
    <CursorContext.Provider value={{ visible }}>
      {children}
      <motion.div
        className={cn('pointer-events-none fixed top-0 left-0 z-[9999]')}
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
      >
        <motion.div
          className={cn(
            'flex h-[40px] w-[40px] items-center justify-center rounded-full',
            cursorIcon === 'logo' ? 'bg-blue' : 'bg-transparent',
          )}
          initial={{ scale: 0 }}
          animate={{ scale: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ translateX: '-50%', translateY: '-50%' }}
        >
          {cursorIcon === 'logo' ? <CursorLogo /> : <CursorScroller />}
        </motion.div>
      </motion.div>
    </CursorContext.Provider>
  )
}

export const useCursor = () => useContext(CursorContext)
