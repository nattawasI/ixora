'use client'

import { useRouter } from 'next/navigation'
import { PageDetailModal, PageDetailModalContent } from '@/components/ui/page-modal'

const ProjectDetailModal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  return (
    <PageDetailModal
      defaultOpen
      onOpenChange={() => {
        router.back() // logic ตรงนี้อาจจะเปลี่ยนทีหลัง เพราะ modal เรามี prev, next ทำให้ไม่สามารถใช้ router.back() ได้
      }}
    >
      <PageDetailModalContent aria-describedby={undefined} contentSize="large">
        {children}
      </PageDetailModalContent>
    </PageDetailModal>
  )
}

export { ProjectDetailModal }
