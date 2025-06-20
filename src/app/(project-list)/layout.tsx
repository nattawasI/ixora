import { ProjectCategoriesFilter } from '@/components/modules/projects/project-categories-filter'
import { ProjectListProvider } from '@/components/modules/projects/project-list-context'
import type { NavigationItemType } from '@/components/layout/type'

const mockupProjectCategories: NavigationItemType[] = [
  { label: 'RESIDENTIAL', href: '/projects/residential' },
  { label: 'CONDOMINIUM', href: '/projects/condominium' },
  { label: 'HOSPITALITY', href: '/projects/hospitality' },
  { label: 'COMMERCIAL', href: '/projects/commercial' },
  { label: 'MASTER PLANNING', href: '/projects/master-planning' },
  { label: 'PUBLIC SPACE ', href: '/projects/public-space' },
]

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
        <ProjectCategoriesFilter categories={mockupProjectCategories} />
        {children}
        {modal}
      </div>
    </ProjectListProvider>
  )
}
