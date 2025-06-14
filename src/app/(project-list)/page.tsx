import { Suspense } from 'react'
import { ProjectList, ProjectListLoading } from '@/components/modules/projects/project-list'

export default function Home() {
  return (
    <>
      <h1 className="sr-only">PROJECTS</h1>
      <Suspense fallback={<ProjectListLoading />}>
        <ProjectList category="" />
      </Suspense>
    </>
  )
}
