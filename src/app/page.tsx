import { ProjectList, ProjectListLoading } from '@/components/modules/projects/project-list'

export default function Home() {
  return (
    <div className="px-4 max-lg:pt-5 max-lg:pb-6 lg:px-10">
      <h1 className="sr-only">Home</h1>
      <ProjectList />
      <ProjectListLoading />
    </div>
  )
}
