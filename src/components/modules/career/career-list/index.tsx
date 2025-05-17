import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion'

const mockupData: { id: string; title: string; numberPositionRequired: number; requirements: string[] }[] = [
  {
    id: 'item-1',
    title: 'Senior Horticulturist',
    numberPositionRequired: 1,
    requirements: [
      "Bachelor's degree in Horticulture or a related field",
      'Minimum of 3 years of relevant work experience; experience in international projects is a plus',
      'Strong knowledge and expertise in plant species',
      'Proficient in planting design and plant-related planning',
      'Skilled in using design-related software and tools',
      'Good command of English, both written and spoken',
      'Able to communicate effectively across various media platforms',
      'Flexible and willing to travel as required',
    ],
  },
  {
    id: 'item-2',
    title: 'Senior Landscape Architect',
    numberPositionRequired: 1,
    requirements: [
      "Bachelor's degree in Horticulture or a related field",
      'Minimum of 3 years of relevant work experience; experience in international projects is a plus',
      'Strong knowledge and expertise in plant species',
      'Proficient in planting design and plant-related planning',
      'Skilled in using design-related software and tools',
      'Good command of English, both written and spoken',
      'Able to communicate effectively across various media platforms',
      'Flexible and willing to travel as required',
    ],
  },
  {
    id: 'item-3',
    title: 'Junior Landscape Architect',
    numberPositionRequired: 2,
    requirements: [
      "Bachelor's degree in Horticulture or a related field",
      'Minimum of 3 years of relevant work experience; experience in international projects is a plus',
      'Strong knowledge and expertise in plant species',
      'Proficient in planting design and plant-related planning',
      'Skilled in using design-related software and tools',
      'Good command of English, both written and spoken',
      'Able to communicate effectively across various media platforms',
      'Flexible and willing to travel as required',
    ],
  },
]

const CareerList = () => {
  return (
    <Accordion type="multiple" className="c-container mb-12.5 lg:mb-[6.25rem]">
      {mockupData.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>
            <span className="flex flex-col items-start gap-y-2.5">
              <span className="typo-title-3 font-bold">{item.title}</span>
              <span className="typo-body-2 bg-blue-2 inline-flex h-8.5 items-center rounded-full px-4 font-bold">
                {item.numberPositionRequired} Position Required
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <h4 className="text-gray typo-body-1 mb-2.5 font-bold">Requirements</h4>
            <ul className="list-bullet">
              {item.requirements.map((requirement, index) => (
                <li key={`requirement-${index}`}>{requirement}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export { CareerList }
