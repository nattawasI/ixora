'use client'

import { useRef, useState } from 'react'
import ReactFullpage, { type fullpageApi } from '@fullpage/react-fullpage'

import { Footer } from '@/components/layout/footer'
import { ChevronDown } from '@/components/ui/icons-color'
import { SectionWhoWeAre } from './section-who-we-are'
import { SectionWhatWeDo } from './section-what-we-do'
import { SectionOurCommitment } from './section-our-commitment'

interface FullpageInstance {
  fullpageApi: fullpageApi
}

const ChevronDownButton = ({
  hideButton,
  fpRef,
}: {
  hideButton: boolean
  fpRef: React.RefObject<FullpageInstance | null>
}) => {
  return (
    !hideButton && (
      <button
        className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2"
        onClick={() => fpRef.current?.fullpageApi.moveSectionDown()}
      >
        <ChevronDown className="size-10" />
      </button>
    )
  )
}

const DesktopAboutLayout = () => {
  const [hideButton, setHideButton] = useState(false)
  const fp = useRef(null)

  return (
    <div className="relative">
      <ChevronDownButton hideButton={hideButton} fpRef={fp} />

      <ReactFullpage
        credits={{ enabled: false }}
        licenseKey={process.env.NEXT_PUBLIC_FP_LICENSE_KEY as string}
        ref={fp}
        onLeave={(_origin, destination, direction) => {
          setHideButton(destination.isLast && direction === 'down')
        }}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <section className="section pb-25">
                <SectionWhoWeAre />
              </section>
              <section className="section pb-25">
                <SectionWhatWeDo />
              </section>
              <section className="section pb-25">
                <SectionOurCommitment />
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
