import { draftMode } from 'next/headers'
import { directus } from '@/libs/directus'
import { readItem } from '@directus/sdk'
import { NextResponse } from 'next/server'
import type { NewsResponse } from '@/libs/directus/type'

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

  const project = await directus.request<NewsResponse>(
    readItem('news', id, {
      fields: ['*'],
    }),
  )

  if (!project) {
    return new NextResponse('Invalid id', { status: 401 })
  }

  draft.enable()

  return new NextResponse(null, {
    status: 307,
    headers: {
      Location: `/press-and-news/${project.slug}`,
    },
  })
}
// http://localhost:3000/api/draft-press-and-news?secret=zYGKh3F0RIhQBJsITjS6A8QR-tSaXXyD&id=8bf7cf34-e7c3-4535-b1c0-4ffcf250fa1e
