import { CardPeople, CardPeopleLoading } from '@/components/ui/card-people'
import { EmptyData } from '@/components/ui/empty-data'

/** directus */
import { getPeople } from '@/libs/directus/service/people'

const PeopleList = async () => {
  const data = await getPeople()

  return (
    <>
      {data.length > 0 ? (
        <div className="list-people">
          {data?.map((item, index) => (
            <CardPeople
              key={index}
              image={{
                src: item.image,
                alt: `${item.first_name} ${item.last_name}`,
                sizes: '50vw, (min-width: 768px) 33vw, (min-width: 1024px) 263px',
              }}
              name={`${item.first_name} ${item.last_name}`}
              position={item.position}
            />
          ))}
        </div>
      ) : (
        <EmptyData />
      )}
    </>
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
