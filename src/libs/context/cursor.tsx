'use client'
// remove later
import { use, useState, createContext, ReactNode, useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { useMediaQuery } from '../hooks/use-media-query'
import { CursorLogo, CursorScroller } from '@/components/ui/icons-outline'
import { cn } from '../utils/cn'

type CursorType = 'default' | 'hovered'

type CursorContextType = {
  cursorType: CursorType
  setCursorType: (type: CursorType) => void
}

const CursorContext = createContext<CursorContextType>({
  cursorType: 'default',
  setCursorType: () => {},
})

const CursorProvider = ({
  children,
  cursorIcon = 'logo',
}: {
  children: ReactNode
  cursorIcon?: 'logo' | 'scroller'
}) => {
  /** hook */
  const isTablet = useMediaQuery('(max-width: 1024px)')
  /** states */
  const [cursorType, setCursorType] = useState<CursorType>('default')

  const cursorSize = 40

  // Cursor position tracking
  const mouse = { x: useMotionValue(0), y: useMotionValue(0), scale: useMotionValue(1) }

  const smoothMouse = {
    x: mouse.x,
    y: mouse.y,
    scale: mouse.scale,
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const yPosition = e.clientY - cursorSize / 2
      mouse.x.set(e.clientX - cursorSize / 2)
      mouse.y.set(cursorIcon === 'logo' ? yPosition : yPosition - 100)
      /** 100px == header height */
      mouse.scale.set(1)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouse.x, mouse.y, mouse.scale, cursorSize, cursorIcon])

  if (isTablet) return <>{children}</>

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
      <motion.div
        className={cn(
          'pointer-events-none absolute z-[9999] flex size-0 items-center justify-center rounded-full opacity-0',
          cursorIcon === 'logo' ? 'bg-blue' : 'bg-transparent',
        )}
        animate={{
          opacity: cursorType === 'hovered' ? 0.9 : 0,
          scale: cursorType === 'hovered' ? 1 : 0,
          width: cursorSize,
          height: cursorSize,
        }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
      >
        {cursorIcon === 'logo' ? <CursorLogo /> : <CursorScroller />}
      </motion.div>
    </CursorContext.Provider>
  )
}

const useCursorContext = () => {
  const context = use(CursorContext)
  if (!context) throw new Error('useCursorContext must be used within a CursorProvider')
  return context
}

export { CursorProvider, CursorContext, useCursorContext }
