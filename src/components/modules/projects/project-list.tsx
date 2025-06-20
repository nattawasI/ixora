import { cn } from '@/libs/utils/cn'
import { CardProjectLoading } from '@/components/ui/card-project'
import { ProjectCard } from '@/components/modules/projects/project-card'
import { UpdateProjectListContext } from '@/components/modules/projects/update-project-list-context'
import { EmptyData } from '@/components/ui/empty-data'
import Link from 'next/link'
import { CursorProvider } from '@/libs/context/cursor'
import { getProjectByCategory } from '@/libs/directus/service/project-category'

const ProjectList = async ({ category }: { category: string }) => {
  const data = await getProjectByCategory({ category })

  if (data.length === 0) {
    return <EmptyData />
  }

  return (
    <>
      <UpdateProjectListContext data={data} />
      <CursorProvider>
        <div className="list-project">
          {data.map((item, index) => (
            <Link
              href={`/projects/${item.category.slug}/${item.slug}`}
              className="block"
              key={index}
              prefetch={false}
              scroll={false}
            >
              <ProjectCard
                image={{
                  src: item.cover,
                  alt: item.title,
                  sizes: '100vw, (min-width: 768px) 33vw',
                }}
                title={{
                  tag: 'h2',
                  text: item.title,
                }}
                location={item.location}
              />
            </Link>
          ))}
        </div>
      </CursorProvider>
    </>
  )
}

const ProjectListLoading = () => {
  return (
    <div className="list-project">
      {Array.from({ length: 6 }).map((_, index) => (
        <CardProjectLoading key={index} className={cn(index > 1 ? 'max-md:hidden' : '')} />
      ))}
    </div>
  )
}

export { ProjectList, ProjectListLoading }
