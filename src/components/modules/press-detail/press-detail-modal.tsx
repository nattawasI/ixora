'use client'

import { useRouter } from 'next/navigation'
import { PageDetailModal, PageDetailModalContent } from '@/components/ui/page-modal'

const PressDetailModal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  return (
    <PageDetailModal
      defaultOpen
      onOpenChange={() => {
        router.back()
      }}
    >
      <PageDetailModalContent aria-describedby={undefined} contentSize="small">
        {children}
      </PageDetailModalContent>
    </PageDetailModal>
  )
}

export { PressDetailModal }
