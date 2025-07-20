import { ButtonArrowLink } from '@/components/ui/button-arrow'

const SectionOurCommitment = () => {
  return (
    <div className="c-container-sm about-page-container space-y-16">
      <div className="grid grid-cols-12 gap-y-20">
        <div className="col-span-12 space-y-5 md:col-span-9 md:col-start-4">
          <h2 className="typo-title-2--rps font-semibold">OUR COMMITMENT</h2>
          <p className="typo-body-2--title-3">
            Our commitment to excellence is recognized through numerous prestigious awards, including the TALA Design
            Award, Muse Design Award, and the esteemed German Design Award.
            <br />
            <br />
            These accolades highlight our dedication to pushing the boundaries of landscape architecture.
          </p>
        </div>
        <div className="col-span-12 md:col-span-9 md:col-start-4">
          <ButtonArrowLink href="/awards">Award & Press</ButtonArrowLink>
        </div>
      </div>
    </div>
  )
}

export { SectionOurCommitment }
