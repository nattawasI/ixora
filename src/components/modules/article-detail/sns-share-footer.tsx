'use client'

import { useEffect, useRef, useCallback } from 'react'
import { cn } from '@/libs/utils/cn'
import { SnsShareItems, type SnsShareItemsProps } from '@/components/modules/article-detail/sns-share-items'
import { useSnsShareContext } from '@/components/modules/article-detail/sns-share-context'

const SnsShareFooter = ({
  label,
  title,
  coverImage,
  className,
  ...props
}: React.ComponentProps<'div'> & SnsShareItemsProps & { label: string }) => {
  const { setHideSnsShareSticky } = useSnsShareContext()
  const containerRef = useRef<HTMLDivElement>(null)

  const checkIfInView = useCallback(() => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const isBottomBelowViewport = rect.bottom > window.innerHeight
    const isTopAboveViewportBottom = rect.top < window.innerHeight

    if (isBottomBelowViewport) {
      setHideSnsShareSticky(false)
    } else if (isTopAboveViewportBottom) {
      setHideSnsShareSticky(true)
    }
  }, [setHideSnsShareSticky])

  useEffect(() => {
    if (!containerRef.current) return

    // Check if overlay exists
    const overlay = document.getElementById('page-dialog-overlay')
    const scrollTarget = overlay || window

    // Initial check
    checkIfInView()

    // Add scroll event listener
    scrollTarget.addEventListener('scroll', checkIfInView, { passive: true })

    // Cleanup
    return () => {
      scrollTarget.removeEventListener('scroll', checkIfInView)
    }
  }, [checkIfInView])

  return (
    <div
      ref={containerRef}
      className={cn(
        'flex items-center',
        'max-md:flex-col max-md:items-center max-md:gap-y-2.5',
        'md:flex-row md:justify-between md:gap-x-4',
        className,
      )}
      {...props}
    >
      <p className="typo-body-2 text-gray font-bold">{label}</p>
      <div className="flex gap-x-2.5 md:gap-x-3.75">
        <SnsShareItems title={title} coverImage={coverImage} />
      </div>
    </div>
  )
}

export { SnsShareFooter }
