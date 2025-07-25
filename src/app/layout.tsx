import './globals.css'
import { Montserrat } from 'next/font/google'
import { draftMode } from 'next/headers'

/** components */
import { Body } from '@/components/layout/body'
import { Header } from '@/components/layout/header'
import { Preloader } from '@/components/layout/preloader'
import { GlobalProvider } from '@/components/layout/global-context'

import type { Metadata } from 'next'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'IXORA DESIGN',
  description: '',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html lang="en">
      <Body className={montserrat.className}>
        {!isEnabled ? <Preloader /> : null}
        <GlobalProvider>
          <Header />
          {children}
        </GlobalProvider>
      </Body>
    </html>
  )
}
