'use client'

import { ButtonSquare, ButtonSquareProps } from '@/components/ui/button-square'
import { CopyLink as CopyLinkIcon } from '@/components/ui/icons-outline/copy-link'
import { useClipboard } from '@/libs/hooks/use-clipboard'
import { CopiedLabel } from '@/components/modules/article-detail/sns-share-items/copied-label'

const CopyLinkButton = ({ ...props }: ButtonSquareProps) => {
  const { copy, copied } = useClipboard({ timeout: 1000 })

  return (
    <>
      <ButtonSquare aria-label="Copy Link" onClick={() => copy(window.location.href)} {...props}>
        <CopyLinkIcon />
      </ButtonSquare>
      <CopiedLabel copied={copied} />
    </>
  )
}

export { CopyLinkButton }
