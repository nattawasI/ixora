import { PressDetailContent } from '@/components/modules/press-detail/press-detail-content'

export default async function PressAndNewsDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  console.log(slug)

  return (
    <div className="article-detail-container-small">
      <PressDetailContent />
    </div>
  )
}
