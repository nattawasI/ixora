'use client'

import { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { ChevronDown } from '@/components/ui/icons-color/chevron-down'
import { motion } from 'motion/react'
import { cn } from '@/libs/utils/cn'

type ReadMoreBlockProps = React.ComponentProps<'div'> & {
  showContentSlot?: React.ReactNode
  hiddenContentSlot?: React.ReactNode
}
const ReadMoreBlock = ({ showContentSlot, hiddenContentSlot, ...props }: ReadMoreBlockProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Collapsible open={open} onOpenChange={setOpen} {...props}>
      {showContentSlot}
      <CollapsibleContent forceMount asChild>
        <motion.div
          initial={false}
          animate={{
            height: open ? 'auto' : 0,
            opacity: open ? 1 : 0,
          }}
          className="overflow-hidden"
        >
          <div className="pt-5">{hiddenContentSlot}</div>
        </motion.div>
      </CollapsibleContent>
      <CollapsibleTrigger className="typo-body-3 text-gray mt-4 inline-flex items-center gap-x-1.25 font-bold uppercase">
        <span>{open ? 'SHOW LESS' : 'READ MORE'}</span>
        <ChevronDown className={cn('-mt-0.5 transition-transform duration-300', open ? 'rotate-180' : '')} />
      </CollapsibleTrigger>
    </Collapsible>
  )
}

export { ReadMoreBlock }
