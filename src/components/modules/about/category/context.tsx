'use client'

import { ProjectCategoryResponse } from '@/libs/directus/type'
import React, { createContext, ReactNode, useContext } from 'react'

type AboutCategoryContextType = {
  categories: ProjectCategoryResponse[]
}

const AboutCategoryContext = createContext<AboutCategoryContextType>({
  categories: [],
})

const AboutCategoryProvider = ({
  children,
  categories,
}: {
  children: ReactNode
  categories: ProjectCategoryResponse[]
}) => {
  /** states */

  return <AboutCategoryContext.Provider value={{ categories }}>{children}</AboutCategoryContext.Provider>
}

const useAboutCategory = () => {
  const context = useContext(AboutCategoryContext)
  if (context === undefined) throw new Error('useAboutCategory must be used within a AboutCategoryProvider')
  return context
}

export { AboutCategoryContext, AboutCategoryProvider, useAboutCategory }
