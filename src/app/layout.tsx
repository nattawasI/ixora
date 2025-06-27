import './globals.css'
import { Montserrat } from 'next/font/google'
import { cookies } from 'next/headers'

/** components */
import { Body } from '@/components/layout/body'
import { Header } from '@/components/layout/header'
import { Preloader } from '@/components/layout/preloader'

import type { Metadata } from 'next'

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
        {children}
      </Body>
    </html>
  )
}
