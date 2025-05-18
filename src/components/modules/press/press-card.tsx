'use client'

import { CardPress, type CardPressProps } from '@/components/ui/card-press'

const PressCard = ({ ...props }: CardPressProps) => {
  /** แยก file ออกมาเป็น 'use client' เพื่อทำ hover cursor */
  return <CardPress {...props} />
}

export { PressCard }
