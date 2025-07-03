import 'server-only'

import { notFound } from 'next/navigation'
import { readItems } from '@directus/sdk'
import { directus } from '@/libs/directus'
import { mapCoverImage, mapMediaSource } from '@/libs/directus/util'
import type { NewsResponse, NewsDetailResponse } from '@/libs/directus/type'
import { aggregateCount } from './aggregate-count'

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
  const filter = {
    status: {
      _eq: 'published',
    },
    slug: {
      _neq: slug,
    },
  }
  const limit = 3

  const total = await aggregateCount({ collection: 'news', filter })

  if (total === 0) return []

  const results: NewsResponse[] = []
  const seen = new Set<number>()

  while (results.length < limit && seen.size < total) {
    const offset = Math.floor(Math.random() * total)
    if (seen.has(offset)) continue
    seen.add(offset)

    const batch = await directus.request<NewsResponse[]>(
      readItems('news', {
        filter,
        limit: 1,
        offset,
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
        ],
      }),
    )

    if (batch[0]) results.push(batch[0])
  }

  return mapCoverImage<NewsResponse[]>(results)
}

export { getNewsDetail, getNewsDetailExploreMore }
