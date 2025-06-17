import { NextResponse } from 'next/server'
import { getNewsDetailExploreMore } from '@/libs/directus/service/news-detail'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')

    if (!slug) {
      return NextResponse.json({ error: 'Slug parameter is required' }, { status: 400 })
    }

    const data = await getNewsDetailExploreMore({ slug })
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching news detail explore more:', error)
    return NextResponse.json({ error: 'Failed to fetch related news' }, { status: 500 })
  }
}
