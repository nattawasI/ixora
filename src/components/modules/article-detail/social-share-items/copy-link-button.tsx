'use client'

import { ButtonSquare } from '@/components/ui/button-square'
import { CopyLink as CopyLinkIcon } from '@/components/ui/icons-outline/copy-link'
import { useClipboard } from '@/libs/hooks/use-clipboard'
import { CopiedLabel } from '@/components/modules/article-detail/social-share-items/copied-label'

const CopyLinkButton = () => {
  const { copy, copied } = useClipboard({ timeout: 1000 })

  return (
    <>
      <ButtonSquare aria-label="Copy Link" onClick={() => copy(window.location.href)}>
        <CopyLinkIcon />
      </ButtonSquare>
      <CopiedLabel copied={copied} />
    </>
  )
}

export { CopyLinkButton }
