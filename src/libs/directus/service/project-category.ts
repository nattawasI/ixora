import 'server-only'

import { directus } from '@/libs/directus'
import { readItems } from '@directus/sdk'
import { mapMediaSource } from '@/libs/directus/util'
import type {
  ProjectResponse,
  CategoryType,
  ProjectDetailResponse,
  ProjectCategoryResponse,
} from '@/libs/directus/type'

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
        'cover.id',
        'cover.filename_disk',
        'cover.filename_download',
        'cover.width',
        'cover.height',
        'cover.filesize',
        'cover.title',
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

  return mapMediaSource<ProjectResponse[], ProjectDetailResponse[]>(data)
}

export const getProjectCategory = async () => {
  const data = await directus.request(
    readItems('project_category', {
      filter: {
        status: {
          _eq: 'published',
        },
      },
      fields: [
        'id',
        'title',
        'description',
        'slug',
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

  return data.map((item) => ({
    ...item,
    image: `${process.env.DIRECTUS_URL}/assets/${item.image.id}`,
  })) as ProjectCategoryResponse[]
}
