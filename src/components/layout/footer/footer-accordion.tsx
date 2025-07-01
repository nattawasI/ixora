'use client'

import { useState } from 'react'
import { cn } from '@/libs/utils/cn'
import { useMediaQuery } from '@/libs/hooks/use-media-query'
import { ChevronDown } from '@/components/ui/icons-color/chevron-down'
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion'
import { AccordionContentInner } from '@/components/ui/accordion-content-inner'
import { motion } from 'motion/react'

const MotionAccordionContentInner = motion.create(AccordionContentInner)

type FooterAccordionProps = {
  items: {
    id: string
    title: string
    content: React.ReactNode
  }[]
  className?: string
}

const FooterAccordion = ({ items, className }: FooterAccordionProps) => {
  const isLaptopUp = useMediaQuery('(min-width: 1024px)')

  const [activeValue, setActiveValue] = useState<string>('')

  return (
    <Accordion
      type="single"
      collapsible
      orientation={isLaptopUp ? 'horizontal' : 'vertical'}
      value={activeValue}
      onValueChange={(value) => setActiveValue(value)}
      className={cn('grid gap-5 lg:grid-cols-3', className)}
    >
      {items.map((item) => {
        const open = activeValue.includes(item.id)

        return (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionHeader>
              <AccordionTrigger
                className={cn(
                  'border-gray-light-1 text-gray typo-body-2 relative flex h-8 w-full items-center gap-x-2.5 border-t pt-2 font-semibold uppercase transition-colors duration-300',
                  'before:bg-blue before:absolute before:-top-px before:left-0 before:h-px before:w-0 before:transition-[width] before:duration-300 before:content-[""]',
                  'hover:text-blue hover:before:w-full',
                  '[&[data-state=open]>svg]:rotate-180',
                )}
              >
                {item.title}
                <ChevronDown className="text-blue ml-auto transition-transform duration-300" />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent forceMount asChild>
              <motion.div
                initial={{ height: 0 }}
                animate={open ? { height: 'auto' } : undefined}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <MotionAccordionContentInner
                  initial={false}
                  animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeOut',
                    opacity: {
                      duration: 0.3,
                      delay: open ? 0.1 : 0,
                    },
                    y: {
                      duration: 0.4,
                      delay: open ? 0 : 0.1,
                    },
                  }}
                  open={open}
                  className="py-5"
                >
                  {item.content}
                </MotionAccordionContentInner>
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export { FooterAccordion }
