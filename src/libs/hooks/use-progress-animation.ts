import { useState, useEffect } from 'react'

type Props = {
  isActive: boolean
  duration: number
}

export const useProgressAnimation = ({ isActive, duration = 5000 }: Props): number => {
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    if (!isActive) {
      setProgress(100)
      return
    }

    const startTime = Date.now()

    const updateProgress = () => {
      const elapsed = Date.now() - startTime
      const remaining = Math.max(0, 100 - (elapsed / (duration - 200)) * 100)
      setProgress(remaining)

      if (remaining > 0) {
        requestAnimationFrame(updateProgress)
      }
    }

    const animationFrame = requestAnimationFrame(updateProgress)
    return () => cancelAnimationFrame(animationFrame)
  }, [isActive, duration])

  return progress
}
