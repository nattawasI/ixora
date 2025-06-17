'use client'

import { useRouter } from 'next/navigation'
import { PageModal, PageModalContent } from '@/components/ui/page-modal'

const PressDetailModal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  return (
    <PageModal
      defaultOpen
      onOpenChange={() => {
        router.back()
      }}
    >
      <PageModalContent aria-describedby={undefined} contentSize="small">
        {children}
      </PageModalContent>
    </PageModal>
  )
}

export { PressDetailModal }
