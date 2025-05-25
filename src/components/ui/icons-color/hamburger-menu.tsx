'use client'

import { motion } from 'framer-motion'
import { cn } from '@/libs/utils/cn'

type HamburgerMenuProps = React.ComponentProps<'div'> & {
  isShowMenu: boolean
}

const transition = { duration: 0.1 }

const HamburgerMenu = ({ isShowMenu, ...props }: HamburgerMenuProps) => {
  return (
    <div className="relative size-[1.625rem]" {...props}>
      <motion.span
        animate={{ rotate: isShowMenu ? 45 : 0, x: isShowMenu ? -2 : 0, y: isShowMenu ? -1 : 0 }}
        transition={transition}
        style={{ transformOrigin: 'right' }}
        className={cn('bg-blue-2 absolute top-2 left-0 h-0.5 w-[0.625rem] transition-all')}
      />
      <motion.span
        animate={{ rotate: isShowMenu ? -45 : 0, x: isShowMenu ? 2 : 0, y: isShowMenu ? -1 : 0 }}
        transition={transition}
        style={{ transformOrigin: 'left' }}
        className={cn('bg-blue absolute top-2 right-0 h-0.5 w-[0.625rem] transition-all')}
      />
      <motion.span
        animate={{ rotate: isShowMenu ? -45 : 0, x: isShowMenu ? -2 : 0, y: isShowMenu ? 1 : 0 }}
        transition={transition}
        style={{ transformOrigin: 'right' }}
        className={cn('bg-blue absolute bottom-2 left-0 h-0.5 w-[0.625rem] transition-all')}
      />
      <motion.span
        animate={{ rotate: isShowMenu ? 45 : 0, x: isShowMenu ? 2 : 0, y: isShowMenu ? 1 : 0 }}
        transition={transition}
        style={{ transformOrigin: 'left' }}
        className={cn('bg-blue-2 absolute right-0 bottom-2 h-0.5 w-[0.625rem] transition-all')}
      />
    </div>
  )
}

export { HamburgerMenu }
