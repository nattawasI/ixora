import { Suspense } from 'react'
import { ProjectList, ProjectListLoading } from '@/components/modules/projects/project-list'

export default async function ProjectListCategory({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params

  return (
    <>
      <h1 className="sr-only">{category}</h1>
      <Suspense fallback={<ProjectListLoading />}>
        <ProjectList />
      </Suspense>
    </>
  )
}
