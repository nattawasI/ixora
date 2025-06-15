import { Suspense } from 'react'
import { PressList } from '@/components/modules/press/press-list'
import { PressListLoading } from '@/components/modules/press/press-list'

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
