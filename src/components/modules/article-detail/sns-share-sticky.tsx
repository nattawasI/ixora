'use client'

import { useState } from 'react'
import { cn } from '@/libs/utils/cn'
import { Share, Close } from '@/components/ui/icons-outline'
import { SnsShareItems, type SnsShareItemsProps } from '@/components/modules/article-detail/sns-share-items'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion'
import { useSocialShareContext } from '@/components/modules/article-detail/sns-share-context'

type SnsShareStickyProps = SnsShareItemsProps & {
  isInModal?: boolean
  className?: string
}

const SnsShareSticky = ({ title, coverImage, isInModal, className }: SnsShareStickyProps) => {
  const [value, setValue] = useState('')

  const isOpen = value === 'share'

  const { hideSnsShareSticky } = useSocialShareContext()

  return (
    <Accordion
      type="single"
      collapsible
      value={value}
      onValueChange={setValue}
      className={cn(
        'fixed z-10 w-12 max-lg:hidden',
        isInModal ? 'top-[5.625rem]' : 'top-[6.25rem]',
        'transition-opacity duration-300',
        hideSnsShareSticky ? 'pointer-events-none opacity-0' : '',
        className,
      )}
    >
      <AccordionItem value="share" className="flex flex-col items-center">
        <AccordionTrigger
          type="button"
          className={cn('group typo-body-2 order-2 space-y-1.25 font-bold uppercase', isInModal ? 'text-white' : '')}
        >
          <span
            className={cn(
              'flex size-11.5 items-center justify-center transition-colors',
              'group-hover:bg-blue group-hover:[&>svg]:text-white',
              isInModal ? 'bg-gray' : 'bg-transition border-gray-light-1 border',
            )}
          >
            {isOpen ? (
              <Close className={cn(isInModal ? 'text-white' : 'text-blue')} />
            ) : (
              <Share className={cn(isInModal ? 'text-white' : 'text-blue')} />
            )}
          </span>
          <span>{isOpen ? 'CLOSE' : 'SHARE'}</span>
        </AccordionTrigger>
        <AccordionContent className="group data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down order-1 overflow-hidden">
          <div className="mb-2 space-y-2.5 px-0.5">
            <SnsShareItems title={title} coverImage={coverImage} />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export { SnsShareSticky }
