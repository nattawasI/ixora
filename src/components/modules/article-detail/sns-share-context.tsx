'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type SnsShareContextType = {
  hideSnsShareSticky: boolean
  setHideSnsShareSticky: (hide: boolean) => void
}

const SnsShareContext = createContext<SnsShareContextType | undefined>(undefined)

type SnsShareProviderProps = {
  children: ReactNode
}

export const SnsShareProvider = ({ children }: SnsShareProviderProps) => {
  const [hideSnsShareSticky, setHideSnsShareSticky] = useState(false)

  return (
    <SnsShareContext.Provider value={{ hideSnsShareSticky, setHideSnsShareSticky }}>
      {children}
    </SnsShareContext.Provider>
  )
}

export const useSnsShareContext = (): SnsShareContextType => {
  const context = useContext(SnsShareContext)
  if (context === undefined) {
    throw new Error('useSnsShare must be used within a SnsShareProvider')
  }
  return context
}
