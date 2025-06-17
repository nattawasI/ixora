import { format } from 'date-fns'
import { CardAward, CardAwardLoading } from '@/components/ui/card-award'
import { ButtonArrowLink } from '@/components/ui/button-arrow'
import { getAwards } from '@/libs/directus/service/awards'
import { EmptyData } from '@/components/ui/empty-data'

const AwardList = async () => {
  /** fetch here */
  const data = await getAwards()

  return (
    <>
      {data.length > 0 ? (
        <div className="list-awards-press">
          {data.map((item, index) => (
            <CardAward
              key={item.id}
              image={{
                src: item.image,
                alt: item.title,
                sizes: '100vw, (min-width: 1024px) 320px',
                priority: index <= 2,
              }}
              date={format(new Date(item.date), 'MMMM, yyyy')}
              title={{ tag: 'h2', text: item.title }}
              descriptionLead={item.content_lead ?? ''}
              descriptionMore={item.content_more ?? ''}
              projectName={item.project.title}
              category={item.project.category.title}
              year={item.project.year}
              action={
                <ButtonArrowLink
                  href={`/projects/${item.project.category.slug}/${item.project.slug}`}
                  isFullWidth
                  target="_blank"
                >
                  See this project
                </ButtonArrowLink>
              }
            />
          ))}
        </div>
      ) : (
        <EmptyData />
      )}
    </>
  )
}

const AwardListLoading = () => {
  return (
    <div className="list-awards-press">
      {Array.from({ length: 2 }).map((_, index) => (
        <CardAwardLoading key={index} />
      ))}
    </div>
  )
}

export { AwardList, AwardListLoading }
