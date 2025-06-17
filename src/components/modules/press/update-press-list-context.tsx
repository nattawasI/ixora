'use client'

import { useEffect } from 'react'
import { usePressList } from '@/components/modules/press/press-list-context'
import type { NewsDetailResponse } from '@/libs/directus/type'

export const UpdatePressListContext = ({ data }: { data: NewsDetailResponse[] }) => {
  const { setPressList } = usePressList()

  useEffect(() => {
    setPressList(data)
  }, [data, setPressList])

  return null
}
