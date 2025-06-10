import { cn } from '@/libs/utils/cn'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { ChevronDown } from '@/components/ui/icons-color/chevron-down'

const ReadMore = Collapsible

const ReadMoreTrigger = ({ className, ...props }: React.ComponentProps<typeof CollapsibleTrigger>) => {
  return (
    <CollapsibleTrigger
      className={cn(
        'typo-body-3 text-gray group/read-more-trigger inline-flex items-center gap-x-1.25 font-bold uppercase',
        className,
      )}
      {...props}
    >
      <span className="group-data-[state=open]/read-more-trigger:hidden">READ MORE</span>
      <span className="group-data-[state=closed]/read-more-trigger:hidden">SHOW LESS</span>
      <ChevronDown className="-mt-0.5 transition-transform duration-300 group-data-[state=open]/read-more-trigger:rotate-180" />
    </CollapsibleTrigger>
  )
}
const ReadMoreContent = ({ className, children, ...props }: React.ComponentProps<typeof CollapsibleContent>) => {
  return (
    <CollapsibleContent
      className={cn(
        'group/read-more-content data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden',
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          'pt-5 transition-opacity duration-500 ease-in-out',
          'group-data-[state=closed]/read-more-content:animate-out group-data-[state=open]/read-more-content:animate-in',
          'group-data-[state=closed]/read-more-content:fade-out-0 group-data-[state=open]/read-more-content:fade-in-0',
        )}
      >
        {children}
      </div>
    </CollapsibleContent>
  )
}

export { ReadMore, ReadMoreTrigger, ReadMoreContent }
