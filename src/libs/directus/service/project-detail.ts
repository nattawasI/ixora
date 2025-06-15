import 'server-only'

import { directus } from '@/libs/directus'
import { groupImages } from '@/libs/utils/group-images'
import { readItems } from '@directus/sdk'
import { notFound } from 'next/navigation'
import type { ProjectDetailResponse, ProjectResponse } from '@/libs/directus/type'

export const getProjectDetail = async ({ slug, category }: { slug: string; category: string }) => {
  try {
    const data = await directus.request<ProjectResponse[]>(
      readItems('projects', {
        filter: {
          slug: {
            _eq: slug,
          },
          status: {
            _eq: 'published',
          },
          category: {
            slug: {
              _eq: category,
            },
          },
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
        limit: 1,
      }),
    )

    const rearrangeData = data.map((item) => ({
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

    return rearrangeData[0] as ProjectDetailResponse
  } catch (_error) {
    console.error(_error)
    notFound()
  }
}

export const getProjectDetailExploreMore = async ({ slug, category }: { slug: string; category: string }) => {
  const data = await directus.request<ProjectResponse[]>(
    readItems('projects', {
      filter: {
        slug: {
          _neq: slug,
        },
        status: {
          _eq: 'published',
        },
        category: {
          slug: {
            _eq: category,
          },
        },
      },
      fields: [
        'id',
        'sort',
        'status',
        'slug',
        'location',
        'cover',
        'title',
        'category.id',
        'category.title',
        'category.slug',
      ],
      limit: 3,
    }),
  )

  return data.map((item) => ({
    ...item,
    cover: item.cover ? `${process.env.DIRECTUS_URL}/assets/${item.cover}` : '',
  }))
}
