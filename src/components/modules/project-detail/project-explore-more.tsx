import { ExploreMoreCollapsible } from '@/components/modules/article-detail/explore-more-collapsible'
import { ProjectCard } from '@/components/modules/projects/project-card'
import Link from 'next/link'
import { cn } from '@/libs/utils/cn'

const ProjectExploreMore = ({ isInModal }: { isInModal?: boolean }) => {
  return (
    <ExploreMoreCollapsible>
      <div className={cn('grid gap-2.5 max-lg:pt-4 md:grid-cols-3', isInModal ? 'lg:pb-10' : 'md:pb-7.5')}>
        {Array.from({ length: 3 }).map((_, index) => (
          <Link href="/projects/residential/4" className="block" key={index}>
            <ProjectCard
              image={{
                src: '/mockup/project.jpg',
                alt: 'XT HUAIKHWANG',
                sizes: '100vw, (min-width: 768px) 33vw',
              }}
              title={{
                tag: 'h3',
                text: 'XT HUAIKHWANG',
              }}
              location={'BANGKOK, THAILAND'}
            />
          </Link>
        ))}
      </div>
    </ExploreMoreCollapsible>
  )
}

export { ProjectExploreMore }
