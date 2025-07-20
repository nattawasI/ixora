'use client'

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

type PageModalChevronProps = { direction: 'prev' | 'next'; isInvisible?: boolean }

const PageModalChevron = ({
  direction,
  isInvisible,
  className,
  ...props
}: ComponentProps<'button'> & PageModalChevronProps) => {
  return (
    <button
      type="button"
      data-invisible={isInvisible ? true : undefined}
      className={buttonSquareVariants({
        theme: 'gray',
        className: cn(
          'fixed bottom-0 max-lg:hidden',
          direction === 'prev' ? 'left-0' : 'right-0',
          'data-[invisible=true]:pointer-events-none data-[invisible=true]:invisible',
          'disabled:cursor-default',
          className,
        ),
      })}
      {...props}
    >
      {direction === 'prev' ? <ChevronLeft /> : <ChevronRight />}
    </button>
  )
}

const PageModalClose = ({
  className,
  ariaLabel = 'Close Modal',
  ...props
}: Omit<React.ComponentProps<typeof DialogClose>, 'asChild'> & { ariaLabel?: string }) => {
  return (
    <DialogClose
      aria-label={ariaLabel}
      onFocus={() => {
        const overlay = document.getElementById('page-dialog-overlay')
        overlay?.scrollTo({ top: 0 })
      }}
      className={buttonSquareVariants({
        theme: 'gray',
        className: cn(
          'absolute lg:fixed',
          'max-lg:top-5 max-lg:left-1/2 max-lg:size-6.5 max-lg:-translate-x-1/2 max-lg:bg-transparent max-lg:hover:bg-transparent',
          'lg:top-0 lg:right-0',
          className,
        ),
      })}
      {...props}
    >
      <Close />
    </DialogClose>
  )
}

const PageModalFooterButtons = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return <div className={cn('bg-gray-light-2 flex gap-x-2.5 px-4.75 py-4 lg:hidden', className)} {...props} />
}

const PageModalFooterClose = ({
  className,
  label,
  ...props
}: Omit<React.ComponentProps<typeof DialogClose>, 'asChild'> & { label?: string }) => {
  return (
    <DialogClose
      className={buttonSquareVariants({
        className: cn('hover-icon-stroke-white flex-1', className),
      })}
      {...props}
    >
      <CloseColor />
      {label}
    </DialogClose>
  )
}

const PageModalFooterChevron = ({
  direction,
  isInvisible,
  className,
  ...props
}: ComponentProps<'button'> & PageModalChevronProps) => {
  return (
    <button
      type="button"
      data-invisible={isInvisible ? true : undefined}
      className={buttonSquareVariants({
        className: cn(
          'hover-icon-stroke-white',
          'data-[invisible=true]:pointer-events-none data-[invisible=true]:invisible',
          'disabled:cursor-default',
          className,
        ),
      })}
      {...props}
    >
      {direction === 'prev' ? <ChevronLeftColor /> : <ChevronRightColor />}
    </button>
  )
}

export {
  PageModal,
  PageModalContent,
  PageModalTitle,
  PageModalDescription,
  PageModalChevron,
  PageModalClose,
  PageModalFooterButtons,
  PageModalFooterClose,
  PageModalFooterChevron,
  type DialogProps as PageModalProps,
  type PageModalContentProps,
}
