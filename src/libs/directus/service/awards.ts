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
        'project.category.id',
        'project.category.title',
        'project.category.slug',
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

  console.log({ data })

  return data.map((item) => ({
    ...item,
    image: item.image ? `${process.env.DIRECTUS_URL}/assets/${item.image.id}` : '',
  }))
}
