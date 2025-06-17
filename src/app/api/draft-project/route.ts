import { draftMode } from 'next/headers'
import { directus } from '@/libs/directus'
import { readItem } from '@directus/sdk'
import { ProjectResponse } from '@/libs/directus/type'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const id = searchParams.get('id')
  const draft = await draftMode()

  if (secret !== process.env.DIRECTUS_API_KEY) {
    return new NextResponse('Invalid token', { status: 401 })
  }

  if (!id) {
    return new NextResponse('Missing id', { status: 401 })
  }

  const project = await directus.request<ProjectResponse>(
    readItem('projects', id, {
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
    }),
  )

  if (!project) {
    return new NextResponse('Invalid id', { status: 401 })
  }

  draft.enable()

  return new NextResponse(null, {
    status: 307,
    headers: {
      Location: `/projects/${project.category.slug}/${project.slug}`,
    },
  })
}
// http://localhost:3000/api/draft-project?secret=zYGKh3F0RIhQBJsITjS6A8QR-tSaXXyD&id=7ad9f2e9-818b-4931-8734-035ed9a297be
