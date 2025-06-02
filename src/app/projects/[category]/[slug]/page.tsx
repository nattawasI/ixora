import { ReadMore, ReadMoreTrigger, ReadMoreContent } from '@/components/ui/read-more'
import { SingleImage } from '@/components/modules/article-detail/single-image'
import { ColumnImages } from '@/components/modules/article-detail/column-images'
import { VideoPlayer } from '@/components/modules/article-detail/video-player'
import { SnsShareFooter } from '@/components/modules/article-detail/sns-share-footer'
import { ProjectExploreMore } from '@/components/modules/project-detail/project-explore-more'

export default function ProjectDetail() {
  return (
    <div className="mx-auto max-w-[77.5rem]">
      <div className="bg-white p-4 lg:p-12.5 lg:pb-7">
        <div className="space-y-5">
          <div className="space-y-2.5 lg:mb-[3.75rem]">
            <h1 className="typo-title-1 font-bold uppercase">SARANSIRI PRACHAUTHIT 90</h1>
            <p className="typo-body-2 uppercase">BANGKOK , THAILAND</p>
          </div>
          <div className="grid gap-5 md:grid-flow-col md:grid-cols-12 md:grid-rows-2 md:gap-7.5">
            <div className="space-y-1.25 md:col-span-4">
              <div className="typo-body-2 text-gray">Client :</div>
              <div className="typo-body-2 font-bold">CONFIDENTIAL</div>
            </div>
            <div className="space-y-1.25 md:col-span-4">
              <div className="typo-body-2 text-gray">Year :</div>
              <div className="typo-body-2 font-bold">2024</div>
            </div>
            <ReadMore className="md:col-span-8 md:pl-7.5">
              <p className="typo-body-2 whitespace-pre-line">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <ReadMoreContent>
                <p className="typo-body-2 mt-5 whitespace-pre-line">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </ReadMoreContent>
              <ReadMoreTrigger className="mt-4" />
            </ReadMore>
            <div className="md:col-span-8 md:pl-7.5">
              <p className="typo-body-2">
                Landscape Architect <span className="text-blue">•</span> <strong>Flix Landscape</strong>
              </p>
              <p className="typo-body-2">
                Photo Credit <span className="text-blue">•</span> <strong>Panoramic Studio</strong>
              </p>
            </div>
          </div>
          <div className="space-y-2.5">
            <SingleImage src="/mockup/project.jpg" alt="SARANSIRI PRACHAUTHIT 90" />
            <ColumnImages
              images={[
                { src: '/mockup/project.jpg', alt: 'SARANSIRI PRACHAUTHIT 90' },
                { src: '/mockup/project.jpg', alt: 'SARANSIRI PRACHAUTHIT 90' },
              ]}
            />
            <VideoPlayer src="/mockup/video.mp4" />
          </div>
          <SnsShareFooter
            label="Share this project"
            title="SARANSIRI PRACHAUTHIT 90"
            coverImage="/mockup/project.jpg"
          />
        </div>
      </div>
      <ProjectExploreMore />
    </div>
  )
}
