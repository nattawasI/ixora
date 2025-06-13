export default function PressAndNewsLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <>
      {children}
      {modal}
    </>
  )
}
