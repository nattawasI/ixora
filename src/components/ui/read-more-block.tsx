'use client'

import { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger, CollapsibleProps } from '@radix-ui/react-collapsible'
import { ChevronDown } from '@/components/ui/icons-color/chevron-down'
import { motion } from 'motion/react'
import { cn } from '@/libs/utils/cn'

type ReadMoreBlockProps = CollapsibleProps &
  React.ComponentProps<'div'> & {
    contentLead: React.ReactNode
    contentMore: React.ReactNode
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  }
const ReadMoreBlock = ({ contentLead, contentMore, ...props }: ReadMoreBlockProps) => {
  const [defaultOpenState, setDefaultOpenState] = useState(false)

  return (
    <Collapsible open={defaultOpenState} onOpenChange={setDefaultOpenState} {...props}>
      {contentLead}
      <CollapsibleContent forceMount asChild>
        <motion.div
          initial={false}
          animate={{
            height: defaultOpenState ? 'auto' : 0,
            opacity: defaultOpenState ? 1 : 0,
          }}
          className="overflow-hidden"
        >
          <div className="pt-5">{contentMore}</div>
        </motion.div>
      </CollapsibleContent>
      <CollapsibleTrigger className="typo-body-3 text-gray mt-4 inline-flex items-center gap-x-1.25 font-bold uppercase">
        <span>{defaultOpenState ? 'SHOW LESS' : 'READ MORE'}</span>
        <ChevronDown
          className={cn('-mt-0.5 transition-transform duration-300', defaultOpenState ? 'rotate-180' : '')}
        />
      </CollapsibleTrigger>
    </Collapsible>
  )
}

export { ReadMoreBlock }
