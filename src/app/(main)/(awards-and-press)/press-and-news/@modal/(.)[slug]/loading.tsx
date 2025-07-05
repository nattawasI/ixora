'use client'

import { useEffect } from 'react'
import { PressDetailContentLoading } from '@/components/modules/press-detail/press-detail-content/loading'
import { DialogTitle } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { useArticleDetail } from '@/components/modules/article-detail-modal'

export default function Loading() {
  const { setIsLoading } = useArticleDetail()

  useEffect(() => {
    setIsLoading(true)

    return () => {
      setIsLoading(false)
    }
  }, [setIsLoading])

  return (
    <div className="px-4.75 py-4 lg:px-12.5 lg:py-12.5">
      <VisuallyHidden>
        <DialogTitle>Press and News Loading</DialogTitle>
      </VisuallyHidden>
      <PressDetailContentLoading />
    </div>
  )
}
