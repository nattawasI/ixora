'use client'

import { useState } from 'react'
import { cn } from '@/libs/utils/cn'
import { Share, Close } from '@/components/ui/icons-outline'
import { SnsShareItems, type SnsShareItemsProps } from '@/components/modules/article-detail/sns-share-items'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { useSnsShareContext } from '@/components/modules/article-detail/sns-share-context'

type SnsShareStickyProps = SnsShareItemsProps & {
  isInModal?: boolean
  className?: string
}

const SnsShareSticky = ({ title, coverImage, isInModal, className }: SnsShareStickyProps) => {
  const [open, setOpen] = useState(false)

  const { hideSnsShareSticky } = useSnsShareContext()

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className={cn(
        'fixed z-10 w-12 max-lg:hidden',
        isInModal ? 'top-[5.625rem]' : 'top-[6.25rem]',
        'transition-opacity duration-300',
        hideSnsShareSticky ? 'pointer-events-none opacity-0' : '',
        className,
      )}
    >
      <div className="flex flex-col items-center">
        <CollapsibleTrigger
          type="button"
          className={cn(
            'group/social-sticky-trigger typo-body-2 order-2 space-y-1.25 font-semibold uppercase',
            isInModal ? 'text-white' : '',
          )}
        >
          <span
            className={cn(
              'flex size-11.5 items-center justify-center transition-colors',
              'group-hover/social-sticky-trigger:bg-blue group-hover/social-sticky-trigger:[&>svg]:text-white',
              isInModal ? 'bg-gray' : 'bg-transition border-gray-light-1 border',
            )}
          >
            {open ? (
              <Close className={cn(isInModal ? 'text-white' : 'text-blue')} />
            ) : (
              <Share className={cn(isInModal ? 'text-white' : 'text-blue')} />
            )}
          </span>
          <span>{open ? 'CLOSE' : 'SHARE'}</span>
        </CollapsibleTrigger>
        <CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down order-1 overflow-hidden">
          <div className="mb-2 space-y-2.5 px-0.5">
            <SnsShareItems title={title} coverImage={coverImage} />
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  )
}

export { SnsShareSticky }
