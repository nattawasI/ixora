import { CardAward, CardAwardLoading } from '@/components/ui/card-award'
import { ButtonArrowLink } from '@/components/ui/button-arrow'
import { awardsQuery } from '@/libs/directus/service/awards'

const AwardList = async () => {
  /** fetch here */
  const data = await awardsQuery()

  console.log(data)

  return (
    <div className="list-awards-press">
      {Array.from({ length: 4 }).map((_, index) => (
        <CardAward
          key={index}
          image={{
            src: '/mockup/award-1.jpg',
            alt: 'Award',
            sizes: '100vw, (min-width: 1024px) 320px',
          }}
          title={{ tag: 'h2', text: 'Architecture Master Prize 2025 | Winner' }}
          description={
            'A new campus community redefines suburban living with the concept of "Convergent with The Divergent Design." This approach uses experimental designs reflecting distinctive personality traits.'
          }
          descriptionMore={
            'A new campus community redefines suburban living with the concept of "Convergent with The Divergent Design." This approach uses experimental designs reflecting distinctive personality traits.'
          }
          date={'April, 2025'}
          projectName={'PANYA INDRA RESIDENCE'}
          type={'RESIDENTIAL'}
          year={'2025'}
          action={
            <ButtonArrowLink href="/projects/residential/2" isFullWidth target="_blank">
              See this project
            </ButtonArrowLink>
          }
        />
      ))}
    </div>
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
