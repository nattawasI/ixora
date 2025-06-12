type StatusType = 'draft' | 'published'

type CareerResponse = {
  id: string
  status: StatusType
  title: string
  position_required: string
  requirement: string
}

type PeopleResponse = {
  id: string
  status: StatusType
  first_name: string
  last_name: string
  position: string
  image: ImageResponse | null
}

type ImageResponse = {
  id: string
  filename_disk: string
  filename_download: string
  width: number
  height: number
  filesize: number
  title: string
}

type AwardsResponse = {
  id: string
  status: StatusType
  title: string
  project: string
  image: ImageResponse | null
  content_lead: string
  content_more: string
  date: string
}

type NewsResponse = {
  id: string
  status: StatusType
  date_created: string
  date_updated: string
  title: string
  published_date: string
  slug: string
  discription: string
  content: string
  cover: string
  gallery: NewsGalleryResponse[]
  video: NewsVideoResponse[]
}

type NewsGalleryResponse = {
  id: string
  news_id: string
  sort: number
  directus_files_id: ImageResponse
}

type NewsVideoResponse = {
  id: string
  news_id: string
  sort: number
  item: {
    video: ImageResponse
  }
}

export type {
  CareerResponse,
  PeopleResponse,
  ImageResponse,
  AwardsResponse,
  NewsResponse,
  NewsGalleryResponse,
  NewsVideoResponse,
}
