'use client'

import { use, useState, createContext, ReactNode, useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { useMediaQuery } from '../hooks/use-media-query'

type CursorType = 'default' | 'hovered'

type CursorContextType = {
  cursorType: CursorType
  setCursorType: (type: CursorType) => void
}

const CursorContext = createContext<CursorContextType>({
  cursorType: 'default',
  setCursorType: () => {},
})

const CursorProvider = ({ children }: { children: ReactNode }) => {
  /** hook */
  const isTablet = useMediaQuery('(max-width: 1024px)')
  /** states */
  const [cursorType, setCursorType] = useState<CursorType>('default')

  const cursorSize = 70

  // Cursor position tracking
  const mouse = { x: useMotionValue(0), y: useMotionValue(0), scale: useMotionValue(1) }

  const smoothMouse = {
    x: mouse.x,
    y: mouse.y,
    scale: mouse.scale,
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x.set(e.clientX - cursorSize / 2)
      mouse.y.set(e.clientY - cursorSize / 2)
      mouse.scale.set(1)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouse.x, mouse.y, mouse.scale, cursorSize])

  if (isTablet) return <>{children}</>

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
      <motion.div
        className="bg-blue pointer-events-none fixed z-[9999] size-0 rounded-full opacity-0 backdrop-blur-2xl"
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
        <div className="flex size-full items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.22266 1H15.0004V8.77778" stroke="white" />
            <path d="M15 1L1 15" stroke="white" />
          </svg>
        </div>
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
