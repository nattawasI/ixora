import 'server-only'

import { readItems } from '@directus/sdk'
import { directus } from '@/libs/directus'
import type { AwardsResponse } from '@/libs/directus/type'

export const getAwards = async () => {
  const data = await directus.request<AwardsResponse[]>(
    readItems('awards', {
      filter: {
        status: {
          _eq: 'published',
        },
      },
      fields: [
        'id',
        'status',
        'title',
        'content_lead',
        'content_more',
        'date',
        'project.title',
        'project.slug',
        'project.year',
        'project.*',
        'project.category.title',
        'project.category.slug',
        'project.category.*',
        'image.id',
        'image.filename_disk',
        'image.filename_download',
        'image.width',
        'image.height',
        'image.filesize',
        'image.title',
      ],
    }),
  )

  return data
}
