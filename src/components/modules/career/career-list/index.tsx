import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion'

const CareerList = () => {
  return (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <span className="block space-y-2.5">
            <span className="typo-title-3 font-bold">Senior Horticulturist</span>
            <span className="typo-body-2 bg-blue-2 inline-flex h-8.5 items-center rounded-full px-4">
              1 Position Required
            </span>
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <h4 className="text-gray typo-body-1 mb-2.5 font-bold">Requirements</h4>
          <ul className="list-bullet">
            <li>Bachelor&apos;s degree in Horticulture or a related field</li>
            <li>Minimum of 3 years of relevant work experience; experience in international projects is a plus</li>
            <li>Strong knowledge and expertise in plant species</li>
            <li>Proficient in planting design and plant-related planning</li>
            <li>Skilled in using design-related software and tools</li>
            <li>Good command of English, both written and spoken</li>
            <li>Able to communicate effectively across various media platforms</li>
            <li>Flexible and willing to travel as required</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export { CareerList }
