'use client'

import { CardProject, type CardProjectProps } from '@/components/ui/card-project'
import { useCursorContext } from '@/libs/context/cursor'
import { cn } from '@/libs/utils/cn'

const ProjectCard = ({ className, ...props }: CardProjectProps) => {
  const { cursorType, setCursorType } = useCursorContext()

  const onMouseEnter = () => {
    setCursorType('hovered')
  }

  const onMouseLeave = () => {
    setCursorType('default')
  }

  return (
    <CardProject
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
      className={cn({ 'cursor-none': cursorType === 'hovered' }, className)}
    />
  )
}

export { ProjectCard }
