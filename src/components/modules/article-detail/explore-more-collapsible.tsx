'use client'

import { Collapsible, CollapsibleContent, CollapsibleTrigger, type CollapsibleProps } from '@radix-ui/react-collapsible'
import { cn } from '@/libs/utils/cn'

type ExploreMoreCollapsibleProps = CollapsibleProps

const ExploreMoreCollapsible = ({ children, ...props }: ExploreMoreCollapsibleProps) => {
  return (
    <Collapsible {...props}>
      <h2>
        <CollapsibleTrigger className="flex h-[3.75rem] w-full items-center justify-center ring-offset-0 lg:h-[5.625rem]">
          <span className="underline-gray-light-1 decoration-gray-light-1 typo-title-3 font-semibold underline underline-offset-8">
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

export { ExploreMoreCollapsible, type ExploreMoreCollapsibleProps }
