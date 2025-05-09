// hooks/useTimeout.ts
import { useCallback, useEffect, useRef } from 'react'

export type TimeoutHandlerType = {
  startTimeout: (key: string, callback: () => void, delay: number) => void
  clearTimeout: (key: string) => void
}

export const useTimeout = (): TimeoutHandlerType => {
  const timeoutRefs = useRef<Record<string, NodeJS.Timeout>>({})

  const startTimeout = useCallback((key: string, callback: () => void, delay: number) => {
    if (timeoutRefs.current[key]) {
      window.clearTimeout(timeoutRefs.current[key])
    }

    timeoutRefs.current[key] = setTimeout(() => {
      callback()
      delete timeoutRefs.current[key]
    }, delay)
  }, [])

  const clearTimeout = useCallback((key: string) => {
    if (timeoutRefs.current[key]) {
      window.clearTimeout(timeoutRefs.current[key])
      delete timeoutRefs.current[key]
    }
  }, [])

  useEffect(() => {
    const currentTimeouts = timeoutRefs.current
    return () => {
      Object.values(currentTimeouts).forEach(window.clearTimeout)
    }
  }, [])

  return { startTimeout, clearTimeout }
}
