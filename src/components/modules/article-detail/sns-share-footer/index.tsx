'use client'

import { cn } from '@/libs/utils/cn'
import { SocialShare, type SnsShareProps } from '@/components/modules/common/social-share'

const SnsShareFooter = ({ label, title, coverImage }: { label: string } & SnsShareProps) => {
  return (
    <div
      className={cn(
        'flex items-center',
        'max-lg:flex-col max-lg:items-center max-lg:gap-y-2.5',
        'lg:flex-row lg:justify-between lg:gap-x-4 lg:py-7',
      )}
    >
      <p className="typo-body-2 text-gray font-bold">{label}</p>
      <div className="flex gap-x-2.5 md:gap-x-3.75">
        <SocialShare title={title} coverImage={coverImage} />
      </div>
    </div>
  )
}

export { SnsShareFooter }
