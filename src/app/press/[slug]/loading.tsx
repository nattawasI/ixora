import { PressDetailContentLoading } from '@/components/modules/press-detail/press-detail-content/loading'

export default function Loading() {
  return (
    <div className="article-detail-container-small">
      <div className="bg-white p-4 lg:p-12.5">
        <PressDetailContentLoading />
      </div>
    </div>
  )
}
