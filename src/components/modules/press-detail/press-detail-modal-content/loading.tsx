import { DialogTitle, DialogDescription } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { PressDetailContentLoading } from '@/components/modules/press-detail/press-detail-content/loading'

const PressDetailModalContentLoading = () => {
  return (
    <div className="bg-white p-4 lg:p-12.5">
      <VisuallyHidden>
        <DialogTitle />
        <DialogDescription />
      </VisuallyHidden>
      <PressDetailContentLoading />
    </div>
  )
}

export { PressDetailModalContentLoading }
