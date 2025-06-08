'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'motion/react'
import { cn } from '@/libs/utils/cn'
import { SnsShareItems, type SnsShareItemsProps } from '@/components/modules/article-detail/sns-share-items'
import { useSnsShareContext } from '@/components/modules/article-detail/sns-share-context'

const SnsShareFooter = ({ label, title, coverImage }: { label: string } & SnsShareItemsProps) => {
  const { setHideSnsShareSticky } = useSnsShareContext()
  const containerRef = useRef<HTMLDivElement>(null)

  const isInView = useInView(containerRef, {
    amount: 'all',
    margin: '100% 0px 0px 0px',
  })

  useEffect(() => {
    setHideSnsShareSticky(isInView)
  }, [isInView, setHideSnsShareSticky])

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
