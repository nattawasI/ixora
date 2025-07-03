import { readItems } from '@directus/sdk'
import { directus } from '@/libs/directus'

const aggregateCount = async ({
  collection,
  filter,
}: {
  collection: 'news' | 'projects'
  filter: Record<string, unknown>
}) => {
  const aggregateRes = await directus.request<Array<{ count: number }>>(
    readItems(collection, { filter, aggregate: { count: '*' }, limit: -1 }),
  )

  return aggregateRes[0].count
}

export { aggregateCount }
