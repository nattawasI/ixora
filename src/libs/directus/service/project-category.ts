import 'server-only'

import { directus } from '@/libs/directus'
import { readItems } from '@directus/sdk'
import type { ProjectResponse, CategoryType } from '@/libs/directus/type'
import { groupImages } from '@/libs/utils/group-images'

export const getProjectByCategory = async ({ category }: { category: CategoryType | (string & {}) }) => {
  const filteredCategory = category !== '' ? { category: { slug: { _eq: category } } } : {}
  const data = await directus.request<ProjectResponse[]>(
    readItems('projects', {
      filter: {
        status: {
          _eq: 'published',
        },
        ...filteredCategory,
      },
      fields: [
        'id',
        'sort',
        'status',
        'date_created',
        'date_updated',
        'slug',
        'location',
        'year',
        'landscape_architect',
        'photo_credit',
        'content_lead',
        'content_more',
        'cover',
        'client',
        'title',
        'category.id',
        'category.title',
        'category.slug',
        'gallery.*',
        'gallery.directus_files_id.id',
        'gallery.directus_files_id.filename_disk',
        'gallery.directus_files_id.filename_download',
        'gallery.directus_files_id.width',
        'gallery.directus_files_id.height',
        'gallery.directus_files_id.filesize',
        'gallery.directus_files_id.title',
        'video.*',
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

  return data.map((item) => ({
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
}
