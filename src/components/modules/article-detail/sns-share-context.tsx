'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type SocialShareContextType = {
  hideSnsShareSticky: boolean
  setHideSnsShareSticky: (hide: boolean) => void
}

const SocialShareContext = createContext<SocialShareContextType | undefined>(undefined)

type SocialShareProviderProps = {
  children: ReactNode
}

export const SocialShareProvider = ({ children }: SocialShareProviderProps) => {
  const [hideSnsShareSticky, setHideSnsShareSticky] = useState(false)

  return (
    <SocialShareContext.Provider value={{ hideSnsShareSticky, setHideSnsShareSticky }}>
      {children}
    </SocialShareContext.Provider>
  )
}

export const useSocialShareContext = (): SocialShareContextType => {
  const context = useContext(SocialShareContext)
  if (context === undefined) {
    throw new Error('useSocialShare must be used within a SocialShareProvider')
  }
  return context
}
