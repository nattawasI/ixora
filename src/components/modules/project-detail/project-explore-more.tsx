import { ExploreMoreAccordion } from '@/components/modules/article-detail/explore-more-accordion'
import { ProjectCard } from '@/components/modules/projects/project-card'
import Link from 'next/link'

const ProjectExploreMore = () => {
  return (
    <ExploreMoreAccordion type="single" collapsible>
      <div className="grid gap-2.5 md:grid-cols-3 md:pb-7.5">
        {Array.from({ length: 3 }).map((_, index) => (
          <Link href="/projects/residential/1" className="block" key={index}>
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
    </ExploreMoreAccordion>
  )
}

export { ProjectExploreMore }
