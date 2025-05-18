import { Suspense } from 'react'
import { AwardsList, AwardsListLoading } from '@/components/modules/awards/awards-list'

export default function Awards() {
  return (
    <div className="c-container">
      <h1 className="sr-only">AWARDS</h1>
      <Suspense fallback={<AwardsListLoading />}>
        <AwardsList />
      </Suspense>
    </div>
  )
}
