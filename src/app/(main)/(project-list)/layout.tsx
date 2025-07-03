import { ProjectCategoriesFilter } from '@/components/modules/projects/project-categories-filter'
import { ProjectListProvider } from '@/components/modules/projects/project-list-context'
import { MotionPageFade } from '@/components/common/motion'

export default function ProjectListLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <ProjectListProvider>
      <MotionPageFade>
        <div className="px-4.75 max-lg:pt-5 max-lg:pb-6 lg:px-10">
          <ProjectCategoriesFilter />
          {children}
        </div>
      </MotionPageFade>
      {modal}
    </ProjectListProvider>
  )
}
