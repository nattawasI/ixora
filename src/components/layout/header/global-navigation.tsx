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
        <HamburgerMenu className="h-auto w-[1.625rem]" />
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
            <CloseIcon className="h-auto w-[1.625rem]" isShowMenu={isShowMenu} />
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

const CloseIcon = ({ isShowMenu, ...props }: React.ComponentProps<'svg'> & { isShowMenu: boolean }) => {
  console.log(isShowMenu)
  /** use "isShowMenu" to make icon animation */
  return (
    <svg width="31" height="21" viewBox="0 0 31 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12.8694 5.97491L0.919146 5.97539L0.919145 7.81368L12.8699 7.81367L12.8694 5.97491Z" fill="#89CEE7" />
      <path d="M17.1701 14.0637L29.12 14.0637L29.12 12.2254L17.1701 12.2254L17.1701 14.0637Z" fill="#89CEE7" />
      <path d="M17.1701 5.97514L29.1199 5.97515L29.1199 7.81344L17.1696 7.8139L17.1701 5.97514Z" fill="#009BC9" />
      <path d="M12.8699 14.0639L0.919621 14.0634L0.919619 12.2251L12.8699 12.2256L12.8699 14.0639Z" fill="#009BC9" />
    </svg>
  )
}
