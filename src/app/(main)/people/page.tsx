import { Suspense } from 'react'
import { HeadingPage } from '@/components/ui/heading-page'
import { PeopleList, PeopleListLoading } from '@/components/modules/people/people-list'
import { CardOther } from '@/components/ui/card-other'
import { ButtonArrowLink } from '@/components/ui/button-arrow'
import { SeparatorIcon } from '@/components/ui/separator'
import { getMetadata } from '@/libs/utils/metadata'
import type { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return getMetadata({
    pathname: `/people`,
    data: {
      title: 'People',
      description:
        'Our team of seasoned professionals brings international experience and a shared passion for sustainable landscape design that transforms spaces with purpose.',
      ogImage: null,
    },
  })
}

export default function People() {
  return (
    <div className="c-container-sm pb-4 max-lg:pt-4 lg:pb-12.5">
      <HeadingPage>PEOPLE</HeadingPage>
      <Suspense fallback={<PeopleListLoading />}>
        <PeopleList />
      </Suspense>
      <SeparatorIcon />
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
  )
}
