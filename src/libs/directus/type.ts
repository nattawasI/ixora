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
  slug: 'residential' | 'condominium' | 'hospitality' | 'commercial' | 'master-planning' | 'public-space'
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
  discription: string
  content: string
  cover: string
  gallery: (GalleryResponse & { news_id: string })[]
  video: (VideoResponse & { news_id: string })[]
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
    video: MediaResponse
  }
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
  cover: string
  client: string
  category: CategoryResponse
  title: string
  gallery: (GalleryResponse & { project_id: string })[]
  video: (VideoResponse & { project_id: string })[]
}

export type { CareerResponse, PeopleResponse, MediaResponse, AwardsResponse, NewsResponse, ProjectResponse }
