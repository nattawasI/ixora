import { CardPeople, CardPeopleLoading } from '@/components/ui/card-people'

const PeopleList = async () => {
  /** fetch here */
  return (
    <div className="grid grid-cols-2 gap-x-2.5 gap-y-4 md:grid-cols-4 lg:gap-x-7.5 lg:gap-y-2.5">
      {Array.from({ length: 8 }).map((_, index) => (
        <CardPeople
          key={index}
          image={{ src: '/mockup/people.jpg', alt: 'Chanchai Jarungruangkiat' }}
          name={'Chanchai Jarungruangkiat'}
          position="Founder / Partner"
        />
      ))}
    </div>
  )
}

const PeopleListLoading = () => {
  return (
    <div className="grid grid-cols-2 gap-x-2.5 gap-y-4 md:grid-cols-4 lg:gap-x-7.5 lg:gap-y-2.5">
      {Array.from({ length: 8 }).map((_, index) => (
        <CardPeopleLoading key={index} className={index > 3 ? 'max-md:hidden' : ''} />
      ))}
    </div>
  )
}

export { PeopleList, PeopleListLoading }
