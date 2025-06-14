import 'server-only'

import { notFound } from 'next/navigation'
import { readItems } from '@directus/sdk'
import { directus } from '@/libs/directus'
import { groupImages } from '@/libs/utils/group-images'
import type { NewsResponse, NewsDetailResponse } from '@/libs/directus/type'

export const getNewsDetail = async ({ slug }: { slug: string }) => {
  try {
    const data = await directus.request<NewsResponse[]>(
      readItems('news', {
        filter: {
          status: {
            _eq: 'published',
          },
          slug: {
            _eq: slug,
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
        src: `${process.env.DIRECTUS_URL}/assets/${item.item.video?.id}`,
      })),
    }))

    return rearrangeData[0] as NewsDetailResponse
  } catch (_error) {
    console.error(_error)
    notFound()
  }
}

export const getNewsDetailExploreMore = async ({ slug }: { slug: string }) => {
  const data = await directus.request<NewsResponse[]>(
    readItems('news', {
      filter: {
        status: {
          _eq: 'published',
        },
        slug: {
          _neq: slug,
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
      ],
      limit: 3,
    }),
  )

  return data.map((item) => ({
    ...item,
    cover: item.cover ? `${process.env.DIRECTUS_URL}/assets/${item.cover}` : '',
  }))
}
