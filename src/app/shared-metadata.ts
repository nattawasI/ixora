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

export const defaultOpenGraphImage: OpenGraphImageType = {
  url: `${process.env.NEXT_PUBLIC_BASE_URL}/ogimage.jpg`, // og image default url
  alt: 'IXORA DESIGN', // og image default alt
}

export const defaultOpenGraph: Metadata['openGraph'] = {
  url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  siteName: 'IXORA DESIGN',
  locale: 'th_TH',
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
    url: `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`,
    images: [
      {
        url: image?.url || defaultOpenGraphImage.url,
        alt: image?.alt || defaultOpenGraphImage.alt,
      },
    ],
  }
}

export const getMetadata = ({ pathname, data }: { pathname: string; data: SeoType | null }): Metadata => {
  const title = data?.title as string
  const description = data?.description

  const openGraph = getOpenGraph({
    pathname,
    image: {
      url: data?.ogImage ?? '',
      alt: title,
    },
  })

  return {
    title,
    description: description || '',
    openGraph: {
      ...openGraph,
      title,
      description: description || '',
    },
  }
}
