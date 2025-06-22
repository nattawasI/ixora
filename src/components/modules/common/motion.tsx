'use client'

import { motion, type Variants } from 'motion/react'
import { Slot } from '@radix-ui/react-slot'

const MotionSlot = motion.create(Slot)

const staggerRootVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
}

const staggerItemVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
}

export const MotionStaggerRoot = ({ children }: { children: React.ReactElement }) => {
  return (
    <MotionSlot variants={staggerRootVariants} initial="initial" whileInView="animate">
      {children}
    </MotionSlot>
  )
}

export const MotionStaggerItem = ({ children }: { children: React.ReactElement }) => {
  return <MotionSlot variants={staggerItemVariants}>{children}</MotionSlot>
}
