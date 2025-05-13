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
import { IconLogo } from '@/components/ui/icons-color'
import { HamburgerMenu } from '@/components/ui/icons-color/hamburger-menu'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import Link from 'next/link'
import type { NavigationItemType } from '@/components/layout/type'

const menuItems: NavigationItemType[] = [
  { label: 'HOME', href: '/' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'AWARDS & PRESS', href: '/awards' },
  { label: 'PEOPLE', href: '/people' },
  { label: 'CAREER', href: '/career' },
  { label: 'CONTACT', href: '/contact' },
]

const GlobalNavigation = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger aria-label="Open global navigation" className="block">
        <HamburgerMenu />
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
            'fixed top-0 left-0 z-20 h-full w-[10rem] bg-white p-4 duration-300 md:w-[14.188rem] lg:p-10',
            'data-[state=closed]:animate-out data-[state=open]:animate-in',
            'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
          )}
        >
          <VisuallyHidden>
            <DialogTitle>Global Navigation</DialogTitle>
          </VisuallyHidden>
          <DialogClose aria-label="Close global navigation" className="block">
            <IconLogo className="size-[1.625rem]" />
          </DialogClose>
          <nav className="mt-5 space-y-[0.313rem]">
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
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}

export { GlobalNavigation }
