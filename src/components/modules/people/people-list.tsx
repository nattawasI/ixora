import { CardPeople, CardPeopleLoading } from '@/components/ui/card-people'

const PeopleList = async () => {
  /** fetch here */
  return (
    <div className="list-people">
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
    <div className="list-people">
      {Array.from({ length: 8 }).map((_, index) => (
        <CardPeopleLoading key={index} className={index > 3 ? 'max-md:hidden' : ''} />
      ))}
    </div>
  )
}

export { PeopleList, PeopleListLoading }
