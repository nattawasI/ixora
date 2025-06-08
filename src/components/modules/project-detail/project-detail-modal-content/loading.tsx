import { DialogTitle, DialogDescription } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { ProjectDetailContentLoading } from '@/components/modules/project-detail/project-detail-content/loading'

const ProjectDetailModalContentLoading = () => {
  return (
    <div className="bg-white p-4 lg:p-12.5">
      <VisuallyHidden>
        <DialogTitle />
        <DialogDescription />
      </VisuallyHidden>
      <ProjectDetailContentLoading />
    </div>
  )
}

export { ProjectDetailModalContentLoading }
