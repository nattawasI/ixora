import { Suspense } from 'react'
import { AwardList, AwardListLoading } from '@/components/modules/awards/award-list'

export default function Awards() {
  return (
    <>
      <h1 className="sr-only">AWARDS</h1>
      <Suspense fallback={<AwardListLoading />}>
        <AwardList />
      </Suspense>
    </>
  )
}
