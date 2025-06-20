'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import type { ProjectDetailResponse } from '@/libs/directus/type'

type ProjectListContextType = {
  projectList: ProjectDetailResponse[]
  setProjectList: (projectList: ProjectDetailResponse[]) => void
}

const ProjectListContext = createContext<ProjectListContextType | undefined>(undefined)

type ProjectListProviderProps = {
  children: ReactNode
  initialProjectList?: ProjectDetailResponse[]
}

export const ProjectListProvider = ({ children, initialProjectList = [] }: ProjectListProviderProps) => {
  const [projectList, setProjectList] = useState<ProjectDetailResponse[]>(initialProjectList)
  return <ProjectListContext.Provider value={{ projectList, setProjectList }}>{children}</ProjectListContext.Provider>
}

export const useProjectList = () => {
  const context = useContext(ProjectListContext)
  if (context === undefined) throw new Error('useProjectList must be used within a ProjectListProvider')
  return context
}
