import { directus } from '@/libs/directus'
import { readItems } from '@directus/sdk'

export const newsQuery = async () => {
  const data = await directus.request(
    readItems('news', {
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
