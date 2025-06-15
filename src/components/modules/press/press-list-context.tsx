'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import type { NewsResponse } from '@/libs/directus/type'

type PressListContextType = {
  pressList: NewsResponse[]
  setPressList: (pressList: NewsResponse[]) => void
}

const PressListContext = createContext<PressListContextType | undefined>(undefined)

type PressListProviderProps = {
  children: ReactNode
  initialPressList?: NewsResponse[]
}

export const PressListProvider = ({ children, initialPressList = [] }: PressListProviderProps) => {
  const [pressList, setPressList] = useState<NewsResponse[]>(initialPressList)
  return <PressListContext.Provider value={{ pressList, setPressList }}>{children}</PressListContext.Provider>
}

export const usePressList = () => {
  const context = useContext(PressListContext)
  if (context === undefined) throw new Error('usePressList must be used within a PressListProvider')
  return context
}
