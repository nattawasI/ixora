import { ReactNode } from 'react'

const AboutLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return <main>{children}</main>
}

export default AboutLayout
