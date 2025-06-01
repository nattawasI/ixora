import { cn } from '@/libs/utils/cn'
import {
  Accordion as AccordionPrimitive,
  AccordionItem as AccordionPrimitiveItem,
  AccordionHeader as AccordionPrimitiveHeader,
  AccordionTrigger as AccordionPrimitiveTrigger,
  AccordionContent as AccordionPrimitiveContent,
} from '@radix-ui/react-accordion'
import { ChevronDown } from '@/components/ui/icons-color/chevron-down'

const Accordion = ({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive>) => {
  return <AccordionPrimitive className={cn('space-y-5', className)} {...props} />
}

const AccordionItem = ({ className, ...props }: React.ComponentProps<typeof AccordionPrimitiveItem>) => {
  return <AccordionPrimitiveItem className={cn('border-gray-light-1 border-b pb-5', className)} {...props} />
}

const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitiveTrigger>) => {
  return (
    <AccordionPrimitiveHeader>
      <AccordionPrimitiveTrigger
        className={cn('group/accordion-trigger flex w-full gap-x-5 pb-5', className)}
        {...props}
      >
        {children}
        <span
          className={cn(
            'border-blue ml-auto flex size-7 items-center justify-center rounded-full border transition-all duration-300',
            'group-hover/accordion-trigger:bg-blue group-hover/accordion-trigger:text-white group-hover/accordion-trigger:[&_path]:stroke-current',
            'group-data-[state=open]/accordion-trigger:rotate-180',
          )}
        >
          <ChevronDown className="size-3.5" />
        </span>
      </AccordionPrimitiveTrigger>
    </AccordionPrimitiveHeader>
  )
}

const AccordionContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitiveContent>) => {
  return (
    <AccordionPrimitiveContent
      className={cn(
        'group/accordion-content overflow-hidden transition-all',
        'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          'pb-2.5 transition-opacity duration-500 ease-in-out lg:pb-5',
          'group-data-[state=closed]/accordion-content:animate-out group-data-[state=closed]/accordion-content:fade-out-0',
          'group-data-[state=open]/accordion-content:animate-in group-data-[state=open]/accordion-content:fade-in-0',
        )}
      >
        {children}
      </div>
    </AccordionPrimitiveContent>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
