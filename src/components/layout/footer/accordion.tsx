'use client'

import { ComponentProps } from 'react'
import { cn } from '@/libs/utils/cn'
import { useMediaQuery } from '@/libs/hooks/use-media-query'
import { ChevronDown } from '@/components/ui/icons-color/chevron-down'
import {
  Accordion as AccordionPrimitive,
  AccordionItem as AccordionPrimitiveItem,
  AccordionHeader as AccordionPrimitiveHeader,
  AccordionTrigger as AccordionPrimitiveTrigger,
  AccordionContent as AccordionPrimitiveContent,
  type AccordionMultipleProps,
} from '@radix-ui/react-accordion'

const Accordion = ({ className, ...props }: Omit<AccordionMultipleProps, 'type' | 'orientation'>) => {
  const isLaptopUp = useMediaQuery('(min-width: 1024px)')

  return (
    <AccordionPrimitive
      type="multiple"
      orientation={isLaptopUp ? 'horizontal' : 'vertical'}
      className={cn('grid gap-5 lg:grid-cols-3', className)}
      {...props}
    />
  )
}

const AccordionItem = ({ className, ...props }: ComponentProps<typeof AccordionPrimitiveItem>) => {
  return <AccordionPrimitiveItem className={cn('', className)} {...props} />
}

const AccordionTrigger = ({ className, children, ...props }: ComponentProps<typeof AccordionPrimitiveTrigger>) => {
  return (
    <AccordionPrimitiveHeader>
      <AccordionPrimitiveTrigger
        className={cn(
          'border-gray-light-1 text-gray relative flex h-8 w-full items-center gap-x-2.5 border-t pt-2 font-bold uppercase transition-colors duration-300',
          'before:bg-blue before:absolute before:-top-px before:left-0 before:h-px before:w-0 before:transition-[width] before:duration-300 before:content-[""]',
          'hover:text-blue hover:before:w-full',
          '[&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDown className="text-blue ml-auto transition-transform duration-300" />
      </AccordionPrimitiveTrigger>
    </AccordionPrimitiveHeader>
  )
}

const AccordionContent = ({ className, children, ...props }: ComponentProps<typeof AccordionPrimitiveContent>) => {
  return (
    <AccordionPrimitiveContent
      className="group data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all"
      {...props}
    >
      <div
        className={cn(
          'py-5 transition-opacity ease-in-out',
          'group-data-[state=closed]:animate-out group-data-[state=open]:animate-in',
          'group-data-[state=closed]:fade-out-0 group-data-[state=open]:fade-in-0',
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitiveContent>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
