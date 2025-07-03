import { NextResponse } from 'next/server'
import { getNewsDetailExploreMore } from '@/libs/directus/service/news-detail'
import { directus } from '@/libs/directus'
import { readItems } from '@directus/sdk'
import { NewsResponse } from '@/libs/directus/type'
import { mapCoverImage } from '@/libs/directus/util'
import { aggregateCount } from '@/libs/directus/service/aggregate-count'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')
    const limit = parseInt(searchParams.get('limit') || '3', 10)

    if (!slug) {
      return NextResponse.json({ error: 'Slug parameter is required' }, { status: 400 })
    }

    try {
      const data = await getNewsDetailExploreMore({ slug })
      return NextResponse.json(data)
    } catch {
      const filter = {
        status: {
          _eq: 'published',
        },
        slug: {
          _neq: slug,
        },
      }

      const total = await aggregateCount({ collection: 'news', filter })

      if (total === 0) return NextResponse.json({ items: [] })

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

      return NextResponse.json(mapCoverImage<NewsResponse[]>(results))
    }
  } catch (error) {
    console.error('Error fetching news detail explore more:', error)
    return NextResponse.json({ error: 'Failed to fetch related news' }, { status: 500 })
  }
}
