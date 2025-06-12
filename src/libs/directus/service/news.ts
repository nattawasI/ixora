import { directus } from '@/libs/directus'
import { readItems } from '@directus/sdk'
import type { NewsResponse } from '@/libs/directus/type'

export const newsQuery = async () => {
  const data = await directus.request<NewsResponse[]>(
    readItems('news', {
      filter: {
        status: {
          _eq: 'published',
        },
      },
      fields: [
        'id',
        'status',
        'date_created',
        'date_updated',
        'title',
        'published_date',
        'slug',
        'discription',
        'content',
        'cover',
        'gallery.directus_files_id.id',
        'gallery.directus_files_id.filename_disk',
        'gallery.directus_files_id.filename_download',
        'gallery.directus_files_id.width',
        'gallery.directus_files_id.height',
        'gallery.directus_files_id.filesize',
        'gallery.directus_files_id.title',
        'video.item.video.*',
      ],
    }),
  )

  return data
}
