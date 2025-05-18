'use client'

import { CardProject, type CardProjectProps } from '@/components/ui/card-project'

const ProjectCard = ({ ...props }: CardProjectProps) => {
  /** แยก file ออกมาเป็น 'use client' เพื่อทำ hover cursor */
  return <CardProject {...props} />
}

export { ProjectCard }
