'use client'

import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@radix-ui/react-dialog'
import { SnsShareSticky } from '@/components/modules/article-detail/sns-share-sticky'
import { SocialShareProvider } from '@/components/modules/article-detail/sns-share-context'

export default function ProjectDetailModal() {
  const router = useRouter()
  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-30 bg-black/50">
          <DialogContent>
            <SocialShareProvider>
              <SnsShareSticky inLayout="modal" title="SARANSIRI PRACHAUTHIT 90" coverImage="/mockup/project.jpg" />
              <div className="bg-white p-16">
                <DialogTitle>Slug Modal</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove your data from our
                  servers.
                </DialogDescription>
              </div>
            </SocialShareProvider>
            <DialogClose>Cancel</DialogClose>
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  )
}
