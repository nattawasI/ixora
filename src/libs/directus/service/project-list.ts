import { directus } from '@/libs/directus'
import { readItems } from '@directus/sdk'
import type { ProjectResponse } from '@/libs/directus/type'

export const getProjectList = async () => {
  const data = await directus.request<ProjectResponse[]>(
    readItems('projects', {
      filter: {
        status: {
          _eq: 'published',
        },
      },
      fields: ['*', 'gallery.*', 'gallery.directus_files_id.*', 'video.item.video.*'],
    }),
  )

  return data
}
