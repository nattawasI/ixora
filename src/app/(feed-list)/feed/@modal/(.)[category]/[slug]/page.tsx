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

export default function SlugModal() {
  const router = useRouter()

  return (
    <Dialog defaultOpen onOpenChange={() => router.back()}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-30 bg-black/50">
          <DialogContent>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </DialogDescription>
            <DialogClose>Cancel</DialogClose>
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  )
}
