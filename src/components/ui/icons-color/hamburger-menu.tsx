'use client'

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { cn } from '@/libs/utils/cn';

gsap.registerPlugin(useGSAP);

type HamburgerMenuProps = React.ComponentProps<'div'> & {
  isShowMenu: boolean
}
const HamburgerMenu = ({ isShowMenu, ...props }: HamburgerMenuProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineTopLeftRef = useRef<HTMLSpanElement>(null)
  const lineTopRightRef = useRef<HTMLSpanElement>(null)
  const lineBottomLeftRef = useRef<HTMLSpanElement>(null)
  const lineBottomRightRef = useRef<HTMLSpanElement>(null)
  
  useGSAP(() => {
    gsap.to(
      [lineTopLeftRef.current, lineBottomRightRef.current],
      {
        rotation: isShowMenu ? 45 : 0,
        duration: 0.1,
      }
    )
    gsap.to(
      [lineTopRightRef.current, lineBottomLeftRef.current],
      {
        rotation: isShowMenu ? -45 : 0,
        duration: 0.1,
      }
    )
  }, {dependencies: [isShowMenu],scope: containerRef, revertOnUpdate: true})

  return (
      <div ref={containerRef} className="relative size-[1.625rem]" {...props }>
        <span
          ref={lineTopLeftRef}
          className={cn("absolute w-[0.625rem] h-0.5 top-2 bg-blue-2 transition-all origin-right", isShowMenu ? '-left-0.5' : 'left-0')}
        />
        <span
          ref={lineTopRightRef}
          className={cn("absolute w-[0.625rem] h-0.5 top-2 bg-blue transition-all origin-left", isShowMenu ? '-right-0.5' : 'right-0')}
        />
        <span
          ref={lineBottomLeftRef}
          className={cn("absolute w-[0.625rem] h-0.5 bottom-2 bg-blue transition-all origin-right", isShowMenu ? '-left-0.5' : 'left-0')}
        />
        <span
          ref={lineBottomRightRef}
          className={cn("absolute w-[0.625rem] h-0.5 bottom-2 bg-blue-2 transition-all origin-left", isShowMenu ? '-right-0.5' : 'right-0')}
        />
    </div>
  )
}

export { HamburgerMenu }