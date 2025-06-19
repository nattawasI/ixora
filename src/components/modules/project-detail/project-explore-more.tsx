import { ExploreMoreCollapsible } from '@/components/modules/article-detail/explore-more-collapsible'
import { ProjectCard } from '@/components/modules/projects/project-card'
import Link from 'next/link'
import { cn } from '@/libs/utils/cn'
import { getProjectDetailExploreMore } from '@/libs/directus/service/project-detail'

type ProjectExploreMoreProps = {
  isInModal?: boolean
  slug: string
  category: string
}

const ProjectExploreMore = async ({ isInModal, slug, category }: ProjectExploreMoreProps) => {
  const data = await getProjectDetailExploreMore({ slug, category })

  return (
    <section className={cn('max-lg:px-4 max-lg:pt-4', isInModal ? 'lg:px-12.5' : '')}>
      <ExploreMoreCollapsible>
        <div className={cn('grid gap-2.5 max-lg:pt-4 md:grid-cols-3', isInModal ? 'lg:pb-10' : 'md:pb-7.5')}>
          {data.map((item, index) => (
            <Link href={`/projects/${item.category.slug}/${item.slug}`} className="block" key={index}>
              <ProjectCard
                image={{
                  src: item.cover,
                  alt: item.title,
                  sizes: '100vw, (min-width: 768px) 33vw',
                }}
                title={{
                  tag: 'h3',
                  text: item.title,
                }}
                location={item.location}
              />
            </Link>
          ))}
        </div>
      </ExploreMoreCollapsible>
    </section>
  )
}

export { ProjectExploreMore }
