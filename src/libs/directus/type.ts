type StatusType = 'draft' | 'published'
type CategoryType = 'residential' | 'condominium' | 'hospitality' | 'commercial' | 'master-planning' | 'public-space'

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
  image: MediaResponse | null
}

type MediaResponse = {
  id: string
  filename_disk: string
  filename_download: string
  width: number
  height: number
  filesize: number
  title: string
}

type CategoryResponse = {
  id: string
  title: string
  slug: CategoryType
}

type AwardsResponse = {
  id: string
  status: StatusType
  title: string
  project: {
    title: string
    slug: string
    year: string
    category: CategoryResponse
  }
  image: MediaResponse | null
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
  description: string
  content: string
  cover: MediaResponse & { src: string }
  gallery: (GalleryResponse & { news_id: string })[]
  video: (VideoResponse & { news_id: string })[]
}

type NewsDetailResponse = Omit<NewsResponse, 'gallery' | 'video'> & {
  gallery: GalleryGroupImage[]
  video: (VideoResponse & { news_id: string; src: string })[]
}

type GalleryResponse = {
  id: string
  sort: number
  directus_files_id: MediaResponse
}

type VideoResponse = {
  id: string
  sort: number
  item: {
    title: string
    embed_code?: string
    video?: MediaResponse & { src: string }
  }
}

type GalleryGroupImage = {
  type: 'landscape' | 'portrait-stack'
  images: (MediaResponse & { src: string })[]
}

type ProjectResponse = {
  id: string
  sort: number
  status: StatusType
  date_created: string
  date_updated: string
  slug: string
  location: string
  year: string
  landscape_architect: string
  photo_credit: string
  content_lead: string
  content_more: string
  cover: MediaResponse & { src: string }
  client: string
  title: string
  category: CategoryResponse
  gallery: (GalleryResponse & { project_id: string })[]
  video: (VideoResponse & { project_id: string })[]
}

type ProjectDetailResponse = Omit<ProjectResponse, 'gallery' | 'video'> & {
  cover: string
  gallery: GalleryGroupImage[]
  video: (VideoResponse & { project_id: string })[]
}

export type {
  CategoryType,
  CareerResponse,
  PeopleResponse,
  MediaResponse,
  GalleryGroupImage,
  AwardsResponse,
  NewsResponse,
  NewsDetailResponse,
  ProjectResponse,
  ProjectDetailResponse,
}
