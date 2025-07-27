import { PressListProvider } from '@/components/modules/press/press-list-context'
import { CustomCursor } from '@/components/common/custom-cursor'

export default function PressAndNewsLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <>
      <PressListProvider>
        {children}
        {modal}
      </PressListProvider>
      <CustomCursor icon="logo" />
    </>
  )
}
