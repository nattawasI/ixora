'use client'

import { CardProject, type CardProjectProps } from '@/components/ui/card-project'
import { cn } from '@/libs/utils/cn'

const ProjectCard = ({ className, ...props }: CardProjectProps) => {
  return <CardProject data-cursor-target className={cn('cursor-none', className)} {...props} />
}

export { ProjectCard }
