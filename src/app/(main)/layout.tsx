import { Footer } from '@/components/layout/footer'
import { ReactNode } from 'react'

const MainLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
