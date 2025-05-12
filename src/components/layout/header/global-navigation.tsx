'use client'

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

const menuItems: { label: string; href: string }[] = [
  { label: 'HOME', href: '/' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'AWARDS & PRESS', href: '/awards' },
  { label: 'PEOPLE', href: '/people' },
  { label: 'CAREER', href: '/career' },
  { label: 'CONTACT', href: '/contact' },
]

const GlobalNavigation = () => {
  return (
    <Dialog>
      <DialogTrigger className="block">
        <HamburgerMenu />
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0" />
        <DialogContent
          aria-describedby={undefined}
          className={cn(
            'fixed top-0 left-0 z-10 h-full w-[14.188rem] bg-white p-4 duration-300 lg:p-10',
            'data-[state=closed]:animate-out data-[state=open]:animate-in',
            'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
          )}
        >
          <VisuallyHidden>
            <DialogTitle>Global Navigation</DialogTitle>
          </VisuallyHidden>
          <DialogClose className="block">
            <IconLogo className="size-[1.625rem]" />
          </DialogClose>
          <nav className="mt-5 space-y-[0.313rem]">
            {menuItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-blue typo-body-2 text-gray inline-block font-bold transition-colors duration-300"
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
