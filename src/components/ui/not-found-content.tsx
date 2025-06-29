import Link from 'next/link'

const NotFoundContent = () => {
  return (
    <div className="flex h-[calc(100vh-60px)] flex-col items-center justify-center pb-20 text-center lg:h-[calc(100vh-100px)] lg:pb-[100px]">
      <h2>
        <span className="text-blue block text-6xl font-semibold">404</span>
        <span className="mt-3 block text-2xl font-semibold">Not Found</span>
      </h2>
      <Link href="/" className="hover:text-blue mt-6 underline duration-300 underline-offset-2">
        Back to Home
      </Link>
    </div>
  )
}

export { NotFoundContent }
