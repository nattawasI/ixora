'use client'

import { Portal } from '@radix-ui/react-portal'
import { motion } from 'motion/react'

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
}

const CopiedLabel = ({ copied }: { copied: boolean }) => {
  return (
    <Portal>
      {copied ? (
        <motion.div
          initial="initial"
          animate="animate"
          variants={variants}
          className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-white"
        >
          <span className="bg-blue/50 typo-body-3 flex size-full h-6.5 items-center rounded-full px-2.5 font-bold text-white uppercase">
            LINK COPIED!
          </span>
        </motion.div>
      ) : null}
    </Portal>
  )
}

export { CopiedLabel }
