'use client'

import { cn } from '@/libs/utils/cn'
import { usePathname } from 'next/navigation'
import { buttonSquareVariants } from '@/components/ui/button-square'
import { Facebook, Line, X, Pinterest, Email } from '@/components/ui/icons'
import {
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
  PinterestShareButton,
  EmailShareButton,
} from 'react-share'
import { CopyLinkButton } from './copy-link-button'

type SnsShareProps = { label: string; title: string; coverImage: string }

const SnsShare = ({ label, title, coverImage }: SnsShareProps) => {
  const pathname = usePathname()
  const shareUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`

  return (
    <div
      className={cn(
        'flex items-center',
        'max-lg:flex-col max-lg:items-center max-lg:gap-y-2.5',
        'lg:flex-row lg:justify-between lg:gap-x-4 lg:py-7',
      )}
    >
      <p className="typo-body-2 text-gray font-bold">{label}</p>
      <div className="flex gap-x-3.75">
        <FacebookShareButton
          resetButtonStyle={false}
          aria-label="Facebook Share"
          url={shareUrl}
          className={buttonSquareVariants()}
        >
          <Facebook className="size-5.5" />
        </FacebookShareButton>
        <LineShareButton
          resetButtonStyle={false}
          aria-label="Line Share"
          url={shareUrl}
          title={title}
          className={buttonSquareVariants()}
        >
          <Line className="size-5.5" />
        </LineShareButton>
        <TwitterShareButton
          resetButtonStyle={false}
          aria-label="X Share"
          url={shareUrl}
          title={title}
          className={buttonSquareVariants()}
        >
          <X className="size-5.5" />
        </TwitterShareButton>
        <PinterestShareButton
          resetButtonStyle={false}
          aria-label="Pinterest Share"
          url={shareUrl}
          media={coverImage}
          className={buttonSquareVariants()}
        >
          <Pinterest className="size-5.5" />
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
          <Email className="size-5.5" />
        </EmailShareButton>
      </div>
    </div>
  )
}

export { SnsShare, type SnsShareProps }
