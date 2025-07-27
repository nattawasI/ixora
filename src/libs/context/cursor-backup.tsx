'use client'
// remove later
import { use, useState, createContext, useRef, ReactNode, useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

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
  /* refs */
  const cursorRef = useRef<HTMLDivElement>(null)

  /* states */
  const [cursorType, setCursorType] = useState<CursorType>('default')
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  useGSAP(
    () => {
      if (!cursorRef.current) return

      gsap.to(cursorRef.current, {
        opacity: cursorType === 'hovered' ? 0.9 : 0,
        width: cursorType === 'hovered' ? 70 : 32,
        height: cursorType === 'hovered' ? 70 : 32,
        x: position.x - 2.1875 * 16,
        y: position.y - 2.1875 * 16,
        duration: 0.4,
        ease: 'power2.out',
      })
    },
    { dependencies: [cursorType, position], scope: cursorRef },
  )

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        setPosition({ x: e.clientX, y: e.clientY })
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
      <div
        ref={cursorRef}
        className="bg-blue pointer-events-none fixed top-0 left-0 z-[9999] rounded-full opacity-0 backdrop-blur-2xl"
      >
        <div className="flex h-full w-full items-center justify-center">
          {/* SVG Arrow */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.22266 1H15.0004V8.77778" stroke="white" />
            <path d="M15 1L1 15" stroke="white" />
          </svg>
        </div>
      </div>
    </CursorContext.Provider>
  )
}

const useCursorContext = () => {
  const context = use(CursorContext)

  if (!context) {
    throw new Error('useCursorContext must be used within a CursorProvider')
  }

  return context
}

export { CursorProvider, CursorContext, useCursorContext }
