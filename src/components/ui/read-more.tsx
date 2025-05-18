import { cn } from '@/libs/utils/cn'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { Plus } from '@/components/ui/icons/plus'

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
      <Plus className="text-blue -mt-0.5 size-2.5 transition-transform duration-300 group-data-[state=open]/read-more-trigger:rotate-45" />
    </CollapsibleTrigger>
  )
}
const ReadMoreContent = ({ className, ...props }: React.ComponentProps<typeof CollapsibleContent>) => {
  return (
    <CollapsibleContent
      className={cn(
        'data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden',
        className,
      )}
      {...props}
    />
  )
}

export { ReadMore, ReadMoreTrigger, ReadMoreContent }
