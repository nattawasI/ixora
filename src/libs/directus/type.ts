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

export type { CareerResponse, PeopleResponse, ImageResponse, AwardsResponse }
