'use client'

import { usePathname } from 'next/navigation'
import { buttonSquareVariants } from '@/components/ui/button-square'
import { Facebook, Line, X, Pinterest, Email } from '@/components/ui/icons-outline'
import {
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
  PinterestShareButton,
  EmailShareButton,
} from 'react-share'
import { CopyLinkButton } from './copy-link-button'

type SnsShareItemsProps = { title: string; coverImage: string }

const SnsShareItems = ({ title, coverImage }: SnsShareItemsProps) => {
  const pathname = usePathname()
  const shareUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`

  return (
    <>
      <FacebookShareButton
        resetButtonStyle={false}
        aria-label="Facebook Share"
        url={shareUrl}
        className={buttonSquareVariants()}
      >
        <Facebook />
      </FacebookShareButton>
      <LineShareButton
        resetButtonStyle={false}
        aria-label="Line Share"
        url={shareUrl}
        title={title}
        className={buttonSquareVariants()}
      >
        <Line />
      </LineShareButton>
      <TwitterShareButton
        resetButtonStyle={false}
        aria-label="X Share"
        url={shareUrl}
        title={title}
        className={buttonSquareVariants()}
      >
        <X />
      </TwitterShareButton>
      <PinterestShareButton
        resetButtonStyle={false}
        aria-label="Pinterest Share"
        url={shareUrl}
        media={coverImage}
        className={buttonSquareVariants()}
      >
        <Pinterest />
      </PinterestShareButton>
      <CopyLinkButton />
      <EmailShareButton
        resetButtonStyle={false}
        aria-label="Email Share"
        url={shareUrl}
        subject="Subject"
        body="Body"
        className={buttonSquareVariants()}
      >
        <Email />
      </EmailShareButton>
    </>
  )
}

export { SnsShareItems, type SnsShareItemsProps }
