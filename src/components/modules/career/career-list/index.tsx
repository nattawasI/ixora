import { CareerResponse } from '@/libs/directus/type'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion'

const CareerList = ({ data }: { data: CareerResponse[] }) => {
  return (
    <Accordion type="multiple" className="c-container mb-12.5 lg:mb-[6.25rem]">
      {data.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>
            <span className="flex flex-col items-start gap-y-2.5">
              <span className="typo-title-3 font-bold">{item.title}</span>
              <span className="typo-body-2 bg-blue-2 inline-flex h-8.5 items-center rounded-full px-4 font-bold">
                {item.position_required} Position Required
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <h4 className="text-gray typo-body-1 mb-2.5 font-bold">Requirements</h4>
            <div className="detail-content">
              <div dangerouslySetInnerHTML={{ __html: item.requirement }} />
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export { CareerList }
