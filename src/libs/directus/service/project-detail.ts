import { directus } from '@/libs/directus'
import { readItems } from '@directus/sdk'
import { notFound } from 'next/navigation'
import type { ProjectResponse } from '@/libs/directus/type'

export const getProjectDetail = async ({ slug, category }: { slug: string; category: string }) => {
  try {
    const data = await directus.request<ProjectResponse[]>(
      readItems('projects', {
        filter: {
          slug: {
            _contains: slug,
          },
          status: {
            _eq: 'published',
          },
          category: {
            slug: {
              _eq: category,
            },
          },
        },
        fields: ['*', 'gallery.*', 'gallery.directus_files_id.*', 'video.item.video.*'],
        limit: 1,
      }),
    )

    return data[0]
  } catch (_error) {
    console.error(_error)
    notFound()
  }
}
