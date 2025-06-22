/** types */
import type { Metadata } from 'next'

type SeoType = {
  title: string | null
  description: string | null
  ogImage: string | null
}

type OpenGraphImageType = {
  url: string
  alt?: string
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const SITE_NAME = 'IXORA DESIGN'
const DEFAULT_OG_IMAGE = ''
// const DEFAULT_OG_IMAGE = `${BASE_URL}/ogimage.jpg`

export const defaultOpenGraphImage: OpenGraphImageType = {
  url: DEFAULT_OG_IMAGE,
  alt: SITE_NAME,
}

export const defaultOpenGraph: Metadata['openGraph'] = {
  url: BASE_URL,
  siteName: SITE_NAME,
  locale: 'en_US',
  type: 'website',
  images: [defaultOpenGraphImage],
}

export const getOpenGraph = ({
  pathname = '',
  image,
}: {
  pathname?: string
  image?: OpenGraphImageType
}): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    url: `${BASE_URL}${pathname}`,
    images: [
      {
        url: image?.url || defaultOpenGraphImage.url,
        alt: image?.alt || defaultOpenGraphImage.alt,
      },
    ],
  }
}

export const getMetadata = ({ pathname, data }: { pathname: string; data: SeoType | null }): Metadata => {
  const baseTitle = data?.title?.trim() || ''
  const title = baseTitle ? `${baseTitle} - ${SITE_NAME}` : SITE_NAME
  const description = data?.description?.trim() || ''

  const openGraph = getOpenGraph({
    pathname,
    image: {
      url: data?.ogImage || DEFAULT_OG_IMAGE,
      alt: baseTitle || SITE_NAME,
    },
  })

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL!),
    alternates: {
      canonical: `${BASE_URL}${pathname}`,
    },
    openGraph: {
      ...openGraph,
      title,
      description,
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: [data?.ogImage || DEFAULT_OG_IMAGE],
    },
    robots: 'index, follow',
  }
}
