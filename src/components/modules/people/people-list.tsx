import { CardPeople, CardPeopleLoading } from '@/components/ui/card-people'

/** directus */
import { getPeople } from '@/libs/directus/service/people'

const PeopleList = async () => {
  /** fetch here */
  const data = await getPeople()

  return (
    <div className="list-people">
      {data?.map((item, index) => (
        <CardPeople
          key={index}
          image={{
            src: `${process.env.DIRECTUS_URL}/assets/${item.image?.id}`,
            alt: `${item.first_name} ${item.last_name}`,
          }}
          name={`${item.first_name} ${item.last_name}`}
          position={item.position}
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
