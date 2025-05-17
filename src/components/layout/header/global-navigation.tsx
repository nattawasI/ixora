'use client'

import { useState } from 'react'
import { cn } from '@/libs/utils/cn'
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
import { HamburgerMenu } from '@/components/ui/icons-color/hamburger-menu'
import Link from 'next/link'
import type { NavigationItemType } from '@/components/layout/type'

const menuItems: NavigationItemType[] = [
  { label: 'PROJECTS', href: '/' },
  { label: 'AWARDS & PRESS', href: '/awards' },
  { label: 'PEOPLE', href: '/people' },
  { label: 'CAREER', href: '/career' },
  { label: 'CONTACT', href: '/contact' },
]

const GlobalNavigation = () => {
  const [open, setOpen] = useState(false)
  const [isShowMenu, setIsShowMenu] = useState(false)

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (open) {
          setOpen(true)
          queueMicrotask(() => setIsShowMenu(true))
        } else {
          setIsShowMenu(false)
        }
      }}
    >
      <DialogTrigger aria-label="Open global navigation" className="flex size-[1.625rem] items-center justify-center">
        <HamburgerMenu isShowMenu={isShowMenu} />
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay
          className={cn(
            'fixed inset-0 z-20 bg-black/25',
            'data-[state=closed]:animate-out data-[state=open]:animate-in',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          )}
        />
        <DialogContent aria-describedby={undefined} className="fixed top-0 left-0 z-20 h-full">
          <VisuallyHidden>
            <DialogTitle>Global Navigation</DialogTitle>
          </VisuallyHidden>
          <DialogClose
            aria-label="Close global navigation"
            className="absolute top-4.25 left-4 z-[1] block size-[1.625rem] lg:top-9.25 lg:left-10"
          >
            <HamburgerMenu isShowMenu={isShowMenu} />
          </DialogClose>
          <div
            onTransitionEnd={(e) => {
              if (e.target === e.currentTarget && !isShowMenu) {
                setOpen(false) // ปิด Dialog หลังจาก animation เสร็จ
              }
            }}
            className={cn(
              'h-full w-[10rem] bg-white p-4 pt-16 md:w-[14.188rem] lg:p-10 lg:pt-21.5',
              'transition-transform duration-300',
              isShowMenu ? 'translate-x-0' : '-translate-x-full',
            )}
          >
            <nav className="mt-5 space-y-1.25">
              {menuItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-blue typo-body-2 text-gray inline-block font-bold uppercase transition-colors duration-300"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}

export { GlobalNavigation }
