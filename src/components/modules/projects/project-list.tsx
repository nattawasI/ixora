import { cn } from '@/libs/utils/cn'
import { CardProjectLoading } from '@/components/ui/card-project'
import { ProjectCard } from '@/components/modules/projects/project-card'
import Link from 'next/link'
import { CursorProvider } from '@/libs/context/cursor'
import { getProjectByCategory } from '@/libs/directus/service/project-category'

const ProjectList = async ({ category }: { category: string }) => {
  /** fetch here */
  const data = await getProjectByCategory({ category })

  console.log(data, category)

  return (
    <CursorProvider>
      <div className="list-project">
        {data.map((item, index) => (
          <Link href={`/projects/${item.category.slug}/${item.slug}`} className="block" key={index}>
            <ProjectCard
              image={{
                src: `${process.env.DIRECTUS_URL}/assets/${item.cover}`,
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
