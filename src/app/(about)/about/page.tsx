import { getMetadata } from '@/libs/utils/metadata'
import { AboutPageContent } from '@/components/modules/about'
import { CustomCursor } from '@/components/common/custom-cursor'

import type { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return getMetadata({
    pathname: `/about`,
    data: {
      title: 'Sustainable Landscape Design Solutions by IXORA DESIGN',
      description:
        'Ixora Design crafts innovative, sustainable landscape design solutions that blend nature with human needs, led by seasoned architects with global experience since 2003.',
      ogImage: null,
    },
  })
}

export default function AboutPage() {
  return (
    <>
      <AboutPageContent />
      <CustomCursor icon="scroller" />
    </>
  )
}
