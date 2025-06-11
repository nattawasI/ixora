type CareerResponse = {
  id: string
  status: 'draft' | 'published'
  title: string
  position_required: string
  requirement: string
}

export type { CareerResponse }
