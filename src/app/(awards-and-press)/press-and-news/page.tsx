import { Suspense } from 'react'
import { PressList, PressListLoading } from '@/components/modules/press/press-list'

export default function PressAndNews() {
  return (
    <>
      <h1 className="sr-only">PRESS & NEWS</h1>
      <Suspense fallback={<PressListLoading />}>
        <PressList />
      </Suspense>
    </>
  )
}
