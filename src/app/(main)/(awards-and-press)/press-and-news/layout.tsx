import { PressListProvider } from '@/components/modules/press/press-list-context'

export default function PressAndNewsLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <PressListProvider>
      {children}
      {modal}
    </PressListProvider>
  )
}
