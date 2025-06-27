'use client'

import { useRef } from 'react'
import ReactFullpage, { fullpageApi } from '@fullpage/react-fullpage'

import { Footer } from '@/components/layout/footer'
import { ChevronDown } from '@/components/ui/icons-color'
import { SlideWhoWeAre } from './section-who-we-are'
import { SlideWhatWeDo } from './section-what-we-do'
import { SlideOurCommitment } from './section-our-commitment'

const ChevronDownButton = ({ fullpageApi }: { fullpageApi: fullpageApi }) => {
  return (
    <button className="absolute bottom-25 left-1/2 z-50 -translate-x-1/2" onClick={() => fullpageApi.moveSectionDown()}>
      <ChevronDown className="size-10" />
    </button>
  )
}

const DesktopAboutLayout = () => {
  const fp = useRef<ReactFullpage>(null)

  return (
    <div className="relative">
      <ReactFullpage
        credits={{ enabled: false }}
        licenseKey={process.env.NEXT_PUBLIC_FP_LICENSE_KEY as string}
        ref={fp}
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <section className="section pb-25">
                <SlideWhoWeAre />
                <ChevronDownButton fullpageApi={fullpageApi} />
              </section>
              <section className="section pb-25">
                <SlideWhatWeDo />
                <ChevronDownButton fullpageApi={fullpageApi} />
              </section>
              <section className="section pb-25">
                <SlideOurCommitment />
              </section>
              <section className="section fp-auto-height">
                <Footer />
              </section>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
  )
}

export { DesktopAboutLayout }
