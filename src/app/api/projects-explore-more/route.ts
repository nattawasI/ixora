import { NextRequest, NextResponse } from 'next/server'
import { readItems } from '@directus/sdk'
import { directus } from '@/libs/directus'
import { mapCoverImage } from '@/libs/directus/util'
import { getProjectDetailExploreMore } from '@/libs/directus/service/project-detail'
import type { ProjectResponse } from '@/libs/directus/type'
import { aggregateCount } from '@/libs/directus/service/aggregate-count'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')
    const category = searchParams.get('category')
    const limit = parseInt(searchParams.get('limit') || '3', 10)

    if (!slug || !category) {
      return NextResponse.json({ error: 'Both slug and category parameters are required' }, { status: 400 })
    }

    try {
      // try random sort ? first
      const data = await getProjectDetailExploreMore({ slug, category })
      return NextResponse.json(data)
    } catch {
      const filter = {
        slug: { _neq: slug },
        status: { _eq: 'published' },
        category: { slug: { _eq: category } },
      }

      const total = await aggregateCount({ collection: 'projects', filter })

      if (total === 0) return NextResponse.json({ items: [] })

      const results: ProjectResponse[] = []
      const seen = new Set<number>()

      while (results.length < limit && seen.size < total) {
        const offset = Math.floor(Math.random() * total)
        if (seen.has(offset)) continue
        seen.add(offset)

        const batch = await directus.request<ProjectResponse[]>(
          readItems('projects', {
            filter,
            limit: 1,
            offset,
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

      return NextResponse.json(mapCoverImage<ProjectResponse[]>(results))
    }
  } catch (error) {
    console.error('Error fetching project detail explore more:', error)
    return NextResponse.json({ error: 'Failed to fetch related projects' }, { status: 500 })
  }
}
