'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/libs/utils/cn'
import { useMediaQuery } from '@/libs/hooks/use-media-query'
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogClose,
} from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import {
  ProjectCategoriesNav,
  type ProjectCategoriesNavProps,
} from '@/components/modules/projects/project-categories-nav'

const ProjectCategoriesFilter = ({
  categories,
  className,
  ...props
}: React.ComponentProps<'div'> & Pick<ProjectCategoriesNavProps, 'categories'>) => {
  const isLaptopUp = useMediaQuery('(min-width: 1024px)')

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (isLaptopUp) {
      setOpen(false)
    }
  }, [isLaptopUp])

  return (
    <div className={cn('mb-5 flex items-center justify-between gap-x-5 lg:hidden', className)} {...props}>
      <p className="typo-body-2 text-blue font-bold uppercase">ALL</p>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="size-4" aria-label="Open Project categories filter">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 4L2.5 4" stroke="#009BC9" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M11 8L5 8" stroke="#89CEE7" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M9.5 12L6.5 12" stroke="#89CEE7" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay
            className={cn(
              'fixed inset-0 z-20 bg-black/25',
              'data-[state=closed]:animate-out data-[state=open]:animate-in',
              'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
            )}
          />
          <DialogContent
            aria-describedby={undefined}
            className={cn(
              'fixed top-0 right-0 z-20 h-full w-[10.375rem] bg-white p-4',
              'data-[state=closed]:animate-out data-[state=open]:animate-in',
              'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
            )}
          >
            <div className="mb-5 flex h-6.5 items-center">
              <VisuallyHidden>
                <DialogTitle>Project categories filter</DialogTitle>
              </VisuallyHidden>
              <DialogClose aria-label="Close Project categories filter" className="ml-auto size-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2L14 14" stroke="#89CEE7" />
                  <path d="M2 14L14 2" stroke="#009BC9" />
                </svg>
              </DialogClose>
            </div>
            <ProjectCategoriesNav layout="vertical" categories={categories} onSelect={() => setOpen(false)} />
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  )
}

export { ProjectCategoriesFilter }
