'use client'

import ReactFullpage from '@fullpage/react-fullpage'

import { Footer } from '@/components/layout/footer'
import { SlideWhoWeAre } from './section-who-we-are'
import { SlideWhatWeDo } from './section-what-we-do'
import { SlideOurCommitment } from './section-our-commitment'

const DesktopAboutLayout = () => {
  return (
    <ReactFullpage
      credits={{ enabled: false }}
      licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"
      render={() => (
        <ReactFullpage.Wrapper>
          <div className="section pb-25">
            <SlideWhoWeAre />
          </div>
          <div className="section pb-25">
            <SlideWhatWeDo />
          </div>
          <div className="section pb-25">
            <SlideOurCommitment />
          </div>
          <div className="section fp-auto-height">
            <Footer />
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  )
}

export { DesktopAboutLayout }
