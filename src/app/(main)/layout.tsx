import { Footer } from '@/components/layout/footer'
import { ReactNode } from 'react'

const MainLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <>
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
