'use client'

import { useState } from 'react'
import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle, DrawerClose } from '@/components/ui/drawer'
import { IconLogo } from '@/components/ui/icons-color'
import { HamburgerMenu } from '@/components/ui/icons-color/hamburger-menu'
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
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger aria-label="Open global navigation" className="block">
        <HamburgerMenu />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerTitle>Global Navigation</DrawerTitle>
        <DrawerClose aria-label="Close global navigation" className="block">
          <IconLogo className="size-[1.625rem]" />
        </DrawerClose>
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
      </DrawerContent>
    </Drawer>
  )
}

export { GlobalNavigation }
