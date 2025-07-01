import { Suspense } from 'react'
import { AwardList, AwardListLoading } from '@/components/modules/awards/award-list'
import { MotionPageFade } from '@/components/modules/common/motion'
import { getMetadata } from '@/libs/utils/metadata'
import type { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return getMetadata({
    pathname: `/awards`,
    data: {
      title: 'Awards',
      description:
        'Discover the awards that highlight IXORA DESIGN’s commitment to excellence in sustainable landscape architecture across Thailand and the international stage.',
      ogImage: null,
    },
  })
}

export default function Awards() {
  return (
    <MotionPageFade>
      <div>
        <h1 className="sr-only">AWARDS</h1>
        <Suspense fallback={<AwardListLoading />}>
          <AwardList />
        </Suspense>
      </div>
    </MotionPageFade>
  )
}
