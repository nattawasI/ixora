import { Suspense } from 'react'
import { getMetadata } from '@/libs/data/metadata'
import { ProjectList, ProjectListLoading } from '@/components/modules/projects/project-list'
import type { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return getMetadata({
    pathname: `/`,
    data: {
      title: 'Our Projects',
      description:
        'Discover IXORA DESIGN’s diverse landscape architecture projects, delivering sustainable solutions that harmonize natural beauty with purposeful design.',
      ogImage: null,
    },
  })
}

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
