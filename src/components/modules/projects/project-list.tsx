import { cn } from '@/libs/utils/cn'
import { CardProjectLoading } from '@/components/ui/card-project'
import { ProjectCard } from '@/components/modules/projects/project-card'
import Link from 'next/link'
import { CursorProvider } from '@/libs/context/cursor'
import { getProjectList } from '@/libs/directus/service/project-list'

const ProjectList = async () => {
  /** fetch here */
  const data = await getProjectList()

  console.log(data)

  return (
    <CursorProvider>
      <div className="list-project">
        {Array.from({ length: 21 }).map((_, index) => (
          <Link href="/projects/residential/2" className="block" key={index}>
            <ProjectCard
              image={{
                src: '/mockup/project.jpg',
                alt: 'XT HUAIKHWANG',
                sizes: '100vw, (min-width: 768px) 33vw',
              }}
              title={{
                tag: 'h2',
                text: 'XT HUAIKHWANG',
              }}
              location={'BANGKOK, THAILAND'}
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
