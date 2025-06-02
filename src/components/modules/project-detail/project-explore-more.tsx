import { ExploreMoreSection } from '@/components/ui/explore-more-section'
import { ButtonArrowLink } from '@/components/ui/button-arrow'
import { ProjectCard } from '@/components/modules/projects/project-card'
import Link from 'next/link'

const ProjectExploreMore = () => {
  return (
    <ExploreMoreSection type="single" collapsible>
      <div className="grid gap-2.5 pb-7.5 lg:grid-cols-3">
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
      <ButtonArrowLink
        href={'/projects/residential'}
        className="w-full"
      >{`SEE ALL ${'RESIDENTIAL'} PROJECTS`}</ButtonArrowLink>
    </ExploreMoreSection>
  )
}

export { ProjectExploreMore }
