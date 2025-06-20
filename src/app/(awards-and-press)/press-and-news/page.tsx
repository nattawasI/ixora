import { Suspense } from 'react'
import { PressList } from '@/components/modules/press/press-list'
import { PressListLoading } from '@/components/modules/press/press-list'
import { getMetadata } from '@/libs/data/metadata'

export async function generateMetadata() {
  return getMetadata({
    pathname: `/press-and-news`,
    data: {
      title: 'Press & News',
      description:
        'Explore our latest press releases and news coverage, showcasing our commitment to sustainable landscape design and innovative solutions.',
      ogImage: null,
    },
  })
}

export default async function PressAndNews() {
  return (
    <>
      <h1 className="sr-only">PRESS & NEWS</h1>
      <Suspense fallback={<PressListLoading />}>
        <PressList />
      </Suspense>
    </>
  )
}
