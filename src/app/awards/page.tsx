import { Suspense } from 'react'
import { AwardList, AwardListLoading } from '@/components/modules/awards/award-list'

export default function Awards() {
  return (
    <div className="c-container">
      <h1 className="sr-only">AWARDS</h1>
      <Suspense fallback={<AwardListLoading />}>
        <AwardList />
      </Suspense>
    </div>
  )
}
