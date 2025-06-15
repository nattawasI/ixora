import { PressDetailContent } from '@/components/modules/press-detail/press-detail-content'
import { getNewsDetail } from '@/libs/directus/service/news-detail'
import { draftMode } from 'next/headers'

export default async function PressAndNewsDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { isEnabled } = await draftMode()
  const data = await getNewsDetail({ slug, isDraft: isEnabled })

  return (
    <div className="article-detail-container-small">
      {isEnabled ? (
        <h2 className="typo-title-1 mb-2 text-center font-bold text-red-500 uppercase">draft mode</h2>
      ) : null}
      <PressDetailContent data={data} />
    </div>
  )
}
