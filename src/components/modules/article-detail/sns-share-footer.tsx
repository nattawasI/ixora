'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/libs/utils/cn'
import { SnsShareItems, type SnsShareItemsProps } from '@/components/modules/article-detail/sns-share-items'
import { useSocialShareContext } from '@/components/modules/article-detail/sns-share-context'

const SnsShareFooter = ({ label, title, coverImage }: { label: string } & SnsShareItemsProps) => {
  const { setHideSnsShareSticky } = useSocialShareContext()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkIfInView = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      // ตรวจสอบว่า element ยังอยู่เหนือขอบล่างของหน้าจอ
      const isAboveBottom = rect.top < window.innerHeight
      setHideSnsShareSticky(isAboveBottom)
    }

    // ตรวจสอบตอนโหลดและเมื่อมีการ scroll
    checkIfInView()
    window.addEventListener('scroll', checkIfInView, { passive: true })

    return () => {
      window.removeEventListener('scroll', checkIfInView)
    }
  }, [setHideSnsShareSticky])

  return (
    <div
      ref={containerRef}
      className={cn(
        'flex items-center',
        'max-md:flex-col max-md:items-center max-md:gap-y-2.5',
        'md:flex-row md:justify-between md:gap-x-4',
      )}
    >
      <p className="typo-body-2 text-gray font-bold">{label}</p>
      <div className="flex gap-x-2.5 md:gap-x-3.75">
        <SnsShareItems title={title} coverImage={coverImage} />
      </div>
    </div>
  )
}

export { SnsShareFooter }
