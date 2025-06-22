'use client'

import { useEffect } from 'react'
import { useProjectList } from '@/components/modules/projects/project-list-context'
import type { ProjectDetailResponse } from '@/libs/directus/type'

export const UpdateProjectListContext = ({ data }: { data: ProjectDetailResponse[] }) => {
  const { setProjectList } = useProjectList()

  useEffect(() => {
    setProjectList(data)
  }, [data, setProjectList])

  return null
}
