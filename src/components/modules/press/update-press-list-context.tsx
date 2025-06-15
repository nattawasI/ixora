'use client'

import { useEffect } from 'react'
import { usePressList } from '@/components/modules/press/press-list-context'
import type { NewsResponse } from '@/libs/directus/type'

export const UpdatePressListContext = ({ data }: { data: NewsResponse[] }) => {
  const { setPressList } = usePressList()

  useEffect(() => {
    setPressList(data)
  }, [data, setPressList])

  return null
}
