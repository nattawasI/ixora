import { ProjectCategoriesFilter } from '@/components/modules/projects/project-categories-filter'
import { ProjectListProvider } from '@/components/modules/projects/project-list-context'

export default function ProjectListLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <ProjectListProvider>
      <div className="px-4 max-lg:pt-5 max-lg:pb-6 lg:px-10">
        <ProjectCategoriesFilter />
        {children}
        {modal}
      </div>
    </ProjectListProvider>
  )
}
