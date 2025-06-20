'use client'

import { useEffect } from 'react'

const UpdateMetadataTitleClient = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = `${title} | IXORA DESIGN`
  }, [title])

  return null
}

export { UpdateMetadataTitleClient }
