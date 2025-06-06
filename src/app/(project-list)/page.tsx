import { Suspense } from 'react'
import { ProjectList, ProjectListLoading } from '@/components/modules/projects/project-list'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Link href="/login">Login</Link>
      <h1 className="sr-only">PROJECTS</h1>
      <Suspense fallback={<ProjectListLoading />}>
        <ProjectList />
      </Suspense>
    </>
  )
}
