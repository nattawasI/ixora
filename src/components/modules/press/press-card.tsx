'use client'

import { CardPress, type CardPressProps } from '@/components/ui/card-press'
import { useCursorContext } from '@/libs/context/cursor'
import { cn } from '@/libs/utils/cn'

const PressCard = ({ className, ...props }: CardPressProps) => {
  const { cursorType,setCursorType } = useCursorContext()
  
  const onMouseEnter = () => {
    setCursorType("hovered")
  }

  const onMouseLeave = () => {
    setCursorType("default")
  }
  /** แยก file ออกมาเป็น 'use client' เพื่อทำ hover cursor */
  return <CardPress onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...props} className={ cn( {"cursor-none":cursorType === "hovered"}, className)} />
}

export { PressCard }
