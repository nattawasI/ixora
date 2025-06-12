import { readItems } from '@directus/sdk'
import { directus } from '@/libs/directus'
import type { AwardsResponse } from '@/libs/directus/type'

export const awardsQuery = async () => {
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
        'project',
        'content_lead',
        'content_more',
        'date',
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
