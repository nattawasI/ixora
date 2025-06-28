import 'server-only'

import { directus } from '@/libs/directus'
import { readItems } from '@directus/sdk'
import { mapMediaSource } from '@/libs/directus/util'
import type { NewsDetailResponse, NewsResponse } from '@/libs/directus/type'

export const getNews = async () => {
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
        'description',
        'content',
        'cover',
        'gallery.directus_files_id.id',
        'gallery.directus_files_id.filename_disk',
        'gallery.directus_files_id.filename_download',
        'gallery.directus_files_id.width',
        'gallery.directus_files_id.height',
        'gallery.directus_files_id.filesize',
        'gallery.directus_files_id.title',
        'video.*',
        'video.item.*',
        'video.item.video.id',
        'video.item.video.filename_disk',
        'video.item.video.filename_download',
        'video.item.video.width',
        'video.item.video.height',
        'video.item.video.filesize',
        'video.item.video.title',
      ],
    }),
  )

  return mapMediaSource<NewsResponse[], NewsDetailResponse[]>(data)
}
