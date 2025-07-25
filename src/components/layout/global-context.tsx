'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type GlobalContextType = {
  contactActiveValue: string[]
  setContactActiveValue: (value: string[]) => void
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

type GlobalContextProviderProps = {
  children: ReactNode
}

export function GlobalProvider({ children }: GlobalContextProviderProps) {
  const [contactActiveValue, setContactActiveValue] = useState<string[]>([])

  return (
    <GlobalContext.Provider value={{ contactActiveValue, setContactActiveValue }}>{children}</GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  const context = useContext(GlobalContext)
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within an GlobalContextProvider')
  }
  return context
}
