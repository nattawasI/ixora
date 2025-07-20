'use client'

import { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger, CollapsibleProps } from '@radix-ui/react-collapsible'
import { ChevronDown } from '@/components/ui/icons-color/chevron-down'
import { AccordionContentInner } from '@/components/ui/accordion-content-inner'
import { motion, type AnimationDefinition } from 'motion/react'
import { cn } from '@/libs/utils/cn'

type ReadMoreBlockProps = CollapsibleProps &
  React.ComponentProps<'div'> & {
    contentLead: React.ReactNode
    contentMore: React.ReactNode
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    onAnimationComplete?: (definition: AnimationDefinition) => void
  }
const ReadMoreBlock = ({ contentLead, contentMore, onAnimationComplete, ...props }: ReadMoreBlockProps) => {
  const [defaultOpenState, setDefaultOpenState] = useState<boolean>(false)

  const openState = props.open || defaultOpenState
  const handleOpenChange = (open: boolean) => props.onOpenChange?.(open) ?? setDefaultOpenState(open)

  return (
    <Collapsible open={openState} onOpenChange={handleOpenChange} {...props}>
      {contentLead}
      <CollapsibleContent forceMount asChild>
        <motion.div
          initial={false}
          animate={{
            height: openState ? 'auto' : 0,
            opacity: openState ? 1 : 0,
          }}
          className="overflow-hidden"
          onAnimationComplete={onAnimationComplete}
        >
          <AccordionContentInner open={openState}>{contentMore}</AccordionContentInner>
        </motion.div>
      </CollapsibleContent>
      <CollapsibleTrigger className="typo-body-3 text-gray mt-4 inline-flex items-center gap-x-1.25 font-semibold uppercase">
        <span>{openState ? 'SHOW LESS' : 'READ MORE'}</span>
        <ChevronDown className={cn('-mt-0.5 transition-transform duration-300', openState ? 'rotate-180' : '')} />
      </CollapsibleTrigger>
    </Collapsible>
  )
}

export { ReadMoreBlock }
