'use client'

import { cn } from '@/libs/utils/cn'
import { SocialShareItems, type SocialShareItemsProps } from '@/components/modules/article-detail/social-share-items'

const SnsShareFooter = ({ label, title, coverImage }: { label: string } & SocialShareItemsProps) => {
  return (
    <div
      className={cn(
        'flex items-center',
        'max-md:flex-col max-md:items-center max-md:gap-y-2.5',
        'md:flex-row md:justify-between md:gap-x-4',
      )}
    >
      <p className="typo-body-2 text-gray font-bold">{label}</p>
      <div className="flex gap-x-2.5 md:gap-x-3.75">
        <SocialShareItems title={title} coverImage={coverImage} />
      </div>
    </div>
  )
}

export { SnsShareFooter }
