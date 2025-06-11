import { CareerAccordion, type CareerItemType } from './career-accordion'
import { TextSkeleton } from '@/components/ui/text-skeleton'

const mockupData: CareerItemType[] = [
  {
    id: 'item-1',
    title: 'Senior Horticulturist',
    numberPositionRequired: 1,
    content: `<ul>
      <li>Bachelor's degree in Horticulture or a related field</li>
      <li>Minimum of 3 years of relevant work experience; experience in international projects is a plus</li>
      <li>Strong knowledge and expertise in plant species</li>
      <li>Proficient in planting design and plant-related planning</li>
      <li>Skilled in using design-related software and tools</li>
      <li>Good command of English, both written and spoken</li>
      <li>Able to communicate effectively across various media platforms</li>
      <li>Flexible and willing to travel as required</li>
    </ul>`,
  },
  {
    id: 'item-2',
    title: 'Senior Landscape Architect',
    numberPositionRequired: 1,
    content: `<ul>
      <li>Bachelor's degree in Horticulture or a related field</li>
      <li>Minimum of 3 years of relevant work experience; experience in international projects is a plus</li>
      <li>Strong knowledge and expertise in plant species</li>
      <li>Proficient in planting design and plant-related planning</li>
      <li>Skilled in using design-related software and tools</li>
      <li>Good command of English, both written and spoken</li>
      <li>Able to communicate effectively across various media platforms</li>
      <li>Flexible and willing to travel as required</li>
    </ul>`,
  },
  {
    id: 'item-3',
    title: 'Junior Landscape Architect',
    numberPositionRequired: 2,
    content: `<ul>
      <li>Bachelor's degree in Horticulture or a related field</li>
      <li>Minimum of 3 years of relevant work experience; experience in international projects is a plus</li>
      <li>Strong knowledge and expertise in plant species</li>
      <li>Proficient in planting design and plant-related planning</li>
      <li>Skilled in using design-related software and tools</li>
      <li>Good command of English, both written and spoken</li>
      <li>Able to communicate effectively across various media platforms</li>
      <li>Flexible and willing to travel as required</li>
    </ul>`,
  },
]

const CareerList = async () => {
  /** fetch here... */
  return <CareerAccordion items={mockupData} />
}

const CareerListLoading = () => {
  return (
    <div className="space-y-5">
      {Array.from({ length: 3 }).map((_, index) => (
        <div className="border-gray-light-1 animate-pulse border-b pb-5" key={index}>
          <div className="space-y-2.5 pb-5">
            <TextSkeleton variant="typo-title-3" className="w-full max-w-80" />
            <div className="skeleton h-8.5 w-40 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  )
}

export { CareerList, CareerListLoading }
