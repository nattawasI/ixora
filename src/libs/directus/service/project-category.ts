import 'server-only'

import { directus } from '@/libs/directus'
import { readItems } from '@directus/sdk'
import { mapMediaSource } from '@/libs/directus/util'
import type { ProjectResponse, CategoryType, ProjectDetailResponse } from '@/libs/directus/type'

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

  return mapMediaSource<ProjectResponse[], ProjectDetailResponse[]>(data)
}
