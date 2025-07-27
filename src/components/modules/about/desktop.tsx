'use client'

import { useRef, useState, useEffect } from 'react'
import ReactFullpage, { type fullpageApi } from '@fullpage/react-fullpage'

import { Footer } from '@/components/layout/footer'
import { ChevronDown } from '@/components/ui/icons-color'
import { SectionWhoWeAre } from './section-who-we-are'
import { SectionWhatWeDo } from './section-what-we-do'
import { SectionOurCommitment } from './section-our-commitment'
import { CursorProvider } from '@/components/common/cursor-provider'
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
  useEffect(() => {
    if (fpRef.current) {
      document.addEventListener('moveFullPageToLast', () => {
        fpRef.current?.fullpageApi.moveTo(4)
      })
    }
  }, [fpRef])

  return (
    !hideButton && (
      <button
        type="button"
        aria-label="Scroll down"
        className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2"
        onClick={() => fpRef.current?.fullpageApi.moveSectionDown()}
      >
        <ChevronDown className="size-10" />
      </button>
    )
  )
}

const DesktopAboutLayout = () => {
  const [hideButton, setHideButton] = useState(false)
  const fpRef = useRef(null)

  return (
    <CursorProvider cursorIcon="scroller">
      <div className="relative">
        <ChevronDownButton hideButton={hideButton} fpRef={fpRef} />
        <ReactFullpage
          credits={{ enabled: false }}
          licenseKey={process.env.NEXT_PUBLIC_FP_LICENSE_KEY as string}
          ref={fpRef}
          onLeave={(_origin, destination, direction) => {
            setHideButton(destination.isLast && direction === 'down')
          }}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <section className="section pb-25">
                  <SectionWhoWeAre isDesktop />
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
    </CursorProvider>
  )
}

export { DesktopAboutLayout }
