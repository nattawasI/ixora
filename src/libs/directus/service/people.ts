import { directus } from '@/libs/directus'
import { readItems } from '@directus/sdk'
import type { PeopleResponse } from '@/libs/directus/type'

export const getPeople = async () => {
  const data = await directus.request<PeopleResponse[]>(
    readItems('people', {
      filter: {
        status: {
          _eq: 'published',
        },
      },
      fields: [
        'id',
        'status',
        'first_name',
        'last_name',
        'position',
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
