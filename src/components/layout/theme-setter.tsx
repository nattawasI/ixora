'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const ThemeSetter = () => {
  const pathname = usePathname()

  useEffect(() => {
    const body = document.body
    const navHeader = document.getElementById('header')

    const setBackground = (element: HTMLElement | null, colorVar: string) => {
      if (element) {
        element.style.setProperty('--bg-color', `var(${colorVar})`)
      }
    }

    // กำหนดสีเริ่มต้น
    let bgColor = '--color-white'

    // เช็คเงื่อนไขตาม pathname
    if (pathname.startsWith('/projects') || pathname.startsWith('/awards') || pathname.startsWith('/press')) {
      bgColor = '--color-gray-light-2'
    }

    // ตั้งค่า background ให้กับ body และ header
    setBackground(body, bgColor)
    setBackground(navHeader, bgColor)
  }, [pathname])

  return null
}

export { ThemeSetter }
