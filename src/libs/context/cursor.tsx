'use client'

import {use, useState, createContext, useRef ,ReactNode, useEffect} from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

type CursorType = "default" | "hovered";

type CursorContextType = {
  cursorType: CursorType;
  setCursorType: (type: CursorType) => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorType: "default",
  setCursorType: () => {},
})

const CursorProvider = ({children}: {children: ReactNode}) => {
  /* refs */
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  /* states */
  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  useGSAP(() => {
    if (!cursorRef.current) return

    gsap.to(cursorRef.current, {
      opacity: cursorType === "hovered" ? 1 : 0,
      scale: cursorType === "hovered" ? 1 : 0.75,
      width: cursorType === "hovered" ? 70 : 0,
      height: cursorType === "hovered" ? 70 : 0,
      x: position.x - 2.1875 * 16,
      y: position.y - 2.1875 * 16,
      duration: 0.4,
      ease: "power2.out",
    })
  }, { dependencies: [cursorType, position], scope: containerRef })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        setPosition({ x: e.clientX, y: e.clientY })
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <CursorContext.Provider value={{cursorType, setCursorType}}>
      {children}
      <div ref={containerRef}>
        <div
          ref={cursorRef}
          className="fixed z-[9999] pointer-events-none"
          style={{
            left: 0,
            top: 0,
            opacity: 0,
          }}
        >
          <div className="size-[4.375rem] bg-blue/90 rounded-full flex items-center justify-center">
            {/* SVG Arrow */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.22266 1H15.0004V8.77778" stroke="white" />
              <path d="M15 1L1 15" stroke="white" />
            </svg>
          </div>
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

export {CursorProvider, CursorContext, useCursorContext}