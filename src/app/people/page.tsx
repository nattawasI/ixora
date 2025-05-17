import { Suspense } from 'react'
import { HeadingPage } from '@/components/ui/heading-page'
import { PeopleList, PeopleListLoading } from '@/components/modules/people/people-list'
import { CardOther } from '@/components/ui/card-other'
import { ButtonLink } from '@/components/ui/button-link'

export default function People() {
  return (
    <>
      <HeadingPage className="c-container">PEOPLE</HeadingPage>
      <div className="c-container">
        <Suspense fallback={<PeopleListLoading />}>
          <PeopleList />
        </Suspense>
      </div>
      <div className="c-container mt-5 pt-12.5 pb-4 lg:mt-12.5 lg:pt-[6.25rem] lg:pb-12.5">
        <CardOther
          image={{
            src: '/images/people/culture.jpg',
            alt: 'CULTURE',
          }}
          title={{ text: 'CULTURE' }}
          description={`We value collaboration, creativity, and purpose-driven design — turning every space into something meaningful through thoughtful ideas and teamwork.`}
          action={
            <ButtonLink href="/career" className="max-lg:w-full">
              Career
            </ButtonLink>
          }
        />
      </div>
    </>
  )
}
