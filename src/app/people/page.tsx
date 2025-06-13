import { Suspense } from 'react'
import { HeadingPage } from '@/components/ui/heading-page'
import { PeopleList, PeopleListLoading } from '@/components/modules/people/people-list'
import { CardOther } from '@/components/ui/card-other'
import { ButtonArrowLink } from '@/components/ui/button-arrow'

export default function People() {
  return (
    <>
      <HeadingPage className="c-container-sm">PEOPLE</HeadingPage>
      <div className="c-container-sm">
        <Suspense fallback={<PeopleListLoading />}>
          <PeopleList />
        </Suspense>
      </div>
      <div className="c-container mt-5 pt-12.5 pb-4 lg:mt-12.5 lg:pt-[6.25rem] lg:pb-12.5">
        <CardOther
          image={{
            src: '/images/people/culture.jpg',
            alt: 'CULTURE',
            sizes: '100vw, (min-width: 768px) 50vw, (min-width: 1280px) 620px',
          }}
          title={{ text: 'CULTURE' }}
          description={`We value collaboration, creativity, and purpose-driven design — turning every space into something meaningful through thoughtful ideas and teamwork.`}
          action={
            <ButtonArrowLink href="/career" className="max-lg:w-full">
              Career
            </ButtonArrowLink>
          }
        />
      </div>
    </>
  )
}
