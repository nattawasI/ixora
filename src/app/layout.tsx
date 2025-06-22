import './globals.css'
import { Montserrat } from 'next/font/google'

/** components */
import { Body } from '@/components/layout/body'
import { Header } from '@/components/layout/header'
import { Preloader } from '@/components/layout/preloader'

import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Footer } from '@/components/layout/footer'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'IXORA DESIGN',
  description: '',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const hasVisited = (await cookies()).get('hasVisited')
  return (
    <html lang="en">
      <Body className={montserrat.className}>
        {hasVisited?.value !== 'true' ? <Preloader /> : null}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </Body>
    </html>
  )
}
