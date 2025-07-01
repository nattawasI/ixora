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

const fadeInVariants: Variants = {
  initial: { opacity: 0 },
  animate: (custom: { duration: number }) => ({
    opacity: 1,
    transition: {
      duration: custom.duration,
    },
  }),
}

export const MotionStaggerRoot = ({ children }: { children: React.ReactElement }) => {
  return (
    <MotionSlot variants={staggerRootVariants} initial="initial" animate="animate">
      {children}
    </MotionSlot>
  )
}

export const MotionStaggerItem = ({ children }: { children: React.ReactElement }) => {
  return <MotionSlot variants={staggerItemVariants}>{children}</MotionSlot>
}

export const MotionPageFade = ({ children, duration = 0.7 }: { children: React.ReactElement; duration?: number }) => {
  return (
    <MotionSlot variants={fadeInVariants} initial="initial" animate="animate" custom={{ duration }}>
      {children}
    </MotionSlot>
  )
}
