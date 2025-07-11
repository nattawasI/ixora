import { ComponentProps, useState } from 'react'
import { cn } from '@/libs/utils/cn'
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  type DialogProps,
} from '@radix-ui/react-dialog'
import { buttonSquareVariants } from '@/components/ui/button-square'
import { Close, ChevronLeft, ChevronRight } from '@/components/ui/icons-outline'
import {
  Close as CloseColor,
  ChevronLeft as ChevronLeftColor,
  ChevronRight as ChevronRightColor,
} from '@/components/ui/icons-color'

const PageModal = Dialog

type PageModalContentProps = React.ComponentProps<typeof DialogContent> & {
  overlayRef?: React.Ref<HTMLDivElement>
  contentSize: 'small' | 'large'
}

const PageModalContent = ({ overlayRef, contentSize, onAnimationEnd, children, ...props }: PageModalContentProps) => {
  const [animated, setAnimated] = useState(false)
  return (
    <DialogPortal>
      <DialogOverlay
        ref={overlayRef}
        id="page-dialog-overlay"
        className={cn(
          'fixed inset-0 z-30 bg-black/70',
          animated ? 'scrollbar-hidden overflow-y-auto' : 'overflow-hidden',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-300',
        )}
        onAnimationEnd={(e) => {
          if (e.target !== e.currentTarget) return
          setAnimated(true)
          onAnimationEnd?.(e)
        }}
      >
        <DialogContent
          id="page-dialog-content"
          className={cn(
            contentSize === 'large' ? 'article-detail-container-large' : 'article-detail-container-small',
            'outline-none max-lg:mt-[3.75rem] max-lg:h-[calc(100dvh-3.75rem)] lg:my-[5.625rem]',
          )}
          {...props}
        >
          {children}
        </DialogContent>
      </DialogOverlay>
    </DialogPortal>
  )
}

const PageModalTitle = DialogTitle

const PageModalDescription = DialogDescription

const PageModalButtonsMobile = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('bg-gray-light-2 flex gap-x-2.5 px-4.75 py-4 lg:hidden', className)} {...props} />
}

type PageModalControlProps = { variant: 'desktop' | 'mobile'; isInvisible?: boolean }

const PageModalPrev = ({
  variant,
  isInvisible,
  className,
  ...props
}: ComponentProps<'button'> & PageModalControlProps) => {
  return (
    <button
      type="button"
      data-invisible={isInvisible ? true : undefined}
      className={buttonSquareVariants({
        theme: variant === 'desktop' ? 'gray' : 'default',
        className: cn(
          variant === 'desktop' ? 'fixed bottom-0 left-0 max-lg:hidden' : 'hover-icon-stroke-white',
          'data-[invisible=true]:pointer-events-none data-[invisible=true]:invisible',
          'disabled:cursor-default',
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
  isInvisible,
  className,
  ...props
}: ComponentProps<'button'> & PageModalControlProps) => {
  return (
    <button
      type="button"
      data-invisible={isInvisible ? true : undefined}
      className={buttonSquareVariants({
        theme: variant === 'desktop' ? 'gray' : 'default',
        className: cn(
          variant === 'desktop' ? 'fixed right-0 bottom-0 max-lg:hidden' : 'hover-icon-stroke-white',
          'data-[invisible=true]:pointer-events-none data-[invisible=true]:invisible',
          'disabled:cursor-default',
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
  PageModal,
  PageModalContent,
  PageModalTitle,
  PageModalDescription,
  PageModalPrev,
  PageModalNext,
  PageModalClose,
  PageModalButtonsMobile,
  type DialogProps as PageModalProps,
  type PageModalContentProps,
}
