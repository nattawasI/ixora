import { NextResponse } from 'next/server'
import { getProjectDetailExploreMore } from '@/libs/directus/service/project-detail'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')
    const category = searchParams.get('category')

    if (!slug || !category) {
      return NextResponse.json(
        { error: 'Both slug and category parameters are required' },
        { status: 400 }
      )
    }

    const data = await getProjectDetailExploreMore({ slug, category })
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching project detail explore more:', error)
    return NextResponse.json(
      { error: 'Failed to fetch related projects' },
      { status: 500 }
    )
  }
}
