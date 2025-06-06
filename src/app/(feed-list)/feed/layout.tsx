import Link from 'next/link'

export default async function FeedLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <>
      <div>List layout</div>
      <Link href="/feed/test/1" className="underline">
        Link to slug
      </Link>
      {children}
      {modal}
    </>
  )
}
