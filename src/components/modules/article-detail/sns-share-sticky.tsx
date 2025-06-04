'use client'

import { useState } from 'react'
import { cn } from '@/libs/utils/cn'
import { Share, Close } from '@/components/ui/icons-outline'
import { SnsShareItems, type SnsShareItemsProps } from '@/components/modules/article-detail/sns-share-items'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion'
import { useSocialShareContext } from '@/components/modules/article-detail/sns-share-context'

type SnsShareStickyProps = SnsShareItemsProps & {
  inLayout: 'page' | 'modal'
}

const SnsShareSticky = ({ title, coverImage, inLayout }: SnsShareStickyProps) => {
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
        'fixed top-[3.75rem] z-10 w-12 pt-0.5 max-lg:hidden lg:top-[6.25rem]',
        'max-[88.75rem]:right-5',
        'min-[88.75rem]:right-1/2 min-[88.75rem]:translate-x-[calc(38.75rem+4.125rem)]',
        'transition-opacity duration-300',
        hideSnsShareSticky ? 'pointer-events-none opacity-0' : '',
      )}
    >
      <AccordionItem value="share" className="flex flex-col items-center">
        <AccordionTrigger
          type="button"
          className={cn(
            'group typo-body-2 order-2 space-y-1.25 font-bold uppercase',
            inLayout === 'modal' ? 'text-white' : '',
          )}
        >
          <span
            className={cn(
              'border-gray-light-1 flex size-11.5 items-center justify-center border transition-colors',
              'group-hover:bg-blue group-hover:[&>svg]:text-white',
              inLayout === 'page' ? 'bg-transition' : '',
              inLayout === 'modal' ? 'bg-gray' : '',
            )}
          >
            {isOpen ? (
              <Close className={cn(inLayout === 'page' ? 'text-blue' : '', inLayout === 'modal' ? 'text-white' : '')} />
            ) : (
              <Share className={cn(inLayout === 'page' ? 'text-blue' : '', inLayout === 'modal' ? 'text-white' : '')} />
            )}
          </span>
          <span>{isOpen ? 'CLOSE' : 'SHARE'}</span>
        </AccordionTrigger>
        <AccordionContent className="group data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down order-1 overflow-hidden">
          <div className="mb-2 space-y-2.5 p-0.5">
            <SnsShareItems title={title} coverImage={coverImage} />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export { SnsShareSticky }
