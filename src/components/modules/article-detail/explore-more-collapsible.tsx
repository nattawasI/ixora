'use client'

import { useState } from 'react'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { motion } from 'motion/react'

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
      <CollapsibleContent forceMount asChild>
        <motion.div
          initial={false}
          animate={{
            height: open ? 'auto' : 0,
            opacity: open ? 1 : 0,
          }}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export { ExploreMoreCollapsible }
