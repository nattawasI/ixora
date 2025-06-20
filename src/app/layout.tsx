import './globals.css'
import { cn } from '@/libs/utils/cn'
import { Montserrat } from 'next/font/google'

/** components */
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Preloader } from '@/components/layout/preloader'
import { ThemeSetter } from '@/components/layout/theme-setter'

import type { Metadata } from 'next'
import { cookies } from 'next/headers'

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
      <body className={cn('typo-body-1 bg-gray-light-2 flex min-h-screen flex-col', montserrat.className)}>
        {hasVisited?.value !== 'true' ? <Preloader /> : null}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ThemeSetter />
      </body>
    </html>
  )
}
