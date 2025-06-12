import { ComponentProps } from 'react'
import { cn } from '@/libs/utils/cn'
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@radix-ui/react-dialog'
import { buttonSquareVariants } from '@/components/ui/button-square'
import { Close, ChevronLeft, ChevronRight } from '@/components/ui/icons-outline'
import {
  Close as CloseColor,
  ChevronLeft as ChevronLeftColor,
  ChevronRight as ChevronRightColor,
} from '@/components/ui/icons-color'

const PageDetailModal = Dialog

const PageDetailModalContent = ({
  contentSize,
  children,
  ...props
}: {
  contentSize: 'small' | 'large'
} & React.ComponentProps<typeof DialogContent>) => {
  return (
    <DialogPortal>
      <DialogOverlay
        className={cn(
          'scrollbar-hidden fixed inset-0 z-30 overflow-y-auto bg-black/70',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        )}
      >
        <DialogContent
          className={cn(
            'group',
            contentSize === 'large' ? 'article-detail-container-large' : 'article-detail-container-small',
            'outline-none max-lg:mt-[3.75rem] max-lg:h-[calc(100svh-3.75rem)] lg:my-[5.625rem]',
          )}
          {...props}
        >
          {children}
        </DialogContent>
      </DialogOverlay>
    </DialogPortal>
  )
}

const PageDetailModalTitle = DialogTitle

const PageDetailModalDescription = DialogDescription

const PageModalButtonsMobile = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('mt-4 flex gap-x-2.5 px-4 pb-4 lg:hidden', className)} {...props} />
}

const PageModalPrev = ({
  variant,
  className,
  ...props
}: ComponentProps<'button'> & { variant: 'desktop' | 'mobile' }) => {
  return (
    <button
      type="button"
      className={buttonSquareVariants({
        theme: variant === 'desktop' ? 'gray' : 'default',
        className: cn(
          variant === 'desktop' ? 'fixed bottom-0 left-0 max-lg:hidden' : 'hover-icon-stroke-white',
          className,
        ),
      })}
      {...props}
    >
      {variant === 'desktop' ? <ChevronLeft /> : <ChevronLeftColor />}
    </button>
  )
}

const PageModalNext = ({
  variant,
  className,
  ...props
}: ComponentProps<'button'> & { variant: 'desktop' | 'mobile' }) => {
  return (
    <button
      type="button"
      className={buttonSquareVariants({
        theme: variant === 'desktop' ? 'gray' : 'default',
        className: cn(
          variant === 'desktop' ? 'fixed right-0 bottom-0 max-lg:hidden' : 'hover-icon-stroke-white',
          className,
        ),
      })}
      {...props}
    >
      {variant === 'desktop' ? <ChevronRight /> : <ChevronRightColor />}
    </button>
  )
}

const PageModalClose = ({
  variant,
  className,
  label,
  ...props
}: Omit<React.ComponentProps<typeof DialogClose>, 'asChild'> & { variant: 'desktop' | 'mobile'; label?: string }) => {
  return (
    <DialogClose
      className={buttonSquareVariants({
        theme: variant === 'desktop' ? 'gray' : 'default',
        className: cn(
          variant === 'desktop' ? 'fixed top-0 right-0 max-lg:hidden' : 'hover-icon-stroke-white flex-1',
          className,
        ),
      })}
      {...props}
    >
      {variant === 'desktop' ? <Close /> : <CloseColor />}
      {label}
    </DialogClose>
  )
}

export {
  PageDetailModal,
  PageDetailModalContent,
  PageDetailModalTitle,
  PageDetailModalDescription,
  PageModalPrev,
  PageModalNext,
  PageModalClose,
  PageModalButtonsMobile,
}
