'use client'

import { cn } from '@/libs/utils/cn'
import { ButtonSquare } from '@/components/ui/button-square'
import { Share } from '@/components/ui/icons-outline/share'
import { SocialShareItems, type SocialShareItemsProps } from '@/components/modules/article-detail/social-share-items'

const SnsShareSticky = ({ title, coverImage }: SocialShareItemsProps) => {
  return (
    <button type="button" className={cn('group typo-body-2 space-y-1.25 font-bold uppercase')}>
      <span className="border-gray-light-1 bg-transition flex size-11.5 items-center justify-center border">
        <Share className="text-blue" />
      </span>
      <span>SHARE</span>
    </button>
  )
}

export { SnsShareSticky }
