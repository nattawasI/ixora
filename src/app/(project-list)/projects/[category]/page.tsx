import { Suspense } from 'react'
import { getMetadata } from '@/libs/data/metadata'
import { ProjectList, ProjectListLoading } from '@/components/modules/projects/project-list'
import type { Metadata } from 'next'

type PageProps = { params: Promise<{ category: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params
  return getMetadata({
    pathname: `/projects/${category}`,
    data: {
      title: 'Our Projects',
      description:
        'Discover IXORA DESIGN’s diverse landscape architecture projects, delivering sustainable solutions that harmonize natural beauty with purposeful design.',
      ogImage: null,
    },
  })
}

export default async function ProjectListCategory({ params }: PageProps) {
  const { category } = await params

  return (
    <>
      <h1 className="sr-only">{category}</h1>
      <Suspense fallback={<ProjectListLoading />}>
        <ProjectList category={category} />
      </Suspense>
    </>
  )
}
