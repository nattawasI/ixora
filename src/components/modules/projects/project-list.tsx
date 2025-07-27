/** libs */
import { cn } from '@/libs/utils/cn'
import { CursorProvider } from '@/components/common/cursor-provider'
import { getProjectByCategory } from '@/libs/directus/service/project-category'

/** components */
import Link from 'next/link'
import { CardProjectLoading } from '@/components/ui/card-project'
import { EmptyData } from '@/components/ui/empty-data'
import { CardProject } from '@/components/ui/card-project'
import { UpdateProjectListContext } from '@/components/modules/projects/update-project-list-context'
import { MotionStaggerRoot, MotionStaggerItem } from '@/components/common/motion'

const ProjectList = async ({ category }: { category: string }) => {
  const data = await getProjectByCategory({ category })

  if (data.length === 0) {
    return <EmptyData />
  }

  return (
    <>
      <UpdateProjectListContext data={data} />
      <CursorProvider cursorIcon="logo">
        <MotionStaggerRoot>
          <div className="list-project">
            {data.map((item, index) => (
              <MotionStaggerItem key={index}>
                <Link
                  className="block"
                  href={`/projects/${item.category.slug}/${item.slug}`}
                  prefetch={false}
                  scroll={false}
                >
                  <CardProject
                    data-cursor-target
                    className="cursor-none"
                    image={{
                      src: item.cover.src,
                      alt: item.title,
                      sizes: '100vw, (min-width: 768px) 33vw',
                      priority: index <= 5,
                    }}
                    title={{
                      tag: 'h2',
                      text: item.title,
                    }}
                    location={item.location}
                  />
                </Link>
              </MotionStaggerItem>
            ))}
          </div>
        </MotionStaggerRoot>
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
