'use client'

import { useRouter } from 'next/navigation'
import { PageModal, PageModalContent } from '@/components/ui/page-modal'

const ProjectDetailModal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  return (
    <PageModal
      defaultOpen
      onOpenChange={() => {
        router.back() // logic ตรงนี้อาจจะเปลี่ยนทีหลัง เพราะ modal เรามี prev, next ทำให้ไม่สามารถใช้ router.back() ได้
      }}
    >
      <PageModalContent aria-describedby={undefined} contentSize="large">
        {children}
      </PageModalContent>
    </PageModal>
  )
}

export { ProjectDetailModal }
