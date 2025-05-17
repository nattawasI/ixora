import { HeadingPage } from '@/components/ui/heading-page'
import { CareerList } from '@/components/modules/career/career-list'

export default function Career() {
  return (
    <>
      <div className="c-container-px">
        <HeadingPage>CAREER</HeadingPage>
        <CareerList />
      </div>
    </>
  )
}
