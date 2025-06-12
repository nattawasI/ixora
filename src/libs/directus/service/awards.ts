import { directus } from '@/libs/directus'
import { readItems } from '@directus/sdk'

export const awardsQuery = async () => {
  const data = await directus.request(
    readItems('awards', {
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
