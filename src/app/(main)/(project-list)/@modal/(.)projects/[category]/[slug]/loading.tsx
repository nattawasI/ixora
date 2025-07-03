import { ProjectDetailContentLoading } from '@/components/modules/project-detail/project-detail-content/loading'
import { DialogTitle } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

export default function Loading() {
  return (
    <div className="px-4.75 py-4 lg:px-12.5 lg:py-12.5">
      <VisuallyHidden>
        <DialogTitle>Project Loading</DialogTitle>
      </VisuallyHidden>
      <ProjectDetailContentLoading />
    </div>
  )
}
