import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion'
import { cn } from '@/libs/utils/cn'

const ExploreMoreSection = ({ children, ...props }: React.ComponentProps<typeof Accordion>) => {
  return (
    <Accordion {...props}>
      <AccordionItem value="explore-more" asChild>
        <section className="max-lg:px-4 max-lg:pt-4">
          <AccordionHeader asChild>
            <h2>
              <AccordionTrigger className="typo-title-3 flex h-[3.75rem] w-full items-center justify-center font-bold ring-offset-0 lg:h-[5.625rem]">
                <span className="underline-gray-light-1 decoration-gray-light-1 underline underline-offset-8">
                  EXPLORE MORE
                </span>
              </AccordionTrigger>
            </h2>
          </AccordionHeader>
          <AccordionContent className="group data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden">
            <div
              className={cn(
                'p-0.5 transition-opacity duration-500 ease-in-out',
                'group-data-[state=closed]:animate-out group-data-[state=open]:animate-in',
                'group-data-[state=closed]:fade-out-0 group-data-[state=open]:fade-in-0',
              )}
            >
              {children}
            </div>
          </AccordionContent>
        </section>
      </AccordionItem>
    </Accordion>
  )
}

export { ExploreMoreSection }
