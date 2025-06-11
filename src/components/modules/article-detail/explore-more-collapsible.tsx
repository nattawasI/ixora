'use client'

import { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { cn } from '@/libs/utils/cn'

const ExploreMoreCollapsible = ({ children, ...props }: React.ComponentProps<'div'>) => {
  const [open, setOpen] = useState(false)

  return (
    <Collapsible open={open} onOpenChange={setOpen} {...props}>
      <h2>
        <CollapsibleTrigger className="typo-title-3 flex h-[3.75rem] w-full items-center justify-center font-bold ring-offset-0 lg:h-[5.625rem]">
          <span className="underline-gray-light-1 decoration-gray-light-1 underline underline-offset-8">
            EXPLORE MORE
          </span>
        </CollapsibleTrigger>
      </h2>
      <CollapsibleContent className="group data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden">
        <div
          className={cn(
            'p-0.5 transition-opacity duration-500 ease-in-out',
            'group-data-[state=closed]:animate-out group-data-[state=open]:animate-in',
            'group-data-[state=closed]:fade-out-0 group-data-[state=open]:fade-in-0',
          )}
        >
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export { ExploreMoreCollapsible }
