import { cn } from '@/libs/utils/cn'
import { CardProject, CardProjectLoading } from '@/components/ui/card-project'
import Link from 'next/link'

const ProjectList = () => {
  return (
    <div className="list-project">
      {Array.from({ length: 21 }).map((_, index) => (
        <Link href="#" className="block" key={index}>
          <CardProject
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
