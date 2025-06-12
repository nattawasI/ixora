'use client'

import { useState } from 'react'
import { cn } from '@/libs/utils/cn'
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion'
import { ChevronDown } from '@/components/ui/icons-color/chevron-down'
import { motion } from 'motion/react'
import parse from 'html-react-parser'
import { CareerResponse } from '@/libs/directus/type'


const CareerAccordion = ({ items }: { items: CareerResponse[] }) => {
  const [activeValue, setActiveValue] = useState<string[]>([])

  return (
    <Accordion type="multiple" value={activeValue} onValueChange={setActiveValue} className="space-y-5">
      {items.map((item) => {
        const open = activeValue.includes(item.id)

        return (
          <AccordionItem className="border-gray-light-1 border-b pb-5" key={item.id} value={item.id}>
            <AccordionHeader>
              <AccordionTrigger className="group/accordion-trigger hover-icon-stroke-white flex w-full gap-x-5 pb-5 text-left">
                <span className="flex flex-col items-start gap-y-2.5">
                  <span className="typo-title-3 font-bold">{item.title}</span>
                  <span className="typo-body-2 bg-blue-2 inline-flex h-8.5 items-center rounded-full px-4 font-bold">
                    {item.position_required} Position Required
                  </span>
                </span>
                <span
                  className={cn(
                    'border-blue ml-auto flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300',
                    'group-hover/accordion-trigger:bg-blue group-hover/accordion-trigger:text-white',
                    'group-data-[state=open]/accordion-trigger:rotate-180',
                  )}
                >
                  <ChevronDown className="size-3.5" />
                </span>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent forceMount asChild>
              <motion.div
                initial={false}
                animate={{
                  height: open ? 'auto' : 0,
                  opacity: open ? 1 : 0,
                }}
                className="overflow-hidden"
              >
                <div className="detail-content py-5">{parse(item.requirement)}</div>
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export { CareerAccordion }
