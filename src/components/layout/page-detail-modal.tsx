'use client'

import { cn } from '@/libs/utils/cn'
import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { buttonSquareVariants } from '@/components/ui/button-square'
import { Close, ChevronLeft, ChevronRight } from '@/components/ui/icons-outline'
import {
  Close as CloseColor,
  ChevronLeft as ChevronLeftColor,
  ChevronRight as ChevronRightColor,
} from '@/components/ui/icons-color'
import Link from 'next/link'

const PageDetailModal = ({
  contentSize,
  noDescription,
  prevHref,
  nextHref,
  children,
}: {
  contentSize: 'small' | 'large'
  noDescription?: boolean
  prevHref: string | null | undefined
  nextHref: string | null | undefined
  children?: React.ReactNode
}) => {
  const router = useRouter()
  return (
    <Dialog
      defaultOpen
      onOpenChange={() => {
        router.back() /** logic ตรงนี้อาจจะเปลี่ยนทีหลัง เพราะ modal เรามี prev, next ทำให้ไม่สามารถใช้ router.back() ได้ */
      }}
    >
      <DialogPortal>
        <DialogOverlay
          className={cn(
            'lg:scrollbar-hidden fixed inset-0 z-30 bg-black/70 max-lg:overflow-hidden lg:overflow-y-auto',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          )}
        >
          <DialogContent
            {...(noDescription && { 'aria-describedby': undefined })}
            className={cn(
              'group',
              contentSize === 'large' ? 'article-detail-container-large' : 'article-detail-container-small',
              'max-lg:scrollbar-hidden outline-none max-lg:mt-[3.75rem] max-lg:h-[calc(100svh-3.75rem)] max-lg:overflow-hidden max-lg:overflow-y-auto lg:my-[5.625rem]',
            )}
          >
            <DialogClose
              className={buttonSquareVariants({ theme: 'gray', className: 'fixed top-0 right-0 max-lg:hidden' })}
            >
              <Close />
            </DialogClose>
            <VisuallyHidden>
              <DialogTitle>Project Detail</DialogTitle>
              <DialogDescription>Project Detail</DialogDescription>
            </VisuallyHidden>
            <div className="bg-gray-light-2 group-data-[state=open]:animate-in group-data-[state=closed]:animate-out group-data-[state=closed]:fade-out-0 group-data-[state=open]:fade-in-0 group-data-[state=open]:zoom-in-95 group-data-[state=closed]:zoom-out-95">
              {children}
              <div className="mt-4 flex gap-x-2.5 px-4 pb-4 lg:hidden">
                {prevHref ? (
                  <Link
                    href={prevHref}
                    className={buttonSquareVariants({
                      className: 'hover-icon-stroke-white',
                    })}
                  >
                    <ChevronLeftColor />
                  </Link>
                ) : null}
                <DialogClose
                  className={buttonSquareVariants({
                    className: 'hover-icon-stroke-white flex-1',
                  })}
                >
                  <CloseColor />
                  <span>CLOSE</span>
                </DialogClose>
                {nextHref ? (
                  <Link
                    href={nextHref}
                    className={buttonSquareVariants({
                      className: 'hover-icon-stroke-white',
                    })}
                  >
                    <ChevronRightColor />
                  </Link>
                ) : null}
              </div>
            </div>
            {prevHref ? (
              <Link
                href={prevHref}
                className={buttonSquareVariants({ theme: 'gray', className: 'fixed bottom-0 left-0 max-lg:hidden' })}
              >
                <ChevronLeft />
              </Link>
            ) : null}
            {nextHref ? (
              <Link
                href={nextHref}
                className={buttonSquareVariants({ theme: 'gray', className: 'fixed right-0 bottom-0 max-lg:hidden' })}
              >
                <ChevronRight />
              </Link>
            ) : null}
          </DialogContent>
        </DialogOverlay>
      </DialogPortal>
    </Dialog>
  )
}

export { PageDetailModal }
