import 'server-only'

import { directus } from '@/libs/directus'
import { readSingleton } from '@directus/sdk'
import type { CareerResponse } from '@/libs/directus/type'

export const getCareers = async () => {
  const data = await directus.request<CareerResponse[]>(
    readSingleton('career', {
      filter: {
        status: {
          _eq: 'published',
        },
      },
      fields: ['id', 'status', 'title', 'position_required', 'requirement'],
    }),
  )

  return data
}
