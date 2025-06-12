import { directus } from '@/libs/directus'
import { readItems } from '@directus/sdk'

export const projectListQuery = async () => {
  const data = await directus.request(
    readItems('projects', {
      filter: {
        status: {
          _eq: 'published',
        },
      },
      fields: ['*', 'gallery.*', 'gallery.directus_files_id.*', 'video.item.video.*'],
    }),
  )

  return data
}
