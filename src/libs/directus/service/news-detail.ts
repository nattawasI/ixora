import 'server-only'

import { notFound } from 'next/navigation'
import { readItems } from '@directus/sdk'
import { directus } from '@/libs/directus'
import { mapCoverImage, mapMediaSource } from '@/libs/directus/util'
import type { NewsResponse, NewsDetailResponse } from '@/libs/directus/type'

const getNewsDetail = async ({ slug, isDraft }: { slug: string; isDraft: boolean }) => {
  const filteredDraft = !isDraft ? { status: { _eq: 'published' } } : {}
  try {
    const data = await directus.request<NewsResponse[]>(
      readItems('news', {
        filter: {
          slug: {
            _eq: slug,
          },
          ...filteredDraft,
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
          'cover.id',
          'cover.filename_disk',
          'cover.filename_download',
          'cover.width',
          'cover.height',
          'cover.filesize',
          'cover.title',
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
    const rearrangeData = mapMediaSource<NewsResponse[], NewsDetailResponse[]>(data)

    return rearrangeData[0]
  } catch (_error) {
    console.error(_error)
    notFound()
  }
}

const getNewsDetailExploreMore = async ({ slug }: { slug: string }) => {
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

  return mapCoverImage<NewsResponse[]>(data)
}

export { getNewsDetail, getNewsDetailExploreMore }
