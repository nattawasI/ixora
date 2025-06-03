'use client'

import { useState } from 'react'
import { cn } from '@/libs/utils/cn'
import { Share, Close } from '@/components/ui/icons-outline'
import { SocialShareItems, type SocialShareItemsProps } from '@/components/modules/article-detail/social-share-items'

const SnsShareSticky = ({ title, coverImage }: SocialShareItemsProps) => {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={cn(
        'fixed top-[3.75rem] z-10 w-11.5 lg:top-[6.25rem]',
        'max-[88.75rem]:right-5',
        'min-[88.75rem]:right-1/2 min-[88.75rem]:translate-x-[calc(38.75rem+4.125rem)]',
        'flex flex-col',
      )}
    >
      <button
        type="button"
        className={cn('group typo-body-2 order-2 space-y-1.25 font-bold uppercase')}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="border-gray-light-1 bg-transition flex size-11.5 items-center justify-center border">
          {open ? <Close className="text-blue" /> : <Share className="text-blue" />}
        </span>
        <span>{open ? 'CLOSE' : 'SHARE'}</span>
      </button>
      {open ? (
        <div className="order-1 mb-2.5 space-y-2.5">
          <SocialShareItems title={title} coverImage={coverImage} />
        </div>
      ) : null}
    </div>
  )
}

export { SnsShareSticky }
