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

export type { CareerResponse, PeopleResponse, ImageResponse }
