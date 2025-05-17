'use client'

import { useClipboard } from '@/libs/hooks/use-clipboard'
import { ButtonCopy } from '@/components/ui/button-copy'

const CopyEmail = ({ value }: { value: string }) => {
  const { copy, copied } = useClipboard()

  return <ButtonCopy isCopied={copied} onClick={() => copy(value)} />
}

export { CopyEmail }
