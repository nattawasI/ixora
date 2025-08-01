import { Suspense } from 'react'
import { PressList } from '@/components/modules/press/press-list'
import { PressListLoading } from '@/components/modules/press/press-list'
import { MotionPageFade } from '@/components/common/motion'
import { getMetadata } from '@/libs/utils/metadata'

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
    <MotionPageFade>
      <div>
        <h1 className="sr-only">PRESS & NEWS</h1>
        <Suspense fallback={<PressListLoading />}>
          <PressList />
        </Suspense>
      </div>
    </MotionPageFade>
  )
}
