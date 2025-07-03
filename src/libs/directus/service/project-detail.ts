import 'server-only'

import { directus } from '@/libs/directus'
import { readItems } from '@directus/sdk'
import { notFound } from 'next/navigation'
import { mapCoverImage, mapMediaSource } from '@/libs/directus/util'
import type { ProjectDetailResponse, ProjectResponse } from '@/libs/directus/type'
import { aggregateCount } from './aggregate-count'

const getProjectDetail = async ({ slug, category, isDraft }: { slug: string; category: string; isDraft: boolean }) => {
  const filteredDraft = !isDraft ? { status: { _eq: 'published' } } : {}
  try {
    const data = await directus.request<ProjectResponse[]>(
      readItems('projects', {
        filter: {
          slug: {
            _eq: slug,
          },
          category: {
            slug: {
              _eq: category,
            },
          },
          ...filteredDraft,
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
        limit: 1,
      }),
    )

    const rearrangeData = mapMediaSource<ProjectResponse[], ProjectDetailResponse[]>(data)

    return rearrangeData[0]
  } catch (_error) {
    console.error(_error)
    notFound()
  }
}

const getProjectDetailExploreMore = async ({ slug, category }: { slug: string; category: string }) => {
  const filter = {
    slug: { _neq: slug },
    status: { _eq: 'published' },
    category: { slug: { _eq: category } },
  }
  const limit = 3

  const total = await aggregateCount({ collection: 'projects', filter })
  if (total === 0) return []

  const results: ProjectResponse[] = []
  const seen = new Set<number>()

  while (results.length < limit && seen.size < total) {
    const offset = Math.floor(Math.random() * total)
    if (seen.has(offset)) continue
    seen.add(offset)

    const batch = await directus.request<ProjectResponse[]>(
      readItems('projects', {
        filter,
        offset,
        limit: 1,
        fields: [
          'id',
          'sort',
          'status',
          'slug',
          'location',
          'title',
          'cover.id',
          'cover.filename_disk',
          'cover.filename_download',
          'cover.width',
          'cover.height',
          'cover.filesize',
          'cover.title',
          'category.id',
          'category.title',
          'category.slug',
        ],
      }),
    )
    if (batch[0]) results.push(batch[0])
  }

  return mapCoverImage<ProjectResponse[]>(results)
}

export { getProjectDetail, getProjectDetailExploreMore }
