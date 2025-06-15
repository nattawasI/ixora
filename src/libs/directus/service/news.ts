import 'server-only'

import { directus } from '@/libs/directus'
import { readItems } from '@directus/sdk'
import { groupImages } from '@/libs/utils/group-images'
import type { NewsResponse, NewsDetailResponse } from '@/libs/directus/type'

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
        'video.item.video.*',
      ],
    }),
  )

  const newData = data.map((item) => ({
    ...item,
    cover: item.cover ? `${process.env.DIRECTUS_URL}/assets/${item.cover}` : '',
    gallery: groupImages(item.gallery.map((item) => item.directus_files_id)),
    video: item.video.map((item) => ({
      ...item,
      item: {
        ...item.item,
        video: {
          ...item.item.video,
          src: `${process.env.DIRECTUS_URL}/assets/${item.item.video?.id}`,
        },
      },
    })),
  }))

  return newData as NewsDetailResponse[]
}
