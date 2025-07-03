import { Suspense } from 'react'
import { HeadingPage } from '@/components/ui/heading-page'
import { CareerList, CareerListLoading } from '@/components/modules/career/career-list'
import { CardOther } from '@/components/ui/card-other'
import { SeparatorIcon } from '@/components/ui/separator'
import { FullLogoGray } from '@/components/ui/icons-color/full-logo-gray'
import { CopyEmail } from '@/components/modules/career/copy-email'
import { MotionPageFade } from '@/components/common/motion'
import { getMetadata } from '@/libs/utils/metadata'
import type { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return getMetadata({
    pathname: `/career`,
    data: {
      title: 'Career',
      description:
        'Explore career opportunities at IXORA DESIGN—where passionate professionals collaborate to create award-winning, sustainable landscape solutions worldwide.',
      ogImage: null,
    },
  })
}

export default function Career() {
  return (
    <MotionPageFade>
      <div className="pb-4 max-lg:pt-4 lg:pb-12.5">
        <HeadingPage className="c-container-sm lg:mb-15">CAREER</HeadingPage>
        <div className="c-container-sm mb-12.5 lg:mb-[6.25rem]">
          <Suspense fallback={<CareerListLoading />}>
            <CareerList />
          </Suspense>
        </div>
        <div className="relative flex h-[37.5rem] items-center justify-center bg-[url('/images/career/how-to-apply-portrait.jpg')] bg-cover bg-center lg:h-[40rem] lg:bg-[url('/images/career/how-to-apply-landscape.jpg')] lg:bg-cover lg:bg-center">
          <div className="c-container-sm">
            <div className="min-h-[25rem] bg-black/70 p-10 lg:grid lg:grid-cols-2 lg:p-[3.75rem]">
              <h2 className="typo-title-2--rps text-blue-2 uppercase max-lg:mb-5">
                HOW TO <span className="text-blue font-semibold">APPLY</span>
              </h2>
              <div className="flex flex-col">
                <div className="flex-1">
                  <p className="typo-body-1 text-white">
                    We&apos;d love to hear from you! Please send your CV and portfolio to our email if you&apos;re
                    interested in this opportunity.
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-2.5 lg:py-5">
                    <p className="typo-body-1 text-white">Email : ixora@ixoradesign.com</p>
                    <CopyEmail value="ixora@ixoradesign.com" />
                  </div>
                </div>
                <FullLogoGray className="mt-10" />
              </div>
            </div>
          </div>
        </div>
        <SeparatorIcon />
        <div className="c-container-sm">
          <CardOther
            image={{
              src: '/images/career/benefits.jpg',
              alt: 'BENEFITS',
              sizes: '100vw, (min-width: 768px) 50vw, (min-width: 1280px) 620px',
            }}
            title={{ text: 'BENEFITS' }}
            description={`Employees enjoy comprehensive health insurance, annual paid leave, and performance-based bonuses. We also support professional development through training opportunities and encourage work-life balance with flexible working hours.`}
          />
        </div>
      </div>
    </MotionPageFade>
  )
}
