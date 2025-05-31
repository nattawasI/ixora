'use client'

import { ButtonSquare } from '@/components/ui/button-square'
import { CopyLink as CopyLinkIcon } from '@/components/ui/icons/copy-link'
import { useClipboard } from '@/libs/hooks/use-clipboard'

const CopyLinkButton = () => {
  const { copy, copied } = useClipboard({ timeout: 1000 })

  return (
    <ButtonSquare aria-label="Copy Link" onClick={() => copy(window.location.href)}>
      <CopyLinkIcon className="size-5.5" />
    </ButtonSquare>
  )
}

export { CopyLinkButton }
